<template>
	<b-container class="Landing">
		<kbd class="Landing__title ">Jon Snow</kbd>

		<img
			class="Landing__image"
			src="../assets/images/logo.svg"
			alt="code image"/>

		<section class="text-align-left">
			<p class="Landing__text lead">
				King in the North and a bastard of Lord Eddard Stark. I ride dragons and kill white walkers and stuff. Don't @ me.
			</p>
		</section>
	</b-container>
</template>

<style lang="scss">
@import '../styles/index.scss';

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
