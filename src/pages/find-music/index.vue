<template>
  <div class="content">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">个性推荐</el-menu-item>
      <el-menu-item index="2">最新 M V</el-menu-item>
      <el-menu-item index="3">歌单</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FindMusic",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key) {
      // 创建一个路由列表用路由的name作为数据
      let list = ["PersonRec", "NewMv", "SongList"];
      this.$router.push({ name: list[key - 1] });
    },
  },
};
</script>

<style lang="less" scoped>
</style>