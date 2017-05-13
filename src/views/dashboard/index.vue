<template>
    <div class="dashboard-container">
        <el-row :gutter="20">
            <template v-for="n in 5">
                <el-col :span="12" >
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span style="line-height: 36px;">卡片名称</span>
                            <el-button style="float: right;" type="primary" @click="handleClick">操作按钮</el-button>
                        </div>
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }} {{name}}
                        </div>
                    </el-card>
                </el-col>
            </template>
        </el-row>

        <accountsCard></accountsCard>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import accountsCard from './accountsCard'

    export default {
      name: 'dashboard',
      components:{
        accountsCard
      },
      data() {
        return {
          currentRole: 'EditorDashboard'
        }
      },
      computed: {
        ...mapGetters([
          'name',
          'avatar',
          'email',
          'introduction',
          'roles'
        ])
      },
      methods: {
        handleClick() {
          this.$store.dispatch('getAccountsByUser',{uid:111}).then(() => {
          }).catch(err => {
            this.$message.error(err);
          });
          console.log("点击事件");
        }
      },
      created() {
        if (this.roles.indexOf('admin') >= 0) {
          return;
        }
        // const isEditor = this.roles.some(v => v.indexOf('editor') >= 0)
        // if (!isEditor) {
        //   this.currentRole = 'DefaultDashboard';
        // }
        this.currentRole = 'DefaultDashboard';
      }
    }
</script>
