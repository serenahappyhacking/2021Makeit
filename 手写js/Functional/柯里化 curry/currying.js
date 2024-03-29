// curry 定长参数
const add = (a, b, c) => a + b + c

const curry = (fn) =>
	(temp = (...args) =>
		args.length === fn.length ? fn(...args) : (...foo) => temp(...foo, ...args))
const newAdd = curry(add)
console.log(newAdd(1)(2)(3))

// 缩减版（优雅）
// const currAdd = (...args) =>
//     (...arg) => arg.length !== 0
//         ? currAdd(...arg,...args)
//         : args.reduce((res,item)=>res + item,0)

//分解版
//step1 args=[1]
//step2 args=[1,2]
//step3 args=[1,2,1,2,3,4]
//step4 args=[1,2,1,2,3,4,5],
//step5 args=[1,2,1,2,3,4,5,6],
const currAdd = (...args) => {
	//step2 arg=[2],
	//step3 arg=[1,2,3,4],
	//step4 arg=[5],
	//step5 arg=[6],
	//step6 arg=[]
	return (...arg) => {
		//判断arg的长度是否为0，
		//不为0的话递归
		//为0的话累加
		if (arg.length !== 0) {
			return currAdd(...arg, ...args)
		} else {
			return args.reduce((res, item) => {
				return res + item
			}, 0)
		}
	}
}
//console.log(currAdd(1)(2)(1,2,3,4)(5)(6)())
//等价与上面
console.log(
	currAdd(1)(
		//step 1
		2
	)(
		//step 2
		1,
		2,
		3,
		4
	)(
		//step 3
		5
	)(
		//step 4
		6
	)() //step 5 //step 6
)

// 不定长参数
// 判断最后当参数长度为空的时候 就可以执行了

// args with arrow function 该怎么使用
const fn1 = (...args) => {
	const [a, b, c] = args // 解构 paramters deconstruction
	console.log('>>>', ...args)
	console.log('***', a, b, c)
	return a + b + c
}
fn1(2, 3, 4)
