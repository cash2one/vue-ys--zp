<template>
        <div class="task_day">
            <div class="clear"></div>
            <div class="task_day_list">
                <div class="account_title">
                    <a href="javascript:;" class="click_up">
                        管理 > 每日检查
                    </a>
                </div>
                <div class="task_day_select">
                    <el-button type="primary click_h btn_h" id="btn_2">每日检查</el-button>
                    <el-button type="primary click_h all_h" id="btn_1">历史记录</el-button>
                    <div class="remove_h">
                        <el-button type="primary click_h btn_r2" id="btn_2"> 提交</el-button>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="task_table">
                    <el-table
                            :data="tableData3"
                            height="250"
                            border
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="内容"
                              >
                        </el-table-column>
                        <el-table-column
                                prop="date"
                                label="结果"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="备注"
                               >
                        </el-table-column>
                    </el-table>
                </div>
            </div>

        </div>

        <!--&lt;!&ndash;弹窗&ndash;&gt;-->
        <!--<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">-->
            <!--<div class="thishi">-->
                <!--<P>提交检查项</P>-->
                <!--<div class="delete">-->
                    <!--<P>提交后不可修改</P>-->
                    <!--<button class=" cancel" data-dismiss="modal">取消</button>-->
                    <!--<button class="ok task_ok">确认</button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;弹窗2&ndash;&gt;-->
        <!--<div class="modal fade modal_1" id="myModa2"   tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">-->
            <!--<div class="thishi">-->
                <!--<P>提交检查项</P>-->
                <!--<div class="delete">-->
                    <!--<P>不可重复</P>-->
                    <!--<button class=" cancel" data-dismiss="modal">取消</button>-->
                    <!--<button class="ok" data-dismiss="modal">确认</button>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
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
                radio: 5,
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
    .task_day_list {
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
    .task_day_select {
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
        position: absolute;
        bottom:30px;
        right:30px;
    }
    .btn_r2 {
        background: #00b7ee;
        color: #ffffff;
        border-radius: 5px;
    }

    /*表格*/
    .task_table {
        width: 100%;
        padding: 0px 30px 30px;
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
    .table tbody tr td {
        height: 60px;
        border-bottom: 1px solid #dfe1e4;
        border-right: 1px solid #dfe1e4;
        vertical-align: middle;
        padding-left: 30px;
    }
    .table tbody tr td:first-child {
        border-left:1px solid #dfe1e4;
    }
    .table tbody tr td.td_span span{
        display: inline-block;
        width:25px;
        height:25px;
    }
    .table tbody tr td.td_span a:first-child {
        float: left;
    }
    .table tbody tr td.td_span a:last-child {
        float: right;
        margin-right: 30px;
    }
    .table tbody tr td.td_span a:first-child .selected_no {
        /*background: url(./img/勾.png) no-repeat center;*/
        -webkit-background-size:100% 100%;
        background-size:100% 100%;
    }
    .table tbody tr td.td_span a:last-child .selected_no {
        /*background: url(./img/错.png) no-repeat center;*/
        -webkit-background-size:100% 100%;
        background-size:100% 100%;
    }
    .table tbody tr td.td_span a:first-child  .selected_ok {
        /*background: url(./img/勾1.png) no-repeat center;*/
        -webkit-background-size:100% 100%;
        background-size:100% 100%;
    }
    .table tbody tr td.td_span a:last-child .selected_ok {
        /*background: url(./img/错1.png) no-repeat center;*/
        -webkit-background-size:100% 100%;
        background-size:100% 100%;
    }
    .table tbody tr td:last-child {
        position: relative;
        padding: 0;
    }
    .table tbody tr td:last-child input{
        height:100%;
        width:100%;
        outline: none;
        border:none;
        text-indent: 0;
        opacity: 1;
    }
    .table tbody tr td:last-child .icon_select {
        width: 30px;
        height: 30px;
        font-size: 22px;
        position: absolute;
        right: 0;
        display: inline-block;
        top: 0;
        bottom: 0;
        margin: auto;

    }


    .table tbody {
        display: block;
        height: 600px;
        overflow: auto;
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

    /*文件上唇*/
    .file_text {
        opacity: 0;
        position: absolute;
        top: -2px;
    }


    @media screen and (max-width: 1000px){
        #page-wrapper {
            right: 0;
            width: 1000px;
        }
    }
</style>


