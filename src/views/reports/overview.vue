<template>
        <el-row>
            <el-col :span="24" class=" gailan">
                <el-col :span="24" class=" gailan-toubiao">
                        概览
                </el-col>
                <el-col :span="24" class=" gailan-zhi1">
                    <el-col :span="6" class="gailan-xiaofei">
                            <div style="border-right: 1px solid #e2e4e7;">
                                <div style="font-size: 14px;color: #3b4e61;">
                                    本月消费
                                </div>
                                <div class="month" style="font-size: 16px;color: #00b7ee;font-family: 500;margin-top: 10px;">
                                    Loading...
                                </div>
                            </div>
                    </el-col>
                    <el-col :span="6" class=" gailan-xiaofei">
                            <div style="border-right: 1px solid #e2e4e7;">
                                <div style="font-size: 14px;color: #3b4e61;">
                                    今日消费
                                </div>
                                <div class="today" style="font-size: 16px;color: #00b7ee;font-family: 500;margin-top: 10px;">
                                    Loading...
                                </div>
                            </div>
                       </el-col>
                    <el-col :span="6" class=" gailan-xiaofei">
                            <div style="border-right: 1px solid #e2e4e7;">
                                <div style="font-size: 14px;color: #3b4e61;">
                                    昨日消费
                                </div>
                                <div class="yesterday" style="font-size: 16px;color: #00b7ee;font-family: 500;margin-top: 10px;">
                                    Loading...
                                </div>
                            </div>
                    </el-col>
                    <el-col :span="6" class=" gailan-xiaofei" style="position: relative;">
                            <div style="border-right: 1px solid #e2e4e7;">
                                <div style="font-size: 14px;color: #3b4e61;">
                                    账户余额
                                    <!-- <a href="#" class="tooltip-show" data-toggle="tooltip"
                                        title="默认的 Tooltip">-->
                                    <i class="iconfont wen" style="cursor: pointer;">&#xe767;</i>
                                    <!--</a>-->
                                </div>
                                <div class="apie1" style="font-size: 16px;color: #00b7ee;font-family: 500;margin-top: 10px;">

                                    Loading...
                                </div>
                            </div>
                            <div class="jinggao">
                                您的资源仅供
                                <span style="margin-left:2px;margin-right:2px;font-weight: 500;font-size: 16px;" class="ziyuan">0</span>
                                天消费请尽快消费！
                            </div>
                    </el-col>
                </el-col>
             </el-col>
            <el-col :span="24"  style="padding: 0;margin-top: 30px;">
                <el-col :span="14" class=" duibi">
                    <el-col :span="24" class=" contin">
                        <el-col :span="24" class=" gailan-toubiao">
                                对比率
                            </el-col>
                        <el-col :span="24" class=" duibi-pie">
                            <el-col :span="8"  id="pie" style="height:450px;padding: 5px;">

                                </el-col>
                            <el-col :span="8"  id="pie1" style="height:450px;padding: 5px;">

                                </el-col>
                            <el-col :span="8"  id="pie2" style="height:450px;padding: 5px;">

                                </el-col>
                            </el-col>
                       </el-col>
                </el-col>
                <el-col :span="10" class=" zhuanhua">
                    <el-col :span="24" class=" contin">
                        <el-col :span="24" class=" gailan-toubiao">
                                转化漏斗
                            </el-col>
                            <el-col :span="24" class=" duibi-pie">
                                <el-col :span="24" id="funnel" style="height:450px;padding: 0px;">

                               </el-col>
                            </el-col>
                        </el-col>
                 </el-col>

                </el-col>
            <el-col :span="24" class=" zhexian" style="padding: 0;margin-top: 30px;margin-bottom: 30px;">
                <el-col :span="24" class=" gailan-toubiao">
                        <!--<div class="dropdown">-->
                            <!--<button type="button" class="btn1 dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" style="border: 0;background: #fafbfc;">近两周总体数据-->
                                <!--<span class="caret"></span>-->
                            <!--</button>-->
                            <!--<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">-->
                                <!--<li role="presentation">-->
                                    <!--<a role="menuitem" tabindex="-1" href="javascript:void(0)" class="near_twoweek">近两周总体数据</a>-->
                                <!--</li>-->
                                <!--<li role="presentation">-->
                                    <!--<a role="menuitem" tabindex="-1" href="javascript:void(0)" class="near_week">每周总消费趋势</a>-->
                                <!--</li>-->
                            <!--</ul>-->
                        <!--</div>-->
                    <el-select v-model="value" placeholder="请选择" @change="pine">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                   </el-col>
                <el-col :span="24" style="background: #fff;">
                    <el-col :span="24"  class="" id="mainn" style="height:500px;background: #fff;"></el-col>
                    </el-col>

               </el-col>
           </el-row>
</template>
<script>
    /*eslint-disable */
//    import { getAll,getTwoWeekCost,getWeekCost } from 'api/account';

    let flag=1;
    let currentAccount={};
    currentAccount.appid=11;
    currentAccount.type=11;
    const echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/pie');
    require('echarts/lib/chart/funnel');
    require('echarts/lib/chart/line');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    require('echarts/lib/component/legend');
    function getSeries(datas) {
      var series = [];
      for (let i = 0; i < datas.length; i++) {
        series.push({
          name: datas[i].name,
          type: 'line',
          line: '总量',
          data: datas[i].data,
          symbol: 'circle',
          symbolSize:5,
          smooth: true,
          itemStyle: {
            normal: {
              lineStyle: { // 系列级个性化折线样式，横向渐变描边
                width: 2,
              },
            },
            emphasis: {
              label: {
                show: true,
              },
            },
          },
        });

      }
      return series;
    }
    function renderLine(eleId, dates, selected1, legendData1, datas) {
      const series = getSeries(datas);
      const myChart = echarts.init(document.getElementById(eleId));
      const option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          orient: 'horizontal',
          selected: selected1,
          data: legendData1,
          right:10,
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
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

            data: dates,
          },
        ],
        yAxis: [
          {
            //                                    ,
            type: 'value',
            position: 'left',
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
          },
            /*{
             type: 'value',
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
             /!* splitLine: {
             show: true,
             lineStyle: {
             color: '#dfe1e4',
             type: 'solid',
             width: 1,
             },
             },*!/
             },*/
        ],
        series: series,
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      },false);
    }
    function renderSinglePie(eleId, data, op) {

        let placeHolderStyle = {
            normal : {
                color: '#f5f7f9',
                label: {show:false},
                labelLine: {show:false}
            },
            emphasis : {
                color: '#f5f7f9',
                label: {show:false},
                labelLine: {show:false}
            }
        };
        var myChart = echarts.init(document.getElementById(eleId));

        let option = {
            /*    tooltip : {
             show: true,
             formatter: "{a} <br/>{b} : {c} ({d}%)"
             },*/
            title:{
                text:data,
                top:'18%',
                left:'center',
                textStyle:{
                    color:'#3b4e61',
                    fontSize:14,
                    fontWeight:'normal',
                },
            },
            legend: {
                data:['今日','昨日'],
                bottom:20,
            },
            series : [
                {
                    name:'昨日',
                    hoverAnimation:false,
                    type:'pie',
                    clockWise:true,
                    radius : ['40%', '50%',],
                    itemStyle : {
                        normal: {
                            color: '#00b7ee',
                            label: {show:false},
                            labelLine: {show:false}
                        }
                    },
                    data:[
                        {
                            value:op[2],
                            label: {
                                normal : {
                                    show:true,
                                    position:'outside',
                                    formatter: '{d}%'
                                },
                                emphasis : {
                                    show:true,
                                    position:'outside',
                                },
                            },
                            labelLine: {
                                normal : {
                                    length:2,
                                    length2:4,
                                    show:true,
                                    position:'outside',

                                },
                                emphasis : {
                                    show:true,
                                    position:'outside',
                                },
                            },

                            name:'昨日对比率'
                        },
                        {
                            value:op[3],
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'今日',
                    hoverAnimation:false,
                    type:'pie',
                    clockWise:true,
                    radius : ['29%', '39%',],
                    itemStyle : {
                        normal: {
                            color: '#ec5a55',
                            label: {show:false},
                            labelLine: {show:false}
                        }
                    },
                    data:[
                        {
                            value:op[0],
                            label: {
                                normal : {
                                    show:true,
                                    position:'center',
                                    formatter: '{d}%'
                                },
                                emphasis : {
                                    show:true,
                                    position:'center',
                                },
                            },
                            labelLine: {
                                normal : {
                                    length:2,
                                    length2:4,
                                    show:true,
                                    position:'center',
                                },
                                emphasis : {
                                    show:true,
                                    position:'center',
                                },
                            },
                            name:'今日对比率'
                        },
                        {
                            value:op[1],
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        },false);
    }
   function renderPie(el) {
        let op1=[];
        let op2=[];
        let op3=[];

        op1[0]=((parseFloat(el.total_pv)/parseFloat(el.total_view))*100).toFixed(1);
        op1[1]=100-((parseFloat(el.total_pv)/parseFloat(el.total_view))*100).toFixed(1);
        op1[2]=((parseFloat(el.yestoday_total_pv)/parseFloat(el.yestoday_total_view))*100).toFixed(1);
        op1[3]=100-((parseFloat(el.yestoday_total_pv)/parseFloat(el.yestoday_total_view))*100).toFixed(1);

        op2[0]=((parseFloat(el.total_count)/parseFloat(el.total_pv))*100).toFixed(1);
        op2[1]=100-((parseFloat(el.total_count)/parseFloat(el.total_pv))*100).toFixed(1);
        op2[2]=((parseFloat(el.yestoday_total_count)/parseFloat(el.yestoday_total_pv))*100).toFixed(1);
        op2[3]=100-((parseFloat(el.yestoday_total_count)/parseFloat(el.yestoday_total_pv))*100).toFixed(1);

        op3[0]=parseFloat(el.active_rate);
        op3[1]=100-parseFloat(el.active_rate);
        op3[2]=parseFloat(el.yestoday_active_rate);
        op3[3]=100-parseFloat(el.yestoday_active_rate);
        console.log(op1);
        console.log(op2);
        console.log(op3);
        renderSinglePie('pie', '点击率', op1);
        renderSinglePie('pie1', '下载率', op2);
        renderSinglePie('pie2', '激活率', op3);
    }
    function renderSingleFunnel(eleId, data) {

        var myChart = echarts.init(document.getElementById(eleId));

        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
                data: ['展现','点击','下载','激活'],
                orient:'vertical',
                right:10,
                bottom:10,
            },
            color:['#48c9b0','#64cd64','#ec5a55','#faaa3a'],
            calculable: true,
            series: [
                {
                    name:'漏斗图',
                    type:'funnel',
                    left: '10%',
                    top: 60,
                    bottom: 60,
                    minSize: '0%',
                    maxSize: '100%',
                    width: '80%',
                    sort: 'descending',
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                            formatter: '{b}:{c}'
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    labelLine: {
                        normal: {

                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    data:data,
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        },false);
    }
    function renderFunnel(el) {
        let op=[];
        op[0]={
            value:el.total_view,
            name:'展现'
        };
        op[1]={
            value:el.total_pv,
            name:'点击'
        };
        op[2]={
            value:el.total_count,
            name:'下载'
        };
        op[3]={
            value:el.total_active,
            name:'激活'
        };
        renderSingleFunnel('funnel', op);
    }
    function ajax(str,flag) {
        // $('#main').show();
        // console.log(flag);
        if (flag === 1) {
          getTwoWeekCost({uid:111}).then(response => {
            let el=response.data;
            var activeRate = [];
            var days = [];
            var downloadRate = [];
            var totalCost = [];
            var totalPV = [];
            var totalCount = [];
            var selecteder = {};
            var legendData = [];
            var line = [];

            // console.log('el' + el);

            for (let i = 0; i < el.length; i++) {
              activeRate.push(parseFloat(el[i].active_rate));
              days.push(el[i].date);
              downloadRate.push(parseFloat(el[i].download_rate));
              totalCost.push(el[i].cost);
              totalPV.push(el[i].total_pv);
              totalCount.push(el[i].total_count);
            }
            line[0] = {
              name: '总消费',
              data: totalCost,
              time:days,
            };
            line[1] = {
              name: '按钮点击',
              data: totalCount,
              time:days,
            };
            line[2] = {
              name: 'H5展现',
              data: totalPV,
              time:days,
            };
            line[3] = {
              name: '下载率',
              data: downloadRate,
              time:days,
            };
            line[4] = {
              name: '激活率',
              data: activeRate,
              time:days,
            };
            selecteder = {
              按钮点击: false,
              下载率: false,
              激活率: false,
            };
            legendData = ['总消费', '按钮点击', 'H5展现', '下载率', '激活率'];
            renderLine('mainn', days, selecteder, legendData, line);


          }).catch(err => {

          });
        } else if (flag === 2) {
          getWeekCost({uid:111}).then(response => {
            console.log(response);
            let el=response.data;
            var arr = [];
            var arr2 = [];
            var arr3 = [];
            var selected = {};
            var legendData = [];
            if (el.length !== 0) {
              for (let i = 0; i < el.data.length; i++) {
                arr[i] = el.data[i].date;
              }
              for (let c = 0; c < el.data.length; c++) {
                arr2.push(el.data[c].cost);
              }
            }
            arr3[0] = {
              name: '消费',
              type: 'line',
              symbol: 'emptyCircle',
              symbolSize: 3,
              line: '总量',
              data: arr2,
              //                    symbol:'none',
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: { // 系列级个性化折线样式，横向渐变描边
                    width: 2,
                  },
                },
                emphasis: {
                  label: {
                    show: true,
                  },
                },
              },
            };
            selected = {
              消费: true,
            };
            legendData = ['消费'];
            // console.log(el);
            renderLine('mainn', arr, selected, legendData, arr3);

          }).catch(err => {

          });

        }
    }
    function upload(str, flag) {
        ajax(str, flag);

      getAll({uid:111}).then(response => {
            console.log(response);
//            this.tableData3=response.data;
            let el=response.data;
            if (el.mobileBalance === null) {
                el.mobileBalance = '无';
            }
            if(el.msg != 'success'){
                $(".gailan").prepend("<div class='alert'><a href='#' class='close' data-dismiss='alert'>&times;</a><strong>提示：</strong>"+el.msg+"</div>");
            }
            $('.apie1').text('￥'+parseFloat(el.mobileBalance).toLocaleString());
            $('.month').text('￥'+parseFloat(el.monthCost).toLocaleString());
            $('.today').text('￥'+parseFloat(el.cost).toLocaleString());
            $('.yesterday').text('￥'+parseFloat(el.yesterdayCost).toLocaleString());
            $('.ziyuan').text(Math.round(parseFloat(el.mobileBalance)/parseFloat(el.yesterdayCost)));
            let a=Math.round(parseFloat(el.mobileBalance)/parseFloat(el.yesterdayCost));
            if(a>10){
                $('.wen').css('color','#64cd64');
                $('.wen').hover(function () {
                    $('.jinggao').css('background','#64cd64');
                    $('.jinggao').fadeIn();
                },function () {
                    $('.jinggao').fadeOut();
                });
            }else if(a>5){
                $('.wen').css('color','#f0cf19');
                $('.wen').hover(function () {
                    $('.jinggao').css('background','#f0cf19');
                    $('.jinggao').fadeIn();
                },function () {
                    $('.jinggao').fadeOut();
                });
            }else{
                $('.wen').css('color','#ec5a55');
                $('.jinggao').css('background','#ec5a55');
                $('.jinggao').fadeIn();
            }


            renderPie(el);
            renderFunnel(el);


        }).catch(err => {
//            this.$message.error(err);
//                  _self.loading = false;
        });

    }
    export default {
        data() {
            return {
                options: [{
                    value: '0',
                    label: '近两周总体数据'
                }, {
                    value: '1',
                    label: '每周总消费趋势'
                }],
                value: '0'
            }
        },
        methods:{
         pine:function (e) {
             if(e ==0){
                 flag = 1;
                 ajax(currentAccount.appid, flag);
             }else{
                 flag = 2;
                 ajax(currentAccount.appid, flag);
             }
         }
        },
        created:function () {
            upload(currentAccount.appid, flag);
        }
    }
</script>
<style rel="stylesheet/scss" scoped  lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";
    html{
        background:#f5f7f9;
    }
    #page-wrapper{
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .alert{
        background: #fff;
        border-radius: 0;
        border-left: 5px solid #EC5A55;
        box-shadow: 0px 0px 6px #d9d9d9;
        font-family: "Microsoft Yahei";
        font-size: 16px;
        color: #3b4e61;
    }
    .zhexian{
        box-shadow: 0px 0px 6px #d9d9d9;
    }
    .gailan{
        padding: 0;
        box-shadow: 0px 0px 6px #d9d9d9;
    }
    .duibi{
        padding-left: 0;
        padding-right: 10px;
    }
    .zhuanhua{
        padding-right: 0;
        padding-left: 10px;
    }
    .duibi .contin,.zhuanhua .contin{
        box-shadow: 0px 0px 6px #d9d9d9;
        padding: 0;
    }
    .duibi-pie{
        padding: 0;
        height: 450px;
        background: #fff;
        -webkit-box-orient:horizontal;
        -webkit-box-pack: center;
        display: -webkit-box;
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
    .gailan-zhi1{
        padding:0;
        height: 120px;
        /*-webkit-box-orient:horizontal;*/
        /*-webkit-box-pack: center;*/
        /*display: -webkit-box;*/
        background: #fff;
    }
    .gailan-xiaofei{
        padding: 0;
        height: 120px;
        -webkit-box-orient:  vertical;
        -webkit-box-pack: center;
        display: -webkit-box;
        text-align: center;
        font-family: Microsoft YaHei, sans-serif, Arial;
    }
    .jinggao{
        display: none;
        position: absolute;
        right: 10px;
        top:-35px;
        color: #fff;
        width: 160px;
        text-align: center;
        padding: 10px 0;
        border-radius: 5px;
        font-family: "Microsoft Yahei";
        font-size: 14px;
        background: #ec5a55;
    }
    #mainn{
        background: #fff;
    }


</style>


