<template>
  <div class="home">
    <Header/>
    <div class="main">
      <router-view name="slidebar"></router-view>
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
  .home {
    height: 100vh;
    width: 100vw;
    background-color: #e1e1e1;
  }

  .main {
    width: 80%;
    margin: 0 auto;
  }
</style>
