<template>
	<div id="app" v-if="portfolio">

		<vue-headful :title="`${portfolio.name.first} ${portfolio.name.last}`"/>

		<app-header/>

		<landing/>

		<education/>

		<experience/>

		<app-footer/>


	</div>
</template>

<script>
import { mapActions } from 'vuex';
import VueHeadful from 'vue-headful';
import AppHeader from './components/AppHeader.vue';
import Landing from './components/Landing.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import AppFooter from './components/AppFooter.vue';

export default {
	components: {
		VueHeadful,
		AppHeader,
		Landing,
		Education,
		Experience,
		AppFooter
	},
	data() {
		return {
			portfolio: null
		};
	},
	methods: {
		...mapActions({
			fetchPortfolioById: 'portfolio/fetchPortfolioById'
		})
	},
	async created() {
		const id = window.location.pathname.substring(1);
		this.portfolio = await this.fetchPortfolioById({ id });
	}
};

</script>

<style lang="scss">
@import './styles/index.scss';
@import './styles/helper-classes.scss';
@import 'bootstrap/scss/bootstrap.scss';

#app {
	font-family: 'Montserrat', Helvetica, Arial, sans-serif;
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
