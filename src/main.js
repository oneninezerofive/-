import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
Vue.prototype.$axios = axios
//搜索
import { Search } from 'vant';

Vue.use(Search);
// 标签页
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);

// 轮播图
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

//底部组件
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

//宫格
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);

//图片
import { Image } from 'vant';

Vue.use(Image);

//商品卡片
import { Card,Row, Col} from 'vant';

Vue.use(Card).use(Row).use(Col);

//下拉菜单
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);

//粘性布局
import { Sticky } from 'vant';

Vue.use(Sticky);

//单元格
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);

//Field 输入框
import { Field } from 'vant';

Vue.use(Field);

//按钮
import { Button } from 'vant';

Vue.use(Button);

//骨架屏
import { Skeleton } from 'vant';

Vue.use(Skeleton);

//商品导航
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);

//单选框
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);


//复选框
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);

//步进器
import { Stepper } from 'vant';

Vue.use(Stepper);


//引入
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);

//轻提示
import { Toast } from 'vant';

Vue.use(Toast);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
