<template>
	<b-form class="LoginAccount">

		<b-form-group class="LoginAccount__input" label="Enter your Email Address">
			<b-form-input
				v-model.trim="user.email"
				type="email"
				required
				placeholder="Email Address"/>
		</b-form-group>

		<b-form-group class="LoginAccount__input" label="Enter your Password">
			<b-form-input
				v-model="user.password"
				type="password"
				required
				placeholder="Password"/>
		</b-form-group>

		<section class="LoginAccount__actions">
			<el-button
				class="LoginAccount__button"
				v-text="'Log In'"
				variant="primary"
				@click.native="login"/>
			<router-link
				:to="{ name: 'authentication.signUp' }">
				<el-button
					class="LoginAccount__button"
					v-text="'Create Account'"/>
			</router-link>
		</section>

	</b-form>
</template>

<script>
import { mapActions } from 'vuex';
import { ElButton } from '@holistic-web/el-layout';

export default {
	components: {
		ElButton
	},
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
