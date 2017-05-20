import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
	collectedSongList: [
		'收藏的歌单'
	],
	randomSongList: [
		{
			name: '不枉',
			author: '汪小敏'
		}
	]
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})