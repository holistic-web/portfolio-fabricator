<template>
	<b-modal
		:visible="visible"
		title="ContactModal"
		@hidden="$emit('hidden')"
		ok-title="Send">
		<p class="my-4">Send me a message by filling out the form below!</p>
		<b-card bg-variant="light">
			<b-form-group
			label-cols-lg="3"
			label="Your Details"
			label-size="lg"
			label-class="font-weight-bold pt-0"
			class="mb-0">
				<b-form-group
					label-cols-sm="3"
					label="Name"
					label-align-sm="right"
					label-for="nested-name">
					<b-form-input id="nested-name"/>
				</b-form-group>

				<b-form-group
					label-cols-sm="3"
					label="Email"
					label-align-sm="right"
					label-for="nested-email">
					<b-form-input id="nested-email"/>
				</b-form-group>

				<b-form-group
					label-cols-sm="3"
					label="Message"
					label-align-sm="right"
					label-for="nested-message">
					<b-form-input id="nested-message" size="lg"/>
				</b-form-group>
			</b-form-group>
		</b-card>
	</b-modal>
</template>

<script>
export default {
	props: {
		visible: {
			type: Boolean,
			required: true
		}
	}
};
</script>
