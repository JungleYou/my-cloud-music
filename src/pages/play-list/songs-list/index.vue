<template>
  <div class="content" @click="SongUrl">
    <el-row class="title">
      <el-col :span="2">编号</el-col>
      <el-col :span="10">歌曲名</el-col>
      <el-col :span="6">歌手</el-col>
      <el-col :span="6">专辑名</el-col>
    </el-row>
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
        item.ar[0].name
      }}</el-col>
      <el-col :span="6" :data-songId="item.id" :data-indexs="index">{{
        item.al.name
      }}</el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SongsList",
  data() {
    return {
      // activeItem: "",
    };
  },
  computed: {
    ...mapState(["play_list_songs", "song_detail"]),
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
  overflow: hidden;
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
}
</style>