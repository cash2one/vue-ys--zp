<template>
        <div class="box">
            <div class="qudao_title">
                管理>用户管理
            </div>
            <div class="qudao_infor">
                <div class="qudao_time">
                    <el-input
                            placeholder="Search"
                            icon="search"
                            v-model="input2"
                            :on-icon-click="handleIconClick">
                    </el-input>
                    <el-button type="primary qudao_btn" @click="fn()">注册账户</el-button>
                        <el-radio-group v-model="radio">
                            <el-radio :label="1">优化师</el-radio>
                            <el-radio :label="4">客户</el-radio>
                            <el-radio :label="2">技术</el-radio>
                            <el-radio :label="3">渠道</el-radio>

                        </el-radio-group>
                </div>



                        <el-row>
                            <el-table
                                    :data="getAllyonghu"
                                    height="600"
                                    border
                                    style="width: 100%">
                                <el-table-column
                                        prop="_id"
                                        label="真实姓名">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        label="用户名">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{  }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        label="用户类型">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.dl_total }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"

                                        label="手机号">
                                    <template scope="scope">
                                        <span style="margin-left: 10px">{{ scope.row.phone }}</span>
                                    </template>
                                </el-table-column>
                                    <el-table-column
                                            class="a2"
                                            label="注册时间">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.ios_pv_total }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            class="a2"

                                            label="最近登录时间">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.last_login_date }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                            class="a2"
                                            label="邮箱">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{ scope.row.email }}</span>
                                        </template>
                                    </el-table-column>

                                    <el-table-column
                                            class="a2"
                                            label="操作">
                                        <template scope="scope">
                                            <span style="margin-left: 10px">{{  }}</span>
                                        </template>
                                    </el-table-column>

                            </el-table>
                        </el-row>
                </div>
            </div>
</template>
<script>

    import { mapGetters } from 'vuex';
    import { Allyonghu } from 'api/account';

    export default {
        data() {
            return {
                getAllyonghu: [],
                value6: '',
                value: '',
                value1:'',
                radio: 5,
                loading:'',

            }
        },
        created:function(){

            var _self=this;
            Allyonghu({uid:111}).then(response => {
                console.log(response);
            _self.getAllyonghu=response.data;
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
        height:30px;
        margin:30px 0;
        line-height: 40px;
        font-size: 14px;
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
    /*input*/
    .el-input__inner {
        height: 30px !important;
    }
    .el-input {
        width:250px;
        height:30px;
        float: left;
    }
    .el-button {
        height:30px;
        line-height: 10px;
        margin-left: 30px;
    }

    .el-button--primary {
        float: left;
    }
    .el-radio-group {
        float: right;
        margin-top:10px;
    }
    .el-input__icon {
        height:30px;
    }
    .el-table td, .el-table th.is-leaf {
        text-align: center;
    }
    label {
        margin:0;
    }
</style>


