const _flat = (arr) =>
  arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? _flat(cur) : cur)
  }, [])

let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
console.log(_flat(arr))
