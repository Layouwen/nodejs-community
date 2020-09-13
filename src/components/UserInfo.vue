<template>
  <div class="PostList">
    <!--    loading 加载-->
    <div class="loading" v-if="isLoading">
      <img src="https://media.tenor.com/images/20039a1a39b050b8518d4d0bdcd35ba6/tenor.gif" alt="">
    </div>
    <div class="userInfomation">
      <section>
        <img :src="userInfo.avatar_url" alt="">
        <span>{{userInfo.loginname}}</span>
        <p>{{userInfo.score}}积分</p>
        <p>注册时间：{{userInfo.create_at | formatData}}</p>
      </section>
      <div class="replies">
        <p>回复的主题</p>
        <ul>
          <li v-for="item in userInfo.recent_replies" :key="item.id">
            <router-link :to="{
              name: 'post_context',
              params: {
                id: item.id
              }
            }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="topics">
        <p>创建的主题</p>
        <ul>
          <li v-for="item in userInfo.recent_topics" :key="item.id">
            <router-link :to="{
              name: 'post_context',
              params: {
                id: item.id
              }
            }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        isLoading: false,
        userInfo: []
      }
    },
    methods: {
      getData() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`).then(res => {
          this.isLoading = false
          this.userInfo = res.data.data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    beforeMount() {
      this.getData()
    }
  }
</script>

<style scoped>
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }

  .userInfomation section {
    padding: 12px;
  }

  .userInfomation img {
    width: 30px;
  }

  .userInfomation li {
    list-style: none;
  }

  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }

  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }

  .userInfomation > div > ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }

  .userInfomation > div > ul > li > a {
    color: #094E99;
    text-decoration: none;
  }

</style>
