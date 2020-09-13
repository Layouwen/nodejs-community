<template>
  <div class="home">
    <Header/>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from '@/components/Header.vue';

  export default Vue.extend({
    name: 'Home',
    components: {
      Header,
    },
  });
</script>

<style lang="scss" scoped>
  .main {
    width: 80%;
    margin: 0 auto;
  }
</style>
