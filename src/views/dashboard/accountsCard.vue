<template>
    <div class="account-card-container">
        <el-row :gutter="20">
            <template v-for="item in accountList">
                <el-col :span="6" >
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span style="line-height: 36px;">{{item.name}}</span>
                        </div>
                        <div class="text item">
                            {{'账户名称 ' + item.appid }}
                        </div>
                    </el-card>
                </el-col>
            </template>
        </el-row>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'accounts-card',
    computed: {
      ...mapGetters([
        'accountList',
      ])
    },
    data() {
      return {
        month: new Date().getMonth() + 1
      }
    }
  }
</script>