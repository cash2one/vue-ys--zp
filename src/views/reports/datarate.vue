<template>
    <el-row class="row">
        <el-col class="col-xs-12 gailan" style="margin-top: 30px;">
            <div class="col-xs-12 gailan-toubiao" style="text-indent: 15px;">
                计划数据对比
            </div>
            <div class="col-xs-12 gailan-zhi1">
                <div class="col-xs-12" style="padding: 0;line-height: 30px;overflow: hidden;">
                    <div class="col-xs-12" style="padding: 0;">
                        <el-col :span="24" class="col-xs-7" style="margin-top: 20px;">
                            开始
                            <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="选择日期">
                            </el-date-picker>
                            <!--<input type="text" readonly style="width: 150px;display: inline-block;height:30px;margin-left: 20px;margin-right: 20px;" name="birthday1" class="birthday1 form-control" />-->
                            结束
                            <el-date-picker
                                    v-model="value2"
                                    type="date"
                                    placeholder="选择日期">
                            </el-date-picker>
                            <button class="keep">查看</button>
                        </el-col>
                    </div>

                </div>
                <div class="col-xs-12" style="padding-left: 15px;padding-right: 15px;">
                    <div class="col-xs-12 gailan" style="margin-top: 30px;">
                        <div class="col-xs-12 gailan-toubiao" style="text-indent: 15px;">
                            全账户数据对比
                        </div>
                        <div class="col-xs-12 gailan-zhi1">
                            <el-col :span='12' class="col-xs-6" style="padding: 0;border-right: 1px solid #eee;">
                                <div class="col-xs-12">
                                    <el-col :span='12' class="col-xs-6 s1" style="text-align: center">

                                    </el-col>
                                    <el-col :span="12" class="col-xs-6 s2" style="text-align: center">

                                    </el-col>
                                </div>
                                <div class="col-xs-12" style="margin-top: 30px;padding-bottom: 30px;height:300px;" id="tb">

                                </div>
                            </el-col>
                            <el-col :span="12" class="col-xs-6" style="padding: 0">
                                <div class="col-xs-12">
                                    <el-col :span="12" class="col-xs-6 s1" style="text-align: center">

                                    </el-col>
                                    <el-col :span="12" class="col-xs-6 s2" style="text-align: center">

                                    </el-col>
                                </div>
                                <div class="col-xs-12" style="margin-top: 30px;padding-bottom: 30px;height:300px;" id="cptb">

                                </div>
                            </el-col>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12" style="padding-left: 15px;padding-right: 15px;">
                    <div class="col-xs-12 gailan" style="margin-top: 30px;">
                        <div class="col-xs-12 gailan-toubiao" style="text-indent: 15px;">
                            单个计划数据对比
                        </div>
                        <div class="col-xs-12 gailan-zhi1">
                            <div class="col-xs-12" style="margin-top: 10px;">
                                <div class="col-xs-12">
                                    <span class="s1" style="vertical-align:middle;"></span>
                                    <span style="vertical-align:middle;display: inline-block;width: 30px;height: 15px;border-radius: 3px;background: #64cd64"></span>
                                    <span class="s2" style="vertical-align:middle;margin-left: 20px"></span>
                                    <span style="vertical-align:middle;display: inline-block;width: 30px;height: 15px;border-radius: 3px;background: #faaa3a"></span>
                                    <span style="vertical-align: middle">下降</span>
                                    <span class="xialou"></span>
                                    <span style="vertical-align: middle">上升</span>
                                    <span class="shang"></span>
                                </div>
                            </div>
                            <div class="col-xs-12" style="margin-top: 30px;padding-bottom: 30px;" id="tb1">
                                <ul class="tou">
                                    <li style="background: #dfe1e4;border-top-left-radius:5px;border-top-right-radius:5px;" class="clear">
                                        <span class="col-xs-n" style="padding-bottom:10px;padding-top:10px;border-right: 1px solid #fff;border-top-left-radius:5px;border-left: 0;">计划名称</span>
                                        <span class="col-xs-n" style="padding-bottom:10px;padding-top:10px;border-right: 1px solid #fff;">展现对比</span>
                                        <span class="col-xs-n" style="padding-bottom:10px;padding-top:10px;border-right: 1px solid #fff;">点击对比</span>
                                        <span class="col-xs-n" style="padding-bottom:10px;padding-top:10px;border-right: 1px solid #fff;">消费对比</span>
                                        <span class="col-xs-n" style="padding-bottom:10px;padding-top:10px;border-right: 1px solid #fff;">下载对比</span>
                                        <span class="col-xs-n" style="padding-bottom:10px;padding-top:10px;border-right: 1px solid #fff;">激活对比</span>
                                        <span class="col-xs-n" style="padding-bottom:10px;padding-top:10px;border-right: 1px solid #fff;">CPC对比</span>
                                        <span class="col-xs-n" style="padding-bottom:10px;padding-top:10px;border-right: 1px solid #fff;">CPD对比</span>
                                        <span class="col-xs-n" style="padding-bottom:10px;padding-top:10px;">CPA对比</span>
                                        <!--<span style="width: 17px;border-top-right-radius:5px;border-right: 0;"></span>-->
                                    </li>
                                </ul>
                                <ul class="ti list">

                                    <li  v-for="item in items" style="position: relative" @mouseover="handleOver(item)" @mouseleave="handleLeave(item)">
                                        <p class="col-xs-12 shen" style="padding: 0;" v-show="item.showColor">
                                            <span class="col-xs-n" style="text-decoration: underline;">{{ item.oneCampaignName }}</span>
                                            <span class="col-xs-n">
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.oneView" :second-num="item.twoView" color="#64cd64"></ColorCell>
                                                </span>
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.twoView" :second-num="item.oneView" color="#faaa3a"></ColorCell>
                                                </span>
                                            </span>
                                            <span class="col-xs-n">
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.oneClick" :second-num="item.twoClick" color="#64cd64"></ColorCell>
                                                </span>
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.twoClick" :second-num="item.oneClick" color="#faaa3a"></ColorCell>
                                                </span>
                                            </span>
                                            <span class="col-xs-n">
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.oneCost" :second-num="item.twoCost" color="#64cd64"></ColorCell>
                                                </span>
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.twoCost" :second-num="item.oneCost" color="#faaa3a"></ColorCell>
                                                </span>
                                            </span>
                                            <span class="col-xs-n acsum">
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.oneDown" :second-num="item.twoDown" color="#64cd64"></ColorCell>
                                                </span>
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.twoDown" :second-num="item.oneDown" color="#faaa3a"></ColorCell>
                                                </span>
                                            </span>
                                            <span class="col-xs-n down_sum">
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.oneActive" :second-num="item.twoActive" color="#64cd64"></ColorCell>
                                                </span>
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.twoActive" :second-num="item.oneActive" color="#faaa3a"></ColorCell>
                                                </span>
                                            </span>
                                            <span class="col-xs-n">
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.oneTotalCpc" :second-num="item.twoTotalCpc" color="#64cd64"></ColorCell>
                                                </span>
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.twoTotalCpc" :second-num="item.oneTotalCpc" color="#faaa3a"></ColorCell>
                                                </span>
                                            </span>
                                            <span class="col-xs-n active_sum">
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.oneTotalCpd" :second-num="item.twoTotalCpd" color="#64cd64"></ColorCell>
                                                </span>
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.twoTotalCpd" :second-num="item.oneTotalCpd" color="#faaa3a"></ColorCell>
                                                </span>
                                            </span>
                                            <span class="col-xs-n active_rate" style="border-right: 0;">
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.oneTotalCpa" :second-num="item.twoTotalCpa" color="#64cd64"></ColorCell>
                                                </span>
                                                <span class="col-xs-12 wrap" style="padding: 0;">
                                                    <ColorCell :first-num="item.twoTotalCpa" :second-num="item.oneTotalCpa" color="#faaa3a"></ColorCell>
                                                </span>
                                            </span>
                                        </p>
                                        <p class="zhe" v-show="!item.showColor"></p>
                                        <p class="col-xs-12 shen1 clear" style="padding: 0;" v-show="!item.showColor">
                                            <span class="col-xs-n" style="text-decoration: underline;">{{ item.oneCampaignName }}</span>
                                            <ColorBack :first-num="item.oneView" :second-num="item.twoView" ></ColorBack>
                                            <ColorBack :first-num="item.oneClick" :second-num="item.twoClick" ></ColorBack>
                                            <ColorBack :first-num="item.oneCost" :second-num="item.twoCost" ></ColorBack>
                                            <ColorBack :first-num="item.oneDown" :second-num="item.twoDown" ></ColorBack>
                                            <ColorBack :first-num="item.oneActive" :second-num="item.twoActive" ></ColorBack>
                                            <ColorBack :first-num="item.oneTotalCpc" :second-num="item.twoTotalCpc" ></ColorBack>
                                            <ColorBack :first-num="item.oneTotalCpd" :second-num="item.twoTotalCpd" ></ColorBack>
                                            <ColorBack :first-num="item.oneTotalCpa" :second-num="item.twoTotalCpa" ></ColorBack>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </el-col>
    </el-row>
</template>
<script>
    /*eslint-disable */
    import { mapGetters } from 'vuex';
    import Vue from 'vue';
    //    import $ from 'jquery'
    import { planvs } from 'api/account';
    import ColorCell from 'components/table/ColorCell';
    import ColorBack from 'components/table/background';

    const echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/line');
    require('echarts/lib/chart/radar');
    // 引入提示框和标题组件
    require('echarts/lib/component/graphic');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/polar');
    require('echarts/lib/component/geo');
    require('echarts/lib/component/parallel');
    require('echarts/lib/component/singleAxis');
    require('echarts/lib/component/brush');

    require('echarts/lib/component/title');

    require('echarts/lib/component/dataZoom');
    require('echarts/lib/component/visualMap');

    require('echarts/lib/component/markPoint');
    require('echarts/lib/component/markLine');
    require('echarts/lib/component/markArea');

    require('echarts/lib/component/timeline');
    require('echarts/lib/component/toolbox');
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
    function bili(data,s,e) {
      console.log(data);
      var myChart1 = echarts.init(document.getElementById('tb'));
      var myChart2 = echarts.init(document.getElementById('cptb'));
      $('.s1').text(s);
      $('.s2').text(e);
      let lengend=[s,e];
      let data1=[],data2=[];
      let data3=[],data4=[];

      if(Math.abs(data.oneTotalCpa)>Math.abs(data.twoTotalCpa)){
        data1.push({
          value:data.oneTotalCpa,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
        data2.push({
          value:data.twoTotalCpa,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
      }else{
        data1.push({
          value:data.oneTotalCpa,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
        data2.push({
          value:data.twoTotalCpa,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
      }
      if(Math.abs(data.oneTotalCpd)>Math.abs(data.twoTotalCpd)){
        data1.push({
          value:data.oneTotalCpd,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
        data2.push({
          value:data.twoTotalCpd,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
      }else{
        data1.push({
          value:data.oneTotalCpd,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
        data2.push({
          value:data.twoTotalCpd,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
      }
      if(Math.abs(data.oneTotalCpc)>Math.abs(data.twoTotalCpc)){
        data1.push({
          value:data.oneTotalCpc,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
        data2.push({
          value:data.twoTotalCpc,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
      }else{
        data1.push({
          value:data.oneTotalCpc,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
        data2.push({
          value:data.twoTotalCpc,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
      }
      if(Math.abs(data.oneActive)>Math.abs(data.twoActive)){
        data3.push({
          value:data.oneActive,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
        data4.push({
          value:data.twoActive,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
      }else{
        data3.push({
          value:data.oneActive,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
        data4.push({
          value:data.twoActive,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
      }
      if(Math.abs(data.oneDown)>Math.abs(data.twoDown)){
        data3.push({
          value:data.oneDown,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
        data4.push({
          value:data.twoDown,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
      }else{
        data3.push({
          value:data.oneDown,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
        data4.push({
          value:data.twoDown,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
      }
      if(Math.abs(data.oneCost)>Math.abs(data.twoCost)){
        data3.push({
          value:data.oneCost,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
        data4.push({
          value:data.twoCost,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
      }else{
        data3.push({
          value:data.oneCost,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
        data4.push({
          value:data.twoCost,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
      }
      if(Math.abs(data.oneClick)>Math.abs(data.twoClick)){
        data3.push({
          value:data.oneClick,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
        data4.push({
          value:data.twoClick,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
      }else{
        data3.push({
          value:data.oneClick,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
        data4.push({
          value:data.twoClick,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
      }
      if(Math.abs(data.oneView)>Math.abs(data.twoView)){
        data3.push({
          value:data.oneView,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
        data4.push({
          value:data.twoView,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        })
      }else{
        data3.push({
          value:data.oneView,
          itemStyle:{
            normal:{
              color:'#e0e1e5'
            }
          }
        });
        data4.push({
          value:data.twoView,
          itemStyle:{
            normal:{
              color:'#4ec9b2'
            }
          }
        })
      }
      console.log(data1)
      console.log(data2)
      let option = {
        tooltip : {
          trigger: 'axis',
          formatter: function (params) {
            console.log(params);
            let rev=params[0].name+'<br/>';
            try{
              for(let i=0;i<params.length;i++){

                rev+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+params[i].color+'"></span>'+params[i].seriesName + '：' + Math.abs(params[i].data.value)+'<br/>'

              }
            }catch (e){
              console.log(e);
            }

            return rev;
          },
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data:lengend,
          show:false,
        },
        grid: {
          left:'8%' ,
        },
        xAxis: {
          show:true,
          axisLine:{
            lineStyle:{
              color:'#cacfd7',
              width:2,
            }
          },
          axisTick : {show: false},
          axisLabel:{
            formatter:function(v){return Math.abs(v)},
            textStyle:{
              color:'#3b4e61'
            }
          },
          type : 'value'
        },
          /* xAxis : [
           {
           show:false,
           splitNumber:3,
           axisLabel:{
           formatter:function(v){return Math.abs(v)}
           },
           type : 'value'
           },
           {
           show:false,
           splitNumber:3,
           gridIndex: 1,
           axisLabel:{
           formatter:function(v){return Math.abs(v)}
           },
           type : 'value'
           }
           ],*/
        yAxis: {
          type : 'category',
          axisLine:{
            lineStyle:{
              color:'#cacfd7',
              width:2,
            }
          },
          axisLabel:{
            textStyle:{
              color:'#3b4e61'
            }
          },
          axisTick : {show: false},
          data : ['激活','下载','消费','点击','展现']
        },
          /*  yAxis : [
           {
           type : 'category',
           axisTick : {show: false},
           data : ['激活','下载','消费','点击','展现']
           },
           {
           gridIndex: 1,
           type : 'category',
           axisTick : {show: false},
           data : ['CPA','CPD','CPC']
           }
           ],*/
        series : [
          {
            name:lengend[0],
            type:'bar',
            stack: '总量',
            label: {
              normal: {
                formatter:function(v){return Math.abs(v.data.value)},
                show: true,
                position: 'left'
              }
            },
            data:data3
          },
            /*      {
             name:lengend[0],
             type:'bar',
             xAxisIndex: 1,
             yAxisIndex: 1,
             stack: 'max',
             label: {
             normal: {
             formatter:function(v){return Math.abs(v.data.value)},
             show: true,
             position: 'left'
             }
             },
             data:data1
             },*/
          {
            name:lengend[1],
            type:'bar',
            stack: '总量',
            label: {
              normal: {
                formatter:function(v){return Math.abs(v.data.value)},
                show: true,
                position: 'right'
              }
            },
            data:data4
          },
            /*      {
             name:lengend[1],
             type:'bar',
             stack: 'max',
             xAxisIndex: 1,
             yAxisIndex: 1,
             label: {
             normal: {
             formatter:function(v){return Math.abs(v.data.value)},
             show: true,
             position: 'right'
             }
             },
             data:data2
             }*/
        ]
      };
      let option1 = {
        tooltip : {
          trigger: 'axis',
          formatter: function (params) {
            console.log(params);
            let rev=params[0].name+'<br/>';
            try{
              for(let i=0;i<params.length;i++){

                rev+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+params[i].color+'"></span>'+params[i].seriesName + '：' + Math.abs(params[i].data.value)+'<br/>'

              }
            }catch (e){
              console.log(e);
            }

            return rev;
          },
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data:lengend,
          show:false,
        },
        grid: {
          left:'8%' ,
        },
        xAxis: {
          show:true,
          axisLine:{
            lineStyle:{
              color:'#cacfd7',
              width:2,
            }
          },
          axisTick : {show: false},
          axisLabel:{
            formatter:function(v){return Math.abs(v)},
            textStyle:{
              color:'#3b4e61'
            }
          },
          type : 'value'
        },
          /* xAxis : [
           {
           show:false,
           splitNumber:3,
           axisLabel:{
           formatter:function(v){return Math.abs(v)}
           },
           type : 'value'
           },
           {
           show:false,
           splitNumber:3,
           gridIndex: 1,
           axisLabel:{
           formatter:function(v){return Math.abs(v)}
           },
           type : 'value'
           }
           ],*/
        yAxis: {
          type : 'category',
          axisLine:{
            lineStyle:{
              color:'#cacfd7',
              width:2,
            }
          },
          axisLabel:{
            textStyle:{
              color:'#3b4e61'
            }
          },
          axisTick : {show: false},
          data : ['CPA','CPD','CPC']
        },
          /*  yAxis : [
           {
           type : 'category',
           axisTick : {show: false},
           data : ['激活','下载','消费','点击','展现']
           },
           {
           gridIndex: 1,
           type : 'category',
           axisTick : {show: false},
           data : ['CPA','CPD','CPC']
           }
           ],*/
        series : [
            /*{
             name:lengend[0],
             type:'bar',
             stack: '总量',
             label: {
             normal: {
             formatter:function(v){return Math.abs(v.data.value)},
             show: true,
             position: 'left'
             }
             },
             data:data3
             },*/
          {
            name:lengend[0],
            type:'bar',
            // xAxisIndex: 1,
            // yAxisIndex: 1,
            stack: 'max',
            label: {
              normal: {
                formatter:function(v){return Math.abs(v.data.value)},
                show: true,
                position: 'left'
              }
            },
            data:data1
          },
            /*{
             name:lengend[1],
             type:'bar',
             stack: '总量',
             label: {
             normal: {
             formatter:function(v){return Math.abs(v.data.value)},
             show: true,
             position: 'right'
             }
             },
             data:data4
             },*/
          {
            name:lengend[1],
            type:'bar',
            stack: 'max',
            // xAxisIndex: 1,
            // yAxisIndex: 1,
            label: {
              normal: {
                formatter:function(v){return Math.abs(v.data.value)},
                show: true,
                position: 'right'
              }
            },
            data:data2
          }
        ]
      };


      myChart1.setOption(option);
      myChart2.setOption(option1);
      window.addEventListener("resize", function () {
        myChart1.resize();
        myChart2.resize();
      },false);
    }
    export default {
      components:{
        ColorCell,
        ColorBack
      },
        data() {
            return {
               value1:getDateStr(-2),
               value2:getDateStr(-1),
              items:[]
            }
        },
        methods: {
            handleOver:function (item) {
              console.log(item);
              this.$set(item,"showColor",true);
//              item.showColor = true;
            },
            handleLeave:function (item) {
              console.log(item);
              this.$set(item,"showColor",false);
//              item.showColor = false;
            }
        },
        created:function(){
            var _self=this;

          $('.s1').text(this.value1);
          $('.s2').text(this.value2);
          planvs({uid:111}).then(response => {
            console.log(response);
            let data1=response.data;
            data1.voAccountCom.oneView=-data1.voAccountCom.oneView
            data1.voAccountCom.oneTotalCpd=-data1.voAccountCom.oneTotalCpd
            data1.voAccountCom.oneTotalCpc=-data1.voAccountCom.oneTotalCpc
            data1.voAccountCom.oneTotalCpa=-data1.voAccountCom.oneTotalCpa
            data1.voAccountCom.oneDown=-data1.voAccountCom.oneDown
            data1.voAccountCom.oneCost=-data1.voAccountCom.oneCost
            data1.voAccountCom.oneClick=-data1.voAccountCom.oneClick
            data1.voAccountCom.oneActive=-data1.voAccountCom.oneActive
            bili(data1.voAccountCom,this.value1,this.value2);
            this.items=data1.voCampaignComs;
//        $('#tb1').html(tb({data: data.voCampaignComs}));

          }).catch(err => {

          });
        }
    }

</script>
<style rel="stylesheet/scss" scoped  lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";

    .el-radio-button__inner{
        width: 80px;
    }
    .el-table__body-wrapper{
        overflow-x: hidden;
    }
    .el-table .cell, .el-table th>div{
        padding: 0;
    }
    html{
        background:#f5f7f9;
    }
    #page-wrapper{
        /*min-width: 1110px;*/
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    .beizhaoaa,.beizhaobb{
        z-index: 11;
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }
    .changedaa,.changedbb{
        z-index: 12;
        padding-bottom: 20px;
        position: absolute;
        width:580px;
        height: 410px;
        background: #fff;
        margin:auto;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
    .shezhi-content{
        font-size: 14px;
        font-family: "Microsoft Yahei";
        color: #3b4e61;
        margin-top: 20px;
    }
    .beizhao input,.beizhao select{
        border: solid 1px #dfe1e4;
        width:100%;
        padding-left:30px;
        border-radius: 5px;
        height:30px;
        line-height:30px;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:10px;font-style:normal;
        -webkit-transform: scale(.8);
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .li1,.la1{
        display: inline-block;
        width: 110px;
        text-align: center;
        color: #00b7ee;
        height: 30px;
        line-height: 30px;
        background: #fff;
        cursor: pointer;
        border-top: 1px solid #00b7ee;
        border-left: 1px solid #00b7ee;
        border-bottom: 1px solid #00b7ee;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
    .tong{
        display: inline-block;
        width: 100px;
        text-align: right;
    }
    .li2,.la2{
        display: inline-block;
        width: 110px;
        text-align: center;
        height: 30px;
        background: #fff;
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
    .birthday,.birthday1,.birthday2{
        background: transparent !important;
    }
    .keep,.export,.detail,.heqi,.luru1,.shuaxin{
        width: 100px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }

    .keep:hover,.keep:focus,.export:hover,.export:focus,.detail:hover,.detail:focus,.luru1:hover,.luru1:focus,.shuaxin:hover,.shuaxin:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .keep:active,.export:active,.detail:active,.luru1:active,.shuaxin:active{
        color: #fff !important;
        background: #01a4e0 !important;
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
    .gailan-zhi1{
        overflow: hidden;
        font-size: 13px;
        font-family: "Microsoft Yahei", "΢���ź�", Arial, Tahoma;
        color: #3b4e61;
        padding:0;
        background: #fff;
    }
    .squared label {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        border: 1px solid #dfe1e4;
    }

    .squared label:after {
        content: '';
        width: 8px;
        height: 8px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background: #01b7ee;
        opacity: 0;
        border-radius: 3px;
    }

    .squared input[type=checkbox] {
        visibility: hidden;
    }

    .squared input[type=checkbox]:checked + label:after {
        opacity: 1;
    }
    .statu-start,.statu-start1,.statu-start2{
        vertical-align: middle;
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 1px solid #dfe1e4;
        border-radius: 3px;
        cursor: pointer;
    }
    .statu-end,.statu-end1,.statu-end2{
        width: 8px;
        height: 8px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 100%;
        background: #01b7ee;
        margin: auto;
    }
    .xialou,.shang{
        display: inline-block;
        width: 100px;
        height: 15px;
        vertical-align: middle;
    }
    .xialou{
        border:1px solid rgb(75,201,179);
        background-image:-webkit-linear-gradient(left, rgb(75,201,179) 0%, rgb(255,255,255) 70%);
        background-image:linear-gradient(left,rgb(75,201,179),rgb(255,255,255) 70%);
    }
    .shang{
        border:1px solid rgb(246,100,96);
        background-image:-webkit-linear-gradient(left, rgb(246,100,96), rgb(255,255,255) 70%);
        background-image:linear-gradient(left,rgb(246,100,96),rgb(255,255,255) 70%);
    }
    /*////////////////////////////////////*/
    .col-xs-n{
        width: 11.1%;
        display: inline-block;

    }
    .wrap{
        line-height: 0;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
    }
    .shen>span,.shen1>span{
        float: left;
        display: inline-block;
        word-wrap: break-word;
        border-right: 1px solid #ddd;
        /*line-height: 40px;*/
        /*width: 9.66%;*/
        height:50px;
        padding-top:10px;
        padding-bottom:10px;
        vertical-align: middle;
    }
    .shen1>span{
        float: left;
    }
    .shen{
        box-shadow: 0px 0px 10px #c1c1c1;
        /*display: none;*/
    }

    .zhe{
        position: absolute;left: 0;top: 0;width: 100%;height: 50px;background: rgba(0,0,0,.3);z-index: 11;
        opacity: 0.3;
        /*display: none;*/
    }
    .ti li>p,.ti li>div{
        border-bottom: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
    }
    .ti>li{
        height: 51px;
    }
    .ti,.tou{
        min-width: 1106px;
    }
    #tb table thead tr{
        background: #dfe1e4;
    }
    #tb .tou li span,#tb table td{
        font-size: 14px;
        padding-top:7px;
        padding-bottom:7px;
        color: #3b4e61;
    }
    #tb .tou li span{
        display: inline-block;
        vertical-align: middle;
        font-weight: 500 !important;
    }
    #tb table td{

        border:solid #ddd 1px !important;
        /*border-bottom:0 !important;*/
        border-top:0 !important;
    }
    #tb table{
        border-radius: 5px;
        border-collapse:collapse;
        border:none;
    }
    /*.ti li:nth-child(odd){
        background: #fff;
    }
    .ti li:nth-child(even){
        background: #f5f7f9;
    }*/
    #tb table thead,#tb tbody tr{
        display:table;
        width:100%;
        table-layout:fixed;
    }
    .ti{
        display:block;
        max-height: 400px;
        /*overflow-y: scroll;*/
    }
    .tou>li>span{
        float: left;
    }
    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
        vertical-align: middle;
    }

    .xia{
        display: none;
    }
    .ribao_qx{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #3b4e61 !important;
        background: #fff !important;
    }
    .ribao_qx:hover,.ribao_qx:focus{
        background: #f5f7f9 !important;
    }
    .ribao_qx:active{
        background: #dfe1e4 !important;
    }
    .ribao_cz,.ribao_fh{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }
    .ribao_cz:hover,.ribao_cz:focus,.ribao_fh:hover,.ribao_fh:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .ribao_cz:active.ribao_fh:active{
        color: #fff !important;
        background: #01a4e0 !important;
    }

    .ui-widget-header {
        border: 1px solid #fff;
        background: #fff;
        color: #333;
        font-weight: 700;
    }
    .ui-button, .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, html .ui-button.ui-state-disabled:active, html .ui-button.ui-state-disabled:hover {
        border: 1px solid #f5f5f5;
        background: #fff;
        font-weight: 400;
        color: #454545;
    }
    .ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight {
        border: 1px solid #cacfd7;
        background: #cacfd7;
        color: #fff;
    }
    .ui-button.ui-state-active:hover, .ui-button:active, .ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active, a.ui-button:active {
        border: 1px solid #00b7ee;
        background: #00b7ee;
        font-weight: 400;
        color: #fff;
    }
    .nian{
        float: left;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        width: 119px;
        background: #fff;
        border: 1px solid #00b7ee;
        color: #00b7ee;
        font-size: 20px;

    }

    .yue{
        float: left;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        width: 119px;
        background: #00b7ee;
        border: 1px solid #00b7ee;
        color: #fff;
        font-size: 14px;
    }
    .yu1{
        font-size: 20px;
    }
    .table-condensed{
        background: #fff;
    }

    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

</style>


