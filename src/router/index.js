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
const illegal= resolve => require(['../views/reports/illegal'],resolve);
const keyword= resolve => require(['../views/reports/keyword'],resolve);
const account= resolve => require(['../views/reports/accountgl'],resolve);
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
        { path: 'account', component: account, name: '账户管理' },
        { path: 'landpage', component: overview, name: '头像上传' },
      ]
    },

    { path: '*', redirect: '/404', hidden: true }
  ]
});
