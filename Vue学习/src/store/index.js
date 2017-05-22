import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
	avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
	userName: '_小林',
	collectedSongList: [
		'收藏的歌单'
	],
	randomIndex: 0,
	randomSongList: [
		{
			name: '不枉',
			author: '汪小敏',
			songImg: 'http://p1.music.126.net/pNs4yiR4zlHyKeHRzvgHcw==/19123805742041026.jpg?param=140y140',
			songWords: [
				'作曲 : 丁世光',
				'作词 : 沈松',
				'月在身后 约在心里头',
				'盼多久盼到 这个时候',
				'人独守 不忘来世',
				'月圆 人间相隔不再遥远',
				'如何相爱 如何手放开',
				'思念纵使 汇成了河',
				'离别对月 人渐消瘦',
				'每一天 尽是想念',
				'不知天上宫阙 今夕是何年',
				'爱是 一万年一瞬间',
				'什么都不会变',
				'我爱你三个字',
				'命中注定一辈子'
			],
			comments: [
				{
					avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
					name: '善美的敬敬',
					content: '当你感觉对方不爱你的时候，千万要相信你的感觉，别去为自欺欺人找借口。对方若不爱你，不会因为你的执着而被打动，你的深情也将使他避之唯恐不及。偶尔给的温柔，是毒药。你本可以理直气壮地爱人及被爱，何必卑微屈从于假象。爱自己比什么都重要，傻过几次就够了，别再给对方反复伤害你的机会。',
					time: '2015年6月25日 16:52'
				},
				{
					avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
					name: '帐号已注销',
					content: '他只是看了你一眼，你却在心里写了本小说。',
					time: '2016年2月9日 15:36'
				}
			]
		}
	],
	itemLists: [
		{content: '个性推荐', name: 'FindMusic'},
		{content: '歌单', name: 'SongList'},
		{content: '主播电台'},
		{content: '排行榜'},
		{content: '歌手'},
		{content: '最新音乐'}
	],
	recommendLists: [
		// {
		// 	src: 'http://.music.163.com/discover/recommend/taste',
		// 	num: '',
		// 	name: '每日歌曲推荐'
		// },
		{
			src: 'http://p3.music.126.net/P15ZfifMd6QEeiQRtO5R7g==/109951162928316337.jpg?param=200y200',
			num: '82万',
			name: '「高考季」2017一起听歌记单词吧'
		},
		{
			src: 'http://p4.music.126.net/E7B_FSqgugG1OEVin73fuA==/18675205000273509.jpg?param=200y200',
			num: '113万',
			name: '怀旧是人的本能'
		},
		{
			src: 'http://p3.music.126.net/JUffDhDNDpGW1e0v_Q59Dg==/1380986613435930.jpg?param=200y200',
			num: '1221万',
			name: '最"神级"最"耳熟"的BGM集锦'
		},
		{
			src: 'http://p3.music.126.net/1sTMKmvEcyZTsRVs3ILrKA==/18767563976189991.jpg?param=200y200',
			num: '2487万',
			name: '华语｜那些温暖男声听起来总让人心疼'
		},
		{
			src: 'http://p4.music.126.net/mDiHYKDkBLzB1VqtuBYd5g==/3225967116987172.jpg?param=200y200',
			num: '240万',
			name: '[极速刷作业向]极品速弹弗拉门戈吉他曲'
		},
		{
			src: 'http://p4.music.126.net/J0vGuBJGP9OkTlh0X0r1Ww==/18561955300840096.jpg?param=200y200',
			num: '242万',
			name: '无 人 之 岸 I 无 径 之 林'
		},
		{
			src: 'http://p3.music.126.net/QgLjgJ-rSHyosnpwmZiYkA==/109951162932241092.jpg?param=200y200',
			num: '93万',
			name: '影视剧浪漫情节|遇见你是一场美丽的意外'
		},
		{
			src: 'http://p4.music.126.net/7susvQCpxdizf6DQk9yzNQ==/109951162876279868.jpg?param=200y200',
			num: '171万',
			name: '『民谣情愫』旧时风物 恋恋此光阴'
		},
		{
			src: 'http://p4.music.126.net/MxFTAgta9NQckTrq0u1Tjg==/18749971790280988.jpg?param=200y200',
			num: '22万',
			name: '【浪漫手风琴】女士，我可以请你跳支舞吗'
		}
	],
	createdSongList: [
		'欢快的歌单',
		'测试的歌单',
		'欢快的歌单',
		'测试的歌单',
		'欢快的歌单',
		'测试的歌单',
		'欢快的歌单',
		'测试的歌单'
	]
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})