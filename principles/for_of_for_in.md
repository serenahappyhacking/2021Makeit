# for...of  vs for...in Difference

  - 都是遍历，但是遍历的东西不一样
  - for...of 遍历的是值 values
  - for...in 遍历的是可枚举的属性enumerable properties, 且顺序是任意的 乱序的
  
  e.g
  ```javascript

  const arr = ['a','b','c']
  Array.prototype.name = 'serena'

  for (const i in arr){
    console.log(i)
  } // 'b','c','a','name' (属性，包括原型链上继承的prop)

  for (const i of arr){
    console.log(i)
  } // 'a','b','c'（值）

  ```