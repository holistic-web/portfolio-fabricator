/* eslint-disable no-param-reassign */
export default {
	namespaced: true,
	state: {
		portfolio: null
	},
	mutations: {
		SET_PORTFOLIO(state, portfolio) {
			state.portfolio = portfolio;
		}
	},
	actions: {
		/**
		 * fetches the portfolio stored under the user's uuuserId
		 * @returns the porfolio object
		 */
		async fetchPortfolio({ commit, rootState }) {
			const userId = rootState.account.authentication.user.uid;
			const portfolioRef = rootState.db.collection('portfolios').doc(userId);
			const portfolioDoc = await portfolioRef.get();
			if (!portfolioDoc.exists) throw new Error('portfolio does not exist');
			const portfolio = portfolioDoc.data();
			commit('SET_PORTFOLIO', portfolio);
			return portfolio;
		},
		async updatePortfolio({ dispatch, rootState }, portfolioUpdate) {
			const userId = rootState.account.authentication.user.uid;
			const portfolioRef = rootState.db.collection('portfolios').doc(userId);
			const updateResult = await portfolioRef.update(portfolioUpdate);
			await dispatch('fetchPortfolio');
			return updateResult;
		}
	},
	getters: {
		portfolio: state => state.portfolio
	}
};
