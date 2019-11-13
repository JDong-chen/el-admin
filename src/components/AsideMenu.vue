<template>
  <el-scrollbar style="height:100%;">
      <el-menu :router="true" :collapse="isCollapse" id="asideTop">
        <div id="logo" @click="isCollapse=!isCollapse">
          <span v-if="!isCollapse">StoryMan</span>
        </div>
      </el-menu>

      <el-menu
      :default-active="this.$route.path"
      :router="true"
      :collapse="isCollapse"
      :unique-opened="true"
      >
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/authoritymanage">
          <span slot="title">权限管理</span>
        </el-menu-item>
      </el-menu>
  </el-scrollbar>    
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>


<style lang="less" scoped>
.el-menu {
  text-align: center;
  &:not(.el-menu--collapse) {
    width: 300px;
  }
  &:not(#asideTop) {
      min-height: 600px;
    }
  #logo {
    height: 100px;
    line-height: 100px;
    width: 100%;
    cursor: pointer;
    user-select: none;
  }
}
</style>

