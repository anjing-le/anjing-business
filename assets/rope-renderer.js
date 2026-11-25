/* Procedural three-strand cord. Geometry and lighting are calculated on the GPU. */
window.createRopeRenderer = function (stage, cards, onFallback = () => {}) {
  const canvas = document.createElement('canvas');
  canvas.className = 'rope-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  const gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false, powerPreference: 'low-power' });
  if (!gl) { stage.classList.add('rope-fallback'); return { ready: false }; }
  stage.append(canvas);
  const compile = (type, source) => {
    const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
    return shader;
  };
  const program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, `
    precision highp float;
    attribute vec3 param;
    uniform vec2 viewport, start, end;
    uniform float radius, twist, bend;
    uniform lowp float shadow;
    varying mediump vec3 normal;
    varying mediump float along, around;
    void main() {
      float t=param.x, circle=param.y, phase=param.z;
      vec2 delta=end-start; float span=max(1.,length(delta));
      vec2 axis=delta/span, lateral=vec2(-axis.y,axis.x);
      float k=6.2831853/18.+twist/span;
      float phi=t*span*k+phase;
      float r=radius*.48;
      vec3 side=vec3(lateral,0.), depth=vec3(0.,0.,1.);
      vec3 radial=side*cos(phi)+depth*sin(phi);
      vec3 tangent=normalize(vec3(axis,0.)+r*k*(-side*sin(phi)+depth*cos(phi)));
      vec3 binormal=normalize(cross(tangent,radial));
      vec3 n=normalize(radial*cos(circle)+binormal*sin(circle));
      vec2 center=mix(start,end,t)+lateral*bend*pow(sin(t*3.14159265),2.);
      vec3 p=vec3(center,0.)+radial*r+n*radius*.57;
      if(shadow>.5) p.xy+=vec2(3.5,3.);
      gl_Position=vec4(p.x/viewport.x*2.-1.,1.-p.y/viewport.y*2.,-p.z/64.,1.);
      normal=n;along=t*span;around=circle;
    }
  `));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, `
    precision mediump float;
    uniform lowp float shadow;
    varying mediump vec3 normal;
    varying mediump float along, around;
    void main() {
      vec3 n=normalize(normal);
      if(shadow>.5){gl_FragColor=vec4(.20,.14,.08,.12*pow(abs(n.z),.8));return;}
      vec3 light=normalize(vec3(-.65,-.5,1.));
      float diffuse=max(0.,dot(n,light));
      float glint=pow(max(0.,dot(reflect(-light,n),vec3(0.,0.,1.))),22.);
      float fiber=.025*sin(around*24.+along*.7)+.012*sin(around*49.-along*1.2);
      vec3 base=vec3(.67,.49,.29);
      vec3 color=base*(.50+.56*diffuse+fiber)+vec3(.96,.84,.63)*glint*.10;
      gl_FragColor=vec4(color,1.);
    }
  `));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
  gl.useProgram(program);
  const vertices=[], indices=[], sections=128, sides=7;
  for(let strand=0;strand<3;strand++) {
    const offset=vertices.length/3;
    for(let j=0;j<=sections;j++) for(let i=0;i<=sides;i++) vertices.push(j/sections,i/sides*Math.PI*2,strand*Math.PI*2/3);
    for(let j=0;j<sections;j++) for(let i=0;i<sides;i++) {
      const a=offset+j*(sides+1)+i,b=a+sides+1;
      indices.push(a,b,a+1,a+1,b,b+1);
    }
  }
  gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);
  const param=gl.getAttribLocation(program,'param');gl.enableVertexAttribArray(param);gl.vertexAttribPointer(param,3,gl.FLOAT,false,0,0);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(indices),gl.STATIC_DRAW);
  const uniform=Object.fromEntries(['viewport','start','end','radius','twist','bend','shadow'].map(name=>[name,gl.getUniformLocation(program,name)]));
  for(const card of cards) {
    const origin=document.createElement('span');origin.className='rope-origin';card.rig.append(origin);
    const socket=document.createElement('span');socket.className='rope-socket';card.unit.querySelector('.badge-turn').append(socket);
    card.ropeOrigin=origin;card.ropeSocket=socket;
  }
  gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0,0,0,0);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let frame=0,last=0,width=0,height=0,intersecting=true,lost=false;
  function render(time) {
    frame=0;
    if(document.hidden||!intersecting||lost)return;
    if(time-last>=1000/30) {
      last=time;
      const rect=stage.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,1.5);
      const w=Math.round(rect.width*dpr),h=Math.round(rect.height*dpr);
      if(w!==width||h!==height){canvas.width=width=w;canvas.height=height=h;gl.viewport(0,0,w,h);}
      gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
      gl.uniform2f(uniform.viewport,rect.width,rect.height);
      // Read all attachment points together after the existing animation has updated.
      const ropes=cards.map(card=>{
        const a=card.ropeOrigin.getBoundingClientRect(),b=card.ropeSocket.getBoundingClientRect();
        return {card,a:[a.x-rect.x,a.y-rect.y],b:[b.x-rect.x,b.y-rect.y]};
      }).filter(rope=>rope.b[1]>0);
      for(let pass=0;pass<2;pass++) {
        if(pass===0)gl.disable(gl.DEPTH_TEST);else gl.enable(gl.DEPTH_TEST);
        gl.uniform1f(uniform.shadow,pass===0?1:0);
        for(const rope of ropes) {
          const card=rope.card;
          gl.uniform2fv(uniform.start,rope.a);gl.uniform2fv(uniform.end,rope.b);
          gl.uniform1f(uniform.radius,card.index===3?2.7:rect.width<=600?3.2:4.7);
          gl.uniform1f(uniform.twist,Math.PI*card.turn);
          gl.uniform1f(uniform.bend,(card.flex||0)*.2);
          gl.drawElements(gl.TRIANGLES,indices.length,gl.UNSIGNED_SHORT,0);
        }
      }
    }
    if(!reduced.matches)frame=requestAnimationFrame(render);
  }
  function wake(){if(!frame&&!document.hidden&&intersecting&&!lost){last=-Infinity;frame=requestAnimationFrame(render);}}
  new ResizeObserver(wake).observe(stage);
  new IntersectionObserver(entries=>{intersecting=entries[0].isIntersecting;if(!intersecting&&frame){cancelAnimationFrame(frame);frame=0;}else wake();}).observe(stage);
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&frame){cancelAnimationFrame(frame);frame=0;}else wake();});
  reduced.addEventListener('change',wake);
  const state={ready:true,wake};
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;state.ready=false;canvas.hidden=true;stage.classList.add('rope-fallback');if(frame)cancelAnimationFrame(frame);frame=0;onFallback();});
  wake();
  return state;
};
