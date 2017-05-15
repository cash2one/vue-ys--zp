const accountList = [ {
  "name": "省呗",
  "appid": "yetnalv9w9w6wdjzvinukgldirtdpywy",
  "id": 242,
  "type": 110102,
  "account_status": 1,
  "icon": "http://test.yushan.mobi//icon/icon.jpg",
  "account_name": "原生-萨摩耶a2170751",
  "auto": "off",
  "mobileBalance": 0,
  "yesterdayCost": 0,
  "monthCost": 0
}, {
  "name": "挖财系-原生",
  "appid": "ugyf1bgz7rcq58kawjzepzaorhtusnql",
  "id": 239,
  "type": 110102,
  "account_status": 1,
  "icon": "http://test.yushan.mobi//icon/icon.jpg",
  "account_name": "原生-友和bb2170650",
  "auto": "off",
  "mobileBalance": 0,
  "yesterdayCost": 0,
  "monthCost": 0
}, {
  "name": "省呗",
  "appid": "yj7t7xlsqevqsk007gaw6ogvi17c3z97",
  "id": 241,
  "type": 110102,
  "account_status": 1,
  "icon": "http://test.yushan.mobi//icon/icon.jpg",
  "account_name": "原生-萨摩耶2170199",
  "auto": "off",
  "mobileBalance": 0,
  "yesterdayCost": 0,
  "monthCost": 0
}, {
  "name": "婚礼纪",
  "appid": "lzBKAAwcaymdFuBIdAfOQIaxPlOTBUUg",
  "id": 4080,
  "type": 110102,
  "account_status": 1,
  "icon": "http://test.yushan.mobi//icon/icon.jpg",
  "account_name": "原生-火烧云2164837",
  "auto": "off",
  "mobileBalance": 0,
  "yesterdayCost": 0,
  "monthCost": 0
}, {
  "name": "埃克伦斯",
  "appid": "jkgodtZBFUxQrbxrmOHicFqDxMNuGITT",
  "id": 4084,
  "type": 110102,
  "account_status": 1,
  "icon": "http://test.yushan.mobi//icon/icon.jpg",
  "account_name": "原生-天聚力合2165371",
  "auto": "off",
  "mobileBalance": 0,
  "yesterdayCost": 0,
  "monthCost": 0
}, {
  "name": "功夫贷",
  "appid": "TQgFAniCpBYPCxHEKCVklATIYyEhtemp",
  "id": 4081,
  "type": 110102,
  "account_status": 1,
  "icon": "http://test.yushan.mobi//icon/icon.jpg",
  "account_name": "原生-杭州大树2164888",
  "auto": "off",
  "mobileBalance": 0,
  "yesterdayCost": 0,
  "monthCost": 0
}, {
  "name": "懂球帝-原生",
  "appid": "yFmHBknbDnrDvxeQrvRdLMoOtzDYcFhV",
  "id": 4070,
  "type": 110102,
  "account_status": 1,
  "icon": "http://test.yushan.mobi//icon/icon.jpg",
  "account_name": "原生-多格2164764",
  "auto": "off",
  "mobileBalance": 0,
  "yesterdayCost": 0,
  "monthCost": 0
}, {
  "name": "数码",
  "appid": "mifnmrv42hjkrzmzma5jqbyb9divs68i",
  "id": 263,
  "type": 110102,
  "account_status": 1,
  "icon": "http://test.yushan.mobi//icon/icon.jpg",
  "account_name": "原生-谋士t2170721",
  "auto": "off",
  "mobileBalance": 0,
  "yesterdayCost": 0,
  "monthCost": 0
}, {
  "name": "乾程泰",
  "appid": "qykkqqe0wua0zcy9eqwr8uxr1loqnzwj",
  "id": 260,
  "type": 110102,
  "account_status": 1,
  "icon": "http://test.yushan.mobi//icon/icon.jpg",
  "account_name": "原生-智道未来q2170652",
  "auto": "off",
  "mobileBalance": 0,
  "yesterdayCost": 0,
  "monthCost": 0
} ];
const tableData3=[{"name":"其他_andriod_社保查询","cost":"2766.75","cost_change":"951","pv":4805,"pv_change":1730,"change_rate":"56.3","chengben":"1.46","chengben_change":"0.13","button_cost":"52.59","button_cost_change":"13.200","view":35021,"view_change":10729,"pv_rate":"14","pv_rate_change":"1","h5_down":1804,"h5_down_change":"503","h5_down_rate":"5","h5_down_rate_change":"-0","activity":0,"activity_change":0,"activity_rate":"0.00","activity_rate_change":"0.00","activity_chengben":"Infinity","activity_chengben_change":"NaN","click_button":85,"click_button_change":25,"view_button":1364,"view_button_change":246},{"name":"呼和浩特_iOS_社保查询","cost":"4.23","cost_change":"-0","pv":7,"pv_change":-1,"change_rate":"-12.5","chengben":"4.23","chengben_change":"1.88","button_cost":"0.00","button_cost_change":"0.000","view":94,"view_change":-11,"pv_rate":"7","pv_rate_change":"-0","h5_down":1,"h5_down_change":"-1","h5_down_rate":"1","h5_down_rate_change":"-1","activity":0,"activity_change":0,"activity_rate":"0.00","activity_rate_change":"0.00","activity_chengben":"Infinity","activity_chengben_change":"NaN","click_button":0,"click_button_change":0,"view_button":6,"view_button_change":-2}]
export default {
  getAccountsByUser: config => {
    const userId = config.params;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([ 200, {
            data: accountList
          } ]);
        }, 500);
    })
  },
  plantable: config => {
    const userId = config.params;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([ 200, {
          data: tableData3
        } ]);
      }, 500);
    })
  }
};
