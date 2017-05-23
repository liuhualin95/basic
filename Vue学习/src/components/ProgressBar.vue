<template>
	<div class="progress-bar-container" :style="{width: width+'rem'}">
		<div class="progress-bar">
			
		</div>
	</div>
</template>

<script>
	export default {
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
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/progress-bar'
</style>