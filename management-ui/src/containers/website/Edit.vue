<template>
	<section class="WebsiteEdit">

		<h1>Website</h1>

		<router-link :to="{ name: 'website.detail' }">
			<b-btn variant="info" v-text="'detail'"/>
		</router-link>

		<span
			v-if="page.isLoading"
			v-text="'Loading...'"/>

		<span
			v-if="page.isSubmitting"
			v-text="'Submitting...'"/>

		<section v-if="!page.isLoading && !page.isSubmitting">

			<b-form-group
				v-if="!page.isSubmitting"
				label="Show Contact Form"
				for="WebsiteEdit__showContactForm">
				<b-form-radio-group
					id="WebsiteEdit__showContactForm"
					v-model="websiteData.settings.showContactForm"
					:options="[true, false]"
					size="lg"
					button-variant="outline-info"
					buttons
					stacked/>
			</b-form-group>

		</section>

		<b-btn
			variant="outline-primary"
			:disabled="isSubmitButtonDisabled"
			@click="onSubmitClick"
			v-text="'Submit'"/>

	</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	data() {
		return {
			page: {
				isLoading: false,
				isSubmitting: false
			},
			websiteData: null
		};
	},
	computed: {
		...mapGetters({
			website: 'website/website'
		}),
		isSubmitButtonDisabled() {
			if (
				this.page.isSubmitting
				|| !this.websiteData
			) return true;
			return false;
		}
	},
	methods: {
		...mapActions({
			fetchWebsite: 'website/fetchWebsite',
			updateWebsite: 'website/updateWebsite'
		}),
		async fetch() {
			this.page.isLoading = true;
			await this.fetchWebsite();
			this.page.isLoading = false;
		},
		async onSubmitClick() {
			this.page.isSubmitting = true;
			await this.updateWebsite(this.websiteData);
			this.$toasted.show('Website Updated', {
				position: 'bottom-right',
				duration: '3000'
			});
			this.page.isSubmitting = false;
		}
	},
	watch: {
		website: {
			immediate: true,
			handler() {
				this.websiteData = this.website;
			}
		}
	},
	created() {
		this.fetch();
	}
};
</script>

<style lang="scss">

.WebsiteEdit {
	padding: 1rem;
	display: flex;
	flex-direction: column;
}

</style>
