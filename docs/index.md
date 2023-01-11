---
label: 什么是lit
sidebar_position: 1
---
# 什么是lit

Lit 是一个简单的库,用于构建快速、轻量级的 Web 组件.

Lit的核心是一个样板杀手组件基类,它提供反应状态,作用域样式和声明性模板系统,该系统很小,快速且富有表现力.

## 我可以用 Lit 构建什么？

关于 Lit 首先要知道的是,每个 Lit 组件都是一个标准的 Web 组件.Web组件具有互操作性的超能力:浏览器本机支持Web组件,可以在任何HTML环境中使用,使用任何框架或根本不使用.

这使得 Lit 成为开发可共享组件或设计系统的理想选择.点亮组件可以跨多个应用程序和站点使用,即使这些应用程序和站点是在各种前端堆栈上构建的.使用 Lit 组件的网站开发人员不需要编写甚至查看任何 Lit 代码;他们可以像使用内置 HTML 元素一样使用这些组件.

Lit也非常适合逐步增强基本的HTML站点.浏览器将识别标记中的 Lit 组件并自动初始化它们——无论您的网站是手工制作的、通过 CMS 管理、使用服务器端框架构建的,还是由 Jekyll 或 el1y 等工具生成的.

当然,你也可以用 Lit 组件构建高度交互、功能丰富的应用程序,就像使用 React 或 Vue 等框架一样.Lit 的功能和开发人员体验可与这些流行的替代方案相媲美,但 Lit 通过采用浏览器的本机组件模型最大限度地减少了锁定,最大限度地提高了灵活性并促进了可维护性.

使用 Lit 构建应用程序时,很容易添加“原版”Web 组件或使用其他库构建的 Web 组件.您甚至可以更新到 Lit 的主要新版本,或迁移到另一个库,一次一个组件,而不会中断产品开发.

## 用lit开发是什么感觉？

如果您已经完成了任何基于组件的现代 Web 开发,那么您应该对 Lit 感到宾至如归.即使您以前没有使用过组件进行开发,我们认为您会发现 Lit 非常平易近人.

每个 Lit 组件都是一个独立的 UI 单元,由较小的构建块组装而成:标准 HTML 元素和其他 Web 组件.反过来,每个 Lit 组件本身就是一个构建块,可以在 HTML 文档、另一个 Web 组件或框架组件中使用它来构建更大、更复杂的界面.

[这](https://lit.dev/playground/#sample=docs/what-is-lit)是一个小但重要的组件(倒数计时器),它说明了 Lit 代码的外观,并突出显示了几个关键功能

需要注意的一些事项:

- Lit的主要特点是基类,这是本机的方便和多功能的扩展.您可以从中扩展以定义自己的组件.LitElementHTMLElement
- Lit富有表现力的声明性模板(使用JavaScript标记的模板文字)可以轻松描述组件的渲染方式.
反应式属性表示组件的公共 API 和/或内部状态;每当反应属性更改时,组件都会自动重新呈现.
- 默认情况下,样式的作用域是固定的,使 CSS 选择器保持简单,并确保组件的样式不会污染(或被污染)周围的上下文.
- Lit 在普通 JavaScript 中效果很好,或者你可以使用 TypeScript 通过使用装饰器和类型声明来获得更好的人体工程学.
Lit在开发过程中不需要编译或构建,因此如果您愿意,几乎无需工具即可使用.一流的 IDE 支持(代码完成、检查等)和生产工具(本地化、模板缩小等)随时可用.

## 为什么要使用lit

正如我们已经指出的,Lit 是构建各种 Web UI 的绝佳选择,它将 Web 组件基于互操作的优势与现代、符合人体工程学的开发人员体验相结合.

点亮也是:

- 简单.在 Web 组件标准之上构建,Lit 添加了您快乐和高效所需的功能:反应性、声明性模板和一些周到的功能,以减少样板文件并使您的工作更轻松.
- 快速.更新速度很快,因为 Lit 会跟踪 UI 的动态部分,并且仅在底层状态发生变化时更新这些部分,而无需重建整个虚拟树并将其与 DOM 的当前状态进行比较.
- 轻便.Lit 的重量约为 5 KB(缩小和压缩),有助于保持较小的束尺寸和较短的加载时间.

Lit背后的团队从第一天起就参与了Web组件.我们帮助 Google 维护数以万计的组件,提供一套全面的 Web 组件 polyfill,并深入参与标准和社区工作.

每个 Lit 功能都经过精心设计,考虑到了 Web 平台的发展;我们的目标是帮助您充分利用该平台目前提供的功能,同时编写准备从未来增强功能中受益的代码