<template>
  <div class="index">
    <!--页面,page-->
    <div class="page-wrap">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="今日">
          <news-page/>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <novel-page/>
        </mt-tab-container-item>
        <mt-tab-container-item id="书架">
          <news-page/>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <mine-page/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <!--底部tab-->
    <div>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="今日">
          <img slot="icon" src="../assets/img/ic_main_favorite_selected.png"> 今日
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="../assets/img/ic_main_category_selected.png"> 发现
        </mt-tab-item>
        <mt-tab-item id="书架">
          <img slot="icon" src="../assets/img/ic_main_recommend_selected.png"> 书架
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="../assets/img/ic_main_schedule_selected.png"> 我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>



<script>
import NewsPage from "@/components/news/news-page";
import MinePage from "@/components/mine/mine-page";
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

import Vue from 'vue';
import NovelPage from "@/components/novel/novel-page";
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);


export default {
  //组件
  components: {
    NovelPage,
    NewsPage,
    MinePage
  },
  name: "index",
  data() {/*声明变量*/
    return {
      selected: "发现"

    };
  }
}
</script>

<style scoped>

</style>