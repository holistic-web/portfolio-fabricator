<template>
	<list class="Experience" v-if="listConfig" :config="listConfig"/>
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
			if (!this.portfolio.experience) return false;
			const config = {
				title: 'Experience'
			};
			config.items = this.portfolio.experience.map(item => ({
				title: item.organization,
				tag: item.date,
				text: item.description,
				items: item.projects
			}));
			return config;
		}
	}
};
</script>

<style lang="scss">

.Experience {
	padding-bottom: 1rem;
}

</style>
