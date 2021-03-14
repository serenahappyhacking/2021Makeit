// 这里用 promise + 装饰器做缓存， 主要是利用 promise 实例在创建的时候就已经执行了。
// 注意做缓存就要注意时效，要在 Map 里可以去存生成的时间，过期的时间。 永久有效只能在服务器，
// 就算在 localStorage 里也不是永远缓存，换浏览器就不行了。

// 装饰器是什么？
// 装饰器（Decorator）是一种与类（class）相关的语法，用来注释或修改类和类方法。许多面向对象的语言都有这项功能，目前有一个[提案](https://github.com/tc39/proposal-decorators)将其引入了 ECMAScript。

const cacheMap = new Map()

function enableCache(target, name, descriptor) {
	const val = descriptor.val
	// 修改原本的函数
	descriptor.val = async function (...args) {
		const cacheKey = name + JSON.stringify(...args)
		if (!cacheMap.get(cacheKey)) {
			const cacheValue = Promise.resolve(val.apply(this, args)).catch((_) => {
				cacheMap.set(cacheKey, null)
			})
			cacheMap.set(cacheKey, cacheValue)
		}
		return cacheMap.get(cacheKey)
	}
	return descriptor
}

// 装饰器
class PromiseClass {
	@enableCache
	static async getInfo() {}
}

PromiseClass.getInfo()
PromiseClass.getInfo()
PromiseClass.getInfo().then()
