<template>
  <div>
    <header>
      <div class="pb_head">
        <div class="pd_map">
          <i class="pro_coin address_coin"></i>
          <span id="header_addr">定位中...</span>
        </div>
        <div class="search_pro">
          <a href="##">
            <i class="pro_coin search_coin"></i>搜索商品或品牌
          </a>
        </div>
      </div>
    </header>
    <van-sticky>
    <van-tabs sticky @click="nav">
      <van-tab v-for="(item,index) in species" :key="index" :title="item.title" ></van-tab>
    </van-tabs>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
    </van-sticky>
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
import Footer from '../Footer'
export default {
    components:{
    Footer
  },
  data() {
    return {
      species: [
        {
          title: "白酒"
        },
        {
          title: "葡萄酒"
        },
        {
          title: "黄酒"
        },
        {
          title: "啤酒"
        },
        {
          title: "洋酒"
        },
        {
          title: "饮料"
        },
        {
          title: "酒具"
        },
        {
          title: "茶叶"
        },
        {
          title: "生鲜"
        }
      ],
          value1: 'a',
      value2: 'a',
        value3: 'a',
      value4: 'a',
      option1: [
        { text: '综合', value: 'a' },
        { text: '综合排序', value: 1 },
        { text: '销量优先', value: 2 }
      ],
      option2: [
        { text: '价格', value: 'a' },
      ],option3: [
        { text: '推荐', value: 'a' },
      ],
      option4: [
        { text: '筛选', value: 'a' },
      ]
      
    }

  },
  methods:{
    nav(name){
      if(name == 0){
        this.$router.push({ name:'liquor'});
      }
      if(name == 1){
        this.$router.push({ name:'wine'});
      }
       if(name == 2){
        this.$router.push({ name:'Yellow'});
      }
       if(name == 3){
        this.$router.push({ name:'beer'});
      }
      if(name == 4){
        this.$router.push({ name:'Foreign'});
      }
      if(name == 5){
        this.$router.push({ name:'drinks'});
      }
      if(name == 6){
        this.$router.push({ name:'glass'});
      }
      if(name == 7){
        this.$router.push({ name:'tea'});
      }
      if(name == 8){
        this.$router.push({ name:'fresh'});
      }
    }
  }
};
</script>


<style scoped>
.pb_head {
  padding: 0 15px;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
}
.pd_map {
  float: left;
  color: #333;
  font-size: 17px;
  width: 55%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  padding-left: 18px;
}
.address_coin {
  background: url(../../assets/map_hei.png) no-repeat;
  width: 15px;
  height: 18px;
  background-size: 100% 100%;
  margin-right: 6px;
  display: inline-block;
  position: absolute;
  top: 13px;
  left: 0;
}
.pd_map span {
  font-weight: bold;
}
.search_pro {
  float: right;
  height: 32px;
  line-height: 32px;
  background-color: #f2f2f2;
  font-size: 14px;
  color: #888;
  border-radius: 30px;
  margin-top: -37px;
  width: 44%;
}
.search_pro a {
  display: block;
  color: #888;
  padding-left: 14px;
}
.search_coin {
  background: url(../../assets/sousuo.png) no-repeat;
  width: 14px;
  height: 14px;
  background-size: 100% 100%;
  margin-right: 10px;
  vertical-align: middle;
  margin-top: -3px;
}
</style>
