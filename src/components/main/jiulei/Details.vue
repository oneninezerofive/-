<template>
  <div>
    <van-row style="margin-left:15px;margin-top:20px; height:50px">
      <van-col span="3"
      >
        <van-image width="20" height="20" :src="src1" @click="fanhui" />
      </van-col>
      <van-col span="15"></van-col>
      <van-col span="3">
        <van-image width="20" height="20" :src="src2" />
      </van-col>
      <van-col span="3">
        <van-image width="20" height="20" :src="src3" />
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24" style="text-align:center">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <van-image
              width="60%"
              height="220"
              :src="list[0].ItemImagePath"
            />
          </van-swipe-item>
          
        </van-swipe>
      </van-col>
    </van-row>
    <van-row style="padding-left: 3%;">
      <van-col span="5" style="color: red;font-size: 1.2em;">￥{{list[0].NowPrice}}.00</van-col>
      <van-col
        span="5"
        style="color: #969696;padding-left: 3%;font-size: 13px;margin-left:10px;margin-top:6px"
      >
        <del>￥{{list[0].OldPrice}}.00</del>
      </van-col>
      <van-col span="14"></van-col>
    </van-row>
    <van-row style="padding-left: 5%;height: 40px;line-height: 40px;">
      <van-col span="24" style="font-weight: 600;font-size: 1.1em;">{{list[0].VariantName}}</van-col>
    </van-row>
    <van-row style="text-align:center;height: 60px;line-height: 60px;">
      <van-col span="8">
        <van-cell
          title="20分钟送达"
          title-style="font-size: 13px;color: #333;margin-left:-8px"
          :icon="src4"
        />
      </van-col>
      <van-col span="8">
        <van-cell
          title="正品保障"
          title-style="font-size: 13px;color: #333;margin-left:-20pxpx"
          :icon="src5"
        />
      </van-col>
      <van-col span="8">
        <van-cell
          title="百家自营门店"
          title-style="font-size: 13px;color: #333;margin-left:-8px"
          :icon="src6"
        />
      </van-col>
    </van-row>
    <div class="warm" style="display: flex;">
      <div class="warm_icon">
        <img src="../../../assets/light.png" style="width: 22px;" />
      </div>
      <ul style="margin: 0px;">
        <span class="Related_Tags">温馨提示</span>
        <li class="warm_content" style="border-bottom: 0px solid rgb(244, 244, 244);">
          温馨提示：
          <br />非酒水包装等问题，酒水一旦销售将不予退换。
          <br />避免光照，通风环境存放。
          <br />由于部分商品包装更换较为频繁，请您以收到的商品实物为准，图片仅供参考。
          <br />
        </li>
      </ul>
    </div>
    <van-goods-action style="height:60px">
      <van-goods-action-icon icon="like-o" text="喜欢"  style="width:20%;" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" style="width:20%" />
      <van-goods-action-button
        type="primary"
        text="加入购物车"
        @click="onClickButton"
        style="width:60%"
      />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src1: require("../../../assets/fanhui1.png"),
      src2: require("../../../assets/kefu1.png"),
      src3: require("../../../assets/share1.png"),
      src4: require("../../../assets/icon1.png"),
      src5: require("../../../assets/icon2.png"),
      src6: require("../../../assets/icon3.png"),
      list:[{
        ItemImagePath:""
      }]
    };
  },
  methods: {
    onClickIcon() {
      
    },
    async onClickButton() {
      let _this = this
      let listData = await this.$axios
            .get(
              "http://localhost:3000/joincar?ItemImagePath=" +
                this.list[0].ItemImagePath +
                "&VariantName=" +
                this.list[0].VariantName +
                "&NowPrice=" +
                this.list[0].NowPrice
            )
            .then(async function(data) {
              if (data.data == "") {
                
              } else {
                _this.$toast("添加成功")
              }
            });
    },
    fanhui(){
       this.$router.push({ name: "classification" });
    }


  },
  async created(){
    let ProductVariantID =  this.$route.params.ProductVariantID;
    let data = await this.$axios(
        "http://localhost:3000/details?ProductVariantID="+ProductVariantID
      );
    this.list = data.data;
  }

};
</script>

<style scoped>
.warm {
  padding-bottom: 15px;
  border-bottom: 5px solid #eee;
  padding-top: 10px;
}
.warm_icon {
  width: 60px;
  text-align: right;
  padding-top: 5px;
}
img {
  width: 22px;
  height: 22px;
}
.Related_Tags {
  display: block;
  height: 30px;
  line-height: 30px;
  padding-left: 3%;
  font-weight: 600;
  font-size: 15px;
}
.warm_content {
  margin-top: 3px;
  padding-left: 3%;
  padding-bottom: 4px;
  font-size: 13px;
  color: #333;
}
</style>

