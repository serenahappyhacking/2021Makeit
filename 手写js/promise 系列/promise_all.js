function PromiseAll(arr) {
  return new Promise((resolve, reject) => {
    // 封装一个方法，必须要判断入参的数据类型，如果不符合你定义的数据类型，一定要把错误抛出去。否则调用者会认为这是定义者的问题
    if (!Array.isArray(arr)) {
      return reject(new Error('传入的参数必须是数组！'))
    }
    let result = []
    let counter = 0 // 计数器
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]) // 用 Promise.resolve 把入参不是promise类型的都转换为Promise
        .then((value) => {
          counter++ // 这里用计数器，不用 result.length 去判断是否已经执行完，是因为 js array 的特性。 如果 result[3] = value,  这时候其实只在 index 为3 的位置上存了一个值，其实只是执行了一个index 为3 的这个promise。
          result[i] = value // 这一步是为了顺序输出所有的 promise
          // 必须要用一个计数器去判断
          if (counter === arr.length) {
            resolve(result)
          }
        })
        .catch((reason) => reject(reason))
    }
  })
}

Promise.all([p1, p2]).then(() => {})

// Promise.allSettled()

const foo = new Promise((resolve, reject) => {
  axios({
    url: 'xxxx',
  }).then((value) => resolve(value))
})

foo.then(
  (val) => {},
  (reason) => {}
)
