<template>
	<div id="app">

		<app-header/>

		<b-container class="Landing">
			<kbd class="Landing__title ">Jon Snow</kbd>

			<img
				class="Landing__image"
				src="./assets/images/logo.svg"
				alt="code image"/>

			<section class="text-align-left">
				<p class="Landing__text lead">
					King in the North and a Bastard of some king. Currently based in Winterfell. Specialising in Node.js, Firebase & Vue.
				</p>
				<p class="Landing__text lead">
					I use agile development methods and cutting edge web technonology to deliver rapid results.
				</p>
			</section>
		</b-container>

		<app-footer/>

	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
	components: {
		AppHeader,
		AppFooter
	}
};

</script>

<style lang="scss">
@import './styles/index.scss';

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100%;
	min-height: 100vh;
	text-align: center;
	color: $white;
	background: $grey;
	position: absolute;
	top: 0;
}


.Landing {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: $headerHeight;
	height: calc(100vh - #{$headerHeight});

	@media all and (min-width: $desktop) {
		$headerHeightDesktop: 63px;
		margin-top: $headerHeightDesktop;
		height: calc(100vh - #{$headerHeightDesktop});
	}

	@media all and (max-height: 500px) {
		height: auto;
	}

	&__title {
		font-size: 1.4rem;
		color: $white;
		width: auto;
		margin-left: auto;
		margin-right: auto;
	}

	&__text {
		font-size: 1.2rem;
		text-align: center;
	}

	&__image {
		width: 60%;
		margin: 1rem 20%;

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
