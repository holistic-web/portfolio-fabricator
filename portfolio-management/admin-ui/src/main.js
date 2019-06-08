import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import vueIcon from 'vue-icon';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Buefy);
Vue.use(vueIcon, 'v-icon');

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
