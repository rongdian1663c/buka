<template>
 <div>
   <mt-navbar v-model="selected">
     <mt-tab-item id="1">选项一</mt-tab-item>
     <mt-tab-item id="2">选项二</mt-tab-item>
     <mt-tab-item id="3">选项三</mt-tab-item>
   </mt-navbar>
   <!-- tab-container -->
     <mt-tab-container v-model="selected">
       <mt-tab-container-item id="1">

       </mt-tab-container-item>
       <mt-tab-container-item id="2">

       </mt-tab-container-item>
       <mt-tab-container-item id="3">

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
      selected: 1
    }
  }
}
</script>

<style scoped>

</style>