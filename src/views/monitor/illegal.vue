<template>
    <div id="app" style="padding-left: 15px;padding-right: 15px;">
        <el-row>
            <el-col :xs="12" :md="12" class="col-xs-6" style="margin-bottom: 20px;border-left: 5px solid #01b7ee;padding-left: 0;text-indent: 10px;">
                <div class="col-xs-12 report" style="overflow: hidden">
                    上次检查关键词的时间为：<span v-cloak style="color: #00b7ee;">{{ message }}</span>
                    <el-button class="keep" v-on:click="greet3">刷新</el-button>
                    <el-button class="detail" v-on:click="greet4">检查</el-button>
                </div>
            </el-col>
            <el-col :xs="12"  :md="12" class="col-xs-6" style="overflow:hidden;margin-bottom: 20px;border-left: 5px solid #01b7ee;padding-left: 0;text-indent: 10px;">
                <div class="col-xs-12 report">
                    本账户共有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计划：<span v-cloak style="color: #00b7ee;">{{ message1 }}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;单元：<span v-cloak style="color: #00b7ee;">{{ message2 }}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;关键词：<span v-cloak style="color: #00b7ee;">{{ message3 }}</span>
                </div>
            </el-col>
        </el-row>

        <div class="col-xs-12 gailan">
            <div class="col-xs-12 gailan-toubiao">
                检查详情
            </div>
            <el-row>
            <el-col :xs="24" class="col-xs-12 gailan-zhi" id="users" style="display: block;">

                    <el-col :span="24" class="col-xs-12" style="margin-top: 15px;padding-left: 15px;">
                        <el-radio-group v-model="radio3">
                            <el-radio-button v-on:click="greet1" label="关键词"></el-radio-button>
                            <el-radio-button v-on:click="greet2" label="创意"></el-radio-button>
                        </el-radio-group>
                        <!--<div class="lav-li" style="display: inline-block">
                            <span class="la1 clink" >关键词</span><span class="la2" >创意</span>
                        </div>-->
                    </el-col>
                        <el-col :span="24" class="contain" style="margin-top:15px;padding-left: 15px;padding-right: 15px;" id="tb">
                        <el-table
                              :data="tableData"
                              stripe
                              height="400"
                              border
                              style="width: 100%">
                               <el-table-column
                                prop="date"
                                 label="历史检查时间"
                                 width="180">
                                </el-table-column>
                                <el-table-column
                                 prop="item"
                                 label="违规词">
                                </el-table-column>
                                <el-table-column
                                 prop="reason"
                                 label="原因">
                                </el-table-column>
                            </el-table>
                        </el-col>
            </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>

    import { mapGetters } from 'vuex';
//    import Vue from 'vue';
//    import $ from 'jquery'
    import { getillegalAll } from 'api/account';
    function dateFormat(date,format) {
      if (typeof date === "string") {
        var mts = date.match(/(\/Date\((\d+)\)\/)/);
        if (mts && mts.length >= 3) {
          date = parseInt(mts[2]);
        }
      }
      date = new Date(date);
      if (!date || date.toUTCString() == "Invalid Date") {
        return "";
      }

      var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
      };

      format = format.replace(/([yMdhmsqS])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
          if(all.length > 1){
            v = '0' + v;
            v = v.substr(v.length-2);
          }
          return v;
        }
        else if(t === 'y'){
          return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
      });
      return format;
    }
    export default {
        data() {
            return {
              radio3: '关键词',
              message: 'aaaa',
              message1: 'bbbb',
              message2: 'cccc',
              message3: 'ddd',
              goodsList:[],
              tableData:[]

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
              // data[i].date=data[i].date.Format("yyyy-MM-dd HH:mm");
              data.keyword[i].date=utils.dateFormat(data.keyword[i].date,'yyyy-MM-dd hh:mm')
            }
            geet1=data.keyword;
            for(let i=0;i<data.chuangyi.length;i++){
              // data[i].date=data[i].date.Format("yyyy-MM-dd HH:mm");
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
      created:function(){
        var _self=this;
        getillegalAll({uid:111}).then(response => {
          console.log(response);
//          this.tableData3=response.data;

          for(let i=0;i<response.data.keyword.length;i++){
            // data[i].date=data[i].date.Format("yyyy-MM-dd HH:mm");
            response.data.keyword[i].date=dateFormat(response.data.keyword[i].date,'yyyy-MM-dd hh:mm')
          }
          _self.tableData=response.data.keyword;
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
            // data[i].date=data[i].date.Format("yyyy-MM-dd HH:mm");
            data.keyword[i].date=utils.dateFormat(data.keyword[i].date,'yyyy-MM-dd hh:mm')
          }
          geet1=data.keyword;
          for(let i=0;i<data.chuangyi.length;i++){
            // data[i].date=data[i].date.Format("yyyy-MM-dd HH:mm");
            data.chuangyi[i].date=utils.dateFormat(data.chuangyi[i].date,'yyyy-MM-dd hh:mm')
          }
          geet2=data.chuangyi;
          _self.goodsList=data.keyword;
        });*/
      }
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
        width: 80px;
    }
    .el-table__body-wrapper{
        overflow-x: hidden;
    }
    #page-wrapper{
        min-width: 1000px;
        /*width: 100%;*/
        /*left: 0 !important;*/
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
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
        padding-left: 15px;
        border-bottom: 1px solid #ebebeb;
        padding-top: 10px;
        padding-bottom: 10px;
        background: #fafbfc;
        font-size: 14px;
        color: #3b4161;
        font-family: 'Microsoft YaHei';
    }
    .gailan-zhi{
        overflow: hidden;
        padding:0;
        background: #fff;
        padding-bottom: 30px;
    }
    select::-ms-expand { display: none; }

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
    .report{
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #3b4e61;
        background:#fff;
        padding: 0;
    }
    [v-cloak] {
        display: none;
    }
    .keep,.export,.detail,.heqi,.luru1,.shuaxin{
        width: 80px;
        font-size: 12px;
        /*height: 30px;*/
        /*vertical-align: middle;*/
        /*line-height: 30px;*/
        /*margin-left: 10px;*/
/**/
        /*border: 1px solid #dfe1e4;*/
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
    /*////////////////////////////////////*/
 /*   #tb table thead tr{
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
        max-height: 400px;
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
    }*/
    /*/////////////////////////////////////////////////*/

    .table-condensed{
        background:#fff;
    }
    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

</style>


