/* eslint-disable no-param-reassign */
import { get as _get } from 'lodash';

export default {
	namespaced: true,
	state: {
		website: null
	},
	mutations: {
		SET_WEBSITE(state, response) {
			state.website = response;
		}
	},
	actions: {
		async fetchWebsiteById({ commit, rootState }, { id, options }) {
			const websiteRef = rootState.db.collection('websites').doc(id);
			const websiteDoc = await websiteRef.get();
			const website = websiteDoc.data();
			if (!_get(options, 'skipCommit')) commit('SET_WEBSITE', website);
			return website;
		}
	},
	getters: {
		website: state => state.website
	}
};
