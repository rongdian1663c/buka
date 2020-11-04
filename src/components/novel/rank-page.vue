<template>
<div>

</div>
</template>

<script>
export default {
  name: "rank-page",
  components: {

  },
  data() {
    return {
      btn1Type: "default", //default,danger,primary
      btn2Type: "default",
      btn3Type: "primary",
      selected: "1",
      active : 0
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

<style scoped>

</style>