<template>
  <div class="div" @scroll="os">
  <el-container>
    <el-main style="height:3000px">
        <el-row >
          <el-col :span="6">
            <el-card shadow="hover" @click.native="dialogFormVisible=true">
              添加管理员
            </el-card>
          </el-col>
        </el-row>

      <el-dialog title="添加管理员" :visible.sync="dialogFormVisible">
        <el-form :model="form" label-width="100px" size="medium">
          <el-row>
            <el-col :span="colSpan" :push="colPush">
              <el-form-item label="账号">
                <el-input v-model="form.adminName" type="text"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="colSpan" :push="colPush">
              <el-form-item label="密码">
                <el-input v-model="form.adminPassword" type="password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="colSpan" :push="colPush">
              <el-form-item label="请重复密码">
                <el-input v-model="form.adminPassword2" type="password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="colSpan" :push="colPush">
              <el-form-item size="large">
                <el-button type="primary" @click="addAdmin">添加</el-button>
                <el-button type="warning" @click="reset">重置</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import Axios from "axios";

export default {
  data () {
    return {
      dialogFormVisible: false,
      colSpan: 12,
      colPush: 5,
      form: {
        adminName: null,
        adminPassword: null,
        adminPassword2: null
      },
      scroll: 0
    }
  },
  methods: {
    reset () {
      Object.keys(this.form).forEach(item => {
        this.form[item] = null;
      })
    },
    addAdmin () {
      
    },
    os () {
      console.log(this.scroll);
      this.scroll = document.querySelector(".div").scrollTop
    },
  },
  activated() {
    if(this.scroll > 0){
        document.querySelector(".div").scrollTo(0, this.scroll);
      }
  }
}
</script>

<style lang="less" scoped>
.div {
  max-height: 100%;
  overflow-y: scroll;
}
.el-card {
  cursor: pointer;
  text-align: center;
  user-select: none;
}
</style>


