import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import config from '../config';
import accountStore from './modules/account';

Vue.use(Vuex);

const app = firebase.initializeApp(config.firebase);
const db = app.firestore();

const storeConfig = {
	state: {
		db,
		firebase
	},
	modules: {
		account: accountStore
	}
};

const store = new Vuex.Store(storeConfig);

export default store;
