<template>
	<div class="footer-container">
		<audio :src="url" autoplay controls
		v-show="false">
		</audio>
		<div class="prev-icon-container">
			<svg class="icon icon-nextvideo-copy" aria-hidden="true">
			  <use xlink:href="#icon-nextvideo-copy"></use>
			</svg>
		</div>
		<div class="play-icon-container">
			<svg class="icon icon-ttpodicon" aria-hidden="true">
			  <use xlink:href="#icon-ttpodicon"></use>
			</svg>
		</div>
		<div class="next-icon-container">
			<svg class="icon icon-xiayishou" aria-hidden="true">
			  <use xlink:href="#icon-xiayishou"></use>
			</svg>
		</div>
		<div class="mid-container">
			<span>{{curTime}}</span>
			<progress-bar
			:width="width"
			:val="curTimeNum"
			:totalVal="totalTimeNum"
			></progress-bar>
			<span>{{totalTime}}</span>
		</div>
	</div>
</template>

<script>
	import ProgressBar from './ProgressBar'
	export default{
		data(){
			return {
				url: 'http://music.163.com/#/m/song?id=29823756&userid=92661811',
				curTime: '00:00',
				totalTime: '03:32',
				curTimeNum: 0,
				totalTimeNum: 212,
				width: 62
			}
		},
		components: {
			'progress-bar': ProgressBar
		},
		methods: {
			
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/homepage-footer'
</style>