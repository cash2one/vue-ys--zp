/**
 * Created by wang on 2017/5/27.
 */
import { fetch } from 'utils/fetch';

export function getRate(id) {
  return fetch({
    url: '/plan/rate',
    method: 'get',
    params: { id }
  });
}

export function getAll(id) {
  return fetch({
    url: '/plan/allplan',
    method: 'get',
    params: { id }
  });
}

export function getPlan(id) {
  return fetch({
    url: '/plan/getplan',
    method: 'get',
    params: { id }
  });
}

export function getPlanByApa(id) {
  return fetch({
    url: '/apa/getplan',
    method: 'get',
    params: { id }
  });
}

export function updateActiveNum(id) {
  return fetch({
    url: '/out/upacplan',
    method: 'get',
    params: { id }
  });
}

export function updateActiveNum(id) {
  return fetch({
    url: '/unit/getunit',
    method: 'get',
    params: { id }
  });
}