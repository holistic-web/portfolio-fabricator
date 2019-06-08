import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueIcon from 'vue-icon';
import VueToasted from 'vue-toasted';
import VueJsonSchemaForm from 'vue-json-schema-form';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueIcon, 'v-icon');
Vue.use(VueToasted);
Vue.use(VueJsonSchemaForm);
Vue.use(Buefy);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
