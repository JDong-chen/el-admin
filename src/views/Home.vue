<template>
  <el-container id="mainCon">
    <d-menu>
      <div slot="bigLogo">
        StoryMan
      </div>
      <span slot="smallLogo" class="el-icon-menu"></span>
    </d-menu>
    <el-main>
      <main-header></main-header>
      <transition name="myfade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import AsideMenu from "@/components/AsideMenu.vue"
import MainHeader from "@/components/MainHeader.vue"

export default {
  components: {
    AsideMenu,
    MainHeader
  }
}
</script>

<style lang="less" scoped>
.el-main {
  overflow: hidden;
  padding: 20px 0;
}
</style>
