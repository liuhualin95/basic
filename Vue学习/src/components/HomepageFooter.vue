<template>
	<div class="footer-container">
		<audio :src="url" autoplay controls
		v-show="false"
		ref="audio"
		@timeupdate="timeUpdate">
		</audio>
		<div class="prev-icon-container">
			<svg class="icon icon-nextvideo-copy" aria-hidden="true">
			  <use xlink:href="#icon-nextvideo-copy"></use>
			</svg>
		</div>
		<div class="play-icon-container" @click="switchPlay">
			<svg class="icon icon-zanting" aria-hidden="true"
			v-show="isPlaying">
			  <use xlink:href="#icon-zanting"></use>
			</svg>
			<svg class="icon icon-ttpodicon" aria-hidden="true"
			v-show="!isPlaying">
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
			:total-val="totalTimeNum"
			bar-type="music"
			@move="move"
			@skip="skip"
			></progress-bar>
			<span>{{totalTime}}</span>
			<svg class="icon icon-yinliang" aria-hidden="true"
			@click="switchVolume"
			v-if="hasVolume">
			  <use xlink:href="#icon-yinliang"></use>
			</svg>
			<svg class="icon icon-weibiaoti1" aria-hidden="true"
			@click="switchVolume"
			v-else>
			  <use xlink:href="#icon-weibiaoti1"></use>
			</svg>
			<progress-bar
			:width="100"
			:val="volume"
			:total-val="1"
			bar-type="volume"
			@move="moveVolume"
			@skip="skipVolume"
			></progress-bar>
		</div>
	</div>
</template>

<script>
	import ProgressBar from './ProgressBar'
	export default{
		data(){
			return {
				url: '../static/music/first.mp3',
				curTime: '00:00',
				totalTime: '03:32',
				curTimeNum: 0,
				totalTimeNum: 212,
				width: 700,
				volume: 1,
				isMove: false
			}
		},
		computed: {
			isPlaying(){
				return this.$store.state.isPlaying
			},
			hasVolume(){
				return this.volume !== 0
			}
		},
		components: {
			'progress-bar': ProgressBar
		},
		mounted(){
			this.$refs.audio.addEventListener('play', () => {
				this.$store.commit('play')
				this.totalTimeNum = this.$refs.audio.duration
				this.totalTime = this.format(this.totalTimeNum)
			})
			this.$refs.audio.addEventListener('pause', () => {
				this.$store.commit('pause')
			})
		},
		methods: {
			format(time){
				let sec = time.toFixed() % 60
				let min = (time.toFixed()-sec) / 60
				sec = sec < 10 ? '0'+sec : sec
				min = min < 10 ? '0'+min : min
				return min + ':' + sec
			},
			move(moveWidth, end){
				this.curTimeNum = moveWidth/this.width*this.totalTimeNum
				this.curTime = this.format(this.curTimeNum)
				this.isMove = true
				if(end){
					this.$refs.audio.currentTime = this.curTimeNum
					this.isMove = false
				}
			},
			skip(skipWidth){
				this.$refs.audio.currentTime = skipWidth/this.width*this.totalTimeNum
				this.curTimeNum = this.$refs.audio.currentTime
				this.curTime = this.format(this.curTimeNum)
			},
			moveVolume(moveWidth){
				this.volume = moveWidth/100*1
				this.$refs.audio.volume = this.volume
			},
			skipVolume(skipWidth){
				this.volume = skipWidth/100*1
				this.$refs.audio.volume = this.volume
			},
			switchVolume(){
				if(this.hasVolume){
					this.volume = 0
					this.$refs.audio.volume = this.volume
					return
				}
				this.volume = 0.2
				this.$refs.audio.volume = this.volume
			},
			switchPlay(){
				if(this.isPlaying){
					this.$refs.audio.pause()
					return
				}
				this.$refs.audio.play()
			},
			timeUpdate(){
				if(this.isMove)
					return
				this.curTimeNum = this.$refs.audio.currentTime
				this.curTime = this.format(this.curTimeNum)
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/homepage-footer'
</style>
播放器实现思路:
1、父子间组件通信：父组件把当前时间值（audio元素的currentTime)和总时间(audio元素的duration)传给子组件，子组件根据比例去算出进度条和translateX的宽度
2、给子组件绑定mousemove和mouseup事件，根据e.clientX减去进度条的offsetLeft算出距离进度条最左边的距离moveWidth然后传递给父组件，父组件根据这个moveWidth和总宽度的比例求出当前进度下的时间，然后复制给audio元素的currentTime，skip同理move求出子组件传递给父组件的skipWidth

出现的小问题：
1、移动进度条的时候继续让它播放，但是会有杂音
解决方案：移动过程中不立即将当前进度下的时间赋值给audio元素的currentTime
子组件emit时多添加一个boolean值，这个值在在mouseup触发时为true，然后赋值
2、移动进度条的过程中停留几秒会发现currentTime变成之前的时间
解决方案：在timeupdate的时候多一个数据验证当前是否在移动，在移动时不对currentTime进行更新