<template>
	<div id="app">

		<router-view/>

	</div>
</template>

<script>

export default {

};

</script>

<style lang="scss">
@import './styles/helper-classes.scss';
@import './styles/defaults/a.scss';

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100%;
	min-height: 100vh;
	text-align: center;
	position: absolute;
	top: 0;
}

</style>
