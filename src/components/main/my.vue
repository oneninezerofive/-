<template>
  <div class="mine_box">
    <div class="mine_top" style="display: none;">
      <h2>我的</h2>
    </div>
    <div class="mine">
      <div class="mine_head"></div>
      <div class="mine_bg">
        <!--未登录状态-->

        <div class="m_bg_login">
          <a href="###" @click="login">登录</a>
          <span>|</span>
          <a href="###"  @click="reg">注册</a>
        </div>
      </div>
      <div class="mine_balance_cj" id="mine_balance">
        <!--class="mine_balance"-->
        <div class="m_b_box">
          <span class="m_plus">
            <img src="../../assets/mine_plus.png" />
            <span class="m_plus_name">PLUS 会员</span>
          </span>
          <span class="m_plus_des">即将上线 敬请期待 &gt;</span>
        </div>
      </div>
    </div>
    <div class="mine_redbag">
      <ul>
        <li>
          红包
          <i class="mine_fuhao"></i>
        </li>
        <li>
          优惠券
          <i class="mine_fuhao"></i>
        </li>
        <li>
          积分
          <i class="mine_fuhao"></i>
        </li>
      </ul>
    </div>
    <div class="mine_pay" style="margin: 0px;">
      余额
      <span class="mine_pay_balance">
        <i class="mine_fuhao"></i>
      </span>
      <a href="###" class="mine_pay_recharge">充值</a>
      <a id="mine_pay_code" class="mine_pay_code">|||付款码</a>
    </div>
    <van-image
      width="366px"
      height="100%"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/027461E4-7817-4288-B8F9-78BAE1FEDB91.png"
    />
    <van-cell title="收货地址" is-link icon="location-o" />
    <van-cell title="我的收藏" is-link icon="star-o" />
    <van-cell title="意见反馈" is-link icon="coupon-o" />
    <van-cell title="客服热线" icon="phone-o" value="95197" />
    <div class="m_hotline_v">
      <div class="m_hotline">
        <a href="###">
          <img class="my_club" src="../../assets/jlb_title.png" />
          <span class="immediate_sharing">
            俱乐部福利
            <span class="m_coin m_next"></span>
          </span>
        </a>
      </div>
      <ul class="club_box">
        <li>
          <a>
            <img src="../../assets/jlb_1.png" />
          </a>
        </li>
        <li>
          <a href="###">
            <img src="../../assets/jlb_2.png" />
          </a>
        </li>
        <li>
          <a href="###">
            <img src="../../assets/jlb_3.png" />
          </a>
        </li>
      </ul>
    </div>
    <div class="tg_title">
      <img src="../../assets/guess_like.png" />
    </div>
    <div class="hot clearfix" >
      <ul class="hot_list">
        <li>
          <a href="DetailProduct.aspx?ProductVariantID=3986">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/B1F33BA6-4696-4F5E-A057-256A9A00C23D_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">50°汾阳王青花10 500ml</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>98
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>118
                  <span>.00</span>
                </strike>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="DetailProduct.aspx?ProductVariantID=3146">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/56484D0B-6B34-4C3B-AB22-10AEDFD98194_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">53°汾酒475ml</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>45
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>58
                  <span>.00</span>
                </strike>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="DetailProduct.aspx?ProductVariantID=396">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/8A9B73ED-82DA-48DE-BC11-1CB682280BA0_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">52°剑南春普装500ml</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>408
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>459
                  <span>.00</span>
                </strike>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="DetailProduct.aspx?ProductVariantID=491">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/E4DB4EA2-B2F6-406D-A756-767AD9D5167D_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">52°洋河海之蓝480ml</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>159
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>208
                  <span>.00</span>
                </strike>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="DetailProduct.aspx?ProductVariantID=494">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/70AEEE77-41FC-4B2A-BFC3-CD163FC21734_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">46°+70°仰韶彩陶坊地利(450ml+50ml)</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>220
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>238
                  <span>.00</span>
                </strike>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="DetailProduct.aspx?ProductVariantID=429">
            <img
              src="https://image.9bianli.com/Files/A01/Image/ProductResource/D69DE220-5022-4CC7-B78C-37E8672A1861_420_420.jpg"
              onerror="this.src='Images/nofound.png'"
            />
            <div class="h_l_b">
              <div class="h_l_name">52°泸州老窖特曲500ml</div>
              <div class="h_l_money">
                <span class="h_l_new">
                  <em>¥</em>258
                  <span>.00</span>
                </span>
                <strike class="h_l_old">
                  <em>¥</em>308
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
        return{

        }
    },
    methods:{
      login(){
         this.$router.push({ name:'login'});
      },
       reg(){
         this.$router.push({ name:'reg'});
      },
    }
}
</script>


<style scoped>
.mine_box {
  padding-bottom: 15px;
}
.mine_top {
  position: fixed;
  height: 46px;
  line-height: 46px;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  z-index: 999;
  background-color: #fff;
  transition: all 0.5s;
  max-width: 640px;
  display: none;
}
.mine_top h2 {
  text-align: center;
  font-size: 20px;
  width: 70%;
  margin: 0 auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 400;
}
.mine {
  background-color: #fff;
}
.mine_head {
  height: 32px;
  padding-right: 15px;
}
.mine_bg {
  z-index: 2;
  position: relative;
  margin-bottom: 30px;
}
.m_bg_login {
  text-align: center;
  line-height: 60px;
  height: 60px;
  font-size: 24px;
}
.m_bg_login a {
  font-size: 24px;
}
.m_bg_login span {
  font-size: 18px;
  vertical-align: middle;
  margin: -5px 10px 0;
  display: inline-block;
}
.mine_balance_cj {
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  margin-top: -30px;
  z-index: 1;
  background-size: 100%;
  background-image: url(https://image.9bianli.com/Files/A01/Image/OtherResource/1D511AB7-303F-4430-A579-FE4983B56A31.png);
  height: 75px;
}
.mine_balance_cj .m_b_box {
  position: absolute;
  left: 7%;
  bottom: 0;
  height: 36px;
  line-height: 36px;
}
.m_b_box {
  width: 86%;
  margin: 0 auto;
  font-size: 12px;
}
.m_plus {
  font-size: 16px;
  color: #7b5533;
  font-weight: 500;
}
.m_plus img {
  width: 20px;
  vertical-align: middle;
  margin-top: -3px;
  margin-right: 10px;
}
.m_plus_des {
  float: right;
  font-size: 11px;
  color: #b37b55;
}
.mine_redbag {
  height: 60px;
  line-height: 60px;
  clear: both;
  background-color: #fff;
}
.mine_redbag ul {
  display: table;
  width: 100%;
}
.mine_redbag ul li {
  font-size: 15px;
  color: #666;
  height: 60px;
  padding-left: 33px;
  float: left;
  text-align: center;
}
.mine_fuhao {
  background: url(../../assets/mine_fuhao.png) no-repeat;
  width: 23px;
  height: 7px;
  background-size: 100% 100%;
  display: inline-block;
  vertical-align: middle;
  margin-top: -3px;
  margin-left: 10px;
}
li {
  text-decoration: none;
  list-style-type: none;
}
.mine_pay {
  font-size: 15px;
  color: #666;
  padding-left: 32px;
  background-color: #fff;
  line-height: 42px;
  border-top: 1px solid #f2f2f2;
}
.mine_pay_balance {
  color: #333;
}
.mine_pay_recharge {
  font-size: 14px;
  color: #004c90;
  text-decoration: underline;
  margin-left: 15px;
  vertical-align: top;
}
.mine_pay_code {
  width: 66px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border-radius: 3px;
  border: 1px solid #333;
  display: inline-block;
  float: right;
  margin: 10px 15px 0 0;
}
.m_hotline_v {
  background-color: #fff;
  padding: 0 4% 10px;
  margin-top: 10px;
}
.m_hotline {
  padding: 15px 0 10px;
}
.my_club {
  width: 81.5px;
}
.immediate_sharing {
  float: right;
  font-size: 12px;
  color: #666;
}
.immediate_sharing .m_next {
  float: none;
  margin-top: 0;
  margin-left: 10px;
}
.m_next {
  width: 6.5px;
  height: 11px;
  background-position: 0 -24px;
}
.m_coin {
  background-image: url(../../assets/mine_coin.png);
  background-repeat: no-repeat;
  background-size: 25px;
  display: inline-block;
}
.club_box {
  display: flex;
  width: 100%;
}
.club_box li {
  width: 100px;
  height: 134px;
  float: left;
  margin-right: 15px;
}
.club_box li img {
  width: 100%;
}
.tg_title {
    padding: 12px 0 10px;
    text-align: center;
}
.tg_title img {
    width: 180px;
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
