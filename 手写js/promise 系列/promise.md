# 关于 Promise

1. Promise.all 特性：

   const p = Promise.all([p1, p2, p3]) 用于将多个 promise 实例封装成一个新的 promise 实例。

   p1、p2、p3 都是 Promise 实例，如果不是，就会先调用下面讲到的 Promise.resolve 方法，将参数转为 Promise 实例，再进一步处理。

   p 的状态取决于所有传入的 promise 实例，只要 p1、p2、p3 之中有一个被 rejected，p 的状态就变成 rejected，此时第一个被 reject 的实例的返回值，会传递给 p 的回调函数。
   但是问题是：除了那个失败的 p1, p2 和 p3 执行了吗？ 执行了。 promise 是在创建之初就已经执行了，实例化的时候就已经执行了，.then 方法 或者 await 方法只是去抓取其执行的结果。

   promise.all 的顺序问题，输入的是什么顺序，返回的结果就是什么顺序。

2. check 一个对象是否是 Promise 类型
   * 不能用 instanceof 判断 , 因为不能保证每一个 promise 都是从 Promise 构造器上构造出来的。*

   ```javascript
   // 1
   function isPromise(p) {
      return p && Object.prototype.toString.call(p) === "[object Promise]";
   }

   // 2
   function isPromise(value) {
      return Boolean(value && typeof value.then === "function");
   }

   // 3 Checking if Promise.resolve(object) == object
   function isPromise(object) {
   if (Promise && Promise.resolve) {
      return Promise.resolve(object) == object;
   } else {
      throw "Promise not supported in your environment"; // Most modern browsers support Promises
   }
   }

   // 4 Checking if obj is Object & obj.then is a function
   function isPromise(obj) {
      return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
   }
   ```




   `
