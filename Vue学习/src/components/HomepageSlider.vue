<template>
	<div class="slider-container">
		<div class="slider-list">
			<div>推荐</div>
			<ul class="recommend">
				<li :class="{active: lisArray[0].isActive}">
					<svg class="icon icon-yinle" aria-hidden="true">
					  <use xlink:href="#icon-yinle"></use>
					</svg>
					<span>发现音乐</span>
				</li>
				<li :class="{active: lisArray[1].isActive}">
					<svg class="icon icon-kanguo" aria-hidden="true">
					  <use xlink:href="#icon-kanguo"></use>
					</svg>
					<span>私人FM</span>
				</li>
				<li :class="{active: lisArray[2].isActive}">
					<svg class="icon icon-mv" aria-hidden="true">
					  <use xlink:href="#icon-mv"></use>
					</svg>
					<span>MV</span>
				</li>
				<li :class="{active: lisArray[3].isActive}">
					<svg class="icon icon-pengyou" aria-hidden="true">
					  <use xlink:href="#icon-pengyou"></use>
					</svg>
					<span>朋友</span>
				</li>
			</ul>
			<div>我的音乐</div>
			<ul>
				<li>
					<svg class="icon icon-yinle" aria-hidden="true">
					  <use xlink:href="#icon-yinle"></use>
					</svg>
					<span>本地音乐</span>
				</li>
				<li>
					<svg class="icon icon-icondownload" aria-hidden="true">
					  <use xlink:href="#icon-icondownload"></use>
					</svg>
					<span>下载管理</span>
				</li>
				<li>
					<svg class="icon icon-yun" aria-hidden="true">
					  <use xlink:href="#icon-yun"></use>
					</svg>
					<span>我的音乐云盘</span>
				</li>
				<li>
					<svg class="icon icon-pengyou" aria-hidden="true">
					  <use xlink:href="#icon-pengyou"></use>
					</svg>
					<span>我的歌手</span>
				</li>
				<li>
					<svg class="icon icon-mv" aria-hidden="true">
					  <use xlink:href="#icon-mv"></use>
					</svg>
					<span>我的MV</span>
				</li>
			</ul>
			<div class="created-song-list">
				创建的歌单
				<svg class="icon icon-add" aria-hidden="true"
					@click="create">
				  <use xlink:href="#icon-add"></use>
				</svg>
				<svg class="icon icon-xiangxia" aria-hidden="true"
					v-show="down" @click="changeRight">
				  <use xlink:href="#icon-xiangxia"></use>
				</svg>
				<svg class="icon icon-you" aria-hidden="true"
					v-show="right" @click="changeDown">
				  <use xlink:href="#icon-you"></use>
				</svg>
			</div>
			<ul v-if="showSongList">
				<li>
					<svg class="icon icon-xihuan" aria-hidden="true"
						style="margin-top: 0.1rem;">
					  <use xlink:href="#icon-xihuan"></use>
					</svg>
					<span>我喜欢的音乐</span>
				</li>
				<li v-if="showCreateInput">
					<input type="text" v-model="newCreatedSong"
					@keyup.enter="addToCreatedSongList(newCreatedSong)"
					@blur="hide" v-focus
					placeholder="歌单名称">
				</li>
				<li v-for="song in createdSongList">
					<svg class="icon icon-yinle" aria-hidden="true">
					  <use xlink:href="#icon-yinle"></use>
					</svg>
					<span>{{song}}</span>
				</li>
			</ul>
			<div class="collected-song-list">
				收藏的歌单
				<svg class="icon icon-xiangxia" aria-hidden="true"
					v-show="collectDown" @click="changeCollectRight">
				  <use xlink:href="#icon-xiangxia"></use>
				</svg>
				<svg class="icon icon-you" aria-hidden="true"
					v-show="collectRight" @click="changeCollectDown">
				  <use xlink:href="#icon-you"></use>
				</svg>
			</div>
			<ul v-if="showCollectedSongList">
				<li v-for="song in collectedSongList">
					<svg class="icon icon-yinle" aria-hidden="true">
					  <use xlink:href="#icon-yinle"></use>
					</svg>
					<span>{{song}}</span>
				</li>
			</ul>
		</div>
		<div class="little-song">
			<img :src="songImg">
			<div class="shadow">
				<svg class="icon icon-bianda-copy" aria-hidden="true">
				  <use xlink:href="#icon-bianda-copy"></use>
				</svg>
			</div>
			<div class="text-area">
				<span>{{randomSong.name}}</span>
				<span>{{randomSong.author}}</span>
				<svg class="icon icon-xihuan" aria-hidden="true">
				  <use xlink:href="#icon-xihuan"></use>
				</svg>
				<svg class="icon icon-kuaijin" aria-hidden="true">
				  <use xlink:href="#icon-kuaijin"></use>
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				newCreatedSong: '',
				showCreateInput: false,
				showSongList: true,
				showCollectedSongList: true,
				down: true,
				right: false,
				collectDown: true,
				collectRight: false,
				lisArray: [],
				createdSongList: [
					'欢快的歌单',
					'测试的歌单',
					'欢快的歌单',
					'测试的歌单',
					'欢快的歌单',
					'测试的歌单',
					'欢快的歌单',
					'测试的歌单'
				],
				songImg: 'http://p1.music.126.net/pNs4yiR4zlHyKeHRzvgHcw==/19123805742041026.jpg?param=140y140',
				randomIndex: -1
			}
		},
		computed: {
			collectedSongList(){
				return this.$store.state.collectedSongList;
			},
			randomSong(){
				this.randomIndex++;
				return this.$store.state.randomSongList[this.randomIndex];
			}
		},
		mounted(){
			let lis = document.querySelector('.slider-list').querySelectorAll('li');
			[].forEach.call(lis, (ali, index) => {
				Vue.set(lisArray[index], 'isActive', false);
			})
		},
		methods: {
			create(){
				this.showCreateInput = true;
				this.down = true;
				this.right = false;
				this.showSongList = true;
			},
			addToCreatedSongList(newCreatedSong){
				if(newCreatedSong === ''){
					this.showCreateInput = false;
					return;
				}
				this.createdSongList.push(newCreatedSong.trim());
				this.newCreatedSong = '';
				this.showCreateInput = false;
			},
			hide(){
				this.showCreateInput = false;
			},
			changeRight(){
				this.down = false;
				this.right = true;
				this.showSongList = false;
			},
			changeDown(){
				this.down = true;
				this.right = false;
				this.showSongList = true;
			},
			changeCollectRight(){
				this.collectDown = false;
				this.collectRight = true;
				this.showCollectedSongList = false;
			},
			changeCollectDown(){
				this.collectDown = true;
				this.collectRight = false;
				this.showCollectedSongList = true;
			},
			selectStyle(){
				let lis = document.querySelector('.slider-list').getElementsByTagName('li');
				[].forEach.call(lis, (ali, index) => {
					Vue.set(lisArray[index], 'isActive', false);
				})
				ali.addEventListener('click', () => {
					this.lisArray.forEach( (item) => {
						item.isActive = false;
					});
					this.lisArray[index].isActive = true;
				})
			}
		},
		directives: {
			focus: {
				inserted(el){
					el.focus();
				}
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/homepage-slider'
</style>