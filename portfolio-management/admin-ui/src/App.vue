<template>
  <div id="app">

	  <sign-up />

  </div>
</template>

<script>

import SignUp from './components/SignUp.vue';

export default {
	components: {
		SignUp
	}
};

</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
