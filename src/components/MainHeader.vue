<template>
  <el-container>
    <el-header style="height:80px;">
      <el-row type="flex" justify="space-between">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(item, index) in getbreadCrumbArr"
          :key="index"
          :to="{ path: item.path }"
          >{{ item.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 下拉选项 -->
        <el-dropdown split-button size="mini" :hide-timeout="300" @command="handleCommand" @click="personCenRoute">
          个人中心
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logOut">注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
      <!-- tagsNav -->
      <el-row type="flex" justify="start">
        <el-tag 
          v-for="(item, index) in gettagsArr"
          :key="index"
          closable
          @close="closeTag(index)"
          @click.native="tagsRoute(index)"
          :type="tagsType(item.path)"
          :style="{borderLeftWidth: border(item.path).left+'px',borderRightWidth: border(item.path).right+'px', borderBottomWidth: border(item.path).bottom+'px' }"
        >{{ item.name }}</el-tag>
      </el-row>
    </el-header>
    <!--注销确认模态框-->
    <el-dialog :visible.sync="dialogFormVisible">
      <h1>确认注销吗？</h1>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="logOut">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dialogFormVisible: false
    }
  },
  computed: {
    ...mapGetters([
      "getbreadCrumbArr",
      "gettagsArr"
    ]),
    tagsType() {
      return function (path) {
        let rp = this.$route.path
        return rp === path ? "" : "info";
      }
    },
    border() {
      return function (path) {
        let rp = this.$route.path;
        return {
          left: rp === path ? 1 : this.gettagsArr[0].path === path ? 1 : 0,
          right: rp === path ? 1 : this.gettagsArr[this.gettagsArr.length-1].path === path ? 1 : 0,
          bottom : rp === path ? 0 : 1
        }
      }
    }
  },
  methods: {
    handleCommand (command) {
      switch(command) {
        case"logOut": 
          this.dialogFormVisible = true
          break
        default:
          break
      }
    },
    logOut() {
      this.dialogFormVisible = false;
      this.$store.dispatch("changeLineState", "offline")
      this.$store.dispatch("cleartagsArr")
      this.$store.dispatch("clearuserInfo")
    },
    closeTag(index) {
      if (index === 0) {
        this.dialogFormVisible = true
      } else {
        this.$router.push(this.gettagsArr[index-1].path)
        this.$store.dispatch("deletetagsArr", index)
      }
    },
    tagsRoute (index) {
      this.$router.push(this.gettagsArr[index].path)
    },
    personCenRoute () {
      this.$router.push("/personcenter")
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  text-align: center;
}
.el-row {
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-tag {
  width: 120px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  cursor: pointer;
  border-radius: 0;
}
</style>


