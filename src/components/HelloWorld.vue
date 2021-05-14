<template>
  <div class="hello">
    Requester Email:
    <br />
    {{ email }}
  </div>
</template>

<script>
  import ZDClient from '@/services/ZDClient.js';

  export default {
    name: 'HelloWorld',

    data() {
      return {
        email: ''
      };
    },

    created() {
      this.init();
    },

    methods: {
      async init() {
        let emailKey = 'ticket.requester.email';
        this.email = await ZDClient.get(emailKey);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h3 {
    margin: 40px 0;
  }
</style>
