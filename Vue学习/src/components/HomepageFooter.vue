<template>
	<div class="footer-container">
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				placeholder: '搜索音乐，歌手，歌词，用户',
				avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
				userName: '_小林',
				showDetail: false,
				searchText: ''
			}
		},
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
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/homepage-footer'
</style>