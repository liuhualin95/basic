<template>
	<div class="header-container">
		<img src="../assets/music-icon.png"
		@click="goFindMusic">
		<label>
			<input type="text" 
			v-model='searchText' 
			@focus="inputFocus"
			@blur="inputBlur"
			@click="searchHandler(searchText)"
			:placeholder="placeholder">
			<svg class="icon icon-search" aria-hidden="true">
			  <use xlink:href="#icon-sousuo"></use>
			</svg>
		</label>
		<div class="header-right">
			<div class="user-details">
				<img :src="avatar" class="avatar">
				<span @click="showUserDetail">{{userName}}</span>
				<div class="small-triangle" @click="showUserDetail"></div>
			</div>
			<div v-if="showDetail" class="detail-content">
				<div class="up-triangle"></div>
				<div class="content-container">
					<div>
						<img :src="avatar" class="avatar">
						<span>{{userName}}</span>
						<button>
							<svg class="icon icon-daohang" aria-hidden="true">
							  <use xlink:href="#icon-daohang"></use>
							</svg>
							签到
						</button>
					</div>
					<ul class="ul-first">
						<li>
							<p>0</p>
							<p>动态</p>
						</li>
						<li>
							<p>0</p>
							<p>关注</p>
						</li>
						<li>
							<p>0</p>
							<p>粉丝</p>
						</li>
					</ul>
					<ul class="ul-second">
						<li>
							<svg class="icon icon-huiyuanzhongxin" aria-hidden="true">
							  <use xlink:href="#icon-huiyuanzhongxin"></use>
							</svg>
							<span>会员中心</span>
							<span>未订购</span>
							<svg class="icon icon-you" aria-hidden="true">
							  <use xlink:href="#icon-you"></use>
							</svg>
						</li>
						<li>
							<svg class="icon icon-dengji" aria-hidden="true">
							  <use xlink:href="#icon-dengji"></use>
							</svg>
							<span>等级</span>
							<span style="margin-left: ">Lv.8</span>
							<svg class="icon icon-you" aria-hidden="true">
							  <use xlink:href="#icon-you"></use>
							</svg>
						</li>
						<li>
							<svg class="icon icon-jifenshangcheng" aria-hidden="true">
							  <use xlink:href="#icon-jifenshangcheng"></use>
							</svg>
							<span>积分商城</span>
							<span>102积分</span>
							<svg class="icon icon-you" aria-hidden="true">
							  <use xlink:href="#icon-you"></use>
							</svg>
						</li>
						<li>
							<svg class="icon icon-shezhi" aria-hidden="true">
							  <use xlink:href="#icon-shezhi"></use>
							</svg>
							<span>个人信息设置</span>
							<svg class="icon icon-you" aria-hidden="true">
							  <use xlink:href="#icon-you"></use>
							</svg>
						</li>
						<li>
							<svg class="icon icon-toys" aria-hidden="true">
							  <use xlink:href="#icon-toys"></use>
							</svg>
							<span>绑定社交账号</span>
							<svg class="icon icon-you" aria-hidden="true">
							  <use xlink:href="#icon-you"></use>
							</svg>
						</li>
						<li>
							<svg class="icon icon-add-library" aria-hidden="true">
							  <use xlink:href="#icon-add-library"></use>
							</svg>
							<span>导入歌单</span>
							<svg class="icon icon-you" aria-hidden="true">
							  <use xlink:href="#icon-you"></use>
							</svg>
						</li>
						<li>
							<svg class="icon icon-tuichu" aria-hidden="true">
							  <use xlink:href="#icon-tuichu"></use>
							</svg>
							<span>退出登录</span>
							<svg class="icon icon-you" aria-hidden="true">
							  <use xlink:href="#icon-you"></use>
							</svg>
						</li>
					</ul>
				</div>
			</div>
			<div class="icon-list">
				<svg class="icon icon-skin" aria-hidden="true">
				  <use xlink:href="#icon-skin"></use>
				</svg>
				<svg class="icon icon-email" aria-hidden="true">
				  <use xlink:href="#icon-email"></use>
				</svg>
				<svg class="icon icon-shezhi" aria-hidden="true">
				  <use xlink:href="#icon-shezhi"></use>
				</svg>
			</div>
			<div class="another-icon-list">
				<svg class="icon icon-minimize" aria-hidden="true">
				  <use xlink:href="#icon-minimize"></use>
				</svg>
				<svg class="icon icon-minus" aria-hidden="true">
				  <use xlink:href="#icon-minus"></use>
				</svg>
				<svg class="icon icon-zuidahua" aria-hidden="true">
				  <use xlink:href="#icon-zuidahua"></use>
				</svg>
				<svg class="icon icon-guanbi" aria-hidden="true">
				  <use xlink:href="#icon-guanbi"></use>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import Vue from 'vue'
	
	export default{
		data(){
			return {
				placeholder: '搜索音乐，歌手，歌词，用户',
				showDetail: false,
				searchText: ''
			}
		},
		computed: mapState({
			avatar: state => state.avatar,
			userName: state => state.userName,
			itemLists: state => state.itemLists
		}),
		methods: {
			showUserDetail(){
				this.showDetail = !this.showDetail;
			},
			inputFocus(){
				this.placeholder = '';
				document.querySelector(".icon-search").style.color = "#fff";
			},
			inputBlur(){
				this.placeholder = '搜索音乐，歌手，歌词，用户';
				let search = document.querySelector(".icon-search")
				search.style.color = "#c87676";
				search.onmouseover = () => {
					search.style.color = "#fff";
				};
				search.onmouseout = () => {
					search.style.color = "#c87676";
				};
			},
			searchHandler(searchText){
				//对输入内容进行处理
			},
			goFindMusic(){
				this.$router.push({name: 'FindMusic'})
				this.itemLists.forEach( (item) => {
					Vue.set(item, 'isActive', false)
				})
				Vue.set(this.itemLists[0], 'isActive', true)
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/homepage-header'
</style>