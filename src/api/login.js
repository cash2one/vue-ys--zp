import { fetch } from 'utils/fetch';

export function LoginByEmail(tok) {

  return fetch({
    url: '/login/login',
    method: 'get',
    params: tok
  });
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}


export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

