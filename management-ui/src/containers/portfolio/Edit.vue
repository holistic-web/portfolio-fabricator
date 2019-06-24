<template>
	<section class="PortfolioEdit">

		<h1>Portfolio</h1>

		<router-link :to="{ name: 'portfolio.detail' }">
			<b-btn variant="info" v-text="'detail'"/>
		</router-link>

		<span
			v-if="page.isLoading"
			v-text="'Loading...'"/>

		<span
			v-if="page.isSubmitting"
			v-text="'Submitting...'"/>

		<section v-if="!page.isLoading && !page.isSubmitting">

			<section>

				<label class="PortfolioEdit__label">Name</label>

				<b-form-group
					label="First name:"
					label-for="Portfolio__firstName">
					<b-form-input
						id="Portfolio__firstName"
						v-model="portfolioData.name.first"/>
				</b-form-group>

				<b-form-group
					label="Last name:"
					label-for="Portfolio__lastName">
					<b-form-input
						id="Portfolio__lastName"
						v-model="portfolioData.name.last"/>
				</b-form-group>

			</section>

			<section>

				<label class="PortfolioEdit__label">Profession</label>

				<b-form-group
					label="Profession:"
					label-for="Portfolio__profession">
					<b-form-input
						id="Portfolio__profession"
						v-model="portfolioData.profession"/>
				</b-form-group>

			</section>

			<section>

				<label class="PortfolioEdit__label">About Me</label>

				<b-form-group
					label="Profession:"
					label-for="Portfolio__profession">
					<b-form-input
						id="Portfolio__profession"
						v-model="portfolioData.aboutMe"/>
				</b-form-group>

			</section>

			<section>

				<label class="PortfolioEdit__label">Profile Image</label>

				<b-form-group
					label="Profile Image URL:"
					label-for="Portfolio__profileImageUrl">
					<b-form-input
						id="Portfolio__profileImageUrl"
						v-model="portfolioData.profileImageUrl"/>
				</b-form-group>

			</section>

			<section>

				<label class="PortfolioEdit__label">Contact</label>

				<b-form-group
					label="Contact email:"
					label-for="Portfolio__contactEmail">
					<b-form-input
						id="Portfolio__contactEmail"
						v-model="portfolioData.contact.email"/>
				</b-form-group>

				<b-form-group
					label="Contact telephone:"
					label-for="Portfolio__contactTelephone">
					<b-form-input
						id="Portfolio__contactTelephone"
						v-model="portfolioData.contact.telephone"/>
				</b-form-group>

			</section>

			<section>

				<label class="PortfolioEdit__label">External Profiles</label>

				<b-form-group
					label="GitHub URL:"
					label-for="Portfolio__Github">
					<b-form-input
						id="Portfolio__Github"
						v-model="portfolioData.externalProfiles.github"/>
				</b-form-group>

				<b-form-group
					label="LinkedIn URL:"
					label-for="Portfolio__LinkedIn">
					<b-form-input
						id="Portfolio__LinkedIn"
						v-model="portfolioData.externalProfiles.linkenIn"/>
				</b-form-group>

				<b-form-group
					label="Stack Overflow URL:"
					label-for="Portfolio__StackOverflow">
					<b-form-input
						id="Portfolio__StackOverflow"
						v-model="portfolioData.externalProfiles.stackOverflow"/>
				</b-form-group>

			</section>

			<section>

				<label class="PortfolioEdit__label">Education</label>

				<section class="PortfolioEdit__sublistItem"
					v-for="(item, i) in portfolioData.education"
					:key="i">

					<code>Item {{i+1}}</code>

					<b-form-group
						label="Institution:"
						label-for="Portfolio__educationInstitution">
						<b-form-input
							id="Portfolio__educationInstitution"
							v-model="portfolioData.education[i].institution"/>
					</b-form-group>

					<b-form-group
						label="Date:"
						label-for="Portfolio__educationDate">
						<b-form-input
							id="Portfolio__educationDate"
							v-model="portfolioData.education[i].date"/>
					</b-form-group>

					<section class="PortfolioEdit__subBlock">

						<label>Qualifications:</label>
						<b-form-input
							class="PortfolioEdit__sublistItem"
							v-for="(qualificationItem, j) in portfolioData.education[i].qualifications"
							:key="j"
							v-model="portfolioData.education[i].qualifications[j]"/>

						<b-btn
							size="sm"
							variant="outline-primary"
							@click="portfolioData.education[i].qualifications.push('')">Add Item</b-btn>

					</section>

				</section>

				<b-btn
					size="lg"
					variant="outline-primary"
					@click="portfolioData.education.push({ qualifications: [] })">Add Education</b-btn>

			</section>

			<section>

				<label class="PortfolioEdit__label">Experience</label>

			</section>

		</section>

	</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { cloneDeep } from 'lodash';
import portfolioSchema from '../../../../common/portfolio.schema.json';

export default {
	data() {
		return {
			page: {
				isLoading: false,
				isSubmitting: false
			},
			portfolioSchema,
			portfolioData: null
		};
	},
	computed: {
		...mapGetters({
			portfolio: 'portfolio/portfolio'
		})
	},
	methods: {
		...mapActions({
			fetchPortfolio: 'portfolio/fetchPortfolio',
			updatePortfolio: 'portfolio/updatePortfolio'
		}),
		async onSubmitClick() {
			await this.updatePortfolio(this.formData);
			this.$toasted.show('Portfolio Updated', {
				position: 'bottom-right',
				duration: '3000'
			});
		}
	},
	watch: {
		portfolio: {
			immediate: true,
			handler() {
				this.formData = this.portfolio;
			}
		}
	},
	async created() {
		this.page.isLoading = true;
		await this.fetchPortfolio();
		this.portfolioData = cloneDeep(this.portfolio);
		console.log('this.portfolioData: ', this.portfolioData);
		this.page.isLoading = false;
	}
};
</script>

<style lang="scss">

.PortfolioEdit {
	padding: 1rem;
	display: flex;
	flex-direction: column;

	&__label {
		text-align: left;
		width: 100%;
		font-weight: bold;
	}

	&__sublistItem {
		margin-bottom: 1rem;
	}

	&__subBlock {
		display: flex;
		flex-direction: column;
	}

}

</style>
