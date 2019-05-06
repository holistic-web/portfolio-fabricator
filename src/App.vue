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
@import './styles/index.scss';
@import './styles/helper-classes.scss';
@import './styles/defaults/a.scss';
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 100%;
	min-height: 100vh;
	text-align: center;
	color: $text-primary;
	background: $background-primary;
	position: absolute;
	top: 0;
}

</style>
