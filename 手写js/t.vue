<template>
	<div class="jhc-upload">
		<div class="jhc-upload-scroll-item-list">
			<transition-group name="jhc-upload-transition">
				<div
					v-for="(file, index) in uploadedFile(files)"
					:key="file.__url"
					class="jhc-upload-scroll-item"
					:class="aClass(file)"
					@click="changeActiveFile($event, file)"
				>
					<label
						class="scroll-item-icons"
						:class="file.__status"
						@mouseenter="moreOver"
						@mouseleave="moreLeave"
					>
						<i class="icon rotate" :class="iconFileType(file)"></i>
						<i
							title="解析文件"
							v-if="file.__status === 'success'"
							style="display: none"
							class="fa fa-eye icon"
						></i>
						<i
							title="重新上传"
							v-if="file.__status !== 'success'"
							style="display: none"
							class="fa fa-cloud-upload icon"
							@click="reUploadFile(file, index)"
						></i>
						<i
							title="删除"
							style="display: none"
							class="fa fa-trash-o icon"
							@click="deleteFile(file, index)"
						></i>
					</label>
					<!-- <label class="scroll-item-icons edit" v-else @mouseleave="moreLeave">
                        <i class="fa fa-arrow-circle-o-up icon"></i>
                        <i class="fa fa-trash-o icon"></i>
                    </label> -->
					<img :src="file.__url" />
					<p class="jhc-item-name">{{ file.name }}</p>
				</div>
				<div :key="'xi1'" class="jhc-upload-scroll-item success">
					<label
						class="scroll-item-icons success"
						@mouseenter="moreOver"
						@mouseleave="moreLeave"
					>
						<i class="fa fa-file-image-o icon rotate"></i>
						<i
							title="解析文件"
							style="display: none"
							class="fa fa-eye icon"
						></i>
						<i
							title="删除"
							style="display: none"
							class="fa fa-trash-o icon"
						></i>
					</label>
					<img :src="require('../images/background.png')" />
					<p class="jhc-item-name">示例文件1.png</p>
				</div>
				<div :key="'xi2'" class="jhc-upload-scroll-item fail">
					<label
						class="scroll-item-icons fail"
						@mouseenter="moreOver"
						@mouseleave="moreLeave"
					>
						<i class="fa fa-file-pdf-o icon rotate"></i>
						<i
							title="重新上传"
							style="display: none"
							class="fa fa-cloud-upload icon"
						></i>
						<i
							title="删除"
							style="display: none"
							class="fa fa-trash-o icon"
						></i>
					</label>
					<img :src="require('../images/background.png')" />
					<p class="jhc-item-name">示例文件2.pdf</p>
				</div>
				<div :key="'xi3'" class="jhc-upload-scroll-item">
					<label
						class="scroll-item-icons"
						@mouseenter="moreOver"
						@mouseleave="moreLeave"
					>
						<i class="fa fa-file-excel-o icon rotate"></i>
						<i
							title="重新上传"
							style="display: none"
							class="fa fa-cloud-upload icon"
						></i>
						<i
							title="删除"
							style="display: none"
							class="fa fa-trash-o icon"
						></i>
					</label>
					<img :src="require('../images/background.png')" />
					<p class="jhc-item-name">示例文件3.xlsx</p>
				</div>
			</transition-group>
		</div>
		<div class="jhc-upload-picture-card-list">
			<transition name="jhc-upload-transition">
				<div
					class="jhc-upload-picture-card-area"
					ref="jhcUploadRef"
					@click="fileUpload"
					v-if="!uploading && !activeFile"
				>
					<a role="button" tabindex="0" class="jhc-upload-area">
						<div class="jhc-upload-file">
							<i aria-label="图标: plus" class="anticon anticon-plus"
								><svg
									viewBox="64 64 896 896"
									data-icon="plus"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
									focusable="false"
									class=""
								>
									<path
										d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
									></path>
									<path
										d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
									></path></svg
							></i>
							<div class="jhc-upload-text">Select Or Drag File</div>
						</div>
					</a>
				</div>
				<div
					class="jhc-img-pictrue-card-zoom"
					:style="
						activeFile.type === 'application/pdf'
							? 'width:130%'
							: 'width:92%;margin-left: 19%;'
					"
					v-else-if="!uploading && activeFile"
				>
					<div
						class="jhc-img-zoom-arrow"
						v-if="activeFile.type === 'application/pdf'"
					>
						<span
							class="arrow arrow-left"
							@click="pdfIndex !== 0 && pdfIndex--"
							:style="pdfIndex === 0 && 'not-allowed'"
						></span>
					</div>
					<div class="jhc-img-picture-card-area-swiper">
						<label
							class="scroll-item-icons big"
							:class="activeFile && activeFile.__status"
							@mouseenter="moreOver"
							@mouseleave="moreLeave"
						>
							<i class="icon rotate" :class="iconFileType(activeFile)"></i>
							<i
								title="解析当前"
								style="display: none"
								class="fa fa-eye icon"
							></i>
						</label>
						<div
							class="swiper-wrapper"
							:style="swiperTransL"
							v-if="activeFile.type === 'application/pdf'"
						>
							<div
								class="swiper-slide"
								v-for="(pdfImg, i) in pdfImgs"
								:key="i"
								:class="i == pdfIndex ? 'active' : ''"
								@click="handlePreview(pdfImg)"
							>
								<img draggable="false" :src="pdfImg" />
							</div>
						</div>
						<div class="swiper-wrapper" v-else>
							<div
								class="swiper-slide"
								@click="handlePreview(activeFile.__url)"
							>
								<img draggable="false" :src="activeFile.__url" />
							</div>
						</div>
					</div>
					<div
						class="jhc-img-zoom-arrow"
						v-if="activeFile.type === 'application/pdf'"
					>
						<span
							class="arrow arrow-right"
							@click="pdfIndex !== pdfImgs.length - 1 && pdfIndex++"
							:style="pdfIndex === pdfImgs.length - 1 && 'not-allowed'"
						></span>
					</div>
				</div>
				<div class="jhc-uploading-file-area" v-else-if="uploading">
					<div class="jhc-uploading-file">
						<span class="load-text">Loading</span>
						<div class="load-container">
							<div class="loader">Loading...</div>
						</div>
					</div>
				</div>
			</transition>
		</div>
		<input
			style="display: none"
			type="file"
			@change="handleFileChange"
			ref="fileInt"
			value="上传附件"
		/>
		<div class="jhc-upload-button-group">
			<slot> </slot>
		</div>
	</div>
</template>
<script>
import { PdfjsProm } from '../../../lib/PdfjsProm'
import { asBinary } from '../lib/asBindary'
import JhcUploadButton from './jhc-upload-button.vue'

export default {
	components: {
		JhcUploadButton,
	},
	name: 'JhcUpload',
	props: {
		name: String,
		fileList: {
			type: Array,
			default: [],
		},
		mode: {
			type: String,
			default: 'split',
		},
		beforeUpload: {
			type: Function,
			default: null,
		},
		withcredentials: {
			type: Boolean,
			default: false,
		},
		action: {
			type: String,
			default: '',
		},
	},
	provide() {
		return {
			fileUpload: () => {
				return this.fileUpload()
			},
		}
	},
	computed: {
		swiperTransL() {
			return 'transform: translate3d(' + -this.pdfIndex * 100 + '%, 0px, 0px);'
		},
		uploadedFile() {
			return (fileList) => fileList && fileList.filter((file) => file.__status)
		},
		aClass() {
			return (file) => {
				return (
					(file.__status && file.__status) +
					(file == this.activeFile && ' active')
				)
			}
		},
		iconFileType() {
			return (file) => {
				switch (file.type) {
					case 'application/pdf':
						return 'fa fa-file-pdf-o'
					case 'image/png' || 'image/jpg' || 'image/jpeg':
						return 'fa fa-file-image-o'
					default:
						return ''
				}
			}
		},
	},
	data() {
		return {
			transformStyle: 'cursor:grab',
			files: [],
			componentName: '',
			dropActive: false,
			uploading: false,
			activeFile: null,
			pdfImgs: [],
			pdfIndex: 0,
		}
	},
	methods: {
		moreOver(e) {
			const target = e.currentTarget
			target.classList.add('edit')
			Array.prototype.forEach.call(target.children, (child, i) => {
				if (i == 0) {
					child.setAttribute('style', 'display:none;')
				} else {
					child.setAttribute('style', '')
				}
			})
		},
		changeActiveFile(e, file) {
			if (
				!e.currentTarget.querySelector('.scroll-item-icons').contains(e.target)
			) {
				this.pdfImgs = []
				this.pdfIndex = 0
				this.activeFile = file
				this.pdfImgs = file.pdfImgs
			}
		},
		moreLeave(e) {
			const target = e.currentTarget
			target.classList.remove('edit')
			Array.prototype.forEach.call(target.children, (child, i) => {
				if (i == 0) {
					child.setAttribute('style', '')
				} else {
					child.setAttribute('style', 'display:none;')
				}
			})
		},
		dropEvent(e) {
			this.dropActive = false
			e.stopPropagation()
			e.preventDefault()
			this.uploadFile(e.dataTransfer.files)
		},
		fileUpload() {
			this.$refs.fileInt.click()
		},
		handleFileChange(e) {
			this.uploadFile(e.target.files)
		},
		handlePreview(pdfImg) {
			this.$emit('handlePreview', pdfImg, this.activeFile)
		},
		deleteFile(file, index) {
			if (this.activeFile !== file) {
				this.files.splice(index, 1)
			} else {
				this.activeFile = null
				this.pdfImgs = []
				this.files.splice(index, 1)
				// if(this.files.length >0){
				//     this.activeFile = this.files[0];
				//     if(this.files[0].type === 'application/pdf'){
				//         this.pdfImgs = this.activeFile.pdfImgs;
				//     }
				// }
			}
			this.$forceUpdate()
		},
		reUploadFile(file, index) {},
		fileUploadCurrent() {},
		uploadFile(file) {
			if (file && file.length && !this.uploading) {
				file = file[0]
				let beforeLoadPromise = null
				if (this.beforeUpload) {
					beforeLoadPromise = this.beforeUpload(file)
				}
				const beforeLoad =
					beforeLoadPromise instanceof Promise
						? beforeLoadPromise
						: new Promise((r) => {
								r()
						  })
				beforeLoad
					.then(() => {
						this.uploading = true
						const url = URL.createObjectURL(file)
						file.__url = url
						this.files.unshift(file)
						return new Promise((resolve, reject) => {
							const timeout = 6000
							const action = this.action

							const reader = new FileReader()

							reader.onloadend = () => {
								// 这个事件在读取结束后，无论成功或者失败都会触发
								if (reader.error) {
									console.log(reader.error)
								} else {
									// 1.创建
									let xhr
									if (window.XMLHttpRequest) {
										xhr = new XMLHttpRequest()
									} else {
										xhr = new ActiveXObject('Microsoft.XMLHTTP')
									}

									if (this.withcredentials) {
										xhr.withcredentials = true
									}
									// 2.打开post请求
									xhr.open('post', action, true)
									xhr.overrideMimeType('application/octet-stream')
									// 3.发送
									xhr.send(asBinary(reader.result))
									// 4.接收
									xhr.onreadystatechange = () => {
										if (xhr.readyState === 4) {
											clearTimeout(timer)
											if (
												(xhr.status >= 200 && xhr.status < 300) ||
												xhr.status === 304
											) {
												resolve(xhr.responseText)
											} else {
												// //测试暂时让提交失败也继续
												// resolve(xhr.responseText);
												reject('file Http Response fail：' + xhr.status)
											}
										}
									}
									let timer
									// 5.超时处理
									if (timeout) {
										timer = setTimeout(() => {
											xhr.abort()
											// //测试暂时让超时也继续
											// resolve(xhr.responseText);

											clearTimeout(timer)
											reject('file Http Request timeout')
										}, timeout)
									}
								}
							}
							reader.readAsBinaryString(file)
						})
					})
					.then(
						() => {
							this.fileFinish('success')
						},
						(reason) => {
							this.fileFinish('fail')
							throw new Error(reason)
						}
					)
					.catch(((this.uploading = false), console.error))
			}
		},
		fileFinish(status) {
			this.pdfImgs = []
			this.$refs.fileInt.value = null
			const activeFile = this.files[0]
			// 如果是pdf的话，会对文件处理，最后处理成一张张base64的数据
			if (activeFile.type === 'application/pdf') {
				queueMicrotask(() => {
					PdfjsProm(activeFile).then((allBase64) => {
						allBase64.forEach((base64) => {
							this.pdfImgs.push(base64)
						})
						activeFile.__url = allBase64[0]
						activeFile.pdfImgs = allBase64
						this.pdfIndex = 0
						this.activeFile = activeFile
						this.activeFile.__status = status
						this.activeFile.pdfImgs = this.pdfImgs
						this.uploading = false
						this.$emit('uploadDone', this.activeFile, this.files)
					})
				})
			} else {
				this.activeFile = activeFile
				this.activeFile.__status = status
				this.uploading = false
				this.$emit('uploadDone', this.activeFile, this.files)
			}
		},
	},
	mounted() {
		this.files = this.fileList
		this.componentName = this.name
		let dropArea = this.$refs.jhcUploadRef
		//let dropArea = document.getElementById('drop-area')
		dropArea.addEventListener('drop', this.dropEvent, false)
		dropArea.addEventListener('dragleave', (e) => {
			e.stopPropagation()
			e.preventDefault()
			this.dropActive = false
		})
		dropArea.addEventListener('dragenter', (e) => {
			e.stopPropagation()
			e.preventDefault()
			this.dropActive = true
		})
		dropArea.addEventListener('dragover', (e) => {
			e.stopPropagation()
			e.preventDefault()
			this.dropActive = true
		})
	},
}
</script>
<style lang="less" scoped>
.jhc-upload {
	width: 100%;
	display: flex;
	.jhc-upload-scroll-item-list {
		width: 300px;
		max-height: 800px;
		overflow: auto;
		.jhc-upload-scroll-item {
			width: 65%;
			text-align: center;
			transition: all 0.2s;
			border-radius: 6px;
			margin: 0 auto 50px auto;
			cursor: pointer;
			box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
			border: 1px solid #b8b6b6;
			overflow: hidden;
			position: relative;
			img {
				padding-top: 5%;
				height: 200px;
			}
			.jhc-item-name {
				margin: unset;
				font-size: 14px;
			}
		}
		.jhc-upload-scroll-item.success {
			border: 1px solid #13fa13;
		}
		.jhc-upload-scroll-item.fail {
			border: 1px solid #ff2121;
		}
		.jhc-upload-scroll-item.active {
			box-shadow: 2px 2px 2px 2px rgba(67, 118, 242, 0.5);
			background: #78a3f0;
			.jhc-item-name {
				font-weight: bold;
			}
		}
		.jhc-upload-scroll-item:hover {
			box-shadow: 2px 2px 2px 2px rgba(67, 118, 242, 0.5);
			background: #78a3f0;
			.jhc-item-name {
				font-weight: bold;
			}
		}
	}
	.jhc-upload-picture-card-list {
		width: 35%;
		margin-left: 13%;
		height: 800px;
		.jhc-upload-picture-card-area {
			background-color: #fafafa;
			border: 1px dashed #d9d9d9;
			border-radius: 4px;
			cursor: pointer;
			.jhc-upload-area {
				width: 100%;
				height: 100%;
				text-align: center;
				vertical-align: middle;
				.jhc-upload-file {
					margin: 35% 0;
				}
			}
		}
		.jhc-upload-picture-card-area:hover {
			border: 1px dashed #9dcbff;
		}
		.jhc-img-pictrue-card-zoom {
			height: 100%;
			display: flex;
			.jhc-img-zoom-arrow {
				margin: 50% 5% 0 5%;
				.arrow {
					transition: border 0.4s;
					content: '';
					width: 40px;
					height: 40px;
					cursor: pointer;
					display: inline-block;
					border-top: 2px solid darkgray;
					border-right: 2px solid darkgray;
				}
				.arrow-left {
					transform: rotate(-135deg);
				}
				.arrow-right {
					transform: rotate(45deg);
				}
				.arrow:hover {
					border-top: 2px solid rgb(87, 154, 255);
					border-right: 2px solid rgb(87, 154, 255);
				}
			}
			.jhc-img-picture-card-area-swiper {
				height: 100%;
				border: 1px solid #c0ccda;
				border-radius: 6px;
				box-sizing: border-box;
				width: 100%;
				position: relative;
				overflow: hidden;
				.swiper-wrapper {
					display: flex;
					transform: translate3d(0px, 0px, 0px);
					height: 100%;
					transition-duration: 800ms;
					.swiper-slide {
						cursor: zoom-in;
						width: 100%;
						text-align: center;
						img {
							max-height: 100%;
						}
					}
				}
			}
		}
		.jhc-uploading-file-area {
			background-color: #fafafa;
			border: 1px dashed #d9d9d9;
			border-radius: 4px;
			.jhc-uploading-file {
				text-align: center;
				margin: 35% 0;
				.load-text {
					font-size: 24px;
					color: #4285f4;
				}
			}
		}
	}
	.scroll-item-icons {
		position: absolute;
		right: -17px;
		top: -7px;
		width: 50px;
		z-index: 1;
		height: 26px;
		background: #757575;
		text-align: center;
		transform: rotate(45deg);
		box-shadow: 0 1px 1px #ccc;
		.icon {
			margin: 8px 2px 0 2px;
			font-size: 16px;
			cursor: pointer;
		}
		.icon.rotate {
			margin: 8px 0 0 0;
			transform: rotate(-45deg);
			color: white;
		}
		.icon.hide {
			display: none;
		}
	}
	.scroll-item-icons.big {
		width: 56px;
	}
	.scroll-item-icons.success {
		background: #13ce66;
	}
	.scroll-item-icons.fail {
		background: #ff2121;
	}
	.scroll-item-icons.edit {
		width: 40px;
		right: 0px;
		background: #f4d5b8;
		transform: unset;
		box-shadow: unset;
	}
	.jhc-upload-button-group {
		position: absolute;
		left: 300px;
	}
	.jhc-upload-transition-enter-active,
	.jhc-upload-transition-leave-active {
		transition: opacity 0.3s;
	}
	.jhc-upload-transition-enter, .jhc-upload-transition-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
	.load-container .loader {
		color: #4285f4;
		font-size: 12px;
		margin: 50px auto;
		width: 1em;
		height: 1em;
		border-radius: 50%;
		position: relative;
		text-indent: -9999em;
		-webkit-animation: load 1.3s infinite linear;
		animation: load 1.3s infinite linear;
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
	}

	@-webkit-keyframes load {
		0%,
		100% {
			box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
				0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
		}
		12.5% {
			box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
				0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
		}
		25% {
			box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
				0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
		}
		37.5% {
			box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
				0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
		}
		50% {
			box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
				0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
		}
		62.5% {
			box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
				0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
		}
		75% {
			box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
				2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
				-2em -2em 0 0;
		}
		87.5% {
			box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
				0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
		}
	}

	@keyframes load {
		0%,
		100% {
			box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
				0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
		}
		12.5% {
			box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
				0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
		}
		25% {
			box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
				0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
		}
		37.5% {
			box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
				0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
		}
		50% {
			box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
				0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
		}
		62.5% {
			box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
				0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
		}
		75% {
			box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
				2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
				-2em -2em 0 0;
		}
		87.5% {
			box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
				0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
		}
	}
}
</style>
