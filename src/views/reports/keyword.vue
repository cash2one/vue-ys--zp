<template>
    <div class="bod-container">
        <div  class="clear" style="padding: 0">
            <div style="float: left">
                <el-radio-group v-model="radio3">
                    <el-radio-button label="单天数据"></el-radio-button>
                    <el-radio-button label="多天数据"></el-radio-button>
                </el-radio-group>
                <!--<div class="lav-li" style="display: inline-block">
                    <span class="la1 clink">单天数据</span>
                </div>-->
            </div>
            <div style="float: right">
                <!--<input type="text" readonly style="width: 150px;display: inline-block;margin-left: 30px;margin-right: 30px;" name="birthday" class="birthday form-control" />-->
                <span class="tol1" style="display: none;">
                            开始
                        <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                            结束
                        <el-date-picker
                                v-model="value2"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </span>
                <span class="tol">
                       <el-date-picker
                               v-model="value3"
                               type="date"
                               placeholder="选择日期">
                        </el-date-picker>
                 </span>

                <button type="button" class="checkn">查看</button>
            </div>
        </div>
        <div  class="gailan" style="margin-top: 30px;">
            <div  class="gailan-toubiao pull2" style="cursor: pointer;">
                <span class="shang_tit">各关键词消费分布</span><!--<i class="iconfont1 wen">&#xe650;</i>-->
            </div>
            <div  class="gailan-zhi drag2">
                <div  class="clear" style="margin-top: 30px;width: 100%">
                    <div style="float: left">
                    </div>
                    <div style="float: right">
                        <select class="trim">
                            <option value="0">展现 消费</option>
                            <option value="1">展现 点击</option>
                            <option value="2">展现 下载</option>
                            <option value="3">消费 下载</option>
                        </select>
                    </div>
                </div>
                <div  id="main"  style="height:300px;"></div>
            </div>
        </div>
        <div  class="gailan" style="margin-top: 30px;">
            <div  class="gailan-toubiao pull1" style="cursor: pointer;">
                <span class="xia_tit">关键词单天数据统计</span><i class="iconfont1 wen">&#xe650;</i>
            </div>
            <div  class="drag1" id="users">

                <el-row>
                    <el-col :span="24">
                        <el-col :span='24' style="margin-top: 30px;">
                            <el-radio-group v-model="radio2">
                                <el-radio-button label="下载"></el-radio-button>
                                <el-radio-button label="激活"></el-radio-button>
                            </el-radio-group>
                            <!-- <div class="nav-li" style="display: inline-block">
                                 <span class="li1 clink">下载</span><span class="li2">激活</span>
                             </div>-->
                            <!--<div class="searchs" style="display: inline-block;">
                                <input type="text" placeholder="Search" class="search"/>
                                <span class="glyphicon glyphicon-search" style="color:#666;"></span>
                            </div>-->
                        </el-col>
                    </el-col>

                </el-row>
                <el-row>
                    <el-col :span="24">
                        <div  style="margin-top: 30px;" id="tb">

                            <el-table
                                    :data="tableData3"
                                    height="400"
                                    stripe
                                    border
                                    :default-sort = "{prop: 'name', order: 'descending'}"
                                    style="width: 100%">
                                <el-table-column
                                        prop="keyword_name"
                                        sortable
                                        label="关键词">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="jihua_name"
                                        label="推广计划">

                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        prop="danyuan_name"
                                        label="推广单元">
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="消费变动">
                                    <template scope="scope">
                                        <div class="col-xs-12 cost1" style="font-weight:bold;">
                                            {{ scope.row.cost }}
                                        </div>
                                        <div class="col-xs-12 cost2" style="font-size: 12px;">
                                            {{ scope.row.cost_change }}
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="展现变动">
                                    <template scope="scope">

                                        <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.view }}
                                        </p>
                                        <p class="col-xs-12 view2" style="font-size: 12px;">{{ scope.row.view_change }}
                                        </p>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="点击变动">
                                    <template scope="scope">
                                        <el-col :span='12' class="col-xs-7" style="padding: 0">
                                          <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.pv }}
                                            </p>
                                          <p class="col-xs-12 pv2" style="font-size: 12px;">{{ scope.row.pv_change }}
                                            </p>
                                          </el-col>
                                           <el-col  :span='12' class="col-xs-5" style="padding: 0">
                                          <p class="col-xs-12 pv1" style="font-weight:bold;">{{ scope.row.pv_rate }}%
                                             </p>
                                          <p class="col-xs-12 pv2" style="font-size: 12px;"> {{ scope.row.pv_rate_change }}
                                            </p>
                                          </el-col>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="H5激活">
                                    <template scope="scope">
                                        <el-col :span='12' class="col-xs-7" style="padding: 0">
                                            <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.active }}
                                            </p>
                                            <p class="col-xs-12 active2" style="font-size: 12px;">{{ scope.row.active_change }}
                                            </p>
                                        </el-col>
                                        <el-col  :span='12' class="col-xs-5" style="padding: 0">
                                            <p class="col-xs-12 pv1" style="font-weight:bold;">{{ scope.row.active_rate }}%
                                            </p>
                                            <p class="col-xs-12 active2" style="font-size: 12px;"> {{ scope.row.active_rate_change }}
                                            </p>
                                        </el-col>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="H5激活成本">
                                    <template scope="scope">
                                        <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.active_chengben }}
                                        </p>
                                        <p class="col-xs-12 active1" style="font-size: 12px;">{{ scope.row.active_chengben_change }}
                                        </p>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="H5下载">
                                    <template scope="scope">
                                        <el-col :span='12' class="col-xs-7" style="padding: 0">
                                            <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.h5_down }}
                                            </p>
                                            <p class="col-xs-12 down2" style="font-size: 12px;">{{ scope.row.h5_down_change }}
                                            </p>
                                        </el-col>
                                        <el-col  :span='12' class="col-xs-5" style="padding: 0">
                                            <p class="col-xs-12 pv1" style="font-weight:bold;">{{ scope.row.h5_down_rate}}%
                                            </p>
                                            <p class="col-xs-12 down2" style="font-size: 12px;"> {{ scope.row.h5_down_rate_change }}
                                            </p>
                                        </el-col>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="H5下载成本">
                                    <template scope="scope">
                                        <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.h5_chengben}}
                                        </p>
                                        <p class="col-xs-12 down1" style="font-size: 12px;">{{ scope.row.h5_chengben_change}}
                                        </p>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="按钮下载">
                                    <template scope="scope">
                                        <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.button_click}}
                                        </p>
                                        <p class="col-xs-12 btn_cost1" style="font-size: 12px;">{{ scope.row.button_click_change}}
                                        </p>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        class="a2"
                                        sortable
                                        label="按钮消费">
                                    <template scope="scope">
                                        <p class="col-xs-12 cost1" style="font-weight:bold;">{{ scope.row.button_cost}}
                                        </p>
                                        <p class="col-xs-12 btn_cost1" style="font-size: 12px;">{{ scope.row.button_cost_change}}
                                        </p>
                                    </template>
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

    import { mapGetters } from 'vuex';
    import { keyAll } from 'api/account';

    export default {
      name: 'bod',
        data() {
            return {
              radio3:'单天数据',
              radio2:'下载',
              value1:'',
              value2:'',
              value3:'',
              tableData3:[],
            }
        },
        mounted(){
            var _self=this;
          keyAll({uid:111}).then(response => {
            console.log(response);
            this.tableData3=response.data;
              /*   _self.loading = false;
               ;*/

          }).catch(err => {
            this.$message.error(err);
//                  _self.loading = false;
          });

        }
    }

</script>
<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";
    .bod-container {
        padding-left: 15px;
        width: 100%;
        padding-right: 15px;
    }
    .el-table .cell, .el-table th>div{
        padding: 0;
    }
    .el-table__body-wrapper{
        overflow-x: hidden;
    }
    html{
        background:#f5f7f9;
    }
    #page-wrapper{
        background:#f5f7f9;
        padding-left: 30px;
        padding-right: 30px;
    }
    table .iconfont{
        font-family:"iconfont" !important;
        font-size:12px;font-style:normal;
        -webkit-transform: scale(.6);
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
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
        padding:0;
        background: #fff;
        padding-bottom: 30px;
    }
    .li1,.la1{
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
    .trim{
        border: solid 1px #dfe1e4;
        /*background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;*/
        padding-right: 14px;
        width:150px;
        padding-left: 10px;
        border-radius: 3px;
        height:30px;
        line-height:30px;
    }

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


