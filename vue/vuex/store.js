// store.js 中
export class Store {
	constructor(options = {}) {
		// 其余代码...

		// 所有的 modules 注册进来
		this._modules = new ModuleCollection(options)

		// 但是这些 modules 中的 actions, mutations, getters 都没有注册，所以我们原来的方法要重新写一下
		// 递归的去注册一下就行了，这里抽离一个方法出来实现
		installModule(this, this.state, [], this._modules.root)
	}
}

function installModule(store, state, path, root) {
	// getters
	const getters = root._rawModule.getters
	if (getters) {
		_.forEach(getters, (name, getterFn) => {
			Object.defineProperty(store.getters, name, {
				get: () => getterFn(root.state),
			})
		})
	}

	// mutations
	const mutations = root._rawModule.mutations
	if (mutations) {
		_.forEach(mutations, (name, mutation) => {
			let _mutations = store.mutations[name] || (store.mutations[name] = [])
			_mutations.push((payload) => {
				mutation(root.state, payload)
			})

			store.mutations[name] = _mutations
		})
	}

	// actions
	const actions = root._rawModule.actions
	if (actions) {
		_.forEach(actions, (name, action) => {
			let _actions = store.actions[name] || (store.actions[name] = [])
			_actions.push((payload) => {
				action(store, payload)
			})

			store.actions[name] = _actions
		})
	}

	// 递归
	_.forEach(root._children, (name, childModule) => {
		installModule(this, this.state, path.concat(name), childModule)
	})
}

// module-collection.js 把 module 收集起来
class ModuleCollection {
	constructor(options = {}) {
		this.register([], options)
	}

	// 注册的本质就是递归，递归的思想一定是有一个收集器的。
	register(path, rawModule) {
		const newModule = new Module(rawModule)

		// path 为 0 ，没有路径，肯定是根节点。path 这里是一个判断依据。
		if (path.length === 0) {
			// 如果是根模块 将这个模块挂在到根实例上
			this.root = newModule
		} else {
			const parent = path.slice(0, -1).reduce((module, key) => {
				return module.getChild(key)
			}, this.root)

			parent.addChild(path[path.length - 1], newModule)
		}

		// 如果有 modules，开始递归注册一波
		if (rawModule.modules) {
			_.forEach(rawModule.modules, (key, rawChildModule) => {
				this.register(path.concat(key), rawChildModule)
			})
		}
	}
}
// 定义一个 module 基类
class Module {
	constructor(rawModule) {
		this.state = rawModule || {}
		this._rawModule = rawModule
		this._children = {}
	}

	getChild(key) {
		return this._children[key]
	}

	addChild(key, module) {
		this._children[key] = module
	}
}

// https://bigdata.bihell.com/
