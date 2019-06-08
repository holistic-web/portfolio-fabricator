/* eslint-disable no-param-reassign */
import { get as _get } from 'lodash';
import portfolioFallback from '../../lib/portfolioFallback.json';


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
			let portfolio;
			try {
				const portfolioRef = rootState.db.collection('portfolios').doc(id);
				const portfolioDoc = await portfolioRef.get();
				if (portfolioDoc.exists) {
					portfolio = portfolioDoc.data();
				} else {
					throw new Error('portfolio does not exist');
				}
			} catch (e) {
				portfolio = portfolioFallback;
			}
			if (!_get(options, 'skipCommit')) commit('SET_PORTFOLIO', portfolio);
			return portfolio;
		}
	},
	getters: {
		portfolio: state => state.portfolio
	}
};
