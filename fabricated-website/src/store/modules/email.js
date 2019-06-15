/* eslint-disable no-param-reassign */

export default {
	namespaced: true,
	actions: {
		async sendEmail({ rootState }, { message, name, senderEmail }) {
			const sendEmail = rootState.firebase.functions().httpsCallable('sendEmail');
			const result = await sendEmail({ message, name, senderEmail });
			return result;
		}
	}
};
