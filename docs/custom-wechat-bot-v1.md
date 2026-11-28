# 定制化 WeChat Bot 服务卡片 V1

## 卡面 V2：移除底部小字

按用户要求，使用内置 imagegen 仅移除卡面底部“文本与截图可能发送至模型服务商”一行，保留主句、图示与版式；网页图片替代描述同步移除此句。V1 原图作为历史版本保留，原项目数据边界说明仍见原项目文档。

- 原图：`assets/custom/source/wechat-bot-v2.png`
- 网页图：`assets/custom/wechat-bot-v2.webp`

### V2 编辑提示词

Make ONE precise edit to this image: remove ONLY the smallest bottom line of text '文本与截图可能发送至模型服务商'. Fill the vacated bottom line area with matching pale warm ivory paper texture. Do not crop the image, do not resize or shift any element, preserve canvas5:4. Keep the large bottom main sentence EXACTLY '按你的群聊场景，定制有记忆的 AI 伙伴', at the exact same position and size. Keep top centered title '定制化 WeChat Bot', the full illustration, every other Chinese word, all colors, paper texture, divider lines and entire layout identical. No new text, no replacement footnote. The only intended change is clean empty paper where that smallest bottom line used to be.


2026-11-28：第三个一级吊牌从“特定业务”改为“定制服务”。首个二级卡片名称为“定制化 WeChat Bot”，不填充其他未确定服务。

## 内容与来源

依据用户提供的 WeChat Persona 能力图，以及现有 `anjing-wechat-persona/README.zh-CN.md` 中的能力说明，整理为群聊互动、本地记忆、群报话题和参与控制。以群聊场景、人设、回复方式、记忆与参与规则的定制为服务方向，实施范围和交付条件按需求进一步约定。

卡面保留“桌面自动化”及“文本与截图可能发送至模型服务商”的说明，不称为微信官方机器人接口，不声称桌面自动化零风险。原项目说明为 Linux 桌面自动化实验；本次仅制作商务网站介绍，不代表本轮部署了机器人或验证了真实微信收发。

底部文案：按你的群聊场景，定制有记忆的 AI 伙伴。

## 素材

采用内置 imagegen 生成完整卡面，参考现有商务站的纸色和分割线样式；用户图作为内容参考。

- 原图：`assets/custom/source/wechat-bot-v1.png`
- 网页图：`assets/custom/wechat-bot-v1.webp`

保留原图，构建只输出实际引用的压缩 WebP，并使用哈希版本缓存。桌面保留抽牌与拖拽；手机单张居中完整展示，支持点开放大。

## 生成提示词

Use case infographic-diagram. Create ONE new complete flat website service-card artwork, landscape 5:4. Image1 is ONLY the STYLE AND LAYOUT reference: very pale warm ivory paper across entire canvas, soft colored-pencil and wax-crayon pastel sage/blue/ochre/peach, dark-brown brush lettering, large centered title, thin grey-brown horizontal dividers above and below the central illustration. Image2 is ONLY the CONTENT reference for the existing WeChat Persona desktop-automation solution; do not reproduce the entire tall infographic or neon green palette. Entire finished card including ALL Chinese text must be generated as a single image. No perspective, outer border, external shadow, inset picture panel, white rectangular section, website mockup, or HTML-like overlays. Centered top title EXACTLY '定制化 WeChat Bot', generous margin and clear readable handwriting, preferably one line, no subheading. First thin divider below title. Unified middle diagram: a friendly generic desktop group-chat window in center, with two human chat bubbles and a small 'AI群友' bubble; at four sides four restrained integrated illustrated capability clusters connected naturally to the chat. Cluster1 chat bubble with @ and a small photo icon, words '群聊互动', small integrated labels '接话' '看图'; cluster2 a notebook and small local database, words '本地记忆', small label '上下文'; cluster3 a report sheet and clock, words '群报话题', small label '每日群报'; cluster4 a control slider with pause/moon icon and a small personality/profile card, words '参与控制', small labels '人设' '频率'. Show a subtle keyboard/mouse desktop automation motif underneath the window, integrated small words '桌面自动化'. No claim to official APIs or endorsement; no actual WeChat logo needed, chat colors only muted sage. Below second thin divider one exact centered concise sentence: '按你的群聊场景，定制有记忆的 AI 伙伴'. At very bottom a small but legible neutral line, exactly '文本与截图可能发送至模型服务商'. This is a real data-flow note, no warning icon, no alarm color. No '你将获得', no extra paragraphs, no numbers, no guaranteed safe/zero-risk promises, no customer claims. Keep objects large and clear at 450px width. All text precise, illustration internally coherent, same refined calm paper texture as image1.

