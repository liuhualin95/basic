# music-pc

> a music-pc project by vue

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
> 第一步，
> npm install node-sass --save-dev
> npm install sass-loader --save-dev
> 第二步，打开webpack.base.config.js在loaders里面加上
>     {
>       test: /\.scss$/,
>       loaders: ["style", "css", "sass"]
>     }   
> 第三步，在需要用到scss的地方写上
> 	<style lang="scss" scoped>
> 	</style>
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
