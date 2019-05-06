<template>
	<section class="Admin_Authenticate">
		<b-card
			title="Sign Up!"
			img-src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
			img-alt="Image"
			img-top
			body-class="Admin_Authenticate__card">

			<b-card-text>
				This is a project to help build a porfolio and online present, see <b-link href="/https://github.com/holistic-web/portfolio-fabricator">
				here</b-link> for more info.
			</b-card-text>

			<section>
				<b-form-input class="Admin_Authenticate__input" v-model="email" placeholder="email"/>
				<b-form-input class="Admin_Authenticate__input" type="password" v-model="password" placeholder="password"/>
				<b-form-input class="Admin_Authenticate__input" type="password" v-model="passwordConfirmation" placeholder="password confirmation"/>
			</section>

			<!-- #TODO: make this button sign a user up with firebase -->
			<b-button class="Admin_Authenticate__input" href="#" variant="primary">Go somewhere</b-button>
		</b-card>
	</section>
</template>

<style lang="scss">
@import '../../styles/index.scss';

.Admin_Authenticate {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;

	&__card {
		display: flex;
		flex-direction: column;
		height: fit-content;
	}

	&__input {
		margin: 1rem 0;
	}

}
</style>
