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


    /*===================================================*/
    .box {
        width:100%;
        height:880px;
        background: white;
    }
    .qudao_title {
        width:100%;
        height:39px;
        line-height: 40px;
        font-size: 16px;
        border-bottom:1px solid #e8e8e8;
        text-indent: 30px;
        margin-bottom: 30px;
        background: #fbfbfb;
    }
    .qudao_infor {
        width:100%;
        padding:0 30px;
    }
    .qudao_tongji {
        width:100%;
        height:115px;
        border:1px solid #f0f0f0;
        font-size: 14px;
    }
    .tongji_num {
        color: #00b9f1;
    }
    .qudao_tongji_infor {
        width:20%;
        height:115px;
        text-align: center;
        float: left;
        position: relative;
    }
    .qudao_tongji_infor i {
        width: 1px;
        height: 60px;
        background: #e0e1e5;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .qudao_tongji_infor:last-child i {
        width: 0px;
    }
    .tongji_name {
        margin-top:34px;
        margin-bottom:17px;
    }
    .qudao_time {
        width:100%;
        height:90px;
        line-height: 90px;
        font-size: 14px;
        position: relative;
    }
    .qudao_select {
        height:50px;
        width:100%;
        position: relative;
    }
    .qudao_select_all {
        height: 27px;
        position: absolute;
        right:0;
        top:0;
    }
    .qudao_select_all a:hover {
        text-decoration: none;
    }
    .select_click {
        width:17px;
        height:17px;
        display: inline-block;
        border:1px solid #cbcfd8;
        margin: 0 6px;
        position: relative;
    }
    .select_yuan {
        display: inline-block;
        width:8px;
        height:8px;
        background: #02b7ee;
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        margin:auto;
    }
    .select_name {
        margin-right:30px;
    }
    input {
        height: 30px;
        margin:0 20px!important;
        border-radius: 5px;
        outline:none;
        border:1px solid #e0e1e5;
    }
    .qudao_btn,.qudao_out,.qudao_fenri {
        height: 30px;
        width: 90px;
        background: #02b7ee;
        color: white;
        box-shadow: 0px 0px 8px #9ae2f8;
        outline:none;
        display: inline-block;
        padding: 6px 12px;
        line-height: 17px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 4px;
    }
    .qudao_out {
        position: absolute;
        top: 31px;
        right: 0;
    }
    .qudao_fenri {
        position: absolute;
        top: 31px;
        right: 120px;
    }
    .col-tr-2 th,.col-th {
        border-bottom:none!important;
    }
    .qudao_table {
        width:100%;
        border:1px solid #e0e1e5;
        border-radius: 5px;
    }
    .qudao_table tr th {
        height:40px;
        text-indent: 10px;
        vertical-align:middle!important;
        background: #e0e1e5;
        border-right:1px solid #ffffff;
    }
    .qudao_table tr th:last-child {
        border-right: none;
    }
    .qudao_table tbody {
        display: block;
        height:450px;
        overflow-x: hidden;
    }
    .qudao_table tbody tr td {
        height:60px;
        text-indent: 10px;
        vertical-align:middle!important;
        border-right: 1px solid #e0e1e5;
        border-top:none!important;
    }
    .qudao_table thead,.qudao_table tbody tr {
        display:table;
        width:100%;
        table-layout:fixed;
    }
    .qudao_table tbody tr:nth-child(even) {
        background: #f6f7f9;
    }


</style>


