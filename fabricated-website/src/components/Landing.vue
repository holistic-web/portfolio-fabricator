<template>
	<b-container class="Landing">
		<kbd class="Landing__title " v-text="`${portfolio.name.first} ${portfolio.name.last}`"/>

		<img
			class="Landing__image"
			src="../assets/images/logo.svg"
			alt="code image"/>

		<section class="text-align-left">
			<p class="Landing__text" v-text="portfolio.aboutMe"/>
		</section>
	</b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			portfolio: 'portfolio/portfolio'
		})
	}
};
</script>

<style lang="scss">
@import '../styles/index.scss';

.Landing {
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;

	&__title {
		font-size: 1.4rem;
		color: $text-primary;
		width: auto;
		margin-left: auto;
		margin-right: auto;
	}

	&__text {
		font-size: 1rem;
		text-align: justify;


		@media all and (min-width: $tablet) {
			text-align: center;
			font-size: 1.2rem;
		}
	}

	&__image {
		width: 60%;
		margin: 2rem 20%;

		@media all and (min-width: $tablet) {
			width: 50%;
			margin: 2rem 25%;
		}

		@media all and (min-width: $desktop) {
			width: 30%;
			margin: 2rem 35%;
		}
	}

}
</style>
