<template>
	<section class="PortfolioDetail">

		<h1>Portfolio</h1>

		<router-link :to="{ name: 'portfolio.edit' }">
			<b-btn v-text="'Edit'" variant="info"/>
		</router-link>

		<span v-if="!portfolio" class="text-error">There was a problem loading your portfolio.</span>

		<template v-else>
			<pre class="PortfolioDetail__detail"> {{ JSON.stringify(portfolio, null, 4) }} </pre>
		</template>

	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { SchemaForm } from 'vue-json-schema-form';
import portfolioSchema from '../../../../portfolio.schema.json';

export default {
	components: {
		SchemaForm
	},
	data() {
		return {
			portfolioSchema,
			formOptions: {
				validateAfterLoad: true,
				validateAfterChanged: true,
				validateAsync: true
			},
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

	&__detail {
		text-align: left;
	}
}

</style>
