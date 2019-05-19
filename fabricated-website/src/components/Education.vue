<template>
	<section class="Education">
		<list v-if="listConfig" :config="listConfig"/>
		<div class="Education__border"/>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
import List from './List.vue';

export default {
	components: {
		List
	},
	computed: {
		...mapGetters({
			portfolio: 'portfolio/portfolio'
		}),
		listConfig() {
			if (!this.portfolio) return false;
			if (!this.portfolio.education) return false;
			const config = {
				title: 'Education'
			};
			config.items = this.portfolio.education.map(item => ({
				title: item.institution,
				tag: item.date,
				items: item.qualifications
			}));
			return config;
		}
	}
};
</script>

<style lang="scss">
@import "../styles/index.scss";

.Education {

	&__border {
		@extend .inner;
		border-bottom: 1px solid $background-primary;
	}
}

</style>
