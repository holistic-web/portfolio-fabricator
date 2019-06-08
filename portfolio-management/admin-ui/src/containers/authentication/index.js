import SignUp from './SignUp.vue';
import LogIn from './LogIn.vue';

const routes = [
	{
		name: 'authentication.signUp',
		path: '/sign-up',
		component: SignUp
	},
	{
		name: 'authentication.logIn',
		path: '/log-in',
		component: LogIn
	}
];

export default routes;
