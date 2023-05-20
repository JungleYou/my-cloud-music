<template>
  <div class="content">
    <h1>
      搜索: &nbsp;&nbsp;&nbsp; {{ search_info ? search_info.searchInfo : "" }}
    </h1>
    <div class="kn">你可能感兴趣</div>
    <el-row type="flex" align="middle">
      <el-col :span="6"
        ><el-button icon="el-icon-plus" round>播放全部</el-button></el-col
      >
      <el-col :span="4"
        ><el-button icon="el-icon-download" round>下载全部</el-button></el-col
      >
    </el-row>
    <el-row class="title">
      <el-col :span="2">编号</el-col>
      <el-col :span="10">歌曲名</el-col>
      <el-col :span="6">歌手</el-col>
      <el-col :span="6">专辑名</el-col>
    </el-row>
    <div @click="SongUrl" v-if="search_info">
      <el-row
        v-for="(item, index) in play_list_songs"
        :key="item.id"
        class="item"
        :class="{
          'base-bg-grey': (song_detail ? song_detail.indexs : null) == index,
        }"
      >
        <el-col :span="2" :data-songId="item.id" :data-indexs="index">{{
          index
        }}</el-col>
        <el-col :span="10" :data-songId="item.id" :data-indexs="index">{{
          item.name
        }}</el-col>
        <el-col :span="6" :data-songId="item.id" :data-indexs="index">{{
          item.ar ? item.ar[0].name : item.artists[0].name
        }}</el-col>
        <el-col :span="6" :data-songId="item.id" :data-indexs="index">{{
          item.al ? item.al.name : item.album.name
        }}</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchList",
  computed: {
    ...mapState(["search_info", "play_list_songs", "song_detail"]),
  },
  methods: {
    SongUrl(e) {
      // console.log(e.target.dataset);
      let id = e.target.dataset.songid;
      let indexs = e.target.dataset.indexs;
      // this.activeItem = indexs;
      this.$store.dispatch("getSongUrl", { id, indexs });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  .title {
    color: @colorGrey;
    margin-bottom: 10px;
  }
  .item {
    height: 25px;
    overflow: hidden;
    &:hover {
      background-color: @baseGrey;
      cursor: pointer;
    }
  }
  .kn {
    margin: 20px 0;
    color: @colorGrey;
    font-size: 13px;
  }
}
</style>