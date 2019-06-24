/* eslint-disable no-param-reassign */
export default {
	namespaced: true,
	state: {
		website: null
	},
	mutations: {
		SET_WEBSITE(state, website) {
			state.website = website;
		}
	},
	actions: {
		/**
		 * fetches the website stored under the user's uuuserId
		 * @returns the porfolio object
		 */
		async fetchWebsite({ commit, rootState }) {
			const userId = rootState.account.authentication.user.uid;
			const websiteRef = rootState.db.collection('websites').doc(userId);
			const websiteDoc = await websiteRef.get();
			if (!websiteDoc.exists) throw new Error('website does not exist');
			const website = websiteDoc.data();
			commit('SET_WEBSITE', website);
			return website;
		},
		async updateWebsite({ dispatch, rootState }, websiteUpdate) {
			const userId = rootState.account.authentication.user.uid;
			const websiteRef = rootState.db.collection('websites').doc(userId);
			const updateResult = await websiteRef.update(websiteUpdate);
			await dispatch('fetchWebsite');
			return updateResult;
		}
	},
	getters: {
		website: state => state.website
	}
};
