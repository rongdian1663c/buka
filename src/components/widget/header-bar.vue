<!-- 顶部栏 组件 -->

<template>
  <div>
    <div class="header-bar" @click="back">
      <i class="icon-arrow_lift"></i>
      <div class="title">{{text}}</div>
    </div>
    <cross-line/>
  </div>
</template>

<script>
import CrossLine from "@/components/widget/cross-line";
export default {
  name:"header-bar",
  components: {
    CrossLine
  },
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  watch: {},
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
  filters: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.header-bar {
  top: 0;
  width: 100%;
  position: fixed;
  height: 40px;
  background: #fff;
  z-index: 999;
  i {
    float: left;
    margin: 12px 0 0 10px;
  }
  .title {
    margin: 9px 0 0 5px;
    float: left;
    font-size: 17px;
    color: #333;
  }
}
</style>
