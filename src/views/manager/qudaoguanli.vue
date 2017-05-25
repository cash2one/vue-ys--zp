<template>
        <div id="accound_users" >
            <div class="account_title">
                <a href="javascript:;" class="click_up">
                    管理 > 渠道管理
                </a>
            </div>
            <div id="kehu_user">
                <div class="account_add">
                    <el-input
                            placeholder="Search"
                            icon="search"
                            v-model="input2"
                            >
                    </el-input>
                    <el-button type="primary"  @click="handleAdd">添加账户</el-button>
                    <!--新增界面-->
                    <el-dialog title="添加账户" v-model="addFormVisible" :close-on-click-modal="false">
                        <el-input
                                placeholder="Search"
                                icon="search"
                                v-model="input3"
                                >
                        </el-input>
                        <el-table
                                :data="hun"
                                height="350"
                                border
                                style="width: 100%"
                               >
                            <el-table-column type="selection" width="55">

                            </el-table-column>
                            <el-table-column
                                    label="账户名"
                            >
                                <template scope="scope">
                                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="优化师"
                            >
                                <template scope="scope">
                                    <span style="margin-left: 10px">{{ scope.row.semname }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click.native="addFormVisible = false">取消</el-button>
                            <el-button type="primary" @click.native="addSubmit" >提交</el-button>
                        </div>
                    </el-dialog>
                </div>
            </div>
            <div class="clear"></div>
            <div class="qudao_table">
                <el-table
                        height="40"
                        border
                        style="width: 100%">
                    <el-table-column
                            label="渠道"
                    >
                    </el-table-column>
                    <el-table-column
                            label="户名"
                    >
                    </el-table-column>
                    <el-table-column
                            label="优化师"
                    >
                    </el-table-column>
                    <el-table-column
                            label="删除"
                    >
                    </el-table-column>
                </el-table>
                <el-collapse v-model="activeNames" accordion @change="handleChange">
                    <el-collapse-item  :name= data v-for="(data,index) in grtallkehu"  :title= data.name>
                        <el-table
                                :data="grtallzhanghus[index]"
                                border
                                :class="table"
                                style="width: 100%"
                        >
                            <el-table-column
                            >
                                <template scope="scope">
                                    <span style="margin-left: 10px">{{ scope.row.huname }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                            >
                                <template scope="scope">
                                    <span style="margin-left: 10px"></span>
                                </template>
                            </el-table-column>
                            <el-table-column
                            >
                                <template scope="scope">
                                    <span style="margin-left: 10px">{{ scope.row.semname }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                            >
                                <template scope="scope">
                                    <span style="margin-left: 10px"></span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>

</template>
<script>

    import { mapGetters } from 'vuex';
    import { Allkehu ,getHu} from 'api/account';

    export default {
        data() {
            return {
                grtallkehu:[],
                grtallzhanghus:[],
                getHu:[],
                hun:[],
                click:'',
                activeNames: ['1'],
                addFormVisible: false,
                input2:'',
                input3:'',
            }
        },
        created:function(){
            //获取全部账户
            var _this=this;
            getHu({uid:111}).then(response => {
                _this.hun=response.data;
            }).catch(err => {
                _this.$message.error(err);
            });
            //周任务
            var _self=this;
            let zu = [];
            let zh = [];
            Allkehu({uid:111}).then(response => {
                for(var i in response.data) {

                    zu.push(response.data[i].xinxi);
                }
                for(var n in response.data) {

                    zh.push(response.data[n].zhanghus);
                }
                console.log(zh[0]);
                _self.grtallkehu = zu;
                _self.grtallzhanghus = zh;

                /*   _self.loading = false;
                 ;*/
            }).catch(err => {
                _self.$message.error(err);
//                  _self.loading = false;
            });


        },
        methods:{
            handleAdd: function () {
                this.addFormVisible = true;
            },
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";

    .box-left {
        display: none;
    }
    #page-wrapper {
        left:0;
    }
    #accound_users {
        width: 100%;
        background: #fff;
    }
    .account_title {
        line-height: 40px;
        font-size: 14px;
        border-bottom:1px solid #e8e8e8;
        padding-left:30px;
        background: #fbfbfb;
    }
    .account_title a {
        width:100%;
        height:39px;
        display: inline-block;
        text-decoration: none;
    }
    .account_add {
        padding:0 30px;
        margin:30px 0;
        height:30px;
    }
    .account_search {
        width:220px;
        height:30px;
        border:1px solid #f0f0f0;
        border-radius: 5px;
        outline: none;
        /*background: url(./images/sousuo.png) no-repeat;*/
        background-position:90% center;
        -webkit-background-size:10% 0%;
        background-size:7% 50%;
    }
    .btn-group {
        width:180px;
        height:30px;
        float:right;
        border:1px solid #f0f0f0;
    }
    .left_a {
        width:148px;
        height:30px;
        border: 1px solid #f0f0f0;
        border-right: none;
    }
    .right_a  {
        width:30px;
        height:30px;
    }
    .btn-group>.btn+.dropdown-toggle {
        padding-left: 11px;
        padding-top: 10px;
        border-left: 1px solid #f0f0f0;
    }
    .btn-primary {
        background: white;
        color: black;
    }
    .btn-primary:hover {
        background: white;
        color: black;
    }

    .btn .caret {
        margin-left: 0px!important;
        margin-bottom: 12px!important;
    }
    .add_zhanghu {
        height: 30px;
        width: 110px;
        float:right;
        background: #02b7ee;
        color: #fff;
        box-shadow: 0 0 8px #9ae2f8;
        outline: none;
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
        margin-left:30px;
    }
    /*表格*/

    /*内部table*/


    /*弹窗*/
    .moadl_box {
        width:940px;
        height:610px;
        background: white;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin:auto;
        padding:70px 200px  ;
    }
    .moadl_input {
        width:100%;
        height:30px;
        margin-bottom: 30px;
    }
    .moadl_input input {
        height:30px;
        width:220px;
    }
    .table thead, .table tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
    }

    .table thead tr th {
        border:none;
        padding:0;
        border-right: 1px solid #ffffff;
        height: 38px;
        line-height: 38px;
        font-weight: normal;
        border-bottom:none!important;
    }

    .table thead tr th {
        background: #dfe1e4;
    }

    .table thead tr th:first-child {
        height:38px;
        line-height: 38px;
        background: #00b7ee;
        text-align: center;
        color: white;
        text-indent: 0px!important;
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
    .table tbody tr:nth-of-type(even) {
        background: #f5f7f9;
    }

    .table thead tr th:last-child {
        text-align: center;
    }
    .table thead tr th,.table tbody tr td {
        text-indent:10px;
    }
    .table tbody tr th:first-child,.table tbody tr td:first-child {
        text-indent:0;
    }
    .table tbody tr td {
        height: 38px;
        border-top:none!important;
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
        position: relative;
    }

    .table tbody {
        display: block;
        height: 330px;
        overflow: auto;
        border: 1px solid #e1e1e1;
        bottom-top:none;
    }
    .modal-footer {
        width:100%;
        text-align: center!important;
        border-top:none!important;
    }
    .modal-footer button {
        width: 110px;
        height: 30px;
        outline: none;
        border: none;
        background: #00b7ee;
        color: #fff;
        border-radius: 5px;
    }
    .btn-close {
        margin-right:40px;
    }
    .btn-add {
        margin-left:40px;
    }
    .dropdown_li {
        width:180px;
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

    #delete, .to_lead {
        width: 300px;
        height: 100px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    #delete > p {
        height: 28px;
        line-height: 28px;
        border-bottom: 1px solid #dfe1e4;
        text-align: center;
        color: red;
    }

    #delete button, .content button, .to_lead button {
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
    /*开头*/
    .qudao_title {
        width: 100%;
        height: 39px;
        line-height: 40px;
        font-size: 16px;
        border-bottom: 1px solid #e8e8e8;
        text-indent: 30px;
        margin-bottom: 30px;
        background: #fbfbfb;
    }
    /*ipnput*/
    .el-input {
        width:200px;
    }
        /*表格*/
    .el-collapse-item thead {
        display: none;
    }
    .qudao_table {
        width:100%;
        padding:30px;
    }
    /*弹窗*/
    .el-dialog {
        width:800px;
    }
    .el-dialog__body {
        padding: 30px;
    }
    .el-input {
        margin-bottom: 30px;
    }
    .el-pagination {
        margin-top: 10px;
    }
    .el-table__body-wrapper {
        overflow-x: hidden;
    }
    .dialog-footer {
        text-align: center;
    }
    .dialog-footer button {
        width: 110px;
        height: 40px;
    }
    .el-collapse-item__content {
        padding:0!important;
    }
    @media screen and (max-width: 1000px) {
        #page-wrapper {
            width:1000px;
            overflow: auto;
        }
    }
</style>


