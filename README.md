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

2026-11-25：业务牌保持双面木纹、无卡槽；悬挂恢复产品站最初的挂带、环扣和连接结构，只把挂带改为暖木色哑光织物。保留原有翻转、拖拽、摆动和收牌效果。

后续页面修改完成后直接发布正式站验收。

## 资源加载

构建时按引用输出资源，为图片、脚本和 SVG 生成内容哈希文件名，三个首屏样式表按原顺序内联。`dist/_headers` 为带版本资源设置一年 immutable 缓存，HTML 保持重新验证，版本查询禁用缓存。更新资源会更换 URL。

页面使用缩小后的 WebP 材质和名牌图片，原始素材保留在源码中，不输出未引用的原图。两张首屏主要图片提前加载。页面及所有静态资源均由同一 Cloudflare Pages 站点提供，无外部字体或脚本 CDN。资源优化不代表已验证国内运营商线路性能。
