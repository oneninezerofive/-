<template>
    <van-tabbar route v-model="value"
    @change="active"
    >
  <van-tabbar-item  to="/Home" icon="home-o" >首页</van-tabbar-item>
  <van-tabbar-item  to="/Classification/liquor" icon="add-o">分类</van-tabbar-item>
  <van-tabbar-item   icon="orders-o">订单</van-tabbar-item>
  <van-tabbar-item  to="/shopping_car" icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item  to="/my" icon="manager-o">我的</van-tabbar-item>
</van-tabbar>
</template>


<script>
export default {
    data(){
        return{
            value:0,
        }
    },
    methods:{
        active(index){  
            this.value = index;
            // if(num == "shouye"){
            //     this.$router.push({ name:'activity'});
            // }
            // if(num == "fenglei"){
            //     this.$router.push({ name:'classification'});
            // }
            //   if(num == "my"){
            //     this.$router.push({ name:'my'});
            // }
        }
    }
}
</script>

