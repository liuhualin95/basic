<template>
	<div class="random-song-container">
		<div class="big-song">
			<div class="left-container">
				<div class="img-container">
					<img :src="nowPlaySong.songImg">
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
				<p>{{nowPlaySong.name}}</p>
				<p>
					<span>专辑: {{nowPlaySong.name}}</span>
					<span>专辑: {{nowPlaySong.author}}</span>
				</p>
				<div class="song-words">
					<p v-for="item in nowPlaySong.songWords">
						{{item}}
					</p>
				</div>
			</div>
		</div>
		<div class="publish-comment">
			<span>听友评论</span>
			<span>（已有{{nowPlaySong.comments.length}}条评论）</span>
			<div class="line"></div>
			<div class="comment-input">
				<input type="text" v-model="newComment"
				placeholder="发表评论" 
				@keyup.enter="addComment"
				ref="addComment">
			</div>
		</div>
		<div class="wonderful-comment">
			<span>最新评论</span>
			<ul v-if="comments.length">
				<li v-for="item in commentList">
					<img :src="item.avatar">
					<div class="comment-content">
						<span>{{item.name}}:</span>
						<span>{{item.content}}</span>
						<p style="margin-top: .8rem;">{{item.time}}</p>
					</div>
				</li>
			</ul>
			<pagination :pageNo="pageNo" :current="currentPage"
			@goPage="goPage"></pagination>
			<div class="no-comment" v-if="comments.length === 0">
				<span>暂无评论，快来第一个
					<a @click="$refs.addComment.focus()">评论</a>吧
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {mapGetters} from 'vuex'
	import Pagination from './Pagination'
	import axios from 'axios'
	import '../mock/comments.js'

	export default {
		data(){
			return {
				newComment: '',
				currentPage: 1,
				commentList: []
			}
		},
		mounted(){
			axios.get('http://playsong.comments.com')
			.then( res => {
				this.$store.commit('initComments', res.data.comments)
				this.commentList = this.comments.slice(this.limit*(this.currentPage-1), this.limit*this.currentPage)
			})
		},
		computed: {
			...mapState({
				nowPlayIndex: state => state.nowPlayIndex,
				nowPlaySong: state => state.playSongList[state.nowPlayIndex],
				avatar: state => state.avatar,
				userName: state => state.userName,
				comments: state => state.playSongList[state.nowPlayIndex].comments,
				limit: state => state.limit,
				pageNo: state => state.pageNo
			}),
			...mapGetters({
				pageNo: 'pageNo'
			})
		},
		components: {
			'pagination': Pagination
		},
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
			},
			goPage(index){
				this.currentPage = index
			}
		},
		watch: {
			currentPage(val){
				this.commentList = this.comments.slice(this.limit*(val-1), this.limit*val)
			},
			comments(val){
				this.commentList = this.comments.slice(this.limit*(this.currentPage-1), this.limit*this.currentPage)
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/now-play-song'
</style>