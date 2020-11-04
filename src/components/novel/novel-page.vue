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

    <div v-for="(item,i) in comicLists" :key="i">

      <!--排行,vip,订阅等-->
      <div v-if="item.comicType === 11">
        <div class="tag-item">
          <div v-for="(tagItem,index) in item.comics" :key="index">
            <img :src="tagItem.cover" class="tag-img" @click="tabClick(index)">
          </div>
        </div>
      </div>
      <!--超人气作品-->
      <div v-else-if="item.itemTitle == '超人气作品'" class="popular-works">
        <div class="works-title-item" @click="more(item)">
          <div class="works-title">{{item.itemTitle}}</div>
          <div class="works-des">{{item.description}}
            <i class="iconfont icon-more"></i>
          </div>
        </div>
        <popular-works-item v-for="subItem in item.comics" :key="subItem.cover" :data="subItem" @itemClick="push(subItem.comicId)" />
      </div>
      <!--新作推送-->
      <div v-else class="popular-works">
        <div class="works-title-item" @click="more(item)">
          <div class="works-title">{{item.itemTitle}}</div>
          <div class="works-des">{{item.description}}
            <i class="iconfont icon-more"></i>
          </div>
        </div>
        <div v-if="item.itemTitle == '活动'">
          <common-item :data="item.comics[0]" @itemClick="push(subItem.comicId)" />
        </div>
        <div v-else>
          <div v-for="(subItem,index) in item.comics" v-bind:key="index">
            <common-item v-if="subItem.cover.includes('ubig') && index == 0" :data="subItem" @itemClick="push(subItem.comicId)" />
            <common-item-count v-else :data="subItem " @itemClick="push(subItem.comicId)" />

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import PopularWorksItem from "@/components/novel/view/popular-works-item";
import CommonItem from "@/components/novel/view/common-item";
import CommonItemCount from "@/components/novel/view/common-item-count";
export default {
  name: "novel-page",
  components: {
    CommonItemCount,
    CommonItem,
    PopularWorksItem
  },
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
      this.get("/v3/appV3_3/ios/phone/comic/getDetectList").then(res => {
        this.galleryItems = res.returnData.galleryItems;
        this.comicLists = res.returnData.comicLists;
      });
    },


    searchClick() {
      this.$router.push({path: "/search-page"});
    }
  }
};
</script>

<style lang="scss" scoped>
.swipe-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
}
.banner-img {
  width: 100%;
}
.tag-item {
  display: flex;
  flex-direction: row;
}
.header {
  position: absolute;
  padding: 10px;
  width: 100%;
  z-index: 2;
  .search-img {
    float: right;
    margin-right: 20px;
    height: 30px;
    width: 30px;
  }
}
.tag-img {
  height: 100%;
  width: 100%;
}
.popular-works {
  flex: 1;
  overflow: hidden;
  // background-color: white;
}
.works-title-item {
  margin-top: 10px;
  padding: 10px;
  display: flex;
  background-color: white;
  flex-direction: row;
  .works-title {
    flex: 1;
    text-align: center;
  }
  .works-des {
    color: gray;
    font-size: 12px;
    float: right;
  }
}
.novel-page {
  margin-bottom: 20px;
}
</style>