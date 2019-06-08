<template>
	<b-modal
		:visible="visible"
		title="ContactModal"
		@hidden="$emit('hidden')">
		<p class="my-4">Send mail below!</p>
		<b-button
			variant="warning"
			size="lg"
			v-text="'CLICK ME'"/>
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
