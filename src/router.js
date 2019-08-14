import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Spleen from './components/main/Spleen.vue'
import Product from './components/main/Product.vue'
import Category from './components/main/Category.vue'
import Classification from './components/main/Classification.vue'
import my from './components/main/my.vue'
import liquor from './components/main/jiulei/liquor.vue'
import wine from './components/main/jiulei/wine.vue'
import yellow from './components/main/jiulei/yellow.vue'
import beer from './components/main/jiulei/beer.vue'
import Foreign from './components/main/jiulei/Foreign.vue'
import drinks from './components/main/jiulei/drinks.vue'
import glass from './components/main/jiulei/glass.vue'
import tea from './components/main/jiulei/tea.vue'
import fresh from './components/main/jiulei/fresh.vue'
import login from './components/main/login.vue'
import reg from './components/main/reg.vue'
import shopping_car from './components/main/shopping_car.vue'
import Details from './components/main/jiulei/Details.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      //热门活动
      path: '/Home',
      name: 'activity',
      component: Home
    },
    {
      //四元喝啤酒
      path: '/Spleen',
      name: 'spleen',
      component: Spleen
    },
    {
      //潮品上市
      path: '/Product',
      name: 'product',
      component: Product
    },
    {
      //品类精选
      path: '/Category',
      name: 'category',
      component: Category
    },
    {
      //分类
      path: '/Classification',
      name: 'classification',
      component: Classification,
      redirect: '/Classification/liquor',
      children: [{
          //白酒
          path: 'liquor',
          name: 'liquor',
          component: liquor,
        },
        {
          //葡萄酒
          path: 'wine',
          name: 'wine',
          component: wine,
        },
        {
          //黄酒
          path: 'yellow',
          name: 'Yellow',
          component: yellow,
        },
        {
          //啤酒
          path: 'beer',
          name: 'beer',
          component: beer,
        },
        {
          //洋酒
          path: 'Foreign',
          name: 'Foreign',
          component: Foreign,
        },
        {
          //饮料
          path: 'drinks',
          name: 'drinks',
          component: drinks,
        },
        {
          //酒具
          path: 'glass',
          name: 'glass',
          component: glass,
        },
        {
          //茶叶
          path: 'tea',
          name: 'tea',
          component: tea,
        },
        {
          //生鲜
          path: 'fresh',
          name: 'fresh',
          component: fresh,
        }

      ]

    },
    {
      //我的
      path: '/my',
      name: 'my',
      component: my,
    },
    {
      //登录
      path: '/login',
      name: 'login',
      component: login
    },
    {
      //注册
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      //详情页
      path: '/Details/:ProductVariantID',
      name: 'Details',
      component: Details,
    },
    ,
    {
      //购物车
      path: '/shopping_car',
      name: 'shopping_car',
      component: shopping_car,
    }
  ]
})
// 全局前置守卫

// 要进入路由，都要先通过这个守卫

// router.beforeEach(async (to, from, next) => {
//   const data = await axios.post('"http://localhost:3000/login?username=" + this.username', {
//       params: {
//           // 存在cookie里面
//           // 用token代替你的用户名和密码
//           token: 'ahsdioasydhkaujhdaskj'
//       }
//   })
//   let isLogin = data.data.data.status
//   // 如果你没登陆你就进sign
//   // 如果你登陆 next

//   // 如果你登陆了你就next
//   // 或者你就要去登陆页，你也可以next

//   // 如果你是首页，详情页，登录页或者你登陆了，都可以进去，否则不给你进去
//   if (isLogin || to.path === '/shopping_car' || to.path === '/tabbar/home' || to.name === 'detail') {
//       next()
//   } else {
//       // 编程式导航
//       router.push({
//           name: 'shopping_car'
//       })
//   }

// })
// export default router