<template>
	<b-container class="Education mb-5">
		<h2>Education</h2>

		<ul>
			<li
				v-for="(item, i) in context.education"
				:key="i"
				class="Education__item">

				<div class="Education__item__row">
					<h3 v-text="item.institution"/>
					<span v-text="item.date"/>
				</div>
				<ul>
					<li
						v-for="(qualification, i) in item.qualifications"
						:key="i"
						v-text="qualification"/>
				</ul>

			</li>
		</ul>

	</b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			context: 'context'
		})
	}
};
</script>

<style lang="scss">
@import "../../../styles/index.scss";

.Education {
	display: flex;
	flex-direction: column;
	justify-content: center;

	&__item {
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		text-align: left;

		&__row {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}
}
</style>
