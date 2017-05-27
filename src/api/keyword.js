/**
 * Created by wang on 2017/5/27.
 */
import { fetch } from 'utils/fetch';

export function getSearchWords(id) {
  return fetch({
    url: '/keywords/sword',
    method: 'get',
    params: { id }
  });
}

export function getTop200(id) {
  return fetch({
    url: '/keywords/top200',
    method: 'get',
    params: { id }
  });
}

export function getCount(id) {
  return fetch({
    url: '/keywords/count',
    method: 'get',
    params: { id }
  });
}

export function getParameter(id) {
  return fetch({
    url: '/keywords/parameter',
    method: 'get',
    params: { id }
  });
}

export function getWord(id) {
  return fetch({
    url: '/keywords/word',
    method: 'get',
    params: { id }
  });
}

export function tuoci(id) {
  return fetch({
    url: '/out/tuoci',
    method: 'post',
    params: { id }
  });
}

export function getAllSearch(id) {
  return fetch({
    url: '/keywords/ssc',
    method: 'get',
    params: { id }
  });
}

export function tuijian(id) {
  return fetch({
    url: '/keywords/tuijian',
    method: 'get',
    params: { id }
  });
}

export function getZong(id) {
  return fetch({
    url: '/keywords/sscasync',
    method: 'get',
    params: { id }
  });
}

export function getTuociTask(id) {
  return fetch({
    url: '/keywords/taskname',
    method: 'get',
    params: { id }
  });
}

export function getTuociTaskByName(id) {
  return fetch({
    url: '/keywords/somesscr',
    method: 'get',
    params: { id }
  });
}

export function deleteTuociTask(id) {
  return fetch({
    url: '/keywords/deletetask',
    method: 'get',
    params: { id }
  });
}

export function exportTuoci(id) {
  return fetch({
    url: '/out/tuoci',
    method: 'get',
    params: { id }
  });
}


export function setBlackList(id) {
  return fetch({
    url: '/black/setwords',
    method: 'get',
    params: { id }
  });
}

export function getBlackList(id) {
  return fetch({
    url: '/black/getwords',
    method: 'get',
    params: { id }
  });
}

export function getillegalAll(userId) {
  return fetch({
    url: '/black/zhcheck',
    method: 'get',
    params: { userId }
  });
}

export function getAllKeyword(id) {
  return fetch({
    url: '/keywords/allkw',
    method: 'get',
    params: { id }
  });
}