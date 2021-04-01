// 用一个 WeakSet()去存已经计算过的内存
// Each object in a WeakSet may occur only once, all objects in a WeakSet's collection are unique.
const seen = new WeakSet()

function sizeOfObject(object) {
	if (object === null) return 0
	let bytes = 0
	// 对象里的 key 也是占用空间的
	const properties = Object.keys(object)
	for (let prop of properties) {
		if (typeof object[prop] === 'object' && object[prop] !== null) {
			if (seen.has(object[prop])) {
				continue
			}
			seen.add(object[prop])
		}

		bytes += calculator(prop)
		bytes += calculator(object[prop])
	}
}

function calculator(object) {
	const objType = typeof object // Object.prototype.toString.call(object) === "[object Object]"

	switch (objType) {
		case 'string': {
			return object.length * 2
		}
		case 'boolean': {
			return 4
		}
		case 'number': {
			return 8
		}
		case 'object': {
			if (Array.isArray(object)) {
				// [1,2,3]
				// [{a : 1}, {b: 2}]
				// 把数组里的每一个元素，再通过 calculator 进行转换，即递归。
				return object.map(calculator).reduce((acc, current) => acc + current, 0)
			} else {
				sizeOfObject(object)
			}
		}
	}
}
