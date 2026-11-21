# anjing-business

安静的个人商务合作网站。当前仅有静态占位页，服务内容与价格尚未确定。

## 开发与部署

沿用 anjing-products 的方式：纯静态 HTML，无第三方依赖。

- GitHub 公开仓库：`anjing-le/anjing-business`
- Cloudflare Pages 项目：`anjing-business`
- 生产分支：`main`
- 构建命令：`npm run build`
- 输出目录：`dist`
- 正式域名（绑定已创建，解析与证书待验证）：`business.anjing.cc`
- Node.js：22 或更新版本

Pages 已连接 GitHub，配置为推送 main 自动部署；首次已由 API 发起构建，GitHub push 触发尚待验收。验收时核对正式域名 `/build-info.json` 的 commit 与提交 SHA，以及 Pages 触发类型 `github:push`。

当前页面带 noindex，正式内容发布时移除。

## 域名接入

Pages 已登记 `business.anjing.cc`。当前等待 DNS CNAME：`business` → `anjing-business.pages.dev`，随后验证域名状态与 HTTPS。
