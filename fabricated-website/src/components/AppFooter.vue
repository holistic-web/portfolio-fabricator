<template>
	<footer class="Footer">

		<div class="Footer__inner pt-5 pb-4">

			<h2 class="Footer__title">Contact</h2>

			<p class="Footer__tagLine">If you would like to contact me, or look at my Online profile, please click the links below.</p>

			<b-button
				class="Footer__emailButton"
				variant="outline-warning"
				:href="`mailto:${context.contact.email}`"
				v-text="context.contact.email"/>

			<section class="Footer__links">
				<b-link
					:href="`https://github.com/${context.externalProfiles.github}`"
					target="_blank"
					title="Check me out on github!"
					v-b-tooltip.hover>
					<img
						src="../assets/icons/github.svg"
						class="Footer__icon mr-1 ml-1"
						:alt="`github/${context.externalProfiles.github}`"/>
				</b-link>

				<b-link
					:href="`https://linkedin.com/in/${context.externalProfiles.linkedIn}`"
					target="_blank"
					title="Check me out on linkedIn!"
					v-b-tooltip.hover>
					<img
						class="Footer__icon mr-1 ml-1"
						src="../assets/icons/linkedin.svg"
						:alt="`linkedin/${context.externalProfiles.linkedIn}`"/>
				</b-link>
			</section>

		</div>

	</footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			context: 'context'
		})
	}
};
</script>


<style lang="scss">

@import '../styles/index.scss';

.Footer {
	height: 100%;
	background: $background-primary;
	z-index: 2;

	&__inner {
		@extend .inner;
		display: flex;
		flex-flow: column;
	}

	&__title {
		font-weight: bold;

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

	&__tagLine {
		font-size: 1.2rem;
		padding: 10px;
		margin-bottom: 30px;
		border-bottom: 1px solid $orange;
	}

	&__emailButton {
		margin: 0 auto;
		margin-bottom: 30px;
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
