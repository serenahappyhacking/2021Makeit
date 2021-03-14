function PromiseAll(arr) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(arr)) {
			return reject(new Error('传入的参数必须是数组！'))
		}
		let result = []
		let counter = 0 // 计数器
		for (let i = 0; i < arr.length; i++) {
			Promise.resolve(arr[i])
				.then((value) => {
					counter++
					result[i] = value // 这一步是为了顺序输出所有的 promise
					if (counter === arr.length) {
						resolve(result)
					}
				})
				.catch((reason) => reject(reason))
		}
	})
}
