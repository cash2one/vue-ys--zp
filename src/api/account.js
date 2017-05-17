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

