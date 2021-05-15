// 能否用 arrow function 作为事件监听的回调？

const elements = document.querySelectorAll('.toggle') // NodeList
elements.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('active') // 这里不能用 this.classList, 因为 this 指向 window, 取不到当前的目标元素。所以可以传入e, 从 e.currentTarget 取。
	})
})

elements.forEach((el) => {
	el.addEventListener('click', function () {
		this.classList.toggle('active')
	})
})

// throttle 本质就是丢弃
// 定时器的方法
// 时间戳的方法
const throttle = (fn, interval = 1000) => {
	let done = false
	return (...args) => {
		if (!done) {
			fn.apply(this, ...args)
			done = true
			setTimeout(() => {
				done = false
			}, interval)
		} else {
			console.log('被节流掉的 action')
		}
	}
}

this.appendList = throttle.call(this.appendList, 1000)
