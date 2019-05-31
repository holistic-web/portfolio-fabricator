<template>
	<section class="PortfolioDetail" v-if="portfolio">
		<span class="error" v-text="errorText"/>
		{{errorText}}
		{{portfolio}}
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
		}),
		async preparePage() {
			try {
				await this.fetchPortfolio();
			} catch (e) {
				this.errorText = e;
				console.error(e);
			}
		}
	},
	created() {
		this.preparePage();
	}
};
</script>
