<template>
	<footer class="Footer">

		<div class="Footer__inner">

			<div class="Footer__info">

				<div
					v-if="context.profileImageUrl"
					class="Footer__image"
					:style="`background-image: url('${context.profileImageUrl}')`"/>

				<div
					v-if="context.contact"
					class="Footer__contact">

					<a
						v-if="_get(context, 'contact.telephone')"
						:href="`tel:${context.contact.telephone}`"
						v-text="context.contact.telephone"/>

					<a
						v-if="_get(context, 'contact.email')"
						:href="`mailto:${context.contact.email}`"
						v-text="context.contact.email"/>

					<div class="Footer__links">
						<b-link
							v-if="_get(context, 'externalProfiles.github')"
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
							v-if="_get(context, 'externalProfiles.linkedIn')"
							:href="`https://linkedin.com/in/${context.externalProfiles.linkedIn}`"
							target="_blank"
							title="Check me out on linkedIn!"
							v-b-tooltip.hover>
							<img
								class="Footer__icon mr-1 ml-1"
								src="../assets/icons/linkedin.svg"
								:alt="`linkedin/${context.externalProfiles.linkedIn}`"/>
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
			context: 'context'
		})
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
