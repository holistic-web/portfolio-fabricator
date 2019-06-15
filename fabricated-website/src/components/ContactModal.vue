<template>
	<b-modal
		body-class="ContactModal"
		:visible="visible"
		title="ContactModal"
		ok-title="Send"
		@hidden="$emit('hidden')">

		<p v-text="'Send me a message by filling out the form below!'"/>

		<h3 v-text="'Your Details'"/>

		<b-form-group
			label="Name"
			label-align-sm="right"
			label-for="ContactModal__name">
			<b-form-input id="ContactModal__name"/>
		</b-form-group>

		<b-form-group
			label="Email"
			label-align-sm="right"
			label-for="ContactModal__email">
			<b-form-input id="ContactModal__email"/>
		</b-form-group>

		<b-form-group
			label="Message"
			label-align-sm="right"
			label-for="ContactModal__message">
			<b-form-input id="ContactModal__message" size="lg"/>
		</b-form-group>

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

<style lang="scss">
.ContactModal {
	display: flex;
	flex-direction: column;
	text-align: left;
}
</style>
