/**
 * Created by wang on 2017/5/27.
 */
import { fetch } from 'utils/fetch';

export function getOther(id) {
  return fetch({
    url: '/landpage/other',
    method: 'get',
    params: { id }
  });
}

export function getBaiduOther(id) {
  return fetch({
    url: '/landpage/otherbaidu',
    method: 'get',
    params: { id }
  });
}

export function getAll(id) {
  return fetch({
    url: '/landpage/all',
    method: 'get',
    params: { id }
  });
}

export function getPageRate(id) {
  return fetch({
    url: '/landpage/pagerate',
    method: 'get',
    params: { id }
  });
}

export function getLink(id) {
  return fetch({
    url: '/link/find',
    method: 'get',
    params: { id }
  });
}

export function getWeekPv(id) {
  return fetch({
    url: '/landpage/weekpr',
    method: 'get',
    params: { id }
  });
}

export function exportQudao(id) {
  return fetch({
    url: '/landpage/out',
    method: 'get',
    params: { id }
  });
}

export function getPv(id) {
  return fetch({
    url: '/landpage/zhpv',
    method: 'get',
    params: { id }
  });
}

export function getDownload(id) {
  return fetch({
    url: '/landpage/zhdl',
    method: 'get',
    params: { id }
  });
}

export function getUv(id) {
  return fetch({
    url: '/landpage/zhuv',
    method: 'get',
    params: { id }
  });
}