
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
    <van-grid :column-num="4" :border="false">
      <van-grid-item v-for="(k,index) in textarray" :key="index" :icon="k.icon" :text="k.text" />
    </van-grid>
      <van-image
      width="100%"
      height="260"
      style="margin-top:6px;"
      src=""
    />
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
      active: 3,
       textarray: [
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/2B791A89-3CCB-4798-8DFC-D79AF437797F.jpg",
          text: "甄选"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/7421463C-8D2E-43ED-A3D4-B6962160AAA4.jpg",
          text: "白酒"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/14959A8D-B3BC-49BB-8CE6-9D2E3B78192B.jpg",
          text: "葡萄酒"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/BABF0F43-B42F-44E9-8D69-27F104386214.jpg",
          text: "啤酒"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/539B8B99-364A-4D73-920D-63E9A8ADACC6.jpg",
          text: "洋酒"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/02F33935-7496-4EBE-BED2-22C2B88550CA.jpg",
          text: "饮料"
        },
        {
          icon:
            "../../assets/cs_all.png",
          text: "全部"
        },
        
      ]
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
</style>



