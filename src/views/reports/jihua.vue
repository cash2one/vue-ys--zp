<template>
    <el-row id="app">
        <el-col :span="24" class="gailan">
            <el-col :span='24' class="gailan-toubiao">
                各计划消费占比
            </el-col>
            <el-col :span='24' class="gailan-zhi">
                <el-col :span='24' style="margin-top: 30px;">
                    <div style="float: left">
                        <el-radio-group v-model="radio3">
                            <el-radio-button v-on:click='g1' label="消费占比"></el-radio-button>
                            <el-radio-button v-on:click='g2' label="计划分布"></el-radio-button>
                        </el-radio-group>
                        <!--<div class="lav-li" style="display: inline-block">
                            <span class="la1 clink">消费占比</span><span class="la2">计划分布</span>
                        </div>-->
                    </div>
                    <div style="float: right;margin-right: 50px;">
                        <!--<el-select v-model="value"  placeholder="请选择" style="display: none">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>-->
                        <select class="trim" style="display: none;">
                            <option value="0">展现 消费</option>
                            <option value="1">展现 点击</option>
                            <option value="2">展现 下载</option>
                            <option value="3">消费 下载</option>
                        </select>
                        <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期"
                                @change="date"
                                :picker-options="pickerOptions0">
                        </el-date-picker>
                        <!--<input type="text" readonly style="width: 150px;" name="birthday" class="birthday form-control" />-->
                    </div>
                </el-col>
                <el-col :span="24" class="col-xs-12 tol1" id="main"  style="height:400px;"></el-col>
                <!--<div class="col-xs-12 tol2" id="main1"  style="height:300px;"></div>-->
            </el-col>
        </el-col>
        <el-col :span='24' class="gailan" style="margin-top: 30px;">
            <el-col :span='24' class="gailan-toubiao">
                各计划数据统计
            </el-col>
            <el-col :span='24' class="gailan-zhi" id="users">
                <el-col :span='24' style="margin-top: 30px;">
                    <el-radio-group v-model="radio2">
                        <el-radio-button label="下载"></el-radio-button>
                        <el-radio-button label="激活"></el-radio-button>
                    </el-radio-group>
                   <!-- <div class="nav-li" style="display: inline-block">
                        <span class="li1 clink">下载</span><span class="li2">激活</span>
                    </div>-->
                    <!--<div class="searchs" style="display: inline-block;">
                        <input type="text" placeholder="Search" class="search"/>
                        <span class="glyphicon glyphicon-search" style="color:#666;"></span>
                    </div>-->
                </el-col>
                <el-col :span='24' style="margin-top: 30px;" id="tb">
                    <el-table
                            :data="tableData3"
                            height="250"
                            border
                            :default-sort = "{prop: 'name', order: 'descending'}"
                            style="width: 100%">
                        <el-table-column
                                prop="name"
                                sortable
                                label="计划">
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="消费变动">
                            <template scope="scope">
                                <el-col :span='24' class="cost1" style="font-weight:bold;">
                                    {{ scope.row.cost }}
                                </el-col>
                                <el-col :span='24' class="cost2" style="font-size: 12px;" v-html="scope.row.cost_change">
                                </el-col>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="展示变动">
                            <template scope="scope">
                                <el-col :span='24' class="cost1" style="font-weight:bold;">{{ scope.row.view }}
                                </el-col>
                                <el-col :span='24' class="view2" style="font-size: 12px;" v-html="scope.row.view_change">
                                </el-col>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="点击变动">
                            <template scope="scope">
                                <el-col :span='12' class="" style="padding: 0;">
                                      <p class="col-xs-12 cost1" style="font-weight:bold;"v-html="scope.row.pv"></p>
                                      <p class="col-xs-12 pv2" style="font-size: 12px;" v-html="scope.row.pv_change"></p>
                                </el-col>
                                <el-col :span='12' class=""  style="padding: 0;">
                                     <p class="col-xs-12 pv1" style="font-weight:bold;" > <span v-html="scope.row.pv_rate"></span>%</p>
                                    <p class="col-xs-12 pv2" style="font-size: 12px;" v-html="scope.row.pv_rate_change"></p>
                                </el-col>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="下载变动">
                            <template scope="scope">
                                <el-col :span='12' class="" style="padding: 0;">
                                    <p class="col-xs-12 cost1" style="font-weight:bold;" v-html="scope.row.h5_down"></p>
                                    <p class="col-xs-12 down2" style="font-size: 12px;" v-html="scope.row.h5_down_change"></p>
                                </el-col>
                                <el-col :span='12' class=""  style="padding: 0;">
                                    <p class="col-xs-12 pv1" style="font-weight:bold;" > <span v-html="scope.row.h5_down_rate"></span>%</p>
                                    <p class="col-xs-12 down2" style="font-size: 12px;" v-html="scope.row.h5_down_rate_change"></p>
                                </el-col>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="下载成本变动">
                            <template scope="scope">
                                <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.chengben }}
                                </p>
                                <p class="col-xs-12 down1" v-html="scope.row.chengben_change" style="font-size: 12px;">
                                </p>
                            </template>
                        </el-table-column>
                        <el-table-column
                                style="display: none"
                                class="a2"
                                sortable
                                label="激活变动">
                            <template scope="scope">
                                <el-col :span='12' class="" style="padding: 0;">
                                    <p class="col-xs-12 cost1" style="font-weight:bold;" v-html="scope.row.activity"></p>
                                    <p class="col-xs-12 active2" style="font-size: 12px;" v-html="scope.row.activity_change"></p>
                                </el-col>
                                <el-col :span='12' class=""  style="padding: 0;">
                                    <p class="col-xs-12 pv1" style="font-weight:bold;" > <span v-html="scope.row.activity_rate"></span>%</p>
                                    <p class="col-xs-12 active2" style="font-size: 12px;" v-html="scope.row.activity_rate_change"></p>
                                </el-col>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                style="display: none"
                                sortable
                                label="激活成本变动">
                            <template scope="scope">
                                <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.activity_chengben }}
                                </p>
                                <p class="col-xs-12 active1" v-html="scope.row.activity_chengben_change" style="font-size: 12px;">
                                </p>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="按钮消费">
                            <template scope="scope">
                                <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.button_cost }}
                                </p>
                                <p class="col-xs-12 btn_cost1" v-html="scope.row.button_cost_change" style="font-size: 12px;">
                                </p>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="按钮展现">
                            <template scope="scope">
                                <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.view_button }}
                                </p>
                                <p class="col-xs-12 btn_cost1" v-html="scope.row.view_button_change" style="font-size: 12px;">
                                </p>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="按钮下载">
                            <template scope="scope">
                                <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.click_button }}
                                </p>
                                <p class="col-xs-12 btn_cost1" v-html="scope.row.click_button_change" style="font-size: 12px;">
                                </p>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-col>
        </el-col>
        </el-row>
</template>
<script>
  import { mapGetters } from 'vuex';
  import Vue from 'vue';
  import { getPlanTable } from 'api/account';
  const echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/pie');
  require('echarts/lib/chart/line');
  require('echarts/lib/chart/scatter')
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/lib/component/legend');

  let tit;
  let all;
  let arr_legend = [];
  let arr_cost = [];

  function renderSinglePie(legend, cost) {
    var lin = [];
    var total = 0;
    for (var j in cost) {
      total += parseFloat(cost[j]);
    }
    var total1 = parseInt(total * 0.1);
    for (var i = 0; i < cost.length; i++) {
      if (cost[i] < 20) {
        lin[i] = {
          value: cost[i],
          name: '其他'
        }
      } else if (cost[i] < total1) {
        lin[i] = {
          value: cost[i],
          name: legend[i],
        }
      } else {
        lin[i] = {
          value: cost[i],
          name: legend[i],
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: '{d}%',
                position: 'outer',
              },
              labelLine: {
                show: true,
              }
            }
          }
        }
      }

    }
    return lin;
  }
  function renderPie(tit, legend, cost) {
    console.log(legend)
    var legends = [];
    var a = [];
    var datas =renderSinglePie(legend, cost);
    var date = 0;
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].name == '其他') {
        date += parseFloat(datas[i].value);
        continue;
      } else {
        a.push(datas[i])
      }
    }
    if (date != 0) {
      var l = {
        value: date,
        name: '其他',
      };
      a.push(l)
    }
    for (let j = 0; j < a.length; j++) {
      legends.push(a[j].name)
    }
    console.log(legends)
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      grid:{
        left:10,
        bottom:20,
      },
      legend: {
        orient: 'vertical',
        data: legends,
        x: 'right',
        y: 'top'
      },
      series: [
        {
          name: '面积模式',
          type: 'pie',
          radius: '40%',
          center: ['30%', '40%'],
          data: a,
          itemStyle: {
            normal: {
              label: {
                show: false,
                formatter: "{d}%",
                position: 'inner'
              },
              labelLine: {
                show: false
              }
            },
            emphasis: {
              label: {
                show: true,
                formatter: "{d}%",
                position: 'inner'
              },
//                                            radius : '40%',
              labelLine: {
                show: false
              },
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    },false);
  }
  function renderS(data,who) {
    console.log(data);
    let scatter=[];
    let x;
    let y;
    if(who==0){
      for(let i=0;i<data.length;i++){
        scatter[i]=[];
        scatter[i].push(data[i].cost);
        scatter[i].push(data[i].view);
        scatter[i].push(data[i].name);
      }
      x='消费';
      y='展现';
    }else if(who==1){
      for(let i=0;i<data.length;i++){
        scatter[i]=[];
        scatter[i].push(data[i].pv);
        scatter[i].push(data[i].view);
        scatter[i].push(data[i].name);
      }
      x='点击';
      y='展现';
    }else if(who==2){
      for(let i=0;i<data.length;i++){
        scatter[i]=[];
        scatter[i].push(data[i].h5_down);
        scatter[i].push(data[i].view);
        scatter[i].push(data[i].name);
      }
      x='下载';
      y='展现';
    }else if(who==3){
      for(let i=0;i<data.length;i++){
        scatter[i]=[];
        scatter[i].push(data[i].h5_down);
        scatter[i].push(data[i].cost);
        scatter[i].push(data[i].name);
      }
      x='下载';
      y='消费';
    }

    console.log(scatter);
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
      grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
      },
      tooltip : {
        trigger: 'item',
        showDelay : 0,
        formatter : function (params) {
          if (params.value.length > 1) {
            return params.value[2] + ' :<br/>（'
              + params.value[0] + '， '
              + params.value[1] + '） ';
          }else {
            return params.value[2] + ' :<br/>'
              + params.name + ' : '
              + params.value ;
          }
        },

      },

      brush: {
      },
      legend: {
        data: ['计划'],
        left: 'center'
      },
      xAxis : [
        {
          name:x,
          type : 'value',
          scale:true,
            /*axisLabel : {
             formatter: '{value} 元'
             },*/
          splitLine:{
            show:false,
          },
          axisLine:{
            show:false,
          },
          axisTick:{
            show:false,
          },
          axisLabel:{
            textStyle:{
              color:'#3b4e61',
              fontSize:14,
            },
          }
        }
      ],
      yAxis : [
        {
          name:y,
          type : 'value',
          scale:true,
          axisLine:{
            show:false,
          },
          axisTick:{
            show:false,
          },
          axisLabel:{
            textStyle:{
              color:'#3b4e61',
              fontSize:14,
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#dfe1e4',
              type: 'solid',
              width: 1,
            },
          },
        }
      ],
      series : [
        {
          name:'对比',
          type:'scatter',
          data: scatter,

        },

      ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    },false);
  }

  function getDateStr(AddDayCount){
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;
    var d = dd.getDate();
    if (m < 10) {
      m = "0" + m;
    }
    if (d < 10) {
      d = "0" + d;
    }
    return y+"-"+m+"-"+d;
  }
    export default {
        data() {
            return {

              options: [{
                value: '0',
                label: '展现 消费'
              }, {
                value: '1',
                label: '展现 点击'
              }, {
                value: '2',
                label: '展现 下载'
              }, {
                value: '3',
                label: '消费 下载'
              }],
              radio3: '消费占比',
              radio2: '下载',
              pickerOptions0: {
                disabledDate(time) {
                  return time.getTime() > Date.now() ;//不算今天往后禁止
//                  return time.getTime() > Date.now()- 8.64e7 ;算上今天往后禁止
//                  return time.getTime() < Date.now()- 8.64e7 ;不算今天往前禁止
                }
              },
              tableData3:[],
              value: '0',
              value1:getDateStr(-1),
            }
        } ,
      methods:{
        date:function () {
//          alert(this.value1);
          getPlanTable({uid:111}).then(response => {
            console.log(response);
            all=response.data
            tit='各计划消费占比';
            arr_legend=[];
            arr_cost=[];
            for (var i = 0; i < response.data.length; i++) {
              arr_legend.push(response.data[i].name);

              arr_cost.push(response.data[i].cost);
              if (response.data[i].cost_change < 0) {
                response.data[i].cost_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].cost_change) + '<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].cost_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].cost_change) + '<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].view_change < 0) {
                response.data[i].view_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].view_change) + '<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].view_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].view_change) + '<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].pv_change < 0) {
                response.data[i].pv_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].pv_change) + '<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].pv_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].pv_change) + '<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].chengben_change < 0) {
                response.data[i].chengben_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].chengben_change) + '<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].chengben_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].chengben_change) + '<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].button_cost_change < 0) {
                response.data[i].button_cost_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].button_cost_change) + '<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].button_cost_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].button_cost_change) + '<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].pv_rate_change < 0) {
                response.data[i].pv_rate_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].pv_rate_change) + '%<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].pv_rate_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].pv_rate_change) + '%<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].h5_down_change < 0) {
                response.data[i].h5_down_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].h5_down_change) + '<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].h5_down_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].h5_down_change) + '<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].h5_down_rate_change < 0) {
                response.data[i].h5_down_rate_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].h5_down_rate_change) + '%<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].h5_down_rate_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].h5_down_rate_change) + '%<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].activity_change < 0) {
                response.data[i].activity_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].activity_change) + '<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].activity_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].activity_change) + '<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].activity_chengben_change < 0) {
                response.data[i].activity_chengben_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].activity_chengben_change) + '<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].activity_chengben_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].activity_chengben_change) + '<i class="iconfont">&#xe680;</i></span>';
              }
              if (response.data[i].activity_rate_change < 0) {
                response.data[i].activity_rate_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].activity_rate_change) + '%<i class="iconfont">&#xe681;</i></span>';
              } else {
                response.data[i].activity_rate_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].activity_rate_change) + '%<i class="iconfont">&#xe680;</i></span>';
              }
              if(response.data[i].click_button_change<0){
                response.data[i].click_button_change='<span style="color: #48c9b0 !important;">'+Math.abs(response.data[i].baidu_click_button_change)+'<i class="iconfont">&#xe681;</i></span>';
              }else{
                response.data[i].click_button_change='<span style="color: #EC5A55 !important;">'+Math.abs(response.data[i].baidu_click_button_change)+'<i class="iconfont">&#xe680;</i></span>';
              }
              if(response.data[i].view_button_change<0){
                response.data[i].view_button_change='<span style="color: #48c9b0 !important;">'+Math.abs(response.data[i].baidu_view_button_change)+'<i class="iconfont">&#xe681;</i></span>';
              }else{
                response.data[i].view_button_change='<span style="color: #EC5A55 !important;">'+Math.abs(response.data[i].baidu_view_button_change)+'<i class="iconfont">&#xe680;</i></span>';
              }
            }
//          console.log(arr_legend)
//          console.log(arr_cost)
            this.tableData3=response.data;
            renderPie(tit, arr_legend, arr_cost);
//          let myChart = this.$echarts.init(document.getElementById('myChart'))
              /*   _self.loading = false;
               ;*/

          }).catch(err => {
            this.$message.error(err);
//                  _self.loading = false;
          });
        },
        g1:function () {
          renderPie(tit, arr_legend, arr_cost);

        },
        g2:function () {
          renderS(all,$('.trim').val());
        }
      },
     created(){
       getPlanTable({uid:111}).then(response => {
         console.log(response);
         all=response.data
         tit='各计划消费占比';
         arr_legend=[];
         arr_cost=[];
         for (var i = 0; i < response.data.length; i++) {
           arr_legend.push(response.data[i].name);

           arr_cost.push(response.data[i].cost);
           if (response.data[i].cost_change < 0) {
             response.data[i].cost_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].cost_change) + '<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].cost_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].cost_change) + '<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].view_change < 0) {
             response.data[i].view_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].view_change) + '<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].view_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].view_change) + '<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].pv_change < 0) {
             response.data[i].pv_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].pv_change) + '<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].pv_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].pv_change) + '<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].chengben_change < 0) {
             response.data[i].chengben_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].chengben_change) + '<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].chengben_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].chengben_change) + '<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].button_cost_change < 0) {
             response.data[i].button_cost_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].button_cost_change) + '<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].button_cost_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].button_cost_change) + '<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].pv_rate_change < 0) {
             response.data[i].pv_rate_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].pv_rate_change) + '%<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].pv_rate_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].pv_rate_change) + '%<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].h5_down_change < 0) {
             response.data[i].h5_down_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].h5_down_change) + '<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].h5_down_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].h5_down_change) + '<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].h5_down_rate_change < 0) {
             response.data[i].h5_down_rate_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].h5_down_rate_change) + '%<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].h5_down_rate_change = '<span style="color: #EC5A55 !important;">' + Math.abs(response.data[i].h5_down_rate_change) + '%<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].activity_change < 0) {
             response.data[i].activity_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].activity_change) + '<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].activity_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].activity_change) + '<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].activity_chengben_change < 0) {
             response.data[i].activity_chengben_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].activity_chengben_change) + '<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].activity_chengben_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].activity_chengben_change) + '<i class="iconfont">&#xe680;</i></span>';
           }
           if (response.data[i].activity_rate_change < 0) {
             response.data[i].activity_rate_change = '<span style="color: #48c9b0 !important;">' + Math.abs(response.data[i].activity_rate_change) + '%<i class="iconfont">&#xe681;</i></span>';
           } else {
             response.data[i].activity_rate_change = '<span style="color: #EC5A55 !important;">' +Math.abs(response.data[i].activity_rate_change) + '%<i class="iconfont">&#xe680;</i></span>';
           }
           if(response.data[i].click_button_change<0){
             response.data[i].click_button_change='<span style="color: #48c9b0 !important;">'+Math.abs(response.data[i].baidu_click_button_change)+'<i class="iconfont">&#xe681;</i></span>';
           }else{
             response.data[i].click_button_change='<span style="color: #EC5A55 !important;">'+Math.abs(response.data[i].baidu_click_button_change)+'<i class="iconfont">&#xe680;</i></span>';
           }
           if(response.data[i].view_button_change<0){
             response.data[i].view_button_change='<span style="color: #48c9b0 !important;">'+Math.abs(response.data[i].baidu_view_button_change)+'<i class="iconfont">&#xe681;</i></span>';
           }else{
             response.data[i].view_button_change='<span style="color: #EC5A55 !important;">'+Math.abs(response.data[i].baidu_view_button_change)+'<i class="iconfont">&#xe680;</i></span>';
           }
         }
//          console.log(arr_legend)
//          console.log(arr_cost)
         this.tableData3=response.data;
         renderPie(tit, arr_legend, arr_cost);
//          let myChart = this.$echarts.init(document.getElementById('myChart'))
           /*   _self.loading = false;
            ;*/

       }).catch(err => {
         this.$message.error(err);
//                  _self.loading = false;
       });
      },
    /*  created:function(){
        var _self=this;


      }*/
    }

</script>
<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";


    html{
        background:#f5f7f9;
    }
    .el-radio-button__inner{
        width:120px;
    }
    #page-wrapper{
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    table .iconfont{
        font-family:"iconfont" !important;
        font-size:12px;font-style:normal;
        -webkit-transform: scale(.6);
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .gailan{
        padding: 0;
        box-shadow: 0px 0px 6px #d9d9d9;
    }
    .gailan-toubiao{
        border-bottom: 1px solid #ebebeb;
        padding-top: 10px;
        padding-bottom: 10px;
        background: #fafbfc;
        font-size: 14px;
        color: #3b4161;
        font-family: 'Microsoft YaHei';
    }
    .gailan-zhi{
        padding:0;
        background: #fff;
        padding-bottom: 30px;
    }
    .li1,.la1{
        display: inline-block;
        width: 110px;
        text-align: center;
        color: #00b7ee;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        border-top: 1px solid #00b7ee;
        border-left: 1px solid #00b7ee;
        border-bottom: 1px solid #00b7ee;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
    .li2,.la2{
        display: inline-block;
        width: 110px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        color: #00b7ee;
        cursor: pointer;
        border: 1px solid #00b7ee;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
    .clink{
        color: #fff;
        background: #01b7ee;
    }
    .search{
        margin-left: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ddd;
        padding-left: 15px;
        padding-right: 40px;
        line-height: 30px;
        width: 220px;
    }
    .glyphicon {
        left: -30px;
        position: relative;
        top: 1px;
        display: inline-block;
        font-family: Glyphicons Halflings;
        font-style: normal;
        font-weight: 400;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .calendar .glyphicon {
        left: 0px;
        position: relative;
        top: 1px;
        display: inline-block;
        font-family: Glyphicons Halflings;
        font-style: normal;
        font-weight: 400;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .trim{
        border: solid 1px #dfe1e4;
        /*background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;*/
        padding-right: 14px;
        width:150px;
        padding-left: 10px;
        border-radius: 3px;
        height:30px;
        line-height:30px;
    }
    .daterangepicker table {
        background: #fff;
        width: 100%;
        margin: 0;
    }
/*    !*!//////////////////////////////////!*!
    #tb table thead tr{
        background: #dfe1e4;
    }
    #tb table th,#tb table td{
        font-size: 14px;
        padding-top:7px;
        padding-bottom:7px;
        color: #3b4e61;
    }
    #tb table th{

        font-weight: 500 !important;
    }
    #tb table td{
        border:solid #ddd 1px !important;
        !*border-bottom:0 !important;*!
        border-top:0 !important;
    }
    #tb table{
        border-radius: 5px;
        border-collapse:collapse;
        border:none;
    }
    #tb table tbody tr:nth-child(odd){
        background: #fff;
    }
    #tb table tbody tr:nth-child(even){
        background: #f5f7f9;
    }
    #tb table thead,#tb tbody tr{
        display:table;
        width:100%;
        table-layout:fixed;
    }
    #tb tbody{
        display:block;
        max-height: 500px;
        overflow-y: scroll;
    }
    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
        vertical-align: middle;
    }
    !*!//////////////////////////////////////////////!*!
    #tb table.tablesorter thead tr .tablesorter-header-inner{
        background-image: url(./images/bg1.png);
        background-size: 6px;
        background-repeat: no-repeat;
        background-position: center right;
        cursor: pointer;
    }
    #tb table.tablesorter thead tr .tablesorter-headerAsc .tablesorter-header-inner{
        background-image: url(./images/asc1.png);
    }
    #tb table.tablesorter thead tr .tablesorter-headerDesc .tablesorter-header-inner{
        background-image: url(./images/desc1.png);
    }
    !*!///////////////////////////////////////////////!*!
    #tb .col-xs-12,#tb .col-xs-7,#tb .col-xs-5{
        padding: 0;
    }*/
    .form-control {
        width: 100%;
        height: 30px;
        padding: 6px 12px;
        background-color: #fff !important;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .el-table .cell, .el-table th>div{
        padding: 0 !important;
    }

</style>


