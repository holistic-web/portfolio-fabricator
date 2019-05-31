<template>
	<header v-if="!isAuthenticationPage">

		<b-button
			variant="outline-primary"
			v-text="`Log out`"
			@click="logOutUser"/>

	</header>
</template>

<script>

import { mapActions } from 'vuex';

export default {

	methods: {
		...mapActions({
			logOutUser: 'account/logOut'
		})
	},
	computed: {
		isAuthenticationPage() {
			const isAuthenticationPage = this.$route.name.startsWith('authentication.');
			return isAuthenticationPage;
		}
	}
};
</script>
