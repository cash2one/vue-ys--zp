/**
 * Created by wang on 2017/5/27.
 */
import { fetch } from 'utils/fetch';

export function getType(id) {
  return fetch({
    url: '/sem/gettype',
    method: 'get',
    params: { id }
  });
}

export function getQiniuToken(id) {
  return fetch({
    url: '/upfile/gettoken',
    method: 'get',
    params: { id }
  });
}

//每日任务-每日检查
export function getcheck() {
  return fetch({
    url: '/sem/getcheck',
    method: 'get',
    params:  '',
  });
}

//每日任务-每日检查-历史记录
export function checkhistory(userId) {
  return fetch({
    url: '/sem/checkhistory',
    method: 'get',
    params: userId,
  });
}
//月任务-每周任务
export function getwtask(tok) {
  return fetch({
    url: '/sem/getwtask',
    method: 'get',
    params:  tok
  });
}
//月任务-月任务
export function getmtask(userId) {
  return fetch({
    url: '/sem/getmtask',
    method: 'get',
    params:  userId
  });
}