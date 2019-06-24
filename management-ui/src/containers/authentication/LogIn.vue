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

			<b-btn
				class="LoginAccount__button"
				variant="info"
				v-text="'Log In'"
				@click="login"/>

			<router-link
				:to="{ name: 'authentication.signUp' }">
				<b-btn
					class="LoginAccount__button"
					variant="primary"
					v-text="'Create Account'"/>
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

	&__button {
		margin: 1rem;
	}
}

</style>
