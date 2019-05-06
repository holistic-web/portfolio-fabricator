import Page from './Page.vue';
import Authenicate from './Authenticate.vue';

const routes = [
	{
		name: 'admin.page',
		path: '/admin',
		component: Page
	},
	{
		name: 'admin.auth',
		path: '/auth',
		component: Authenicate
	}
];

export default routes;
