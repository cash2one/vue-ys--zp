<template>
    <div>
        <span :style="clsObj"></span>
        <span style="vertical-align: middle;">{{diff}} </span>

    </div>
</template>
<script>
  export default {
    name: 'ColorCell',
    data() {
      return {
//          diff:0
        }
    },
    computed: {
      clsObj:function () {
          return {
            width: this.nub > 0? '50%' : 50*(this.firstNum/this.secondNum)+'%' ,
            display:'inline-block',
            height: '10px' ,
            background:this.color,
            verticalAlign: 'middle',
          }
        },
      diff:function () {
        return this.firstNum;
      },
      nub:function () {
        return this.firstNum-this.secondNum;
      }
    },
    props: {
      firstNum: {
        type: Number,
        default() {
          return 0
        }
      },
      secondNum: {
        type: Number,
        default() {
          return 0
        }
      },
      color: {
        type:String,
        default() {
          return 0
        }
      }
    },
    methods: {

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
    }
    html{
        background:#f5f7f9;
    }
    #page-wrapper{
        /*min-width: 1110px;*/
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    .beizhaoaa,.beizhaobb{
        z-index: 11;
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }
    .changedaa,.changedbb{
        z-index: 12;
        padding-bottom: 20px;
        position: absolute;
        width:580px;
        height: 410px;
        background: #fff;
        margin:auto;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
    .shezhi-content{
        font-size: 14px;
        font-family: "Microsoft Yahei";
        color: #3b4e61;
        margin-top: 20px;
    }
    .beizhao input,.beizhao select{
        border: solid 1px #dfe1e4;
        width:100%;
        padding-left:30px;
        border-radius: 5px;
        height:30px;
        line-height:30px;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:10px;font-style:normal;
        -webkit-transform: scale(.8);
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
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
    .tong{
        display: inline-block;
        width: 100px;
        text-align: right;
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
    .birthday,.birthday1,.birthday2{
        background: transparent !important;
    }
    .keep,.export,.detail,.heqi,.luru1,.shuaxin{
        width: 100px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }

    .keep:hover,.keep:focus,.export:hover,.export:focus,.detail:hover,.detail:focus,.luru1:hover,.luru1:focus,.shuaxin:hover,.shuaxin:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .keep:active,.export:active,.detail:active,.luru1:active,.shuaxin:active{
        color: #fff !important;
        background: #01a4e0 !important;
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
    .gailan-zhi1{
        overflow: hidden;
        font-size: 13px;
        font-family: "Microsoft Yahei", "΢���ź�", Arial, Tahoma;
        color: #3b4e61;
        padding:0;
        background: #fff;
    }
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
    .statu-start,.statu-start1,.statu-start2{
        vertical-align: middle;
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        border: 1px solid #dfe1e4;
        border-radius: 3px;
        cursor: pointer;
    }
    .statu-end,.statu-end1,.statu-end2{
        width: 8px;
        height: 8px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 100%;
        background: #01b7ee;
        margin: auto;
    }
    .xialou,.shang{
        display: inline-block;
        width: 100px;
        height: 15px;
        vertical-align: middle;
    }
    .xialou{
        border:1px solid rgb(75,201,179);
        background-image:-webkit-linear-gradient(left, rgb(75,201,179) 0%, rgb(255,255,255) 70%);
        background-image:linear-gradient(left,rgb(75,201,179),rgb(255,255,255) 70%);
    }
    .shang{
        border:1px solid rgb(246,100,96);
        background-image:-webkit-linear-gradient(left, rgb(246,100,96), rgb(255,255,255) 70%);
        background-image:linear-gradient(left,rgb(246,100,96),rgb(255,255,255) 70%);
    }
    /*////////////////////////////////////*/
    .col-xs-n{
        width: 11.1%;
        display: inline-block;

    }
    .wrap{
        line-height: 0;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
    }
    .shen>span,.shen1>span{
        float: left;
        display: inline-block;
        word-wrap: break-word;
        border-right: 1px solid #ddd;
        /*line-height: 40px;*/
        /*width: 9.66%;*/
        height:50px;
        padding-top:10px;
        padding-bottom:10px;
        vertical-align: middle;
    }
    .shen1>span{
        float: left;
    }
    .shen{
        box-shadow: 0px 0px 10px #c1c1c1;
        /*display: none;*/
    }

    .zhe{
        position: absolute;left: 0;top: 0;width: 100%;height: 50px;background: rgba(0,0,0,.3);z-index: 11;
        opacity: 0.3;
        display: none;
    }
    .ti li>p,.ti li>div{
        border-bottom: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
    }
    .ti>li{
        height: 51px;
    }
    .ti,.tou{
        min-width: 1106px;
    }
    #tb table thead tr{
        background: #dfe1e4;
    }
    #tb .tou li span,#tb table td{
        font-size: 14px;
        padding-top:7px;
        padding-bottom:7px;
        color: #3b4e61;
    }
    #tb .tou li span{
        display: inline-block;
        vertical-align: middle;
        font-weight: 500 !important;
    }
    #tb table td{

        border:solid #ddd 1px !important;
        /*border-bottom:0 !important;*/
        border-top:0 !important;
    }
    #tb table{
        border-radius: 5px;
        border-collapse:collapse;
        border:none;
    }
    /*.ti li:nth-child(odd){
        background: #fff;
    }
    .ti li:nth-child(even){
        background: #f5f7f9;
    }*/
    #tb table thead,#tb tbody tr{
        display:table;
        width:100%;
        table-layout:fixed;
    }
    .ti{
        display:block;
        max-height: 400px;
        /*overflow-y: scroll;*/
    }
    .tou>li>span{
        float: left;
    }
    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
        vertical-align: middle;
    }

    .xia{
        display: none;
    }
    .ribao_qx{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #3b4e61 !important;
        background: #fff !important;
    }
    .ribao_qx:hover,.ribao_qx:focus{
        background: #f5f7f9 !important;
    }
    .ribao_qx:active{
        background: #dfe1e4 !important;
    }
    .ribao_cz,.ribao_fh{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }
    .ribao_cz:hover,.ribao_cz:focus,.ribao_fh:hover,.ribao_fh:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .ribao_cz:active.ribao_fh:active{
        color: #fff !important;
        background: #01a4e0 !important;
    }

    .ui-widget-header {
        border: 1px solid #fff;
        background: #fff;
        color: #333;
        font-weight: 700;
    }
    .ui-button, .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, html .ui-button.ui-state-disabled:active, html .ui-button.ui-state-disabled:hover {
        border: 1px solid #f5f5f5;
        background: #fff;
        font-weight: 400;
        color: #454545;
    }
    .ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight {
        border: 1px solid #cacfd7;
        background: #cacfd7;
        color: #fff;
    }
    .ui-button.ui-state-active:hover, .ui-button:active, .ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active, a.ui-button:active {
        border: 1px solid #00b7ee;
        background: #00b7ee;
        font-weight: 400;
        color: #fff;
    }
    .nian{
        float: left;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        width: 119px;
        background: #fff;
        border: 1px solid #00b7ee;
        color: #00b7ee;
        font-size: 20px;

    }

    .yue{
        float: left;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        width: 119px;
        background: #00b7ee;
        border: 1px solid #00b7ee;
        color: #fff;
        font-size: 14px;
    }
    .yu1{
        font-size: 20px;
    }
    .table-condensed{
        background: #fff;
    }

    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

</style>