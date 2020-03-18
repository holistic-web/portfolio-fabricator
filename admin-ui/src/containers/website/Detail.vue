<template>
	<section class="WebsiteDetail">

		<h1>Website</h1>

		<router-link :to="{ name: 'website.edit' }">
			<el-button v-text="'Edit'" variant="info"/>
		</router-link>

		<p>Your website can be viewed at <a :href="websiteUrl" v-text="websiteUrl" target="_blank"/></p>

		<span v-if="!website" class="text-error">There was a problem loading your website.</span>

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
	created() {
		this.fetchWebsite();
	}
};
</script>

<style lang="scss">

.PortfolioDetail {
	padding: 1rem;
	display: flex;
	flex-direction: column;

	&__detail {
		text-align: left;
	}
}

</style>
