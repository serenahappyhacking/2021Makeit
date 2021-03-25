// 能否用 arrow function 作为事件监听的回调？

const elements = document.querySelectorAll('.toggle') // NodeList
elements.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active') // 这里不能用 this.classList, 因为 this 指向 window, 取不到当前的目标元素。所以可以传入e, 从 e.currentTarget 取。
  })
})

elements.forEach((el) => {
  el.addEventListener('click', function () {
    this.classList.toggle('active')
  })
})
