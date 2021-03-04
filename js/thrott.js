// function throttle(fn, interval = 500) {
//   let last, timer
//   return (...args) => {
//     let now = +new Date()
//     if (last && now < last + interval) {
//     } else {
//     }
//   }
// }

/**
 * 实现函数的节流 （目的是频繁触发中缩减频率）
 * @param {*} func 需要执行的函数
 * @param {*} wait 检测节流的间隔频率
 * @param {*} immediate 是否是立即执行 True：第一次，默认False：最后一次
 * @return {可被调用执行的函数}
 */
function throttle(func, wait) {
  let timer = null
  let previous = 0 // 记录上一次操作的时间点

  return function anonymous(...params) {
    let now = new Date() // 当前操作的时间点
    remaining = wait - (now - previous) // 剩下的时间
    if (remaining <= 0) {
      // 两次间隔时间超过频率，把方法执行

      clearTimeout(timer) // clearTimeout是从系统中清除定时器，但timer值不会变为null
      timer = null // 后续可以通过判断 timer是否为null，而判断是否有 定时器

      // 此时已经执行func 函数，应该将上次触发函数的时间点 = 现在触发的时间点 new Date()
      previous = new Date() // 把上一次操作时间修改为当前时间
      func.call(this, ...params)
    } else if (!timer) {
      // 两次间隔的事件没有超过频率，说明还没有达到触发标准，设置定时器等待即可（还差多久等多久）
      // 假设事件间隔为500ms，第一次执行完之后，20ms后再次点击执行，则剩余 480ms，就能等待480ms
      timer = setTimeout((_) => {
        clearTimeout(timer)
        timer = null // 确保每次执行完的时候，timer 都清 0，回到初始状态

        //过了remaining时间后，才去执行func，所以previous不能等于初始时的 now
        previous = new Date() // 把上一次操作时间修改为当前时间
        func.call(this, ...params)
      }, remaining)
    }
  }
}

function func() {
  console.log('ok')
}
btn.onclick = throttle(func, 500)
