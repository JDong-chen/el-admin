<template>
  <el-container>
    <el-main>
      <div id="rect">
        <div id="face1">11</div>
        <div id="face2">22</div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import anime from "animejs"

export default {
  methods: {
    go () {
      
    }
  },
  mounted () {
    this.go() 
  }
}
</script>
<style lang="less" scoped>
.face {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

#rect {
  width: 250px;
  height: 250px;
  position: relative;
  display: inline-block;
  #face1 {
    .face;
    
  }
  #face2 {
    .face;
    
  }
}

</style>


