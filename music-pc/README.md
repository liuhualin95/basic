# music-pc

> a music-pc project by vue<br>
> 可以下载loadme文件打开index.html查看demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
``` bash
> npm install --save vuex
> npm install --save vue-resource
> npm install --save vue-router
> npm install axios --save
> npm install mockjs

> sass安装第一步，
> npm install node-sass --save-dev
> npm install sass-loader --save-dev
> 第二步，打开webpack.base.config.js在loaders里面加上(似乎现在不需要了)
>     {
>       test: /\.scss$/,
>       loaders: ["style", "css", "sass"]
>     }   
> 第三步，在需要用到scss的地方写上
> 	<style scoped lang='scss'>
> 	</style>
```

## 轮播
![轮播](https://github.com/liuhualin95/basic/blob/master/music-pc/pic/carousel.png)
``` bash
轮播图实现思路：
1、写一个ul里面三个li放图（第七张第一张第二张），同时用transform写好位置li上添加transition有个动态效果
2、写一个定时器，classbox里面最后一个出栈，然后放到数组首位
3、以顺序加载为例子，'right'(class)下一个出现的位置是0，就把第一张图的src的index替换为nextImgIndex，是1就把第二张图的src的index替换为nextImgIndex
4、点击进行change的时候就是看e.target.className里面是什么类，是left就是prevImg，是right就nextImg
5、下面小列表用v-for去写，比较nowImgIndex和index，相等active，差1就prev和next
6、skip的话就是nowImgIndex和index不止差1，根据差值写个for循环prev和next，同时设置isSkip为true，根据index添加skip-left，
skip-right动画效果的话，用index使类left对应skip-left，right对应skip-right，再写skip的transform的scale小一点，然后transition设置为none，
然后把isSkip的值过20ms设置为false，取消skip-left，skip-right类，这样就会变回之前的transform和transition了
```

## 推荐歌单
![推荐歌单](https://github.com/liuhualin95/basic/blob/master/music-pc/pic/recommend-list.png)
``` bash
推荐歌单注意事项：
1、使用transition过渡动画
2、使用after-enter和after-leave方法来添加两种动画
3、onmouseenter和onmouseleave只有鼠标穿过被选元素才会触发
onmouseover和onmouseout在鼠标穿过被选元素和任何子元素时均会触发
```

## 音乐播放、进度条、播放模式
![音乐播放](https://github.com/liuhualin95/basic/blob/master/music-pc/pic/footer.png)
``` bash
播放器实现思路:
1、父子间组件通信：父组件把当前时间值（audio元素的currentTime)和总时间(audio元素的duration)传给子组件，子组件根据比例去算出进度条和translateX的宽度
2、给子组件绑定mousemove和mouseup事件，根据e.clientX减去进度条的offsetLeft算出距离进度条最左边的距离moveWidth然后传递给父组件，父组件根据这个moveWidth和总宽度的比例求出当前进度下的时间，然后复制给audio元素的currentTime，skip同理move求出子组件传递给父组件的skipWidth

出现的小问题：
1、移动进度条的时候继续让它播放，但是会有杂音
解决方案：移动过程中不立即将当前进度下的时间赋值给audio元素的currentTime
子组件emit时多添加一个boolean值，这个值在在mouseup触发时为true，然后赋值
2、移动进度条的过程中停留几秒会发现currentTime变成之前的时间
解决方案：在timeupdate的时候多一个数据验证当前是否在移动，在移动时不对currentTime进行更新
```

## 评论、分页
![评论分页](https://github.com/liuhualin95/basic/blob/master/music-pc/pic/comments.png)
``` bash
实现思路：
数据使用mock随机生成，例如
Mock.mock('http://playsong.comments.com', {
	'comments|15': [{
    	'avatar' : '@image("250x250", "@color", "@word")',
        'name'   : '@cname',
        'content': '@cparagraph',
        'time'   : '@datetime("yyyy年MM月dd日 HH:mm")'
    }]
})
然后使用axios，获取请求数据
mounted(){
	axios.get('http://playsong.comments.com')
	.then( res => {
		this.$store.commit('initComments', res.data.comments)
		this.commentList = this.comments.slice(this.limit*(this.currentPage-1), this.limit*this.currentPage)
	})
}
切换页面时根据页码数将对应数据取出赋值给recommendlist
watch: {
	currentPage(val){//监控页码
		this.commentList = this.comments.slice(this.limit*(val-1), this.limit*val)
	},
	comments(val){//监控评论总数
		this.commentList = this.comments.slice(this.limit*(this.currentPage-1), this.limit*this.currentPage)
	}
}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
