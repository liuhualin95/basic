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
			<div class="some-list">
				<div class="every-day">
					<span>{{this.day}}</span>
					<span>{{this.date}}</span>
				</div>
				<span>每日歌曲推荐</span>
			</div>
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
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/recommend-list'
</style>