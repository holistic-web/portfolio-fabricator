<template>
	<div id="app">

		<el-layout>
			<template v-slot:header>
				<app-header />
			</template>
			<router-view/>
		</el-layout>

		<app-header/>

	</div>
</template>

<script>
import { ElLayout } from '@holistic-web/el-layout';
import AppHeader from './components/AppHeader.vue';

export default {
	components: {
		ElLayout,
		AppHeader
	},
	computed: {
		isAuthenticationPage() {
			const isAuthenticationPage = this.$route.name.startsWith('authentication.');
			return isAuthenticationPage;
		}
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Fira Code', monospace;
}

/* Bootstrap Vue Customisation */
// radio buttons that are clickable have mouse cursor
.btn-group-toggle {
	> label:not(.active) {
		cursor: pointer !important;
	}
}
</style>
