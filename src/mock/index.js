import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import loginAPI from './login';
import accountApi from './accounts';
const mock = new MockAdapter(axios);

// 登录相关
mock.onPost('/login/loginbyemail').reply(loginAPI.loginByEmail);
mock.onPost('/login/logout').reply(loginAPI.logout);
mock.onGet('/user/info').reply(loginAPI.getInfo);

mock.onGet('/account/userid').reply(accountApi.getAccountsByUser);
mock.onGet('/plan/rate').reply(accountApi.plantable);
mock.onGet('/landpage/all').reply(accountApi.landpageAll);
mock.onGet('/black/zhcheck').reply(accountApi.illegalAll);
mock.onGet('/keywords/allwords').reply(accountApi.keywordAll);
mock.onGet('/sem/getallhu').reply(accountApi.hu);
//周任务
mock.onGet('/sem/getwtask').reply(accountApi.getweek);
//全部sem
mock.onGet('/sem/zuanduser').reply(accountApi.grtsem);
//用户管理
mock.onGet('/sem/allsem').reply(accountApi.getAllyonghu);
//全部客户
mock.onGet('/sem/allkehu').reply(accountApi.getAllkehu);
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
