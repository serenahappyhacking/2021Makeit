## 对 URI 编码
- encodeURI() 如果你要编码整个URL，然后需要使用这个URL。 encodeURI 是用来处理整个 URI 的，它应该接受 URI 的 protocol, host, port 等部分，只对 path 和 query 进行编码。
- encodeURIComponent() 用来编码你准备用作 query 一部分的字符串的，编码URL中的参数。


```javascript
// https:// xxxxx?root=kjhdkfjhsdsd (root后面是已经被encode的query部分)

const search = window.location.search //  Returns:'?root=xxxx'
const searchObj  = parse(search, { ignoreQueryPrefix: true}) // { root: 'xxxx'}
const query = get(searchObj, 'root') // 取出被编码的 query string
if (query) {

  // 在本地存储的就是已经被解码过的 query string
  localStorage.setItem('cachedQuery', decodeURIComponent(query)) // setItem 会把不是字符串的值 toString 一下
  
}

```