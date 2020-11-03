<template>
 <div>
   <mt-navbar v-model="selected">
     <mt-tab-item id="1">收藏</mt-tab-item>
     <mt-tab-item id="2">书单</mt-tab-item>
     <mt-tab-item id="3">历史</mt-tab-item>
     <mt-tab-item id="4">下载</mt-tab-item>
   </mt-navbar>
   <!--<div>
     <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
   </div>-->

   <!-- tabcontainer -->
   <mt-tab-container v-model="selected">
     <mt-tab-container-item id="1">
<!--       <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>-->
       收藏
     </mt-tab-container-item>
     <mt-tab-container-item id="2">
      书单
     </mt-tab-container-item>
     <mt-tab-container-item id="3">
       历史
     </mt-tab-container-item>
     <mt-tab-container-item id="4">
       下载
     </mt-tab-container-item>
   </mt-tab-container>
 </div>
</template>

<script>

import { Navbar, TabItem } from 'mint-ui';
import Vue from 'vue';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

export default {
name: "bookrack",
  data() {/*声明变量*/
    return {
      selected:  "1"
    }
  }
}
</script>

<style scoped>

</style>