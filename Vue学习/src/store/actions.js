export default {
	addComment({commit}, comment){
		commit('addComment', comment);
	},
	addToCreatedSongList({commit}, newCreatedSong){
		commit('addToCreatedSongList', newCreatedSong);
	}
}