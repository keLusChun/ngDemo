import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let rootPath = './views/'
let saas = rootPath + 'saas/' // saas 服务
let activity = rootPath + 'activity/' // 优加活动
let common = rootPath + 'common/' // 通用服务
let user = rootPath + 'user/' // 用户
let dffw = rootPath + 'dffw/' // 垫付服务
let zjdz = rootPath + 'zjdz/' // 专家点诊
let jsdh = rootPath + 'jsdh/' // 极速电话
let jstw = rootPath + 'jstw/' // 极速图文
let jstwdhPac = rootPath + 'jstwdhPac/' // 极速图文电话平安财
let jtys = rootPath + 'jtys/' // 家庭医生
let xcpz = rootPath + 'xcpz/' // 现场陪诊
let workOrder = rootPath + 'workOrder/' // 工单
let yhzh = rootPath + 'yhzh/' // 优护理
let priority = rootPath + 'priority/' // 绿通
let organization = rootPath + 'organization/' // 机构类预约
let testPage = rootPath + 'test/' // 机构类预约
let hui = rootPath + 'hui/'

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/dispense'
    },
    {
      path: '/dispense',
      name: 'dispense',
      component: () => import( /* webpackChunkName: "dispense" */ rootPath + 'dispense')
    },

    // 测试页面
    {
      path: '/test',
      name: 'test',
      component: () => import( /* webpackChunkName: "test" */ rootPath + 'test')
    },
    // 豆包测试页面
    {
      path: '/testDb',
      name: 'testDb',
      component: () => import( /* webpackChunkName: "test" */ rootPath + 'testDb')
    },

    // 中间跳转
    {
      path: '/middle',
      name: 'middle',
      component: () => import( /* webpackChunkName: "middle" */ saas + 'middle')
    },
    // 优加改版登录页面
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import( /* webpackChunkName: "login" */ rootPath + 'login/login')
    },
    // 优加改版登录页面
    {
      path: '/yjLogin',
      name: 'yjLogin',
      meta: {
        title: '优加登录'
      },
      component: () => import( /* webpackChunkName: "login" */ rootPath + 'login/yj-login')
    },
    // 昆仑 五星 登录页面
    {
      path: '/kw-login',
      name: 'kw-login',
      meta: {
        title: '登录'
      },
      component: () => import( /* webpackChunkName: "kw-login" */ rootPath + 'login/kw-login')
    },
    // 佰佳保登陆页面
    {
      path: '/hundredLogin',
      name: 'hundredLogin',
      meta: {
        title: '登录'
      },
      component: () => import( /* webpackChunkName: "login" */ rootPath + 'login/hundredLogin')
    },
    // 密码管理页面
    {
      path: '/mgPassword',
      name: 'mgPassword',
      meta: {
        title: '密码管理'
      },
      component: () => import( /* webpackChunkName: "mgPassword" */ rootPath + 'login/mg-password')
    },

    // activity 
    // 电话医生快捷注册
    {
      path: '/shortcutRegister',
      name: 'shortcutRegister',
      meta: {
        title: '注册'
      },
      component: () => import( /* webpackChunkName: "shortcutRegister" */ activity + 'shortcut-register')
    },
    // 新型冠状病自查
    {
      path: '/xgzc',
      name: 'xgzc',
      meta: {
        title: '新冠自查'
      },
      component: () => import( /* webpackChunkName: "xgzc" */ activity + 'xgzc')
    },
    // 发热门诊
    {
      path: '/fever',
      name: 'fever',
      meta: {
        title: '发热门诊'
      },
      component: () => import( /* webpackChunkName: "fever" */ activity + 'fever')
    },

    // common
    // 选择卡片服务
    {
      path: '/common/cardSelector',
      name: 'cardSelector',
      meta: {
        title: '卡片选择'
      },
      component: () => import( /* webpackChunkName: "cardSelector" */ common + 'card-selector')
    },
    // 订单评价页
    {
      path: '/common/evaluate',
      name: 'evaluate',
      meta: {
        title: '服务评价'
      },
      component: () => import( /* webpackChunkName: "evaluate" */ common + 'evaluate')
    },
    // 订单成功 通用页面
    {
      path: '/common/successPage',
      name: 'successPage',
      meta: {
        title: '下单成功'
      },
      component: () => import( /* webpackChunkName: "successPage" */ common + 'success-page')
    },
    {
      path: '/common/yacSuccess',
      name: 'yacSuccess',
      meta: {
        title: '下单成功'
      },
      component: () => import( /* webpackChunkName: "successPage" */ common + 'yacSuccess')
    },
    // 工单下单申请
    {
      path: '/workOrder/orderApply',
      name: 'orderApply',
      meta: {
        title: '下单申请'
      },
      component: () => import( /* webpackChunkName: "successPage" */ workOrder + 'order-apply')
    },
    // 工单下单详情
    {
      path: '/workOrder/orderDetail',
      name: 'orderDetail',
      meta: {
        title: '下单详情'
      },
      component: () => import( /* webpackChunkName: "successPage" */ workOrder + 'order-detail')
    },

    // 工单服务记录
    {
      path: '/workOrder/orderService',
      name: 'orderService',
      meta: {
        title: '工单服务'
      },
      component: () => import( /* webpackChunkName: "successPage" */ workOrder + 'order-service')
    },

    // 访问错误
    {
      path: '/common/errorPage',
      name: 'errorPage',
      // meta : {title : '访问错误'},
      component: () => import( /* webpackChunkName: "errorPage" */ common + 'error-page')
    },

    // saas 
    {
      path: '/saas/activation',
      name: 'activation',
      meta: {
        title: '卡激活'
      },
      component: () => import( /* webpackChunkName: "activation" */ saas + 'activation')
    },
    {
      path: '/saas/home',
      name: 'home',
      meta: {
        title: '我的健康卡'
      },
      component: () => import( /* webpackChunkName: "home" */ saas + 'home')
    },
    {
      path: '/saas/other',
      name: 'other',
      meta: {
        title: '服务详情'
      },
      component: () => import( /* webpackChunkName: "other" */ saas + 'other')
    },
    // 用户
    {
      path: '/user/userCenter',
      name: 'userCenter',
      meta: {
        title: '个人中心'
      },
      component: () => import( /* webpackChunkName: "userCenter" */ user + 'user-center')
    },
    {
      path: '/user/orderList',
      name: 'orderList',
      meta: {
        title: '订单列表'
      },
      component: () => import( /* webpackChunkName: "orderList" */ user + 'order-list')
    },
    {
        path: '/user/orderListKc',
            name: 'orderListKc',
        meta: {
        title: '订单列表'
    },
        component: () => import( /* webpackChunkName: "orderList" */ user + 'order-list-kc')
    },
    {
      path: '/user/personInfo',
      name: 'personInfo',
      meta: {
        title: '个人资料'
      },
      component: () => import( /* webpackChunkName: "personInfo" */ user + 'person-info')
    },
    {
      path: '/user/newPersonInfo',
      name: 'newPersonInfo',
      meta: {
        title: '个人资料'
      },
      component: () => import( /* webpackChunkName: "newPersonInfo" */ user + 'newPersonInfo')
    },
    {
      path: '/user/changeInfo',
      name: 'changeInfo',
      meta: {
        title: '实名认证'
      },
      component: () => import( /* webpackChunkName: "changeInfo" */ user + 'change-info')
    },
    {
      path: '/user/setting',
      name: 'setting',
      meta: {
        title: '设置'
      },
      component: () => import( /* webpackChunkName: "setting" */ user + 'setting')
    },
    {
      path: '/user/safetyManage',
      name: 'safetyManage',
      meta: {
        title: '密码管理'
      },
      component: () => import( /* webpackChunkName: "safetyManage" */ user + 'safety-manage')
    },
    // 工单服务点击后的详情
    {
      path: '/user/orderServiceDetail',
      name: 'orderServiceDetail',
      meta: {
        title: '下单详情'
      },
      component: () => import( /* webpackChunkName: "successPage" */ user + 'order-service-detail')
    },
    {
      path: '/user/about',
      name: 'about',
      meta: {
        title: '关于我们'
      },
      component: () => import( /* webpackChunkName: "about" */ user + 'about')
    },
    {
      path: '/user/version',
      name: 'version',
      meta: {
        title: '版本介绍'
      },
      component: () => import( /* webpackChunkName: "version" */ user + 'version')
    },
    {
      path: '/user/coupon',
      name: 'coupon',
      meta: {
        title: '我的优惠券'
      },
      component: () => import( /* webpackChunkName: "coupon" */ user + 'coupon')
    },
    {
      path: '/user/myOrder',
      name: 'myOrder',
      meta: {
        title: '我的订单'
      },
      component: () => import( /* webpackChunkName: "myOrder" */ user + 'myOrder')
    },
    {
      path: '/user/orderDetail',
      name: 'orderDetail',
      meta: {
        title: '订单详情'
      },
      component: () => import( /* webpackChunkName: "orderDetail" */ user + 'orderDetail')
    },
    
    // 绿通订单
    {
      path: '/priority/priorityApply',
      name: 'priorityApply',
      meta: {
        title: '服务申请'
      },
      component: () => import( /* webpackChunkName: "priorityApply" */ priority + 'pr-apply')
    },
    {
      path: '/priority/priorityDetail',
      name: 'priorityDetail',
      meta: {
        title: '订单详情'
      },
      component: () => import( /* webpackChunkName: "sumbitPreview" */ priority + 'pr-detail')
    },
    // 现场陪诊
    {
      path: '/xcpz/pzindex',
      name: 'pzindex',
      meta: {
        title: '服务申请'
      },
      component: () => import( /* webpackChunkName: "priorityApply" */ xcpz + 'pz-index')
    },
    {
      path: '/xcpz/pzdetail',
      name: 'pzdetail',
      meta: {
        title: '咨询详情'
      },
      component: () => import( /* webpackChunkName: "consultDetail" */ xcpz + 'pz-detail')
    },
    // 专家点诊
    {
      path: '/specialist/department',
      name: 'department',
      meta: {
        title: '科室选择'
      },
      component: () => import( /* webpackChunkName: "department" */ zjdz + 'department')
    },
    {
      path: '/specialist/arrange',
      name: 'arrange',
      meta: {
        keepAlive: false,
        title: '医生选择'
      },
      component: () => import( /* webpackChunkName: "arrange" */ zjdz + 'arrange')
    },
    {
      path: '/specialist/zjdzApply',
      name: 'zjdzApply',
      meta: {
        title: '服务申请'
      },
      component: () => import( /* webpackChunkName: "zjdzApply" */ zjdz + 'zjdz-apply')
    },
    {
      path: '/specialist/doctorDetail',
      name: 'doctorDetail',
      meta: {
        title: '医生详情'
      },
      component: () => import( /* webpackChunkName: "doctorDetail" */ zjdz + 'doctor-detail')
    },
    {
      path: '/specialist/zjdzDetail',
      name: 'zjdzDetail',
      meta: {
        title: '订单详情'
      },
      component: () => import( /* webpackChunkName: "zjdzDetail" */ zjdz + 'zjdz-detail')
    },
    // 极速电话
    {
      path: '/jsdh/jsdhApply',
      name: 'jsdhApply',
      meta: {
        title: '服务申请'
      },
      component: () => import( /* webpackChunkName: "jsdhApply" */ jsdh + 'jsdh-apply')
    },
    // 优护理相关
    {
      path: '/yhzh/yhzhApply',
      name: 'yhzhApply',
      meta: {
        title: '院后照护'
      },
      component: () => import( /* webpackChunkName: "jsdhApply" */ yhzh + 'yhzh-apply')
    },
    {
      path: '/yhzh/yhzhDetail',
      name: 'yhzhDetail',
      meta: {
        title: '订单详情'
      },
      component: () => import( /* webpackChunkName: "jsdhApply" */ yhzh + 'yhzh-detail')
    },
    // 极速图文
    {
      path: '/jstw/jstwApply',
      name: 'jstwApply',
      meta: {
        title: '服务申请'
      },
      component: () => import( /* webpackChunkName: "jstwApply" */ jstw + 'jstw-apply')
    },
    // 极速电话图文平安财
    {
      path: '/jstwdhPac/jstwdhPac',
      name: 'jstwdhPac',
      meta: {
        title: '我的服务'
      },
      component: () => import( /* webpackChunkName: "jstwApply" */ jstwdhPac + 'jstwdhPac')
    },
    // 极速图文
    {
      path: '/jstwdhPac/pacApply',
      name: 'pacApply',
      meta: {
        title: '服务申请'
      },
      component: () => import( /* webpackChunkName: "jstwApply" */ jstwdhPac + 'pacApply')
    },
    {
      path: '/jstwdhPac/pacDetail',
      name: 'pacDetail',
      meta: {
        title: '订单详情'
      },
      component: () => import( /* webpackChunkName: "jstwApply" */ jstwdhPac + 'pacDetail')
    },
    {
      path: '/jstwdhPac/pacList',
      name: 'pacList',
      meta: {
        title: '订单列表'
      },
      component: () => import( /* webpackChunkName: "jstwApply" */ jstwdhPac + 'pacList')
    },
    // 机构预约订单
    {
      path: '/organization/orgApply',
      name: 'orgApply',
      meta: {
        title: '服务申请'
      },
      component: () => import( /* webpackChunkName: "orgApply" */ organization + 'org-apply')
    },
    {
      path: '/organization/selectOrg',
      name: 'selectOrg',
      meta: {
        title: '门店选择'
      },
      component: () => import( /* webpackChunkName: "selectOrg" */ organization + 'select-org')
    },
    {
      path: '/organization/orgDetail',
      name: 'orgDetail',
      meta: {
        title: '订单详情'
      },
      component: () => import( /* webpackChunkName: "orgDetail" */ organization + 'org-detail')
    },

    // 垫付服务
    {
      path: '/dffw/dffwDetail',
      name: 'dffwDetail',
      meta: {
        title: '订单详情'
      },
      component: () => import( /* webpackChunkName: "dffwDetail" */ dffw + 'dffw-detail')
    },
    // 极速图文
    {
      path: '/dffw/dffwApply',
      name: 'dffwApply',
      meta: {
        title: '医疗金垫付申请'
      },
      component: () => import( /* webpackChunkName: "dffwApply" */ dffw + 'dffw-apply')
    },
    // 永安才
    {
      path: '/dffw/dffwYongac',
      name: 'dffwYongac',
      meta: {
        title: '医疗金垫付申请'
      },
      component: () => import( /* webpackChunkName: "dffwApply" */ dffw + 'dffwYongac')
    },
    // 家庭医生
    {
      path: '/jtys/jtysHome',
      name: 'jtysHome',
      meta: {
        title: '我的服务'
      },
      component: () => import( /* webpackChunkName: "jtysHome" */ jtys + 'jtys-home')
    },
    {
      path: '/jtys/jtysApply',
      name: 'jtysApply',
      meta: {
        title: '申请医生'
      },
      component: () => import( /* webpackChunkName: "jtysApplay" */ jtys + 'jtys-apply')
    },
    {
      path: '/jtys/dhConsult',
      name: 'dhConsult',
      meta: {
        title: '电话咨询'
      },
      component: () => import( /* webpackChunkName: "dhConsult" */ jtys + 'dh-consult')
    },
    {
      path: '/jtys/consultDetail',
      name: 'consultDetail',
      meta: {
        title: '服务详情'
      },
      component: () => import( /* webpackChunkName: "consultDetail" */ jtys + 'consult-detail')
    },
    {
      path: '/jtys/myFamily',
      name: 'myFamily',
      meta: {
        title: '我的家庭'
      },
      component: () => import( /* webpackChunkName: "myFamily" */ jtys + 'my-family')
    },
    {
      path: '/jtys/addMember',
      name: 'addMember',
      meta: {
        title: '添加成员'
      },
      component: () => import( /* webpackChunkName: "addMember" */ jtys + 'add-member')
    },
    {
      path: '/jtys/healthFile',
      name: 'healthFile',
      meta: {
        title: '健康档案'
      },
      component: () => import( /* webpackChunkName: "healthFile" */ jtys + 'health/healthFile')
    },
    {
      path: '/jtys/tijianRecord',
      name: 'tijianRecord',
      meta: {
        title: '体检报告'
      },
      component: () => import( /* webpackChunkName: "tijianRecord" */ jtys + 'health/tijianRecord')
    },
    // 家庭医生订单列表
    {
      path: '/jtys/familyList',
      name: 'familyList',
      meta: {
        title: '问诊记录'
      },
      component: () => import( /* webpackChunkName: "tijianRecord" */ jtys + 'health/family-list')
    },
    {
      path: '/hui/result',
      name: 'huiResult',
      meta: {
        title: '惠美'
      },
      component: () => import( /* webpackChunkName: "tijianRecord" */ hui + 'hui-result')
    },
    // 测试页面
    {
      path: '/test/testPage',
      name: 'testPage',
      meta: {
        title: '测试页面'
      },
      component: () => import( /* webpackChunkName: "tijianRecord" */ testPage + 'testPage')
    },
    {
      path: '/test/testOnly',
      name: 'testOnly',
      meta: {
        title: '只用于测试'
      },
      component: () => import( /* webpackChunkName: "tijianRecord" */ testPage + 'testOnly')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '优加健保'
  }
  if (to.path == "/kw-login") {
    next()
    return
  }
  if (to.query.source == "60") {
    next()
    return
  }
  if (to.name == "dffwYongac") {
    next()
    return
  }
  if (to.name == "jstwdhPac") {
    next()
    return
  }
  if (to.name == "pacApply") {
    next()
    return
  }
  if (to.name == "pacDetail") {
    next()
    return
  }
  if (to.name == "pacList") {
    next()
    return
  }
  if (to.query.source == "ushop") {
    next()
    return
  }
  if (to.query.source == "newPersonInfo") {
    next()
    return
  }
  if (to.name == "userCenter") {
    next()
    return
  }
  if (to.path != '/dispense') {
    if (to.path == '/test') {
      next()
      return
    }
    if (!sessionStorage.openId) {
      next("/dispense")
      return
    }
  }
  next()
})

export default router