<template>
	<b-form @submit="createAccount" class="CreateAccount" @reset="clearData">

		<b-form-select
			label="Title"
			v-model="title"
			required
			:options="titleOptions"
		></b-form-select>

		<b-form-input
			v-model.trim="firstName"
			type="text"
			required
			placeholder="First Name"
		></b-form-input>

		<b-form-input
			v-model.trim="lastName"
			type="text"
			required
			placeholder="Last Name"
		></b-form-input>

		<b-form-input
			id="input-1"
			v-model.trim="occupation"
			type="text"
			required
			placeholder="Occupation"
		></b-form-input>

		<b-form-input
			v-model.trim="email"
			type="email"
			required
			placeholder="Email Address"
		></b-form-input>

		<b-form-input
			v-model="password"
			type="password"
			required
			placeholder="Password"
		></b-form-input>

		<b-form-input
			v-model="confirmPassword"
			type="password"
			required
			:state="!confirmPasswordFeedback && !!confirmPassword"
			placeholder="Confirm Password"
		></b-form-input>

		<span class="text-danger" v-text="confirmPasswordFeedback"/>

		<p class="text-danger" v-text="errorText"/>

		<b-button
			type="submit"
			:disabled="!isFormValid"
			variant="primary">
			Create Account
		</b-button>

		<b-button
			type="reset"
			variant="danger">
			Reset
		</b-button>

	</b-form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	props: {
		visible: {
			type: Boolean
		}
	},
	data() {
		return {
			titleOptions: [
				'Dr', 'Mr', 'Ms', 'Mrs'
			],
			title: null,
			firstName: null,
			lastName: null,
			occupation: null,
			email: null,
			password: null,
			confirmPassword: null,
			errorText: null
		};
	},
	computed: {
		isFormValid() {
			return (
				this.email &&
				this.title &&
				this.firstName &&
				this.lastName &&
				this.occupation &&
				this.password &&
				this.password === this.confirmPassword
			);
		},
		confirmPasswordFeedback() {
			if (
				!this.confirmPassword ||
				this.password === this.confirmPassword
			) return null;
			return 'Passwords must match.';
		}
	},
	methods: {
		...mapActions({
			postNewAccount: 'account/signUp'
		}),
		async createAccount() {
			try {
				await this.postNewAccount({
					username: this.email,
					password: this.password,
					title: this.title,
					occupation: this.occupation,
					firstName: this.firstName,
					lastName: this.lastName
				});
				this.$router.push('/');
			} catch (err) {
				this.errorText = err.message;
			}

		},
		clearData() {
			this.title = null;
			this.firstName = null;
			this.lastName = null;
			this.occupation = null;
			this.email = null;
			this.password = null;
			this.confirmPassword = null;
			this.errorText = null;
		}
	}
};
</script>
