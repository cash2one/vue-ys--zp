<template>
    <div class="bod-container">
        <div  class="clear" style="padding: 0">
            <div style="float: left">
                <div class="lav-li" style="display: inline-block">
                    <span class="la1 clink">单天数据</span>
                </div>
            </div>
            <div style="float: right">
                <!--<input type="text" readonly style="width: 150px;display: inline-block;margin-left: 30px;margin-right: 30px;" name="birthday" class="birthday form-control" />-->
                <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
                <button type="button" class="checkn">查看</button>
            </div>
        </div>
        <div  class="gailan" style="margin-top: 30px;">
            <div  class="gailan-toubiao pull2" style="cursor: pointer;">
                <span class="shang_tit">各单元消费分布</span><!--<i class="iconfont1 wen">&#xe650;</i>-->
            </div>
            <div  class="gailan-zhi drag2">
                <div  class="clear" style="margin-top: 30px;width: 100%">
                    <div style="float: left">
                    </div>
                    <div style="float: right">
                        <select class="trimn">
                            <option value="0">展现 消费</option>
                            <option value="1">展现 点击</option>
                        </select>
                    </div>
                </div>
                <div  id="main"  style="height:300px;"></div>
            </div>
        </div>
        <div  class="gailan" style="margin-top: 30px;">
            <div  class="gailan-toubiao pull1" style="cursor: pointer;">
                <span class="xia_tit">单元单天数据统计</span><i class="iconfont1 wen">&#xe650;</i>
            </div>
            <div  class="drag1" id="users">

                <el-row>
                    <el-col :span="24">
                        <div  style="margin-top: 30px;">
                            <!-- <div class="nav-li" style="display: inline-block">
                                 <span class="li1 clink">下载</span><span class="li2">激活</span>
                             </div>-->
                            <div class="searchs" style="display: inline-block;margin-left: 0;">
                                <input type="text" placeholder="Search" class="search"/>
                                <span class="glyphicon glyphicon-search" style="color:#666;"></span>
                            </div>
                        </div>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="24">
                        <div  style="margin-top: 30px;" id="tb">

                            <el-table
                                    :data="tableData3"
                                    height="250"
                                    border
                                    :default-sort = "{prop: 'name', order: 'descending'}"
                                    style="width: 100%">
                                <el-table-column
                                        prop="adgroupName"
                                        sortable
                                        label="单元名">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="campaignName"
                                        sortable
                                        label="计划名">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="view_total"
                                        sortable
                                        label="展示">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        prop="click_total"
                                        label="点击">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="cost_total"
                                        sortable
                                        label="消费">
                                </el-table-column>
                            </el-table>


                        </div>
                    </el-col>

                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
    /*eslint-disable */
    import { mapGetters } from 'vuex';
    import { getDanTable } from 'api/account';
    const echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/pie');
    require('echarts/lib/chart/line');
    require('echarts/lib/chart/scatter')
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    require('echarts/lib/component/legend');
    let all;
    function renderS(data,who){
      console.log(data);
      let scatter=[];
      let x;
      let y;
      if(who==0){
        for(let i=0;i<data.length;i++){
          scatter[i]=[];
          scatter[i].push(data[i].cost_total);
          scatter[i].push(data[i].view_total);
          scatter[i].push(data[i].adgroupName);
        }
        x='消费';
        y='展现';
      }else if(who==1){
        for(let i=0;i<data.length;i++){
          scatter[i]=[];
          scatter[i].push(data[i].click_total);
          scatter[i].push(data[i].view_total);
          scatter[i].push(data[i].adgroupName);
        }
        x='点击';
        y='展现';
      }

      console.log(scatter);
      var myChart = echarts.init(document.getElementById('main'));
      var option = {
        grid: {
          left: '3%',
          right: '7%',
          bottom: '3%',
          containLabel: true
        },
        tooltip : {
          trigger: 'item',
          showDelay : 0,
          formatter : function (params) {
            if (params.value.length > 1) {
              return params.value[2] + ' :<br/>（'
                + params.value[0] + '， '
                + params.value[1] + '） ';
            }else {
              return params.value[2] + ' :<br/>'
                + params.name + ' : '
                + params.value ;
            }
          },

        },

        brush: {
        },
        legend: {
          data: ['单元'],
          left: 'center'
        },
        xAxis : [
          {
            name:x,
            type : 'value',
            scale:true,
              /*axisLabel : {
               formatter: '{value} 元'
               },*/
            splitLine:{
              show:false,
            },
            axisLine:{
              show:false,
            },
            axisTick:{
              show:false,
            },
            axisLabel:{
              textStyle:{
                color:'#3b4e61',
                fontSize:14,
              },
            }
          }
        ],
        yAxis : [
          {
            name:y,
            type : 'value',
            scale:true,
            axisLine:{
              show:false,
            },
            axisTick:{
              show:false,
            },
            axisLabel:{
              textStyle:{
                color:'#3b4e61',
                fontSize:14,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#dfe1e4',
                type: 'solid',
                width: 1,
              },
            },
          }
        ],
        series : [
          {
            name:'对比',
            type:'scatter',
            data: scatter,

          },

        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      },false);
    }



    export default {
        data() {
            return {
              value1:'',
              tableData3:[],
            }
        },
        created(){
            var _self=this;
          getDanTable({uid:111}).then(response => {
            console.log(response);
            all=response.data;
            this.tableData3=response.data;
              /*   _self.loading = false;
               ;*/
            renderS(response.data,$('.trimn').val());
          }).catch(err => {
            this.$message.error(err);
//                  _self.loading = false;
          });

        }
    }

</script>
<style rel="stylesheet/scss" scoped lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";
    .bod-container {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }
    html{
        background:#f5f7f9;
    }
    .el-table .cell, .el-table th>div{
        padding: 0;
    }
    #page-wrapper{
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        /*-webkit-transform: scale(.5);*/
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .iconfont1{
        font-family:"iconfont" !important;
        font-size:13px;font-style:normal;
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
        overflow: hidden;
        padding:0;
        background: #fff;
        padding-bottom: 30px;
    }
    .li1{
        display: inline-block;
        width: 110px;
        text-align: center;
        color: #00b7ee;
        height: 30px;
        line-height: 30px;
        /*background: #fff;*/
        cursor: pointer;
        border-top: 1px solid #00b7ee;
        border-left: 1px solid #00b7ee;
        border-bottom: 1px solid #00b7ee;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
    .la1{
        display: inline-block;
        width: 110px;
        text-align: center;
        color: #00b7ee;
        height: 30px;
        line-height: 30px;
        /*background: #fff;*/
        cursor: pointer;
        border-top: 1px solid #00b7ee;
        border-left: 1px solid #00b7ee;
        border-bottom: 1px solid #00b7ee;
        /*border-bottom-left-radius: 5px;*/
        /*border-top-left-radius: 5px;*/
        border-radius: 5px;
    }
    .li2,.la2{
        display: inline-block;
        width: 110px;
        text-align: center;
        height: 30px;
        /*background: #fff;*/
        line-height: 30px;
        color: #00b7ee;
        cursor: pointer;
        border: 1px solid #00b7ee;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
    .clink{
        color: #fff;
        background: #01b7ee;
    }
    .checkn{
        padding: 4px 0;
        border: 0;
        width: 100px;
        border-radius: 5px;
        color: #fff;
        background: #01b7ee;
    }
    .birthday,.birthday1,.birthday2{
        background: transparent !important;
    }
    .checkn:hover,.checkn:focus{
        color: #fff;
        background: #1bcaff;
    }
    .checkn:active{
        color: #fff;
        background: #01a4e0;
    }
    .search{
        margin-left: 30px;
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ddd;
        padding-left: 15px;
        padding-right: 40px;
        line-height: 30px;
        width: 220px;
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
    .calendar .glyphicon {
        left: 0px;
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
    .trimn{
        border: solid 1px #dfe1e4;
        /*background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;*/
        padding-right: 14px;
        width:150px;
        padding-left: 10px;
        border-radius: 3px;
        height:30px;
        line-height:30px;
    }
    /*////////////////////////////////////*/
/*    #tb table thead tr{
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
        border:solid #ddd 1px !important;
        !*border-bottom:0 !important;*!
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
    !*!//////////////////////////////////////////////!*!
    #tb table.tablesorter thead tr .tablesorter-header-inner{
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
    }
    !*!///////////////////////////////////////////////!*!
    #tb .col-xs-12,#tb .col-xs-7,#tb .col-xs-5{
        padding: 0;
    }*/
    .form-control {
        width: 100%;
        height: 30px;
        padding: 6px 12px;
        background-color: #fff !important;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .wen{
        transition-duration: 0.3s;
        transform: rotate(0deg);
    }
</style>


