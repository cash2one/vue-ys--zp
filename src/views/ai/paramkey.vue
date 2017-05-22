<template>
    <el-row class="row" style="padding-left: 15px;padding-right: 15px;margin-top: 30px;">
        <div class="col-xs-12 gailan">
            <div class="col-xs-12 gailan-zhi" id="users">
                <div class="col-xs-12">
                    <p><label for="">关键词：</label><span style="margin-left: 30px;" class="kname">XXXX</span></p>
                    <p><label for="">账&nbsp;&nbsp;&nbsp;&nbsp;户：</label><span style="margin-left: 30px;" class="huname">XXXX</span></p>
                </div>

                <div class="col-xs-12" style="padding: 0;margin-top: 30px;">
                    <el-radio-group v-model="radio2" @change="gnd">
                        <el-radio-button label="分时效果"></el-radio-button>
                        <el-radio-button label="分日效果"></el-radio-button>
                    </el-radio-group>
                </div>
                <div class="col-xs-12" style="padding: 0;margin-top: 30px;">
                    <div class="col-xs-12" style="padding: 0;">
                        开始
                        <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期"
                        >
                        </el-date-picker>
                        结束
                        <el-date-picker
                                v-model="value2"
                                type="date"
                                placeholder="选择日期"
                                >
                        </el-date-picker>
                        <el-button class="keep">查看</el-button>
                    </div>
                </div>
                <div class="col-xs-12 contain" style="margin-top: 30px;" id="tb">
                    <div id="main" style="height: 250px;"></div>
                    <div id="main2" style="height: 300px;margin-top: 15px;"></div>
                    <div id="main1" style="height:250px;margin-top: 15px;"></div>
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
    import { getParamkey } from 'api/account';
    import { getParamkeydata } from 'api/account';
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

    function line(data) {
        let day=[];
        let data1=[];
        let data2=[];
        let data3=[];
        let zhan=[],dian=[],down=[],cost=[],cd=[],shouR=[],btnR=[],maxP=[],price=[],mcpd=[],cpd=[];
        for(let i=0;i<data.length;i++){
            day.push(data[i].date);
            zhan.push(data[i].view);
            dian.push(data[i].click);
            down.push(data[i].download_total);
            cost.push(data[i].cost);
            cd.push(data[i].cpc_cpd);
            shouR.push(data[i].first_rate);
            btnR.push(data[i].button_view_rate);
            maxP.push(data[i].max_price);
            price.push(data[i].price);
            mcpd.push(data[i].mubiao_cpd);
            cpd.push(data[i].cpd);
        }
        data3.push({
            name:'出价上限',
            type:'line',
            symbol:'none',
            lineStyle:{
                normal:{
                    color:'#ec5a55',
                    type:'dotted'
                }
            },
            data:maxP,
        });
        data3.push({
            name:'当前出价',
            type:'line',
            symbol:'image://http://test.yushan.mobi//lingzhong/%E9%87%91%E5%B8%81.png',
            symbolSize:20,
            lineStyle:{
                normal:{
                    color:'#ca9010',
                }
            },
            data:price,
        });
        data3.push({
            name:'目标成本',
            symbol:'none',
            type:'line',
            lineStyle:{
                normal:{
                    color:'#17EA46',
                    type:'dotted'
                }
            },
            data:mcpd,
        });
        data3.push({
            name:'当前成本',
            type:'line',
            symbol:'none',
            lineStyle:{
                normal:{
                    color:'#f76c64',
                }
            },
            data:cpd,
        });
        data2.push({
            name:'首位占比',
            symbol:'none',
            type:'line',
            lineStyle:{
                normal:{
                    color:'#054a9a',
                }
            },
            data:shouR,
        });
        data2.push({
            name:'按钮占比',
            symbol:'none',
            type:'line',
            lineStyle:{
                normal:{
                    color:'#99128b',
                }
            },
            data:btnR,
        });
        data1.push({
            name:'展现',
            symbol:'none',
            type:'bar',
            yAxisIndex: 0,
            lineStyle:{
                normal:{
                    color:'#07b3dc',
                }
            },
            data:zhan,
        });
        data1.push({
            name:'点击',
            symbol:'none',
            type:'bar',
            lineStyle:{
                normal:{
                    color:'#40cbb1',
                }
            },
            yAxisIndex: 0,
            data:dian,
        })
        data1.push({
            name:'下载',
            symbol:'none',
            type:'bar',
            lineStyle:{
                normal:{
                    color:'#68cc67',
                }
            },
            yAxisIndex: 0,
            data:down,
        })
        data1.push({
            name:'消费',
            symbol:'none',
            type:'line',
            lineStyle:{
                normal:{
                    color:'#8b0406',
                }
            },
            yAxisIndex: 2,
            data:cost,
        })
        data1.push({
            name:'CPC/CPD',
            lineStyle:{
                normal:{
                    color:'#c03248',
                }
            },
            symbol:'none',
            type:'line',
            yAxisIndex: 1,
            data:cd,
        })
        data1.push({
            name:'首位占比',
            lineStyle:{
                normal:{
                    color:'#054a9a',
                }
            },
            symbol:'none',
            type:'line',
            data:[],
        })
        data1.push({
            name:'按钮占比',
            lineStyle:{
                normal:{
                    color:'#99128b',
                }
            },
            symbol:'none',
            type:'line',
            data:[],
        })
        data1.push({
            name:'出价上限',
            symbol:'none',
            lineStyle:{
                normal:{
                    color:'#ec5a55',
                }
            },
            type:'line',
            data:[],
        })
        data1.push({
            name:'当前出价',
            symbol:'none',
            type:'line',
            lineStyle:{
                normal:{
                    color:'#ca9010',
                }
            },
            data:[],
        })
        data1.push({
            name:'目标成本',
            symbol:'none',
            type:'line',
            lineStyle:{
                normal:{
                    color:'#17EA46',
                }
            },
            data:[],
        })
        data1.push({
            name:'当前成本',
            symbol:'none',
            lineStyle:{
                normal:{
                    color:'#f76c64',
                }
            },
            type:'line',
            data:[],
        })
        let option = {
            tooltip : {
                trigger: 'axis',
                backgroundColor:'rgba(255,255,255,0.8)',
                borderColor:'#00b7ee',
                textStyle:{
                    color:'#3b4e61'
                },
                borderWidth:2,
                showDelay: 0,
                axisPointer: {
                    type: 'cross'
                },
            },
            color:['#07b3dc','#40cbb1','#68cc67','#8b0406','#c03248','#054a9a','#99128b','#ec5a55','#ca9010','#17EA46','#f76c64'],
            legend: {
                top:0,
                right:0,
                data:['展现','点击','下载','消费','CPC/CPD','首位占比','按钮占比','出价上限','当前出价','目标成本','当前成本']
            },
            dataZoom : {
                y: 250,
                show : false,
                realtime: true,
                start : 80,
                end : 100
            },
            grid: {
                x: 50,
                y: 50,
                x2:150,
                y2:50
            },
            xAxis : [
                {
                    type : 'category',
                    data : day,
                    axisLine:{
                        show:false,
                    },
                    axisTick:{
                        onGap:false,
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#3b4e61',
                            fontSize:14,
                        },
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    scale:true,
                    boundaryGap: [0.05, 0.05],
                    position:'left',
                    name:'次数(量)',
                    axisLine:{
                        show:false,
                    },
                    min:0,
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
                },
                {
                    type : 'value',
                    scale:true,
                    boundaryGap: [0.05, 0.05],
                    position:'right',
                    min:0,
                    name:'CPC/CPD',
                    axisLine:{
                        show:false,
                    },
                    splitLine : {
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
                },
                {
                    type : 'value',
                    scale:true,
                    min:0,
                    boundaryGap: [0.05, 0.05],
                    position:'right',
                    name:'消费(元)',
                    offset: 80,
                    axisLine:{
                        show:false,
                    },
                    splitLine : {
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
                }
            ],
            series : data1,
        };
        var myChart1 = echarts.init(document.getElementById('main'));
        myChart1.setTheme("macarons");

        myChart1.setOption(option);
        let option2 = {
            tooltip : {
                trigger: 'axis',
                backgroundColor:'rgba(255,255,255,0.8)',
                borderColor:'#00b7ee',
                textStyle:{
                    color:'#3b4e61'
                },
                borderWidth:2,
                showDelay: 0             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            },
            color:['#054a9a','#99128b','#ec5a55','#ca9010','#17EA46','#f76c64'],
            legend: {
                show:false,
                right:0,
                top:0,
                data:['展现','点击','下载','消费','CPC/CPD','首位占比','按钮占比','出价上限','当前出价','目标成本','当前成本']
            },
            dataZoom : {
                show : false,
                realtime: true,
                start :80,
                end : 100
            },
            grid: {
                x: 50,
                y: 50,
                x2:150,
                y2:50
            },
            xAxis : [
                {
                    name:'时间',
                    type : 'category',
                    splitLine: {show:false},
                    axisLine:{
                        show:false,
                    },
                    axisTick:{
                        onGap:false,
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#3b4e61',
                            fontSize:14,
                        },
                    },
                    data : day
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name:'占比（率）',
                    min:0,
                    scale:true,
                    boundaryGap: [0.05, 0.05],
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
            series :data2,
        };
        var myChart2 = echarts.init(document.getElementById('main1'));
        myChart2.setTheme("macarons");

        myChart2.setOption(option2);

        let option3 = {
            tooltip : {
                trigger: 'axis',
                backgroundColor:'rgba(255,255,255,0.8)',
                borderColor:'#00b7ee',
                textStyle:{
                    color:'#3b4e61'
                },
                borderWidth:2,
                showDelay: 0             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            },
            color:['#ec5a55','#ca9010','#17EA46','#f76c64'],
            legend: {
                show:false,
                top:0,
                right:0,
                data:['展现','点击','下载','消费','CPC/CPD','首位占比','按钮占比','出价上限','当前出价','目标成本','当前成本']
            },
            dataZoom : {
                show : true,
                realtime: true,
                start :80,
                end : 100
            },
            grid: {
                x: 50,
                y: 50,
                x2:150,
                y2:100
            },
            xAxis : [
                {
                    name:'时间',
                    position:'bottom',
                    splitLine: {show:false},
                    data : day,
                    type: 'category',
                    axisLine:{
                        show:false,
                    },
                    axisTick:{
                        onGap:false,
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#3b4e61',
                            fontSize:14,
                        },
                    },
                }
            ],
            yAxis : [
                {
                    name:'（元）',
                    type : 'value',
                    min:0,
                    scale:true,
                    position:'left',
                    boundaryGap: [0.05, 0.05],
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
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#dfe1e4',
                            type: 'solid',
                            width: 1,
                        },
                    },
                },
            ],
            series : data3
        };
        var myChart3 = echarts.init(document.getElementById('main2'));
        myChart3.setTheme("macarons");
        myChart3.setOption(option3);
        echarts.connect([myChart1, myChart2,myChart3]);
        window.addEventListener("resize", function () {
            myChart1.resize();
            myChart2.resize();
            myChart3.resize();
        },false);
    }
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
                radio2:'分时效果',
                tableData3:[]
            }
        },
        methods:{
            gnd:function (event) {
                if(event=='分时效果'){
                    getParamkey({uid:111}).then(response => {
                        console.log(response);
                        line(response.data);

                    }).catch(err => {
                        this.$message.error(err);
//                  _self.loading = false;
                    });
                }else{
                    getParamkeydata({uid:111}).then(response => {
                        console.log(response);
                        line(response.data);
                    }).catch(err => {
                        this.$message.error(err);
//                  _self.loading = false;
                    });
                }
            },
        },
        created:function(){
            var _self=this;
            getParamkey({uid:111}).then(response => {
                console.log(response);
                line(response.data);

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
        left: 0 !important;
        top:15px !important;
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
    .daterangepicker table {
        background: #fff;
        width: 100%;
        margin: 0;
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
    .keep,.xinjian{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }
    .keep:hover,.keep:focus,.xinjian:hover,.xinjian:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .keep:active,.xinjian:active{
        color: #fff !important;
        background: #01a4e0 !important;
    }
    .more-use,.more-use:hover,.more-use:focus,.more-use:active{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #64cd64 !important;
    }
    .more-wait,.more-wait:hover,.more-wait:focus,.more-wait:active{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #faaa3a !important;
    }
    .more-stop,.more-stop:hover,.more-stop:focus,.more-stop:active{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #EC5A55 !important;
    }
    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/
    /*隐藏窗口*/
    .modal {
        overflow: auto;
    }
    .modal-dialog {
        width:800px;
    }
    .modal-dialog .modal-content {
        width:100%;
        height:100%;
    }
    .modal-header {
        border-bottom:none!important;
    }
    .modal-body {
        width:460px;
        margin:0 auto;
        position: relative;
    }
    .modal-title {
        font-size:16px;
    }
    .modal-body ul {
        width:460px;
    }
    .modal-body ul li {
        height:56px;
    }
    .modal-body ul li p {
        width:76px;
        display:inline-block;
        font-size:14px;
        margin-right:30px;
        text-align:right;
    }
    .modal-body ul li input,.modal-body ul li select {
        width:300px;
        height:30px;
        outline:none;
        border:1px solid #f0f0f0;
        box-shadow:0 0 5px #f6f6f6;
        border-radius:5px;
    }
    .first_ul{
        margin-top:33px;
        width:460px;
    }
    .modal-color {
        color:#d8dce1;
    }
    .modal-footer {
        text-align: center!important;
        border-top:none!important;
    }
    .modal-footer button {
        width:110px;
        height:30px;
        outline:none;
    }
    /*单选*/
    input[type="radio"]{
        display:none;
    }
    input[type="radio"]+label{
        position:relative;
        padding-left:30px;
        line-height:20px;
        color:#333;
        font-weight:normal;
        margin-left:2px;
    }
/*    label {
        display:inline-block;
        max-width:100%;
        margin-bottom:5px;
        margin-right:40px;
    }*/
    input[type="radio"]+label::before {
        content:"";
        width:20px;
        height:20px;
        border:1px solid #cecece;
        position:absolute;
        left:0;
    }
    input[type="radio"]:checked+label::after {
        content: '\2714';
        font-size: 14px;
        position: absolute;
        top: 0px;
        left: 3px;
        color: green;
    }


    .btn-close {
        background:#ffffff;
        border:1px solid #f0f0f0;
        box-shadow:0 0 5px #f7f7f7;
        margin-right:25px;
        color: black;
    }
    .btn{
        background:#01b7ee;
        border:1px solid #99e2f8;
        box-shadow:0 0 5px #c2eefb;
        margin-left:25px;
        color: white;
    }

    /*提示*/
    .foot {
        width:100%;
        height:150px;
        background: white;
        position: absolute;
        bottom:0;
    }
    .tishi {
        width:1200px;
        height:60px;
        margin: 0 auto;
    }
    .foot_btn {
        width:100%;
        height:90px;
        position: relative;
    }
    .btn-now {
        width:110px;
        height:30px;
        background:#01b7ee;
        border:1px solid #99e2f8;
        box-shadow:0 0 5px #c2eefb;
        color: white;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin: auto;
    }
    .btn:hover {
        color: #ffffff;
    }
    /*提示*/
    .help-block {
        display: block;
        margin-top: 5px;
        margin-bottom: 10px;
        color: red;
        text-align: right;
        margin-right: 65px;
    }

    @media screen and (max-width: 1000px) {
        #page-wrapper {
            width:1000px;
            overflow: auto;
        }
    }
    .statu-start,.statu-start1{
        vertical-align: middle;
        position: relative;
        display: inline-block;
        width: 14px;
        height: 14px;
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
    .label{
        display: inline-block;
        width: 40px;
        text-align: center;
        padding: 0;
        padding-top: .3em;
        padding-bottom: .3em;
    }
    .li1,.la1{
        display: inline-block;
        width: 110px;
        text-align: center;
        color: #00b7ee;
        height: 30px;
        line-height: 30px;
        background: #fff;
        cursor: pointer;
        border-top: 1px solid #00b7ee;
        border-left: 1px solid #00b7ee;
        border-bottom: 1px solid #00b7ee;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
    .li2,.la2{
        display: inline-block;
        width: 110px;
        text-align: center;
        height: 30px;
        background: #fff;
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
    .keep{
        width: 100px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }

    .keep:hover,.keep:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .keep:active{
        color: #fff !important;
        background: #01a4e0 !important;
    }

    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

</style>


