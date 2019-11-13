<template>
  <div id="myapp">
    <transition name="myfade">
      <router-view id="rv"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  computed:{
    ...mapGetters(["getisLogin"])
  },
  watch: {
    getisLogin (value, oldValue) {
      typeof value !== undefined && value === "offline"
        ? this.$router.push("/")
        : this.$router.push("/home");
    }
  },
  created () {
    if (sessionStorage.SS_ISLOGIN) return;
    this.$store.dispatch("changeLineState", "offline");
  }
};
</script>

<style lang="less">
 #rv {
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   height: 100vh;
 }

.myfade-enter-active {
  transition: opacity .5s linear
}
.myfade-enter {
  opacity: 0;
}
</style>
