<template>
    <div class="task_set">
        <div class="clear"></div>
        <div class="task_set_list">
            <div class="account_title" id="week">
                <a href="javascript:;" class="click_up">
                    管理 > 任务设置
                </a>
            </div>
            <div class="task_set_select">
                <div>
                    <el-radio-group v-model="radio3" @change="fn()">
                         <el-radio-button label="周任务" ></el-radio-button>
                        <el-radio-button label="月任务"></el-radio-button>
                    </el-radio-group>
                    <div class="remove_h">
                        <el-button  type="primary">任务设置</el-button>
                    </div>
                </div>
                <div class="clear"></div>
                <el-select v-model="value2"   placeholder="请选择" style=" margin-top: 25px;">
                    <el-option
                            v-for="item in Allzu"
                            :label="item.name"
                            :value="item.value"
                            :key="item.value"
                            :disabled="item.disabled">
                    </el-option>
                </el-select>
            </div>

            <div class="task_set_box"  v-if="week">
                <el-table
                        :data="task_week"
                        height="500"
                        border
                        :default-sort = "{prop: 'date', order: 'descending'}"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="日期"
                    >
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.startDate }}-{{ scope.row.endDate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="任务总额"
                    >
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.weekTask }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="完成总额"
                    >
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.offWeekTask }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="完成占比"
                    >
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ ((scope.row.weekTask/scope.row.offWeekTask)*100).toFixed(2) }}%</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="task_table" v-else="month">

                <el-table
                        :data="task_week"
                        height="250"
                        border
                        :default-sort = "{prop: '_id', order: 'descending'}"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="内容"
                    >
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.pv_total }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="结果"
                    >
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.pv_total }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="备注"
                    >
                        <template scope="scope">
                            <span style="margin-left: 10px">{{ scope.row.pv_total }}</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

        </div>

    </div>


</template>
<script>

    import { mapGetters } from 'vuex';
    import { getwtask } from 'api/account';
    import { getzuanduser } from 'api/account';

    export default {
        data() {
            return {
                radio3: '周任务',
                task_week: [],
                Allzu:[],
                value6: '',
                value: '',
                value1:'',
                value2:'',
                radio: 5,
                click:'',
                week:true,
                month:false
            }
        },
        created:function(){
            //周任务
            var _self=this;
            getwtask({uid:111}).then(response => {
                console.log(response);
                _self.task_week=response.data;
                /*   _self.loading = false;
                 ;*/
            }).catch(err => {
                _self.$message.error(err);
//                  _self.loading = false;
            });
            //sem
            var $this=this;
            var semAll = [];
            var k = 0;
            getzuanduser({uid:111}).then(response => {
                for(var i = 0;i <response.data.length;i++){
                   for(var n = 0;n<response.data[i].length;n++){
                       k++
                       semAll.push({name: response.data[i][n].name,value:k})
                   }
                }
                $this.Allzu=semAll;
                console.log($this.Allzu);
                /*   _self.loading = false;
                 ;*/
            }).catch(err => {
                $this.$message.error(err);
//                  _self.loading = false;
            });

        },
        methods:{
            fn:function(){
                if($(".el-radio-button").eq(0).attr("data") == "true") {
                    this.week = true;
                    this.month = false;
                    $(".el-radio-button").eq(0).attr("data",false);
                }else {
                    this.week = false;
                    this.month = true;

                    $(".el-radio-button").eq(0).attr("data",true);
                }
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";
    .task_set_list {
        background-color: #f5f7f9;
    }

    .box-left {
        display: none;
    }
    #page-wrapper {
        left:0;
    }
    .task_set_list {
        width: 100%;
        border-shadow: 0 0 5px #eceef0;
        background: white;
        font-family: "微软雅黑", Arial;
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
    .task_set_select {
        width: 100%;
        height: 120px;
        padding:30px 30px 0;
        position: relative;
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
    }
    .btn_r2 {
        background: #00b7ee;
        color: #ffffff;
        border-radius: 5px;
    }

    .btn-group {
        background: white;
        border:1px solid #dfe1e4;
    }
    .lest_sem {
        width:187px;
        height: 30px;
        line-height: 17px;
    }
    .dropdown-sem li {
        text-align: center;
    }
    .right_a {
        width:30px;
        height: 30px;

    }
    /*表格*/
    .task_table {
        width: 100%;
        padding: 30px 30px 30px;
        font-family: "微软雅黑", Arial;
    }

    .table {
        border-radius: 10px;
        font-size: 14px;
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
        color: #3b4e61;
    }

    .table thead tr th {
        background: #e0e1e5;
        padding-left: 30px;
    }
    .table thead tr th:first-child {
        border-radius: 5px 0 0 0;
    }
    .table thead tr th:last-child {
        border-right: none;
        border-radius: 0 5px 0 0;
    }
    .table thead tr th:first-child button {
        display: inline-block;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
    }
    .table tbody tr:nth-child(even) {
        background:#f6f7f9 ;
    }
    .table tbody tr td {
        height: 50px;
        border-bottom: 1px solid #dfe1e4;
        border-right: 1px solid #dfe1e4;
        vertical-align: middle;
        padding-left: 30px;
    }
    .table tbody tr td:first-child {
        border-left:1px solid #dfe1e4;
    }


    .table tbody {
        display: block;
        height: 670px;
        overflow: auto;
    }
    /*月任务*/
    #main {
        width: 100%;height:400px;
        margin:0 0 10px 0;
    }
    .month_table_box {
        border:1px solid #dfe1e4;
    }
    .month_table {
        width:100%;
        height: 25px;
        line-height: 25px;
        text-indent: 30px;
        font-size: 14px;
        border:1px solid #dfe1e4;
    }
    .last_td {
        position: relative;
    }
    .last_td  .gai {
        position: absolute;
        width: 80px;
        height: 30px;
        border-radius: 5px;
        right: 0%;
        top: 10px;
        background: #00b7ee;
        color: #fff;
        outline: none;
        border: none;
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

    .delete a, .to_lead a,.content_btn a {
        display: inline-block;
        width: 110px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 5px;
        outline: none;
        border: 1px solid #dfe1e4;
        text-decoration: none;
    }
    .delete a:hover, .content a:hover, .to_lead a:hover {
        text-decoration: none;
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
        height:450px;
        background: white;
        padding: 20px;
        font-size: 16px;
        position: absolute;
        bottom: 0;
    }

    .foot > p {
        margin-bottom: 10px;
    }
    .left_modal {
        width:100px;
    }
    .content {
        width: 700px;
        height:440px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        padding-top:20px;
    }
    .dropdown-menu-com li a {
        display:block;
        width: 100%;
        height:25px;
        line-height: 25px;
        text-align: center;
    }
    .dropdown-menu-com li a:hover {
        background: #f5f5f5;
    }
    .content input {
        width: 130px;
        height: 30px;
    }
    .content_all {
        margin-bottom: 20px;
    }
    .content_datd {
        margin-right: 30px;
    }
    .content_btn {
        text-align: center;
        margin-top: 40px
    }
    .content_btn .sever {
        margin:0 50px;
    }
    .ok_send,.xiugai_send {
        background: #00b7ee;
    }

    #table1.tablesorter thead tr .tablesorter-header-inner{
        /*background-image: url(./images/bg1.png);*/
        background-size: 6px;
        background-repeat: no-repeat;
        background-position: center right;
        cursor: pointer;
    }
    #table1.tablesorter thead tr .tablesorter-headerAsc .tablesorter-header-inner{
        /*background-image: url(./images/asc1.png);*/
    }
    #table1.tablesorter thead tr .tablesorter-headerDesc .tablesorter-header-inner{
        /*background-image: url(./images/desc1.png);*/
    }

    @media screen and (max-width: 1000px){
        #page-wrapper {
            right: 0;
            width: 1000px;
        }
    }
    /*button*/
    .el-radio-button__inner {
        width:110px;
    }
    .el-button--primary {
        width:110px;
    }
    /*input*/
    .el-input__inner {
        text-align: center;
    }
    .el-select-dropdown__item {
        text-align: center;
    }
    /*表格*/
    .task_set_box {
        width:100%;
        padding:30px 30px 0 30px ;
    }
</style>


