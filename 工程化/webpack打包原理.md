## 打包原理

---

打包工具的原理，实际和模块化的规范有着很深的联系。
webpack/rollup treeshaking 都是基于 import 的静态分析去做的。静态的分析出哪些代码要使用，哪些代码不需要使用。

https://juejin.cn/post/6844904038543130637#heading-7
