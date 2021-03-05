https://mp.weixin.qq.com/s/Kuaf1DUd1eYyDSD3VDfimQ
```javascript

// 数组复制
let a = [2,3,4]
let b = [...a]）


//Object.is

// Object.assign 合并的对象target只能合并source1、source2中的自身属性。并不会合并source1、source2中的继承属性，也不会合并不可枚举的属性，且无法正确复制get和set属性（会直接执行get/set函数，取return的值）。

// ES6在Object原型上新增了 getOwnPropertyDescriptors() 方法，此方法增强了ES5中 getOwnPropertyDescriptor方法，可以获取指定对象所有自身属性的描述对象。结合 defineProperties() 方法，可以完美复制对象，包括复制get和set属性

// ES6在Object原型上新增了getPrototypeOf()和setPrototypeOf()方法，用来获取或设置当前对象的prototype对象。

这个方法存在的意义在于，ES5中获取设置prototype对像是通过__proto__属性来实现的，

然而__proto__属性并不是ES规范中的明文规定的属性，只是浏览器各大产商“私自”加上去的属性，只不过因为适用范围广而被默认使用了，再非浏览器环境中并不一定就可以使用.

所以为了稳妥起见，获取或设置当前对象的prototype对象时，都应该采用ES6新增的标准用法。

ES6在Object原型上还新增了Object.keys()，Object.values()，Object.entries()方法，用来获取对象的所有键、所有值和所有键值对数组。
```