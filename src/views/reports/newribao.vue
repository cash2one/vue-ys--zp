<template>
    <el-row id='newri' style="padding-right: 15px;padding-left: 15px;margin-top: 30px;">
        <el-row class="row">
            <div class="col-xs-12" style="padding: 0;">
                <el-col :span="14" class="col-xs-7" style="padding: 0;">
                    开始
                    <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                    结束
                    <el-date-picker
                            v-model="value2"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                    <button class="keep">查看</button>
                </el-col>
                <el-col :span="10" class="col-xs-5" style="text-align: right;padding: 0;">
                    <!--<button class="shuaxin">数据重载</button>-->
                    <a href="/v2/luru/page.html"><button class="luru1">数据录入</button></a>
                    <!--<button class="detail xiangkan">全部展开</button>-->
                    <button class="export">批量导出</button>
                </el-col>
            </div>
        </el-row>
        <!-- <div class="row">
             <div class="col-xs-12" style="padding: 0;margin-top: 30px;">
                 <div class="lav-li" style="display: inline-block">
                     <span class="la1 clink">全部日报</span><span class="la2">计划日报</span>
                 </div>
             </div>
         </div>-->

        <el-row class="row">
            <div class="col-xs-12 gailan" style="margin-top: 30px;">
                <div class="col-xs-12 gailan-toubiao">
                    全部日报列表
                </div>
                <div class="col-xs-12 gailan-zhi">
                    <div class="col-xs-12" style="padding: 0;line-height: 30px;">
                        <el-col :span="5" class="col-xs-2 cz" style="color: #EC5A55;font-size:14px;text-decoration: underline; cursor: pointer;">
                            数据不全？
                        </el-col>
                        <el-col :span="19" class="col-xs-10 zoukai" style="height: 30px;text-align: right;font-size: 14px;line-height: 30px;">
                            <div style="display: inline-block;margin-right: 30px;">
                                <i class="statu-start">
                                    <i class="statu-end" data-device="all"></i>
                                </i>
                                <span for="qy" style="vertical-align: middle;">总量</span>
                            </div>
                            <div style="display: inline-block;margin-right: 30px;">
                                <i class="statu-start">
                                    <i data-device="ios"></i>
                                </i>
                                <span for="qy" style="vertical-align: middle;">iOS</span>
                            </div>
                            <div style="display: inline-block;margin-right: 30px;">
                                <i class="statu-start">
                                    <i data-device="android"></i>
                                </i>
                                <span for="qy" style="vertical-align: middle;">Android</span>
                            </div>
                            <div style="display: inline-block;">
                                <i class="statu-start">
                                    <i data-device="zong"></i>
                                </i>
                                <span for="qy" style="vertical-align: middle;">iOS+Android</span>
                            </div>
                        </el-col>
                    </div>
                    <div class="col-xs-12 drop1" style="padding-left: 15px;">
                        <!--<el-dropdown :hide-on-click="false" menu-align="start">
                              <span class="el-dropdown-link">
                                请选择(最多五个)<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>
                              </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox" name="checkbox" checked data-rule='zhanxian' class="ischange">展现量
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" disabled='true' data-rule='keyword_id' class="ischange">激活量/激活率
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" disabled='true' data-rule='unit_id' class="ischange">H5激活/按钮激活
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" disabled='true' data-rule='cost' class="ischange">激活成本/真是激活成本
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" disabled='true' data-rule='liang' class="ischange">留存新购量/率/成本
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" checked data-rule='cpd' class="ischange">点击量/率/单价
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" checked data-rule='bian' class="ischange">按钮展现/点击/消费
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" checked data-rule='bian1' class="ischange">H5点击/下载/消费
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" checked data-rule='bian2' class="ischange">下载量/率/成本
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" disabled='true' data-rule='bian3' class="ischange">账户余额/消费
                                        </label>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <label>
                                            <input type="checkbox"  name="checkbox" disabled='true' data-rule='bian4' class="ischange">实际消费
                                        </label>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                        </el-dropdown>-->
                    </div>
                    <div class="col-xs-12" style="margin-top: 30px;padding-bottom: 30px;" id="tb">
                        <div id="users">
                            <el-table
                                    :data="tableData3"
                                    height="400"
                                    border
                                    stripe
                                    style="width: 100%">
                                <el-table-column
                                        prop="date"
                                        fixed
                                        label="日期"
                                        width="150">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="device"
                                        fixed
                                        label="平台"
                                        width="150">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="view"
                                        fixed
                                        class-name="zhanxian"
                                        label="展现量"
                                        width="100">
                                </el-table-column>
                                <el-table-column label="总激活" class-name="keyword_id">
                                    <el-table-column
                                            prop="active_total"
                                            label="量" class-name="keyword_id"
                                            width="100">
                                        <template scope="scope">
                                            <div class="active_sum">
                                                {{ scope.row.active_total }}
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="率" class-name="keyword_id"
                                            width="100">
                                        <template scope="scope">
                                            <div class="active_rate">
                                                {{ scope.row.active_rate }}%
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                                <el-table-column label="激活" class-name="unit_id">
                                    <el-table-column
                                            label="H5" class-name="unit_id"
                                            width="100">
                                        <template scope="scope">
                                            <div class="page_active">
                                                {{ scope.row.lp_active }}%
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="按钮" class-name="unit_id"
                                            width="100">
                                        <template scope="scope">
                                            <div class="btn_active">
                                                <span class="btn_active1" @click='btnS' data-type="text" style="color: #00b7ee;text-decoration: underline;cursor: pointer;">{{ scope.row.button_active }}</span>
                                                <div class="upda">
                                                    <input type="number" style="width: 100px;border-radius: 4px;border: 1px solid #eee;height: 30px;line-height: 30px;"placeholder="Num">
                                                    <el-button style="padding: 3px 10px;vertical-align: middle;" @click="cancel">取消</el-button>
                                                    <el-button type="primary" style="padding: 3px 10px;vertical-align: middle;" @click="cancel1(scope.row)">提交</el-button>
                                                </div>

                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                                <el-table-column label="成本" class-name="cost">
                                    <el-table-column
                                            label="激活" class-name="cost"
                                            width="100">
                                        <template scope="scope">
                                            <span class="active_cb">{{ scope.row.active_chengben }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="真实激活" class-name="cost" width="100">
                                        <template scope="scope">
                                            <span class="active_true_rate">{{ scope.row.active_true_chengben }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                                <el-table-column label="留存新购" class-name="liang">
                                    <el-table-column
                                            label="量" class-name="liang" width="100">
                                        <template scope="scope">
                                            <span class="liu_cun"><span class="liucun1" @click='btnS1' data-type="text" style="color: #00b7ee;text-decoration: underline;cursor: pointer;">{{ scope.row.liucun }}</span> </span>
                                            <div class="upda">
                                                <input type="number" style="width: 100px;border-radius: 4px;border: 1px solid #eee;height: 30px;line-height: 30px;"placeholder="Num">
                                                <el-button style="padding: 3px 10px;vertical-align: middle;" @click="cancel">取消</el-button>
                                                <el-button type="primary" class='tj2' style="padding: 3px 10px;vertical-align: middle;" @click="cancel2(scope.row)">提交</el-button>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="率" class-name="liang" width="100">
                                        <template scope="scope">
                                            <span class="liucun_rate">{{ scope.row.liucun_rate }}%</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="成本" class-name="liang" width="100">
                                        <template scope="scope">
                                            <span class="liucun_cb">{{ scope.row.liucun_chengben }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                                <el-table-column label="点击" class-name="cpd">
                                    <el-table-column
                                            label="量" class-name="cpd" width="100">
                                        <template scope="scope">
                                            <span class="pv">{{ scope.row.pv }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="率" class-name="cpd" width="100">
                                        <template scope="scope">
                                            <span class="pv_rate">{{ scope.row.pv_rate }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="单价" class-name="cpd" width="100">
                                        <template scope="scope">
                                            <span class="pv_dan">{{ scope.row.click_price }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                                <el-table-column label="按钮" class-name="bian">
                                    <el-table-column
                                            label="展现" class-name="bian" width="100">
                                        <template scope="scope">
                                            <span class="btn_view">{{ scope.row.btn_view }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="点击" class-name="bian" width="100">
                                        <template scope="scope">
                                            <span class="btn_pv">{{ scope.row.btn_pv }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="消费" class-name="bian" width="100">
                                        <template scope="scope">
                                            <span class="btn_cost">{{ scope.row.btn_cost }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                                <el-table-column label="H5" class-name="bian1">
                                    <el-table-column
                                            label="点击" class-name="bian1" width="100">
                                        <template scope="scope">
                                            <span class="h5_pv">{{ scope.row.h5_pv }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="下载" class-name="bian1" width="100">
                                        <template scope="scope">
                                            <span class="h5_download_total">{{ scope.row.h5_download_total }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="消费" class-name="bian1" width="100">
                                        <template scope="scope">
                                            <span class="h5_cost">{{ scope.row.h5_cost }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                                <el-table-column label="总下载" class-name="bian2">
                                    <el-table-column
                                            label="量" class-name="bian2" width="100">
                                        <template scope="scope">
                                            <span class="down_sum">{{ scope.row.download_total }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="率" class-name="bian2" width="100">
                                        <template scope="scope">
                                            <span>{{ scope.row.download_rate }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="成本" class-name="bian2" width="100">
                                        <template scope="scope">
                                            <span>{{ scope.row.download_chengben }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                                <el-table-column label="账户" class-name="bian3">
                                    <el-table-column
                                            label="余额" class-name="bian3" width="100">
                                        <template scope="scope">
                                            <span class="some_remainder">{{ scope.row.balance }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            label="消费" class-name="bian3" width="100">
                                        <template scope="scope">
                                            <span class="some_cost">{{ scope.row.cost }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                                <el-table-column
                                        prop="keyword_id"
                                        class-name="bian4"
                                        label="实际消费" width="100">
                                    <template scope="scope">
                                        <span class="acsum">{{ scope.row.truecost }}</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div id="users1" style="display: none;">

                        </div>
                    </div>
                </div>
            </div>
        </el-row>
        <div class="beizhaoaa">
            <div class="changedaa">
                <div class="col-xs-12">
                    <el-col :span="24" class="col-xs-12">
                        <el-col :span="8" class="col-xs-4" style="font-size: 15px;font-family: 'Microsoft YaHei';color: #3b4e61;margin-top:20px;">数据重载</el-col>
                        <el-col :span="24" class="col-xs-12 shezhi-content">
                            <el-col :span="6" class="col-xs-3" style="height: 30px;line-height: 30px;color: #3b4e61;font-size: 13px;">
                                选择日期
                            </el-col>
                            <el-col :span="18" class="col-xs-9" style="padding:0;">
                                <p style="height: 30px;margin-bottom: 10px;" class="datta clear">
                                    <span class="nian">2017</span>
                                    <span class="yue">
                                     <span class="yu1">11</span>/<span class="ri1">11</span>
                                 </span>
                                </p>
                                <div id="datepicker">

                                </div>
                            </el-col>
                        </el-col>
                        <div class="col-xs-12 shezhi-content">
                            <el-col :span="12" class="col-xs-6 leff1" style="text-align: right;">
                                <button class="ribao_qx">取消</button>
                            </el-col>
                            <el-col :span="12" class="col-xs-6">
                                <button class="ribao_cz">重载</button>
                            </el-col>
                        </div>
                    </el-col>
                </div>
            </div>
        </div>
        <div class="beizhaobb">
            <div class="changedbb">
                <div class="col-xs-12">
                    <div class="col-xs-12">
                        <el-col :span="8" class="col-xs-4" style="font-size: 15px;font-family: 'Microsoft YaHei';color: #3b4e61;margin-top:20px;">数据重载</el-col>
                        <div class="col-xs-12 shezhi-content">
                            <div class="col-xs-12" style="margin-bottom: 90px;margin-top:90px;border-bottom: 1px solid #eee;font-size: 15px;height: 30px;line-height: 30px;color: #cacfd7;text-align: center;">
                                操作已提交，请三分钟后刷新页面查看
                            </div>
                        </div>
                        <div class="col-xs-12 shezhi-content" style="text-align: center;">
                            <button class="ribao_fh">返回日报</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </el-row>

</template>
<script >
    /*eslint-disable */
    import { mapGetters } from 'vuex';
    import Vue from 'vue';
    //    import $ from 'jquery'
    import { getribao } from 'api/account';
    const echarts = require('echarts/lib/echarts');
    require('../../styles/jquery-ui.min.css');
    require('../../vendor/jquery-ui.min');
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
    let flag=1;
    let record;
    let non=1;
    let all;
    let daten=getDateStr(-1);


    function pos(date,type,active,jihuaid,all,device) {
      utils.ajaxPost(apiUrl.getApiUrl('getP'), {
        appid:currentAccount.appid,
        date:date,
        type:type,
        active:active,
        jihuaid:jihuaid,
        active_all:all,
        device:device,
      }).done(function (data) {
        console.log(data);
      });
    }

    export default {
        data() {
            return {
               input: '',
               value1:getDateStr(-2),
               value2:getDateStr(-1),
               tableData3:[]
            }
        },
        mounted(){
            $(".ischange").change(function() {
                let a=[];
                let b=[];
                $("input[name='checkbox']:checkbox:checked").each(function(){
                    a.push($(this).data('rule'))
                    $('.'+$(this).data('rule')).show();
                });

                if(a.length>=5){


                    $("input[name='checkbox']:checkbox:not(:checked)").each(function(){
                        $(this).attr('disabled','true');
                        b.push($(this).data('rule'))
                        $('.'+$(this).data('rule')).hide();
                    });
                }else{
                    $("input[name='checkbox']:checkbox:not(:checked)").each(function(){
                        $(this).removeAttr('disabled')
                        b.push($(this).data('rule'))
                        $('.'+$(this).data('rule')).hide();
                    });
                }
                console.log(a)
                console.log(b)
            });
            $('.cz').click(function () {
              $("#datepicker").datepicker({
                  /* 区域化周名为中文 */
                dayNamesMin : ["日", "一", "二", "三", "四", "五", "六"],
                  /* 每周从周一开始 */
                firstDay : 1,
                  /* 区域化月名为中文习惯 */
                monthNames : ["1月", "2月", "3月", "4月", "5月", "6月",
                  "7月", "8月", "9月", "10月", "11月", "12月"],
                  /* 月份显示在年后面 */
                showMonthAfterYear : true,
                  /* 年份后缀字符 */
                yearSuffix : "年",
                maxDate: new Date(),
                showOtherMonths: true,
                selectOtherMonths: false,
                dateFormat:'yy-mm-dd',
                onSelect: function(dateText, inst) {
                  // $('.datta').text(dateText)
                  daten=dateText;
                  let data=dateText.split('-');
                  $('.nian').text(data[0]);
                  $('.yu1').text(data[1]);
                  $('.ri1').text(data[2]);
                }
              });
                $('.beizhaoaa').show();
            });
            $('.ribao_qx').click(function () {
                $('.beizhaoaa').hide();
            });
          function recon(cln){
            let data=[];
            if(cln==1){

              for(let i=0;i<record.length;i++){
                data.push(record[i]);
              }
            }else if(cln==4){
              for(let i=0;i<record.length;i++){
                if(record[i].device=='iOS+Android'){
                  data.push(record[i]);
                }
              }
            }else if(cln==3){
              for(let i=0;i<record.length;i++){
                if(record[i].device=='android'){
                  data.push(record[i]);
                }
              }
            }else if(cln==2){
              for(let i=0;i<record.length;i++){
                if(record[i].device=='ios'){
                  data.push(record[i]);
                }
              }
            }
            flag=1;
            console.log(data);
            non=1;
          }
            let n=1;
            $('.statu-start').eq(0).click(function () {
                $(this).find('i').addClass('statu-end');
                $('.statu-start').eq(1).find('i').removeClass('statu-end');
                $('.statu-start').eq(2).find('i').removeClass('statu-end');
                $('.statu-start').eq(3).find('i').removeClass('statu-end');
                n=1;
//              this.recon(n)
              recon(n)
            });
            $('.statu-start').eq(1).click(function () {
                $(this).find('i').addClass('statu-end');
                $('.statu-start').eq(0).find('i').removeClass('statu-end');
                $('.statu-start').eq(2).find('i').removeClass('statu-end');
                $('.statu-start').eq(3).find('i').removeClass('statu-end');
                n=2;
              recon(n)
            });
            $('.statu-start').eq(2).click(function () {
                $(this).find('i').addClass('statu-end');
                $('.statu-start').eq(1).find('i').removeClass('statu-end');
                $('.statu-start').eq(0).find('i').removeClass('statu-end');
                $('.statu-start').eq(3).find('i').removeClass('statu-end');
                n=3;
              recon(n)
            });
            $('.statu-start').eq(3).click(function () {
                $(this).find('i').addClass('statu-end');
                $('.statu-start').eq(1).find('i').removeClass('statu-end');
                $('.statu-start').eq(0).find('i').removeClass('statu-end');
                $('.statu-start').eq(2).find('i').removeClass('statu-end');
                n=4;
              recon(n)
            });
            $('.ribao_cz').click(function () {
                utils.ajax(apiUrl.getApiUrl('restribao'), {
                    appid:currentAccount.appid,
                    date:daten,
                }).done(function (data) {
                    console.log(data);
                });
                $('.beizhaoaa').hide();
                $('.beizhaobb').show();
            });
            $('.ribao_fh').click(function () {
                $('.beizhaobb').hide();
            });
            $('.keep').click(function () {
                $('.statu-start').eq(0).find('i').addClass('statu-end');
                $('.statu-start').eq(1).find('i').removeClass('statu-end');
                $('.statu-start').eq(2).find('i').removeClass('statu-end');
                var s = $('.birthday1').val();
                var e = $('.birthday2').val();
                sum(1,currentAccount.appid, e, s);

            });
            $('.export').click(function(){
                // var s = $('#date1').val();
                // var e = $('#date2').val();
                let device=[];
                if($('.statu-end').data('device')=='all'){
                    device=['all','ios','android'];
                }else if($('.statu-end').data('device')=='ios'){
                    device=['ios'];
                }else if($('.statu-end').data('device')=='android'){
                    device=['android'];
                }else if($('.statu-end').data('device')=='zong'){
                    device=['all'];
                }
                utils.formSubmit(apiUrl.getApiUrl('setOut'), {
                    zhe: '',
                    device:device,
                    type:currentAccount.type,
                    appid: currentAccount.appid,
                    // name: currentAccount.username,
                    edate: $('.birthday2').val(),
                    sdate: $('.birthday1').val(),
                })
            });
        },
        methods:{
          btnS:function (e) {
            var el=e.target;
            $(el).next().show();
          },
          btnS1:function (e) {
            var el=e.target;
            $(el).parent().next().show();
          },
          cancel:function (e) {
            var el=e.target;
            $(el).parents('.upda').hide();

          },
          cancel1:function (row) {
            var el=event.target;
            $(el).parents('.upda').hide();

            let device='';
            if(row.device=='iOS+Android'){
              device='all';
            }else if(row.device=='ios'){
              device='ios';
            }else if(row.device=='android'){
              device='android';
            }
            const btn = parseFloat($(el).parent().siblings('input').val());
//            $(el).parents('.upda').siblings('.btn_active1').text(btn);
            let a=parseInt(row.lp_active)+ btn;
            let b=(parseFloat(row.truecost)/a).toFixed(2);
            let c=((a/parseFloat(row.download_total))*100).toFixed(2);
            let d=((parseFloat(row.liucun)/a)*100).toFixed(2);
            pos(row.date,'btn',btn,'','',device);
            this.$set(row,'button_active',btn);
            this.$set(row,'active_total',a);
            this.$set(row,'active_chengben',b);
            this.$set(row,'active_rate',c);
            this.$set(row,'liucun_rate',d);
          },

          cancel2:function (row) {
//            console.log($(e).text());
            var el=event.target;
            $(el).parents('.upda').hide();
            let liucun=parseFloat($(el).parent().siblings('input').val())
//            $(el).parents('.upda').siblings('.liu_cun').find('.liucun1').text($(el).parent().siblings('input').val())
            this.$set(row,'liucun',liucun);
            const sum = parseFloat(row.active_total);
            const xiaofei = parseFloat(row.truecost);
            pos(row.date,'liucun',liucun,'','','');
            this.$set(row,'liucun_rate',((liucun/sum) * 100) .toFixed(2));
            this.$set(row,'liucun_chengben',(xiaofei/liucun).toFixed(2));
          },

        },
        created:function(){
            var _self=this;
          let data=getDateStr(-1).split('-');
          $('.nian').text(data[0]);
          $('.yu1').text(data[1]);
          $('.ri1').text(data[2]);

            getribao({uid:111}).then(response => {
                console.log(response);
              all=response.data;
              record=response.data[0];
              // $('.zoukai').show();
              for(var i=0;i<response.data[0].length;i++){
                if(response.data[0][i].device=='all'){
                  response.data[0][i].device='iOS+Android';
                }

              }
              flag=1;
              this.tableData3=response.data[0];
//              tong();

            }).catch(err => {
                this.$message.error(err);
//                  _self.loading = false;
            });

        },
        ready:function(){
            window.vm = this;
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
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .el-table{
        font-size: 13px;
    }
    .upda{
        display: none;
        position: absolute;
        border: 1px solid #eee;
        left: 27px;
        top: 12px;
        width: 250px;
        padding: 10px 15px;
        background: #fff;
        border-radius: 4px;
        z-index: 1111;
    }
    html{
        background:#f5f7f9;
    }
    #page-wrapper{
        min-width: 1110px;
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
    .gailan-zhi{
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
    /*////////////////////////////////////*/
    .col-xs-n{
        width: 9.5%;

    }
    .shen>span{
        display: inline-block;
        word-wrap: break-word;
        border-right: 1px solid #ddd;
        /*line-height: 40px;*/
        /*width: 9.66%;*/
        height:55px;
        padding-top:10px;
        padding-bottom:10px;
        vertical-align: middle;
    }
    .ti li>p,.ti li>div{
        border-bottom: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
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
    .ti li:nth-child(odd){
        background: #fff;
    }
    .ti li:nth-child(even){
        background: #f5f7f9;
    }
    #tb table thead,#tb tbody tr{
        display:table;
        width:100%;
        table-layout:fixed;
    }
    .ti{
        display:block;
        max-height: 500px;
        /*overflow-y: scroll;*/
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
    .el-input__inner {
        height: 30px !important;
        line-height: 30px !important;
    }
    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

</style>


