import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Article from '@/components/Article.vue';
import PostList from '@/components/PostList.vue';
import UserInfo from '@/components/UserInfo.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      path: '/topic/:id',
      name: 'post_context',
      components: {
        main: Article
      }
    },
    {
      path: '/user/:name',
      name: 'user_info',
      components: {
        main: UserInfo
      }
    }
  ]
;

const router = new VueRouter({
  routes
});

export default router;
