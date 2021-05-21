// 12,15,18,19,23,25,26,

// switch 对应的简写
let data = {
  1: test1,
  2: test2,
  3: test3,
}

data[sth] && data[sth]()

// 默认参数值
const test = (a = 1, b = 2) => a + b

// cloning arrays
const test1 = [1, 2, 3]
const test2 = [...test1] // spread operator 复制一个数组
const test3 = test1.slice() // slice 复制一个数组

//
let a = 1,
  b = 2
let obj = { a, b }

// 字符串转换为数字
// Longhand
let test1 = parseInt('123')
let test2 = parseFloat('12.3')
// Shorthand
let test1 = +'123'
let test2 = +'12.3'

// Array.find 缩写法
const data = [
  {
    type: 'test1',
    name: 'abc',
  },
  {
    type: 'test2',
    name: 'cde',
  },
  {
    type: 'test1',
    name: 'fgh',
  },
]
// longhand
function find1(name) {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].type === 'test1' && data[i].name === 'name') {
      return data[i]
    }
  }
}
//Shorthand
filteredData = data.find((data) => data.type === 'test1' && data.name === 'fgh')
console.log(filteredData) // { type: 'test1', name: 'fgh' }

// 查询条件缩写法
// Longhand
if (type === 'test1') {
  test1()
} else if (type === 'test2') {
  test2()
} else if (type === 'test3') {
  test3()
} else if (type === 'test4') {
  test4()
} else {
  throw new Error('Invalid value ' + type)
}
// Shorthand
var types = {
  test1: test1,
  test2: test2,
  test3: test3,
  test4: test4,
}

var func = types[type]
!func && throw new Error('Invalid value ' + type)
func()

// 位运算符是按位进行运算，& 与、| 或、~ 非、^ 按位异或
// 按位非和 indexOf 缩写法,我们以查找特定值为目的迭代一个数组，通常用到 indexOf() 方法。

// longhand
if (arr.indexOf(item) > -1) {
  // item found
}
if (arr.indexOf(item) === -1) {
  // item not found
}
//shorthand
if (~arr.indexOf(item)) {
  // item found
}
if (!~arr.indexOf(item)) {
  // item not found
}
// 对除 -1 外的任何数进行 按位非(~) 运算都会返回真值。把按位非的结果再次进行逻辑取反就是 !~，这非常简单。或者我们也可以使用 includes() 函数：
if (arr.includes(item)) {
  // true if the item found
}

// !!操作符
Boolean(3)
Boolean(!!3)

// Object.entries(), 可以把对象转换成一个由若干对象组成的数组; 同时可用 Object.values(),  Object.keys()
const data = { test1: 'abc', test2: 'cde', test3: 'efg' }
const arr = Object.entries(
  data
) /** Output:
[ [ 'test1', 'abc' ],
  [ 'test2', 'cde' ],
  [ 'test3', 'efg' ]
]
**/

// 字符串
const str = 'abc'
'abc '.repeat(5) //把一个字符串反复输出多次, "abc abc abc abc abc "
str.charAt(2) // 获取字符串中的字符
str[2] // 获取字符串中的字符

// 数组
Math.max(...arr) // 找出一个数组中的最大值
Math.min(...arr) // 找出一个数组中的最小值

//幂运算
Math.pow(2, 3) // longhand, 8
2 ** 3 //shorthand, 8
