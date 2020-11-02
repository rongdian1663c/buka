<template>
  <div class="mine">
    <!--顶部头像和设置-->
    <div class="top">
      <div class="info">
        <!--头像-->
        <div class="head portrait">
          <img src="../../assets/img/lazyload.jpeg">
        </div>

        <div class="name-wrapper" @click="login">
          <!--登录按钮-->
          <span class="name">
            点击头像登录
          </span>
          <!--登录下的概要-->
          <span class="synopsis">
            登录后可以使用更多精彩功能哟
          </span>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "mine-page",
  methods: {
    login() {
      this.$router.push({
        path: "/login"
      });
    }
  }
}
</script>

<style scoped>

</style>