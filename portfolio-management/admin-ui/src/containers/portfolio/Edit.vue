<template>
	<section class="PortfolioEdit">
		<h1>Edit</h1>

  		<schema-form :schema="schema" v-model="formData" />
	</section>
</template>

<script>
import Vue from 'vue';
import Buefy from 'buefy';
import {SchemaForm} from 'vue-json-schema-form';
import jsonSchema from '../../../../portfolio.schema.json';

import 'buefy/dist/buefy.css';

Vue.use(Buefy);

export default {
  name: "SchemaFormDemo",
  components: {
    SchemaForm
  },
  data() {
    return {
      schema: jsonSchema,
      formData: {}
    };
  }
}
</script>

<style lang="scss">
.PortfolioEdit {
	padding: 1rem;
}
</style>
