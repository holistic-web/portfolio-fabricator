/* eslint-disable no-param-reassign */

export default {
	namespaced: true,
	actions: {
		async sendEmail({ rootState, rootGetters }, { message, name, senderEmail }) {
			const sendEmail = rootState.functions.httpsCallable('sendEmail');
			const receiptEmail = rootGetters['portfolio/portfolio'].contact.email;
			const result = await sendEmail({ message, name, senderEmail, receiptEmail });
			return result;
		}
	}
};
