1. Map 和 Object 有什么区别 ？
- key 的类型无限制
- 遍历起来方便

在常规对象中，为了遍历 keys、values 和 entries，你必须将它们转换为数组，如使用`Object.keys()、Object.values()和Object.entries()`，或者使用`for ... in`循环，因为常规对象不能直接遍历，另外for ... in循环还有一些限制：它仅仅遍历可枚举属性、非Symbol属性，并且遍历的***顺序是任意的***。

而Map可以直接遍历，并且由于它是键控集合，遍历的顺序和插入键值的顺序是一致的。你可以使用for ... of循环或forEach方法来遍历Map的entries，如下代码：

```javascript

const obj = []
const map = new Map()

for (const [key, value] of Object.entries(obj)){
  console.log(`${key}: ${value}`)
}

for (let [key, value ] of map){
  console.log(`${key}: ${value}`)
}

Object.keys(obj).forEach((key, index) => {
  
})
map.forEach((key, value) => {

})
```

`map.size` 属性来获取键值数量，而对于常规对象，为了做到这样你必须先转换为数组，然后获取数组长度，如：Object.keys({}).length



2. 什么场景使用？


3. Map和Set有何不同
