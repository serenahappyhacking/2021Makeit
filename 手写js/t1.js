/**
 * 1.计算多个区间的交集
 *   区间用长度为2的数字数组表示，如[2, 5]表示区间2到5（包括2和5）；
 *   区间不限定方向，如[5, 2]等同于[2, 5]；
 *   实现`getIntersection 函数`
 *   可接收多个区间，并返回所有区间的交集（用区间表示），如空集用null表示
 * 示例：
 *   getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5]
 *   getIntersection([1, 7], [8, 9]); // null
 */

const getIntersection = (...args) => {
	const arrs = Array.from(...args)
	arrs = arrs.map((arr) => arr.sort((a, b) => a - b))
	let left = 0,
		right = 0
	for (let i = 0; i < arrs.length - 1; i++) {
		left = arrs[i][0] <= arrs[i + 1][0] ? arrs[i + 1][0] : left
		right = arrs[i][1] <= arrs[i + 1][1] ? arrs[i][1] : right
	}
	return left < right ? [left, right] : null
}
