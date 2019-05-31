<template>
	<section class="PortfolioDetail">

		<b-button
			v-text="'Edit'"
			:to="{ name: 'portfolio.edit' }"/>

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
			fetchPortfolio: 'portfolio/fetchPortfolio',
			// testing
			updatePortfolio: 'portfolio/updatePortfolio'
		})
	},
	async created() {
		await this.updatePortfolio({ test: 'test ' });
		this.fetchPortfolio();
	}
};
</script>
