import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自定义的一些引入
import './assets/styles/global-style.less'
Vue.config.productionTip = false

import * as utils from './assets/scripts/utils'
Vue.prototype.$util = utils

import $axios from './assets/scripts/axios'
Vue.prototype.$axios = $axios



import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// vant 组件 按需引入
import {
  Tab, Tabs, Toast, Popup, DatetimePicker, Area, Empty,
  Icon, Uploader, Picker, List, Rate, Field, Tag, Collapse, CollapseItem,
  Button, Image, Grid, GridItem, RadioGroup, Radio,
  Loading, Cell, CellGroup, NoticeBar, Checkbox, CheckboxGroup,PullRefresh,
  Progress, ActionSheet, Calendar, Dialog, Notify, Search,Overlay
} from 'vant'
Vue.use(Tab).use(Tabs).use(Toast).use(Popup).use(DatetimePicker).use(Area)
  .use(Icon).use(Uploader).use(Picker).use(List).use(Rate).use(Field).use(Tag)  //.use(Collapse).use(CollapseItem)
  .use(Button).use(Image).use(Grid).use(GridItem).use(RadioGroup).use(Radio).use(Empty)
  .use(Loading).use(Cell).use(CellGroup).use(NoticeBar).use(Checkbox).use(CheckboxGroup)
  .use(Progress).use(ActionSheet).use(Calendar).use(Search).use(Collapse).use(CollapseItem).use(PullRefresh).use(Overlay)

Vue.prototype.Dialog = Dialog
Vue.prototype.Notify = Notify


// 引入全局方法
import {getAxios, postAxios, global_bg_top } from '@/base'
Vue.prototype.$get = getAxios
Vue.prototype.$post = postAxios
Vue.prototype.$global_bg_top = global_bg_top

// 引入全局组件 重要  主要在assets/scripts下的js文件
import select from './mixins/select'
Vue.use(select)
import './mixins/select2'


// 全局指令
// 表单内容 颜色判断
Vue.directive('sColor', {
  bind: function (el, binding) {
    el.style.color = binding.value == '请选择' ? '#999' : '#333'
  },
  update: function (el, binding) {
    el.style.color = binding.value == '请选择' ? '#999' : '#333'
  }
})

// moment 时间
import moment from 'moment'
moment.locale('zh-cn');
Vue.filter('dateFilter', (v, pattern) => {
  if (!v) return ''
  return moment(v).format(pattern);
})

// 环境
let hn = location.hostname
let env = 'development'
if (/yjadmin/.test(hn)) {
  env = 'production'
} else if (/uat/.test(hn)) {
  env = 'uat'
} else if (/test/.test(hn)) {
  env = 'test'
}
// 全局数据对象
let data = {
  companyId: JSON.parse(sessionStorage.yj_company_info || JSON.stringify('')).companyId,
  env
}

new Vue({
  router,
  store,
  data,
  render: h => h(App)
}).$mount('#app')
