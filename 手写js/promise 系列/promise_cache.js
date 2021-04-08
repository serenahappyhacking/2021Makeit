// 装饰器是什么？
// 装饰器（Decorator）是一种与类（class）相关的语法，用来注释或修改类和类方法。许多面向对象的语言都有这项功能，目前有一个[提案](https://github.com/tc39/proposal-decorators)将其引入了 ECMAScript。

// 这道题的意义：比如一些 promise 的结果是固定的，比如去调用一个请求，这个请求的结果是一个常量，那么你在每一个页面都有调用，但是又没做一个全局的状态管理。这样你在每个页面都去调用 会浪费性能 同时也浪费服务端的资源。所以对于 SPA， 如果没有做全局的状态管理，可以做一个 promise 的缓存。
// 用 promise + 装饰器做缓存， 主要是利用 promise 实例在创建的时候就已经执行了。
// 注意做缓存就要注意时效，要在 Map 里可以去存生成的时间，过期的时间。 永久有效只能在服务器. 就算在 localStorage 里也不是永远缓存，换浏览器就不行了。

const cacheMap = new Map()
function enableCache(target, name, descriptor) {
  const val = descriptor.val // 取最原始的要装饰的这个函数的值
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
