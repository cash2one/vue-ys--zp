import { fetch } from 'utils/fetch';

export function getAccountsByUserId(userId) {
    return fetch({
        url: '/account/userid',
        method: 'get',
        params: { userId }
    });
}

export function getWeekCost(userId) {
  return fetch({
    url: '/account/getweekcost',
    method: 'get',
    params: { userId }
  });
}

export function getTwoWeekCost(userId) {
  return fetch({
    url: '/account/twoweek',
    method: 'get',
    params: { userId }
  });
}

export function getNotice(userId) {
  return fetch({
    url: '/account/notice',
    method: 'get',
    params: { userId }
  });
}

export function getAll(userId) {
  return fetch({
    url: '/account/all',
    method: 'get',
    params: { userId }
  });
}

export function getDailyReport(userId) {
  return fetch({
    url: '/out/ribaoview',
    method: 'get',
    params: { userId }
  });
}

export function exportDailyReport(userId) {
  return fetch({
    url: '/out/ribaoout',
    method: 'post',
    params: { userId }
  });
}

export function setActiveNum(userId) {
  return fetch({
    url: '/active/set',
    method: 'post',
    params: { userId }
  });
}

export function getPay(userId) {
  return fetch({
    url: '/account/pay',
    method: 'post',
    params: { userId }
  });
}


export function getHourReport(userId) {
  return fetch({
    url: '/account/timevs',
    method: 'post',
    params: { userId }
  });
}

export function setHourActiveNum(userId) {
  return fetch({
    url: '/active/sethour',
    method: 'post',
    params: { userId }
  });
}

export function getAccount(userId) {
  return fetch({
    url: '/account/gethu',
    method: 'post',
    params: { userId }
  });
}

export function getAccountsBySem(userId) {
  return fetch({
    url: '/sem/getallhu',
    method: 'post',
    params: { userId }
  });
}

export function getNoSemAccounts(userId) {
  return fetch({
    url: '/sem/nouserhu',
    method: 'post',
    params: { userId }
  });
}

export function addAccountToSem(userId) {
  return fetch({
    url: '/sem/useraddhu',
    method: 'post',
    params: { userId }
  });
}

export function delAccountFromSem(userId) {
  return fetch({
    url: '/sem/userdelhu',
    method: 'post',
    params: { userId }
  });
}

export function createAccount(userId) {
  return fetch({
    url: '/sem/createhu',
    method: 'post',
    params: { userId }
  });
}

export function updateStatus(userId) {
  return fetch({
    url: '/sem/upstatus',
    method: 'post',
    params: { userId }
  });
}

export function updateActiveNum(userId) {
  return fetch({
    url: '/out/upacall',
    method: 'post',
    params: { userId }
  });
}


export function setCost(userId) {
  return fetch({
    url: '/account/setcost',
    method: 'post',
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

export function setCostOneDay(userId) {
  return fetch({
    url: '/account/setcostone',
    method: 'post',
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
