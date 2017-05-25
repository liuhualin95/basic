<template>
	<div class="progress-bar-container" :style="{width: width+'px'}"
	ref="progressBar"
	@mousedown="skip"
	@mouseover="showDot"
	@mouseout="hideDot">
		<div class="progress-bar"
		:style="{ width: isMove ? moveWidth+'px' : normalWidth+'px'}">
		</div>
		<span 
		v-if="barType === 'music'"
		class="dot"
		:style="{ transform: isMove ? 'translate(' + moveWidth + 'px, -50%)'
			: 'translate(' + normalWidth + 'px, -50%)' }"
		@mousedown="moveDot">
			<span class="circle"></span>
		</span>
		<span 
		v-else-if="barType === 'volume'"
		class="dot-volume"
		:style="{ transform: isMove ? 'translate(' + moveWidth + 'px, -50%)'
			: 'translate(' + normalWidth + 'px, -50%)' }"
		@mousedown="moveDot"
		v-show="showVolumeDot"
		ref='dot'>
			<span class="circle"></span>
		</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isMove: false,
				moveWidth: 0,
				showVolumeDot: false
			}
		},
		props: {
			width: {
				type: Number,
				default: 0
			},
			val: {
				type: Number,
				default: 0
			},
			totalVal: {
				type: Number,
				default: 0
			},
			barType: {
				type: String,
				required: true
			}
		},
		computed: {
			normalWidth(){
				return (this.val/this.totalVal*this.width).toFixed(3)
			}
		},
		methods: {
			moveDot(){
				document.addEventListener('mousemove', this.moveHandler)
				document.addEventListener('mouseup', this.upHandler)
			},
			moveHandler(e){
				e.preventDefault();
				this.isMove = true
				let dragWidth = e.clientX - this.$refs.progressBar.offsetLeft
				if(dragWidth < 0){
					this.moveWidth = 0
				}else if(dragWidth > this.width){
					this.moveWidth = this.width
				}else{
					this.moveWidth = dragWidth
				}
				if(this.$refs.dot)
					this.showVolumeDot=true
				this.$emit('move', this.moveWidth, false)
			},
			upHandler(e){
				e.preventDefault();
				this.isMove = false
				document.removeEventListener('mousemove', this.moveHandler)
				document.removeEventListener('mouseup', this.upHandler)
				if(this.$refs.dot)
					this.showVolumeDot=false
				this.$emit('move', this.moveWidth, true)
			},
			skip(e){
				let skipWidth = e.clientX - this.$refs.progressBar.offsetLeft
				if(skipWidth < 0 || skipWidth > this.width)
					return
				else
					this.$emit('skip', skipWidth)
			},
			showDot(){
				this.showVolumeDot=true
			},
			hideDot(){
				this.showVolumeDot=false
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/progress-bar'
</style>