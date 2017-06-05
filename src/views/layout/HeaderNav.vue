<template>
    <header>
        <div class="container">
            <div class="nav-logo-container">
                <h1 style="height: 20px;"> <a href="javascript:;"><img src="http://test.yushan.mobi//yushanLogo/%E7%BE%BD%E6%89%87LOGO.png" alt=""></a></h1>
            </div>
            <el-menu mode="horizontal" :default-active="activeNav" class="nav-menu-container">
                <template v-for="item in permissionRoutes" v-if="!item.hidden" @click="color()">
                    <router-link :to="item.path">
                        <el-menu-item :index="item.path" >{{item.meta.title}}</el-menu-item>
                    </router-link>
                </template>
            </el-menu>
            <ErrLog v-if="log.length>0" class="errLog-container" :logsList="log"></ErrLog>
            <el-dropdown trigger="click">
                <div class="avatar-wrapper">
                    <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                    <i class="el-icon-caret-bottom"/>
                </div>
                <el-dropdown-menu class="user-dropdown" slot="dropdown">
                    <router-link  class='inlineBlock' to="/account/reports/overview">
                        <el-dropdown-item>
                            首页
                        </el-dropdown-item>
                    </router-link>
                    <router-link  class='inlineBlock' to="/admin/profile">
                        <el-dropdown-item>
                            设置
                        </el-dropdown-item>
                    </router-link>
                    <router-link  class='inlineBlock'  to="/" @click="logout">
                        <el-dropdown-item>
                            退出登录
                        </el-dropdown-item>
                    </router-link>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ErrLog from 'components/ErrLog';
    import errLogStore from 'store/errLog';
    import permissionRoutes from 'store/permission';
    import $ from 'jquery'

    export default {
        components: {
            ErrLog
        },
        data() {
            return {
                activeNav: '/reports',
                log: errLogStore.state.errLog,
                permissionRoutes: permissionRoutes.getHeaderMenu()
            }
        },
        computed: {
            ...mapGetters([
                'name',
                'avatar'
            ])
        },
        watch: {
            $route() {
                let index = this.$route.path.indexOf('/',1);
                this.activeNav = this.$route.path.substring(0,index);
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('LogOut').then(() => {
                    this.$router.push({ path: '/login' })
                });
            },
            color(){

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    @import "src/styles/element-ui.scss";
    @import "src/styles/rest.scss";
    .container {
        width:100%;
        height: 60px;
        position: fixed;
        top:0;
        z-index:9999;
        background: white;
    }
    .el-menu {
        border-radius: 2px;
        list-style: none;
        position: relative;
        margin: 0;
        padding-left: 0;
        background-color: white;
    }
    .avatar-container {
        float: right;
    }
    .el-menu[data-v-c1bfb5ca] li{
        width:95px;
        text-align: center;
        font-size: 16px;
        color: #000000;
        font-weight: 500;
    }
    .el-menu[data-v-c1bfb5ca] li:hover{
       background: #f1f1f1;

    }
    .nav-logo-container {
        width: 180px;
        height: 59px;
        float: left;
        z-index: 9999;
        position: relative;
    }

    .nav-logo-container img {
        width:70%;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        margin: auto;
    }
    .nav-menu-container {
        float: left;
    }
    .avatar-container {
        height: 50px;
        display: inline-block;
        position: absolute;
        right: 35px;
        .avatar-wrapper {
            cursor: pointer;
            margin-top:5px;
            position: relative;
            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }
            .el-icon-caret-bottom {
                position: absolute;
                right: -20px;
                top: 25px;
                font-size: 12px;
            }
        }
    }
    .el-dropdown[data-v-c1bfb5ca]{
        width: 100px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        float: right;
        .user-avatarp[data-v-c1bfb5ca] {
            width: 40px;
            height:40px;
        }
    }
    .el-dropdown-menu[data-v-c1bfb5ca] {
        width:100px;
        text-align: center;
    }
   .el-menu[data-v-c1bfb5ca] .router-link-active[data-v-c1bfb5ca] li{
        background: #f1f1f1;
    }
</style>