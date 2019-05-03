<template>
	<header
		class="Header"
		:class="headerShadowClassName">

		<div class="Header__inner">

			<b-link
				class="Header__title"
				to="/">
				Jon Snow&nbsp;
				<span class="Header__title--light">- Bastard</span>
			</b-link>

			<b-link
				href="https://github.com/holistic-web"
				target="_blank"
				title="Check me out on github!"
				v-b-tooltip.hover>
				<img
					class="Header__icon"
					src="../assets/icons/github.svg"
					alt="github/holisticweb"/>
			</b-link>

		</div>

	</header>
</template>

<script>
export default {
	data() {
		return {
			scrollDistance: null
		};
	},
	computed: {
		headerShadowClassName() {
			if (this.scrollDistance > 10) return 'Header--shadow';
			return '';
		}
	},
	methods: {
		updateScrollDistance() {
			this.scrollDistance = window.scrollY;
		}
	},
	mounted() {
		window.addEventListener('scroll', this.updateScrollDistance);
	},
	destroyed() {
		window.removeEventListener('scroll', this.updateScrollDistance);
	}

};
</script>


<style lang="scss">

@import '../styles/index.scss';

.Header {
	position: fixed;
	width: 100%;
	top: 0;
	background: $grey;
	z-index: 2;
	transition: box-shadow 200ms;
	height: $headerHeight;

	@media all and (min-width: $tablet) {
		height: $headerHeightDesktop;
	}

	&--shadow {
		box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
	}

	&__inner {
		@extend .inner;
		padding: 1rem 0 0 0;
		display: flex;
	}

	&__title {
		font-weight: bold;
		margin-right: auto;

		&:hover {
			text-decoration: none;
		}

		@media all and (min-width: $tablet) {
			font-size: 1.5rem;
		}

		&--light {
			font-weight: normal;
			color: $orange;
		}

	}

	&__icon {
		width: 32px;
		margin-top: -4px;

		@media all and (min-width: $desktop) {
			width: 48px;
			margin-top: -7px;
		}
	}

}
</style>
