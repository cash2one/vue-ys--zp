
<template>
<el-row style="height: 100%;width: 100%; position: absolute;" class="login">
    <el-row style="margin-top:10%;">
         <el-col :span="24" style="text-align: center">
             <img src="http://test.yushan.mobi//yushan_vue/羽扇.png" alt="" style="width: 300px;">
         </el-col>
    </el-row>
    <el-row  style="position: absolute;width: 100%;left: 0;bottom: 15%;">
         <el-col :span="24">
             <el-col :span="12" style="text-align: right;padding-right: 30px;">
                 <img src="http://test.yushan.mobi//yushan_vue/组-6.png" alt="" style="width: 350px;margin-top:50px;">
              </el-col>
             <el-col :span="12" style="padding-left: 30px;">
                 <div class="login1">

                     <el-col :span="24" class="denglu">
                         <img src="http://test.yushan.mobi//yushan_vue/矩形-10.png" alt="" class="rent">
                         <span>用户登录</span>
                     </el-col>
                     <el-form id="login-form" autoComplete="on" :model="loginForm"  ref="loginForm">
                         <input type="hidden" name="password" id="pwd"/>
                         <input type="hidden" name="key" id="salt"/>
                         <el-form-item prop="email">

                            <el-col :span="24" class="el-input" style="margin-top: 20px;">
                                 <el-input type="text" name="username"  v-model="loginForm.email" autoComplete="on" class="username" placeholder="登录名/邮箱"/>
                            </el-col>
                         </el-form-item>
                         <el-form-item prop="password">
                         <el-col :span="24" style="margin-top: 10px;">
                            <el-input type="password" id="showPwd" class="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" placeholder="请输入密码" />
                         </el-col>
                         </el-form-item>
                          <el-col :span="24" style="margin-top: 10px;">
                             <el-col :span="12" style="padding-left: 0;">
                                 <el-checkbox v-model="loginForm.checked">自动登录</el-checkbox>
                                 <!--<label>-->
                                     <!--<input type="checkbox" id="check" style="vertical-align: middle;margin-top: 0;">-->
                                     <!--<span for="check" style="color: #cacfd7;vertical-align: middle;font-size:12px;">自动登录</span>-->
                                 <!--</label>-->

                             </el-col>
                              <el-col :span="12" style="text-align: right;color: #EC5A55;padding-right: 0;font-size: 12px">
                                 <label>忘记密码 ？</label>
                             </el-col>
                        </el-col>
                        <el-col :span="24" style="margin-top:30px;">
                            <el-input type="submit" class="load" :loading="loading" @click.native.prevent="handleLogin"   value="登录"/>
                          </el-col>
                         <el-col :span="24" style="margin-top: 10px;">
                             <el-input type="button" class="shenqing" value="申请使用"/>
                         </el-col>
                         </el-form>
                 </div>
              </el-col>
        </el-col>
     </el-row>
       <el-row class=" banquan" style="position:absolute;bottom: 30px;width: 100%;color: #fff;font-size: 14px;">
         <el-col :span="24" style="text-align: center;">
             京ICP备15010702号-1 2011-2016 &copy; 北京智投智道投资咨询有限公司版权所有
         </el-col>
    </el-row>
</el-row>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { isWscnEmail } from 'utils/validate';
    const passport = require('../../utils/passport');
    import Cookies from 'js-cookie';
    require('../../utils/md5');
    require('../../utils/validator');
    // import { getQueryObject } from 'utils';
    import socialSign from './socialsignin';
    import { LoginByEmail } from 'api/login';
    const postfix='yushan@MOSHI';
    export default {
        components: { socialSign },

        name: 'login',
        data() {
           /* const validateEmail = (rule, value, callback) => {
                if (!isWscnEmail(value)) {
                    callback(new Error('请输入正确的合法邮箱'));
                } else {
                    callback();
                }
            };*/
            const validatePass = (rule, value, callback) => {
                if (value.length < 6) {
                    callback(new Error('密码不能小于6位'));
                } else {
                    callback();
                }
            };
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                loginRules: {

                    /*email: [
                        { required: true, trigger: 'blur', validator: validateEmail }
                    ],*/
                    password: [
                        { required: true, trigger: 'blur', validator: validatePass }
                    ]
                },
                loading: false,
                showDialog: false
            }
        },
        computed: {
                ...mapGetters([
                    'auth_type'
                ])
    },
    methods: {
        handleLogin() {
//          alert('aa')
//          passport.login({selector:"#login-form"});
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                  var pwd = this.loginForm.password;
                  var user = this.loginForm.email;
                  var random = new Date().getTime();

                  var code = $.md5($.md5(pwd + postfix) + random);
                  LoginByEmail({ username: user,password: code,key:random}).then(response => {
                    console.log(response);
                    Cookies.set('X-Ivanka-Token', response.data.token);
                    this.$store.commit('SET_TOKEN', response.data.token);
                    this.$store.commit('SET_EMAIL', response.data.userid);
                    this.$router.push({ path: '/account/reports/overview' });
                  }).catch(err => {
                    this.$message.error(err);
//                  _self.loading = false;
                  });
                    /*this.$store.dispatch('LoginByEmail', { username: user,password: code,key:random}).then(() => {
                        this.loading = false;
//                        console.log(pwd)
//                        console.log(user)
//                        console.log(random)
//                        console.log(code)
                    this.$router.push({ path: '/reports/overview' });
                    // this.showDialog = true;
                }).catch(err => {
                        this.$message.error(err);
                    this.loading = false;
                });*/
                } else {
                    console.log('error submit!!');
            return false;
        }
        });
        },
        afterQRScan() {
            // const hash = window.location.hash.slice(1);
            // const hashObj = getQueryObject(hash);
            // const originUrl = window.location.origin;
            // history.replaceState({}, '', originUrl);

            // const codeMap = {

            //   wechat: 'code',
            //   tencent: 'code'
            // };
            // const codeName = hashObj[codeMap[this.auth_type]];
            // if (!codeName) {
            //   alert('第三方登录失败');
            // } else {
            //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
            //     this.$router.push({ path: '/' });
            //   });
            // }
        }
    },
    created() {
      passport.login({selector:"#login-form"});
        // window.addEventListener('hashchange', this.afterQRScan);
    },
    destroyed() {
        // window.removeEventListener('hashchange', this.afterQRScan);
    }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";

    .login{
    width:100%;
    height:100%;
    background: url("http://test.yushan.mobi//yushan_vue/羽扇2_01.png") no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    min-height:730px ;
    position: relative;
    overflow:hidden;
}
.user,.pwd{
    margin-left: 20px;
    border: 0;
    /*border-bottom: 1px solid rgb(0,175,233);*/
    border-bottom: 1px solid rgb(153,153,153);
}
.login1{
    width: 350px;
    height:390px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 0px 6px #d9d9d9;
    font-family: "Microsoft Yahei";
    padding: 0 15px;
}
.el-form-item__content {
    margin-bottom: 20px;
}
.el-form-item__error {
    padding-top: 6px;
    padding-left: 22px;
}
.denglu{
    line-height: 40px;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
    margin-top: 30px;
    position: relative;
}
#wrapper {
    width: 100%;
    height:100%;
}
.rent{
    width: 7px;
    position: absolute;
    font-family: "Microsoft Yahei";
    left: -15px;
    line-height: 40px;
    height: 40px;
    top: 0;
}
.username,.password{
    width:100%;
    border-radius: 3px;
    height:40px;
    line-height:40px;
    /*margin-top: 30px;*/
}
.el-input__inner {
    height:40px!important;
    line-height: 35px!important;
}
    .el-form-item {
        margin-bottom: 0 !important;;
    }
.load input{
    font-weight: 600;
    font-size: 15px !important;
    letter-spacing: 20px;
    background: -webkit-linear-gradient(#01b8ee, #3299e5); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#01b8ee, #3299e5); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#01b8ee, #3299e5); /* Firefox 3.6 - 15 */
    background: linear-gradient(#01b8ee, #3299e5); /* 标准的语法 */
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border: 0;
    border-radius: 3px;
}
.el-checkbox__inner {
    width: 14px!important;
    height: 14px!important;
}
.el-checkbox__inner::after {
    height: 7px!important;
    left: 3px!important;
}
.el-checkbox__label {
        font-size: 12px!important;
    }
.shenqing input{
    font-weight: 600;
    font-size: 15px !important;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #4cbefe;
    background: #fff;
    border:1px solid #3299e5;
    border-radius: 3px;
}
/*@media screen and (max-width:1000px) {
   .banquan{
       display: none;
   }

}
@media screen and (max-height:700px) {
    .banquan{
        display: none;
    }

}*/
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
    -webkit-text-fill-color: #333;
}

</style>
