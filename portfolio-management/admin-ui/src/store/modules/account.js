/* eslint-disable no-param-reassign */
export default {
	namespaced: true,
	state: {
		authentication: null,
		credentials: null
	},
	mutations: {
		SET_AUTHENTICATION(state, authentication) {
			state.authentication = authentication;
		},
		SET_CREDENTIALS(state, credentials) {
			state.credentials = credentials;
		}
	},
	actions: {
		async signUp({ commit, dispatch, rootState }, { username, password }) {
			console.log('rootState: ', rootState);
			const authData = await rootState.firebase.auth().createUserWithEmailAndPassword(username, password);
			commit('SET_AUTHENTICATION', authData);
			dispatch('logIn', { username, password });
			return authData;
		},
		/**
		 * Logs in with given credentials and stores these credentials.
		 * Call with {} to log in with last used credentials
		 * @param {String} username the user's username (email)
		 * @param {String} password the user's password
		 */
		async logIn({ commit, state, rootState }, { username, password }) {
			const authData = await rootState.firebase.auth().signInWithEmailAndPassword(
				username || state.credentials.username,
				password || state.credentials.password
			);
			if (username && password) commit('SET_CREDENTIALS', { username, password });
			commit('SET_AUTHENTICATION', authData);
			return authData;
		},
		async logOut({ commit, rootState }) {
			const success = await rootState.firebase.auth().signOut();
			commit('SET_AUTHENTICATION', null);
			commit('SET_CREDENTIALS', null);
			localStorage.clear();
			return success;
		}
	},
	getters: {
		authentication: state => state.authentication
	}
};
