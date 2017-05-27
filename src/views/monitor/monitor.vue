<template>
    <div>
        <el-row class="row">
            <div class="col-xs-12 gailan">
                <div class="col-xs-12 gailan-toubiao">
                    计划数据分析
                </div>
                <div class="col-xs-12 gailan-zhi" id="users">
                    <el-col :span="24" class="col-xs-12" style="margin-top: 30px;">
                        <el-col :span="14" class="col-xs-7">
                            <div class="col-xs-12 ln">
                                <select class="form-control">
                                </select>
                            </div>
                            <div class="col-xs-12" style="margin-top: 20px;padding: 0;">
                                <select class="zh">
                                </select>
                                <el-date-picker
                                        v-model="value1"
                                        type="date"
                                        placeholder="选择日期">
                                </el-date-picker>
                            </div>
                            <div class="col-xs-12" style="margin-top: 20px;padding: 0;">
                                <el-col :lg="8" class="col-lg-5 col-md-12" style="padding-left:0;padding-right: 0;">
                                    <span class="ava">
                                    平均值
                                    </span>
                                    <span class="xf">
                                        <el-col :span="8" class="col-xs-4">
                                            CPC:<span class="cc"></span>
                                        </el-col>
                                        <el-col :span="8" class="col-xs-4">
                                            CPD:<span class="cd"></span>
                                        </el-col>
                                        <el-col :span="8" class="col-xs-4">
                                            CPA:<span class="ca"></span>
                                        </el-col>
                                    </span>
                                </el-col>
                                <el-col :lg="16" class="col-lg-7 col-md-12" style="padding-left:0;padding-right: 0;">
                                    <span class="ava1">
                                    目标值
                                    </span>
                                    <span class="xf1">
                                        <el-col :span="8" class="col-xs-4">
                                            CPC: <span class="bian1"></span>
                                            <input type="text" class="pu1" style="display: none;">
                                        </el-col>
                                        <el-col :span="8" class="col-xs-4">
                                            CPD:<span class="bian2" ></span>
                                            <input type="text" class="pu2"style="display: none;">
                                        </el-col>
                                        <el-col :span="8" class="col-xs-4">
                                            CPA:<span class="bian3"></span>
                                            <input type="text" class="pu3" style="display: none;">
                                        </el-col>
                                    </span>
                                    <button class="getmun">设置目标值</button>
                                    <button class="compin" style="display: none">取消</button>
                                    <button class="contin" style="display: none">完成</button>
                                </el-col>
                            </div>
                            <div class="col-xs-12 contain ft_container dwrapper" style="margin-top:20px;padding: 0">
                                <el-table
                                        :data="tableData3"
                                        border
                                        stripe
                                        style="width: 100%"
                                        height="400">
                                    <el-table-column
                                            fixed
                                            label="全选"
                                            width="70">
                                        <template scope="scope">
                                            <div style="text-align: center">
                                                <i class="statu-start">
                                                    <i :data-id='scope.row.huid' :data-ay="scope.row.cpa_yxd" :data-dy="scope.row.cpd_yxd " :data-cy="scope.row.cpc_yxd"  :data-bto="scope.row.button_cost_all_rate "  :data-h5o="scope.row.h5_cost_all_rate "  :data-btc="scope.row.button_click_all_rate "  :data-h5c="scope.row.h5_click_all_rate " :data-btv="scope.row.button_view_all_rate" :data-h5v="scope.row.h5_view_all_rate " :data-name="scope.row.name "  :data-view="scope.row.view "  :data-click="scope.row.click "  :data-cost="scope.row.cost "  :data-down="scope.row.ys_download_total "  :data-ac="scope.row.jihua_active "></i>
                                                </i>
                                                <span style="display: none">1</span>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            prop="name"
                                            label="名称"
                                            width="200">
                                        <template scope="scope">
                                            <div>
                                                {{ scope.row.name }}
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="消费(元)"
                                            width="370">
                                        <template scope="scope">
                                            <el-col :span="8" class="col-xs-4 bdata">
                                                <el-col :span="12" class="col-xs-6 bdata" style="text-align: right">CPC:</el-col>
                                                <el-col :span="12" class="col-xs-6 bdata">
                                                    <p>{{ scope.row.cpc }}</p>
                                                    <p v-if=" parseFloat(scope.row.cpcFloat) <0"><span style="color: #ec5a55 !important;">{{ -scope.row.cpcFloat }}<i class="iconfont">&#xe680;</i></span></p>
                                                    <p v-else><span style="color: #48c9b0 !important;">{{ scope.row.cpcFloat }}<i class="iconfont">&#xe681;</i></span></p>

                                                </el-col>
                                            </el-col>
                                            <el-col :span="8" class="col-xs-4 bdata">
                                                <el-col :span="12" class="col-xs-6 bdata" style="text-align: right">CPD:</el-col>
                                                <el-col :span="12" class="col-xs-6 bdata">
                                                    <p>{{ scope.row.cpd }}</p>
                                                    <p v-if=" parseFloat(scope.row.cpdFloat) <0"><span style="color: #ec5a55 !important;">{{ -scope.row.cpdFloat }}<i class="iconfont">&#xe680;</i></span></p>
                                                    <p v-else><span style="color: #48c9b0 !important;">{{ scope.row.cpdFloat }}<i class="iconfont">&#xe681;</i></span></p>
                                                </el-col>
                                            </el-col>
                                            <el-col :span="8" class="col-xs-4 bdata">
                                                <el-col :span="12" class="col-xs-6 bdata" style="text-align: right">CPA:</el-col>
                                                <el-col :span="12" class="col-xs-6 bdata">
                                                    <p>{{ scope.row.cpa }}</p>
                                                    <p v-if=" parseFloat(scope.row.cpaFloat) <0"><span style="color: #ec5a55 !important;">{{ -scope.row.cpaFloat }}<i class="iconfont">&#xe680;</i></span></p>
                                                    <p v-else><span style="color: #48c9b0 !important;">{{ scope.row.cpaFloat }}<i class="iconfont">&#xe681;</i></span></p>
                                                </el-col>
                                            </el-col>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="账户影响度"
                                            width="350">
                                        <template scope="scope">
                                            <el-col :span="8" class="col-xs-4 bdata">
                                                CPC:
                                                <span v-if=" parseFloat(scope.row.cpc_yxd)>=0" style="color: #ec5a55 !important;">+{{ scope.row.cpc_yxd }}</span>
                                                <span v-else style="color: #48c9b0 !important;">{{ scope.row.cpc_yxd }}</span>

                                            </el-col>
                                            <el-col :span="8" class="col-xs-4 bdata">
                                                CPD:
                                                <span v-if=" parseFloat(scope.row.cpd_yxd)>=0" style="color: #ec5a55 !important;">+{{ scope.row.cpd_yxd }}</span>
                                                <span v-else style="color: #48c9b0 !important;">{{ scope.row.cpd_yxd }}</span>
                                            </el-col>
                                            <el-col :span="8" class="col-xs-4 bdata">
                                                CPA:
                                                <span v-if=" parseFloat(scope.row.cpa_yxd)>=0" style="color: #ec5a55 !important;">+{{ scope.row.cpa_yxd }}</span>
                                                <span v-else style="color: #48c9b0 !important;">{{ scope.row.cpa_yxd }}</span>
                                            </el-col>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>

                        </el-col>
                        <el-col :span="10" class="col-xs-5">
                            <div class="col-xs-12 gailan">
                                <div class="col-xs-12 gailan-toubiao">
                                    各计划对比
                                </div>
                                <div class="col-xs-12 gailan-zhi" style="height: 488px;">
                                    <div class="col-xs-12" id="rad" style="padding: 0;height: 488px;">

                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-col>

                </div>
            </div>
        </el-row>
        <el-row class="row" style="margin-top: 20px;">
            <div class="col-xs-12 gailan">
                <div class="col-xs-12 gailan-toubiao">
                    H5和按钮对比
                </div>
                <div class="col-xs-12 gailan-zhi" style="padding-bottom: 0;">
                    <div class="col-xs-12" id="bili" style="height: 400px;">

                    </div>

                </div>
            </div>
        </el-row>
        <el-row class="row" style="margin-top: 20px;">
            <div class="col-xs-12 gailan">
                <div class="col-xs-12 gailan-toubiao">
                    账户计划整体对比图
                </div>
                <div class="col-xs-12 gailan-zhi" style="padding-bottom: 0;">
                    <div class="col-xs-12"  id="imite" style="height: 400px;">

                    </div>
                </div>
            </div>
        </el-row>
    </div>
</template>
<script>
    /*eslint-disable */
    import { mapGetters } from 'vuex';
    import Vue from 'vue';
    //    import $ from 'jquery'
    import { monitor } from 'api/account';
//    import ColorCell from 'components/table/ColorCell';
//    import ColorBack from 'components/table/background';

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
    function  radar() {
      let name=[];
      let data=[];

      $('.statu-end').each(function () {
        name.push($(this).data('name'));
        data.push(
          {
            value : [$(this).data('view'), $(this).data('ac'), $(this).data('down'), $(this).data('cost'),$(this).data('click')],
            name : $(this).data('name')
          }
        )

      });
      console.log(name);
      console.log(data);

      var myChart1 = echarts.init(document.getElementById('rad'));
      let option = {

        tooltip : {
          backgroundColor:'rgba(246,226,117,0.7)',
          textStyle:{
            color:'#3b4e61'
          },
        },
        legend: {
          x : 'center',
          data:name,
        },
        calculable : true,
        radar :{
          indicator : [
            {name : '展现'},
            {name : '激活'},
            {name : '下载'},
            {name : '消费'},
            {name : '点击'}
          ],
        },
        series : [
          {
            type: 'radar',
            itemStyle: {
              normal: {
                opacity:0.3
              },
              emphasis:{
                areaStyle: {
                  color:'#f6e275',
                  opacity:0.3
                },

              }
            },
            data : data
          }
        ]
      };

      myChart1.setOption(option);
      window.addEventListener("resize", function () {
        myChart1.resize();
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
    function newFan(){
      if($('.bian1').text()=='' && $('.bian2').text()==''&& $('.bian3').text()==''){
        $('.ava1').css('background','#caced7');
        $('.xf1').css('background','#caced7');
      }else{
        $('.ava1').css('background','#64cd64');
        $('.xf1').css('background','#64cd64');
      }
    }
    export default {
        data() {
            return {
               value1:getDateStr(-2),
               tableData3:[]
            }
        },
//      props: ['data-id','data-ay','data-dy','data-cy'],
        mounted(){
          $(document).on('click','.statu-start',function () {
            if($(this).siblings('span').text()==1){
              $(this).find('i').addClass('statu-end');
              $(this).siblings('span').text('0');
              $(this).parent('td').siblings('.name1').css('color','#00b7ee');
            }else if($(this).siblings('span').text()==0){
              $(this).find('i').removeClass('statu-end');
              $(this).siblings('span').text('1');
              $(this).parent('td').siblings('.name1').css('color','#3b4e61');
            }
            radar();
//            bili();
          });
          $('.getmun').click(function(){

            $('.bian1,.bian2,.bian3').hide();
            $('.pu1,.pu2,.pu3').show();
            $('.pu1').focus();
            $(this).hide();
            $('.compin').show();
            $('.contin').show();
            $('.ava1').css('background','#64cd64');
            $('.xf1').css('background','#64cd64');
          });
          $('.compin').click(function () {

            $('.pu1,.pu2,.pu3').hide();
            $('.bian1,.bian2,.bian3').show();
            newFan();
            $('.compin').hide();
            $('.contin').hide();
            $('.getmun').show();
          })
          $('.contin').click(function () {

            $('.bian1').text($('.pu1').val());
            $('.bian2').text($('.pu2').val());
            $('.bian3').text($('.pu3').val());
            $('.pu1,.pu2,.pu3').hide();
            $('.bian1,.bian2,.bian3').show();
            newFan();
            $('.compin').hide();
            $('.contin').hide();
            $('.getmun').show();
           /* utils.ajax(apiUrl.getApiUrl('setzhparam'), {
              appid:$('.zh').val(),
              cpc:$('.pu1').val(),
              cpd:$('.pu2').val(),
              cpa:$('.pu3').val(),
            }).done(function (data) {
              console.log(data);
            });*/
          })
          $(".pu1").keydown(function(){
            var e = arguments[0] || window.event;
            if(e.keyCode==13){
              $('.pu2').focus();
            }
          });
          $(".pu2").keydown(function(){
            var e = arguments[0] || window.event;
            if(e.keyCode==13){
              $('.pu3').focus();
            }
          });
        },
        created:function(){
            var _self=this;
          monitor({uid:111}).then(response => {
//            console.log(response);
            this.tableData3=response.data;
            radar()
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
        min-width: 1000px;
        width: 100%;
        left: 0 !important;
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    .box-left {
        display: none;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:12px;font-style:normal;
        /*-webkit-transform: scale(.5);*/
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
    select::-ms-expand { display: none; }
    .zh{
        vertical-align: middle;
        /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
        border: solid 1px #00b7ee;
        color: #00b7ee;
        font-size: 14px;
        /*background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;*/
        padding-right: 5px;
        width:22%;
        border-radius: 3px;
        height:30px;
        line-height:20px;
    }
    .ava{
        /*margin-left:1%;*/
        vertical-align: middle;
        display: inline-block;
        width:15%;
        text-align: center;
        background: #00b7ee;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        font-size: 12px;
    }
    .ava1{
        /*margin-left:1%;*/
        vertical-align: middle;
        display: inline-block;
        width: 15%;
        text-align: center;
        background: #caced7;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        font-size: 12px;
    }
    .xf{
        vertical-align: middle;
        display: inline-block;
        width: 80%;
        /*margin-left:1%;*/
        text-align: center;
        background: #00b7ee;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        font-size: 12px;
    }
    .xf1{
        vertical-align: middle;
        display: inline-block;
        width:55%;
        /*margin-left:1%;*/
        text-align: center;
        background: #caced7;
        color: #fff;
        height: 30px;
        line-height: 30px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        font-size: 12px;
    }
    .xf>div{
        padding: 0;
        text-align: center;
    }
    .getmun{
        vertical-align: middle;
        height: 30px;
        /* line-height: 30px; */
        background: #fff;
        color: #64cd64;
        border: 1px solid #64cd64;
        border-radius: 5px;
        width: 26%;
    }
    .compin{
        vertical-align: middle;
        height: 30px;
        /* line-height: 30px; */
        background: #caced7;
        color: #fff;
        border: 1px solid #caced7;
        border-radius: 5px;
        width: 13%;
    }
    .contin{
        vertical-align: middle;
        height: 30px;
        /* line-height: 30px; */
        background: #64cd64;
        color: #fff;
        border: 1px solid #64cd64;
        border-radius: 5px;
        width: 13%;
    }
    .xf1>div{
        padding: 0;
        text-align: center;
    }
    .pu1,.pu2,.pu3{
        border: 0;
        width: 30px;
        padding: 0 !important;
        background: transparent;
    }
    .bdata{
        padding: 0;
    }
    .contain table tbody tr:nth-child(odd){
        background: #fff;
        color: #3b4e61;
    }
    .contain table tbody tr:nth-child(even){
        background: #f5f7f9;
        color: #3b4e61;
    }
    /*////////////////////////////////////*/
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
        word-wrap: break-word;
        border:solid #ddd 1px !important;
        /*border-bottom:0 !important;*/
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
        max-height: 400px;
        overflow-y: scroll;
    }
    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
        vertical-align: middle;
    }
    /*/////////////////////////////////////////////////*/
    .statu-start,.statu-start1{
        vertical-align: middle;
        position: relative;
        display: inline-block;
        width: 13px;
        height: 13px;
        border: 1px solid #dfe1e4;
        border-radius: 3px;
        cursor: pointer;
    }
    .statu-end,.statu-end1{
        width:7px;
        height:7px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 100%;
        background: #01b7ee;
        margin: auto;
    }
    .table-condensed{
        background:#fff;
    }
    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

    .label{
        display: inline-block;
        width: 40px;
        text-align: center;
        padding: 0;
        padding-top: .3em;
        padding-bottom: .3em;
    }
    .ln{
        background: #f5f7f9;
        font-size: 14px;
        color: #3b4e61;
        height: 30px;
        line-height: 30px;
        padding: 0;
    }
    .ln select{
        background: #f5f7f9;
        width: 100%;
        font-size: 14px;
        color: #3b4e61;
        border-radius: 4px;
        text-indent: 30px;
        height: 30px;
        line-height: 30px;
        padding: 0;
    }

</style>


