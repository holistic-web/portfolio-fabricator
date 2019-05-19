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
			context: 'context'
		}),
		listConfig() {
			if (!this.context) return false;
			if (!this.context.experience) return false;
			const config = {
				title: 'Experience'
			};
			config.items = this.context.experience.map(item => ({
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
	padding-top: 1rem;
	padding-bottom: 2rem;
}

</style>
