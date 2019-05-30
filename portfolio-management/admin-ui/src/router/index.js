import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import store from '../store/index';

Vue.use(Router);

const router = new Router({
	routes: [...routes],
	mode: 'history'
});

router.beforeEach((to, from, next) => {
	if (store.state.authentication || to.name.startsWith('authentication.')) {
		next(); // allow to enter route
	} else {
		next({ name: 'authentication.logIn' }); // go to '/log-in';
	}
});

export default router;
