<template>
  <div class="home">
    <Header/>
    <PostList/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from '@/components/Header.vue';
  import PostList from '@/components/PostList.vue'; // @ is an alias to /src

  export default Vue.extend({
    name: 'Home',
    components: {
      PostList,
      Header,
    },
  });
</script>
