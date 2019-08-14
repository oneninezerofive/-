<template>
  <div class="reg">
    <div class="n_t_coin">
      <i class="h_l_coin" @click="Ret"></i>
    </div>
    <div class="n_t_tit">注册</div>
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
        <input type="botton" class="btn" :value="randCode" @click="randcode" />
      </van-col>
    </van-row>
    <van-row>
      <van-col span="20">
        <van-cell-group :border="false">
          <van-field
            v-model="password"
            left-icon="certificate"
            placeholder="请输入新密码（数字或者字母）"
            class="mima"
            type="password"
          />
        </van-cell-group>
      </van-col>
      <van-col span="4">
        <div class="clear_phone">
          <span class="pwd_hide"></span>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <input type="botton" value="验证并登录" class="login_reg" @click="denglu" />
      </van-col>
    </van-row>
    <div class="login_tishi login_tishi1">
      收不到验证码？请拨打
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
      randCode: "获取验证码",
      password: ""
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
      var reg = /\w{8,16}$/;
      if (reg.test(this.password)) {
        if (this.username && this.code === this.randCode && this.password) {
          let loginData = await this.$axios
            .post(
              "http://localhost:3000/reg?username=" +
                this.username +
                "&password=" +
                this.password
            )
            .then(async function(data) {
              if (data.data == "") {
              } else {
                _this.$router.push({ name: "home" });
              }
            });
        }
      }else{
        alert("请重新输入密码");
      }
    }
  }
};
</script>

<style scoped>
.reg {
  margin: 0px auto;
}
.n_t_coin {
  width: 95%;
}
.h_l_coin {
  width: 30px;
  height: 30px;
  background: url(../../assets/fanhuijian.png) no-repeat center center;
  background-size: 10px 17px;
  display: inline-block;
  margin-top: 5px;
  margin: 0px auto;
}
.n_t_tit {
  font-size: 25px;
  width: 85%;
  margin-top: 10px;
  margin: 0px auto;
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
.mima {
  margin-top: 10px;
  height: 40px;
  font-size: 15px;
  border: 0;
  outline: 0;
  margin-left: 32px;
  width: 80%;
  border-bottom: 1px solid #ccc;
}
.clear_phone {
  margin-top: 20px;
  margin-right: 40px;
  height: 40px;
  line-height: 40px;
}
.pwd_hide {
  display: block;
  background: url(../../assets/login_biyan.png) no-repeat center center;
  background-size: 20px 20px;
  width: 100%;
  height: 100%;
}
.login_reg {
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
