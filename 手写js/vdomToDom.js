//将 Virtual Dom 转换为真实 Dom
// https://mithril.js.org/vnodes.html
/**
 * vnode = {
 *  tag: 'div',
 *   attrs: {
 *     style : {
 *       background: 'red'
 *     }
 *   },
 *   children: [],
 *   dom: div,
 *   text: '',
 *   events: {
 *     onClick: () => {}
 *   },
 * }
 */

function render(vnode, container) {
	container.appendChild(_render(vnode))
}

function _render(vnode) {
	// 如果是数字类型，转为字符串
	if (typeof vnode === 'number') vnode = String(vnode)
	// 字符串类型直接生成文本节点
	if (typeof vnode === 'string') return document.createTextNode(vnode)
	// 普通 dom
	const dom = document.createElement(vnode.tag)
	if (vnode.attrs) {
		Object.keys(vnode.attrs).forEach((key) => {
			const value = vnode.attrs[key]
			dom.setAttribute(key, value)
		})
	}
	if (vnode.children) vnode.children.forEach((child) => render(child, dom))
}
