arguments, default parameters, rest parameters, Destructuring


``` javascript
function f(a,b){
  console.log(arguments)
  console.log(...arguments)
  let args = Array.prototype.slice.call(arguments)
}

f(1,2)

function f2(...args){
  console.log('args:', args) // [3, 5, "s"]
  console.log('args:', ...args) // 3 5 s
}

f2(3,5,'s')
```