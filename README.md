# anjing-business

安静的个人商务合作网站。沿用产品官网的水面、悬挂吊牌、翻转拖拽与扇形手牌，保留安静木牌。产品插画、功能图和下载入口已移除；商务内容与价格尚未确定。

## 开发与部署

沿用 anjing-products 的方式：纯静态 HTML，无第三方依赖。

- GitHub 公开仓库：`anjing-le/anjing-business`
- Cloudflare Pages 项目：`anjing-business`
- 生产分支：`main`
- 构建命令：`npm run build`
- 输出目录：`dist`
- 正式域名：`business.anjing.cc`
- Node.js：22 或更新版本

Pages 已连接 GitHub，配置为推送 main 自动部署；首次已由 API 发起构建，GitHub push 触发尚待验收。验收时核对正式域名 `/build-info.json` 的 commit 与提交 SHA，以及 Pages 触发类型 `github:push`。

当前页面带 noindex，正式内容发布时移除。

## 域名接入

已配置 CNAME：`business` → `anjing-business.pages.dev`，开启 Cloudflare 代理、TTL Auto。

2026-11-22 已验证正式域名 HTTPS 返回 200、浏览器正常显示占位页，且 `/build-info.json` 返回已部署的提交版本。

## 页面复刻来源

视觉与交互基于 `anjing-le/anjing-products` 线上提交 `7c905e9805f04043a522f77bc17eb6e357cf0435`，未使用其工作区未提交修改。只保留背景、材质、五金、光标与安静木牌素材，其余内容牌为文字占位。

三张主吊牌分别为业务1、业务2、业务3，各自展开对应业务的内容牌。安静名片展开「我们的介绍」，暂留介绍占位内容。

2026-11-25：业务吊牌改为双面木纹实木牌，移除卡槽和金属扣，所有吊牌使用细编绳。保留原有翻转、拖拽、摆动与手牌逻辑。

绳子材质使用透明背景的实物感麻绳纹理，单根加粗直连孔位，不带绳圈或绳结。后续页面修改完成后直接发布正式站验收。

绳子现改为无图片依赖的 WebGL 三股螺旋圆绳。共用一个透明画布、静态网格与 GPU 光照；帧率上限 30，像素比上限 1.5，离屏或页面隐藏时停止绘制。保留原有牌面与交互物理逻辑。
