import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import config from '../config';
import portfolioStore from './modules/portfolio';

Vue.use(Vuex);

const app = firebase.initializeApp(config.firebase);
const db = app.firestore();

const storeConfig = {
	state: {
		db
	},
	modules: {
		portfolio: portfolioStore
	}
};

const store = new Vuex.Store(storeConfig);

export default store;
