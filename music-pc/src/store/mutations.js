export default {
	addComment(state, comment){
		state.playSongList[state.nowPlayIndex].comments.push(comment);
	},
	addToCreatedSongList(state, newCreatedSong){
		state.createdSongList.push(newCreatedSong);
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