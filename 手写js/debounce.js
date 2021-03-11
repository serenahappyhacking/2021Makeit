// 目的是频繁触发中只执行一次
const throttle = (fn, interval = 500) => {
  let timerId
  return function (...args) {
    if (timerId) {
      return
    }
    setTimeout(() => {
      fn.apply(this, ...args)
      // clear timer to unblock next call
      timerId = null
    }, interval)
  }
}

const debounce = (fn, delay = 0) => {
  let timerId
  return function (...args) {
    // checking for exsiting calls
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }
    timerId = setTimeout(() => {
      fn.apply(this, ...args)
    }, delay)
  }
}
