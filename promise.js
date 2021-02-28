const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise {
	constructor(executor) {
		this.status = PENDING
		this.value = undefined
		this.reason = undefined
		this.onFulfilledCbs = []
		this.onRejectedCbs = []
		const resolve = (value) => {
			if (this.status === PENDING) {
				this.status = FULFILLED
				this.value = value
				this.onFulfilledCbs.forEach((cb) => cb(this.value))
			}
		}
		const reject = (reason) => {}
		try {
			executor(resolve, reject)
		} catch (e) {
			reject(e)
		}
	}

	then() {}
	catch() {}
}

// const promise = new Promise((resolve, reject) => {

// })
