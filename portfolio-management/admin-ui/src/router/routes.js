import authenticationRoutes from '../containers/authentication/index';
import portfolioRoutes from '../containers/portfolio/index';

const routes = [
	...authenticationRoutes,
	...portfolioRoutes,
	{
		path: '/',
		redirect: { name: 'authentication.signUp' }
	},
	{
		path: '*',
		redirect: { name: 'portfolio.detail' }
	}

];

export default routes;
