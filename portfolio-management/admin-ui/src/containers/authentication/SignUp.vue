<template>
	<div class="CreateAccount">
		<h1>Sign up for an Account</h1>

		<b-form class="CreateAccount__form">

			<b-form-group label="Enter your Email Address">
				<b-form-input
					v-model.trim="newUser.email"
					type="email"
					required
					placeholder="Email Address"/>
			</b-form-group>

			<b-form-group label="Enter your Password">
				<b-form-input
					v-model="newUser.password"
					type="password"
					required
					placeholder="Password"/>
			</b-form-group>

			<b-form-group label="Confirm your Password">
				<b-form-input
					v-model="newUser.confirmPassword"
					type="password"
					required
					:state="!confirmPasswordFeedback && !!newUser.confirmPassword"
					placeholder="Confirm Password"/>
			</b-form-group>

			<span class="text-danger" v-text="confirmPasswordFeedback"/>

			<p class="text-danger" v-text="errorText"/>

			<b-button
				@click="onSubmit"
				:disabled="!isFormValid"
				variant="primary">
				Create Account
			</b-button>

			<b-button
				@click="clearData"
				type="reset"
				variant="danger">
				Reset
			</b-button>

		</b-form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			newUser: {},
			errorText: null
		};
	},
	computed: {
		isFormValid() {
			return (
				this.newUser.email
				&& this.newUser.password
				&& (this.newUser.password === this.newUser.confirmPassword)
			);
		},
		confirmPasswordFeedback() {
			if (
				!this.newUser.confirmPassword
				|| (this.newUser.password === this.newUser.confirmPassword)
			) return null;
			return 'Passwords must match.';
		}
	},
	methods: {
		...mapActions({
			signUpUser: 'account/signUp'
		}),
		async onSubmit() {
			try {
				await this.signUpUser({
					username: this.newUser.email,
					password: this.newUser.password
				});
			} catch (e) {
				console.error(e);
				this.errorText = e.message;
			}
		},
		clearData() {
			this.newUser = {};
			this.errorText = null;
		}
	}
};
</script>

<style lang="scss">

.CreateAccount {
	padding: 1rem;
}

</style>
