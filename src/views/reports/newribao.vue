<template>
    <el-row style="padding-right: 15px;padding-left: 15px;margin-top: 30px;">
        <el-row class="row">
            <div class="col-xs-12" style="padding: 0;">
                <el-col :span="14" class="col-xs-7" style="padding: 0;">
                    开始
                    <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择日期"
                    >
                    </el-date-picker>
                    结束
                    <el-date-picker
                            v-model="value2"
                            type="date"
                            placeholder="选择日期"
                    >
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
                        <el-dropdown :hide-on-click="false" menu-align="start">
                              <span class="el-dropdown-link">
                                请选择(最多五个)<i class="el-icon-caret-bottom el-icon--right"></i>
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
                        </el-dropdown>
                    </div>
                    <div class="col-xs-12" style="margin-top: 30px;padding-bottom: 30px;" id="tb">
                        <div id="users">
                            <el-table
                                    :data="tableData3"
                                    height="350"
                                    border
                                    stripe
                                    :default-sort = "{prop: 'keyword', order: 'descending'}"
                                    style="width: 100%">
                                <el-table-column
                                        prop="keyword"
                                        sortable
                                        label="关键词">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="计划-单元">
                                    <template scope="scope">
                                        <el-col :span='24' class="cost1" style="font-weight:bold;">
                                            {{ scope.row.plan_name }}-{{ scope.row.unit_name }}
                                        </el-col>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="keyword_id"
                                        sortable
                                        label="关键词ID">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        prop="unit_id"
                                        label="单元ID">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="cost"
                                        sortable
                                        label="昨日消费">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="展现量/点击量/影响度">
                                    <template scope="scope">
                                        {{ scope.row.view }}/{{ scope.row.click }}/0
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="目标成本/当前成本">
                                    <template scope="scope">
                                        {{ scope.row.mubiao_cpd }}/{{ scope.row.cpd }}
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="优化效果">
                                    <template scope="scope">
                                        <span class="label label-default" style="vertical-align: middle;background: #fff;color: #64cd64;border: 1px solid #64cd64;">AUTO</span>
                                        <img src="../../assets/组-27@2x.png" style="vertical-align: middle;margin-left: 20px;cursor: pointer;" v-on:click="tunup(scope.row.keyword_id,scope.row.keyword)" class="chart" :data-keyid='scope.row.keyword_id' :data-keyname='scope.row.keyword' alt="">
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
    </el-row>

</template>
<script>
    /*eslint-disable */
    import { mapGetters } from 'vuex';
    import Vue from 'vue';
    //    import $ from 'jquery'
    import { getParam } from 'api/account';
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
    let flag=1;
    let record;
    let non=1;
    let all;
    let daten=getDateStr(-1);
    export default {
        data() {
            return {
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
                $('.beizhaoaa').show();
            });
            $('.ribao_qx').click(function () {
                $('.beizhaoaa').hide();
            });
            let n=1;
            $('.statu-start').eq(0).click(function () {
                $(this).find('i').addClass('statu-end');
                $('.statu-start').eq(1).find('i').removeClass('statu-end');
                $('.statu-start').eq(2).find('i').removeClass('statu-end');
                $('.statu-start').eq(3).find('i').removeClass('statu-end');
                n=1;
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
            $(document).on('click', '.tijiao', function () {
                /* if($(this).parents('th').attr('class').toString() == 'tou'){
                 console.log('aaa')
                 // if($(this).parents('th').find('a').attr('class').toString() == 'tou_liu'){

                 $(this).parents('th').siblings('.lcl').text($(this).parent().siblings('.editable-input').find('input').val()+'率');
                 $(this).parents('th').siblings('.liucb').text($(this).parent().siblings('.editable-input').find('input').val()+'成本');
                 pos('',currentAccount.appid, '', '', '', 'all', '', false,$(this).parent().siblings('.editable-input').find('input').val(),'');

                 // }
                 }else{*/
                if ($(this).parents('span').attr('class').toString() == 'liu_cun') {

                    const $tr = $(this).parents('tr');
                    const liucun = parseFloat($tr.find('.editable-input').find('input').val());
                    const sum = parseFloat($tr.find('.active_sum').text());
                    const xiaofei = parseFloat($tr.find('.acsum').text());

                    pos($tr.find('.time').text(),'liucun',liucun,'','','');
                    $tr.find('.liucun_rate').text(((liucun/sum) * 100) .toFixed(2)+ '%');
                    $tr.find('.liucun_cb').text((xiaofei/liucun).toFixed(2));

                } else if ($(this).parents('span').attr('class').toString() == 'page_active') {

                } else if ($(this).parents('span').attr('class').toString() == 'btn_active') {
                    const $tr1 = $(this).closest('tr');
                    let device='';
                    if($tr1.data('dec')=='iOS+Android'){
                        device='all';
                    }else if($tr1.data('dec')=='ios'){
                        device='ios';
                    }else if($tr1.data('dec')=='android'){
                        device='android';
                    }
                    const btn = parseFloat($tr1.find('.editable-input').find('input').val());
                    let a=parseInt($tr1.find('.page_active').text())+ parseInt($tr1.find('.editable-input').find('input').val());
                    let b=(parseFloat($tr1.find('.acsum').text())/a).toFixed(2);
                    let c=((a/parseFloat($tr1.find('.down_sum').text()))*100).toFixed(2)+"%";
                    let d=((parseFloat($tr1.find('.liu_cun').find('a').text())/a)*100).toFixed(2)+"%";
                    pos($tr1.find('.time').text(),'btn',btn,'','',device);
                    $tr1.find('.active_sum').text(a);
                    $tr1.find('.active_cb').text(b);
                    $tr1.find('.active_rate').text(c);
                    $tr1.find('.liucun_rate').text(d);

                } else if ($(this).parents('span').attr('class').toString() == 're_point') {

                } else if ($(this).parents('span').attr('class').toString() == 'shuoming') {
                    const $tr1 = $(this).closest('tr');
                    const btn = parseFloat($tr1.find('.editable-input').find('textarea').val());
                    // pos($tr1.find('.time').text(),'btn',btn,'');

                } else if ($(this).parents('span').attr('class').toString() == 'ji_pageactive') {
                    const $tr2 = $(this).closest('li');
                    let p = $(this).parents('p').attr('class');
                    let sum=$('.ti').find('.'+p).find('.ji_pageactive1');
                    let tol=0;
                    for(let i=0;i<sum.length;i++){
                        tol+=parseFloat(sum.eq(i).text());
                    }
                    tol=tol+parseInt($tr2.find('.editable-input').find('input').val())-parseFloat($(this).parents('.ji_pageactive').find('.ji_pageactive1').text());
                    console.log(tol);
                    const h5 = parseFloat($tr2.find('.editable-input').find('input').val());
                    let a=parseInt($tr2.find('.ji_btnactive').text()) + parseInt($tr2.find('.editable-input').find('input').val());
                    let b=(parseFloat($tr2.find('.ji_cost').text())/a).toFixed(2);
                    let c=(parseFloat($tr2.find('.ji_pagecost').text())/parseFloat($tr2.find('.editable-input').find('input').val())).toFixed(2);
                    pos($tr2.find('.date').text(),'h5',h5,$tr2.attr('title'),tol,'');
                    $tr2.find('.ji_active').text(a);
                    $tr2.find('.ji_activecb').text(b);
                    $tr2.find('.ji_pageactivecb').text(c);
                }else if ($(this).parents('span').attr('class').toString() == 'remark') {
                    // pos('',currentAccount.appid, $(this).parent().siblings('.editable-input').find('textarea').val(), $(this).parents('td').siblings('.date').text(), '', 'plan', $(this).parents('td').siblings('.tui_jihua').text(), false,'','');

                }
                // }

            });

        },
        methods:{
            tunup:function (a,b) {
//                window.open('/ai/paramKey?name='+b+'&id='+a);
                this.$router.push({ path: '/ai/paramKey?name='+b+'&id='+a });
            }
        },
        created:function(){
            var _self=this;
            getParam({uid:111}).then(response => {
                console.log(response);
                this.tableData3=response.data;


            }).catch(err => {
                this.$message.error(err);
//                  _self.loading = false;
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
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .el-table{
        font-size: 13px;
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

    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

</style>


