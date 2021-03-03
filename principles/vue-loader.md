/**
 *  vue loader is a loader for webpack , transform *.vue to *.bundle.js . 然后放入浏览器中运行。
 *  就是把 vue 组件（vue 文件） 转换为一个 a plain js module.
 *
 *  vue-loader 把 *.vue 转化为 js 模块的时候，其实内部调用了 4 个 小的 loader: selector,
 * style-compiler, template-compiler, babel-loader.
 *
 * 对Vue.js的template编译的理解 template 会被编译成 AST 语法树，AST 会经过 generate 得到 render 函数， render 的返回值是 VNode，VNode 是 Vue 的虚拟 DOM 节点
 *
 * vue 通过建立一个虚拟 DOM 来追踪自己要如何改变 Real DOM, 比如 createElement('h1', this.blogTitle)，createElement 不会返回一个真实的 DOM 元素， 是一个 createNodeDescription。其实就是 VNode.
 * 而 “虚拟 DOM” 是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼
 *
 * compiler 目录包含 Vue.js 所有编译相关的代码。它包括把模板解析成 ast 语法树，ast 语法树优化，代码生成等功能。
 * 编译的工作可以在构建时做（借助 webpack、vue-loader 等辅助插件）；也可以在运行时做，使用包含构建功能的 Vue.js。显然，编译是一项耗性能的工作，所以更推荐前者——离线编译。
 *
 * webpack 递归地构建一个依赖关系图(dependency graph),其中包含应用程序需要的每个模块,然后将所有这些模块打包成一个或多个 bundle。
 * loader 是用来处理非 js 文件的，loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块,然后你就可以利用 webpack 的打包能力,对它们进行处理。本质上,webpack loader 将所有类型的文件,转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。
 * plugin用处更宽， webpack 在运行过程中会广播事件,插件只需要监听它所关心的事件,就能加入到这条生产线中,去改变生产线的运作。https://ustbhuangyi.github.io/vue-analysis/v2/data-driven/render.html
 */
