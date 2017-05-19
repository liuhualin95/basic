<template>
	<div class="find-music-container">
		<music-banner :imgs="imgList"></music-banner>
	</div>
</template>

<script>
	import MusicBanner from './MusicBanner'

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
		    	],
			}
		},
		components: {
			'music-banner': MusicBanner
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/find-music'
</style>