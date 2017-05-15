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

