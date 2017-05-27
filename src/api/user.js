/**
 * Created by wang on 2017/5/27.
 */
import { fetch } from 'utils/fetch';

export function getUserById(id) {
  return fetch({
    url: '/user/userId',
    method: 'get',
    params: { id }
  });
}

export function setSemAccount(id) {
  return fetch({
    url: '/sem/setzhxx',
    method: 'get',
    params: { id }
  });
}

export function getSemAccount(id) {
  return fetch({
    url: '/sem/getzhxx',
    method: 'get',
    params: { id }
  });
}

export function getZu(id) {
  return fetch({
    url: '/sem/getzu',
    method: 'get',
    params: { id }
  });
}

export function getZuAndUser(id) {
  return fetch({
    url: '/sem/zuanduser',
    method: 'get',
    params: { id }
  });
}

export function createZu(id) {
  return fetch({
    url: '/sem/createzu',
    method: 'get',
    params: { id }
  });
}

export function getAllSem(id) {
  return fetch({
    url: '/sem/allsem',
    method: 'get',
    params: { id }
  });
}

export function getUsersByZu(id) {
  return fetch({
    url: '/sem/getzuuser',
    method: 'get',
    params: { id }
  });
}

export function addZuUser(id) {
  return fetch({
    url: '/sem/zuadduser',
    method: 'get',
    params: { id }
  });
}

export function changeZuUser(id) {
  return fetch({
    url: '/sem/zuchangeuser',
    method: 'get',
    params: { id }
  });
}

export function delUserFromZu(id) {
  return fetch({
    url: '/sem/zudeluser',
    method: 'get',
    params: { id }
  });
}

export function semxx(id) {
  return fetch({
    url: '/sem/semxx',
    method: 'get',
    params: { id }
  });
}

export function getChangeSem(id) {
  return fetch({
    url: '/sem/changesem',
    method: 'get',
    params: { id }
  });
}

export function createUser(id) {
  return fetch({
    url: '/sem/createsem',
    method: 'get',
    params: { id }
  });
}

export function changePassword(id) {
  return fetch({
    url: '/sem/changepass',
    method: 'get',
    params: { id }
  });
}

export function getSemByAccount(id) {
  return fetch({
    url: '/sem/husemer',
    method: 'get',
    params: { id }
  });
}

export function changeSemByAccount(id) {
  return fetch({
    url: '/sem/huchangesem',
    method: 'get',
    params: { id }
  });
}

export function getAllCustomer(id) {
  return fetch({
    url: '/sem/allkehu',
    method: 'get',
    params: { id }
  });
}

export function userDTAccount(id) {
  return fetch({
    url: '/sem/userdthu',
    method: 'get',
    params: { id }
  });
}

export function test(id) {
  return fetch({
    url: '/sem/ceshi',
    method: 'get',
    params: { id }
  });
}