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
			context: 'context'
		}),
		listConfig() {
			if (!this.context) return false;
			if (!this.context.education) return false;
			const config = {
				title: 'Education'
			};
			config.items = this.context.education.map(item => ({
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
