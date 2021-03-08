// 设计模式之适配器模式
const sfOrderService = {
  create() {
    console.log('顺丰订单已经生成...')
  },
}
const jdOrderService = {
  create() {
    console.log('顺丰订单已经生成...')
  },
}
const ytOrderService = {
  generate() {
    console.log('顺丰订单已经生成...')
  },
}

const createOrder = (express) => {
  if (express.create instanceof Function) express.create()
}
