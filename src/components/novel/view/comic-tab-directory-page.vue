<template>
  <div>
    <div class="title">
      <div class="time">最后一章更新于2018-07-05</div>
      <div class="sort">正序</div>
    </div>

    <div v-for="(item,index) in chapterlist" :key="index">
      <cell-text :chapter="item" />
    </div>
  </div>
</template>

<script>

import CellText from "@/components/novel/view/cell-text";
export default {
  components: {
    CellText,

  },
  props: {
    chapterlist: Array
  }
};
</script>


<style lang="scss" scoped>
.title {
  padding: 10px;
  flex-direction: row;
  display: flex;
  .time {
    flex: 1;
    font-size: 10px;
  }
  .sort {
    font-size: 10px;
  }
}
</style>

