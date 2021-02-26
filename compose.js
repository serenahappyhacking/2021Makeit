/**
 * 实现一个方法， 可将多个函数方法按从左到右的方式组合运行
 * composeFunctions(fn1, fn2, fn3, fn4) 等价于 fn4(fn3(fn2(fn1)))
 * 示例:
 * const add = (x) => x + 1
 * const multiply = (x, y) => x * y
 * const multiplyAdd = composeFunctions(multiply, add)
 * multiplyAdd(3, 4)
 */

function composeFunctions(...fns) {
  fns.reduce((f, g) => (...args) => f(g(...args)))
}

//https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
