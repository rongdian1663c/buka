<template>
  <div class="bg">
    <header-bar text="发现"></header-bar>
    <van-pull-refresh v-model="refresh" @refresh="onRefresh" class="refresh">
      55555
    </van-pull-refresh>
  </div>
</template>

<script>
import HeaderBar from "@/components/widget/header-bar";
import {PullRefresh} from "vant";

export default {
  name: "subscibe-page",
  components: {
    HeaderBar,
    [PullRefresh.name]: PullRefresh,
  },
  methods: {
    onRefresh() {
      this.getData();
    },
    getData(){

    }
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


}
</script>

<style scoped>

</style>