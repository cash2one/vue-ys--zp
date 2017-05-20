<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">计划概览</span>
        </div>
        <div class="text item">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="计划分布" name="first">计划分布</el-tab-pane>
                <el-tab-pane label="计划占比" name="second">计划占比</el-tab-pane>
            </el-tabs>
        </div>
    </el-card>
</template>