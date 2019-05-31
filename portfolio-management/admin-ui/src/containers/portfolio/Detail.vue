<template>
	<section class="PortfolioDetail" v-if="portfolio">

		<code v-text="JSON.stringify(portfolio, null, 4)"/>

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
