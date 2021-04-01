# BOM

1. location

- 属性

  Location.href "http://www.example.com:80/WileyCDA/?id=3&name=lee#contents" 包含整个 URL 的一个 DOMString

  Location.protocol "http:" 包含 URL 对应协议的一个 DOMString，最后有一个":"。

  Location.host "www.example.com:80" 包含了域名的一个 DOMString，可能在该串最后带有一个":"并跟上 URL 的端口号。

  Location.hostname "www.example.com" 包含 URL 域名的一个 DOMString。

  Location.port "80" 包含端口号的一个 DOMString。

  Location.pathname "/WileyCDA/" 包含 URL 中路径部分的一个 DOMString，开头有一个“/"。

  Location.search "?id=3&name=lee" 包含 URL 参数的一个 DOMString，开头有一个“?”。

  Location.hash "#contents" 包含块标识符的 DOMString，开头有一个“#”。

  Location.origin 只读 "http://www.example.com" 包含页面来源的域名的标准形式 DOMString。

- 用法

获取查询字符串(?id=3&name=lee => {id: 3, name: 'lee'})

```javascript
function getQueryStrings() {
	// 1. 得到查询字符串 ?id=3&name=lee
	const search = location.search

	// 2.去掉问号 id=3&name=lee
	const qs = search.length ? search.substring(1) : ''

	// 3.声明一个数据对象，保存结果
	const args = {}

	// 4.将字符串转换成二维数组 [ [id: 3], [name: 'lee'] ]
	const qsList = qs.split('&').map((item) => item.split('='))

	// 5.遍历二维数组
	for (const item of qsList) {
		const name = decodeURIComponent(item[0])
		const value = decodeURIComponent(item[1])
		if (name.length) {
			args[name] = value
		}
	}
	return args
}
```

2. navigator 属性
3. history
