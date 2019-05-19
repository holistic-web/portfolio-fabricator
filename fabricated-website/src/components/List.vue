<template>
	<div class="List">
		<section class="List__inner">
			<h2 class="mb-3" v-text="config.title"/>

			<ul class="List__list">
				<li
					v-for="(item, i) in config.items"
					:key="i"
					class="List__item">

					<div class="List__item__row">
						<h4 class="List__item__title" v-text="item.title"/>
						<span class="List__item__tag" v-text="item.tag"/>
					</div>
					<ul class="List__subList">
						<li
							class="List__subList__item"
							v-for="(subItem, i) in item.items"
							:key="i"
							v-text="subItem"/>
					</ul>

				</li>
			</ul>

		</section>
	</div>
</template>

<script>
/**
 * A component to generate a list of items with nested lists.
 *
 * The config object should look like:
 * {
 *     title: 'My list',
 *     items: [
 *         {
 *             title: 'My list item',
 *             tag: 'My list item tag',
 *             items: [
 *                 'My list item list item'
 *             ]
 *         }
 *     ]
 * }
 */

export default {
	props: {
		config: {
			type: Object,
			required: true
		}
	}
};
</script>

<style lang="scss">
@import "../styles/index.scss";

.List {
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

		&__tag {
			font-size: 0.8rem;

			@media all and (min-width: $tablet) {
				font-size: 1rem;
			}
		}

	}

	&__subList {
		display: flex;
		color: $background-primary;
		padding: 0;
		flex-direction: column;

		@media all and (min-width: $tablet) {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
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
