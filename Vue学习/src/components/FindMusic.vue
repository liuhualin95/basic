<template>
	<div class="find-music-container">
		<div class="find-music-header">
			<ul>
				<li v-for="(item, index) in itemLists" 
				@click="selectStyle(index)"
				:class="{active: item.isActive}">
					{{item.content}}
				</li>
			</ul>
		</div>
		<router-view :imgs="imgList" name="banner"></router-view>
		<router-view name="recommendList"></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default {
		data(){
			return {
				imgList: [
		        'http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg',
		        'http://p3.music.126.net/IWBzVmLiSOts7R1VOYBCow==/18612532836889835.jpg',
		        'http://p4.music.126.net/I1zKnPl4g9snKbAA5zJi3Q==/18623527953173535.jpg',
		        'http://p4.music.126.net/x9KxmTxNEXHQJS9n-oWRLw==/18623527953173527.jpg',
		        'http://p3.music.126.net/U3y3VH4_3cX8pXECLFsHjA==/18624627464801303.jpg',
		        'http://p4.music.126.net/F7yr2uUq982rTIWlwvaThg==/18964376555989729.jpg',
		        'http://p4.music.126.net/qADzamZDC3c5whBibC_rAQ==/18906102439712983.jpg',
		        'http://p3.music.126.net/AnIXfPFhm7amqevP7HEXng==/19210667160589857.jpg'
		    	]
			}
		},
		computed: {
			itemLists(){
				return this.$store.state.itemLists
			}
		},
		methods: {
			selectStyle(index){
				this.$router.push({name: this.itemLists[index].name})
				this.itemLists.forEach( (item) => {
					Vue.set(item, 'isActive', false)
				})
				Vue.set(this.itemLists[index], 'isActive', true)
			}
		},
		mounted(){
			Vue.set(this.itemLists[0], 'isActive', true)
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/find-music'
</style>