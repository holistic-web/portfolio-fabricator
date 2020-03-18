import authenticationRoutes from '../containers/authentication/index';
import portfolioRoutes from '../containers/portfolio/index';
import websiteRoutes from '../containers/website/index';

const routes = [
	...authenticationRoutes,
	...portfolioRoutes,
	...websiteRoutes,
	{
		path: '*',
		redirect: { name: 'portfolio.detail' }
	}

];

export default routes;
