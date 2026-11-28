# 主木牌简介与交互

## 定制服务文案与跳转提示

主牌文案改为两行「为你的需求」「专属打造」。内置 imagegen 生成透明文字层，源图 `assets/plaques/source/custom-hand-v2.png`，线上素材 `assets/plaques/custom-hand-v2.webp`。

可跳转卡片在悬停上浮或键盘聚焦时显示暗金色细实线，手机端常驻 ↗ 提示。电脑端整卡跳转；手机端先放大，在大图下通过「访问网站 ↗」跳转。无网址的展示卡片不加跳转标记。

最终图片提示词：

```text
Edit only the wording of this transparent Chinese lettering asset. Exact first line 为你的需求, exact second line 专属打造. Remove all old words, specifically no 场景 or 工具. Preserve the natural warm dark-brown pencil handwriting, subtle grain, centered two-line composition and spacing of the input, first line slightly smaller, second slightly emphasized. Keep the same canvas size and genuine transparent background. No images, icons, rules, frame or wood background.
```


2026-11-28：主木牌改为纯文字简介。采用 Imagine 生成的透明底自然手写字，暖棕色铅笔质感，不添加插画、图标或说明小字。木纹与环扣仍由原页面渲染。

| 业务 | 简介 |
| --- | --- |
| 知识付费 | 面向 LLM 时代的职业成长 |
| 项目合作 | 从业务问题到方案落地 |
| 定制服务 | 为你的场景，打造专属工具 |

默认仅露出顶部的业务名称标签；悬停整块木牌下拉，同时展开下方服务卡片，只露短环扣，不翻转。移到内容卡片上继续展示；移开后短暂延迟收回。点击木牌后固定展示，点击空白处收回。已固定时悬停其他业务可暂时预览，移开恢复固定业务。移动端通过点击切换。下方服务卡片与安静个人名牌保留原有交互。

## 生成素材

生成方式：内置 imagegen，编辑透明底文字层；参考用户 CLI / Agent 卡片的手写字体，参考图中的插画与界面不复用。PNG 源图留存，线上使用压缩 WebP，构建时按内容指纹生成文件名。

### learning

- 源图：`assets/plaques/source/learning-hand-v1.png`
- 页面素材：`assets/plaques/learning-hand-v1.webp`

提示词：

```text
Edit the input lettering layer: change ONLY the lettering STYLE to match the natural hand-lettered quality of 'CLI / Agent' and the handwritten Chinese sentence in image2. Image1 is the EDIT TARGET; image2 is ONLY a font/handwriting reference, NEVER copy its illustrations, UI, paper or words. Preserve transparent background, portrait text layout and exact wording of image1. Natural mature everyday handwriting with soft pencil/charcoal grain, gently irregular strokes and spacing, slightly relaxed baseline, clean and confidently legible. NOT Song/Ming serif, NOT a printed typeface, NOT heavy rectangular block letters, NOT formal calligraphy, NOT sweeping brush flourishes, NOT childish cartoon lettering. Dark warm-brown charcoal ink that blends with light wood. Keep two centered lines, first modestly smaller, second only gently emphasized, with generous clean transparent margins. Absolutely no pictures, icons, decorative symbols, lines, border, background panel or added text. Exact line1 '面向 LLM 时代的'; exact line2 '职业成长'. Uppercase LLM in relaxed natural handwritten Latin strokes.
```

### cooperation

- 源图：`assets/plaques/source/cooperation-hand-v1.png`
- 页面素材：`assets/plaques/cooperation-hand-v1.webp`

提示词：

```text
Edit the input lettering layer: change ONLY the lettering STYLE to match the natural hand-lettered quality of 'CLI / Agent' and the handwritten Chinese sentence in image2. Image1 is the EDIT TARGET; image2 is ONLY a font/handwriting reference, NEVER copy its illustrations, UI, paper or words. Preserve transparent background, portrait text layout and exact wording of image1. Natural mature everyday handwriting with soft pencil/charcoal grain, gently irregular strokes and spacing, slightly relaxed baseline, clean and confidently legible. NOT Song/Ming serif, NOT a printed typeface, NOT heavy rectangular block letters, NOT formal calligraphy, NOT sweeping brush flourishes, NOT childish cartoon lettering. Dark warm-brown charcoal ink that blends with light wood. Keep two centered lines, first modestly smaller, second only gently emphasized, with generous clean transparent margins. Absolutely no pictures, icons, decorative symbols, lines, border, background panel or added text. Exact line1 '从业务问题'; exact line2 '到方案落地'.
```

### custom

- 源图：`assets/plaques/source/custom-hand-v1.png`
- 页面素材：`assets/plaques/custom-hand-v1.webp`

提示词：

```text
Edit the input lettering layer: change ONLY the lettering STYLE to match the natural hand-lettered quality of 'CLI / Agent' and the handwritten Chinese sentence in image2. Image1 is the EDIT TARGET; image2 is ONLY a font/handwriting reference, NEVER copy its illustrations, UI, paper or words. Preserve transparent background, portrait text layout and exact wording of image1. Natural mature everyday handwriting with soft pencil/charcoal grain, gently irregular strokes and spacing, slightly relaxed baseline, clean and confidently legible. NOT Song/Ming serif, NOT a printed typeface, NOT heavy rectangular block letters, NOT formal calligraphy, NOT sweeping brush flourishes, NOT childish cartoon lettering. Dark warm-brown charcoal ink that blends with light wood. Keep two centered lines, first modestly smaller, second only gently emphasized, with generous clean transparent margins. Absolutely no pictures, icons, decorative symbols, lines, border, background panel or added text. Exact line1 '为你的场景'; exact line2 '打造专属工具'.
```



## 材质与尺寸补充

2026-11-28：业务标题上方增加 CSS 内凹木刻分割线，使用槽内暗影与下缘反光模拟刻痕。主牌金属环加宽加厚，上端通过短金属连接件延伸到页面顶部，避免悬空。三组服务卡片采用相同基础尺寸，单张也不放大，移动端单卡居中并与双列中的卡片等宽。

2026-11-28 环扣修订：去掉直金属杆拼接，改用轻量 SVG 绘制短木色织带折返扣住金属环的结构；环前后分层、接触遮挡和金属明暗独立绘制。页面交互与内容卡片尺寸保持不变。

2026-11-28 最终取舍：主木牌展开时顶部保留 5% 在视口外，露出约 95%；隐藏环扣、挂带与穿孔效果，不再展示悬挂五金。原悬停联动、点击固定与点击空白收回保留。

## 安静个人名牌与入口

2026-11-28：安静个人名牌统一为顶部收起、下拉露出约95%、悬停联动、点击固定和点击空白收回。保留人物木牌素材，隐藏挂带与金属环。下方先设置四个入口：个人主页 https://anjing.cc/；GitHub https://github.com/anjing-le；开源作品暂接现有作品站 https://product.anjing.cc/；Happy Journey https://happy-journey.anjing.cc/。本轮只确定名称与网址，具体介绍与卡片内容待共同设计。手机端四张入口为两行两列。

## 四张介绍卡片文案首版

- 自我介绍：深耕计算机，探索金融与音乐，持续学习，不断创造。
- 团队介绍：汇集 LLM 工程、算法、HR 与业务专家，协同解决实际问题。
- 开源作品：把想法做成工具与项目，用作品呈现能力。
- Happy Journey：连接垂直领域的知识与实践，让探索成为有方向的学习之旅。

2026-11-28：上述文案经用户确认先发布，之后逐卡打磨。团队介绍替换原 GitHub 卡片，尚无团队独立落地页，先只展示介绍；其他三张保留现有网站入口。

2026-11-28 点击规则最终调整：所有设备有网址即整卡直接跳转；无网址卡片只展示，使用 article 而非按钮，不响应点击、不打开大图、不显示手形鼠标或链接标记。取消移动端“点开放大”提示。保留悬停上浮效果。

## 联系入口与鼠标

2026-11-28：用户指定公开联系微信 daxingbomei。悬停头像显示欢迎气泡，点击头像复制微信并保持个人卡片展开；复制失败时展示可手动复制的微信号。头像下气泡提示添加时注明来意。点击空白收起。可点击元素恢复原自定义手形，普通区域与无链接卡片保留原自定义箭头。

后续转化讨论：具体需求场景、真实案例与明确交付、沟通时提供当前情况/目标/期望时间；本轮不添加未经确认的案例与承诺。

2026-11-28 联系气泡视觉：复用 anjing-site 的 IntroSpeechCloud 云朵轮廓和 Huninn 字体，调整尾巴朝向头像。字体按实际气泡文字生成 WOFF2 子集，OFL 授权随项目保留，避免远程字体和整包中文字体加载。复制微信与其他交互保持不变。
