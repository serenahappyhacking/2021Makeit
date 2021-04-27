/** webpack 打包的基本流程 */
const fs = require('fs')
const child = require('path')
const p = require('path')

// babel 全家桶
const babel = require('@bable/core')
const types = require('@babel/types')
const traverse = require('@babel/traverse').default

// 生成依赖图, 递归
function generateDependencies(filePath, isRoot = false) {
	// 矩阵 -- 数组
	const imports = {
		depend: [],
		local: [],
	}

	// 拿到文件的字符串形式
	const context = fs.readFileSync(filePath, 'utf-8')

	// 如何从字符串中去分析依赖呢？用 AST， 这时候该引入 Babel 了。
	// code str --> tokens --> ast (ast 会提供一些方法，可以遍历和操作这个 ast tree, 用了改变这个 ast tree) -> plugins -> code str
	const transform = babel.transform(context)
	const ast = babel.parseAsync(transform.code)

	// 递归 ast
	traverse(ast, {
		ImportDeclaration(path) {
			const { source, specifier } = path
			const { value } = source
			const names = specifier.map((e) => e.local.name) // ['React']

			if (!~value.indexOf('.')) {
				import.depend.push(value)
			}
		},
	})

	return imports
}

// 遍历文件，提取依赖
function travel(config) {
	const { input, output = 'dist', external } = config

	if (fs.existsSync(output)) {
		child.execSync('rm -rf ' + output)
	}

	if (!fs.existsSync(output)) {
		fs.mkdirSync(output)
		fs.mkdirSync(output + '/static')
	}

	// 读取入口文件
	fs.readFileSync(input).forEach((file) => {
		const filePath = p.join(input, file, 'index.js') // 'src/pages/index.js'

		// 生成依赖图， graph肯定是和矩阵挂钩的，矩阵又是数组 Map 等基础数据结构。
		const imports = generateDependencies(filePath, true)
	})
}
