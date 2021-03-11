var twoSum = function (nums, target) {
  var obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (typeof obj[target - nums[i]] !== 'undefined') {
      return [obj[target - nums[i]], i]
    }
    obj[nums[i]] = i
  }
}

const nums = [2, 7, 11, 15]
console.log(twoSum(nums, 9))
