<template>
    <div id="page-wrapper">
        <div id="accound_users" >
            <div class="account_title">
                <a href="javascript:;" class="click_up">
                    管理 > 客户管理
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
                </div>
                <div class="allBox list">
                    <div class="account_box"  v-for="(data,index) in grtallkehu">
                        <ul class="client_box ">
                            <li class="client_title name_1">
                                {{ data.name }}
                            </li>
                            <li class="client_banner">
                                <P>用户</P>
                                <P>优化师</P>
                                <P>操作</P>
                            </li>
                            <li class="client_infor" >
                                <div class="client_inforBox">

                                    <div class="client" v-for="sem in grtallzhanghus[index]">
                                        <P>
                                            {{sem.huname}}
                                        </P>
                                        <P>
                                            {{sem.semname}}
                                        </P>
                                        <p>
                                            <a href="javascript:;">
                                                <i class="iconfont delete_infor" data-toggle="modal"></i>
                                            </a>
                                        </p>
                                    </div>

                                    <div class="client add_client">
                                        <el-button type="primary"  @click="handleAdd" >添加账户 </el-button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--新增界面-->
                    <el-dialog title="账户" v-model="addFormVisible" :close-on-click-modal="false">
                        <el-input
                                placeholder="Search"
                                icon="search"
                                v-model="input2"
                                :on-icon-click="handleIconClick">
                        </el-input>
                        <el-table
                                :data="hun"
                                height="350"
                                border
                                style="width: 100%">
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
                            <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                        </div>
                    </el-dialog>
                </div>
            </div>
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
                hun:[],
                input2:'',
                click:'',
                addFormVisible: false,
            }
        },
        created:function(){
            //全部客户
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
                console.log(zh);
                console.log(zu);
                _self.grtallkehu = zu;
                _self.grtallzhanghus = zh;

                /*   _self.loading = false;
                 ;*/
            }).catch(err => {
                _self.$message.error(err);
//                  _self.loading = false;
            });
            //获取全部账户
            var _this=this;
            getHu({uid:111}).then(response => {
                _this.hun=response.data;
            }).catch(err => {
                _this.$message.error(err);
            });
        },
        methods:{
            handleAdd: function () {
                this.addFormVisible = true;
            },
        }
    }
</script>
<style rel="stylesheet/scss" scoped lang="scss">
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
        height:30px;
        padding:0 30px;
        margin:30px 0;
    }
    .account_search {
        width:220px;
        height:30px;
        border:1px solid #f0f0f0;
        border-radius: 5px;
        outline: none;
        /*background: url(./images/sousuo.png) no-repeat center right;*/
        -webkit-background-size:10% 0%;
        background-size:10% 50%;
        float:left;
    }
    .select {
        float:right;
    }
    .add_ant {
        height: 30px;
        width: 110px;
        background: #4db3ff;
        color: #fff;
        box-shadow: 0 0 8px #4db3ff;
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
    .account_box {
        width:100%;
        padding:0 30px;
        margin-bottom:30px;
    }
    .client_box {
        width:100%;
        height:180px;
        border:1px solid #e1e1e1;
        margin-bottom: 30px;
        overflow: hidden;
    }
    .client_box li,.client_infor {
        float: left;
        height:180px;
    }
    .client_infor {
        overflow-y:hidden;
        white-space:nowrap;
    }
    .client_title {
        text-align: center;
        line-height: 180px;
        background: #4db3ff;
        color: white;
        font-size: 14px;
    }
    .client_banner {
        background: #e0e1e5;
        color: black;
    }
    .client_banner p {
        border-bottom: 1px solid #fdfeff;
        margin:0;
    }
    .client_banner p:last-child {
        border: none;
    }
    .client_title,.client_banner {
        width:90px;
    }
    .client_title p,.client_banner p {
        width:100%;
        height:60px;
        text-align: center;
        line-height: 60px;
        font-size: 14px;
    }
    .client {
        float: left;
        width:170px;
        height:100%;
    }
    .client p {
        width:100%;
        height:60px;
        text-align: center;
        line-height: 60px;
        margin:0;
        border-right: 1px solid #f4f4f4;
        border-bottom:1px solid #f4f4f4;
    }
    .client p:first-child,.client p:last-child  {
        background: #f6f7f9;
    }

    .delete_infor {
        font-size: 18px;
        color: #e69b9f;
    }
    .add_client {
        width:160px;
        height:180px;
        position: relative;
    }
    .add_client button {
        width: 110px;
        height: 30px;
        outline: none;
        float: left;
        border: none;
        background: #4db3ff;
        color: #fff;
        border-radius: 5px;
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        margin: auto;
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
        background: #4db3ff;
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
        background: #4db3ff;
        color: white;
    }
    /*ipnput*/
    .el-input {
        width:200px;
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
    @media screen and (max-width: 1000px) {
        #page-wrapper {
            width: 1000px;
            overflow: auto;
        }
    }

</style>


