<template>
  <div>
    <van-row
      style="margin-top:10px;height:90px;line-height:90px; "
      v-for="(item,index) in carData"
      :key="index"
      :title="item.title"
    >
      <van-col span="3" style="margin-top:40px;padding-left:10px;">
        <van-checkbox v-model="item.check" @click="radio(item.check,index)"></van-checkbox>
      </van-col>
      <van-col span="6" style="border-bottom:1px solid #999;height:120px;">
        <van-image
          width="84px"
          height="84px"
          style="border:1px solid #ccc;margin:5px"
          :src="item.ItemImagePath"
        />
      </van-col>
      <van-col span="14" style="border-bottom:1px solid #999;">
        <van-row
          style="margin-left:8px;font-size:14px;height:30px;margin-top:-30px"
        >{{item.VariantName}}</van-row>
        <van-row style="margin-left:8px;font-size:14px;height:30px;margin-top:30px;color:#e93628;">
          <van-col>
            <van-stepper v-model="item.Num" button-size="22px" @change="totalPrice(index)" />
          </van-col>
          <van-col style="margin-left:15px;">
            总计：￥
            <span id="unitPrice">{{item.total}}</span>.00
          </van-col>
        </van-row>
      </van-col>
    </van-row>

    <van-submit-bar style="margin-bottom:50px" :price="totalprice" button-text="提交订单">
      <van-checkbox v-model="checked" @click="All">全选</van-checkbox>
      <van-button type="danger" size="mini" style="margin-left:5px;" @click="del">删除</van-button>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
    <Footer />
  </div>
</template>


<script>
import Footer from "../Footer";
export default {
  components: {
    Footer
  },
  data() {
    return {
      value: 1,
      checked: false,
      carData: [
        {
          ItemImagePath: ""
        }
      ],
      totalprice: 0
    };
  },
  methods: {
    All() {
      this.carData.forEach(item => {
        item.check = !this.checked;
      });
    },
    radio(val, index) {
      let isok = true;
      this.carData[index].check = !val;
      this.carData.forEach(item => {
        if (item.check === false) {
          isok = false;
        }
      });
      this.checked = isok;
      this.totale();
    },
    totalPrice(index) {
      this.carData[index].total =
        this.carData[index].NowPrice * this.carData[index].Num;
      this.totale();
    },
    del() {
      let _this = this;
      this.carData.forEach(async item => {
        if (item.check == true) {
          await _this
            .$axios("http://localhost:3000/delcar?_id=" + item._id)
            .then(data => {
              if (data.data !== "") {
                _this.$toast("删除成功");
                _this.draw();
                _this.totale();
              }
            });
        }
      });
    },
    async draw() {
      let data = await this.$axios("http://localhost:3000/car");
      this.carData = data.data;
      this.carData.forEach(item => {
        item.total = item.NowPrice * item.Num;
      });
    },
    totale() {
      this.totalprice = 0;
      this.carData.forEach(item => {
        if (item.check === true) {
          this.totalprice += item.total * 100;
        }
      });
    }
  },

  created() {
    this.draw();
  }
};
</script>
