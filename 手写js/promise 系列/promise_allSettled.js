function promiseAllSetteld(promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      return reject(new TypeError('Arguments must be an array.'))
    }

    let counter = 0
    let length = promiseArr.length
    const result = []
    for (let i in promiseArr) {
      Promise.resolve(promiseArr[i])
        .then((value) => {
          result[i] = {
            status: 'fulfilled',
            value,
          }
        })
        .catch((reason) => {
          result[i] = {
            status: 'rejected',
            reason,
          }
        })
        .finally(() => {
          counter++
          if (counter === length) {
            resolve(result)
          }
        })
    }
  })
}
