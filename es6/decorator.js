@xxx
class Math {
  @log // 如果同一个方法有多个装饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行。
  @decor1
  @decor2
  add(a, b) {
    return a + b
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value

  descriptor.value = function () {
    console.log(`Calling ${name} with`, arguments)
    return oldValue.apply(this, arguments)
  }

  return descriptor
}

const math = new Math()

// passed parameters should get logged now
math.add(2, 4)
