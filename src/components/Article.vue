<template>
  <div class="article">
    <!--    loading 加载-->
    <div class="loading" v-if="isLoading">
      <img src="https://media.tenor.com/images/20039a1a39b050b8518d4d0bdcd35ba6/tenor.gif" alt="">
    </div>
    <div v-else>
      <div class="topic_header">
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li>·发布于：{{post.create_at | formatData}}</li>
          <li>·作者 {{post.author.loginname}}</li>
          <li>·{{post.visit_count}}次浏览</li>
          <li>·来自{{post | tabFormatter}}</li>
        </ul>
      </div>
      <div v-html="post.content" class="topic_content"></div>
    </div>
    <div>
      <div class="topbar">回复</div>
      <div v-for="(reply, index) in post.replies" :key="reply.id">
        <router-link>
          <img :src="reply.author.avatar_url" alt="">
        </router-link>
        <router-link>
          <span>{{reply.author.loginname}}</span>
        </router-link>
        <span>{{index+1}}楼</span>
        <span v-if="reply.ups.length>0">
          {{reply.ups.length}}
        </span>
        <span v-else></span>
        <p v-html="reply.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data() {
      return {
        isLoading: false,
        post: []
      }
    },
    methods: {
      getArticleData() {
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`).then(res => {
          if (res.data.success === true) {
            this.isLoading = false
            this.post = res.data.data
          }
        }).catch(e => {
          console.log(e)
        })
      }
    },
    beforeMount() {
      this.isLoading = true
      this.getArticleData()
      console.log(this.post)
    }
  }
</script>

<style lang="scss">
  @import url(../assets/markdown-github.css);

</style>