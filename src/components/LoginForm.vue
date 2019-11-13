<template>
  <div>
    <el-row>
      <el-col
      :span="colSpan"
      :push="colPush"
      >
        <el-input type="text" clearable autofocus placeholder="请输入账号" v-model="userName">
          <template slot="prepend">账号</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col
      :span="colSpan"
      :push="colPush"
      >
        <el-input type="password" clearable placeholder="请输入密码" v-model="userPassword">
          <template slot="prepend">密码</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col
      :span="colSpan"
      :push="colPush"
      >
        <el-button type="primary" @click="loginClick">{{ btnName }}</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data () {
    return {
      userName: null,
      userPassword: null
    }
  },
  props: {
    colSpan: Number,
    colPush: Number,
    btnName: {
      type: String,
      default: "登录"
    }
  },
  methods: {
    loginClick () {
      this.$emit("loginClick");
    }
  }
}
</script>

<style lang="less" scoped>
.el-row {
    margin-bottom: 20px;
    &:first-child{
      margin-top: 40vh;
    }
    &:last-child {
      margin-bottom: 0;
    }
    .el-button {
      width: 100%;
    }
  }
</style>