/**
 * Created by wang on 2017/5/27.
 */
import { fetch } from 'utils/fetch';
export function getRate(id) {
  return fetch({
    url: '/unit/rate',
    method: 'get',
    params: { id }
  });
}
export function getAll(id) {
  return fetch({
    url: '/unit/allunit',
    method: 'get',
    params: { id }
  });
}