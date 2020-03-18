<template>
	<b-form class="CreateAccount">

		<b-form-group class="CreateAccount__input" label="Enter your Email Address">
			<b-form-input
				v-model.trim="newUser.email"
				type="email"
				required
				placeholder="Email Address"/>
		</b-form-group>

		<b-form-group class="CreateAccount__input" label="Enter your Password">
			<b-form-input
				v-model="newUser.password"
				type="password"
				required
				placeholder="Password"/>
		</b-form-group>

		<b-form-group class="CreateAccount__input" label="Confirm your Password">
			<b-form-input
				v-model="newUser.confirmPassword"
				type="password"
				required
				:state="!confirmPasswordFeedback && !!newUser.confirmPassword"
				placeholder="Confirm Password"/>
		</b-form-group>

		<span class="text-danger" v-text="confirmPasswordFeedback"/>

		<p class="text-danger" v-text="errorText"/>

		<section class="CreateAccount__actions">

			<el-button
				class="CreateAccount__button"
				:disabled="!isFormValid"
				variant="primary"
				v-text="'Create Account'"
				@click="onSubmit"/>

			<router-link
				:to="{ name: 'authentication.logIn' }">
				<el-button
					class="CreateAccount__button"
					type="submit"
					variant="outline-primary"
					v-text="'Existing User?'"/>
			</router-link>

			<el-button
				class="CreateAccount__button"
				type="reset"
				variant="outline-danger"
				v-text="'Reset'"
				@click="clearData"/>

		</section>

	</b-form>
</template>

<script>
import { ElButton } from '@holistic-web/el-layout';
import { mapActions } from 'vuex';

export default {
	components: {
		ElButton
	},
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
	justify-content: center;
	align-items: center;
	width: 100%;

	&__input {
		width: 100%;
		margin-bottom: 1rem;
	}

	&__button {
		margin: 1rem;
	}
}

</style>
