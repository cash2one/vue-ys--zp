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
//渠道
export function getlandpageAll(userId) {
    return fetch({
        url: '/landpage/all',
        method: 'get',
        params: { userId }
    });
}
//每日任务-每日检查
export function getcheck(userId) {
    return fetch({
        url: '/sem/getcheck',
        method: 'get',
        params: { userId }
    });
}
//每日任务-每日检查-历史记录
export function checkhistory(userId) {
    return fetch({
        url: '/sem/checkhistory',
        method: 'get',
        params: { userId }
    });
}
//月任务-每周任务
export function getwtask(userId) {
    return fetch({
        url: '/sem/getwtask',
        method: 'get',
        params: { userId }
    });
}
//月任务-月任务
export function getmtask(userId) {
    return fetch({
        url: '/sem/getmtask',
        method: 'get',
        params: { userId }
    });
}


//sem
export function getzuanduser(userId) {
    return fetch({
        url: '/sem/zuanduser',
        method: 'get',
        params: { userId }
    });
}

//用户管理
export function Allyonghu(userId) {
    return fetch({
        url: '/sem/allsem',
        method: 'get',
        params: { userId }
    });
}
//全账户
export function Allhu(userId) {
    return fetch({
        url: '/sem/allsem',
        method: 'get',
        params: { userId }
    });
}
//全部客户 渠道管理  客户管理
export function Allkehu(userId) {
    return fetch({
        url: '/sem/allkehu',
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
export function getHu(userId) {
    return fetch({
        url: '/sem/getallhu',
        method: 'get',
        params: { userId }
    });
}

