<template>
        <div class="box">
            <div class="qudao_title">
                分渠道展示
            </div>
            <div class="qudao_infor">
                <div class="qudao_tongji">
                    <div class="qudao_tongji_infor allClick">
                        <p class="tongji_name">总点击</p>
                        <p class="tongji_num pv_total">loading..</p>
                        <i></i>
                    </div>
                    <div class="qudao_tongji_infor allDown">
                        <p class="tongji_name">总下载</p>
                        <p class="tongji_num dl_total">loading..</p>
                        <i></i>
                    </div>
                    <div class="qudao_tongji_infor allIos">
                        <p class="tongji_name">ios下载</p>
                        <p class="tongji_num ios_num">loading..</p>
                        <i></i>
                    </div>
                    <div class="qudao_tongji_infor allAnd">
                        <p class="tongji_name">Android下载</p>
                        <p class="tongji_num android_num">loading..</p>
                        <i></i>
                    </div>
                    <div class="qudao_tongji_infor alljihuo">
                        <p class="tongji_name">总激活</p>
                        <p class="tongji_num jihuo_num">0</p>
                        <i></i>
                    </div>
                </div>
                <div class="qudao_time">
                    <el-date-picker
                            v-model="value6"
                            type="daterange"
                            placeholder="选择日期范围">
                    </el-date-picker>
                    <el-button type="primary qudao_btn">查看</el-button>
                    <el-button type="primary qudao_fenri">分日导出</el-button>
                    <el-button type="primary qudao_fenri qudao_out">导出</el-button>
                </div>
                <div class="qudao_select">
                    <el-radio-group v-model="radio">
                        <el-radio :label="1">全部</el-radio>
                        <el-radio :label="2">百度来源</el-radio>
                        <el-radio :label="3">搜索</el-radio>
                        <el-radio :label="4">其他</el-radio>
                        <el-radio :label="5">百度其他</el-radio>
                    </el-radio-group>
                </div>
                        <el-row>
                            <el-table
                                    :data="tableQudao"
                                    height="600"
                                    border
                                    :default-sort = "{prop: '_id', order: 'descending'}"
                                    style="width: 100%">
                                <el-table-column
                                        prop="_id"
                                        sortable
                                        label="渠道号">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="总点击">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.pv_total }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="总下载">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.dl_total }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="总激活">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.ios_pv_total }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="ios">
                                    <el-table-column
                                            class="a2"
                                            sortable
                                            label="激活率">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.ios_pv_total }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            class="a2"
                                            sortable
                                            label="点击">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.ios_pv_total }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            class="a2"
                                            sortable
                                            label="下载">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.ios_pv_total }}</span>
                                        </template>
                                    </el-table-column>
                                  </el-table-column>
                                <el-table-column label="ios">
                                    <el-table-column
                                            class="a2"
                                            sortable
                                            label="点击">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.ios_pv_total }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            class="a2"
                                            sortable
                                            label="下载">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.ios_pv_total }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            class="a2"
                                            sortable
                                            label="下载率">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.ios_pv_total }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table-column>
                            </el-table>
                        </el-row>
                </div>
            </div>
    </div>
</template>
<script>

    import { mapGetters } from 'vuex';
    import { getlandpageAll } from 'api/account';

    export default {
        data() {
            return {
                tableQudao: [],
                value6: '',
                value: '',
                value1:'',
                radio:1,
            }
        },
        created:function(){
            var _self=this;
            getlandpageAll({uid:111}).then(response => {
                console.log(response);
            _self.tableQudao=response.data;
            /*   _self.loading = false;
             ;*/

        }).catch(err => {
                _self.$message.error(err);
//                  _self.loading = false;
        });
        }
    }
</script>
<style scoped  rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";
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
        text-align: right;
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
/*日历*/
    .el-date-editor.el-input {
        width: 160px;
        margin-right: 34px;
    }
    /*button*/
    .qudao_fenri {
        position: absolute;
        top: 31px;
        right: 0;
    }
    /*单选*/
    .el-radio__inner {
        border: 1px solid #bfcbd9;
        width: 18px;
        height: 18px;
        border-radius: 0;
        cursor: pointer;
        box-sizing: border-box;
    }
.el-radio__inner::after {
width: 6px;
height: 6px;
 border-radius: 0;
background-color: #20a0ff;
content: "";
position: absolute;
left: 50%;
top: 50%;
-ms-transform: translate(-50%,-50%) scale(0);
transform: translate(-50%,-50%) scale(0);
transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
}
    .el-radio__input.is-checked .el-radio__inner {
        border-color: #20a0ff;
        background: white;
    }
    /*table*/
    .el-table th>.cell {
        text-align: center;
    }
</style>


