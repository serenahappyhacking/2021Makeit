const names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Adam']

// 1. set
// const uniqNames = [...new Set([names])]

// 2. filter
// const uniqNames = names.filter((name, index) => names.indexOf(name))

//3. hashTable
function uniq(arr) {
  const obj = {}
  arr.forEach((item, index) => {
    obj[item] = obj[item] ? null : (obj[item] = index)
  })
  return Object.keys(obj)
}

console.log(uniq(names))

//
function uniq(a) {
  var seen = {}
  return a.filter(function (item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true)
  })
}

// arr.includes()
// arr.filter()
// obj.hasOwnProperty()
