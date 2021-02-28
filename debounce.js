const throttle = (fn, interval) => {
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

const debounce = (fn, delay) => {
	let timerId
	return function (...args) {
		// checking for exsiting calls
		if (timerId) {
			clearTimeout(timerId)
		}
		setTimeout(() => {
			fn.apply(this, ...args)
		}, delay)
	}
}
