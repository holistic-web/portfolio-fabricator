<template>
	<section class="ElWrapper WebsiteEdit">

		<section class="WebsiteEdit__title">
			<h1>Website</h1>

			<el-button
				variant="outline-primary"
				size="sm"
				v-text="'detail'"
				:to="{ name: 'website.detail' }"/>
		</section>

		<span
			v-if="page.isLoading"
			v-text="'Loading...'"/>
		<span
			v-else-if="page.isSubmitting"
			v-text="'Submitting...'"/>
		<section v-else-if="website">

			<b-form-group
				class="WebsiteEdit__input"
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

		<el-button
			variant="outline-primary"
			:disabled="isSubmitButtonDisabled"
			@click.native="onSubmitClick"
			v-text="'Submit'"/>

	</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ElButton } from '@holistic-web/el-layout';

export default {
	components: {
		ElButton
	},
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

	&__title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	&__input {
		margin-bottom: 2rem;
	}
}

</style>
