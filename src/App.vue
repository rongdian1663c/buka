<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import index from './components/index.vue'
import 'mint-ui/lib/style.css'
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);

export default {
  name: 'App',
  components: {
    index

  }
}
</script>

<style>
body {
  background-color: #ebebeb;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
