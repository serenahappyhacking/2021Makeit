/**
 * 实现一个方法， 可将多个函数方法按从左到右的方式组合运行
 * composeFunctions(fn1, fn2, fn3, fn4) 等价于 fn4(fn3(fn2(fn1)))
 * 示例:
 * const add = (x) => x + 1
 * const multiply = (x, y) => x * y
 * const multiplyAdd = composeFunctions(multiply, add)
 * multiplyAdd(3, 4)
 *
 * 入参是 3 和 4，从左到右执行，先传给fn1, 再把执行结果传给 fn2, 以此类推。
 */

const compose = (...fns) =>
  fns.reduce((acc, cur) => (...args) => acc(cur(...args)))

const compose = (...fns) => (res) =>
  fns.reduce((accum, next) => next(accum), res)

// 柯里化写法
const callbacks = (acc, currentVal) => acc.then(currentVal)
const pipeline = (...fns) => (x) => fns.reduce(callbacks, Promise.resolve()) // js 中的多个连续的箭头函数与柯里化, 多个连续箭头函数就是es6的多次柯里化的写法。n 次科curries 是 n - 1 个箭头， 前面n-2次都是传递入参，最后一次才是调用函数体

// function composeFunctions(...fns) {
//   fns.reduce((f, g) => (...args) => f(g(...args)))
// }

// Array.prototype.reduce((acc, currentValue) => {}, init)
// fns.reduce(function (f, g) {
// 	return (...args) => {
// 		f(g(...args))
// 	}
// })

const foo = () =>
  new Promise((resolve, reject) => {
    // 异步操作
    setTimeout(() => {
      console.log('xsss')
    }, 1000)
  })

foo.then(() => {})

//https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
// www.30secondsofcode.org/js/s/compose

let urls = []

const promises = urls.map((url) => fetch(url))
for (let p of promises) {
  let results = []
  results.push((await p).data)
  return results
}
