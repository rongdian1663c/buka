<template>
  <div class="discovery-page">
    <!--轮播图-->
    <div class="swipe-wrapper">

      <div class="header">
        <img slot="icon" src="../../assets/img/search.png" class="search-img" @click="searchClick"/>
      </div>

      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(image, index) in galleryItems" :key="index">
          <img :src="image.cover" class="banner-img" @click="click(image)" v-if="image.linkType == 3"/>
          <a :href="image.ext[0].val" v-else>
            <img :src="image.cover" class="banner-img">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div v-for="(item, i) in comicLists" :key="i">
      {{ item.name }}
    </div>

    <!--    <div v-for="(item,i) in comicLists">-->
    <!--      &lt;!&ndash;排行,vip,订阅等&ndash;&gt;-->
    <!--     &lt;!&ndash; <div v-if="item.comicType == 11">-->
    <!--        <div class="tag-item">-->
    <!--          <div v-for="(tagItem,index) in item.comics">-->
    <!--            <img :src="tagItem.cover" class="tag-img" @click="tabClick(index)">-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>&ndash;&gt;-->
    <!--    </div>-->

  </div>
</template>

<script>
export default {
  name: "novel-page",
  components: {},
  created() {
    this.getData()
  },
  data() {
    return {
      galleryItems: [],
      comicLists: []
    };
  },
  methods: {
    getData() {
      this.get("/v3/appV3_3/ios/phone/comic/getDetectList")
    },


    searchClick() {
      this.$router.push({path: "/search-page"});
    }
  }
};
</script>

<style scoped>

</style>