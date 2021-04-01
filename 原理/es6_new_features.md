# es6 es7 常用 feature mark

1. es6 之前只能用 var, 没有 block scope, 会带来一些问题比如 for 循环变量泄露，变量覆盖等问题。 且 let 修复了 var 变量带来的变量提升的问题。

2. Array 方面

- 数组 copy, assignment

```javascript
let a = [2,3,4]
let b = [...a]）
```

3. Object 方面

- 对象属性简洁表示

```javascript

```

```javascript
const [a, b] = ['red', 'orange']
const fruits = { a, b }

const foo = 'bar'
const obj = { foo }
```

- Destruction Assignment

```javascript
const { a, b, c } = obj
```

- Spread Operator

```javascript
const {a, b, c, ....others} = obj
```

- Object.is 用来做 2 个目标对象比较是否相等

```javascript
// 完善了 === 比较符
NaN === NaN // false
Object.is(NaN, NaN) // true
```

- Object.assign 合并的对象 target 只能合并 source1、source2 中的自身属性。并不会合并 source1、source2 中的继承属性，也不会合并不可枚举的属性，且无法正确复制 get 和 set 属性（会直接执行 get/set 函数，取 return 的值）。

- ES6 在 Object 原型上新增了 getOwnPropertyDescriptors() 方法，此方法增强了 ES5 中 getOwnPropertyDescriptor 方法，可以获取指定对象所有自身属性的描述对象。结合 defineProperties() 方法，可以完美复制对象，包括复制 get 和 set 属性

- ES6 在 Object 原型上新增了 `Object.getPrototypeOf(obj)` 和 `setPrototypeOf()` 方法，用来获取或设置当前对象的 `prototype` 对象。这个方法存在的意义在于，ES5 中获取设置 prototype 对象是通过 `proto` 属性来实现的, 然而 `proto` 属性并不是 ES 规范中的明文规定的属性，只是**浏览器各大产商“私自”加上去的属性**，只不过因为适用范围广而被默认使用了，再**非浏览器环境**中并不一定就可以使用。所以为了稳妥起见，获取或设置当前对象的 prototype 对象时，都应该采用 ES6 新增的标准用法。

- ES6 在 Object 原型上还新增了 `Object.keys()，Object.values()，Object.entries()`方法，用来获取对象的所有键、所有值和所有键值对数组。

```javascript
Object.keys(obj) // [a,b,c]
Object.values(obj) // [1,2,3]
Object.entries(obj) // [[a,1],[b,2],[c,3]]
```

4. Proxy

ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。
`let proxy = new Proxy(target, handler)`。
它在目标对象外面架了一层拦截，所有外界对目标对象的访问都要通过这层拦截。所以 proxy 就提供了一种机制，可以对外界的访问进行过滤和改写。

```javascript

```

5. 模块化和打包工具

   export、import 的出现统一了前端模块化的实现方案，整合规范了浏览器/服务端的模块化方法，用来取代传统的 AMD/CMD、requireJS、seaJS、commondJS 等等一系列前端模块不同的实现方案，使前端模块化更加统一规范，JS 也能更加能实现大型的应用程序开发。

   import 引入的模块是静态加载（编译阶段加载）而不是动态加载（运行时加载）。import 本质是一种语法, 语法就是静态分析的时候需要知道它有什么东西。

   Node.js require()是动态引入，可以把 require 理解为一个函数

   import 引入 export 导出的接口值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
