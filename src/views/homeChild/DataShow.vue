<template>
  <el-container>
    <el-main>
      <div class="cardWrap" v-for="(item, index) in cardList" :key="index">
        <el-card class="card">
          <div slot="header">{{ item.title }}</div>
          <div class="cardData">{{ item.data }}</div>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import anime from "animejs"

export default {
  data () {
    return {
      currentDate: (new Date()).toLocaleString(),
      cardList: [
        { title: "至今的用户总数", data: 0 },
        { title: "今日用户访问量", data: 0 },
        { title: "今日注册用户量", data: 0 },
        { title: "今日用户分享数", data: 0 }
      ]
    }
  },
  mounted () {
    anime({
      targets: this.cardList[0],
      data: 500,
      duration: 2000
    })
  }
}
</script>

<style lang="less" scoped>
.cardWrap {
  width: 23%;
  height: 200px;
  float: left;
  margin: 20px 20px 0 0;
  .card {
    height: 100%;
    .cardData {
      font-size: 5em;
      text-align: center;
      color: #666;
      margin-top: -20px;
    }
  }
}
</style>

