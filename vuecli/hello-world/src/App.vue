// begin component template
<template>
  <div id="app" style="border: solid;">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Vidal Vue.js App"/>
  </div>
</template>
// end of component tempĺate

// begin JS
<script>
// use any name you want for component importing (local register)
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>
// ending JS

// begin CSS
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
// ending CSS
