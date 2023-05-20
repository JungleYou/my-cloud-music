<template>
  <div id="app">
    <el-container>
      <el-header id="header"><BaseHead></BaseHead></el-header>
      <el-main id="main"><BaseMain></BaseMain></el-main>
      <el-footer id="footer"><BaseFooter></BaseFooter></el-footer>
    </el-container>
  </div>
</template>

<script>
import BaseHead from "@/components/base-head.vue";
import BaseMain from "@/components/base-main.vue";
import BaseFooter from "@/components/base-footer.vue";
export default {
  name: "App",
  components: {
    BaseHead,
    BaseMain,
    BaseFooter,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 1000px;
  // min-width: 1000px;
  margin: 0 auto;
  #header,
  #main,
  #footer {
    padding: 0;
  }
  .el-main {
    height: calc(100vh - 120px);
    // color: @baseGrey;
    // background-color: @baseRed;
  }
}
.el-popover {
  min-width: 20px;
}
</style>
