<template>
  <div class="header">
    <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
    <ul>
      <li><a href="javascript:">首页</a></li>
      <li><a href="javascript:">新手入门</a></li>
      <li><a href="javascript:">API</a></li>
      <li><a href="javascript:">关于</a></li>
      <li><a href="javascript:">登录</a></li>
      <li><a href="javascript:">注册</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background: #5a5555;

    > img {
      max-width: 120px;
      margin-left: 50px;
    }

    > ul {
      display: flex;
      > li {
        padding: 0 15px;
      }
    }
  }
</style>