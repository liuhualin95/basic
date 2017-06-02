export default {
	initComments(state, payload){
		if(!state.playSongList[state.nowPlayIndex].comments.length)
			state.playSongList[state.nowPlayIndex].comments = payload
	},
	addComment(state, comment){
		state.playSongList[state.nowPlayIndex].comments.unshift(comment)
	},
	addToCreatedSongList(state, newCreatedSong){
		state.createdSongList.push(newCreatedSong)
	},
	play(state){
		state.isPlaying = true
	},
	pause(state){
		state.isPlaying = false
	},
	setPlayIndex(state, payload){
		state.nowPlayIndex = payload
	}
}