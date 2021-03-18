# 关于 Promise

1. Promise.all 特性：

   const p = Promise.all([p1, p2, p3]) 用于将多个 promise 实例封装成一个新的 promise 实例。

   p1、p2、p3 都是 Promise 实例，如果不是，就会先调用下面讲到的 Promise.resolve 方法，将参数转为 Promise 实例，再进一步处理。

   p 的状态取决于所有传入的 promise 实例，只要 p1、p2、p3 之中有一个被 rejected，p 的状态就变成 rejected，此时第一个被 reject 的实例的返回值，会传递给 p 的回调函数。
   但是问题是：除了那个失败的 p1, p2 和 p3 执行了吗？ 执行了。 promise 是在创建之初就已经执行了，实例化的时候就已经执行了，.then 方法 或者 await 方法只是去抓取其执行的结果。

   promise.all 的顺序问题，输入的是什么顺序，返回的结果就是什么顺序。

2.
