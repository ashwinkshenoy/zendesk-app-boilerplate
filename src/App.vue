<template>
  <div id="app">
    Hello from {{ someData }}
    <br />
    <span>You are awesome! ❤️</span>
    <br />
    <br />
    <hello-world></hello-world>
  </div>
</template>

<script>
  import ZDClient from '@/services/ZDClient.js';
  import HelloWorld from '@/components/HelloWorld';

  export default {
    name: 'App',

    components: {
      HelloWorld
    },

    data() {
      return {
        someData: 'ZenDesk.'
      };
    },

    mounted() {
      ZDClient.resizeFrame(500);
    }
  };
</script>

<style lang="scss">
  #app {
    padding: 60px 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    span {
      font-weight: 600;
    }
  }
</style>
