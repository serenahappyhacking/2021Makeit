class CustomPromise {
  constructor(handleFunc) {
    this.state = 'pending'
    this.value = undefined

    this.fulfilledList = []

    handleFunc(this.resolve.bind(this))
  }

  /**
   *
   * 调用时机: onFulfilled 和 onRejected 只有在执行环境堆栈仅包含平台代码时才可被调用.
   * 这里的平台代码指的是引擎、环境以及 promise 的实施代码。实践中要确保 onFulfilled 和 onRejected 方法异步执行，且应该  在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
    这个事件队列可以采用“宏任务（macro - task）”机制或者“微任务（micro - task）”机制来实现。
    由于 promise 的实施代码本身就是平台代码（译者注：即都是 JavaScript），故代码自身在处理在处理程序时可能已经包含一个任务调度队列。
   */
  resolve(val) {
    // 使用macro-task机制(setTimeout),确保onFulfilled异步执行,且在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。

    setTimeout(() => {
      if (this.state !== 'pending') return

      this.state = 'fulfilled'
      this.value = val
      this.fulfilledList.forEach((item) => item(val))
      this.fulfilledList = []
    }, 0)
  }

  then(onFulfilled, onRejected) {
    const { value, state } = this

    return new CustomPromise((onNextFulfilled, onNextRejected) => {
      function onFinalFulfilled(val) {
        if (typeof onFulfilled !== 'function') {
          // 如果 onFulfilled 不是函数，跳过
          onNextFulfilled(val)
        } else {
          const res = onFulfilled(val)

          if (res && typeof res.then === 'function') {
            // res 是一个 promise
            res.then(onNextFulfilled)
          } else {
            // res 非 promise，则直接执行下一个 onNextFulfilled
            onNextFulfilled(res)
          }
        }
      }

      switch (state) {
        case 'pending': {
          this.fulfilledList.push(onFinalFulfilled)
          break
        }
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  static all(list) {
    return new CustomPromise((resolve, reject) => {
      let count = 0
      const values = []
      for (const [i, customPromiseInstance] of list.entries()) {
        customPromiseInstance.then(
          (res) => {
            values[i] = res
            count++
            if (count === list.length) resolve(values)
          },
          (err) => {
            reject(err)
          }
        )
      }
    })
  }

  static resolve(val) {
    return new CustomPromise((resolve) => resolve(val))
  }
}

const createPromise = function (time) {
  return new CustomPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve(new Date().getTime())
    }, time)
  })
}

const promiseInstance = createPromise(1000)

promiseInstance.then(function () {
  console.log('promise.then: hello world')
})

Promise.all([createPromise(2000), createPromise(1000)]).then((res) => {
  console.log('Promise.all', res)
})
