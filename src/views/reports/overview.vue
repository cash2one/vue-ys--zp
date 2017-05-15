<template>
        <el-row>
            <el-col :span="24" class=" gailan">
                <el-col :span="24" class=" gailan-toubiao">
                        概览
                </el-col>
                <el-col :span="24" class=" gailan-zhi">
                    <el-col :span="6" class="gailan-xiaofei">
                            <div style="border-right: 1px solid #e2e4e7;">
                                <div style="font-size: 14px;color: #3b4e61;">
                                    本月消费
                                </div>
                                <div class="month" style="font-size: 16px;color: #00b7ee;font-family: 500;margin-top: 10px;">
                                    Loading...
                                </div>
                            </div>
                    </el-col>
                    <el-col :span="6" class=" gailan-xiaofei">
                            <div style="border-right: 1px solid #e2e4e7;">
                                <div style="font-size: 14px;color: #3b4e61;">
                                    今日消费
                                </div>
                                <div class="today" style="font-size: 16px;color: #00b7ee;font-family: 500;margin-top: 10px;">
                                    Loading...
                                </div>
                            </div>
                       </el-col>
                    <el-col :span="6" class=" gailan-xiaofei">
                            <div style="border-right: 1px solid #e2e4e7;">
                                <div style="font-size: 14px;color: #3b4e61;">
                                    昨日消费
                                </div>
                                <div class="yesterday" style="font-size: 16px;color: #00b7ee;font-family: 500;margin-top: 10px;">
                                    Loading...
                                </div>
                            </div>
                    </el-col>
                    <el-col :span="6" class=" gailan-xiaofei" style="position: relative;">
                            <div style="border-right: 1px solid #e2e4e7;">
                                <div style="font-size: 14px;color: #3b4e61;">
                                    账户余额
                                    <!-- <a href="#" class="tooltip-show" data-toggle="tooltip"
                                        title="默认的 Tooltip">-->
                                    <i class="iconfont wen" style="cursor: pointer;">&#xe767;</i>
                                    <!--</a>-->
                                </div>
                                <div class="apie1" style="font-size: 16px;color: #00b7ee;font-family: 500;margin-top: 10px;">
                                    Loading...
                                </div>
                            </div>
                            <div class="jinggao">
                                您的资源仅供
                                <span style="margin-left:2px;margin-right:2px;font-weight: 500;font-size: 16px;" class="ziyuan">0</span>
                                天消费请尽快消费！
                            </div>
                    </el-col>
                </el-col>
             </el-col>
            <el-col :span="24"  style="padding: 0;margin-top: 30px;">
                <el-col :span="14" class=" duibi">
                    <el-col :span="24" class=" contin">
                        <el-col :span="24" class=" gailan-toubiao">
                                对比率
                            </el-col>
                        <el-col :span="24" class=" duibi-pie">
                            <el-col :span="8"  id="pie" style="height:450px;padding: 5px;">

                                </el-col>
                            <el-col :span="8"  id="pie1" style="height:450px;padding: 5px;">

                                </el-col>
                            <el-col :span="8"  id="pie2" style="height:450px;padding: 5px;">

                                </el-col>
                            </el-col>
                       </el-col>
                </el-col>
                <el-col :span="10" class=" zhuanhua">
                    <el-col :span="24" class=" contin">
                        <el-col :span="24" class=" gailan-toubiao">
                                转化漏斗
                            </el-col>
                            <el-col :span="24" class=" duibi-pie">
                                <el-col :span="24" id="funnel" style="height:450px;padding: 0px;">

                               </el-col>
                            </el-col>
                        </el-col>
                 </el-col>

                </el-col>
            <el-col :span="24" class=" zhexian" style="padding: 0;margin-top: 30px;margin-bottom: 30px;">
                <el-col :span="24" class=" gailan-toubiao">
                        <!--<div class="dropdown">-->
                            <!--<button type="button" class="btn1 dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" style="border: 0;background: #fafbfc;">近两周总体数据-->
                                <!--<span class="caret"></span>-->
                            <!--</button>-->
                            <!--<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">-->
                                <!--<li role="presentation">-->
                                    <!--<a role="menuitem" tabindex="-1" href="javascript:void(0)" class="near_twoweek">近两周总体数据</a>-->
                                <!--</li>-->
                                <!--<li role="presentation">-->
                                    <!--<a role="menuitem" tabindex="-1" href="javascript:void(0)" class="near_week">每周总消费趋势</a>-->
                                <!--</li>-->
                            <!--</ul>-->
                        <!--</div>-->
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                   </el-col>
                <el-col :span="24" style="background: #fff;">
                    <el-col :span="24"  class="" id="mainn" style="height:500px;background: #fff;"></el-col>
                    </el-col>

               </el-col>
           </el-row>
</template>
<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '近两周总体数据'
                }, {
                    value: '选项2',
                    label: '每周总消费趋势'
                }],
                value: ''
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";
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
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
    .alert{
        background: #fff;
        border-radius: 0;
        border-left: 5px solid #EC5A55;
        box-shadow: 0px 0px 6px #d9d9d9;
        font-family: "Microsoft Yahei";
        font-size: 16px;
        color: #3b4e61;
    }
    .zhexian{
        box-shadow: 0px 0px 6px #d9d9d9;
    }
    .gailan{
        padding: 0;
        box-shadow: 0px 0px 6px #d9d9d9;
    }
    .duibi{
        padding-left: 0;
        padding-right: 10px;
    }
    .zhuanhua{
        padding-right: 0;
        padding-left: 10px;
    }
    .duibi .contin,.zhuanhua .contin{
        box-shadow: 0px 0px 6px #d9d9d9;
        padding: 0;
    }
    .duibi-pie{
        padding: 0;
        height: 450px;
        background: #fff;
        -webkit-box-orient:horizontal;
        -webkit-box-pack: center;
        display: -webkit-box;
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
        height: 120px;
        -webkit-box-orient:horizontal;
        -webkit-box-pack: center;
        display: -webkit-box;
        background: #fff;
    }
    .gailan-xiaofei{
        padding: 0;
        height: 120px;
        -webkit-box-orient:  vertical;
        -webkit-box-pack: center;
        display: -webkit-box;
        text-align: center;
        font-family: Microsoft YaHei, sans-serif, Arial;
    }
    .jinggao{
        display: none;
        position: absolute;
        right: 10px;
        top:-35px;
        color: #fff;
        width: 160px;
        text-align: center;
        padding: 10px 0;
        border-radius: 5px;
        font-family: "Microsoft Yahei";
        font-size: 14px;
        background: #ec5a55;
    }
    #mainn{
        background: #fff;
    }


</style>


