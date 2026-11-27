# 项目合作卡片 V1

使用内置 imagegen 生成两张完整卡面，沿用职业服务卡面的纸色、居中标题、分割线与蜡笔插画。原图在 `assets/cooperation/source/consulting-v1.png`、`assets/cooperation/source/delivery-v1.png`，网页使用同目录上一级的同名 WebP。按既有方式只发布实际引用的压缩图片。

## 内容

- 项目咨询：梳理业务与需求，判断 AI 场景、选型和架构，形成落地路径与资源估算。底部：厘清业务问题，找到可执行的落地路径。
- 方案交付：围绕约定范围，提供方案设计、原型验证、Agent / RAG、系统接入、评测验收与交付文档。底部：从方案设计到开发落地，交付可验证的成果。

以上为服务首版介绍；实施范围、所需输入、交付物、周期和验收按具体合作确定，不代表每项合作默认包含全部环节。尚未填写价格、客户案例或业务效果承诺。

## FDE 参考

参考 [OpenAI 对企业 FDE 工作方式的介绍](https://openai.com/business/forward-deployed-engineering/)，借鉴“理解业务工作流、连接数据与系统、构建评估方案、推进实际部署”的路径；不表示与该机构存在合作关系或认证。

## 手机展示

服务卡片改为整组网格：三张为上二下一，两张并排；每张完整卡面都在组内可见。点击已填写的图片卡片以原比例放大阅读，关闭后返回整组。桌面继续保留翻牌、扇形展示、悬停抽出和拖拽。

## 生成提示词

### consulting

Use case infographic-diagram. Create a NEW complete flat printed service-card illustration matching the reference's exact visual style and layout. Reference is STYLE ONLY: warm ivory continuous paper, delicate colored-pencil wax-crayon pastel blue/sage/ochre, dark-brown brush calligraphy, centered large Chinese title, two thin grey-brown horizontal rules above and below diagram. Canvas landscape5:4. No outer border or drop shadow, no card mockup, no tinted rectangle, no separate photo panel. Top centered title EXACTLY '项目咨询'. Middle unified left-to-right FDE-style consulting visual: left a client's actual business represented by a workflow board with a few connected steps, a small database and conversation bubble, integrated words '业务' and '需求'; center a magnifying glass inspecting feasibility and architecture, showing restrained tool/document/agent icons with labels 'AI场景', '选型', '架构'; right a small solution blueprint and staged route map with a small resource estimate checklist, integrated words '落地路径'. Connect groups with thin sage hand-drawn arrows. Clearly show discovering business needs, assessing what AI should do, designing an actionable plan, rather than generic advice. Labels embedded in objects, no caption row. Beneath the second horizontal rule only ONE exact centered sentence: '厘清业务问题，找到可执行的落地路径'. No subtitle, no number, no '你将获得', no dense paragraph, no brand affiliation or promises. Large simple objects, generous paper margins, crisp accurate Chinese, clear at 400px wide. Match reference proportions and lettering.

### delivery

Use case infographic-diagram. Create a NEW complete flat printed service card in same style/layout as reference: landscape5:4, single continuous very pale ivory paper, soft colored-pencil wax-crayon blue/sage/ochre accents, warm charcoal outlines and Chinese brush lettering. Centered large title EXACTLY '方案交付', one thin horizontal rule below title and one above final sentence. No exterior frame/shadow, no tilted mockup, no tinted middle panel, no separate picture plus HTML-like text sections. Middle integrated left-to-right FDE delivery diagram: left a clear solution blueprint with simple product wireframe and architecture lines, embedded words '方案设计'; center a prominent laptop displaying a working AI knowledge-base/chat product plus a three-node tool workflow, with small connector lines to a database and existing business system, integrated labels '原型验证', 'Agent', 'RAG', '系统接入'; right a neat delivery folder containing code sheet, deployment document and evaluation checklist, embedded words '评测验收' and '交付文档'. Draw thin restrained arrows between the three groups. Convey a practical path from agreed needs and design through prototype, integration and verifiable delivery. No claims of guaranteed business performance, no made-up customer/logo. Bottom below rule exactly ONE centered sentence: '从方案设计到开发落地，交付可验证的成果'. No other footer words or secondary heading. All text must be correctly spelled and visually integrated with objects. Preserve calm whitespace and readable simple illustration.

