<template>
  <div id="spleen">
    <div class="head">
      <div class="dizhi">
        <i></i>
        <span>定位中...</span>
      </div>
      
    </div>
     <van-sticky>
    <van-search placeholder="乌苏  二厂汽水  洋河  搏格斯 " v-model="value" class="search" />
     <van-tabs
      v-model="active"
      title-inactive-color="#000"
      title-active-color="#000"
      @click="activity"
    >
      <van-tab title="热门活动" ></van-tab>
      <van-tab title="四元喝德啤" ></van-tab>
      <van-tab title="潮品上市"></van-tab>
      <van-tab title="品类精选"></van-tab>
    </van-tabs>
     </van-sticky>
    <van-image
      width="100%"
      height="140"
      style="margin-top:6px;"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/21BA4E4D-198D-4542-A8A8-F5E6D6AD173B.png"
    />
    <div class="hot clearfix" >
      <ul class="hot_list">
        <li>
          <a href="">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/157EED84-682C-4CFC-B438-7449AF2F511C_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">50°汾阳王青花10 500ml</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>6
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>6.9
                  <span>.00</span>
                </strike>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/157EED84-682C-4CFC-B438-7449AF2F511C_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">53°汾酒475ml</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>6
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>6.9
                  <span>.00</span>
                </strike>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/309445BC-252A-4C41-8CF4-B61DEDD8E769_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">高大师精酿英水帝江啤酒330ml瓶装</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>9.8
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>13.5
                  <span>.00</span>
                </strike>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="###">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/DFF3D129-F113-4127-91E8-A9A69845C2A0_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">乌苏啤酒红标620ml瓶装</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>7.5
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>11.8
                  <span>.00</span>
                </strike>
              </div>
            </div>
          </a>
        </li>
       
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../Footer'
export default {
  components:{
    Footer
  },
    data(){
        return {
      value: "",
      active: 1
    };
    },
     methods:{
    activity(name, title){
      if(name == 0){
        this.$router.push({ name:'activity'});
      }
      if(name == 1){
        this.$router.push({ name:'spleen'});
      }
      if(name == 2){
        this.$router.push({ name:'product'});
      }
       if(name == 3){
        this.$router.push({ name:'category'});
      }
    }
   }
}
</script>


<style scoped>
#spleen{
    padding: 5px 12px 0;
}
.head{
    margin-bottom: 13px;
    height: 25px;
    
}
.dizhi{
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
i{
    background: url(../../assets/map_hei.png) no-repeat;
    width: 15px;
    height: 18px;
    background-size: 100% 100%;
    margin-right: 6px;
    display: inline-block;
    position: absolute;
    top: 4px;
    left: 0;
}
span{
    font-weight: bold;
}
.search {
    border-radius: 30px;
}
.clearfix::after{
    content: "";
    height: 0;
    overflow: hidden;
    display: block;
    visibility: hidden;
    clear: both;
}
.hot {
    background-color: #FFFFFF;
    margin-bottom: 50px;
}
.hot_list li {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    -webkit-flex: 1;
    flex: 1;
    flex-basis: 48%;
    -webkit-flex-basis: 48%;
    max-width: 48%;
    margin-bottom: 5px;
    overflow: hidden;
    min-height: 250px;
    background-color: #fff;
    border: 1px solid #f2f2f2;
    border-radius: 3px;
    float: left;
    margin-right: 5px;
}
.hot_list li img {
    width: 100%;
}
.h_l_b {
    padding: 8px 10px 10px;
}
.h_l_name {
    height: 38px;
    font-size: 13px;
    color: #333;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
    font-weight: bold;
}
.h_l_money {
    margin-top: 5px;
}
.h_l_new {
    font-size: 13px;
    color: #FF5500;
    font-weight: bold;
}
.h_l_new em, .h_l_old em {
    font-size: 10px;
    font-style: normal;
    margin-right: 2px;
}
.h_l_new span {
    font-size: 10px;
    font-weight: bold;
}
.h_l_old {
    font-size: 13px;
    color: #888;
    float: right;
}
.h_l_new em, .h_l_old em {
    font-size: 10px;
    font-style: normal;
    margin-right: 2px;
}
.h_l_old span {
    font-size: 10px;
}
</style>



