function minus2(x) {
	return x - 2
}
function triple(x) {
	return x * 3
}
function increment(x) {
	return x + 1
}

function composeTwo(fn2, fn1) {
	return function composed(v) {
		return fn2(fn1(v))
	}
}

let f = composeTwo(composeTwo(minus2, triple), increment) // 执行顺序都是从右到左： increment, triple, minus2
let p = composeTwo(minus2, composeTwo(triple, increment)) //  执行顺序：increment, triple, minus2

f(4)
p(4)
