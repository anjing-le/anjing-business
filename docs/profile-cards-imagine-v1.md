# 个人介绍手绘卡片 V1

## V2 文案修订

使用内置 imagegen 编辑，原图和其他两张卡保留。

- 素材：`assets/profile/self-v2.webp`，源图：`assets/profile/source/self-v2.png`

最终提示词：

```text
Edit this finished paper card with minimal localized changes. Change ONLY the bottom caption to the exact Chinese sentence: 深耕计算机，探索金融与音乐等领域，持续学习，不断分享。 Set it in two centered handwritten lines: line1 深耕计算机，探索金融与音乐等领域， line2 持续学习，不断分享。 Preserve the exact illustration, Anjing character, title 自我介绍, layout, divider rules, paper texture, palette and original landscape 5:4 dimensions. Match original natural dark brown handwriting. No other added words or changes.
```

- 素材：`assets/profile/team-v2.webp`，源图：`assets/profile/source/team-v2.png`

最终提示词：

```text
Edit this finished paper card with minimal localized changes. Remove the LLM limitation: change bottom caption to exact Chinese sentence 汇集工程、算法、HR 与业务专家，协同解决实际问题。 in two centered handwritten lines, line1 汇集工程、算法、HR 与业务专家， line2 协同解决实际问题。 Replace only the central notebook heading LLM with the handwritten Chinese word 协作. Preserve everything else: title 团队介绍, four roles 工程 算法 HR 业务专家, people, pictures, layout, paper texture, colors, divider rules and landscape 5:4 dimensions. No other new words, no LLM text remaining anywhere.
```



使用内置 imagegen 生成，每张为完整卡面。沿用业务卡片的米白纸纹、居中手写标题、上下分割线与彩铅图示。原始 PNG 留存，线上使用压缩 WebP；页面负责阴影、圆角、动效与链接，不再额外叠加文字。

手机端点击放大查看，存在网站入口的卡片在大图下提供访问链接。团队介绍没有独立入口，点击仅看大图。

## 自我介绍

文案：深耕计算机，探索金融与音乐，持续学习，不断创造。

- 源图：`assets/profile/source/self-v1.png`
- 页面素材：`assets/profile/self-v1.webp`

最终提示词：

```text
Use case: infographic-diagram. Create ONE finished website introduction card artwork, landscape 5:4 aspect ratio, 1200x960 composition. Reference image1 is ONLY the established visual style and composition: warm ivory subtly textured paper edge-to-edge, centered natural dark-brown handwritten Chinese title at top, thin pencil divider above and below the main illustration, low-saturation colored-pencil/crayon diagrams in the middle, a short hand-lettered Chinese sentence at bottom. Match its understated handmade paper, pencil grain, gentle pastel blue/ochre/sage, clear legibility and spacious composition. No photographic props, no wood, no mockup, no surrounding background, no tilted card, no drop shadow, no giant decorative frames. Full-bleed rectangular artwork, website will supply rounded corners and shadow. All text and pictures rendered in this single image. No extra slogans, no claims of awards, employment, memberships or client results. No website addresses or small disclaimer. Footer text can wrap naturally into two centered lines with generous margins. Do NOT copy any of reference image1's text or its exact illustration.  Exact title at top: "自我介绍". Main visual: A warm yellow-haired Anjing mascot in black hoodie (reference image2 character identity ONLY, do not copy its wood background) at a desk with three coherent areas: laptop/code notebook labeled 计算机, a finance notebook with simple chart labeled 金融, music manuscript and headphones labeled 音乐. Connect these three interests through a flowing pencil path, ending in a small open sketchbook of ideas. An integrated conceptual illustration, not three unrelated cliparts. Exact bottom sentence: "深耕计算机，探索金融与音乐，持续学习，不断创造。".
```

## 团队介绍

文案：汇集 LLM 工程、算法、HR 与业务专家，协同解决实际问题。

- 源图：`assets/profile/source/team-v1.png`
- 页面素材：`assets/profile/team-v1.webp`

最终提示词：

```text
Use case: infographic-diagram. Create ONE finished website introduction card artwork, landscape 5:4 aspect ratio, 1200x960 composition. Reference image1 is ONLY the established visual style and composition: warm ivory subtly textured paper edge-to-edge, centered natural dark-brown handwritten Chinese title at top, thin pencil divider above and below the main illustration, low-saturation colored-pencil/crayon diagrams in the middle, a short hand-lettered Chinese sentence at bottom. Match its understated handmade paper, pencil grain, gentle pastel blue/ochre/sage, clear legibility and spacious composition. No photographic props, no wood, no mockup, no surrounding background, no tilted card, no drop shadow, no giant decorative frames. Full-bleed rectangular artwork, website will supply rounded corners and shadow. All text and pictures rendered in this single image. No extra slogans, no claims of awards, employment, memberships or client results. No website addresses or small disclaimer. Footer text can wrap naturally into two centered lines with generous margins. Do NOT copy any of reference image1's text or its exact illustration.  Exact title at top: "团队介绍". Main visual: An integrated collaboration diagram: four human teammates with different notebooks, smoothly connected around one central LLM project worktable. Exact short role labels 工程, 算法, HR, 业务专家. Center has a shared notebook labeled LLM, with code, model nodes, conversation and business flow icons. Show collaboration and complementary skills. No corporate logos, no invented credentials, no team headcount claim. Avoid generic row of floating heads. Exact bottom sentence: "汇集 LLM 工程、算法、HR 与业务专家，协同解决实际问题。".
```

## 开源作品

文案：把想法做成工具与项目，用作品呈现能力。

- 源图：`assets/profile/source/works-v1.png`
- 页面素材：`assets/profile/works-v1.webp`

最终提示词：

```text
Use case: infographic-diagram. Create ONE finished website introduction card artwork, landscape 5:4 aspect ratio, 1200x960 composition. Reference image1 is ONLY the established visual style and composition: warm ivory subtly textured paper edge-to-edge, centered natural dark-brown handwritten Chinese title at top, thin pencil divider above and below the main illustration, low-saturation colored-pencil/crayon diagrams in the middle, a short hand-lettered Chinese sentence at bottom. Match its understated handmade paper, pencil grain, gentle pastel blue/ochre/sage, clear legibility and spacious composition. No photographic props, no wood, no mockup, no surrounding background, no tilted card, no drop shadow, no giant decorative frames. Full-bleed rectangular artwork, website will supply rounded corners and shadow. All text and pictures rendered in this single image. No extra slogans, no claims of awards, employment, memberships or client results. No website addresses or small disclaimer. Footer text can wrap naturally into two centered lines with generous margins. Do NOT copy any of reference image1's text or its exact illustration.  Exact title at top: "开源作品". Main visual: An integrated progression from a sketched idea notebook to a laptop with readable code glyphs, then a neatly organized toolbox containing several small software project windows. Pencil arrows connect idea -> building -> working tools. Exact short labels 想法, 构建, 作品. Tiny branch/repository symbol is fine, no copied platform logo. The final tools are recognizable as a terminal, notes window and small dashboard, not claimed named products. Show real making in warm detailed colored-pencil style. Exact bottom sentence: "把想法做成工具与项目，用作品呈现能力。".
```

## Happy Journey

文案：连接垂直领域的知识与实践，让探索成为有方向的学习之旅。

- 源图：`assets/profile/source/journey-v1.png`
- 页面素材：`assets/profile/journey-v1.webp`

最终提示词：

```text
Use case: infographic-diagram. Create ONE finished website introduction card artwork, landscape 5:4 aspect ratio, 1200x960 composition. Reference image1 is ONLY the established visual style and composition: warm ivory subtly textured paper edge-to-edge, centered natural dark-brown handwritten Chinese title at top, thin pencil divider above and below the main illustration, low-saturation colored-pencil/crayon diagrams in the middle, a short hand-lettered Chinese sentence at bottom. Match its understated handmade paper, pencil grain, gentle pastel blue/ochre/sage, clear legibility and spacious composition. No photographic props, no wood, no mockup, no surrounding background, no tilted card, no drop shadow, no giant decorative frames. Full-bleed rectangular artwork, website will supply rounded corners and shadow. All text and pictures rendered in this single image. No extra slogans, no claims of awards, employment, memberships or client results. No website addresses or small disclaimer. Footer text can wrap naturally into two centered lines with generous margins. Do NOT copy any of reference image1's text or its exact illustration.  Exact title at top: "Happy Journey". Main visual: One inviting handdrawn learning journey map across an open book, path winds through a few distinct knowledge areas represented by code notebook, finance chart and music notes. Three stepping stones along the path labeled 理解, 实践, 积累. An open notebook and tiny flag mark continued exploration, not graduation or guaranteed outcome. Connected coherent map, spacious, no dense tiny labels. Exact bottom sentence: "连接垂直领域的知识与实践，让探索成为有方向的学习之旅。".
```


