# 主木牌简介与交互

2026-11-28：主木牌改为纯文字简介。采用 Imagine 生成的透明底自然手写字，暖棕色铅笔质感，不添加插画、图标或说明小字。木纹与环扣仍由原页面渲染。

| 业务 | 简介 |
| --- | --- |
| 知识付费 | 面向 LLM 时代的职业成长 |
| 项目合作 | 从业务问题到方案落地 |
| 定制服务 | 为你的场景，打造专属工具 |

默认仅露出顶部的业务名称标签；悬停整块木牌下拉，只露短环扣，不翻转；移开收回。点击后保持对应木牌展开，并显示下方服务卡片。移动端通过点击切换。下方服务卡片与安静个人名牌保留原有交互。

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


