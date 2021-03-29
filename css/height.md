https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight

# 关于 scrollHeight, clientHeight, offsetHeight


clientHeight：这个元素的高度，占用整个空间的高度，所以，如果一个div有滚动条，那个这个高度则是不包括滚动条没显示出来的下面部分的内容。而只是单纯的DIV的高度。 

offsetHeight：是指元素内容的高度。依照上面的，那这个高度呢就是DIV内部的高度，包括可见部分及以滚动条下面的不可见部分。 

scrollTop：可以理解为滚动条可以滚动的长度。 举例，如果一个DIV高度是400px（即clientHeight为400），而里面的内容是一个很长的列表，内容的高度是1000px（即offsetHeight为1000）。那么，可见部分我们看到400px，1000px的内容中还有600px不可见。而这不可见的部分呢，正是我们通过拉动滚动条才能把这一部分显示出来。你如果滚动条不拉动，此时scrollTop为0，如果你把滚动条拉到底，显示出列表最下面的部分，此时，scrollTop为600。　所以scrollTop的取值区间为[0, 600]。所以这个600可以理解为滚动条可以滚动的长度