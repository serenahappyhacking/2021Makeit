/* 写一个测量异步函数执行时间的装饰器 */
export function measure(target: any, name: any, descriptor: any) {
  const oldValue = descriptor.value // 取出原有函数的值
  descriptor.value = async function () {
    const start = Date.now() //开始时间
    const res = await oldValue.apply(this, arguments) // 执行完函数
    return `${name} 执行时间为： ${Date.now() - start}`
  }
  return descriptor
}

// 现在可以用装饰器写埋点，把埋点独立于业务之外。
