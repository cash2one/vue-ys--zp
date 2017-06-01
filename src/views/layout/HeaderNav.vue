<template>
    <header>
        <div class="container">
            <div class="nav-logo-container">
                <h1 style="height: 20px;">羽扇系统</h1>
            </div>
            <el-menu mode="horizontal" :default-active="activeNav" class="nav-menu-container">
                <template v-for="item in permissionRoutes" v-if="!item.hidden">
                    <router-link :to="item.path">
                        <el-menu-item :index="item.path">{{item.meta.title}}</el-menu-item>
                    </router-link>
                </template>
            </el-menu>
            <ErrLog v-if="log.length>0" class="errLog-container" :logsList="log"></ErrLog>
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
                    <i class="el-icon-caret-bottom"/>
                </div>
                <el-dropdown-menu class="user-dropdown" slot="dropdown">
                    <router-link  class='inlineBlock' to="/">
                        <el-dropdown-item>
                            首页
                        </el-dropdown-item>
                    </router-link>
                    <router-link  class='inlineBlock' to="/admin/profile">
                        <el-dropdown-item>
                            设置
                        </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item divided><span @click="logout" style="display:block;">退出登录</span></el-dropdown-item>
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
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .container {
        height: 80px;
    }
    .avatar-container {
        float: right;
    }
    .nav-logo-container {
        float: left;
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

</style>