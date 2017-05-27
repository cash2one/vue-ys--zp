<template>
    <el-row style="padding-left: 15px;padding-right: 15px;margin-top: 30px;">
        <div>
            <div class="col-xs-12 gailan" style="height: 100%;">
                <el-col :span="24" class="col-xs-12 gailan-toubiao">
                    <el-col :span="20" class="col-xs-10">账户信息</el-col>
                    <el-col :span="4" class="col-xs-2 shezhi">设置</el-col>
                </el-col>
                <div class="col-xs-12 gailan-zhi" style="height: 94%;min-height: 640px;">
                    <div style="line-height: 60px;">
                        <el-col :span="4" class="col-xs-2 leff">
                            账户图标
                        </el-col>
                        <el-col :span="20" class="col-xs-10">
                            <el-col :span="6" class="col-xs-2" style="height: 60px;padding: 0;">
                                <input type="hidden" name="icon" class="icon">
                                <div class="fill">
                                    <input type="hidden" id="domain" value="http://test.yushan.mobi/">
                                    <input type="hidden" id="uptoken_url" value="/upfile/gettoken">
                                </div>
                                <div class="icc-n" style="width: 60px;display: inline-block;line-height: 0;position: relative;overflow: hidden;">
                                    <img src="http://test.yushan.mobi//icon/icon.jpg" alt="" class="a" style="width: 60px;">
                                    <div id="container" style="display: inline-block;position: absolute;left: 0;bottom: -20px;">
                                        <a class="btn btn-default btn-lg " id="pickfiles" href="#" >
                                            <!--<i class="glyphicon glyphicon-plus"></i>-->
                                            <span>上传图标</span>
                                        </a>
                                    </div>
                                </div>
                                   <!-- <el-upload
                                            action="//up.qbox.me/"
                                            type="drag"
                                            :thumbnail-mode="true"
                                            :on-success="handleSuccess"
                                            :before-upload="beforeUpload"
                                            :data="form">
                                        <i class="el-icon-upload"></i>
                                    </el-upload>-->
                            </el-col>
                            <el-col :span="18"  class="col-xs-8 ic-ts" style="color: #cacfd7;font-size: 12px;display: none;">
                                <div  class="col-xs-12" style="height: 20px;padding: 0;">图片规格：长60px,宽60px</div>
                                <div  class="col-xs-12" style="height: 20px;padding: 0;">100kb以内，jpg/png格式。</div>
                            </el-col>
                        </el-col>

                    </div>
                    <el-col :span="24" class="col-xs-12">
                        <el-col :span="6" class="col-xs-2 leff">账户名</el-col>
                        <el-col :span="18" class="col-xs-10 huname"></el-col>
                    </el-col>
                    <el-col :span="24" class="col-xs-12 disabled" disabled="disabled" style="color: #cac7d7;">
                        <el-col :span="6" class="col-xs-2 leff">App ID</el-col>
                        <el-col :span="18" class="col-xs-10 appid"></el-col>
                    </el-col>
                    <el-col :span="24" class="col-xs-12 disabled" disabled="disabled" style="color: #cac7d7;">
                        <el-col :span="6" class="col-xs-2 leff">类型</el-col>
                        <el-col :span="18" class="col-xs-10 leixing"></el-col>
                    </el-col>
                    <el-col :span="24" class="col-xs-12">
                        <el-col :span="6" class="col-xs-2 leff">第三方账户</el-col>
                        <el-col :span="18" class="col-xs-10 three"></el-col>
                    </el-col>
                    <el-col :span="24" class="col-xs-12">
                        <el-col :span="6" class="col-xs-2 leff">第三方密码</el-col>
                        <el-col :span="18" class="col-xs-10 threepass"></el-col>
                    </el-col>
                    <el-col :span="24" class="col-xs-12">
                        <el-col :span="6" class="col-xs-2 leff">Token</el-col>
                        <el-col :span="18" class="col-xs-10 token"></el-col>
                    </el-col>
                    <el-col :span="24" class="col-xs-12">
                        <el-col :span="6" class="col-xs-2 leff">状态</el-col>
                        <el-col :span="18" class="col-xs-10 ztt"><i class="zt"></i><span style="vertical-align: middle;">启用</span></el-col>
                    </el-col>
                    <el-col :span="24" class="col-xs-12">
                        <el-col :span="6" class="col-xs-2 leff">返点</el-col>
                        <el-col :span="18" class="col-xs-10 fd"></el-col>
                    </el-col>
                    <el-col :span="24" class="col-xs-12">
                        <el-col :span="6" class="col-xs-2 leff">域名</el-col>
                        <el-col :span="13" class="col-xs-5 domain" style="vertical-align: middle"></el-col>
                        <el-col :span="5" class="col-xs-5" style="vertical-align: middle">
                            <el-button class="col-xs-2 jiance">刷新<i class="iconfont">&#xe754;</i></el-button>
                            <i class="iconfont dui" style="display:none;color: #64cd64;vertical-align: middle;">&#xe639;</i>
                            <i class="iconfont cuo" style="display:none;color: #ce5a55;vertical-align: middle;">&#xe660;</i>
                        </el-col>

                    </el-col>
                    <!--<div class="col-xs-12">
                        <div class="col-xs-2 leff">
                            <button class="jiance btn-danger btn">检测</button>
                        </div>

                    </div>-->

                </div>
            </div>
        </div>
        <div class="beizhao">
             <div class="changed">
                 <div class="col-xs-12">
                     <div class="col-xs-8 col-xs-offset-2">
                         <div class="col-xs-4 col-xs-offset-1" style="font-size: 15px;font-family: 'Microsoft YaHei';color: #3b4e61;margin-top:20px;">设置账户信息</div>
                         <div class="col-xs-12 shezhi-content">
                             <div class="col-xs-3 leff1">账户名</div>
                             <div class="col-xs-9">
                                 <input type="text" class="huname1">
                             </div>
                         </div>
                         <div class="col-xs-12 shezhi-content disabled" style="color: #cac7d7;">
                             <div class="col-xs-3 leff1" style="height: 30px;line-height: 30px;">App ID</div>
                             <div class="col-xs-9 appid" style="padding-left: 30px;height: 30px;line-height: 30px;"></div>
                         </div>
                         <div class="col-xs-12 shezhi-content disabled" style="color: #cac7d7;">
                             <div class="col-xs-3 leff1" style="height: 30px;line-height: 30px;">类型</div>
                             <div class="col-xs-9 leixing" style="padding-left: 30px;height: 30px;line-height: 30px;"></div>
                         </div>
                         <div class="col-xs-12 shezhi-content">
                             <div class="col-xs-3 leff1">第三方账户</div>
                             <div class="col-xs-9">
                                 <input type="text" class="three1">
                             </div>
                         </div>
                         <div class="col-xs-12 shezhi-content">
                             <div class="col-xs-3 leff1">第三方密码</div>
                             <div class="col-xs-9">
                                 <input type="text" class="threepass1">
                             </div>
                         </div>
                         <div class="col-xs-12 shezhi-content">
                             <div class="col-xs-3 leff1">服务类型</div>
                             <div class="col-xs-9">
                                 <select name="server_type" id="fuwu">
                                 </select>
                             </div>
                         </div>
                         <div class="col-xs-12 shezhi-content">
                             <div class="col-xs-3 leff1">是否渠道</div>
                             <div class="col-xs-9">
                                 <div class="col-xs-6" style="height: 30px;line-height: 30px;">
                                     <i class="statu-start1">
                                         <i></i>
                                     </i>
                                     <span for="qy" style="vertical-align: middle;">是</span>
                                 </div>
                                 <div class="col-xs-6" style="height: 30px;line-height: 30px;">
                                     <i class="statu-start1">
                                         <i class="statu-end1"></i>
                                     </i>
                                     <span for="qy" style="vertical-align: middle;">否</span>
                                 </div>
                             </div>
                         </div>
                         <div class="col-xs-12 shezhi-content youqudao" style="display: none;">
                             <div class="col-xs-3 leff1">所有渠道</div>
                             <div class="col-xs-9">
                                 <select name="qudao_id" id="qudao">
                                 </select>
                             </div>
                         </div>
                         <div class="col-xs-12 shezhi-content">
                             <div class="col-xs-3 leff1">Token</div>
                             <div class="col-xs-9">
                                 <input type="text" class="token1">
                             </div>
                         </div>
                         <div class="col-xs-12 shezhi-content">
                             <div class="col-xs-3 leff1">状态</div>
                             <div class="col-xs-9">
                                 <div class="col-xs-4" style="height: 30px;line-height: 30px;">
                                     <i class="statu-start">
                                         <i class="statu-end"></i>
                                     </i>
                                     <span for="qy" style="vertical-align: middle;">启用</span>
                                 </div>
                                 <div class="col-xs-4" style="height: 30px;line-height: 30px;">
                                     <i class="statu-start">
                                         <i></i>
                                     </i>
                                     <span for="qy" style="vertical-align: middle;">暂停</span>
                                 </div>
                                 <div class="col-xs-4" style="height: 30px;line-height: 30px;">
                                     <i class="statu-start">
                                         <i></i>
                                     </i>
                                     <span for="qy" style="vertical-align: middle;">停用</span>
                                 </div>

                             </div>
                         </div>
                         <div class="col-xs-12 shezhi-content">
                             <div class="col-xs-3 leff1">返点</div>
                             <div class="col-xs-9">
                                 <input type="number" class="fd1" placeholder="0.01" min="0">
                             </div>
                         </div>
                         <div class="col-xs-12 shezhi-content">
                             <div class="col-xs-6 leff1">
                                 <button class="cancel">取消</button>
                             </div>
                             <div class="col-xs-6">
                                 <button class="keep">保存</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    </el-row>
</template>
<script scoped>
    /*eslint-disable */
//    require('qiniu-js');
//    import Qiniu from 'qiniu'
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
    let type;
    let tb1;
    let doma;
    export default {
        data() {
            return {
               value1:getDateStr(-2),
               value2:getDateStr(-1),

                tableData3:[]
            }
        },

        methods:{

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

        },
          mounted(){
            $('.icc-n').hover(function () {
              $('#container').css('bottom','0px');
              $('.ic-ts').show();
            },function () {
              $('#container').css('bottom','-20px');
              $('.ic-ts').hide();
            });
            let n=1;
            let n1=1;
            $('.statu-start').eq(0).click(function () {
              $(this).find('i').addClass('statu-end');
              $('.statu-start').eq(1).find('i').removeClass('statu-end');
              $('.statu-start').eq(2).find('i').removeClass('statu-end');
              n=1;
            });
            $('.statu-start').eq(1).click(function () {
              $(this).find('i').addClass('statu-end');
              $('.statu-start').eq(0).find('i').removeClass('statu-end');
              $('.statu-start').eq(2).find('i').removeClass('statu-end');
              n=2;
            });
            $('.statu-start').eq(2).click(function () {
              $(this).find('i').addClass('statu-end');
              $('.statu-start').eq(1).find('i').removeClass('statu-end');
              $('.statu-start').eq(0).find('i').removeClass('statu-end');
              n=0;
            });
            $('.statu-start1').eq(0).click(function () {
              $(this).find('i').addClass('statu-end1');
              $('.statu-start1').eq(1).find('i').removeClass('statu-end1');
              $('.statu-start1').eq(2).find('i').removeClass('statu-end1');
              qudao();
              $('.youqudao').show();
              n1=1;
            });
            $('.statu-start1').eq(1).click(function () {
              $(this).find('i').addClass('statu-end1');
              $('.statu-start1').eq(0).find('i').removeClass('statu-end1');
              $('.statu-start1').eq(2).find('i').removeClass('statu-end1');
              $("#qudao").find("option").remove();
              $('.youqudao').hide();
              n1=2;
            });
            $('.shezhi').click(function () {
              $('.beizhao').show();
            });
            $('.cancel').click(function () {
              $('.beizhao').hide();
            });
            $('.keep').click(function(){
              utils.ajaxPost(apiUrl.getApiUrl('getZhXX'), {
                name: $('.huname1').val(),
                appid: currentAccount.appid,
                type: type,
                account_name: $('.three1').val(),
                account_password: $('.threepass1').val(),
                account_appid: $('.token1').val(),
                account_status: n,
                fd_rate: $('.fd1').val(),
                fwlx:$('#fuwu').val(),
                qudao_id:$('#qudao').val(),
                icon:$('.icon').val(),
                domain:doma,
              }).done(function (data) {
                console.log(data);
                tol();
                $('.beizhao').hide();
              });
            });
            $('.jiance').click(function(){
              $(this).find('i').addClass('ani');
              let that=$(this);
              utils.ajax(apiUrl.getApiUrl('ceshi'), {
                appid: currentAccount.appid,
                type:currentAccount.type,
              }).done(function (data) {
                console.log(data);
                that.find('i').removeClass('ani');
                if(data.message=='success'){
                  that.hide();
                  $('.dui').show()
                  $(".gailan-zhi").append("<div class='col-xs-12'><div class='alert alert-warning' id='shezhi'>"+data.message+"</div></div>");
                }else{
                  that.hide();
                  $('.cuo').show()
                  $(".gailan-zhi").append("<div class='col-xs-12'><div class='alert alert-warning' id='shezhi'>"+data.message+"</div></div>");
                }
                //
              });
            })
          },
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
        font-size:16px;font-style:normal;
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
        font-size: 13px;
        font-family: "Microsoft Yahei", "΢���ź�", Arial, Tahoma;
        color: #3b4e61;
        padding:0;
        background: #fff;
    }
    .gailan-zhi>div{
        margin-top: 30px;
    }
    .leff{
        text-align: right;
    }
    .leff1{
        text-align: right;
        height: 30px;
        line-height: 30px;
        padding: 0;
    }
    .zt{
        vertical-align: middle;
        display: inline-block;
        margin-right: 10px;
        width: 13px;
        height: 13px;
        border-radius: 100%;
        background: #64cd64;
    }
    .shezhi{
        text-align: right;
        color: #01b7ee;
        cursor: pointer;
    }
    .beizhao{
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
    .changed{
        z-index: 12;
        padding-bottom: 20px;
        position: absolute;
        width:80%;
        /*height: 660px;*/
        background: #fff;
        margin:20px auto;
        left: 0;
        top: 0;
        /*bottom: 0;*/
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
    .cancel{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
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
    .ani{
        animation:mymove 1s linear infinite;
        -webkit-animation:mymove 1s linear infinite; /*Safari and Chrome*/
    }
    @keyframes mymove
    {
        from {
            transform:rotate(0deg)
        }
        to {transform:rotate(360deg)}
    }

    @-webkit-keyframes mymove /*Safari and Chrome*/
    {
        from {
            transform:rotate(0deg)
        }
        to {transform:rotate(360deg)}
    }
    .keep,.jiance{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
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
    .btn-group-lg>.btn, .btn-lg {
        padding: 10px 16px;
        font-size: 12px;
        line-height: 1.3333333;
        border-radius: 6px;
    }
    #pickfiles{
        position: relative;
        line-height: 20px;
        height: 20px;
        z-index: 1;
        padding: 0;
        width: 60px;
        border: 1px solid #01b7ee;
        border-radius: 2px;
        background: #01b7ee;
        color: #fff;
    }
    #container{
        transition:bottom 0.5s;
        -moz-transition:bottom 0.5s; /* Firefox 4 */
        -webkit-transition:bottom 0.5s; /* Safari and Chrome */
        -o-transition:bottom 0.5s; /* Opera */
    }
    .disabled { pointer-events: none;color: #ddd !important; }
    /*//////////////////////////////////////*/

</style>


