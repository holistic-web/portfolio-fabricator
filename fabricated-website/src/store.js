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
			aboutMe: 'King in the North and a bastard of Lord Eddard Stark. I ride dragons and kill white walkers and stuff. Don\'t @ me.',
			profileImageUrl: 'https://pbs.twimg.com/profile_images/901947348699545601/hqRMHITj_400x400.jpg',
			contact: {
				email: 'kinginthenorth2019@gmail.com'
			},
			externalProfiles: {
				github: 'holistic-web',
				linkedIn: 'jon-snow-691533183'
			},
			education: [
				{
					institution: 'Winterfell',
					date: 'Seasons 1 - 3 (ish)',
					qualifications: [
						'A+ in being a bastard',
						'B in husky training',
						'F in being with Ros'
					]
				}
			],
			experience: [
				{
					organization: 'Night\'s Watch',
					date: 'Seasons 3 - 5 (ish)',
					role: 'Bossman',
					description: 'I held the wall guarding the realm of men.',
					projects: [
						'I went over the wall and killed some undead peeps, I did this using valerian steel.',
						'I hooked up with a wildling one time. That was jokes.',
						'I was killed and came back to life showing my persistence and determination.'
					]
				},
				{
					organization: 'Targaryen Conquest',
					date: 'Seasons 7 - 8',
					role: 'King of Westoros (low key)',
					description: 'So it turns out I\'m actually son of Rhaegar Targaryen and Leanna Stark and rightful King.',
					projects: [
						'Defeated the army of the undead at Winterfell.',
						'Rode a dragon.',
						'Banged my aunt on a boat.'
					]
				}
			]
		}
	},
	getters: {
		context: state => state.context
	}
});
