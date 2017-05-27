<template>
    <el-row style="padding-right: 15px;padding-left: 15px;margin-top: 30px;">
        <div class="row">
            <div class="col-xs-12 gailan">
                <div class="col-xs-12 gailan-toubiao">
                    设置全账户参数
                </div>
                <div class="col-xs-12 gailan-zhi" id="users">
                    <div class="col-xs-12 clear" style="margin-top: 30px;">
                        <el-col :span="10" class="col-xs-5" style="padding-left: 0;">
                            关键词<button class="add">一键设置</button>
                        </el-col>
                        <el-col :span="14" class="col-xs-7" style="text-align:right;padding-right: 0;">
                            <div class="searchs" style="display: inline-block;">
                                <input type="text" placeholder="Search" class="search"/>
                                <span class="glyphicon glyphicon-search" style="color:#666;"></span>
                            </div>
                            <button class="keep">刷新</button>
                        </el-col>
                    </div>
                    <div class="col-xs-12 clear">
                        <input type="checkbox" id="ck"><label for="ck" style="vertical-align: middle;">全选</label>
                    </div>
                    <div class="col-xs-12 contain" style="margin-top: 30px;" id="tb">
                        <el-table
                                :data="tableData3"
                                border
                                stripe
                                style="width: 100%"
                                height="400">
                            <el-table-column
                                    label="关键词"
                                    width="230">
                                <template scope="scope">
                                    <div style="cursor: pointer;" class="jihua" :data-name="scope.row.campaignName" :data-id="scope.row.campaignId ">
                                        <i class="statu-start">
                                            <i></i>
                                        </i>
                                        <span style="display: none">1</span>
                                        <label class="jn" style="cursor:pointer;max-width: 80%;text-decoration: underline;vertical-align: middle;" :data-name="scope.row.campaignName" :data-id="scope.row.campaignId ">{{scope.row.campaignName}}</label>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="关键词ID"
                                    width="130">
                                <template scope="scope">
                                    <div>
                                        {{ scope.row.campaignId }}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="上限设置">
                                <template scope="scope">
                                    <el-col :span="10" class="col-xs-5" style="padding: 0;">
                                        <span>成本</span>
                                        <input type="number" class="chengben1" :value='scope.row.cpc' >
                                        <b class="chengben2">{{scope.row.cpc}} </b>
                                    </el-col>
                                    <el-col :span="10" class="col-xs-5" style="padding: 0;">
                                        <span>出价</span>
                                        <input type="number" class="chujia1" :value="scope.row.max_price" >
                                        <b class="chujia2">{{scope.row.max_price}} </b>
                                    </el-col>
                                    <el-col :span="4" class="col-xs-2" style="padding: 0;text-align: right;height: 30px;line-height: 30px;">
                                        <i class="iconfont wen1" style="cursor: pointer;">&#xe669;</i>
                                        <i class="iconfont wen2" style="cursor: pointer;">&#xe639;</i>
                                        <i class="iconfont wen3" style="cursor: pointer;">&#xe6f3;</i>
                                    </el-col>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="H5下载计算比例设置(0-1)">
                                <template scope="scope">
                                    <el-col :span="18" class="col-xs-8" style="padding: 0;">
                                        <input type="number" class="jisuan1" max="1" min="0" placeholder="0.40" step="0.1" :value="scope.row.auto_dl_rate" >
                                        <b class="jisuan2">{{scope.row.auto_dl_rate}}</b>
                                    </el-col>
                                    <el-col :span="6" class="col-xs-4" style="padding: 0;text-align: right;height: 30px;line-height: 30px;">
                                        <i class="iconfont wen1" style="cursor: pointer;">&#xe669;</i>
                                        <i class="iconfont wen2" style="cursor: pointer;">&#xe639;</i>
                                        <i class="iconfont wen3" style="cursor: pointer;">&#xe6f3;</i>
                                    </el-col>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    label="状态"
                                    width="100">
                                <template scope="scope">
                                    <el-tag v-if='scope.row.pause' class="label label-default" style="background: #EC5A55;">停投</el-tag>
                                    <el-tag v-else class="label label-default" style="background: #64cd64;">在投</el-tag>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
       <!-- <div class="beizhao">
            <div class="changed">
                <div class="col-xs-12">
                    <div class="col-xs-12" style="color: #cacfd7;font-size: 12px;padding: 0;">
                        <el-col :span="20" class="col-xs-8" style="padding: 0;">
                            替换或跳过参数设置
                        </el-col>
                        <el-col :span="4" class="col-xs-4 cancel" style="padding: 0;text-align: right;cursor: pointer;">
                            ×
                        </el-col>
                    </div>
                </div>
                &lt;!&ndash;  <div class="col-xs-12" style="font-size: 12px;color: #3b4e61;margin-top: 30px;">
                      正在对<span style="font-size: 13px;color: #01b7ee;">201711808-08-超市测试</span>计划中 <b>1030</b>个单元进行参数设置
                  </div>
                  <div class="col-xs-12" style="font-size: 15px;color: #3b4e61;margin-top: 10px;">
                      目标包含 <b>800</b> 个已设置参数单元
                  </div>&ndash;&gt;
                <div class="col-xs-12" style="font-size: 15px;color: #3b4e61;">
                    <p class="zhai" data-turn="true">
                        <i class="iconfont" style="color: #64cd64;margin-right: 10px;">&#xe639;</i>
                        替换目标内单元的参数
                    </p>
                    <p class="zhai" data-turn="false">
                        <i class="iconfont" style="color: #01b7ee;margin-right: 10px;-webkit-transform: rotate(-45deg);">&#xe62c;</i>
                        跳过已设置参数的单元
                    </p>
                </div>
            </div>
        </div>-->
        <div class="tiao_beizhao">
            <div class="tiao_changed">
                <div class="col-xs-12">
                    <div class="col-xs-12" style="color: #cacfd7;font-size: 12px;padding: 0;">
                        <el-col :span="20" class="col-xs-8" style="padding: 0;">
                            一键设置
                        </el-col>
                        <el-col :span="4" class="col-xs-4 cancel" style="padding: 0;text-align: right;cursor: pointer;">
                            <!--×-->
                        </el-col>
                    </div>
                </div>
               <!-- <div class="col-xs-12" style="font-size: 15px;color: #3b4e61;margin-top: 20px;">
                    <p style="font-size: 13px;">智能调价</p>
                    <p style="margin-top: 5px;">
                        <input type="checkbox" id="checkbox" class="chk_4" style="display: none;" /><label for="checkbox" style="margin-bottom: 0;"></label>
                        <span>关闭</span>
                    </p>
                </div>-->
                <div class="col-xs-12" style="font-size: 15px;color: #3b4e61;margin-top: 15px;">
                    <p style="font-size: 13px;">上限设置</p>
                    <p style="margin-top: 5px;">
                    <el-col :span="12" class="col-xs-6" style="padding: 0;">
                        成本 <input type="number" class="quancb" placeholder="999">
                    </el-col>
                    <el-col :span="12" class="col-xs-6" style="padding: 0;">
                        出价 <input type="number" class="quancj" placeholder="999">
                    </el-col>
                    </p>
                </div>
                <div class="col-xs-12" style="font-size: 15px;color: #3b4e61;margin-top: 15px;">
                    <p style="font-size: 13px;">H5下载计算比例设置</p>
                    <p style="margin-top: 5px;">
                        比例
                        <input type="number" class="quanbl" placeholder="0.40">
                    </p>
                </div>
                <div class="col-xs-12" style="text-align: right;margin-top: 20px;">

                    <button class="del">取消</button>
                    <button class="only">保存</button>

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
    import { tiaojia } from 'api/account';
//    import ColorCell from 'components/table/ColorCell';
//    import ColorBack from 'components/table/background';

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
    let data_n=[];
    let tiao_n=[];
    let flag=1;
    function plan(data) {
      if(flag==0){
        flag=1;
        utils.ajaxPost(apiUrl.getApiUrl('plansetandon'), {
          appid:currentAccount.appid,
          data:JSON.stringify(data),
          type:currentAccount.type,
        }).done(function (data) {
          window.location.reload();
        })
      }else {
        utils.ajaxPost(apiUrl.getApiUrl('planset'), {
          appid:currentAccount.appid,
          data:JSON.stringify(data),
          type:currentAccount.type,
        }).done(function (data) {
          // window.location.reload();
        })
      }

    }
    function tiao(data) {
      utils.ajaxPost(apiUrl.getApiUrl('planon'), {
        appid:currentAccount.appid,
        data:JSON.stringify(data),
        type:currentAccount.type,
      }).done(function (data) {

      })
    }

    export default {
        data() {
            return {
//               value1:getDateStr(-2),
               tableData3:[]
            }
        },
      mounted:function(){

        $(document).on('change','#ck',function () {
          if($(this).is(':checked')){
            $('.statu-start').find('i').addClass('statu-end');
            $('.statu-start').siblings('span').text('0');
          }else {
            $('.statu-start').find('i').removeClass('statu-end');
            $('.statu-start').siblings('span').text('1');
          }
        });
//        $('.gailan-toubiao').html('<a href="//localhost:9527/#/ai/tiaojia" onclick="copy()">全部计划</a>/<a href="//localhost:9527/#/ai/tiaojiaunit" onclick="copy1()">'+store.getDan().name+'</a>/<a href="">'+store.getUnit().name+'</a>');
        function copy() {
          window.location.href='//localhost:9527/#/ai/tiaojia';
        }
        function copy1() {
          window.location.href='//localhost:9527/#/ai/tiaojiaunit';
        }

        $(document).on('click','.keep',function () {
          tiaojia({uid:111}).then(response => {
//            console.log(response);
            this.tableData3=response.data;

          }).catch(err => {

          });
        });
        $(document).on('click','.del',function () {
          $('.tiao_beizhao').hide();
        });
        $(document).on('click','.add',function () {
          $('.tiao_beizhao').show();
          data_n=[];

          $('.statu-end').each(function () {
            let tr=$(this).parents('tr');
            data_n.push({
              planid:tr.data('id'),
            });
          });
        });
        $(document).on('click','.only',function () {
          let auto;
          if($('.chk_4').is(':checked')){
            auto='on';
          }else{
            auto='off';
          }
            /*for(let i in tiao_n){
             tiao_n[i].auto=auto;
             }*/
          console.log(tiao_n);
          for(let i in data_n){
            data_n[i].max_price=$('.quancj').val();
            data_n[i].cpc=$('.quancb').val();
            data_n[i].auto_dl_rate=$('.quanbl').val();
            data_n[i].auto=auto;
          }
          console.log(data_n);
          flag=0;
          $('.tiao_beizhao').hide();
          $('.beizhao').show();
        });
        $(document).on('change','.chk_3',function () {
          if($(this).is(':checked')){
            $(this).siblings('span').text('开启');
            tiao_n=[];
            tiao_n.push({
              planid:$(this).data('id'),
              auto:'on',
            });
            tiao(tiao_n);
          }else {
            $(this).siblings('span').text('关闭');
            tiao_n=[];
            tiao_n.push({
              planid:$(this).data('id'),
              auto:'off',
            });
            tiao(tiao_n);
          }
        });
        $(document).on('change','.chk_4',function () {
          if($(this).is(':checked')){

            $(this).siblings('span').text('开启');
          }else {
            $(this).siblings('span').text('关闭');

          }
        });
        $(document).on('click','.statu-start',function () {
          if($(this).siblings('span').text()==1){
            $(this).siblings('span').text('0');
            $(this).find('i').addClass('statu-end');
          }else{
            $(this).siblings('span').text('1');
            $(this).find('i').removeClass('statu-end');
          }
        });
          $(document).on('click','.wen1',function () {
            $(this).parent().siblings().find('.chujia1').val($(this).parent().siblings().find('.chujia2').text());
            $(this).parent().siblings().find('.chengben1').val($(this).parent().siblings().find('.chengben2').text());
            $(this).parent().siblings().find('.jisuan1').val($(this).parent().siblings().find('.jisuan2').text());
            $(this).parent().siblings().find('.chujia2,.chengben2,.jisuan2').hide();
            $(this).parent().siblings().find('.chujia1,.chengben1,.jisuan1').show();
            $(this).hide();
            $(this).siblings().show();
          });
        $(document).on('change','.wen1',function () {
          if($(this).val()>1){
            $(this).css('border','1px solid #ec5a55');
            $(this).val('1');
          }else if($(this).val()<0){
            $(this).css('border','1px solid #ec5a55');

            $(this).val('0');
          }else {
            $(this).css('border','1px solid #ccc');
          }
        })
        $(document).on('click','.wen2',function () {
          $(this).parent().siblings().find('.chujia2').text($(this).parent().siblings().find('.chujia1').val())
          $(this).parent().siblings().find('.chengben2').text($(this).parent().siblings().find('.chengben1').val())
          $(this).parent().siblings().find('.jisuan2').text($(this).parent().siblings().find('.jisuan1').val())
          $(this).parent().siblings().find('.chujia1,.chengben1,.jisuan1').hide();
          $(this).parent().siblings().find('.chujia2,.chengben2,.jisuan2').show();
          $(this).hide();
          $(this).siblings('.wen3').hide();
          $(this).siblings('.wen1').show();
          $('.beizhao').show();
          let tr=$(this).parents('tr');
          data_n=[];
          data_n.push({
            max_price:tr.find('.chujia1').val(),
            cpc:tr.find('.chengben1').val(),
            planid:tr.data('id'),
            auto_dl_rate:tr.find('.jisuan1').val(),
          })
        })
        $(document).on('click','.wen3',function () {
          $(this).parent().siblings().find('.chujia1,.chengben1,.jisuan1').hide();
          $(this).parent().siblings().find('.chujia2,.chengben2,.jisuan2').show();
          $(this).hide();
          $(this).siblings('.wen2').hide();
          $(this).siblings('.wen1').show();
        })
        $(document).on('click','.jn',function () {
          let dan={
            name:$(this).data('name'),
            id:$(this).data('id'),
          };
          console.log(dan);
//          store.setDan(dan);
//          vue.$router.push({ path: '/ai/tiaojiaunit' });
          window.location.href='//localhost:9527/#/ai/tiaojiakey';
        })
        $(document).on('click','.zhai',function () {
          let that=$(this);
          for(let i in data_n){
            data_n[i].fugai=that.data('turn');
          }
          plan(data_n);

          $('.beizhao').hide();
        })
        $(document).on('click','.cancel',function () {
          $('.beizhao').hide();
        })

        },
        created:function(){
            var _self=this;
          tiaojia({uid:111}).then(response => {
//            console.log(response);
            this.tableData3=response.data;

          }).catch(err => {

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
    }
    .el-table .cell, .el-table th>div{
        padding-left: 0 !important;
        padding-right: 0 !important;
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
    .keep,.add{
        margin-left: 20px;
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }
    .keep:hover,.keep:focus,.add:hover,.add:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .keep:active,.add:active{
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
    /*******STYLE 3*******/

    .chk_3 + label,.chk_4 + label {
        background-color: #cbcfd8;
        padding: 9px;
        border-radius: 50px;
        display: inline-block;
        position: relative;
        margin-right:10px;
        -webkit-transition: all 0.1s ease-in;
        transition: all 0.1s ease-in;
        width: 40px;
        vertical-align: middle;
        height: 17px;
    }

    .chk_3  + label:after,.chk_4  + label:after {
        content: ' ';
        position: absolute;
        top: 0;
        -webkit-transition: box-shadow 0.1s ease-in;
        transition: box-shadow 0.1s ease-in;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        box-shadow: inset 0 0 0 0 #eee, 0 0 1px rgba(0,0,0,0.4);
    }

    .chk_3  + label:before,.chk_4  + label:before {
        content: ' ';
        position: absolute;
        background: white;
        top: 1px;
        left: 1px;
        z-index: 11;
        width:15px;
        -webkit-transition: all 0.1s ease-in;
        transition: all 0.1s ease-in;
        height:15px;
        border-radius: 100px;
        box-shadow: 0 3px 1px rgba(0,0,0,0.05), 0 0px 1px rgba(0,0,0,0.3);
    }

    .chk_3:active + label:after,.chk_4:active + label:after {
        box-shadow: inset 0 0 0 20px #eee, 0 0 1px #eee;
    }

    .chk_3:active + label:before,.chk_4:active + label:before {
        width: 15px;
    }

    .chk_3:checked:active + label:before,.chk_4:checked:active + label:before {
        width: 15px;
        left: 20px;
    }

    .chk_3  + label:active,.chk_4  + label:active {
        box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
    }

    .chk_3:checked + label:before,.chk_4:checked + label:before {
        content: ' ';
        position: absolute;
        left: 26px;
        border-radius: 100px;
    }

    .chk_3:checked + label:after,.chk_4:checked + label:after {
        content: ' ';
        font-size: 1.5em;
        position: absolute;
        background: #01b7ee;
        box-shadow: 0 0 1px #01b7ee;
    }
    /*...................................*/

    .chengben1,.chengben2,.chujia1,.chujia2,.jisuan1,.jisuan2{
        padding-left: 10px;
    }
    .chengben1,.chujia1,.jisuan1{
        /*margin-left:20px;*/
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ddd;
        /*padding-left: 15px;*/
        /*padding-right: 40px;*/
        line-height: 30px;
        width: 100px;

    }
    .jihua:hover{
        color: #01b7ee !important;
    }
    .beizhao,.tiao_beizhao{
        overflow: hidden;
        z-index: 1111111;
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }
    .changed{
        z-index: 12;
        padding: 20px;
        position: absolute;
        width:450px;
        height:135px;
        background: #fff;
        margin:auto;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
    .tiao_changed{
        z-index: 12;
        padding: 20px;
        position: absolute;
        width:450px;
        height:310px;
        background: #fff;
        margin:auto;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
    .zhai{
        cursor: pointer;
        margin-top: 10px;
        height: 30px;
        line-height: 30px;
    }
    .zhai:hover{
        background: #e5f3fe;
    }
    .wen1:hover,.wen2:hover{
        color: #01b7ee !important;
    }
    .wen2,.wen3,.chujia1,.chengben1,.jisuan1{
        display: none;
    }
    @media screen and (max-width: 1000px){
        #page-wrapper {
            width: 1000px;
            position: absolute;
            top: 65px;
            bottom: 0;
            left: 200px;
            right: 0;
        }
    }
    .del{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #3b4e61 !important;
        background: #fff !important;
    }
    .del:hover,.del:focus{
        background: #f5f7f9 !important;
    }
    .del:active{
        background: #dfe1e4 !important;
    }
    .only{
        width: 110px;
        padding-top: 4px;
        padding-bottom: 4px;
        border: 1px solid #dfe1e4;
        border-radius: 5px !important;
        color: #fff !important;
        background: #01b7ee !important;
    }
    .only:hover,.only:focus{
        color: #fff !important;
        background: #1bcaff !important;
    }
    .only:active{
        color: #fff !important;
        background: #01a4e0 !important;
    }
    .quancb,.quancj,.quanbl{
        width: 100px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding-left: 10px;
    }

</style>


