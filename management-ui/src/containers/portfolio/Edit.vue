<template>
	<section class="PortfolioEdit">

		<h1>Portfolio</h1>

		<router-link :to="{ name: 'portfolio.detail' }">
			<b-btn variant="info" v-text="'detail'"/>
		</router-link>

		<SchemaForm v-if="portfolio" :schema="portfolioSchema" v-model="formData" @submit="onSubmitClick"/>

	</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { SchemaForm } from 'formvuelatte';
import portfolioSchema from '../../../../common/portfolio.schema.json';

export default {
	components: { SchemaForm },
	data() {
		return {
			portfolioSchema,
			formData: {}
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
			updatePortfolio: 'portfolio/updatePortfolio'
		}),
		async onSubmitClick() {
			await this.updatePortfolio(this.formData);
			this.$toasted.show('Portfolio Updated', {
				position: 'bottom-right',
				duration: '3000'
			});
			console.log('done');
		}
	},
	watch: {
		portfolio: {
			immediate: true,
			handler() {
				this.formData = this.portfolio;
			}
		}
	},
	created() {
		this.fetchPortfolio();
	}
};
</script>

<style lang="scss">

.PortfolioEdit {
	padding: 1rem;
	display: flex;
	flex-direction: column;
}

</style>
