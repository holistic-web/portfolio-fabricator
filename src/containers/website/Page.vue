<template>
	<section class="Website">

			<app-header/>

			<landing/>

			<education/>

			<experience/>

			<app-footer/>

	</section>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import Landing from './components/Landing.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import AppFooter from './components/AppFooter.vue';

export default {
	components: {
		AppHeader,
		Landing,
		Education,
		Experience,
		AppFooter
	}
};
</script>
