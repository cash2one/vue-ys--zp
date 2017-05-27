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
mock.onGet('/unit/getunit').reply(accountApi.danyuan);
mock.onGet('/apa/kwrealdata').reply(accountApi.param);
mock.onGet('/apa/onekwdata').reply(accountApi.paramkey1);
mock.onGet('/apa/onekwdailydata').reply(accountApi.paramkey2);
mock.onGet('/account/all').reply(accountApi.accountall);
mock.onGet('/account/twoweek').reply(accountApi.twoweek);
mock.onGet('/account/getweekcost').reply(accountApi.getweekcost);
mock.onGet('/apa/planvs').reply(accountApi.plan);
mock.onGet('/apa/plandata').reply(accountApi.mondata);
mock.onGet('/apa/getplan').reply(accountApi.tiaojiaplan);
mock.onGet('/out/ribaoview').reply(accountApi.ribao);
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
