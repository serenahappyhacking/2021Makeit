/* ⼿写实现⼀个函数模拟Object.entries */
const obj = { a: 1, b: 2 }
// console.log(Object.entries(obj))

function getObjectEntries(obj) {
  const result = []
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result.push([prop, obj[prop]])
    }
  }
  return result
}
console.log(getObjectEntries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ] ]

/** Object.getOwnPropertyName */
Object.prototype.lalala = 'serena'
console.log(Object.getOwnPropertyNames(obj)) // [ 'a', 'b' ]

/**  */
let cValue = 'happy new year'
Object.defineProperty(obj, 'c', {
  get() {
    return cValue
  },
  set(newVal) {
    cValue = newVal
  },
  configurable: false,
  enumerable: true,
  // writable: false,
})
obj.c = ['Hermione1231231ß']
// console.log(obj.c)
console.log(Object.entries(obj))

/** Proxy */
const objProxy = new Proxy(obj, {
  get(target, prop, receiver) {
    return 'Happy New Year!'
  },
  set(target, prop, value) {
    return Reflect.set(target, prop, value)
  },
})
objProxy.color = 'pink'
console.log(obj)

console.log(objProxy.v)

/** Reflect */
