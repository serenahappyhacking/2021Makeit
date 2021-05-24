// 节流，目的是频繁触发中只执行一次， 固定频次的去触发 (秒杀，resize, scroll)
// 节流1 ： 时间戳写法，第一次立即执行
const throttle = (fn, interval = 500) => {
  let last = 0
  return function () {
    let now = Date().now()
    if (now - last >= interval) {
      last = now
      fn.apply(this, arguments)
    }
  }
}
// 节流2： 定时器写法
function throttle(fn, interval) {
  let timer = null
  return function () {
    let context = this //假如这里是箭头函数，没有自己的 this ,就可以直接取到外层的this, 就不用存到 context里了。
    let args = arguments
    // 如果没有 timer,  每一次都要在 interval 时间后生成一个 timer.
    // 所以 fn 第一次不会立即执行，会在 interval 后才能执行第一次.
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args) // 这里用的是传统方法 有自己的 scope, 有自己的 this，所以这个方法的 this 和外层的 this 是不一样的，所以要在外层的 this 下执行，就要把它传进来。假如这里是箭头函数，没有自己的 this ,就可以直接取到外层的this, 就不用存到 context里了。
        timer = null // 记得清空定时器
      }, interval)
    }
  }
}
// 节流3：基本精确的实现一个节流函数，即使是最后一次，如果 remaining 小于等于 interval 也不会立即执行，也是等到 remaining 之后才执行； 第一次也不会立即执行，会先判断 remaining.
function throttle(fn, interval) {
  const timer = null
  const startTime = Date.now()
  return function () {
    let context = this
    let args = arguments
    let currentTime = Date.now()
    // (currentTime - startTime) 是指这次调用 时间已经过去了多久，  总的 interval 减去已经过去的，就是剩下的时间
    let remaining = interval - (currentTime - startTime)
    // 清理掉定时器，因为要保证每次进来都要重新走一个 remaining, 重启一个定时器
    clearTimeout(timerId)
    // 如果当前剩余时间小于等于 0 了，那么就要立即执行fn 了。且要更新一下开始时间
    if (remaining <= 0) {
      fn.apply(context, args)
      startTime = Date.now()
    } else {
      // 如果当前还有剩余时间, 就在 remaining 剩余时间之后再去执行 fn,生成一个 timerId.
      // 这个就保证了你设置了 interval 是多少时间间隔，就多久执行一次。基本精确的实现了一个节流函数，因为setTimeout 不是完全精确的，中间会插进来一些微任务，比如你设置的interval 是1000ms, 基本要大于等于 1000ms 才会执行。
      timerId = setTimeout(fn, remaining)
    }
  }
}

//! 防抖，一直点击，最后一次不点了，然后往后顺延一个时间间隔再去触发回调 （一直输入 input 事件，不能每敲一个字母就触发一次，而且有时候是联动的，会打挂服务器；最后直到你输入到某一个字母停下了，在 delay 时间里不再输入了，认为你输入完了，于是触发这个回调。）
const debounce = (fn, delay = 0) => {
  let timerId
  return function (...args) {
    //! checking for exsiting calls, 只要 timerId 还有值， 那就说明
    if (timerId) {
      clearTimeout(timerId)
      //! clearTimeout(this[timerKey]); // 重点在这里，只要不是last call , 定时器就会被清除，fn 就不会被调用。
    }
    timerId = setTimeout(() => {
      fn.apply(this, ...args)
    }, delay)
  }
}
