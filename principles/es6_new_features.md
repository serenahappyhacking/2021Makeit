```javascript

// 数组复制
let a = [2,3,4]
let b = [...a]）


//Object.is

// Object.assign 合并的对象target只能合并source1、source2中的自身属性。并不会合并source1、source2中的继承属性，也不会合并不可枚举的属性，且无法正确复制get和set属性（会直接执行get/set函数，取return的值）。

// ES6在Object原型上新增了 getOwnPropertyDescriptors() 方法，此方法增强了ES5中 getOwnPropertyDescriptor方法，可以获取指定对象所有自身属性的描述对象。结合 defineProperties() 方法，可以完美复制对象，包括复制get和set属性

```