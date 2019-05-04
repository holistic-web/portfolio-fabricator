// Make sure to call Vue.use(Vuex) first if using a module system

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		context: {
			name: {
				first: 'Jon',
				last: 'Snow'
			},
			profession: 'Bastard',
			contact: {
				email: 'kinginthenorth2019@gmail.com'
			},
			externalProfiles: {
				github: 'holistic-web',
				linkenIn: 'jon-snow-691533183'
			},
			education: [
				{
					institution: 'Night\'s Watch',
					date: 'Seasons 2 - 5 (ish)',
					qualifications: [
						'A+ in white walker slaying'
					]
				}
			]
		}
	},
	getters: {
		context: state => state.context
	}
});
