<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">账单</template>
        <el-menu-item index="2-1">
          <router-link to="/bill/page/billedit/">添加</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/bill/page/billview/">查看</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">统计</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">博客</template>
        <el-menu-item index="3-1">
          <router-link to="/bill/page/billedit/">添加</router-link>
        </el-menu-item>
        <el-menu-item index="3-2">
          <router-link to="/bill/page/billview/">查看</router-link>
        </el-menu-item>
        <el-menu-item index="3-3">统计</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view/>
  </div>
</template>

<style scoped>
  .el-header {
    background-color: #1e90ff;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
