<template>
	<section class="PortfolioDetail" v-if="portfolio">
		{{portfolio}}
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
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
