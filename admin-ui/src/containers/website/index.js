import Detail from './Detail.vue';
import Edit from './Edit.vue';

const routes = [
	{
		name: 'website.detail',
		path: '/website',
		component: Detail
	},
	{
		name: 'website.edit',
		path: '/website/edit',
		component: Edit
	}
];

export default routes;
