const debounce = (fn, delay) => {
  const timer = null
  return function (...args) {
    timer = setTimeout(() => {
      fn.apply(this, args) // arrow function, 丢失this, this指向外层的非arrow function 的this
    }, delay)
  }
}

const throttle = ( fn, interval ) => {
  return function ( ...args ) => {
  
  }
}
