<template>
    <div class="bod-container">
        <div  class="clear" style="padding: 0">
            <div style="float: left">
                <div class="lav-li" style="display: inline-block">
                    <span class="la1 clink">单天数据</span>
                </div>
            </div>
            <div style="float: right">
                <!--<input type="text" readonly style="width: 150px;display: inline-block;margin-left: 30px;margin-right: 30px;" name="birthday" class="birthday form-control" />-->
                <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
                <button type="button" class="checkn">查看</button>
            </div>
        </div>
        <div  class="gailan" style="margin-top: 30px;">
            <div  class="gailan-toubiao pull2" style="cursor: pointer;">
                <span class="shang_tit">各单元消费分布</span><!--<i class="iconfont1 wen">&#xe650;</i>-->
            </div>
            <div  class="gailan-zhi drag2">
                <div  class="clear" style="margin-top: 30px;width: 100%">
                    <div style="float: left">
                    </div>
                    <div style="float: right">
                        <select class="trim">
                            <option value="0">展现 消费</option>
                            <option value="1">展现 点击</option>
                        </select>
                    </div>
                </div>
                <div  id="main"  style="height:300px;"></div>
            </div>
        </div>
        <div  class="gailan" style="margin-top: 30px;">
            <div  class="gailan-toubiao pull1" style="cursor: pointer;">
                <span class="xia_tit">单元单天数据统计</span><i class="iconfont1 wen">&#xe650;</i>
            </div>
            <div  class="drag1" id="users">

                <el-row>
                    <el-col :span="24">
                        <div  style="margin-top: 30px;">
                            <!-- <div class="nav-li" style="display: inline-block">
                                 <span class="li1 clink">下载</span><span class="li2">激活</span>
                             </div>-->

                            <div class="searchs" style="display: inline-block;margin-left: 0;">
                                <input type="text" placeholder="Search" class="search"/>
                                <span class="glyphicon glyphicon-search" style="color:#666;"></span>
                            </div>
                        </div>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="24">
                        <div  style="margin-top: 30px;" id="tb">

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
                                        <div  class="cost1" style="font-weight:bold;">
                                            {{ scope.row.cost }}
                                        </div>
                                        <div  class="cost2" style="font-size: 12px;">
                                            {{ scope.row.cost_change }}
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="展示变动">
                                    <template scope="scope">
                                        <div  class="cost1" style="font-weight:bold;">{{ scope.row.view }}
                                        </div>
                                        <div  class="view2" style="font-size: 12px;" v-html="scope.row.view_change">
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="点击变动">
                                    <template scope="scope">
                                        <el-row>
                                            <el-col :span='12' class="" style="padding: 0;">
                                                <p class="col-xs-12 cost1" style="font-weight:bold;"v-html="scope.row.pv"></p>
                                                <p class="col-xs-12 pv2" style="font-size: 12px;" v-html="scope.row.pv_change"></p>
                                            </el-col>
                                            <el-col :span='12' class=""  style="padding: 0;">
                                                <p class="col-xs-12 pv1" style="font-weight:bold;" > <span v-html="scope.row.pv_rate"></span>%</p>
                                                <p class="col-xs-12 pv2" style="font-size: 12px;" v-html="scope.row.pv_rate_change"></p>
                                            </el-col>
                                        </el-row>

                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="下载变动">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.pv }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="下载成本变动">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.pv }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="激活变动">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.pv }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="激活成本变动">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.pv }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="按钮消费">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.pv }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="按钮展现">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.pv }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="按钮下载">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.pv }}</span>
                                    </template>
                                </el-table-column>
                            </el-table>


                        </div>
                    </el-col>

                </el-row>
            </div>
        </div>
    </div>
</template>
<script>

    import { mapGetters } from 'vuex';
    import { getPlanTable } from 'api/account';

    export default {
      name: 'bod',
        data() {
            return {
              value1:'',
              tableData3:[],
            }
        },
        mounted(){
            var _self=this;
          getPlanTable({uid:111}).then(response => {
            console.log(response);
            this.tableData3=response.data;
              /*   _self.loading = false;
               ;*/

          }).catch(err => {
            this.$message.error(err);
//                  _self.loading = false;
          });

        }
    }

</script>
<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";
    .bod-container{
        width: 100%;
    }
    html{
        background:#f5f7f9;
    }
    .el-table .cell, .el-table th>div{
        padding: 0;
    }
    #page-wrapper{
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        /*-webkit-transform: scale(.5);*/
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .iconfont1{
        font-family:"iconfont" !important;
        font-size:13px;font-style:normal;
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
        overflow: hidden;
        padding:0;
        background: #fff;
        padding-bottom: 30px;
    }
    .li1{
        display: inline-block;
        width: 110px;
        text-align: center;
        color: #00b7ee;
        height: 30px;
        line-height: 30px;
        /*background: #fff;*/
        cursor: pointer;
        border-top: 1px solid #00b7ee;
        border-left: 1px solid #00b7ee;
        border-bottom: 1px solid #00b7ee;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
    .la1{
        display: inline-block;
        width: 110px;
        text-align: center;
        color: #00b7ee;
        height: 30px;
        line-height: 30px;
        /*background: #fff;*/
        cursor: pointer;
        border-top: 1px solid #00b7ee;
        border-left: 1px solid #00b7ee;
        border-bottom: 1px solid #00b7ee;
        /*border-bottom-left-radius: 5px;*/
        /*border-top-left-radius: 5px;*/
        border-radius: 5px;
    }
    .li2,.la2{
        display: inline-block;
        width: 110px;
        text-align: center;
        height: 30px;
        /*background: #fff;*/
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
    .checkn{
        padding: 4px 0;
        border: 0;
        width: 100px;
        border-radius: 5px;
        color: #fff;
        background: #01b7ee;
    }
    .birthday,.birthday1,.birthday2{
        background: transparent !important;
    }
    .checkn:hover,.checkn:focus{
        color: #fff;
        background: #1bcaff;
    }
    .checkn:active{
        color: #fff;
        background: #01a4e0;
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
    .wen{
        transition-duration: 0.3s;
        transform: rotate(0deg);
    }
</style>


