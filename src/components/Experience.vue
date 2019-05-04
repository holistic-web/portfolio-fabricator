<template>
	<b-container class="Experience">
		<h2>Experience</h2>

		<ul>
			<li
				v-for="(item, i) in context.experience"
				:key="i"
				class="Experience__item">

				<div class="Experience__item__row">
					<h3 v-text="item.company"/>
					<span v-text="item.date"/>
				</div>
				<p v-text="item.description"/>
				<section>
					<h4>Projects</h4>
					<ul>
						<li
							v-for="(project, i) in item.projects"
							:key="i"
							v-text="project"/>
					</ul>
				</section>
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
@import "../styles/index.scss";

.Experience {
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
