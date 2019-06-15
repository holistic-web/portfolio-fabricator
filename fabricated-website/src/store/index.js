import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import config from '../config';
import portfolioStore from './modules/portfolio';
import emailStore from './modules/email';

Vue.use(Vuex);

const app = firebase.initializeApp(config.firebase);
const db = app.firestore();
const functions = firebase.functions();

const storeConfig = {
	state: {
		db,
		functions
	},
	modules: {
		portfolio: portfolioStore,
		email: emailStore
	}
};

const store = new Vuex.Store(storeConfig);

export default store;
