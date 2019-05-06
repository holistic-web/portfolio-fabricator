import websiteRoutes from '../containers/website';
import adminRoutes from '../containers/admin';

const routes = [
	...websiteRoutes,
	...adminRoutes,
	{
		path: '*',
		redirect: { path: '/' }
	}

];

export default routes;
