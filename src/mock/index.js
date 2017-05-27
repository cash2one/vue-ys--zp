import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loginAPI from './login';
import accountApi from './accounts';
const mock = new MockAdapter(axios);

// 登录相关
mock.onPost('/login/login').reply(loginAPI.loginByEmail);
mock.onPost('/login/logout').reply(loginAPI.logout);
mock.onGet('/user/info').reply(loginAPI.getInfo);

mock.onGet('/account/userid').reply(accountApi.getAccountsByUser);
mock.onGet('/plan/rate').reply(accountApi.plantable);
mock.onGet('/landpage/all').reply(accountApi.landpageAll);
mock.onGet('/black/zhcheck').reply(accountApi.illegalAll);
mock.onGet('/keywords/allwords').reply(accountApi.keywordAll);
mock.onGet('/sem/getallhu').reply(accountApi.hu);
//每日检查 > 每日检查
mock.onGet('/sem/getcheck').reply(accountApi.getcheck);
//每日检查 > 历史记录
mock.onGet('/sem/checkhistory').reply(accountApi.getcheckhistory);
//全部sem
mock.onGet('/sem/zuanduser').reply(accountApi.grtsem);
//用户管理
mock.onGet('/sem/allsem').reply(accountApi.getAllyonghu);
//全部客户 type:100002  渠道管理 type 100004
mock.onGet('/sem/allkehu').reply(accountApi.grtallkehu);
//月任务 > 周任务
mock.onGet('/sem/getwtask').reply(accountApi.getweek);
//月任务 -月任务
mock.onGet('/sem/getmtask').reply(accountApi.getmtask);

// // 文章相关
// mock.onGet('/article/list').reply(articleAPI.getList);
// mock.onGet('/article/detail').reply(articleAPI.getArticle);
//
// // table example相关
// mock.onGet('/article_table/list').reply(article_tableAPI.getList);
// mock.onGet('/article_table/pv').reply(article_tableAPI.getPv);
//
// // 搜索相关
// mock.onGet('/search/user').reply(remoteSearchAPI.searchUser);

mock.onAny().passThrough();

export default mock;
