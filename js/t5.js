var obj = {
  2: 3,
  3: 4,
  length: 2,
  splice: Array.prototype.splice,
  push: Array.prototype.push,
}

obj.push(1)
obj.push(2)

// Array.prototype.slice.call(obj)  在 array-like 上使用 array 原生方法

//调用 push 之后会先查找 length 这个属性的值，然后给把这个值作为下标添加元素; 如果是对象的话回去找下标的key。
