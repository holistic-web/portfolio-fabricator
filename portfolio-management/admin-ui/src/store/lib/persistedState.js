import VuexPersistence from 'vuex-persist';

const persistedState = new VuexPersistence({
	storage: window.localStorage,
	supportCircular: true,
	modules: [
		'account'
	]
});

export default persistedState;
