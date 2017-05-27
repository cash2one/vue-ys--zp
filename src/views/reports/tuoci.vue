
<template>
    <el-row style="padding-left: 15px;padding-right: 15px;margin-top: 30px;">
        <el-col :span="24" class="gailan">
            <div class="gailan-toubiao">
                托词
            </div>
            <el-col :span="24" class="gailan-zhi" type="flex" justify="center">
                <el-row :span="16">
                    <div class="head-t">
                         <el-col :span="5" style="padding: 20px;height: 120px;border-bottom: 2px solid #00b7ee;">
                            <el-col :span="12" class="qiu" >
                                1
                            </el-col>
                            <el-col :span="12" style="margin-left: 10px;">
                                <el-col :span="24" style="font-size: 24px;font-family: 'Microsoft YaHei';color: #00b7ee;">
                                    托词
                                </el-col>
                                <el-col :span="24" style="font-size: 14px;font-family: 'Microsoft YaHei';color: #00b7ee;margin-top: 20px;">
                                    输入词汇
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col :span="5" style="padding: 20px;height: 120px;border-bottom: 2px solid #cacfd7;">
                            <el-col :span="12" class="qiu" >
                                2
                            </el-col>
                            <el-col :span="12" style="margin-left: 10px;">
                                <el-col :span="24" style="font-size: 24px;font-family: 'Microsoft YaHei';color: #00b7ee;">
                                    属性
                                </el-col>
                                <el-col :span="24" style="font-size: 14px;font-family: 'Microsoft YaHei';color: #00b7ee;margin-top: 20px;">
                                    设置属性
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col :span="5" style="padding: 20px;height: 120px;border-bottom: 2px solid #cacfd7;">
                            <el-col :span="12" class="qiu" v-on:click.native="qiubian">
                                3
                            </el-col>
                            <el-col :span="12" style="margin-left: 10px;">
                                <el-col :span="24" style="font-size: 24px;font-family: 'Microsoft YaHei';color: #00b7ee;">
                                    创意
                                </el-col>
                                <el-col :span="24" style="font-size: 14px;font-family: 'Microsoft YaHei';color: #00b7ee;margin-top: 20px;">
                                    添加创意
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col :span="9" style="padding: 20px;height: 120px;border-bottom: 2px solid #cacfd7;"></el-col>
                    </div>
                    <el-row :gutter="20" style="display: none">
                        <el-col :span="7" style="border: 1px solid #cacfd7;margin-top: 20px;margin-left: 20px;padding-left: 0px !important;padding-right: 0 !important;">
                            <el-col :span="5" style="height: 390px;color: #3b4e61;background: #f5f7f9;text-align: center;line-height: 390px;">种子词</el-col>
                            <el-col :span="19" style="height: 390px;padding-left: 0px !important;padding-right: 0 !important;">
                                <el-input
                                        type="textarea"
                                        :rows="18"
                                        resize="none"
                                        placeholder="一行只能放一个词语"
                                        v-model="textarea1">
                                </el-input>
                            </el-col>
                        </el-col>
                        <el-col :span="7" style="border: 1px solid #cacfd7;margin-top: 20px;margin-left: 20px;padding-left: 0px !important;padding-right: 0 !important;">
                            <el-col :span="5" style="height: 390px;color: #3b4e61;background: #f5f7f9;text-align: center;line-height: 390px;">包含词</el-col>
                            <el-col :span="19" style="height: 390px;padding-left: 0px !important;padding-right: 0 !important;">
                                <el-input
                                        type="textarea"
                                        :rows="18"
                                        resize="none"
                                        placeholder="一行只能放一个词语"
                                        v-model="textarea2">
                                </el-input>
                            </el-col>
                        </el-col>
                        <el-col :span="7" style="border: 1px solid #cacfd7;margin-top: 20px;margin-left: 20px;padding-left: 0px !important;padding-right: 0 !important;">
                            <el-col :span="5" style="height: 390px;color: #3b4e61;background: #f5f7f9;text-align: center;line-height: 390px;">不包含词</el-col>
                            <el-col :span="19" style="height: 390px;padding-left: 0px !important;padding-right: 0 !important;">
                                <el-input
                                        type="textarea"
                                        :rows="18"
                                        resize="none"
                                        placeholder="一行只能放一个词语"
                                        v-model="textarea3">
                                </el-input>
                            </el-col>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-col :span="12">
                                <el-col :span="24">
                                    <el-col :span="4">访问量：</el-col>
                                    <el-col :span="20">
                                        <el-input
                                                placeholder="≥输入的访问量"
                                                type="number"
                                                v-model="input1">
                                        </el-input>
                                    </el-col>
                                </el-col>

                                <el-col :span="24">
                                    <el-col :span="4">来源：</el-col>
                                    <el-col :span="20">
                                        <el-input
                                                placeholder="≥输入的访问量"
                                                type="number"
                                                v-model="input1">
                                        </el-input>
                                    </el-col>
                                </el-col>
                            </el-col>
                            <el-col :span="12"></el-col>
                        </el-col>
                        <el-col :span="24" style="margin-top: 30px;">

                        </el-col>
                    </el-row>
                    <el-col :span="24" style="height:70px;line-height:70px;text-align: center;background: #f5f7f9;margin-top: 20px;">
                        <el-button :plain="true" class='cancel' type="info">重置</el-button>
                        <el-button :plain="true" class='keep' type="info" style="margin-left: 30px;">提交</el-button>
                    </el-col>
                </el-row>
                </el-col>
            </el-col>
        </el-col>

        <el-col :span="24" class="gailan" style="margin-top: 30px;">
            <div class="gailan-toubiao clear">
                <span style="float: left">审核</span>
                <span style="float: right;cursor: pointer;text-decoration: underline;">历史记录>></span>

            </div>
            <el-col :span="24" class="gailan-zhi">
                <el-col :span="24" style="margin-top: 30px;margin-bottom: 30px;">
                    <el-col :span="8" style="padding-left: 15px;padding-right: 15px;">
                        <el-col :span="24" style="height: 170px;border-radius: 3px;border: 1px solid #cacfd7;">
                            <el-col :span="24" style="height: 40px;line-height: 40px;color: #3b4e61;text-align: center;background: #cacfd7;">
                                2011/01/01  11:11
                            </el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="8" style="padding-left: 15px;padding-right: 15px;">
                        <el-col :span="24" style="height: 170px;border-radius: 3px;border: 1px solid #cacfd7;">
                            <el-col :span="24" style="height: 40px;line-height: 40px;color: #3b4e61;text-align: center;background: #cacfd7;">
                                2011/01/01  11:11
                            </el-col>
                            <el-col :span="24" style="height: 128px;background: #f5f7f9;">
                                <el-col :span="24" style="margin-top: 20px">
                                    <el-col :span="18"><el-progress :percentage="100" status="success"></el-progress></el-col>
                                    审核成功
                                </el-col>
                                <el-col :span="24" class="clear" style="margin-top: 20px;">
                                    <span style="float:left">查看详情</span>
                                    <span style="float:right">
                                      <span>X</span>
                                      <span>X</span>
                                    </span>
                                </el-col>
                            </el-col>
                        </el-col>
                    </el-col>
                    <el-col :span="8" style="padding-left: 15px;padding-right: 15px;">
                        <el-col :span="24" style="height: 170px;border-radius: 3px;border: 1px solid #cacfd7;">
                            <el-col :span="24" style="height: 40px;line-height: 40px;color: #3b4e61;text-align: center;background: #cacfd7;">
                                2011/01/01  11:11
                            </el-col>
                        </el-col>
                    </el-col>
                </el-col>
            </el-col>
        </el-col>
        </el-col>
    </el-row>
</template>
<script>
    /*eslint-disable */
    import Vue from 'vue';
    import { mapGetters } from 'vuex';
    import { getDanTable } from 'api/account';
    export default {
        data() {
            return {
              textarea1: '',
              textarea2: '',
              textarea3: '',
              input1:'',
            }
        },
      methods:{
          qiubian:function (e) {
            console.log(e.target);
            let el=e.target;
            $(el).css({
              "width":"40px",
              "line-height":"40px",
              "height":"40px",
              "border":"2px solid #ccc",
              "color":"#ccc",
              "background":"#fff"
            });
          }
      },
        created(){

        }
    }

</script>
<style rel="stylesheet/scss" scoped  lang="scss">
    @import "src/styles/mixin.scss";
    @import url("//unpkg.com/element-ui@1.3.4/lib/theme-default/index.css");
    /*@import "src/styles/element-ui.scss";*/
    @import "src/styles/rest.scss";
    .gailan{
            padding: 0;
            box-shadow: 0px 0px 6px #d9d9d9;
    }
    .gailan-toubiao{
        padding-left: 15px;
        border-bottom: 1px solid #ebebeb;
        padding-top: 10px;
        padding-bottom: 10px;
        background: #fafbfc;
        font-size: 14px;
        color: #3b4161;
        font-family: 'Microsoft YaHei';
    }
    .qiu{
        -webkit-transition:1s; -moz-transition:1s; -o-transition: 1s; transition:1s;
        width: 50px;height: 50px;border-radius: 100%;border: 2px solid #00b7ee;color: #fff;background:#00b7ee;text-align: center;line-height: 50px;
        font-size: 24px;
        font-weight: bold;
    }
    .gailan-zhi{
        font-size: 13px;
        font-family: "Microsoft Yahei", "\3A2\FFFD\FFFD\FFFD\17A\FFFD", Arial, Tahoma;
        color: #3b4e61;
        padding: 0;
        background: #fff;
    }
    .cancel{
        width: 100px;
        padding-top: 6px;
        padding-bottom: 6px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #3b4e61 !important;
        background: #fff !important;
    }
    .cancel:hover,.cancel:focus{
        background: #f5f7f9 !important;
    }
    .cancel:active{
        background: #dfe1e4 !important;
    }
    .keep,.jiance{
        width: 100px;
        padding-top: 6px;
        padding-bottom: 6px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }
    .keep:hover,.keep:focus,.jiance:hover,.jiance:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .keep:active,.jiance:active{
        color: #fff !important;
        background: #01a4e0 !important;
    }
</style>


