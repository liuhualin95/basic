export default {
	addComment(state, comment){
		state.randomSongList[state.randomIndex].comments.push(comment);
	},
	addToCreatedSongList(state, newCreatedSong){
		state.createdSongList.push(newCreatedSong);
	}
}