<template>
  <div class="base-h-100">
    <el-container class="base-h-100"
      ><el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="toPage"
        >
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">发现音乐</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title" data-info="PersonFm">私人F M</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>我的歌单</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :key="item.id"
                v-for="item in user_subcount"
                :index="item.id.toString()"
              >
                <el-image
                  style="width: 30px; height: 30px; border-radius: 5px"
                  :src="item.coverImgUrl"
                ></el-image>
                &nbsp;{{ item.name }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="mains"><router-view></router-view></el-main
    ></el-container>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "BaseMain",
  mounted() {
    this.$store.dispatch("getBanners");
    this.$store.dispatch("getTopPlayList");
    this.$store.dispatch("getHotBoke");
    this.$store.dispatch("getMvFirst", { offset: 30, limit: 0 });
    // this.$store.dispatch("getMvFirst");
  },
  methods: {
    // 1.点击左边导航栏调用的函数
    toPage(cur) {
      let list = ["FindMusic", "PersonFm"];
      // console.log(cur);
      try {
        if (cur == 0 || cur == 1) {
          this.$router.push({ name: list[cur] });
        } else {
          this.$store.dispatch("getPlayListSongs", cur);
          this.$router.push({ name: "PlayList" });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapState(["user_subcount"]),
    ...mapGetters(["uid"]),
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  height: 100%;
  overflow: hidden;
}
.el-main {
  padding: 0;
  // background-color: @baseGrey;
}
.el-main::-webkit-scrollbar {
  width: 10px;
  height: 4px;
}
.el-main::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.el-main::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.aside-item {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  text-indent: 1em;
  &:hover {
    cursor: pointer;
  }
}
</style>