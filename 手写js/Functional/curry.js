/**
 * 柯理化函数含义： 是给函数分步传递参数，每次传递部分参数，并返回一个更具体的函数接收剩下的参数，这中间可嵌套多层这样的接收部分参数的函数，直至返回最后结果。
 *
 * 前端业务场景优化:  节流 防抖 柯里化
 */

const composite = (...args) => {
	return (...arguments) => {
		return args.reduce((memo, current) => {})
	}
}
