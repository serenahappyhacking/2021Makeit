1. Their main advantages are that they have **weak reference to objects**, so they can **easily be removed by garbage collector.**  主要是容易被删除，被js engine 垃圾回收

2. That comes at the cost of not having support for clear, size, keys, values…  
  没有 iteration, 不能遍历。不能被全部列举出来。

3. The most notable limitation of WeakMap and WeakSet is the **absence of iterations**, and the inability to get all current content.
4. 