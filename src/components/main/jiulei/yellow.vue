<template>
  <div id="box">
    <div class="p_item" v-for="(item,index) in tableData" :key="index" :title="item.title"  @click="jump(item.ProductVariantID)">
      <a href="####">
        <div class="p_item_l">
          <img
            :src="item.ItemImagePath"
          />
        </div>
        <div class="p_item_r">
          <div class="p_item_tit">{{item.VariantName}}</div>
          <div class="p_tips">
            <span class="p_tip tip_coin">组合购</span>
          </div>
          <div class="p_bom">
            <div class="p_money">
              <span>¥</span>{{item.NowPrice}}.
              <span class="price_last">00</span>
            </div>
            <div class="p_add_min">
              <span class="p_add p_coin2" yuyuego="1"></span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    async getNews() {
      let data = await this.$axios(
        "https://www.easy-mock.com/mock/5d4a92492d84624717915678/hero/huangjiu"
      );
      // console.log(data);
      this.tableData = data.data.data;
      // console.log(this.tableData);
    },
    jump(val) {
      this.$router.push({
        name: "Details",
        params: {
          ProductVariantID: val
        }
      });
    }
  },
  created() {
    this.getNews();
  }
};
</script>

<style scoped>
#box{
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
}
.p_item {
    background-color: #fff;
    border-radius: 3px;
    position: relative;
    padding-bottom: 15px;
    -webkit-flex: 1;
    flex: 1;
    flex-basis: 48%;
    max-width: 49%;
    margin-bottom: 2px;
    overflow: hidden;
    height: 250px;
}
.p_item:nth-child(odd) {
    margin-right: 2px;
}
.p_item a {
    display: block;
    text-decoration: none;
}
.p_item_l {
    width: 185px;
    height: 148px;
    padding: 11px 16%;
    margin: 0px auto;
}
.p_item_l img {
  width: 126px;
  height: 126px;
    display: block;
}
.p_item_r {
    padding: 0 15px;
}
 .p_item_tit {
    height: 38px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
}
.p_item_tit {
    font-size: 14px;
}
.p_tips {
    display: table;
    width: 100%;
    margin-top: 5px;
    min-height: 14px;
}
.p_tip, .prolist_item2 .xianshiqiang {
    float: left;
}
.p_tip {
    color: #ff4800;
    border: 1px solid #ff4800;
    padding: 1px 2px;
}
.tip_coin {
    font-size: 11px;
    border-radius: 3px;
    text-align: center;
    margin-right: 5px;
    line-height: 1;
    display: inline-block;
}
.p_bom {
    display: table;
    width: 100%;
    margin-top: 5px;
}
.p_money {
    float: left;
    font-size: 18px;
    color: #ff4800;
    font-weight: bold;
}
.p_money span {
    font-size: 12px;
    margin-right: 3px;
}
.p_money span.price_last {
    font-size: 14px;
}
.p_add_min {
    float: right;
    margin-top: 1px;
}
.p_add_min span {
    float: left;
}
.p_add {
    background: url(../../../assets/pro_add.png) no-repeat;
    background-size: 100% 100%;
}
.p_coin2 {
    width: 22px;
    height: 22px;
    display: inline-block;
}
</style>

