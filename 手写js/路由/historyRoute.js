class BaseRouter {
	constructor() {
		this.routes = {}
		this.init(location.pathname)
		this._bindPopState()
	}

	init(path) {
		window.history.replaceState({ path }, null, path)
		const cb = this.routes[path]
		cb && cb()
	}

	route(path, cb) {
		this.routes[path] = cb || function () {}
	}

	go(path) {
		window.history.pushState({ path }, null, path)
		const cb = this.routes[path]
		cb && cb()
	}

	_bindPopState() {
		window.addEventListener('popstate', (e) => {
			const path = e.state && e.state.path
			this.routes[path] && this.routes[path]()
		})
	}
}

// 测试用例
const Router = new BaseRouter()

function changeByColor(color) {
	const body = document.querySelector('body')
	const container = document.querySelector('.container')
	body.style.backgroundColor = color
}

Router.route('/', function () {
	changeByColor('white')
})
Router.route('/gray', function () {
	changeByColor('gray')
})
Router.route('/pink', function () {
	changeByColor('pink')
})
