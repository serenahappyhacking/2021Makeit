# 常见的模块化和打包工具

### 模块化

---

AMD(Browser 环境), CommonJS（node.js 环境), ESModule(语言层面的，属于语法).

- AMD: 浏览器端使用，早期无论是语言还是浏览器都没有这样一个规范去进行模块化，没有隔绝的作用域，AMD 可以解决早期 web 端 js 代码啊，变量作用域冲突的问题。方便我们组织代码。

- CommonJS: 跟随 Node.js 使用， require()和 module.exports()，require 是一个**运行时的方法**，是动态加载。不是按需引入。
  require 是 **js 处理的引入**

- ESModule:

  - import、export 是**语言的关键字**, export、import 的出现统一了前端模块化的实现方案，整合规范了浏览器/服务端的模块化方法，用来取代传统的 AMD/CMD、requireJS、seaJS、commondJS 等等一系列前端模块不同的实现方案，使前端模块化更加统一规范，JS 也能更加能实现大型的应用程序开发。

  - import 引入的模块是静态加载（编译阶段加载）而不是动态加载（运行时加载）。import 本质是一种语法, 语法就是静态分析的时候需要知道它有什么东西， 然后按需引入。

  - import 引入 export 导出的接口值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
  - import **是引擎处理的**
  - import() 是动态加载的一个函数，类似 require()
  - 主流，最推荐使用，以后不只是在浏览器里，在 IoT，嵌入式等也可能会使用。是要引擎升级到位。

e.g

```javascript
const moduleA = require('./moduleA') //require() 可以看成一个函数, 既然是函数，就是运行的时候，执行到这里才去加载这个模块，属于动态加载

const { foo: anotherFoo } = moduleA // 这里可以看成对象的解构
// 所以 commonjs 其实遵循的都是 js 的语言规范，我们可以用对象的方式进行解构，重命名

import { foo as anotherFoo } from './moduleA'
// ESModule 这里的花括号不是一个对象，而是一种语法。所以 ESModule 引入的 foo 不能用对象的解构赋值，只能用 as 这个语法。
```

### 打包工具

---

打包工具的原理，实际和模块化的规范有着很深的联系。
webpack/rollup treeshaking 都是基于 import 的静态分析去做的。静态的分析出哪些代码要使用，哪些代码不需要使用。
