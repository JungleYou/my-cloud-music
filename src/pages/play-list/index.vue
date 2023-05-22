<template>
  <div class="content">
    <el-row>
      <el-col :span="6">
        <el-image
          style="width: 150px; height: 150px; border-radius: 10px"
          :src="play_list_detail ? play_list_detail.coverImgUrl : url"
        ></el-image
      ></el-col>
      <el-col :span="18">
        <h1>{{ play_list_detail ? play_list_detail.name : "" }}</h1>
        <el-row type="flex" align="middle">
          <el-col :span="3">
            <el-image
              style="width: 30px; height: 30px; border-radius: 50%"
              :src="play_list_detail ? play_list_detail.creator.avatarUrl : url"
            ></el-image
          ></el-col>
          <el-col :span="5">{{
            play_list_detail ? play_list_detail.creator.nickname : ""
          }}</el-col>
          <el-col :span="16" class="base-grey"
            >{{
              play_list_detail ? play_list_detail.createTime : "" | FormatTime
            }}<span class="base-black">创建</span></el-col
          >
        </el-row>
        <el-row type="flex" align="middle">
          <el-col :span="6"
            ><el-button icon="el-icon-plus" round @click="playAll"
              >播放全部</el-button
            ></el-col
          >
          <el-col :span="4"
            ><el-button icon="el-icon-folder" round>收藏</el-button></el-col
          >
          <el-col :span="4"
            ><el-button icon="el-icon-share" round>分享</el-button></el-col
          >
          <el-col :span="4"
            ><el-button icon="el-icon-download" round
              >下载全部</el-button
            ></el-col
          >
        </el-row>
        <br />
        <el-row>
          <el-col :span="4"
            >歌曲：<span class="base-grey">{{
              play_list_detail ? play_list_detail.trackCount : ""
            }}</span></el-col
          >
          <el-col :span="8"
            >播放：<span class="base-grey">{{
              play_list_detail ? play_list_detail.playCount : ""
            }}</span></el-col
          >
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-between">
      <el-col :span="10">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">歌曲列表</el-menu-item>

          <el-menu-item index="2">评论</el-menu-item>
          <el-menu-item index="3">收藏者</el-menu-item>
        </el-menu></el-col
      >
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
// 歌单详情页面
import { mapState } from "vuex";
export default {
  name: "PlayList",
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(e) {
      // console.log(e);
    },
    playAll() {
      try {
        const indexs = 0;
        const id = this.play_list_songs[0].id;
        this.$store.dispatch("getSongUrl", { id, indexs });
      } catch (e) {
        console.log(e);
      }
    },
  },
  filters: {
    FormatTime: function (time) {
      const date = new Date(time);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const timeString = `${year}-${month}-${day}`;
      return timeString;
    },
  },
  computed: {
    ...mapState(["play_list_detail", "play_list_songs"]),
  },
};
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
}
</style>