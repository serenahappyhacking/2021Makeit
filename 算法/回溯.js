// 其核心就是 for 循环里面的递归，在递归调用之前「做选择」，在递归调用之后「撤销选择」，特别简单。
let result = []
function backTrack(路径, 选择列表) {
  if (满足结束条件) {
    result.add(路径)
    return
  }

  for (let 选择 in 选择列表) {
    做选择
    backTrack(路径, 选择列表)
    撤销选择
  }
}
