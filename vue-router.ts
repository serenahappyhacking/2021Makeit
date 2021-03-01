// https://css-tricks.com/build-a-custom-vue-router/
// https://liyucang-git.github.io/2019/08/15/vue-router%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/
//https://juejin.cn/post/6844904064367460366#heading-3
// 从源码的结构可以看出，主要分为维护路由的 history.js,  两个组件 link 和 View, vue.router 最为插件的注册方法 install.js, 和 modulce 的导出文件 index.js

import createMatcher from "matcher";
class VueRouter {
	constructor(options: RouterOptions = {}) {
		this.options = options
		// 路由匹配对象
    this.matcher = createMatcher(options.routes || [])
		let mode = options.mode || 'hash'
		if (!inBrowser) {
			mode = 'abstract'
		}

		// 根据不同的 mode 匹配不同的路由方式
		switch (mode) {
			case 'history': 
				this.history = new HTML5History(this, options.base)
				break
			case 'hash':
				this.history = new HashHistory(this, options.base)
				break
			case 'abstract':
		    ...
				break
			default:
				
		}

		get currentRouter() {
			return this.history && this.history.current
		}

		init(app){

		}

	}
}


// 注册一个路由 Vue.use(VueRouter), 使得 VueRouter 可以使用 Vue . 然后通过 Vue 来调用 vue router 的 install 函数，在该函数中，核心就是给组件混入钩子函数和全局注册两个路由组件。
// 而后实例化一个 vue router, 传入一些 Options , 比如 mode 和 routes. 在实例化 VueRouter 的过程中，核心是创建一个路由匹配对象，并且根据 mode 来采取不同的路由方式。
// 重点关注一下创建 createMatcher 函数，作用是创建路由映射表。


