export function _instanceof(obj, classFunc) {
  const prototype = classFunc.prototype
  const proto = Object.getPrototypeOf(obj)

  while (true) {
    if (proto === null) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
