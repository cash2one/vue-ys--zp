<template>
    <div>
        <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
            <div class="sidebar-wrapper">
                <Sidebar class="sidebar-container"/>
            </div>
            <div class="main-container">
                <Navbar/>
                <App-main/>
            </div>
        </div>
    </div>
</template>

<script>
    import { Navbar, Sidebar, AppMain } from 'views/layout';
    import store from 'store';
    import router from 'router';
    import permission from 'store/permission';
    export default {
      name: 'layout',
      components: {
        Navbar,
        Sidebar,
        AppMain
      },
      computed: {
        sidebar() {
          return this.$store.state.app.sidebar;
        }
      },
      beforeRouteEnter: (to, from, next) => {
        next();
        /*const roles = store.getters.roles;
        if (roles.length !== 0) {
          next();
          return
        }
        store.dispatch('GetInfo').then(() => {
          permission.init({
            roles: store.getters.roles,
            router: router.options.routes
          });

        }).catch(err => {
          console.log(err);
        });*/
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        margin-top: 60px;
        height: 100%;
        width: 100%;
        padding-left: 180px;
        &.hideSidebar {
            padding-left: 40px;
            .sidebar-wrapper {
                transform: translate(-140px, 0);
                .sidebar-container {
                    transform: translate(132px, 0);
                }
                &:hover {
                    transform: translate(0, 0);
                     z-index: 1001;
                    .sidebar-container {
                        transform: translate(0, 0);
                    }
                }
            }
        }
        .sidebar-wrapper {
            width: 180px;
            position: fixed;
            top: 60px;
            bottom: 0;
            left: 0;
            z-index: 2;
            overflow-x: hidden;
            transition: all .28s ease-out;
            @include scrollBar;
        }
        .sidebar-container {
            transition: all .28s ease-out;
        }
        .main-container {
            width: 100%;
            min-height: 100%;
            transition: all .28s ease-out;
            .navbar[data-v-42c1d79b] {
                width:100%;
            }
        }
    }

</style>
