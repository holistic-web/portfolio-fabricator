<template>
	<div class="EmailModal">
		<b-button
				v-b-modal.modal-1
				class="Header__contactButton"
				variant="outline-primary"
				size="lg"
				v-text="'Get in touch!'"
				/>

			<b-modal id="modal-1" title="EmailModal">
				<p class="my-4">Send mail below!</p>
				<b-button
					variant="warning"
					size="lg"
					v-text="'CLICK ME'"
						/>
			</b-modal>
	</div>
</template>


<style lang="scss">
@import "../styles/index.scss";

.EmailModal {


}

</style>
