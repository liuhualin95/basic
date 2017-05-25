<template>
	<div class="recommend-list-container">
		<div>
			<span>推荐歌单</span>
			<span @click="goSongList">
				更多
				<svg class="icon icon-you" aria-hidden="true">
				  <use xlink:href="#icon-you"></use>
				</svg>
			</span>
		</div>
		<div class="recommend-list">
			<ul>
				<li>
					<div class="every-day">
						<span>{{this.day}}</span>
						<span>{{this.date}}</span>
					</div>
					<span>每日歌曲推荐</span>
				</li>
				<li v-for="(item, index) in recommendLists">
					<div class="list-img-container"
					@mouseenter="item.showIcon = true"
					@mouseleave="item.showIcon = false">
						<img :src="item.src">
						<transition name="icon-switch"
						@after-enter="afterEnter(index)"
						@after-leave="afterLeave(index)">
							<div class="icon-container" v-show="item.showIcon">
								<svg class="icon icon-ttpodicon" aria-hidden="true">
								  <use xlink:href="#icon-ttpodicon"></use>
								</svg>
							</div>
						</transition>
						<transition name="hint-switch">
							<div class="hint-container" v-show="item.showHint">
								<span>{{item.hint}}</span>
							</div>
						</transition>
						<span v-show="!item.showHint">
							<svg class="icon icon-erji1" aria-hidden="true">
							  <use xlink:href="#icon-erji1"></use>
							</svg>
							{{item.num}}
						</span>
					</div>
					<span>{{item.name}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default {
		computed: {
			itemLists(){
				return this.$store.state.itemLists
			},
			recommendLists(){
				return this.$store.state.recommendLists
			},
			day(){
				let arr = new Array("日", "一", "二", "三", "四", "五", "六")
				return '星期'+arr[new Date().getDay()]
			},
			date(){
				return new Date().getDate()
			}
		},
		methods: {
			goSongList(){
				this.$router.push({name: 'SongList'})
				this.itemLists.forEach( (item) => {
					Vue.set(item, 'isActive', false)
				})
				Vue.set(this.itemLists[1], 'isActive', true)
			},
			afterEnter(index){
				setTimeout( () => {
					this.recommendLists[index].showHint = true
				}, 300)
			},
			afterLeave(index){
				setTimeout( () => {
					this.recommendLists[index].showHint = false
				}, 300)
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/recommend-list'
</style>
<!-- mouseenter和mouseleave只有鼠标穿过被选元素才会触发
mouseover和mouseout在鼠标穿过被选元素和任何子元素时均会触发 -->