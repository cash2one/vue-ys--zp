<template>
        <div class="box">
            <div class="qudao_title">
                管理>分配账户
            </div>
            <div class="heimingdan_select" >
                <el-select v-model="value"   placeholder="请选择">
                    <el-option
                            v-for="item in Allzu"
                            :label="item.name"
                            :value="item.value"
                            :key="item.value"
                            :disabled="item.disabled">
                    </el-option>
                </el-select>
                <div class="remove_h">
                    <el-button type="primary"　class="click_h btn_r1 ">取消</el-button>
                    <el-button type="primary"　class="click_h btn_r２ ">确认</el-button>
                </div>
            </div>
            <div class="clear"></div>
            <div class="heimingdan_list" id="fenpei_list">
                <div class="account_title">
                    <a href="javascript:;" class="click_up">
                        分配账户
                    </a>
                </div>
                <div class="account_add">
                    <el-input
                            placeholder="Search"
                            icon="search"
                            v-model="input2"
                            >
                    </el-input>
                </div>

                <div class="left_table">
                    <el-table
                            :data="hun"
                            height="600"
                            border
                            style="width: 100%">
                        <el-table-column
                                label="名称"
                        >
                            <template scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="账户"
                        >
                            <template scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.semname }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="优化师"
                        >
                            <template scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.semname }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="全选"
                        >
                            <template scope="scope">
                                <span style="margin-left: 10px">  </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="center">
                    <!--<img src="./img/右箭头.png" alt="">-->
                </div>
                <div class="right_table">
                    <el-table
                            :data="hun"
                            height="600"
                            border
                            style="width: 100%">
                        <el-table-column
                                label="名称"
                        >
                            <template scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="账户"
                        >
                            <template scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.semname }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="优化师"
                        >
                            <template scope="scope">
                                <span style="margin-left: 10px">{{ scope.row.semname }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="全选"
                        >
                            <template scope="scope">
                                <span style="margin-left: 10px"> </span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
</template>
<script>

    import { mapGetters } from 'vuex';
    import { getzuanduser, getHu } from 'api/account';

    export default {
        data() {
            return {
                Allzu: [],
                hun:[],
                input2:'',
                addFormVisible: false,
                value:'',
            }
        },
        created: function () {
            //sem
            let $this=this;
            let semAll = [];
            let k = 0;
            getzuanduser({uid:111}).then(response => {
                for(let i = 0;i <response.data.length;i++){
                    for(let n = 0;n<response.data[i].length;n++){
                        k++
                        semAll.push({name: response.data[i][n].name,value:k})
                    }
                }
                $this.Allzu=semAll;

            }).catch(err => {
                $this.$message.error(err);
            });
            // 获取全部客户
            let _this = this;
            getHu({uid:111}).then(response => {
                _this.hun=response.data;
            }).catch(err => {
                $this.$message.error(err);
            });
        },
        methods: {
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
    .heimingdan_select[data-v-42ce5690] {
        margin:25px 0;
    }
    #page-wrapper {
        left:0;
    }
    .heimingdan_select {
        width: 100%;
        height: 30px;
        margin: 25px;
        padding: 0 30px;
    }
    .btn-primary {
        border-color: #dfe1e4;
    }
    .click_h {
        width: 110px;
        height: 30px;
        outline: none;
        float: left;
        border: none;
    }
    .btn-select {
        background: white;
        border:1px solid #dfe1e4;
    }
    .dropdown-menu {
        width:220px;
    }
    /*搜索*/
    .click_up {
        display: inline-block;
    }
    .account_add {
        display: inline-block;
        margin-left: 30px;
        margin-top: 10px;
        width:100%;
    }
    .account_search {
        width:220px;
        height:30px;
        border:1px solid #f0f0f0;
        border-radius: 5px;
        outline: none;
        background-position:90% center;
        -webkit-background-size:10% 0%;
        background-size:7% 50%;
    }

    .left_a {
        width:190px;
        height:30px;
    }
    .right_a  {
        width:30px;
        height:30px;
    }
    .btn-primary {
        background: white;
        color: black;
    }
    .btn-primary:hover {
        background: white;
        color: black;
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
    }

    .btn_r1 {
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
    /*下拉*/
    .dropdown-menu li a {
        text-align: center;
    }
    /*表格*/
    .heimingdan_table {
        width: 100%;
        height: 840px;
        padding: 30px;
        font-size: 14px;
        font-family: "微软雅黑", Arial, sans-serif;
    }
    .left_table,.center,.right_table {
        float: left;
        padding: 20px 30px;
    }
    .left_table,.right_table {
        width:47%;
        border-radius: 5px 0 5px 0;
    }
    .center {
        width:6%;
        height:740px;
        position: relative;
    }
    .center img {
        position: absolute;
        left: 0%;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        width:50%;
    }
    tbody {
        display: block;
        overflow: auto;
        max-height: 700px;
    }
    .left_tbody {
        border:1px solid #dfe1e4;
    }
    .left_tbody td {
        text-align: center;
    }
    /*点击全选*/
    .all_btn,.clear_all {
        display: block;
        width:100%;
        height:40px;
        line-height: 40px;
        color: #7cdaf6;
        text-align: center;
    }
    .right_table table {
        height:740px;
        border:1px solid #dfe1e4;
        border-radius: 5px 5px 0 0 ;
    }
    .all_btn:hover,.clear_all:hover {
        color:#00b7ee;
    }
    table thead, table tbody tr {
        display:table;
        width:100%;
        table-layout:fixed;
    }
    table thead, table thead {
        background: #dfe1e4;
        border-radius: 5px 5px 0 0 ;
    }
    table thead tr th:nth-child(2),table thead tr th:nth-child(3),table tbody tr td:nth-child(2),table tbody tr td:nth-child(3) {
        text-align: center;
    }
    table thead th {
        height:40px;
    }
    table thead th:first-child, table tbody td:first-child {
        text-indent: 20px;
    }
    table tbody tr td:last-child  {
        text-align: center;
    }
    .right_table table tbody td:first-child {
        position: relative;
    }
    .delete {
        color: #7cdaf6;
    }
    /*复选框*/
    .squared_1 label {
        /*background: url("./img/对号.png") no-repeat center;*/
        width:20px;
        height:20px;
        background-size: 100% 100%;
        position: relative;
    }
    .squared_1 input[type=checkbox] {
        visibility: hidden;
    }
    .squared_1 input[type=checkbox]:checked + label {
        /*background: url("./img/cuo.png") no-repeat center;*/
        width:20px;
        height:20px;
        background-size: 100% 100%;
    }
    .squared label {
        /*background: url("./img/jia.png") no-repeat center;*/
        width:20px;
        height:20px;
        background-size: 100% 100%;
        position: relative;
    }
    .squared input[type=checkbox] {
        visibility: hidden;
    }
    .squared input[type=checkbox]:checked + label {
        /*background: url("./img/duihao.png") no-repeat center;*/
        width:20px;
        height:20px;
        background-size: 100% 100%;
    }
    .line {
        width:4px;
        height:40px;
        background: #48c9b0;
        position: absolute;
        left:0;
        top:0;
        bottom:0;
        margin:auto;
    }

    /*.icon-judge {*/
    /*margin-right:30px;*/
    /*}*/
    .left_table table tbody tr:nth-child(even),.right_table table tbody tr:nth-child(even) {
        background: #f5f7f9;
    }
    .left_table table tbody td,.right_table table tbody td {
        height:60px;
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
    .delete__left,.delete{
        text-decoration: none;
    }
    .delete__left:hover,.delete:hover{
        text-decoration: none;
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
    /*排序*/
    table.tablesorter thead tr th .tablesorter-header-inner{
        /*background: url(./img/bg1.png) no-repeat right;*/
    }
    table.tablesorter thead tr .tablesorter-headerAsc .tablesorter-header-inner{
        /*background: url(./img/asc1.png) no-repeat right;*/
    }
    table.tablesorter thead tr .tablesorter-headerDesc .tablesorter-header-inner{
        /*background: url(./img/desc1.png) no-repeat right;*/
    }
/*input 搜索*/
    .el-select-dropdown__item {
        font-size: 14px;
        padding: 8px 10px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #48576a;
        height: 36px;
        line-height: 1.5;
        box-sizing: border-box;
        cursor: pointer;
    }
    .account_add .el-input {
        width:200px;
    }
    .el-table__body-wrapper {
        overflow-x: hidden;
    }
    .btn_r1[data-v-42ce5690] {
        right:40px;
    }
    @media screen and (max-width: 1000px) {
        #page-wrapper {
            width:1000px;
            overflow: auto;
        }
    }
</style>


