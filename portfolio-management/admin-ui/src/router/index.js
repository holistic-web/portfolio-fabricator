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
	const isAuthenticated = !!store.state.authentication;
	if (to.name.startsWith('authentication.')) {
		if (isAuthenticated) return next('/');
		return next();
	}
	if (!isAuthenticated) return next({ name: 'authentication.logIn' });
	return next();
});

export default router;
