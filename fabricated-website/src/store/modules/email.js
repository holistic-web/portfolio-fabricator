/* eslint-disable no-param-reassign */

export default {
	namespaced: true,
	actions: {
		async sendEmail({ rootState }, { message, name, senderEmail }) {
			const updateLights = rootState.firebase.functions().httpsCallable('sendEmail');
			const result = await updateLights({ message, name, senderEmail });
			return result;
		}
	}
};
