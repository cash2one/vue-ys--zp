<template>
    <el-menu mode="vertical" theme="dark" :default-active="$route.name">
        <template v-for="item in permissionRoutes" v-if="!item.hidden">
            <el-submenu :index="item.path" v-if="!item.noDropdown">
                <template slot="title">
                    <wscn-icon-svg :icon-class="item.icon||'wenzhang1'" /> {{item.meta.title}}
                </template>
                <router-link v-for="child in item.children" :key="child.path" v-if="!child.hidden" class="title-link" :to="{name:child.name}">
                    <el-menu-item :index="child.name">
                        {{child.meta.title}}
                    </el-menu-item>
                </router-link>
            </el-submenu>
            <router-link v-if="item.noDropdown&&item.children.length>0"  :to="item.path+'/'+item.children[0].path">
                <el-menu-item :index="item.path+'/'+item.children[0].path">
                    <wscn-icon-svg :icon-class="item.icon||'geren1'" /> {{item.children[0].title}}
                </el-menu-item>
            </router-link>
        </template>
    </el-menu>
</template>

<script>
    import permissionRoutes from 'store/permission';
    export default {
      name: 'Sidebar',
      data() {
        return {
          permissionRoutes: permissionRoutes.get(this.$route)
        }
      },
      watch:{
        $route() {
          this.permissionRoutes = permissionRoutes.get(this.$route)
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu {
        min-height: 100%;
    }
    .wscn-icon {
        margin-right: 10px;
    }
    .hideSidebar .title-link{
        display: inline-block;
        padding-left: 10px;
    }
</style>
