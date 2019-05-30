<template>
	<footer v-if="showFooter" class="Footer">

		<div class="Footer__inner">

			<div class="Footer__info">

				<div
					v-if="portfolio.profileImageUrl"
					class="Footer__image"
					:style="`background-image: url('${portfolio.profileImageUrl}')`"/>

				<div
					v-if="portfolio.contact"
					class="Footer__contact">

					<a
						v-if="_get(portfolio, 'contact.telephone')"
						:href="`tel:${portfolio.contact.telephone}`"
						v-text="portfolio.contact.telephone"/>

					<a
						v-if="_get(portfolio, 'contact.email')"
						:href="`mailto:${portfolio.contact.email}`"
						v-text="portfolio.contact.email"/>

					<div class="Footer__links">
						<b-link
							v-if="_get(portfolio, 'externalProfiles.github')"
							:href="`https://github.com/${portfolio.externalProfiles.github}`"
							target="_blank"
							title="Check me out on github!"
							v-b-tooltip.hover>
							<img
								src="../assets/icons/github.svg"
								class="Footer__icon mr-1 ml-1"
								:alt="`github/${portfolio.externalProfiles.github}`"/>
						</b-link>

						<b-link
							v-if="_get(portfolio, 'externalProfiles.linkedIn')"
							:href="`https://linkedin.com/in/${portfolio.externalProfiles.linkedIn}`"
							target="_blank"
							title="Check me out on linkedIn!"
							v-b-tooltip.hover>
							<img
								class="Footer__icon mr-1 ml-1"
								src="../assets/icons/linkedin.svg"
								:alt="`linkedin/${portfolio.externalProfiles.linkedIn}`"/>
						</b-link>
					</div>

				</div>
			</div>


		</div>

	</footer>
</template>

<script>
import { mapGetters } from 'vuex';
import { get as _get } from 'lodash';

export default {
	computed: {
		...mapGetters({
			portfolio: 'portfolio/portfolio'
		}),
		showFooter() {
			if (
				!this.portfolio.externalProfiles
				&& !this.portfolio.profileImageUrl
				&& !this.portfolio.contact
			) return false;
			return true;
		}
	},
	methods: {
		_get
	}
};
</script>


<style lang="scss">

@import '../styles/index.scss';

.Footer {
	height: 100%;
	padding: 2rem 0;
	background: $background-primary;
	z-index: 2;

	&__inner {
		@extend .inner;
		display: flex;
		flex-direction: column;
	}

	&__info {
		display: flex;
		flex-direction: row;
		margin-bottom: 2rem;
		justify-content: space-between;
	}

	&__image {
		min-width: 50%;
		height: 10rem;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		border-radius: 0.5rem;

		@media all and (min-width: $tablet) {
			width: 15rem;
			min-width: unset;
		}
	}

	&__contact {
		text-align: right;
		padding-left: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: flex;
		flex-direction: column;
	}

	&__links {
		margin-top: 1rem;
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
