<template>
	<div id="app">

		<app-header/>

		<hero/>

		<app-footer/>

	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import Hero from '@/components/Hero.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
	components: {
		AppHeader,
		Hero,
		AppFooter
	}
};

</script>


<style lang="scss">

@import './styles/index.scss';

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100%;
	min-height: 100vh;
	text-align: center;
	color: $white;
	background: $grey;
	position: absolute;
	top: 0;
}

</style>
