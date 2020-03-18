<template>
	<section class="ElWrapper WebsiteDetail">

		<section class="WebsiteDetail__title">
			<h1>Website</h1>

			<el-button
				v-text="'Edit'"
				variant="outline-primary"
				size="sm"
				:to="{ name: 'website.edit' }"/>
		</section>

		<p>Your website can be viewed at <a :href="websiteUrl" v-text="websiteUrl" target="_blank"/></p>

		<span
			v-if="page.isLoading"
			v-text="'Loading...'"/>
		<span v-else-if="!website" class="text-error">
			There was a problem loading your website.
		</span>
		<template v-else>
			<pre class="WebsiteDetail__detail"> {{ JSON.stringify(website, null, 4) }} </pre>
		</template>

	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ElButton } from '@holistic-web/el-layout';

export default {
	components: {
		ElButton
	},
	data() {
		return {
			page: {
				isLoading: false
			},
			errorText: null
		};
	},
	computed: {
		...mapGetters({
			website: 'website/website',
			authentication: 'account/authentication'
		}),
		websiteUrl() {
			const { uid } = this.authentication.user;
			return `https://actions-codelab-edeb1.firebaseapp.com/${uid}`;
		}
	},
	methods: {
		...mapActions({
			fetchWebsite: 'website/fetchWebsite'
		})
	},
	async created() {
		this.page.isLoading = true;
		await this.fetchWebsite();
		this.page.isLoading = false;
	}
};
</script>

<style lang="scss">
@import '@holistic-web/el-layout/src/styles/theme';

.WebsiteDetail {

	&__title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	&__detail {
		color: $secondary;
	}
}

</style>
