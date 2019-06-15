import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueToasted from 'vue-toasted';
import App from './App.vue';
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueToasted);

new Vue({
	store,
	render: h => h(App)
}).$mount('#app');
