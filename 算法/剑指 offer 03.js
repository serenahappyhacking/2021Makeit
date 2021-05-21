var findRepeatNumber = function (nums) {
	// 1
	// let map = new Map()
	// for (let i = 0; i < nums.length; i++) {
	// 	if (!map.has(nums[i])) {
	// 		map.set(nums[i], true)
	// 	} else {
	// 		return nums[i]
	// 	}
	// }

	// 2
	let sortedNums = nums.sort()
	for (let [key, value] of sortedNums.entries()) {
		if (sortedNums[key - 1] === value) return value
	}
}

// let arr = [2, 3, 1, 0, 2, 5, 3]
let arr = [3, 1, 2, 3]
console.log(findRepeatNumber(arr))
