/**
 *  vue loader is a loader for webpack , transform *.vue to *.bundle.js . 然后放入浏览器中运行。
 *  就是把 vue 组件（vue 文件） 转换为一个 a plain js module.
 *
 *  vue-loader 把 *.vue 转化为 js 模块的时候，其实内部调用了 4 个 小的 loader: selector,  style-compiler, template-compiler, babel-loader.
 */
