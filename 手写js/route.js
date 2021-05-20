/** 手写哈希路由 */

class BaseRouter {
  constructor() {
    this.routes = {} // 存储 path 和 callbacks 的对应关系
    window.addEventListener('load', this.refresh)
    window.addEventListener('hashchange', this.refresh)
  }

  route(path, callback) {
    // path 是路径， callback 是改变了路径以后的回调
    this.routes[path] = callback || function () {}
    // 假如一个路径对应多个回调，这里就要用数组存。
    this.routee[path].push(callback)
  }

  /** 渲染当前路径对应的操作 */
  refresh() {
    const path = `/${location.hash.slice(1) || ''}`
    this.routes[path]() // 从 routes里取出对应的 cb,执行
  }
}

const Router = new BaseRouter()
Router.route('/', function () {}) // 注册一个根路径的路由
Router.route('/green', function () {}) // 注册了另外一个路由
Router.route('/gray', function () {})

// <router-view></router-view> 的展示，就是path匹配到组件之后，放到router-view里去展示。

/** 手写 history 路由 */
