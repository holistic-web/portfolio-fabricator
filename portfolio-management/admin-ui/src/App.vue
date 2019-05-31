<template>
	<div id="app">

		<app-header/>

		<router-view/>

	</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
	components: {
		AppHeader
	}
};
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
