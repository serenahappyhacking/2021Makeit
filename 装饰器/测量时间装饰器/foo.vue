<template>
	<div></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { measure } from './measure'

export default class Foo extends Vue {
	// 计算一下 longTimeFn 这个异步函数执行的时间。
	@measure
	public async created() {
		await this.longTimeFn()
	}

	// 这是一个很长时间的异步函数
	private longTimeFn() {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, 2000)
		})
	}
}
</script>
