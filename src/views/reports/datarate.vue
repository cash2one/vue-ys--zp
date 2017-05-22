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
                                    placeholder="选择日期"
                                    @change="chu1">
                            </el-date-picker>
                            <!--<input type="text" readonly style="width: 150px;display: inline-block;height:30px;margin-left: 20px;margin-right: 20px;" name="birthday1" class="birthday1 form-control" />-->
                            结束
                            <el-date-picker
                                    v-model="value2"
                                    type="date"
                                    placeholder="选择日期"
                                    @change="chu2">
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
                            <div class="col-xs-12">
                                <div class="col-xs-6 s1" style="text-align: center">

                                </div>
                                <div class="col-xs-6 s2" style="text-align: center">

                                </div>
                            </div>
                            <div class="col-xs-12" style="margin-top: 30px;padding-bottom: 30px;height: 400px;" id="tb">

                            </div>
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
                                <div class="col-xs-6">
                                    <span class="s1" style="vertical-align:middle;"></span>
                                    <span style="vertical-align:middle;display: inline-block;width: 30px;height: 20px;border-radius: 3px;background: #64cd64"></span>
                                    <span class="s2" style="vertical-align:middle;margin-left: 20px"></span>
                                    <span style="vertical-align:middle;display: inline-block;width: 30px;height: 20px;border-radius: 3px;background: #faaa3a"></span>
                                </div>
                            </div>
                            <div class="col-xs-12" style="margin-top: 30px;padding-bottom: 30px;" id="tb1">

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
    import { getHu } from 'api/account';
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
    export default {
        data() {
            return {
               value1:getDateStr(-2),
               value2:getDateStr(-1),
                tableData3:[]
            }
        },
        methods: {
            greet1: function (event) {
                this.tableData=[]
//          this.goodsList=geet1
            },
            greet2: function (event) {
                this.tableData=[]
//          this.goodsList=geet2
            },
            greet4: function (event) {
                /*utils.ajax(apiUrl.getApiUrl('docheck'), {
                 appid:currentAccount.appid,
                 type:currentAccount.type
                 }).done(function (data) {
                 console.log(data);
                 });*/
            },
            greet3: function (event) {
                var _self=this;
                _self.message='111111';
                _self.message1='111111';
                _self.message2='111111';
                _self.message3='111111';
                /*utils.ajax(apiUrl.getApiUrl('blackzhxx'), {
                 appid:currentAccount.appid,
                 type:currentAccount.type
                 }).done(function (data) {
                 _self.message=utils.dateFormat(data.lasttime,'yyyy-MM-dd hh:mm');
                 _self.message1=data.plancount;
                 _self.message2=data.unitcount;
                 _self.message3=data.kwcount;
                 });*/
                /* utils.ajax(apiUrl.getApiUrl('blackzhcheck'), {
                 appid:currentAccount.appid,
                 type:currentAccount.type
                 }).done(function (data) {

                 for(let i=0;i<data.keyword.length;i++){
                 // scope.row.date=scope.row.date.Format("yyyy-MM-dd HH:mm");
                 data.keyword[i].date=utils.dateFormat(data.keyword[i].date,'yyyy-MM-dd hh:mm')
                 }
                 geet1=data.keyword;
                 for(let i=0;i<data.chuangyi.length;i++){
                 // scope.row.date=scope.row.date.Format("yyyy-MM-dd HH:mm");
                 data.chuangyi[i].date=utils.dateFormat(data.chuangyi[i].date,'yyyy-MM-dd hh:mm')
                 }
                 geet2=data.chuangyi;
                 if($('.clink').text()=='关键词'){
                 _self.goodsList=data.keyword;
                 }else{
                 _self.goodsList=data.chuangyi;
                 }

                 });*/
            },
        },
        mounted(){
            let n1=1;
            $('.statu-start1').eq(0).click(function () {
                $(this).find('i').addClass('statu-end1');
                $('.statu-start1').eq(1).find('i').removeClass('statu-end1');
                $('.statu-start1').eq(2).find('i').removeClass('statu-end1');
                qudao();
                $('.youqudao').show();
                n1=1;
            });
            $('.statu-start1').eq(1).click(function () {
                $(this).find('i').addClass('statu-end1');
                $('.statu-start1').eq(0).find('i').removeClass('statu-end1');
                $('.statu-start1').eq(2).find('i').removeClass('statu-end1');
                $("#qudao").find("option").remove();
                $('.youqudao').hide();
                n1=2;
            });
            $(document).on('click','.statu-start',function () {
                if($(this).siblings('span').text()==1){
                    $(this).find('i').addClass('statu-end');
                    $(this).siblings('span').text('0');
                }else if($(this).siblings('span').text()==0){
                    $(this).find('i').removeClass('statu-end');
                    $(this).siblings('span').text('1');
                }
            });
        },
        created:function(){
            var _self=this;
            getHu({uid:111}).then(response => {
                console.log(response);
                this.tableData3=response.data;

                /*for(let i=0;i<response.data.keyword.length;i++){
                 // scope.row.date=scope.row.date.Format("yyyy-MM-dd HH:mm");
                 response.data.keyword[i].date=dateFormat(response.data.keyword[i].date,'yyyy-MM-dd hh:mm')
                 }
                 _self.tableData=response.data.keyword;*/
//          let myChart = this.$echarts.init(document.getElementById('myChart'))
                /*   _self.loading = false;
                 ;*/

            }).catch(err => {
                this.$message.error(err);
//                  _self.loading = false;
            });
//        _self.goodsList=data.keyword;
            /*utils.ajax(apiUrl.getApiUrl('blackzhxx'), {
             appid:currentAccount.appid,
             type:currentAccount.type
             }).done(function (data) {
             _self.message=utils.dateFormat(data.lasttime,'yyyy-MM-dd hh:mm');
             _self.message1=data.plancount;
             _self.message2=data.unitcount;
             _self.message3=data.kwcount;
             });*/
            /* utils.ajax(apiUrl.getApiUrl('blackzhcheck'), {
             appid:currentAccount.appid,
             type:currentAccount.type
             }).done(function (data) {

             for(let i=0;i<data.keyword.length;i++){
             // scope.row.date=scope.row.date.Format("yyyy-MM-dd HH:mm");
             data.keyword[i].date=utils.dateFormat(data.keyword[i].date,'yyyy-MM-dd hh:mm')
             }
             geet1=data.keyword;
             for(let i=0;i<data.chuangyi.length;i++){
             // scope.row.date=scope.row.date.Format("yyyy-MM-dd HH:mm");
             data.chuangyi[i].date=utils.dateFormat(data.chuangyi[i].date,'yyyy-MM-dd hh:mm')
             }
             geet2=data.chuangyi;
             _self.goodsList=data.keyword;
             });*/
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
        width: 10.6%;
        display: inline-block;

    }
    .wrap{
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
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
        max-height: 400px;
        /*overflow-y: scroll;*/
    }
    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
        vertical-align: middle;
    }
    /*////////////////////////////////////////////////*/
    /*////////////////////////////////////////////////*/
    /* .sort,.sort1{
         background-image: url(./images/bg1.png);
         background-size: 6px;
         background-repeat: no-repeat;
         !*background-position: center right;*!
         background-position: 90%;
         cursor: pointer;
     }
     .asc{
         background-image: url(./images/asc1.png);
     }
     .desc{
         background-image: url(./images/desc1.png);
     }*/
    /*/////////////////////////////////////////////////*/
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


