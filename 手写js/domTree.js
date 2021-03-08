// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

function findPath(element, root) {
	const path = []
	let current = element
	while (current.parentNode) {
		index = [...current.parentNode.children].indexOf(current)
		path.push(index)
		current = current.parentNode
	}

	// path is [6,4,3,2]
	while (path.length) {
		current = current.children[path.pop()]
	}
	return current
}
