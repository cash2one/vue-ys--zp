<template>
    <el-row>
        <el-col :span="24" class="gailan">
            <el-col :span='24' class="gailan-toubiao">
                各计划消费占比
            </el-col>
            <el-col :span='24' class="gailan-zhi">
                <el-col :span='24' style="margin-top: 30px;">
                    <div style="float: left">
                        <div class="lav-li" style="display: inline-block">
                            <span class="la1 clink">消费占比</span><span class="la2">计划分布</span>
                        </div>
                    </div>
                    <div style="float: right;margin-right: 50px;">
                        <el-select v-model="value"  placeholder="请选择" style="display: none">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        <!--<select class="trim" style="display: none;">
                            <option value="0">展现 消费</option>
                            <option value="1">展现 点击</option>
                            <option value="2">展现 下载</option>
                            <option value="3">消费 下载</option>
                        </select>-->
                        <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions0">
                        </el-date-picker>
                        <input type="text" readonly style="display:none;width: 150px;" name="birthday" class="birthday form-control" />
                    </div>
                </el-col>
                <div class="col-xs-12 tol1" id="main"  style="height:300px;"></div>
                <!--<div class="col-xs-12 tol2" id="main1"  style="height:300px;"></div>-->
            </el-col>
        </el-col>
        <el-col :span='24' class="gailan" style="margin-top: 30px;">
            <el-col :span='24' class="gailan-toubiao">
                各计划数据统计
            </el-col>
            <el-col :span='24' class="gailan-zhi" id="users">
                <el-col :span='24' style="margin-top: 30px;">
                    <div class="nav-li" style="display: inline-block">
                        <span class="li1 clink">下载</span><span class="li2">激活</span>
                    </div>
                    <div class="searchs" style="display: inline-block;">
                        <input type="text" placeholder="Search" class="search"/>
                        <span class="glyphicon glyphicon-search" style="color:#666;"></span>
                    </div>
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
                                <span style="margin-left: 10px">{{ scope.row.cost }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="展示变动">
                            <template scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.pv }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                class="a2"
                                sortable
                                label="点击变动">
                            <template scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.pv }}</span>
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
                </el-col>
            </el-col>
        </el-col>
        </el-row>
</template>
<script>

  import { mapGetters } from 'vuex';
  import { getPlanTable } from 'api/account';

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
              pickerOptions0: {
                disabledDate(time) {
                  return time.getTime() > Date.now() ;//不算今天往后禁止
//                  return time.getTime() > Date.now()- 8.64e7 ;算上今天往后禁止
//                  return time.getTime() < Date.now()- 8.64e7 ;不算今天往前禁止
                }
              },
              tableData3: [{"name":"呼和浩特_iOS_社保查询","cost":"4.23","cost_change":"-0","pv":7,"pv_change":-1,"change_rate":"-12.5","chengben":"4.23","chengben_change":"1.88","button_cost":"0.00","button_cost_change":"0.000","view":94,"view_change":-11,"pv_rate":"7","pv_rate_change":"-0","h5_down":1,"h5_down_change":"-1","h5_down_rate":"1","h5_down_rate_change":"-1","activity":0,"activity_change":0,"activity_rate":"0.00","activity_rate_change":"0.00","activity_chengben":"Infinity","activity_chengben_change":"NaN","click_button":0,"click_button_change":0,"view_button":6,"view_button_change":-2}],
              value: '0',
              value1:''
            }
        },
      created:function(){
        var _self=this;
        getPlanTable({uid:111}).then(response => {
          console.log(response);
          _self.tableData3=response.data;
            /*   _self.loading = false;
                              ;*/

        }).catch(err => {
          _self.$message.error(err);
//                  _self.loading = false;
        });

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
    .el-table__body-wrapper {
        overflow: auto;
        overflow-x: hidden;
        position: relative;
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
    /*////////////////////////////////////*/
    /*#tb table thead tr{
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
    }*/
    /*////////////////////////////////////////////////*/
   /* #tb table.tablesorter thead tr .tablesorter-header-inner{
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
   /* #tb .col-xs-12,#tb .col-xs-7,#tb .col-xs-5{
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


</style>


