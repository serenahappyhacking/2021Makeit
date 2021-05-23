export function throttle(fn, interval = 1000) {
	let done = false
	return (...args) => {
		if (!done) {
			fn.call(this, ...args)
			done = true
			setTimeout(() => {
				done = false
			}, interval)
		}
	}
}

export const decoratorThrottle = (interval = 1000) => {
	return (target, prop) => {
		const oldMethod = target[prop]
		let last = 0
		target[prop] = function (...args) {
			const current = Date.now()

			if (current - last > interval) {
				oldMethod.call(this, ...args)
				last = current
			}
		}
		return target
	}
}


// 调用, 假如现在有一个异步操作 appendList
 @decoratorThrottle(500)
  async appendList() {
    console.log('appendlist')
    const newsList = await getNewsList()
    new NewsList(newsList).mount(this.root)
  }
