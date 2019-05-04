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
					institution: 'Winterfell',
					date: 'Seasons 1 - 3 (ish)',
					qualifications: [
						'A+ in being a bastard'
					]
				}
			],
			experience: [
				{
					company: 'Night\'s Watch',
					date: 'Seasons 3 - 5 (ish)',
					role: 'Bossman',
					description: 'I held the wall guarding the realm of men.',
					projects: [
						'I hooked up with a wildling one time. That was jokes.'
					]
				}
			]
		}
	},
	getters: {
		context: state => state.context
	}
});
