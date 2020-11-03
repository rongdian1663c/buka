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
      <!--vip狀態-->
      <div class="status">
        <div class="status-top">
          vip状态:未开通
        </div>
        <mt-button type="primary" size="small" class="button">
          签到
        </mt-button>

        <!--分隔虚线-->
      <!--暂时       <cross-line/>     -->

      </div>

    </div>

  </div>
</template>

<script>
//暂时   import CrossLine from "@/components/widget/cross-line";


export default {
  comments:{
    //暂时   CrossLine
  },
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

<style lang="scss">
.mine {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .top {
    flex-direction: column;
    display: flex;

    .info {
      background-color: #06c1ae;
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: row;

      .avatar-wrapper {
        margin-top: 20px;
        margin-bottom: 10px;
        width: 70px;
        height: 70px;
        margin-left: 10px;

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }

      .name-wrapper {
        display: flex;
        flex-direction: column;
        height: 0px;
        margin-top: 35px;

        .name {
          font-size: 14px;
          color: #fff;
        }

        .desc {
          font-size: 10px;
          color: #fcfefe;
        }
      }
    }

    .operation {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      i {
        margin-top: 10px;
        margin-right: 15px;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }

  .important {
    width: 100%;
  }

  .mine-item {
    margin-top: 10px;
  }

  .status {
    background-color: #fff;
    border-radius: 10px;
    margin-left: 10px;
    margin: 10px;
    padding: 10px;

    .status-top {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;

      .button {
        margin-right: 10px;
        height: 20px;
        float: right;
        font-size: 10px;
        border-radius: 20px;
      }

      .status-title {
        margin-left: 10px;
        font-size: 10px;
        flex: 1;
      }
    }

    .status-bottom {
      margin-top: 10px;
      display: flex;
      flex-direction: row;

      .status-item {
        width: 33%;
        font-size: 10px;
        text-align: center;
      }
    }
  }
}
</style>