// Make sure to call Vue.use(Vuex) first if using a module system

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		context: {
			contact: {
				email: 'kinginthenorth2019@gmail.com'
			},
			externalProfiles: {
				github: 'holistic-web',
				linkenIn: 'jon-snow-691533183'
			}
		}
	},
	getters: {
		context: state => state.context
	}
});
