<template>
	<section class="PortfolioEdit">

		<h1>Edit Portfolio</h1>

		<router-link :to="{ name: 'portfolio.detail' }">
			<b-button v-text="'detail'"/>
		</router-link>

		<schema-form v-if="portfolio" :schema="schema" v-model="formData"/>

		<b-button v-text="'Update'" @click="onUpdateClick"/>
	</section>
</template>

<script>
import { SchemaForm } from 'vue-json-schema-form';
import { mapActions, mapGetters } from 'vuex';
import jsonSchema from '../../../../portfolio.schema.json';

export default {
	components: {
		SchemaForm
	},
	data() {
		return {
			schema: jsonSchema,
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
		async onUpdateClick() {
			await this.updatePortfolio(this.formData);
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
