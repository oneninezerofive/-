<template>
  <div class="login_bg">
    <div class="n_login_bg">
      <div class="n_l_zz"></div>
      <img src="../../assets/login_bg3.png" class="login_bg2" />
      <div class="n_l_top">
        <i class="re_coin" id="re_coin" @click="Ret"></i>
        <span class="use_pass" style="display: block;">
          密码登录
          <i class="login_mima"></i>
        </span>
        <span class="use_code" style="display: none;">
          短信验证码登录
          <i class="login_mima"></i>
        </span>
      </div>
      <div class="n_l_tit">
        <div class="n_l_m">
          <a>登录</a>
          <span>|</span>
          <a>注册</a>
        </div>
        <i class="login_coin"></i>
      </div>
    </div>
    <van-cell-group :border="false">
      <van-field v-model="username" left-icon="phone-o" placeholder="请输入手机号码" class="phone" />
    </van-cell-group>
    <van-row>
      <van-col span="16">
        <van-cell-group :border="false">
          <van-field v-model="code" left-icon="certificate" placeholder="请输入验证码" class="code" />
        </van-cell-group>
      </van-col>
      <van-col span="8">
        <input type="button" class="btn" :value="randCode" @click="randcode" />
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <input type="button" value="登录" class="login" @click="denglu" />
      </van-col>
    </van-row>
    <div class="login_tishi login_tishi1">
      未注册酒便利的手机号，登录时将自动注册且代同意
      <a href="###">《用户服务条款》</a>，登录问题请拨打
      <a href="###">95197</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      code: "",
      randCode: "获取验证码"
    };
  },
  methods: {
    Ret() {
      this.$router.push({ name: "my" });
    },
    randcode() {
      var reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.username)) {
        var code = "";
        var codeLength = 4; //验证码的长度
        var random = new Array(
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        ); //随机数
        for (var i = 0; i < codeLength; i++) {
          //循环操作
          var index = Math.floor(Math.random() * 36);
          code += random[index];
        }
        this.randCode = code;
      } else {
        alert("输入不合法");
      }
    },
    async denglu() {
      let _this = this;
      if (this.username && this.code === this.randCode) {
        let loginData = await this.$axios
          .post("http://localhost:3000/login?username=" + this.username)
          .then(async function(data) {
            if (data.data == "") {
              _this.$router.push({ name: "reg" });
            } else {
              _this.$router.push({ name: "home" });
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.n_login_bg {
  position: relative;
}
.n_l_zz {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.login_bg2 {
  width: 100%;
  display: block;
}
.n_l_top {
  height: 30px;
  line-height: 30px;
  position: absolute;
  left: 4%;
  top: 5px;
  font-size: 13px;
  color: #fff;
  width: 92%;
}
.re_coin {
  width: 30px;
  height: 30px;
  background: url(../../assets/all_return.png) no-repeat center left;
  background-size: 10px 17px;
  display: inline-block;
}
.n_l_top span {
  float: right;
}
.login_mima {
  background: url(../../assets/login_coin_r.png) no-repeat;
  width: 5px;
  height: 9px;
  display: inline-block;
  background-size: 100%;
  margin-left: 5px;
}
.n_l_tit {
  position: absolute;
  left: 0;
  bottom: -1px;
  text-align: center;
  z-index: 2;
  width: 200px;
}
.n_l_m {
  margin-bottom: 10px;
}
.n_l_tit a {
  font-size: 30px;
  color: #fff;
  letter-spacing: 1px;
}
.n_l_tit span {
  color: #fff;
  font-size: 17px;
  display: inline-block;
  margin: -15px 10px 0;
  vertical-align: middle;
}
.login_coin {
  background: url(../../assets/login_coin.png) no-repeat 0 7px;
  width: 29px;
  height: 29px;
  background-size: 100% 100%;
  display: block;
  margin: 0 auto;
}
.phone {
  margin-top: 25px;
  height: 40px;
  font-size: 15px;
  border: 0;
  outline: 0;
  margin-left: 32px;
  width: 80%;
  border-bottom: 1px solid #ccc;
}
.code {
  margin-top: 10px;
  height: 40px;
  font-size: 15px;
  border: 0;
  outline: 0;
  margin-left: 32px;
  width: 80%;
  border-bottom: 1px solid #ccc;
}
.btn {
  width: 70px;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  border: 1px solid #004c90;
  font-size: 13px;
  text-align: center;
  color: #004c90;
  background-color: transparent;
  margin-top: 17px;
}
.login {
  display: block;
  margin: auto;
  text-align: center;
  margin-top: 38px;
  letter-spacing: 4px;
  opacity: 0.5;
  width: 85%;
  height: 45px;
  line-height: 45px;
  color: #333;
  border-radius: 3px;
  border: none;
  background-color: #ffd100;
}
.login_tishi {
  font-size: 11px;
  color: #ccc;
  width: 85%;
  margin: 20px auto 0;
}
.login_tishi a {
  color: #004c90;
  font-size: 11px;
  margin-left: 5px;
}
</style>
