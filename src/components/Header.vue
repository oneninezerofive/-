<template>
  <div id="box">
    <div v-if="head === 1">
      <header>
        <div class="head_map">
          <div class="map_name">
            <i class="map_icon"></i>
            <span id="header_addr">定位中...</span>
          </div>
        </div>
        <van-search placeholder="乌苏  二厂汽水  洋河  搏格斯 " v-model="value" class="search" />
      </header>
      <van-tabs
        v-model="active"
        class="nav"
        background="transparent"
        title-inactive-color="#fff"
        title-active-color="#000"
        @click="activity"
      >
        <van-tab title="热门活动"></van-tab>
        <van-tab title="四元喝德啤"></van-tab>
        <van-tab title="潮品上市"></van-tab>
        <van-tab title="品类精选"></van-tab>
      </van-tabs>
      <van-swipe :autoplay="3000" indicator-color="white" class="shuffling">
        <van-swipe-item>
          <img src="../assets/lunbo1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/luobo2.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lunbo3.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lunbo4.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lunbo5.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div v-else>
      <van-sticky>
      <van-search placeholder="乌苏  二厂汽水  洋河  搏格斯 " v-model="value" class="sch" />
      <van-tabs
        v-model="active"
        title-inactive-color="#000"
        title-active-color="#000"
        @click="activity"
      >
        <van-tab title="热门活动"></van-tab>
        <van-tab title="四元喝德啤"></van-tab>
        <van-tab title="潮品上市"></van-tab>
        <van-tab title="品类精选"></van-tab>
      </van-tabs>
      </van-sticky>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      active: 0,
      head: 1
    };
  },
  methods: {
    activity(name, title) {
      if (name == 0) {
        this.$router.push({ name: "activity" });
      }
      if (name == 1) {
        this.$router.push({ name: "spleen" });
      }
      if (name == 2) {
        this.$router.push({ name: "product" });
      }
      if (name == 3) {
        this.$router.push({ name: "category" });
      }
    }
  },
  mounted() {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        this.head = 0;
      } else {
        this.head = 1;
      }
    };
  }
};
</script>


<style scoped>
#box {
  width: 100%;
  height: 280px;
  background-image: url(../assets/beijingtu.png);
  background-size: 100% 180%;
  /* background-position:  */
}

header {
  padding: 5px 12px 0;
}
.sch {
  margin-top: 10px;
   border-radius: 30px;
  font-size: 14px;
  clear: both;
  height: 32px;
  color: rgba(255, 255, 255, 1);
}
.head_map {
  margin-bottom: 13px;
  height: 25px;
}
.map_name {
  float: left;
  color: #fff;
  font-size: 17px;
  width: 55%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  padding-left: 18px;
}
.map_icon {
  background: url(../assets/map_bai.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 6px;
  display: inline-block;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  height: 18px;
}
.map_name span {
  font-weight: bold;
}
.search {
  border-radius: 30px;
  font-size: 14px;
  clear: both;
  height: 32px;
  opacity: 0.4;
  color: rgba(255, 255, 255, 0.8);
}
.shuffling {
  width: 351px;
  margin-left: 10px;
  height: 140px;
}
.shuffling img {
  width: 100%;
  height: 100%;
}
</style>

