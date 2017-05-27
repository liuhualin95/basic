<template>
	<div class="footer-container">
		<audio :src="url" autoplay controls
		v-show="false"
		ref="audio"
		@timeupdate="timeUpdate"
		@ended="next">
		</audio>
		<div class="prev-icon-container"
		@click="prevSong">
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
		<div class="next-icon-container"
		@click="nextSong">
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
			<svg class="icon icon-ttpodicon1" aria-hidden="true"
			v-if="playStateIndex === 0"
			@click="switchPlayState">
			  <use xlink:href="#icon-ttpodicon1"></use>
			</svg>
			<svg class="icon icon-danquxunhuan" aria-hidden="true"
			v-else-if="playStateIndex === 1"
			@click="switchPlayState">
			  <use xlink:href="#icon-danquxunhuan"></use>
			</svg>
			<svg class="icon icon-suijibofang" aria-hidden="true"
			v-else-if="playStateIndex === 2"
			@click="switchPlayState">
			  <use xlink:href="#icon-suijibofang"></use>
			</svg>
			<svg class="icon icon-shunxubofang" aria-hidden="true"
			v-else
			@click="switchPlayState">
			  <use xlink:href="#icon-shunxubofang"></use>
			</svg>
			<div class="word" :class="{active: showWord}"
			@click="showWord=!showWord">
				<span>词</span>
			</div>
			<svg class="icon icon-ttpodicon2" aria-hidden="true"
			@click="showSongList=!showSongList">
			  <use xlink:href="#icon-ttpodicon2"></use>
			</svg>
			<div class="music-list-num"
			@click="showSongList=!showSongList">
				<span>{{this.playSongNum}}</span>
			</div>
		</div>
		<div v-if="showSongList" class="song-list-container">
			<div class="list-header">
				<span>播放列表</span>
			</div>
			<div class="list-num">
				<span>总{{this.playSongNum}}首</span>
			</div>
			<ul>
				<li v-for="(item, index) in this.playSongList"
				@click="$store.commit('setPlayIndex', index)">
					<span>{{item.name}}</span>
					<span>{{item.author}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import ProgressBar from './ProgressBar'
	import {mapState} from 'vuex'
	import axios from 'axios'
	import '../mock/comments.js'

	export default{
		data(){
			return {
				curTime: '00:00',
				totalTime: '03:32',
				curTimeNum: 0,
				totalTimeNum: 212,
				width: 700,
				volume: 1,
				isMove: false,
				playState: ['loop', 'loopone', 'random', 'order'],
				playStateIndex: 0,
				showWord: false,
				showSongList: false
			}
		},
		computed: {
			hasVolume(){
				return this.volume !== 0
			},
			...mapState({
				isPlaying: state => state.isPlaying,
				nowPlayIndex: state => state.nowPlayIndex,
				playSongNum: state => state.playSongList.length,
				playSongList: state => state.playSongList,
				url: state => state.playSongList[state.nowPlayIndex].url,
				comments: state => state.playSongList[state.nowPlayIndex].comments
			})
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
			this.width = document.body.clientWidth < 1450 ? 700 : 1200
			window.onresize = () => {
				this.width = document.body.clientWidth < 1450 ? 700 : 1200
			}
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
				this.curTimeNum = this.$refs.audio&&this.$refs.audio.currentTime
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
				this.curTimeNum = this.$refs.audio&&this.$refs.audio.currentTime
				this.curTime = this.format(this.curTimeNum)
			},
			switchPlayState(){
				this.playStateIndex === 3 ? this.playStateIndex = 0 :
				this.playStateIndex++
			},
			next(){
				if(this.playStateIndex === 0)
					this.nowPlayIndex === this.playSongNum - 1 ?
					this.$store.commit('setPlayIndex', 0) :
					this.$store.commit('setPlayIndex', ++this.nowPlayIndex)
				if(this.playStateIndex === 1)
					this.$refs.audio.load()
				if(this.playStateIndex === 2){
					let num = Math.floor(Math.random()*this.playSongNum)
					num === this.nowPlayIndex ? this.$refs.audio.load() :
					this.$store.commit('setPlayIndex', num)
				}
				if(this.playStateIndex === 3){
					if(this.nowPlayIndex === this.playSongNum - 1)
						return
					this.$store.commit('setPlayIndex', ++this.nowPlayIndex)
				}	
			},
			nextSong(){
				this.nowPlayIndex === this.playSongNum - 1 ?
				this.$store.commit('setPlayIndex', 0) :
				this.$store.commit('setPlayIndex', ++this.nowPlayIndex)
			},
			prevSong(){
				this.nowPlayIndex === 0 ?
				this.$store.commit('setPlayIndex', this.playSongNum - 1) :
				this.$store.commit('setPlayIndex', --this.nowPlayIndex)
			}
		},
		watch: {
			nowPlayIndex(){
				if(!this.comments.length){
					axios.get('http://playsong.comments.com')
					.then( res => {
						this.$store.commit('initComments', res.data.comments)
					})
				}
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/homepage-footer'
</style>
<!-- 播放器实现思路:
1、父子间组件通信：父组件把当前时间值（audio元素的currentTime)和总时间(audio元素的duration)传给子组件，子组件根据比例去算出进度条和translateX的宽度
2、给子组件绑定mousemove和mouseup事件，根据e.clientX减去进度条的offsetLeft算出距离进度条最左边的距离moveWidth然后传递给父组件，父组件根据这个moveWidth和总宽度的比例求出当前进度下的时间，然后复制给audio元素的currentTime，skip同理move求出子组件传递给父组件的skipWidth

出现的小问题：
1、移动进度条的时候继续让它播放，但是会有杂音
解决方案：移动过程中不立即将当前进度下的时间赋值给audio元素的currentTime
子组件emit时多添加一个boolean值，这个值在在mouseup触发时为true，然后赋值
2、移动进度条的过程中停留几秒会发现currentTime变成之前的时间
解决方案：在timeupdate的时候多一个数据验证当前是否在移动，在移动时不对currentTime进行更新 -->