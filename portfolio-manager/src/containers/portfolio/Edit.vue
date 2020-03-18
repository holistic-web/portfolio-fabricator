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


		<schema-form
			v-if="portfolio"
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

	&__title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 2rem;
	}
}

</style>
