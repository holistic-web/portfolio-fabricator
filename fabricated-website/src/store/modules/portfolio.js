/* eslint-disable no-param-reassign */
import { get as _get } from 'lodash';

export default {
	namespaced: true,
	state: {
		portfolio: null
	},
	mutations: {
		SET_PORTFOLIO(state, response) {
			state.portfolio = response;
		}
	},
	actions: {
		async fetchPortfolioById({ commit, rootState }, { id, options }) {
			const portfolioRef = rootState.db.collection('portfolios').doc(id);
			const portfolioDoc = await portfolioRef.get();
			if (!portfolioDoc.exists) throw new Error('portfolio does not exist');
			const portfolio = portfolioDoc.data();
			if (!_get(options, 'skipCommit')) commit('SET_PORTFOLIO', portfolio);
			return portfolio;
		}
	},
	getters: {
		portfolio: state => state.portfolio
	}
};
