import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import VuexPersistence from 'vuex-persist';
import config from '../config';
import accountStore from './modules/account';
import portfolioStore from './modules/portfolio';
import websiteStore from './modules/website';

Vue.use(Vuex);

const app = firebase.initializeApp(config.firebase);
const db = app.firestore();

const persistedState = new VuexPersistence({
	supportCsircular: true,
	modules: [
		'account'
	]
});

const storeConfig = {
	state: {
		db,
		firebase
	},
	modules: {
		account: accountStore,
		portfolio: portfolioStore,
		website: websiteStore
	},
	plugins: [
		persistedState.plugin
	]
};

const store = new Vuex.Store(storeConfig);

export default store;
