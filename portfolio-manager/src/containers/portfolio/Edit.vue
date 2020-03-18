<template>
	<section class="ElWrapper PortfolioEdit">

		<section class="PortfolioEdit__title">
			<h1>Portfolio</h1>

			<el-button
				variant="outline-secondary"
				size="sm"
				v-text="'detail'"
				:to="{ name: 'portfolio.detail' }"/>
		</section>

		<span
			v-if="page.isLoading"
			v-text="'Loading...'"/>
		<span
			v-else-if="page.isSubmitting"
			v-text="'Submitting...'"/>
		<span v-else-if="!portfolio" class="text-error">
			There was a problem loading your portfolio.
		</span>
		<schema-form
			v-else-if="portfolio"
			:schema="portfolioSchema"
			v-model="formData"
			@submit="onSubmitClick"/>

	</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ElButton } from '@holistic-web/el-layout';
import portfolioSchema from '../../../../common/portfolio.schema.json';

export default {
	components: {
		ElButton
	},
	data() {
		return {
			page: {
				isLoading: false,
				isSubmitting: false
			},
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
			this.page.isSubmitting = true;
			await this.updatePortfolio(this.formData);
			this.page.isSubmitting = false;
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
		this.page.isLoading = false;
	}
};
</script>

<style lang="scss">

.PortfolioEdit {

	&__title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 2rem;
	}
}

</style>
