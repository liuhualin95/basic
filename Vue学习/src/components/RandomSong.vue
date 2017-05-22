<template>
	<div class="random-song-container">
		<div class="big-song">
			<div class="left-container">
				<div class="img-container">
					<img :src="randomSong.songImg">
					<div class="icon-container">
						<svg class="icon icon-ttpodicon" aria-hidden="true"
							style="margin-right: -0.5rem;">
						  <use xlink:href="#icon-ttpodicon"></use>
						</svg>
					</div>
				</div>
				<div class="icon-lists">
					<div class="icon-container">
						<svg class="icon icon-xihuan" aria-hidden="true">
						  <use xlink:href="#icon-xihuan"></use>
						</svg>
					</div>
					<div class="icon-container">
						<svg class="icon icon-jinlingyingcaiwangtubiao30" aria-hidden="true">
						  <use xlink:href="#icon-jinlingyingcaiwangtubiao30"></use>
						</svg>
					</div>
					<div class="icon-container">
						<svg class="icon icon-xiayishou_next" aria-hidden="true">
						  <use xlink:href="#icon-xiayishou_next"></use>
						</svg>
					</div>
					<div class="icon-container">
						<svg class="icon icon-shenglve" aria-hidden="true">
						  <use xlink:href="#icon-shenglve"></use>
						</svg>
					</div>
				</div>
			</div>
			<div class="text-area">
				<p>{{randomSong.name}}</p>
				<p>
					<span>专辑: {{randomSong.name}}</span>
					<span>专辑: {{randomSong.author}}</span>
				</p>
				<div class="song-words">
					<p v-for="item in randomSong.songWords">
						{{item}}
					</p>
				</div>
			</div>
		</div>
		<div class="publish-comment">
			<span>听友评论</span>
			<span>（已有{{randomSong.comments.length}}条评论）</span>
			<div class="line"></div>
			<div class="comment-input">
				<input type="text" v-model="newComment"
				placeholder="发表评论" 
				@keyup.enter="addComment">
			</div>
		</div>
		<div class="wonderful-comment">
			<span>精彩评论</span>
			<ul>
				<li v-for="item in randomSong.comments">
					<img :src="avatar">
					<div class="comment-content">
						<span>{{item.name}}:</span>
						<span>{{item.content}}</span>
						<p style="margin-top: .8rem;">{{item.time}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		data(){
			return {
				newComment: ''
			}
		},
		computed: mapState({
			randomIndex: state => state.randomIndex,
			randomSong: state => state.randomSongList[state.randomIndex],
			avatar: state => state.avatar,
			userName: state => state.userName
		}),
		methods: {
			addComment(){
				let today = new Date(),
					y = today.getFullYear(),
					m = today.getMonth()+1,
					d = today.getDate(),
					nowTime = y+'年'+m+'月'+d+'日 '+today.toString().slice(15, 21);
				let comment = {
					avatar: this.avatar,
					name: this.userName,
					content: this.newComment,
					time: nowTime
				};
				this.$store.dispatch('addComment', comment);
				this.newComment = '';
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/random-song'
</style>