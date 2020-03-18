<template>
	<section class="PortfolioDetail">

		<h1>Portfolio</h1>

		<router-link :to="{ name: 'portfolio.edit' }">
			<el-button v-text="'Edit'" variant="info"/>
		</router-link>

		<p>Your website can be viewed at <a :href="websiteUrl" v-text="websiteUrl" target="_blank"/></p>

		<span v-if="!portfolio" class="text-error">There was a problem loading your portfolio.</span>

		<template v-else>
			<pre class="PortfolioDetail__detail"> {{ JSON.stringify(portfolio, null, 4) }} </pre>
		</template>

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
	created() {
		this.fetchPortfolio();
	}
};
</script>

<style lang="scss">

.PortfolioDetail {
	padding: 1rem;
	display: flex;
	flex-direction: column;

	&__detail {
		text-align: left;
	}
}

</style>
