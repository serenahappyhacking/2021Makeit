## 回流(reflow) vs 重绘(repaint) 概念

A repaint occurs when changes are made to an elements skin that changes visibly, but **do not affect its layout**.

Examples of this include **outline, visibility, background, or color**. According to Opera, repaint is expensive because the **browser must verify the visibility of all other nodes in the DOM tree**.

A reflow is even more critical to performance because it involves changes that **affect the layout** of a portion of the page (or the whole page).

Examples that cause reflows include: **adding or removing content, explicitly or implicitly** **changing width, height, font-family, font-size** and more.

- 如何优化/避免？
  
CSS

避免使用table布局。
尽可能在DOM树的最末端改变class。
避免设置多层内联样式。
将动画效果应用到position属性为absolute或fixed的元素上。
避免使用CSS表达式（例如：calc()）。

JavaScript

避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。
这里 https://csstriggers.com/ 具体可以查询每种 css 属性是对 paint 还是 layout 还是 composition 情况产生影响。
