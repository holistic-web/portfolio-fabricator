<template>
	<el-header class="AppHeader">
		<template v-slot:left>
			<b-link class="ElHeader__branding">
				<h2
					class="ElHeader__branding__text"
					v-text="'Portfolio Fabricator'"/>
			</b-link>
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
		</template>
		<template v-slot:right>
			<h1
				v-if="isAuthenticationPage"
				class="ElHeader__subTitle"
				v-text="'Log In'"/>
			<el-button
				v-else
				variant="outline-danger"
				size="sm"
				v-text="'Log Out'"
				@click.native="logOutUser"/>
			</template>
	</el-header>
</template>

<script>
import { mapActions } from 'vuex';
import { ElButton, ElHeader } from '@holistic-web/el-layout';

export default {
	components: {
		ElButton,
		ElHeader
	},
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
@import '@holistic-web/el-layout/src/styles/theme';

.AppHeader {

	&__menu {
		margin-right: 2rem;

		&__link {
			color: $secondary;
			padding: 0.2rem 0.5rem;

			&:hover {
				text-decoration: none;
				color: $primary;
			}

			&.router-link-active {
				border-bottom: 0.05rem solid $primary;
				margin-bottom: -0.05rem;
			}

		}
	}
}

</style>
