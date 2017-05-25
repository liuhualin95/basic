import Vue from 'vue'
import Router from 'vue-router'
import FindMusic from '../components/FindMusic'
import NowPlaySong from '../components/NowPlaySong'
import MusicBanner from '../components/MusicBanner'
import SongList from '../components/SongList'
import RecommendList from '../components/RecommendList'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		component: FindMusic,
		children: [
			{
				path: '/',
				name: 'FindMusic',
				components: {
					banner: MusicBanner,
					recommendList: RecommendList
				}
			},
			{
				path: '/song-list',
				name: 'SongList',
				component: SongList
			}
		]
    },
    {
    	path: '/now-play-song',
    	name: 'nowPlaySong',
    	component: NowPlaySong
    }
  ]
})
// 问题总结
// 1、[vue-router] Named Route 'FindMusic' has a default child route.
// When navigating to this named route (:to="{name: 'FindMusic'"), 
// the default child route will not be rendered. Remove the name from this 
// route and use the name of the default child route for named links instead.
// 出现了子路由的默认视图不显示，但是也没有报错
// 解决办法: 要有默认子路由，那父路由的名字name得去掉