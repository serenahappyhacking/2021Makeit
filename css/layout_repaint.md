## 回流(reflow) vs 重绘(repaint) 概念

A repaint occurs when changes are made to an elements skin that changes visibly, but **do not affect its layout**.

Examples of this include **outline, visibility, background, or color**. According to Opera, repaint is expensive because the **browser must verify the visibility of all other nodes in the DOM tree**.

A reflow is even more critical to performance because it involves changes that **affect the layout** of a portion of the page (or the whole page).

Examples that cause reflows include: **adding or removing content, explicitly or implicitly** **changing width, height, font-family, font-size** and more.

这里 https://csstriggers.com/ 具体可以查询每种 css 属性是对 paint 还是 layout 还是 composition 情况产生影响。
