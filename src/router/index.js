import Vue from 'vue';
import Router from 'vue-router';

/* layout*/
import Layout from '../views/layout/Layout';
import LayoutWithHader from '../views/layout/LayoutWithHader';

/* error page*/
const Err404 = resolve => require([ '../views/error/404' ], resolve);
const Err401 = resolve => require([ '../views/error/401' ], resolve);

/* login*/
import Login from '../views/login/';
import authRedirect from '../views/login/authredirect';
import sendPWD from '../views/login/sendpwd';
import reset from '../views/login/reset';


// dashboard
import dashboard from '../views/dashboard/index';

const overview = resolve => require([ '../views/reports/overview' ], resolve);
const jihua = resolve => require([ '../views/reports/jihua' ], resolve);
const qudao = resolve => require([ '../views/reports/qudao' ], resolve);
const danyuan = resolve => require([ '../views/reports/danyuan' ], resolve);
const keyword = resolve => require([ '../views/reports/keyword' ], resolve);
//管理
/* 推广管理 */
const blacklist = resolve => require([ '../views/adtools/blacklist' ], resolve);

/* 智能调价 */
const planset = resolve => require([ '../views/ai/planset' ], resolve);

/* 异常监控 */
const illegal = resolve => require([ '../views/monitor/illegal' ], resolve);
const taskDay = resolve => require([ '../views/monitor/task_day' ], resolve);

/* 用户设置 */
const passwordSet = resolve => require([ '../views/user/password' ], resolve);


/* 数据分析 */
const dailyAnalysis = resolve => require([ '../views/data/analysis/daily' ], resolve);
const compareAnalysis = resolve => require([ '../views/data/analysis/compare' ], resolve);
/*月任务*/
const task_month = resolve => require([ '../views/task/task_month' ], resolve);
/*账户管理*/
const accountgl = resolve => require([ '../views/manager/accountgl' ], resolve);
/*渠道管理*/
const qudaoguanli = resolve => require([ '../views/manager/qudaoguanli' ], resolve);
/*客户管理*/
const kehuguanli = resolve => require([ '../views/manager/kehuguanli' ], resolve);
/*用户管理*/
const yonghuguanli = resolve => require([ '../views/manager/yonghuguanli' ], resolve);
/*分配账户*/
const fenpeizhanghu = resolve => require([ '../views/manager/fenpeizhanghu' ], resolve);
Vue.use(Router);

/**
 * icon :the icon show in the sidebar
 * hidden: if hiddenLtrue will not show in the sidebar
 * redirect :if redirect:noredirect will not redirct in the levelbar
 * noDropdown : if noDropdown:true will not has submenu
 * meta: { role: ['admin'] }  will control the page role
 */
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/login', component: Login, hidden: true },
    { path: '/authredirect', component: authRedirect, hidden: true },
    { path: '/sendpwd', component: sendPWD, hidden: true },
    { path: '/reset', component: reset, hidden: true },
    { path: '/404', component: Err404, hidden: true },
    { path: '/401', component: Err401, hidden: true },
    {
      path: '/',
      component: Login,
      name: 'index',
      meta: {title: '首页'},
      hidden: true,
    },
    {
      path: '/dashboard',
      component: dashboard,
      name: 'dashboard',
      hidden: true,
      meta: { title: '总览',role: true }
    },
    {
      path: '/account',
      component: LayoutWithHader,
      redirect: '/account/reports/overview',
      meta: {title: '账户'},
      icon: 'zujian',
      children: [
        {
          path: 'reports',
          component: Layout,
          redirect: '/reports/index',
          meta: {title: '数据日报'},
          icon: 'zujian',
          children: [
            { path: 'overview', component: overview, meta: {title: '概览'}, name:'overview' },
            { path: 'campaign', component: jihua, meta: {title: '计划'}, name:'campaign' },
            { path: 'adgroup', component: danyuan, meta: {title: '单元'}, name:'adgroup'},
            { path: 'keyword', component: keyword, meta: {title: '关键词'}, name:'keyword' },
            { path: 'qudao', component: qudao, meta: {title: '渠道'}, name:'qudao' },
            { path: 'landpage', component: overview, meta: {title: '头像上传'}, name:'landpage' },
          ]
        },
        {
          path: 'adtools',
          component: Layout,
          redirect: '/adtools/index',
          meta: {title: '推广管理'},
          icon: 'zujian',
          children: [
            { path: 'blacklist', component: blacklist, meta: {title: '黑名单 '}, name:'blacklist' },
          ]
        },
        {
          path: 'ai',
          component: Layout,
          redirect: '/ai/index',
          meta: {title: '智能调价'},
          icon: 'zujian',
          children: [
            { path: 'planset', component: planset, meta: {title: '计划设置 '}, name:'planset' },
          ]
        }
      ]
    },
    {
      path: '/manager',
      component: LayoutWithHader,
      redirect: '/manager/monitor/illegal',
      meta: {title: '管理'},
      icon: 'zujian',
      children: [
        {
          path: 'monitor',
          component: Layout,
          redirect: '/monitor/index',
          meta: {title: '异常监控'},
          icon: 'zujian',
          children: [
            { path: 'illegal', component: illegal, meta: {title: '违规检查'}, name:'illegal' },
            { path: 'daily/check', component: taskDay, meta: {title: '每日检查'}, name:'daily_check' },
          ]
        },
        {
          path: 'task',
          component: Layout,
          redirect: '/monitor/index',
          meta: {title: '任务管理'},
          icon: 'zujian',
          children: [
            { path: 'task_month', component: task_month, meta: {title: '月任务'}, name:'task_month' },
          ]
        },
        {
          path: 'users',
          component: Layout,
          redirect: '/monitor/index',
          meta: {title: '用户管理'},
          icon: 'zujian',
          children: [
            { path: 'accountgl', component: accountgl, meta: {title: '账户管理'}, name:'accountgl' },
            { path: 'qudaoguanli', component: qudaoguanli, meta: {title: '渠道管理'}, name:'qudaoguanli' },
            { path: 'kehuguanli', component: kehuguanli, meta: {title: '客户管理'}, name:'kehuguanli' },
            { path: 'yonghuguanli', component: yonghuguanli, meta: {title: '用户管理'}, name:'yonghuguanli' },
            { path: 'fenpeizhanghu', component: fenpeizhanghu, meta: {title: '分配账户'}, name:'fenpeizhanghu' },
          ]
        },
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
});
