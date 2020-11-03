<!-- 横线分隔条 组件 -->
<template>
    <div class="cross-line"></div>
</template>

<script>
import CrossLine from "@/components/widget/cross-line";

export default {
  name:"cross-line",
  components: {
    CrossLine
  },
  data() {
    return {};
  },
  //vue的生命週期
  props: {},
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>
.cross-line {
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
  // border-top: 1px solid rgba(7, 17, 27, 0.1);
  // border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
</style>
