<template>
	<div class="header-container">
		<img src="../assets/music-icon.png">
		<label>
			<input type="text"
			:placeholder="placeholder">
			<svg class="icon icon-search" aria-hidden="true">
			  <use xlink:href="#icon-sousuo"></use>
			</svg>
		</label>
		<div class="header-right">
			<div class="user-details">
				<!-- <div class="avatar-container"> -->
				<img :src="avatar" class="avatar">
				<!-- </div> -->
				<span>{{userName}}</span>
				<div class="small-triangle"></div>
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
	export default{
		data(){
			return {
				placeholder: '搜索音乐，歌手，歌词，用户',
				avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
				userName: '_小林'
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/homepage-header'
</style>