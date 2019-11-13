<template>
  <el-container>
    <img src="../assets/img/loginback.jpg">
    <el-main>
      <login-form
      :colSpan="colSpan"
      :colPush="colPush"
      @loginClick="loginClick"
      ></login-form>
    </el-main>
  </el-container>
</template>

<script>
import LoginForm from "@/components/LoginForm"
import Axios from "@/api/axios"
import { userInfo } from 'os';


export default {
  data () {
    return {
      colSpan: 5,
      colPush: 3,
      loginUrl: "/api/login",
      userInfoUrl: "/api/userInfo"
    }
  },
  components: {
    LoginForm
  },
  methods: {
    loginClick () {
       Axios.post(this.loginUrl).then(response => {
        switch(response.data.status) {
          case"online"://登录成功
            this.$message({
              message: "登录成功!",
              type: "success",
            })
            //获取用户信息
            this.getUserInfo(this.userInfoUrl).then(() => {
              this.$store.dispatch("changeLineState", "online")
            })
            break;
          case"passwordError"://密码错误
            this.$message({
              message: "密码错误!",
              type: "error"
            })
            break
          case"usernameError"://账号错误
            this.$message({
              message: "账号错误!",
              type: "error"
            })
            break
        }
      }).catch(error => {
        console.log(error)
      })
    },

    getUserInfo (userInfoUrl) {
      return Axios.get(userInfoUrl).then(response => {     
          this.$store.dispatch("adduserInfo", response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeRouteEnter: (to, from, next) => {
    sessionStorage.SS_ISLOGIN === "online" ? next(false) : next()
  }
}
</script>

<style lang="less" scoped>
img {
  position: fixed;
  object-fit: cover;
  top: 0;
  left: 0;
}
.el-main {
  height: 100vh;
}
</style>


