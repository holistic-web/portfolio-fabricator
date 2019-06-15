<template>
	<header
		class="Header"
		:class="headerShadowClassName">

		<div class="Header__inner">

			<span class="Header__title">
				{{portfolio.name.first}} {{portfolio.name.last}}&nbsp;
				<span class="Header__title--light">- {{portfolio.profession}}</span>
			</span>

			<b-button
				class="Header__contactButton"
				variant="outline-primary"
				size="lg"
				v-text="'Get in touch!'"
				@click="$emit('showModal')"/>

		</div>

	</header>
</template>

<script>
import { mapGetters } from 'vuex';
import { get as _get } from 'lodash';

export default {
	data() {
		return {
			scrollDistance: null
		};
	},
	computed: {
		...mapGetters({
			portfolio: 'portfolio/portfolio'
		}),
		headerShadowClassName() {
			if (this.scrollDistance > 10) return 'Header--shadow';
			return '';
		}
	},
	methods: {
		_get,
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
	background: $background-primary;
	z-index: 2;
	transition: box-shadow 200ms;

	&--shadow {
		box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
	}

	&__inner {
		@extend .inner;
		padding: 0.5rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;

		@media all and (min-width: $tablet) {
			padding: 1rem 0;
			flex-direction: row;
			padding: 1rem 0;
		}

	}

	&__title {
		font-weight: bold;
		margin-right: auto;
		color: $text-primary;

		&:hover {
			color: $text-primary;
			text-decoration: none;
		}

		@media all and (min-width: $tablet) {
			font-size: 1.5rem;
		}

		&--light {
			font-weight: normal;
			color: $text-secondary;
		}

	}

	&__contactButton {
		display: none !important;

		@media all and (min-width: $tablet) {
			display: flex !important;
		}

	}

}
</style>
