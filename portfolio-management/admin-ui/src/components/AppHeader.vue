<template>
	<header v-if="!isAuthenticationPage">

		<b-button
			variant="outline-primary"
			size="lg"
			@click="logOutUser"
			v-text="`Log out`"/>

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
