
import websiteRoutes from '../containers/website';

const routes = [
	...websiteRoutes,
	{
		path: '*',
		redirect: { path: '/' }
	}

];

export default routes;
