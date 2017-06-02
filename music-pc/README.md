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
！[轮播](https://github.com/liuhualin95/basic/tree/master/music-pc/raw/master/pic/carousel.png)
``` bash
轮播图实现思路：
1、写一个ul里面三个li放图（第七张第一张第二张），同时用transform写好位置li上添加transition有个动态效果
2、写一个定时器，classbox里面最后一个出栈，然后放到数组首位
3、以顺序加载为例子，'right'(class)下一个出现的位置是0，就把第一张图的src的index替换为nextImgIndex，是1就把第二张图的src的index替换为nextImgIndex
4、点击进行change的时候就是看e.target.className里面是什么类，是left就是prevImg，是right就nextImg
5、下面小列表用v-for去写，比较nowImgIndex和index，相等active，差1就prev和next
6、skip的话就是nowImgIndex和index不止差1，根据差值写个for循环prev和next，同时设置isSkip为true，根据index添加skip-left，skip-right动画效果的话，用index使类left对应skip-left，right对应skip-right，再写skip的transform的scale小一点，然后transition设置为none，然后把isSkip的值过20ms设置为false，取消skip-left，skip-right类，这样就会变回之前的transform和transition了
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
