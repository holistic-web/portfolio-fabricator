/* eslint-disable no-param-reassign */

export default {
	namespaced: true,
	actions: {
		async sendEmail({ rootState, rootGetters }, { message, name, senderEmail }) {
			console.log('rootState: ', rootState);
			const sendEmail = rootState.functions.httpsCallable('sendEmail');
			const receiptEmail = rootGetters['portfolio/portfolio'].email;
			const result = await sendEmail({ message, name, senderEmail, receiptEmail });
			return result;
		}
	}
};
