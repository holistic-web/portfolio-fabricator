<template>
	<section class="PortfolioDetail">

		<h1>Portfolio</h1>

		<router-link :to="{ name: 'portfolio.edit' }">
			<b-button v-text="'Edit'"/>
		</router-link>

		<span v-if="!portfolio" class="text-error">There was a problem loading your portfolio.</span>

		<template v-else>
			<code v-text="JSON.stringify(portfolio, null, 4)"/>
		</template>

	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			errorText: null
		};
	},
	computed: {
		...mapGetters({
			portfolio: 'portfolio/portfolio'
		})
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
}

</style>
