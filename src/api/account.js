import { fetch } from 'utils/fetch';

export function getAccountsByUserId(userId) {
  return fetch({
    url: '/account/userid',
    method: 'get',
    params: { userId }
  });
}

export function getPlanTable(userId) {
  return fetch({
    url: '/plan/rate',
    method: 'get',
    params: { userId }
  });
}
export function getDanTable(userId) {
  return fetch({
    url: '/unit/getunit',
    method: 'get',
    params: { userId }
  });
}
export function getlandpageAll(userId) {
  return fetch({
    url: '/landpage/all',
    method: 'get',
    params: { userId }
  });
}
export function getillegalAll(userId) {
  return fetch({
    url: '/black/zhcheck',
    method: 'get',
    params: { userId }
  });
}
export function keyAll(userId) {
  return fetch({
    url: '/keywords/allwords',
    method: 'get',
    params: { userId }
  });
}
export function getHu(userId) {
  return fetch({
    url: '/sem/getallhu',
    method: 'get',
    params: { userId }
  });
}
export function getParam(userId) {
  return fetch({
    url: '/apa/kwrealdata',
    method: 'get',
    params: { userId }
  });
}
export function getParamkey(userId) {
    return fetch({
        url: '/apa/onekwdata',
        method: 'get',
        params: { userId }
    });
}
export function getParamkeydata(userId) {
    return fetch({
        url: '/apa/onekwdailydata',
        method: 'get',
        params: { userId }
    });
}
export function getAccountAll(userId) {
    return fetch({
        url: '/account/all',
        method: 'get',
        params: { userId }
    });
}
export function getAccountTwoWeek(userId) {
  return fetch({
    url: '/account/twoweek',
    method: 'get',
    params: { userId }
  });
}
export function getAccountOneWeek(userId) {
  return fetch({
    url: '/account/getweekcost',
    method: 'get',
    params: { userId }
  });
}
export function planvs(userId) {
  return fetch({
    url: '/apa/planvs',
    method: 'get',
    params: { userId }
  });
}
export function monitor(userId) {
  return fetch({
    url: '/apa/plandata',
    method: 'get',
    params: { userId }
  });
}
export function tiaojia(userId) {
  return fetch({
    url: '/apa/getplan',
    method: 'get',
    params: { userId }
  });
}
export function getribao(userId) {
  return fetch({
    url: '/out/ribaoview',
    method: 'get',
    params: { userId }
  });
}

