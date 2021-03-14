// 目的是频繁触发中只执行一次 (秒杀，resize, scroll)
// 1. 时间戳写法，第一次立即执行
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
// 2. 定时器写法

// 防抖，一直点击，最后一次不点了，然后往后顺延一个时间间隔再去触发回调 （一直输入 input 事件，不能每敲一个字母就触发一次，直到你输入到某一个字母 在 delay 时间里不再输入了，认为你输入完了，于是触发这个回调。）
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
