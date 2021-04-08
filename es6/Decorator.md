// 装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。

class cat {
  @readonly

}

- target: The **prototype** of the class that the decorated method belongs to (Foo.prototype)
- name: The name of **the decorated method** in the class (bar)
- descriptor: A descriptor object, which is the same descriptor object that would be passed to Object.defineProperty


```javascript
class Foo {
  @captureTime
  bar() {
    return this.baz().join(', ');
  }

  baz() {
    const numbers = [];

    for (let i = 0; i < 100; i++) {
      numbers.push(i);
    }

    return numbers;
  }
}

function captureTime(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    console.time(name);
    const result = original.apply(this, args);
    console.timeEnd(name);
    return result;
  };
}

```