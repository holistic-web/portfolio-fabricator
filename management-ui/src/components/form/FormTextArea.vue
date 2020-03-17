<template>
	<b-form-textarea :value="value"
    @input="onInput($event.target.value)" />
</template>

<script>
import { FormMixin } from 'formvuelatte';

export default {
	mixins: { FormMixin },
	props: {
		value: {
			type: String,
			required: true
		}
	},
	methods: {
		onInput(data) {
			this.$emit('input', data);
		}
	}
};
</script>
