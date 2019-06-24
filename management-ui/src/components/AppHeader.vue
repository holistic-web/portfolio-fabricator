<template>
	<header v-if="!isAuthenticationPage">
		<b-navbar class="AppHeader" toggleable="lg" type="dark" variant="info">

			<b-navbar-brand class="AppHeader__title" href="#">Portfolio Management</b-navbar-brand>

				<div class="AppHeader__rightSection">

					<b-nav class="AppHeader__menu">
						<b-nav-item class="AppHeader__menu__item">

							<router-link
								class="AppHeader__menu__link"
								:to="{ name: 'portfolio.detail' }"
								v-text="'Portfolio'"/>

							<router-link
								class="AppHeader__menu__link"
								:to="{ name: 'website.detail' }"
								v-text="'Website'"/>

						</b-nav-item>
					</b-nav>

					<b-btn
						variant="outline-danger"
						size="sm"
						v-text="'Log Out'"
						@click="logOutUser"/>

				</div>

		</b-navbar>
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

<style lang="scss">

.AppHeader {

	&.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	&__title {
		min-height: unset;
	}

	&__rightSection {
		display: flex;
		flex-direction: row;
	}

	&__menu {
		margin-right: 2rem;

		&__link {
			color: #fff;
			padding: 0.2rem 0.5rem;

			&:hover {
				text-decoration: none;
				color: #fff;
			}

			&.router-link-active {
				border-bottom: 0.05rem solid white;
				margin-bottom: -0.05rem;
			}

		}
	}
}

</style>
