<template>
  <div class="bg">
    <header-bar text="发现"></header-bar>
    <van-pull-refresh v-model="refresh" @refresh="onRefresh" class="refresh">
      <div v-for="(item,index) in newSubscribeList" v-bind:key="index">
        <div class="works-title-item" @click="pushCommon(item)">
          <div class="works-title">{{item.itemTitle}}</div>
          <div class="works-des">{{item.description}}
            <i class="iconfont icon-more" v-if="item.description!=''"></i>
          </div>
        </div>
        <div v-for="(subItem,index) in item.comics" v-bind:key="index">
          <common-item-count :data="subItem" @itemClick="push(subItem.comicId)"/>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import HeaderBar from "@/components/widget/header-bar";
import {PullRefresh} from "vant";
import CommonItemCount from "@/components/novel/view/common-item-count";

export default {
  name: "subscibe-page",
  components: {
    CommonItemCount,
    HeaderBar,
    [PullRefresh.name]: PullRefresh,
  },
  data() {
    return {
      refresh: false,
      newSubscribeList: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    pushCommon(item) {
      this.$router.push({
        path: "/common",
        query: { argValue: item.argValue, argName: item.argName }
      });
    },
    push(comicId) {
      this.$router.push({
        path: "/comics-detail",
        query: { data: comicId + "" }
      }); //comicId为int类型.直接传递为空
    },
    onRefresh() {
      this.getData();
    },
    getData() {
      this.get("v3/appV3_3/ios/phone/list/newSubscribeList").then(res => {
        this.refresh = false;
        this.newSubscribeList = res.returnData.newSubscribeList;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-color: white;
  .refresh{
    margin-top: 35px;
  }
  .works-title-item {
    padding: 10px;
    display: flex;
    flex-direction: row;
    .works-title {
      flex: 1;
      text-align: center;
    }
    .works-des {
      color: gray;
      font-size: 12px;
      float: right;
    }
  }
}
</style>
