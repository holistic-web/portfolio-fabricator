import authenticationRoutes from '../containers/authentication/index';

const routes = [
	...authenticationRoutes,
	{
		path: '/',
		redirect: { name: 'authentication.signUp' }
	},
	{
		path: '*',
		redirect: { path: '/' }
	}

];

export default routes;
