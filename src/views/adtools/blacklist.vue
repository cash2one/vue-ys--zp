<template>
    <div class="heimingdan">
        <div class="heimingdan_select">
            <el-radio-group v-model="radio3" @change="fn()">
                <el-radio-button label="本账户黑名单"></el-radio-button>
                <el-radio-button label="全账户黑名单"></el-radio-button>
            </el-radio-group>
            <div class="remove_h">
                <el-button class="click_h"  type="primary">批量删除</el-button>

                <el-button class="click_h" type="primary" @change="add">添加</el-button>
            </div>
        </div>
        <div class="clear"></div>
        <div class="heimingdan_list">
            <div class="account_title">
                <a href="javascript:;" class="click_up">
                    黑名单操作列表
                </a>
            </div>
            <div class="heimingdan_table" v-if="willShow">
                <el-table
                        :data="getcheck"
                        height="600"
                        border
                        style="width: 100%">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="词"

                    >
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.checkName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="原因"
                    >
                        <template scope="scope">
                            <span style="margin-left: 10px"></span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            width="100"
                            label="操作"
                    >
                        <template scope="scope">
                            <el-input v-model="input" class="e-border" placeholder="请输入内容"></el-input>
                        </template>
                    </el-table-column>
                </el-table>
            </div>


            <div class="heimingdan_table" v-else="">
                <el-table
                        :data="getcheck"
                        height="600"
                        border
                        style="width: 100%">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="词"

                    >
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.checkName }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="原因"
                    >
                        <template scope="scope">
                            <span style="margin-left: 10px"></span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            width="100"
                            label="操作"
                    >
                        <template scope="scope">
                            <el-input v-model="input" class="e-border" placeholder="请输入内容"></el-input>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>

    </div>
</template>
<script>

    import { mapGetters } from 'vuex';
    import { getcheck , checkhistory} from 'api/account';

    export default {
        data() {
            return {
                getcheck: [],
                history:[],
                radio3: '本账户黑名单',
                willShow:true,
                willFalse:false,
            }
        },
        created:function(){

        },
        methods: {
            fn: function () {
                if (this.willShow == true) {
                    this.willShow = false;
                } else {
                    this.willShow = true
                }
            },
            add: function(){

            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";

    .heimingdan_select {
        width: 100%;
        height: 30px;
        margin:30px;

    }

    .click_h {
        width: 110px;
        height: 30px;
        outline: none;
        float: left;
        border: none;
    }

    #btn_1 {
        background: #ffffff;
        border: 1px solid #28acff;
        color: #a3ddf7;
    }

    .btn_h {
        border-radius: 5px 0 0 5px;
    }

    #btn_2 {
        background: #00b7ee;
        border: 1px solid #28acff;
        color: #ffffff;
    }

    .all_h {
        border-radius: 0 5px 5px 0;
    }

    .remove_h {
        float: right;
        margin-right:60px;
    }

    .btn_r1 {
        background: #00b7ee;
        color: #ffffff;
        margin-right: 60px;
        border-radius: 5px;
    }

    .btn_r2 {
        background: #00b7ee;
        color: #ffffff;
        border-radius: 5px;
    }

    .heimingdan_list {
        width: 100%;
        border-shadow: 0 0 5px #eceef0;
        background: white;
    }

    .account_title {
        line-height: 40px;
        font-size: 14px;
        border-bottom: 1px solid #e8e8e8;
        padding-left: 30px;
        background: #fbfbfb;
    }

    .account_title a {
        width: 100%;
        height: 39px;
        display: inline-block;
        text-decoration: none;
        color: black;
    }

    .account_title a:hover {
        text-decoration: none;
    }
    /*表格*/
    .heimingdan_table {
        width: 100%;
        padding: 30px 30px 0 30px;
    }

    .table {
        border: 1px solid #dfe1e4;
        border-radius: 10px;
    }

    .table thead, .table tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
    }

    .table thead tr th {
        border-right: 1px solid #ffffff;
        height: 40px;
        font-weight: normal;
        border-bottom: none;
        border-left: none;
        border-top: none;
    }

    .table thead tr th {
        background: #dfe1e4;
    }

    .table thead tr th:first-child {
        background: #00b7ee;
        text-align: center;
        color: white;
        padding: 0;
    }
    .table thead tr th:last-child {
        border-right: none;
    }
    .table thead tr th:first-child button {
        display: inline-block;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
    }

    .table thead tr th:last-child {
        text-align: center;
    }

    .table tbody tr:nth-of-type(even) {
        background: #f5f7f9;
    }

    .table tbody tr td {
        height: 60px;
        border-bottom: 1px solid #dfe1e4;
        border-right: 1px solid #dfe1e4;
        vertical-align: middle;
    }
    .last_td {
        padding: 0;
    }
    .last_td a {
        display: inline-block;
    }
    .table tbody tr td:first-child, .table tbody tr td:last-child {
        text-align: center;
        position: relative;
    }

    .table tbody {
        display: block;
        height: 760px;
        overflow: auto;
    }

    .icon-size {
        font-size: 16px;
        color: red;
    }

    /*自定义选框*/

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

    /*背景弹框*/
    .thishi {
        width: 900px;
        height: 250px;
        padding: 30px;
        position: absolute;
        left: 0;
        right: 0;
        top: 30%;
        /* bottom: 0; */
        margin: auto;
        background: #fff;
    }

    .h_hide {
        display: none;
    }

    .thishi > p {
        font-size: 16px;
    }

    .delete, .to_lead {
        width: 300px;
        height: 100px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .delete > p {
        height: 28px;
        line-height: 28px;
        border-bottom: 1px solid #dfe1e4;
        text-align: center;
        color: red;
    }

    .delete button, .content button, .to_lead button {
        width: 110px;
        height: 30px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #dfe1e4;
    }
    .to_lead .btn {
        width: 110px;
        height: 30px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #dfe1e4;
    }
    .cancel {
        margin: 40px 0 0 10px;
        float: left;
        color: black;
        background: white;
    }

    .ok {
        margin: 40px 10px 0 0;
        float: right;
        background: #00b7ee;
        color: white;
    }

    /*导入弹出框*/
    .foot {
        width: 100%;
        height: 250px;
        background: white;
        padding: 20px;
        font-size: 16px;
        position: absolute;
        bottom: 0;
    }

    .foot > p {
        margin-bottom: 10px;
    }

    .content {
        width: 460px;
        height: 180px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 18px;
        margin: auto;
    }

    .content ul li {
        height: 60px;
        margin-bottom: 15px;
    }

    .content ul li span {
        width: 50px;
        display: inline-block;
        float: left;
        text-align: right;
    }

    .content ul li textarea {
        width: 300px;
        height: 60px;
        resize: none;
        margin-left: 30px;
        border-radius: 5px;
    }

    .content ul li a {
        float: right;
    }

    .content_off {
        margin-left: 81px;
        margin-right: 55px;
    }

    .content_off {
        color: black;
        background: white;
    }

    .content_on {
        background: #00b7ee;
        color: white;
    }

    .to_lead input {
        width: 300px;
        height: 30px;
    }

    .to_lead p span {
        position: absolute;
        width: 80px;
        right: -100px;
    }

    /*文件上传*/
    .file_text {
        opacity: 0;
        position: absolute;
        top: -2px;
    }
</style>


