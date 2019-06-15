<template>
	<b-modal
		body-class="ContactModal"
		:visible="visible"
		title="ContactModal"
		ok-title="Send"
		:ok-disabled="isSubmitDisabled"
		@hidden="$emit('hidden')"
		@ok="onSubmit">

		<p v-text="'Send me a message by filling out the form below!'"/>

		<h3 v-text="'Your Details'"/>

		<b-form-group
			label="Name"
			label-align-sm="right"
			label-for="ContactModal__name">
			<b-form-input
				id="ContactModal__name"
				v-model="name"/>
		</b-form-group>

		<b-form-group
			label="Email"
			label-align-sm="right"
			label-for="ContactModal__email">
			<b-form-input
				id="ContactModal__email"
				v-model="senderEmail"/>
		</b-form-group>

		<b-form-group
			label="Message"
			label-align-sm="right"
			label-for="ContactModal__message">
			<b-form-input
				id="ContactModal__message"
				size="lg"
				v-model="message"/>
		</b-form-group>

	</b-modal>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	props: {
		visible: {
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			page: {
				submitting: false
			},
			name: null,
			senderEmail: null,
			message: null
		};
	},
	computed: {
		isSubmitDisabled() {
			return (
				this.name === null
				|| this.senderEmail === null
				|| this.message === null
				|| this.page.submitting
			);
		}
	},
	methods: {
		...mapActions({
			sendEmail: 'email/sendEmail'
		}),
		async onSubmit(e) {
			e.preventDefault();
			this.page.submitting = true;
			try {
				await this.sendEmail({
					name: this.name,
					senderEmail: this.senderEmail,
					message: this.message
				});
				this.$toasted.show('Email sent', {
					position: 'top-right',
					duration: '3000'
				});
				this.$emit('hidden');
			} catch (err) {
				this.$toasted.show(err, {
					position: 'top-right',
					duration: '3000'
				});
			}
			this.page.submitting = false;
		}
	}
};
</script>

<style lang="scss">
.ContactModal {
	display: flex;
	flex-direction: column;
	text-align: left;
}
</style>
