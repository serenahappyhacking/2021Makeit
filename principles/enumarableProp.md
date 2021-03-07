   ## What is enumerable properties? 
   Enumerable properties are those properties whose **internal enumerable flag** is set to **true**, which is the default for properties created via **simple assignment** or via a **property initializer** (properties defined via **Object.defineProperty** and such default enumerable to **false**)

   ## how to access
   - for...in 可以列举所有 enumerable properties, 包括自身的和继承的
   - Object.keys 只能遍历自己的对象上的可枚举的属性，不能遍历自己原型上可枚举的属性。
   - hasOwnProperty 判断这个 property 是不是 own property, 不是继承的
   - getOwnPropertyNames 它遍历自身对象的所有属性，包括可枚举不可枚举，但是原型上的属性是无法遍历的。