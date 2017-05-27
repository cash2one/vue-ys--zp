import Vue from 'vue';
import Router from 'vue-router';

/* layout*/
import Layout from '../views/layout/Layout';

/* error page*/
const Err404 = resolve => require(['../views/error/404'], resolve);
const Err401 = resolve => require(['../views/error/401'], resolve);

/* login*/
import Login from '../views/login/';
import authRedirect from '../views/login/authredirect';
import sendPWD from '../views/login/sendpwd';
import reset from '../views/login/reset';


// dashboard
import dashboard from '../views/dashboard/index';

const overview = resolve => require(['../views/reports/overview'],resolve);
const jihua = resolve => require(['../views/reports/jihua'],resolve);
const qudao = resolve => require(['../views/reports/qudao'],resolve);
const danyuan= resolve => require(['../views/reports/danyuan'],resolve);
const keyword= resolve => require(['../views/reports/keyword'],resolve);
const datarate = resolve => require(['../views/reports/datarate'],resolve);
const outribao = resolve => require(['../views/reports/newribao'],resolve);
const shezhi = resolve => require(['../views/reports/shezhi'],resolve);
const tuoci = resolve => require(['../views/reports/tuoci'],resolve);
const account= resolve => require(['../views/manager/accountgl'],resolve);

//管理
/* 推广管理 */
const blacklist = resolve => require(['../views/adtools/blacklist'],resolve);

/* 智能调价 */
const planset = resolve => require(['../views/ai/planset'],resolve);
const param = resolve => require(['../views/ai/param'],resolve);
const paramkey = resolve => require(['../views/ai/paramkey'],resolve);
const tiaojia = resolve => require(['../views/ai/tiaojia'],resolve);
const tiaojiaunit = resolve => require(['../views/ai/tiaojiaunit'],resolve);
const tiaojiakey = resolve => require(['../views/ai/tiaojiakey'],resolve);

/* 异常监控 */
const illegal = resolve => require(['../views/monitor/illegal'],resolve);
const monitor = resolve => require(['../views/monitor/monitor'],resolve);
const taskDay = resolve => require(['../views/monitor/task_day'],resolve);

/* 用户设置 */
const passwordSet = resolve => require(['../views/user/password'],resolve);



/* 数据分析 */
const dailyAnalysis = resolve => require(['../views/data/analysis/daily'],resolve);
const compareAnalysis = resolve => require(['../views/data/analysis/compare'],resolve);
/*月任务*/
const task_s = resolve => require(['../views/task/task_s'],resolve);
/*账户管理*/
const accountgl = resolve => require(['../views/manager/accountgl'],resolve);
/*渠道管理*/
const qudaoguanli = resolve => require(['../views/manager/qudaoguanli'],resolve);
/*客户管理*/
const kehuguanli = resolve => require(['../views/manager/kehuguanli'],resolve);
/*用户管理*/
const yonghuguanli = resolve => require(['../views/manager/yonghuguanli'],resolve);
/*分配账户*/
const fenpeizhanghu = resolve => require(['../views/manager/fenpeizhanghu'],resolve);
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
      component: dashboard,
      name: '首页',
      hidden: true,
    },
    {
      path: '/dashboard',
      component: dashboard,
      name: '总览',
      hidden: true,
      meta: { role: true }
    },
    {
      path: '/reports',
      component: Layout,
      redirect: '/reports/index',
      name: '数据日报',
      icon: 'zujian',
      children: [
        { path: 'overview', component: overview, name: '概览 ' },
        { path: 'campaign', component: jihua, name: '计划' },
        { path: 'adgroup', component: danyuan, name: '单元' },
        { path: 'keyword', component: keyword, name: '关键词' },
        { path: 'qudao', component: qudao, name: '渠道' },
        { path: 'illegal', component: illegal, name: '违规查询' },
        { path: 'outribao', component:outribao, name: '导出日报' },
        { path: 'account', component: account, name: '账户管理' },
        { path: 'landpage', component: overview, name: '头像上传' },
        { path: 'shezhi', component: shezhi, name: '设置' },
        { path: 'tuoci', component: tuoci, name: '托词' },
      ]
    },
    {
      path: '/adtools',
      component: Layout,
      redirect: '/adtools/index',
      name: '推广管理',
      icon: 'zujian',
      children: [
        { path: 'blacklist', component: blacklist, name: '黑名单 ' },
        { path: 'datarate', component: datarate, name: '数据对比 ' },
      ]
    },
    {
      path: '/ai',
      component: Layout,
      redirect: '/ai/index',
      name: '智能调价',
      icon: 'zujian',
      children: [
        { path: 'planset', component: planset, name: '计划设置 ' },
        { path: 'param', component: param, name: '查看效果 ' },
        { path: 'tiaojia', component: tiaojia, name: '调价 ' },
        { path: 'tiaojiaunit', component: tiaojiaunit, name: '调价单元 ', hidden: true },
        { path: 'tiaojiakey', component: tiaojiakey, name: '调价关键词 ', hidden: true },
        { path: 'paramkey', component: paramkey, hidden: true },
      ]
    },
    {
      path: '/monitor',
      component: Layout,
      redirect: '/monitor/index',
      name: '异常监控',
      icon: 'zujian',
      children: [
        { path: 'illegal', component: illegal, name: '违规检查 ' },
        { path: 'monitor', component: monitor, name: '昨日数据 ' },
        { path: 'daily/check', component: taskDay, name: '每日检查 ' },
      ]
    },

    { path: '*', redirect: '/404', hidden: true }
  ]
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
            component: dashboard,
            name: '首页',
            hidden: true,
        },
        {
            path: '/dashboard',
            component: dashboard,
            name: '总览',
            hidden: true,
            meta: { role: true }
        },
        {
            path: '/reports',
            component: Layout,
            redirect: '/reports/index',
            name: '数据日报',
            icon: 'zujian',
            children: [
                { path: 'overview', component: overview, name: '概览 ' },
                { path: 'campaign', component: jihua, name: '计划' },
                { path: 'adgroup', component: danyuan, name: '单元' },
                { path: 'keyword', component: keyword, name: '关键词' },
                { path: 'qudao', component: qudao, name: '渠道' },
                { path: 'illegal', component: illegal, name: '违规查询' },
                { path: 'landpage', component: overview, name: '头像上传' },
            ]
        },
        {
            path: '/adtools',
            component: Layout,
            redirect: '/adtools/index',
            name: '推广管理',
            icon: 'zujian',
            children: [
                { path: 'blacklist', component: blacklist, name: '黑名单 ' },
            ]
        },
        {
            path: '/ai',
            component: Layout,
            redirect: '/ai/index',
            name: '智能调价',
            icon: 'zujian',
            children: [
                { path: 'planset', component: planset, name: '计划设置 ' },
            ]
        },
        {
            path: '/monitor',
            component: Layout,
            redirect: '/monitor/index',
            name: '异常监控',
            icon: 'zujian',
            children: [
                { path: 'illegal', component: illegal, name: '违规检查 ' },
                { path: 'daily/check', component: taskDay, name: '每日检查 ' },
            ]
        },
        {
            path: '/monitor',
            component: Layout,
            redirect: '/monitor/index',
            name: '任务管理',
            icon: 'zujian',
            children: [
                { path: 'task_s', component: task_s, name: '月任务 ' },
            ]
        },
        {
            path: '/monitor',
            component: Layout,
            redirect: '/monitor/index',
            name: '管理',
            icon: 'zujian',
            children: [
                { path: 'accountgl', component: accountgl, name: '账户管理 ' },
                { path: 'qudaoguanli', component: qudaoguanli, name: '渠道管理 ' },
                { path: 'kehuguanli', component: kehuguanli, name: '客户管理 ' },
                { path: 'yonghuguanli', component: yonghuguanli, name: '用户管理 ' },
                { path: 'fenpeizhanghu', component: fenpeizhanghu, name: '分配账户 ' },
            ]
        },
        { path: '*', redirect: '/404', hidden: true }
    ]
});
