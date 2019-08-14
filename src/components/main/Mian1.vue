<template>
  <div id="main">
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="(k,index) in textarray" :key="index" :icon="k.icon" :text="k.text" />
    </van-grid>
    <van-image
      width="48%"
      height="70"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/E43F9D0D-DAF1-494D-86A6-3634A6D125C2.png"
    />
    <van-image
      width="48%"
      height="70"
      style="margin-left:13px;"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/BFBAAD1E-EBC6-4023-BE36-922D0822B658.png"
    />
    <van-image
      width="100%"
      height="70"
      style="margin-top:6px;"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/23DF166F-D295-445F-B7E8-2965A73F36ED.gif"
    />
    <van-image
      width="100%"
      height="70"
      style="margin-top:6px;"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/0B3E7E61-5D52-46A5-98C3-89C61AB2CCF5.gif"
    />
    <van-image
      width="100%"
      height="30"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/BAB4FE62-1220-44FC-BEC6-74216057EAAF.jpg"
    />
    <van-image
      width="69%"
      height="140"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/52A11DD9-9F0D-4588-8F2D-B8EF3D6AFC64.png"
    />
    <van-image
      width="29%"
      height="140"
      style="margin-left:5px;"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/4102C259-BF7C-4810-B598-88B61197C14A.png"
    />
    <van-image
      width="100%"
      height="30"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/2A6D0FFD-BD56-4C8C-9878-76870AE7ED4F.jpg"
    />
    <van-image
      width="29%"
      height="140"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/22A8C08B-3B2D-4D1A-A7DD-BD54BEA2330E.png"
    />
    <van-image
      width="69%"
      height="140"
      style="margin-left:5px;"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/263F1375-C2D8-4EEE-A1F3-2DA1551A38CA.png"
    />
    <van-image
      width="100%"
      height="100"
      style="margin-top:10px;"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/D449C7E7-2043-4A4B-BCFB-21E1CEDA1033.png"
    />
    <van-image
      width="100%"
      height="30"
      style="margin-top:10px;"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/F284CB30-B605-40B2-94F6-414B214B5109.jpg"
    />
    <van-image
      width="29%"
      height="230"
      style=" float:left"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/8C36B64B-A71D-4B8B-BF4E-838AA3D3496C.png"
    />
    <van-image
      width="69%"
      height="110"
      style="margin-left:5px; float:right"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/4242105D-6E91-47EC-AB17-E257C234789A.png"
    />
    <van-image
      width="69%"
      height="110"
      style="margin-top:10px; float:right"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/3CE4A1C3-D980-448D-982F-59793D566815.png"
    />
    <van-image
      width="100%"
      height="30"
      style="margin-top:10px;"
      src="https://image.9bianli.com/Files/A01/Image/OtherResource/964461DA-B3B9-4F50-8965-8211E9EAEF6D.jpg"
    />
    <div class="hot clearfix" >
      <ul class="hot_list">
        <li>
          <a href="###">
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
          <a href="###">
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
          <a href="###">
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
          <a href="###">
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
          <a href="###">
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
          <a href="###">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarray: [
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/F6F5B0C6-E9FC-4BE5-B205-B30BC66AB0F7.png",
          text: "啤酒"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/F329D589-8410-41D5-9BE8-1D1B78676399.png",
          text: "葡萄酒"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/C7C08A40-E86C-410F-8D7D-2FD8F99A37B5.png",
          text: "饮料"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/5D260E96-703D-471E-9FD8-C42861BCA9E6.png",
          text: "茶叶"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/C8A57A2F-63B6-4AA7-BD99-E47374587320.png",
          text: "白酒"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/0B608530-BD8F-40F7-9C60-E68F18BF01E8.png",
          text: "洋酒"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/E9698851-655C-4DFB-A127-55717604113F.png",
          text: "黄酒"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/5326A036-26F3-474E-A8B4-CADF372E3FDD.png",
          text: "积分商城"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/2EEF4CFD-83FE-448F-9893-265451210ED3.png",
          text: "附近门店"
        },
        {
          icon:
            "https://image.9bianli.com/Files/A01/Image/OtherResource/5149BDC0-07C3-41CB-92B9-7FA37913ECC4.png",
          text: "会员权益"
        }
      ]
    };
  }
};
</script>

<style>
#main {
  padding: 5px 10px 0;
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

