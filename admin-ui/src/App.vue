<template>
	<div id="app">

		<el-layout title="Portfolio Fabricator">
			<router-view/>
		</el-layout>

		<app-header/>

	</div>
</template>

<script>
import Vue from 'vue';
import { ElLayout } from '@holistic-web/el-layout';
import AppHeader from './components/AppHeader.vue';

export default {
	components: {
		ElLayout,
		AppHeader
	},
	created() {
		const { components } = Vue.options;
		console.log('components: ', components);
	}
};
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

/* Bootstrap Vue Customisation */
// radio buttons that are clickable have mouse cursor
.btn-group-toggle {
	> label:not(.active) {
		cursor: pointer !important;
	}
}
</style>
