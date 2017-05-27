<template>
    <el-row class="row" style="padding-right: 15px;padding-left: 15px;margin-top: 30px;">
    <div class="col-xs-12 gailan">
        <div class="col-xs-12 gailan-toubiao" style="text-indent: 15px;">
            概览
        </div>
        <div class="col-xs-12 gailan-zhi" id="users">
            <div class="searchs" style="display: inline-block;margin-top: 30px;margin-left: 15px;">
                <input type="text" placeholder="Search" class="search"/>
                <span class="glyphicon glyphicon-search" style="color:#666;"></span>
            </div>
            <div class="col-xs-12 contain" style="margin-top: 30px;" id="tb">
                <el-table
                        :data="tableData3"
                        height="350"
                        border
                        stripe
                        :default-sort = "{prop: 'keyword', order: 'descending'}"
                        style="width: 100%">
                    <el-table-column
                            prop="keyword"
                            sortable
                            label="关键词">
                    </el-table-column>
                    <el-table-column
                            class="a2"
                            sortable
                            label="计划-单元">
                        <template scope="scope">
                            <el-col :span='24' class="cost1" style="font-weight:bold;">
                                {{ scope.row.plan_name }}-{{ scope.row.unit_name }}
                            </el-col>
                        </template>
                    </el-table-column>
                    <el-table-column
                            class="a2"
                            prop="keyword_id"
                            sortable
                            label="关键词ID">
                    </el-table-column>
                    <el-table-column
                            class="a2"
                            sortable
                            prop="unit_id"
                            label="单元ID">
                    </el-table-column>
                    <el-table-column
                            class="a2"
                            prop="cost"
                            sortable
                            label="昨日消费">
                    </el-table-column>
                    <el-table-column
                            class="a2"
                            sortable
                            label="展现量/点击量/影响度">
                        <template scope="scope">
                            {{ scope.row.view }}/{{ scope.row.click }}/0
                        </template>
                    </el-table-column>
                    <el-table-column
                            class="a2"
                            sortable
                            label="目标成本/当前成本">
                        <template scope="scope">
                            {{ scope.row.mubiao_cpd }}/{{ scope.row.cpd }}
                        </template>
                    </el-table-column>
                    <el-table-column
                            class="a2"
                            sortable
                            label="优化效果">
                        <template scope="scope">
                            <span class="label label-default" style="vertical-align: middle;background: #fff;color: #64cd64;border: 1px solid #64cd64;">AUTO</span>
                            <img src="../../assets/组-27@2x.png" style="vertical-align: middle;margin-left: 20px;cursor: pointer;" v-on:click="tunup(scope.row.keyword_id,scope.row.keyword)" class="chart" :data-keyid='scope.row.keyword_id' :data-keyname='scope.row.keyword' alt="">
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</el-row>
</template>
<script>
    /*eslint-disable */
    import { mapGetters } from 'vuex';
    import Vue from 'vue';
    //    import $ from 'jquery'
    import { getParam } from 'api/account';
    const echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/line');
    require('echarts/lib/chart/radar');
    // 引入提示框和标题组件
    require('echarts/lib/component/graphic');
    require('echarts/lib/component/grid');
    require('echarts/lib/component/legend');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/polar');
    require('echarts/lib/component/geo');
    require('echarts/lib/component/parallel');
    require('echarts/lib/component/singleAxis');
    require('echarts/lib/component/brush');

    require('echarts/lib/component/title');

    require('echarts/lib/component/dataZoom');
    require('echarts/lib/component/visualMap');

    require('echarts/lib/component/markPoint');
    require('echarts/lib/component/markLine');
    require('echarts/lib/component/markArea');

    require('echarts/lib/component/timeline');
    require('echarts/lib/component/toolbox');
    function getDateStr(AddDayCount){
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;
        var d = dd.getDate();
        if (m < 10) {
            m = "0" + m;
        }
        if (d < 10) {
            d = "0" + d;
        }
        return y+"-"+m+"-"+d;
    }
    export default {
        data() {
            return {
               value1:getDateStr(-2),
               value2:getDateStr(-1),
                tableData3:[]
            }
        },
        methods:{
            tunup:function (a,b) {
//                window.open('./paramKey?name='+b+'&id='+a);
                this.$router.push({ path: '/ai/paramKey?name='+b+'&id='+a });
            }
        },
        created:function(){
            var _self=this;
            getParam({uid:111}).then(response => {
                console.log(response);
                this.tableData3=response.data;


            }).catch(err => {
                this.$message.error(err);
//                  _self.loading = false;
            });

        }
    }

</script>
<style rel="stylesheet/scss" scoped  lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";

    .el-radio-button__inner{
        width: 80px;
    }
    .el-table__body-wrapper{
        overflow-x: hidden;
    }
    .el-table .cell, .el-table th>div{
        padding: 0;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .el-table{
        font-size: 13px;
    }
    html{
        background:#f5f7f9;
    }
    #page-wrapper{
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:15px;font-style:normal;
        /*-webkit-transform: scale(.5);*/
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

    .search{
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ddd;
        padding-left: 15px;
        padding-right: 40px;
        line-height: 30px;
        width: 255px;
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
    /*////////////////////////////////////*/
    #tb table thead tr{
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
        word-wrap: break-word;
        border:solid #ddd 1px !important;
        /*border-bottom:0 !important;*/
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
    }
    .label{
        display: inline-block;
        width: 40px;
        text-align: center;
        padding: 0;
        padding-top: .3em;
        padding-bottom: .3em;
    }
    /*////////////////////////////////////////////////*/
/*    #tb table.tablesorter thead tr .tablesorter-header-inner{
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
    .statu-start,.statu-start1{
        vertical-align: middle;
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 1px solid #dfe1e4;
        border-radius: 3px;
        cursor: pointer;
    }
    .statu-end,.statu-end1{
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 100%;
        background: #01b7ee;
        margin: auto;
    }
    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

</style>


