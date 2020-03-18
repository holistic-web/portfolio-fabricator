import Vue from 'vue';
import Buefy from 'buefy';
// import 'buefy/dist/buefy.css';
// import '@holistic-web/toolbox-layout';
import '@holistic-web/el-layout';
import '@holistic-web/el-layout/dist/el-layout.css';
import VueIcon from 'vue-icon';
import VueToasted from 'vue-toasted';
import VueJsonSchemaForm from 'vue-json-schema-form';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;
Vue.use(VueIcon, 'v-icon');
Vue.use(VueToasted);
Vue.use(VueJsonSchemaForm);
Vue.use(Buefy);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
