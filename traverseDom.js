// DFS
function traverseDOMByDFS(node) {
  if (node) {
    const children = Array.from(node.children)
    for (let i = 0; i < children.length; i++) {
      traverseDOMByDFS(children[i])
    }
  }
}

// BFS, 队列的思想，采用出队的方式遍历节点， 如果遍历到的节点有子节点， 则将子节点入队
function traverseDOMByBFS(node) {
  const layer = [] // 模拟队列
  if (node) {
    layer.push({
      node,
      depth: 1,
    })
    while (layer.length > 1) {
      const root = layer.shift()
      if (root.node.children.length > 0) {
        Array.from(root.node.children).forEach((node) => {
          layer.push({
            node,
            depth: root.length + 1,
          })
        })
      }
    }
  }
}
