<template>
	<div class="LoginAccount">
		<h1>Log in to your Account</h1>

		<b-form class="LoginAccount__form">

			<b-form-group label="Enter your Email Address">
				<b-form-input
					v-model.trim="user.email"
					type="email"
					required
					placeholder="Email Address"/>
			</b-form-group>

			<b-form-group label="Enter your Password">
				<b-form-input
					v-model="user.password"
					type="password"
					required
					placeholder="Password"/>
			</b-form-group>

			<b-button
				@click="login"
				type="submit"
				variant="primary">
				Log In
			</b-button>

			<router-link
				to="/sign-up"
				tag="button">
				Create Account
			</router-link>

		</b-form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			user: { },
			errorText: null
		};
	},

	methods: {
		...mapActions({
			loginAccount: 'account/logIn'
		}),
		async login() {
			try {
				await this.loginAccount({
					username: this.user.email,
					password: this.user.password
				});
				this.errorText = 'success!';
			} catch (err) {
				this.errorText = err.message;
			}
		}
	}
};
</script>

<style lang="scss">

.LoginAccount {
	padding: 1rem;
}

</style>
