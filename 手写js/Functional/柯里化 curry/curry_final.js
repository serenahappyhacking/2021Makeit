/** 
  curry 是一种 transform of function， 把一个多个入参的函数调用 f(a,b,c)，转换成 f(a)(b)(c). 
  让一个函数的执行可控，可以只先执行部分的逻辑： “partially applied function” or “partial” for short. 

	比如打印几个参数 log(new Date(), 'Debug', 'some others'), 
	curry transform 后变成了 logCurry(new Date())('Debug')('some others').

	这样把参数分开传递，就可以一部分一部分的执行这个方法：
	const log1 = logCurry(new Date())
	const log2 = log1('Debug')
	const log3 = log2('some others')
*/

//! Fixed-length functions only
function curry(func) {
	/**
	 * !每次传参进来，两个 branch:  要么 argument 够了，于是执行方法得到结果;
	 * !要么 arguments not enough, 继续 curry 下去 得到一个新的 partial.
	 */
	return function curried(...args) {
		//! 如果传进来的参数大于等于原函数的入参长度，调用原函数
		if (args.length >= func.length) {
			return func.apply(this, args)
		} else {
			//! otherwise, get a partial:  return 另外一个方法
			return function (...args2) {
				//! 继续curry 下去, get a new partial.
				return curried.apply(this, args.concat(args2))
			}
		}
	}
}

// f(a, b)(c)(d, e)
