<template>
	<section class="PortfolioEdit">

		<h1>Portfolio</h1>

		<router-link :to="{ name: 'portfolio.detail' }">
			<b-btn variant="info" v-text="'detail'"/>
		</router-link>

		<span
			v-if="page.isLoading"
			v-text="'Loading...'"/>

		<span
			v-if="page.isSubmitting"
			v-text="'Submitting...'"/>

		<section v-if="!page.isLoading && !page.isSubmitting && portfolioData">

			<b-form-group
				label="Name:"
				label-align-sm="middle"
				label-for="Portfolio__name">
				<b-form-input
					id="Portfolio__name"
					v-model="portfolioData.name.first"/>
			</b-form-group>

		</section>

	</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { cloneDeep } from 'lodash';
import portfolioSchema from '../../../../common/portfolio.schema.json';

export default {
	data() {
		return {
			page: {
				isLoading: false,
				isSubmitting: false
			},
			portfolioSchema,
			portfolioData: null
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
	async created() {
		this.page.isLoading = true;
		await this.fetchPortfolio();
		this.portfolioData = cloneDeep(this.portfolio);
		console.log('this.portfolioData: ', this.portfolioData);
		this.page.isLoading = false;
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
