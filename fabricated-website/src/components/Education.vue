<template>
<div class="Education">
	<section class="Education__inner">
		<h2 class="mb-3">Education</h2>

		<ul class="Education__list">
			<li
				v-for="(item, i) in context.education"
				:key="i"
				class="Education__item">

				<div class="Education__item__row">
					<h4 class="Education__item__title" v-text="item.institution"/>
					<span class="Education__item__date" v-text="item.date"/>
				</div>
				<ul class="Education__qualification__list">
					<li
						class="Education__qualification__item"
						v-for="(qualification, i) in item.qualifications"
						:key="i"
						v-text="qualification"/>
				</ul>

			</li>
		</ul>

	</section>
</div>
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
@import "../styles/index.scss";

.Education {
	background-color: $background-secondary;
	text-align: left;
	padding: 2rem 0;

	&__inner {
		@extend .inner;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	&__list {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	&__item {
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		text-align: left;
		margin-bottom: 2rem;

		&__row {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-bottom: 0.5rem;
			margin-bottom: 0.5rem;
			border-bottom: 1px dashed $background-primary;

			@media all and (min-width: $tablet) {
				flex-direction: row;
			}

		}

		&__title {
			margin: 0;
		}

		&__date {
			font-size: 0.8rem;

			@media all and (min-width: $tablet) {
				font-size: 1rem;
			}
		}

	}

	&__qualification {

		&__list {
			display: flex;
			color: $background-primary;
			padding: 0;
			flex-direction: column;

			@media all and (min-width: $tablet) {
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
			}
		}

		&__item {
			color: $background-primary;

			@media all and (min-width: $tablet) {
				margin: 0 2rem;
			}
		}


	}


}
</style>
