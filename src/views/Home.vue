<template>
  <div class="home">
    <Header/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from '@/components/Header.vue'; // @ is an alias to /src

  export default Vue.extend({
    name: 'Home',
    components: {
      Header,
    },
  });
</script>
