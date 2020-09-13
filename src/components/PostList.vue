<template>
  <div class="PostList">
    <!--    loading 加载-->
    <div class="loading" v-if="isLoading">
      <img src="https://media.tenor.com/images/20039a1a39b050b8518d4d0bdcd35ba6/tenor.gif" alt="">
    </div>
    <!--    列表区域-->
    <div>
      <ul>
        <li class="topBar">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>问答</span>
          <span>招聘</span>
        </li>
        <li v-for="post in posts" :key="post.id">
          <!--          头像-->
          <img :src="post.author.avatar_url" alt="">
          <!--          回复数量-->
          <span>
            <span class="reply_count">{{post.reply_count}}</span>/{{post.visit_count}}
          </span>
          <!--          帖子分类-->
          <span>{{post | tabFormatter}}</span>
          <!--          帖子标题-->
          <router-link :to="{
            name: 'post_context',
            params: {
              id: post.id
            }
          }">
            <span>{{post.title}}</span>
          </router-link>
          <!--          最后回复时间-->
          <span class="last_reply">{{post.last_reply_at | formatData}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PostList",
    data() {
      return {
        isLoading: true,
        posts: []
      }
    },
    methods: {
      // 获取数据
      getData() {
        this.$http.get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 2
        }).then(res => {
          this.isLoading = false
          this.posts = res.data.data
        })
      }
    },
    beforeMount() {
      this.isLoading = true
      this.getData()
    }
  }
</script>

<style scoped>
  .container {
  }

  img {
    width: 30px;
    height: 30px;
  }

</style>