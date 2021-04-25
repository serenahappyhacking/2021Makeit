// reduce, concat, recursive

function flatDeep(arr, d = 1) {
  if (d > 0) {
    return arr.reduce((acc, cur) => {
      if (Array.isArray(cur)) {
        acc = acc.concat(flatDeep(cur, d - 1))
      } else {
        acc = acc.concat(cur)
      }
      return acc
    }, [])
  } else {
    return arr.slice()
  }
}

const arr1 = [1, 2, ['a', 'b', ['serena', 2, 5, 7]]]
console.log(flatDeep(arr1, Infinity))
