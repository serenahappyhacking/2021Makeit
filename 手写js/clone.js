// shallow clone
function shallowClone(target) {
  if (typeof target !== 'object') return target
  if (typeof target === null) return null
  const cloned = Array.isArray(target) ? [] : {}
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloned[prop] = target[prop]
    }
  }
  return cloned
}

// deep clone
const deepClone = (target) => {
  const clonedTarget = Array.isArray(target) ? [] : {}
  /* for in 是遍历所有 enumerable properties, including inherited enumerable properties. */
  for (let prop in target) {
    /* 遍历对象自身可枚举属性（its own propertoes, as opposed to inheriting it）*/
    if (target.hasOwnProperty(prop)) {
      clonedTarget[prop] = deepClone(target[prop])
    }
  }
  return clonedTarget
}
