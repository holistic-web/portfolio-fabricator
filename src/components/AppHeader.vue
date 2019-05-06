<template>
	<header
		class="Header"
		:class="headerShadowClassName">

		<div class="Header__inner">

			<b-link
				class="Header__title"
				to="/">
				{{context.name.first}} {{context.name.last}}&nbsp;
				<span class="Header__title--light">- {{context.profession}}</span>
			</b-link>

			<b-link
				:href="`https://github.com/${context.externalProfiles.github}`"
				target="_blank"
				title="Check me out on github!"
				v-b-tooltip.hover>
				<img
					class="Footer__icon"
					src="../assets/icons/github.svg"
					:alt="`github/${context.externalProfiles.github}`"/>
			</b-link>

		</div>

	</header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	data() {
		return {
			scrollDistance: null
		};
	},
	computed: {
		...mapGetters({
			context: 'context'
		}),
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
	background: $background-primary;
	z-index: 2;
	transition: box-shadow 200ms;

	&--shadow {
		box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
	}

	&__inner {
		@extend .inner;
		padding: 1rem 0;
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
			color: $colour-secondary;
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
