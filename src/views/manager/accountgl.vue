<template>
    <div class="app" style="padding-left: 15px;padding-right: 15px;">
        <el-dialog  title="提示" :visible.sync="dialogTableVisible">
            <P style="color: red;text-indent: 20px">提交后不可更改</P>
            <span slot="footer" class="dialog-footer">
             <el-button type="primary" @click="dialogFormVisible = true">我知道了</el-button>
            </span>
        </el-dialog>
        <div>
            <div class="col-xs-12 gailan">
                <div class="col-xs-12 gailan-toubiao">
                    管理 > 账户管理
                </div>
                <div class="col-xs-12 gailan-zhi1" id="users">
                    <el-row>
                        <el-col :span="24" class="col-xs-12" style="margin-top: 30px;">
                            <a href="/v2/fenpeizhanghu/page.html"><el-button class="keep">分配账户</el-button></a>
                            <!--<button class="xinjian add_ant" data-toggle="modal" data-target="#myModal">新建账户</button>-->
                            <el-button type="text" class="xinjian add_ant" style="margin-left: 30px;"  @click="dialogTableVisible = true">新建账户</el-button>
                        </el-col>

                      </span>
                    </el-row>

                    <el-row class="col-xs-12 clear" style="margin-top: 30px;">
                        <el-col :span="10" class="col-xs-5" style="padding-left: 0;">
                            <div class="searchs">
                                <input type="text" placeholder="Search" class="search"/>
                                <span class="glyphicon glyphicon-search" style="color:#666;"></span>
                            </div>
                        </el-col>
                        <el-col :span="14" class="col-xs-7" style="text-align:right;padding-right: 0;">
                            <div class="searchs">
                                <el-button class="more-use" data-status="1">一键启用</el-button>
                                <el-button class="more-wait" data-status="2">一键暂停</el-button>
                                <el-button class="more-stop" data-status="0">一键停用</el-button>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24" class="col-xs-12 contain" style="margin-top: 30px;" id="tb">
                            <el-table
                                    :data="tableData3"
                                    height="400"
                                    stripe
                                    border
                                    :default-sort = "{prop: 'name', order: 'descending'}"
                                    style="width: 100%">
                                <el-table-column
                                        sortable
                                        width="50"
                                        style="text-align: center;padding-left: 0 !important;"
                                        label="全选">
                                    <template scope="scope">
                                        <div style="text-align: center">
                                            <i class="statu-start">
                                                <i :data-id='scope.row.huid'></i>
                                            </i>
                                            <span style="display: none">1</span>
                                        </div>

                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="jihua_name"
                                        label="账户名称">
                                    <template scope="scope">
                                        <div  :data-id="scope.row.huid" :data-userid="scope.row.userid" :data-semname="scope.row.semname" :data-type="scope.row.account_type" :data-name="scope.row.name " :data-appid="scope.row.appid ">
                                            {{ scope.row.name }}
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="danyuan_name"
                                        label="状态">
                                    <template scope="scope">
                                        <el-tag class="label label-default" v-if="scope.row.account_status ==0" style="background: #EC5A55;">停投</el-tag>
                                        <el-tag class="label label-default"  v-else-if="scope.row.account_status ==1" style="background: #64cd64;">在投</el-tag>
                                        <el-tag class="label label-default" v-else-if="scope.row.account_status ==2" style="background: #faaa3a;">暂停</el-tag>

                                        <el-tag class="label label-default" v-if="scope.row.auto=='on'" style="background: #fff;color: #64cd64;border: 1px solid #64cd64;">AUTO</el-tag>
                                        <el-tag class="label label-default disabled" v-else style="background: #fff;color: #ddd;border: 1px solid #ddd;">AUTO</el-tag>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        prop="semname"
                                        class="a2"
                                        sortable
                                        label="优化师">
                                </el-table-column>
                                <el-table-column
                                        prop="account_name"
                                        class="a2"
                                        sortable
                                        label="户名">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="appid"
                                        sortable
                                        label="APP ID">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="type1"
                                        sortable
                                        label="账户来源">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        prop="fd_rate"
                                        label="返点">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        prop="api_count"
                                        label="API余额">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="操作">
                                    <template scope="scope">
                                        <div v-if="scope.row.account_status ==0" >
                                            <i class="iconfont wen1" :data-status="1" :data-id=scope.row.huid  style="cursor: pointer;margin-right:5px;color: #64cd64;">&#xe68a;</i>
                                            <i class="iconfont wen2" :data-status="2" :data-id=scope.row.huid  style="cursor: pointer;margin-right:5px;color: #faaa3a;">&#xe644;</i>
                                            <i class="iconfont wen3 disabled" :data-status="0" :data-id=scope.row.huid  style="cursor: pointer;color: #EC5A55;">&#xe6f3;</i>
                                        </div>
                                        <div v-else-if="scope.row.account_status ==1" >
                                            <i class="iconfont wen1 disabled"  :data-status="1" :data-id=scope.row.huid  style="cursor: pointer;margin-right:5px;color: #64cd64;">&#xe68a;</i>
                                            <i class="iconfont wen2" :data-status="2" :data-id=scope.row.huid  style="cursor: pointer;margin-right: 5px;color: #faaa3a;">&#xe644;</i>
                                            <i class="iconfont wen3" :data-status="0" :data-id=scope.row.huid style="cursor: pointer;color: #EC5A55;">&#xe6f3;</i>
                                        </div>
                                        <div v-else-if="scope.row.account_status ==2">
                                            <i class="iconfont wen1" :data-status="1" :data-id=scope.row.huid  style="cursor: pointer;margin-right: 5px;color: #64cd64;">&#xe68a;</i>
                                            <i class="iconfont wen2 disabled" :data-status="2" :data-id=scope.row.huid style="cursor: pointer;margin-right: 5px;color: #faaa3a;">&#xe644;</i>
                                            <i class="iconfont wen3" :data-status="0" :data-id=scope.row.huid  style="cursor: pointer;color: #EC5A55;">&#xe6f3;</i>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>

                    <!--提示-->

                    <el-dialog  :visible.sync="dialogFormVisible">
                        <div class="foot">
                            <form id="Form" >

                                <p class="modal-title">账户管理</p>
                                <ul class="first_ul">
                                    <li>
                                        <p>账户名</p>
                                        <input type="text" name="name" required>
                                    </li>
                                    <li>
                                        <p>优化师</p>
                                        <input type="text" name="sem" required>
                                    </li>
                                    <li>
                                        <p>媒体类型</p>
                                        <select class="type1">
                                        </select>
                                    </li>
                                    <li>
                                        <p></p>
                                        <select class="type2" name="account_type">
                                        </select>
                                    </li>
                                    <li>
                                        <p><span class="disan">第三方</span>账户</p>
                                        <input type="text" name="account_name" required>
                                    </li>
                                    <li>
                                        <p><span class="disan">第三方</span>密码</p>
                                        <input type="text"  name="account_password" required>
                                    </li>
                                    <li>
                                        <p>服务类型</p>
                                        <select name="server_type" id="fuwu">
                                        </select>
                                    </li>
                                    <li>
                                        <p style="vertical-align: middle;">是否渠道</p>
                                        <div style="width: 300px;display: inline-block;vertical-align: middle;">
                                            <div class="col-xs-6" style="height: 30px;line-height: 30px;">
                                                <i class="statu-start1">
                                                    <i></i>
                                                </i>
                                                <span for="qy" style="vertical-align: middle;">是</span>
                                            </div>
                                            <div class="col-xs-6" style="height: 30px;line-height: 30px;">
                                                <i class="statu-start1">
                                                    <i class="statu-end1"></i>
                                                </i>
                                                <span for="qy" style="vertical-align: middle;">否</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="youqudao" style="display: none;">
                                        <p>所有渠道</p>
                                        <select name="qudao_id" id="qudao">
                                        </select>
                                    </li>

                                    <li>
                                        <p><span class="disan"></span>Token</p>
                                        <input type="text" name="token" required>
                                    </li>
                                    <li>
                                        <p>状态</p>
                                        <div class="checkboxFive" style="display:inline-block;">
                                            <input id="adType1" name="account_status" type="radio" value="1" checked="checked">
                                            <label for="adType1">启用</label>
                                            <input id="adType2" name="account_status" type="radio" value="2" >
                                            <label for="adType2">暂停</label>
                                            <input id="adType3" name="account_status" type="radio" value="0">
                                            <label for="adType3">停用</label>
                                        </div>
                                    </li>
                                    <li>
                                        <p>返点</p>
                                        <input type="number" name="fd_rate" required>
                                    </li>
                                    <li>
                                        <p>显示类型</p>
                                        <select name="view_type" id="xianshi">
                                        </select>
                                    </li>
                                </ul>
                                <div class="modal-footer">
                                    <el-button type="button"  @click="dialogFormVisible = false">关闭
                                    </el-button>
                                    <el-button type="submit" @click="dialogFormVisible = false" class="btn btn-down">提交更改</el-button>
                                </div>
                            </form>
                        </div>
                    </el-dialog>
                    <!-- 模态框（Modal） -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    /*eslint-disable */
    import { mapGetters } from 'vuex';
    import Vue from 'vue';
//    import $ from 'jquery'
    import { getHu } from 'api/account';

    export default {
        data() {
            return {
              dialogTableVisible: false,
              dialogFormVisible: false,
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
<style rel="stylesheet/scss" lang="scss" scoped>
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
    .el-table .cell, .el-table th>div{
        padding: 0;
    }
    .box-left {
        display: none;
    }
    html{
        background:#f5f7f9;
    }
    #page-wrapper{
        left: 0 !important;
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:15px;font-style:normal;
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
    .gailan-zhi1{
        padding:0;
        background: #fff;
        padding-bottom: 30px;
    }
    .search{
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ddd;
        padding-left: 15px;
        padding-right: 40px;
        line-height: 30px;
        width: 255px;
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
    /*////////////////////////////////////*/
/*    #tb table thead tr{
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
    }*/
    /*/////////////////////////////////////////////////*/
    .statu-start,.statu-start1{
        vertical-align: middle;
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 1px solid #dfe1e4;
        border-radius: 3px;
        cursor: pointer;
    }
    .statu-end,.statu-end1{
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 100%;
        background: #01b7ee;
        margin: auto;
    }
    .keep,.xinjian{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }
    .keep:hover,.keep:focus,.xinjian:hover,.xinjian:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .keep:active,.xinjian:active{
        color: #fff !important;
        background: #01a4e0 !important;
    }
    .more-use,.more-use:hover,.more-use:focus,.more-use:active{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #64cd64 !important;
    }
    .more-wait,.more-wait:hover,.more-wait:focus,.more-wait:active{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #faaa3a !important;
    }
    .more-stop,.more-stop:hover,.more-stop:focus,.more-stop:active{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #EC5A55 !important;
    }
    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/
    /*隐藏窗口*/
    .modal {
        overflow: auto;
    }
    .modal-dialog {
        width:800px;
    }
    .modal-dialog .modal-content {
        width:100%;
        height:100%;
    }
    .modal-header {
        border-bottom:none!important;
    }
    .modal-body {
        width:460px;
        margin:0 auto;
        position: relative;
    }
    .modal-title {
        font-size:16px;
    }
    .modal-body ul {
        width:460px;
    }
    .modal-body ul li {
        height:56px;
    }
    .modal-body ul li p {
        width:76px;
        display:inline-block;
        font-size:14px;
        margin-right:30px;
        text-align:right;
    }
    .modal-body ul li input,.modal-body ul li select {
        width:300px;
        height:30px;
        outline:none;
        border:1px solid #f0f0f0;
        box-shadow:0 0 5px #f6f6f6;
        border-radius:5px;
    }
    .first_ul{
        margin-top:33px;
        width:460px;
    }
    .modal-color {
        color:#d8dce1;
    }
    .modal-footer {
        text-align: center!important;
        border-top:none!important;
    }
    .modal-footer button {
        width:110px;
        height:30px;
        outline:none;
    }
    /*单选*/
    input[type="radio"]{
        display:none;
    }
    input[type="radio"]+label{
        position:relative;
        padding-left:30px;
        line-height:20px;
        color:#333;
        font-weight:normal;
        margin-left:2px;
    }
    label {
        display:inline-block;
        max-width:100%;
        margin-bottom:5px;
        margin-right:40px;
    }
    input[type="radio"]+label::before {
        content:"";
        width:20px;
        height:20px;
        border:1px solid #cecece;
        position:absolute;
        left:0;
    }
    input[type="radio"]:checked+label::after {
        content: '\2714';
        font-size: 14px;
        position: absolute;
        top: 0px;
        left: 3px;
        color: green;
    }


    .btn-close {
        background:#ffffff;
        border:1px solid #f0f0f0;
        box-shadow:0 0 5px #f7f7f7;
        margin-right:25px;
        color: black;
    }
    .btn{
        background:#01b7ee;
        border:1px solid #99e2f8;
        box-shadow:0 0 5px #c2eefb;
        margin-left:25px;
        color: white;
    }

    /*提示*/
    .foot {
        width:100%;
        height:150px;
        background: white;
        position: absolute;
        bottom:0;
    }
    .tishi {
        width:1200px;
        height:60px;
        margin: 0 auto;
    }
    .foot_btn {
        width:100%;
        height:90px;
        position: relative;
    }
    .btn-now {
        width:110px;
        height:30px;
        background:#01b7ee;
        border:1px solid #99e2f8;
        box-shadow:0 0 5px #c2eefb;
        color: white;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin: auto;
    }
    .btn:hover {
        color: #ffffff;
    }
    /*提示*/
    .help-block {
        display: block;
        margin-top: 5px;
        margin-bottom: 10px;
        color: red;
        text-align: right;
        margin-right: 65px;
    }

    @media screen and (max-width: 1000px) {
        #page-wrapper {
            width:1000px;
            overflow: auto;
        }
    }
    .statu-start,.statu-start1{
        vertical-align: middle;
        position: relative;
        display: inline-block;
        width: 14px;
        height: 14px;
        border: 1px solid #dfe1e4;
        border-radius: 3px;
        cursor: pointer;
    }
    .statu-end,.statu-end1{
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 100%;
        background: #01b7ee;
        margin: auto;
    }
/*    .label{
        display: inline-block;
        width: 40px;
        text-align: center;
        padding: 0;
        padding-top: .3em;
        padding-bottom: .3em;
    }*/

    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

</style>


