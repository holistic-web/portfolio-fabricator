import Detail from './Detail.vue';
import Edit from './Edit.vue';

const routes = [
	{
		name: 'portfolio.detail',
		path: '/portfolio',
		component: Detail
	},
	{
		name: 'portfolio.edit',
		path: '/portfolio/edit',
		component: Edit
	}
];

export default routes;
