<template>
	<section class="ElWrapper PortfolioDetail">

		<section class="PortfolioDetail__title">
			<h1>Portfolio</h1>

			<el-button
				v-text="'Edit'"
				variant="outline-secondary"
				size="sm"
				:to="{ name: 'portfolio.edit' }"/>
		</section>

		<p>Your website can be viewed at <a :href="websiteUrl" v-text="websiteUrl" target="_blank"/></p>

		<span
			v-if="page.isLoading"
			v-text="'Loading...'"/>
		<span v-else-if="!portfolio" class="text-error">
			There was a problem loading your portfolio.
		</span>
		<pre
			v-else
			class="PortfolioDetail__detail"
			v-text="JSON.stringify(portfolio, null, 4)"/>

	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ElButton } from '@holistic-web/el-layout';

export default {
	components: {
		ElButton
	},
	data() {
		return {
			page: {
				isLoading: false
			},
			errorText: null
		};
	},
	computed: {
		...mapGetters({
			portfolio: 'portfolio/portfolio',
			authentication: 'account/authentication'
		}),
		websiteUrl() {
			const { uid } = this.authentication.user;
			return `https://actions-codelab-edeb1.firebaseapp.com/${uid}`;
		}
	},
	methods: {
		...mapActions({
			fetchPortfolio: 'portfolio/fetchPortfolio'
		})
	},
	async created() {
		this.page.isLoading = true;
		await this.fetchPortfolio();
		this.page.isLoading = false;
	}
};
</script>

<style lang="scss">
@import '@holistic-web/el-layout/src/styles/theme';

.PortfolioDetail {

	&__title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	&__detail {
		color: $secondary;
	}
}

</style>
