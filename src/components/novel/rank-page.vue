<template>
  <div>
    <div class="bg">
      <header-bar text="发现"></header-bar>
      <div class="title-tab">
        <div class="rank">排行榜</div>
        <div class="period">
          <mt-button size="small" :type="btn1Type" class="button" v-on:click="tabClick('total')" v-if="active == 0">总
          </mt-button>
          <mt-button size="small" :type="btn2Type" class="button" v-on:click="tabClick('month')">月</mt-button>
          <mt-button size="small" :type="btn3Type" class="button" v-on:click="tabClick('week')">周</mt-button>
        </div>
      </div>

     <van-tabs v-model="active" type="card" swipeable :duration="5" class="tab">
         <van-tab :title="'圣殿榜'">
           <temple-page :type="2" ref="child1"/>
         </van-tab>
         <van-tab :title="'成长榜'">
           <temple-page :type="18" ref="child2" />
         </van-tab>
         <van-tab :title="'订阅榜'">
           <temple-page :type="21" ref="child3" />
         </van-tab>
         <van-tab :title="'新作榜'">
           <temple-page :type="19" ref="child4" />
         </van-tab>
       </van-tabs>

    </div>
  </div>
</template>

<script>
import HeaderBar from "@/components/widget/header-bar";
import TemplePage from "@/components/novel/temple-page";
import { Tab, Tabs } from "vant";

export default {
  name: "rank-page",
  components: {
    TemplePage,
    HeaderBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      btn1Type: "default", //default,danger,primary
      btn2Type: "default",
      btn3Type: "primary",
      selected: "1",
      active: 0
    };
  },
  methods: {
    tabClick(period) {
      if (period == "week") {
        this.btn3Type = "primary";
        this.btn2Type = "default";
        this.btn1Type = "default";
        this.$refs.child1.refreshData(period);
        this.$refs.child2.refreshData(period);
        this.$refs.child3.refreshData(period);
        this.$refs.child4.refreshData(period);
      } else if (period == "month") {
        this.btn2Type = "primary";
        this.btn1Type = "default";
        this.btn3Type = "default";
        this.$refs.child1.refreshData(period);
        this.$refs.child2.refreshData(period);
        this.$refs.child3.refreshData(period);
        this.$refs.child4.refreshData(period);
      } else {
        this.btn1Type = "primary";
        this.btn2Type = "default";
        this.btn3Type = "default";
        this.$refs.child1.refreshData(period);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
  .title-tab {
    margin-top: 35px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    .rank {
      vertical-align: middle;
      flex: 1;
      margin-left: 5px;
      font-size: 18px;
      font-weight: bold;
    }
    .period {
      display: flex;
      flex-direction: row;
    }
    .button {
      font-size: 10px;
      margin: 5px;
      border-radius: 10px;
      height: 20px;
    }
  }
}
</style>
