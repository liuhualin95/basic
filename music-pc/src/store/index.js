import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import Mock from 'mockjs'

Vue.use(Vuex);

const state = {
	avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
	userName: '_小林',
	collectedSongList: [
		'收藏的歌单'
	],
	limit: 5,
	nowPlayIndex: 1,
	playSongList: [
		{
			name: '我的一个道姑朋友',
			author: '以冬',
			songImg: 'http://p1.music.126.net/BoX04rxRPHLSBakoECTI3A==/17925338067851131.jpg?param=130y130',
			url: '../static/music/我的一个道姑朋友 - 以冬.mp3',
			songWords: [
				'作曲 : タイナカ彩智《一番星》',
				'作词 : 陆菱纱',
				'而你撑伞拥我入怀中，',
				'一字一句誓言多慎重。',
				'你眼中有柔情千种，',
				'如脉脉春风，冰雪也消融。',
				'那年长街春意正浓，',
				'策马同游，烟雨如梦。',
				'檐下躲雨，',
				'望进一双，深邃眼瞳，',
				'宛如华山夹着细雪的微风。',
				'雨丝微凉，',
				'风吹过暗香朦胧。',
				'一时心头悸动，似你温柔剑锋，',
				'过处翩若惊鸿。'
			],
			comments: [
				{
					avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
					name: '做只山鬼从此无忧',
					content: '“ 你是无意穿堂风，却偏偏引山洪。”故事写得好棒，一下子想到这一句。',
					time: '2015年6月25日 16:52'
				},
				{
					avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
					name: '昵称被萨摩耶吃掉了',
					content: '这故事若拿来下酒 只怕比酒还苦',
					time: '2016年2月9日 15:36'
				}
			]
		},
		{
			name: '不枉',
			author: '汪小敏',
			songImg: 'http://p1.music.126.net/pNs4yiR4zlHyKeHRzvgHcw==/19123805742041026.jpg?param=140y140',
			url: '../static/music/汪小敏 - 不枉.mp3',
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
			// comments: [
			// 	{
			// 		avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
			// 		name: '善美的敬敬',
			// 		content: '当你感觉对方不爱你的时候，千万要相信你的感觉，别去为自欺欺人找借口。对方若不爱你，不会因为你的执着而被打动，你的深情也将使他避之唯恐不及。偶尔给的温柔，是毒药。你本可以理直气壮地爱人及被爱，何必卑微屈从于假象。爱自己比什么都重要，傻过几次就够了，别再给对方反复伤害你的机会。',
			// 		time: '2015年6月25日 16:52'
			// 	},
			// 	{
			// 		avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
			// 		name: '帐号已注销',
			// 		content: '他只是看了你一眼，你却在心里写了本小说。',
			// 		time: '2016年2月9日 15:36'
			// 	}
			// ]
			comments: []
			// ...Mock.mock({
			// 	'comments|15': [{
			//     	'avatar' : '@image("250x250", "@color", "@word")',
			//         'name'   : '@cname',
			//         'content': '@cparagraph',
			//         'time'   : '@datetime("yyyy年MM月dd日 HH:mm")'
			//     }]
			// })
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
		{
			src: 'http://p3.music.126.net/P15ZfifMd6QEeiQRtO5R7g==/109951162928316337.jpg?param=200y200',
			num: '82万',
			name: '「高考季」2017一起听歌记单词吧',
			showIcon: false,
			showHint: false,
			hint: '测试的提示信息测试的提示信息测试的提示信息测试的提示信息测试息测试的提示息测试的提示'
		},
		{
			src: 'http://p4.music.126.net/E7B_FSqgugG1OEVin73fuA==/18675205000273509.jpg?param=200y200',
			num: '113万',
			name: '怀旧是人的本能',
			showIcon: false,
			showHint: false,
			hint: '测试的提示信息测试的提示信息测试的提示信息测试的提示信息测试息测试的提示息测试的提示'
		},
		{
			src: 'http://p3.music.126.net/JUffDhDNDpGW1e0v_Q59Dg==/1380986613435930.jpg?param=200y200',
			num: '1221万',
			name: '最"神级"最"耳熟"的BGM集锦',
			showIcon: false,
			showHint: false,
			hint: '测试的提示信息测试的提示信息测试的提示信息测试的提示信息测试息测试的提示息测试的提示'
		},
		{
			src: 'http://p3.music.126.net/1sTMKmvEcyZTsRVs3ILrKA==/18767563976189991.jpg?param=200y200',
			num: '2487万',
			name: '华语｜那些温暖男声听起来总让人心疼',
			showIcon: false,
			showHint: false,
			hint: '测试的提示信息测试的提示信息测试的提示信息测试的提示信息测试息测试的提示息测试的提示'
		},
		{
			src: 'http://p4.music.126.net/mDiHYKDkBLzB1VqtuBYd5g==/3225967116987172.jpg?param=200y200',
			num: '240万',
			name: '[极速刷作业向]极品速弹弗拉门戈吉他曲',
			showIcon: false,
			showHint: false,
			hint: '测试的提示信息测试的提示信息测试的提示信息测试的提示信息测试息测试的提示息测试的提示'
		},
		{
			src: 'http://p4.music.126.net/J0vGuBJGP9OkTlh0X0r1Ww==/18561955300840096.jpg?param=200y200',
			num: '242万',
			name: '无 人 之 岸 I 无 径 之 林',
			showIcon: false,
			showHint: false,
			hint: '测试的提示信息测试的提示信息测试的提示信息测试的提示信息测试息测试的提示息测试的提示'
		},
		{
			src: 'http://p3.music.126.net/QgLjgJ-rSHyosnpwmZiYkA==/109951162932241092.jpg?param=200y200',
			num: '93万',
			name: '影视剧浪漫情节|遇见你是一场美丽的意外',
			showIcon: false,
			showHint: false,
			hint: '测试的提示信息测试的提示信息测试的提示信息测试的提示信息测试息测试的提示息测试的提示'
		},
		{
			src: 'http://p4.music.126.net/7susvQCpxdizf6DQk9yzNQ==/109951162876279868.jpg?param=200y200',
			num: '171万',
			name: '『民谣情愫』旧时风物 恋恋此光阴',
			showIcon: false,
			showHint: false,
			hint: '测试的提示信息测试的提示信息测试的提示信息测试的提示信息测试息测试的提示息测试的提示'
		},
		{
			src: 'http://p4.music.126.net/MxFTAgta9NQckTrq0u1Tjg==/18749971790280988.jpg?param=200y200',
			num: '22万',
			name: '【浪漫手风琴】女士，我可以请你跳支舞吗',
			showIcon: false,
			showHint: false,
			hint: '测试的提示信息测试的提示信息测试的提示信息测试的提示信息测试息测试的提示息测试的提示'
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
	],
	isPlaying: false
}

const getters = {
	pageNo(state){
		return Math.ceil(state.playSongList[state.nowPlayIndex].comments.length/state.limit)
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})