<template>
  <div>
    <audio
      ref="audio"
      :src="song_detail ? song_detail.url : ''"
      :controls="false"
      autoplay
      @play="audioHandle(1)"
      @pause="audioHandle(0)"
      @timeupdate="current"
      @ended="backGo('go')"
    ></audio>

    <el-row type="flex" align="middle">
      <!-- 底部的左边歌曲部分 -->
      <el-col :span="8">
        <el-row>
          <el-col :span="6">
            <el-image
              style="width: 50px; height: 50px; border-radius: 5px"
              :src="song_detail ? song_detail.al.picUrl : url"
            ></el-image
          ></el-col>
          <el-col :span="18"
            ><h3>
              {{
                song_detail
                  ? song_detail.name.substring(0, 13)
                  : "请点击歌曲播放"
              }}
            </h3>
            <div>{{ song_detail ? song_detail.ar[0].name : "无" }}</div></el-col
          >
        </el-row>
      </el-col>
      <!-- 底部中间控制按钮 -->
      <el-col :span="8">
        <div :style="{ textAlign: 'center' }">
          <el-row>
            <el-col :span="8"
              ><el-button
                icon="el-icon-caret-left"
                circle
                @click="backGo('back')"
              ></el-button
            ></el-col>
            <el-col :span="8"
              ><el-button
                :icon="playing ? 'el-icon-video-pause' : 'el-icon-video-play'"
                circle
                @click="playPause"
              ></el-button
            ></el-col>
            <el-col :span="8"
              ><el-button
                icon="el-icon-caret-right"
                circle
                @click="backGo('go')"
              ></el-button
            ></el-col>
          </el-row>
        </div>
        <div>
          <el-progress
            :percentage="currentTime"
            :show-text="false"
            v-if="currentTime"
          ></el-progress>
        </div>
      </el-col>
      <!-- 底部右边控制按钮 -->
      <el-col :span="8"
        ><el-button
          @click="drawer = true"
          type="primary"
          icon="el-icon-s-fold"
          style="margin-left: 50px"
        >
        </el-button>

        <el-drawer
          title="歌曲列表"
          :visible.sync="drawer"
          :direction="direction"
        >
          <div @click="SongUrl">
            <el-row
              v-for="(item, index) in play_list_songs"
              :key="item.id"
              class="item"
              :class="{
                'base-bg-grey':
                  (song_detail ? song_detail.indexs : null) == index,
              }"
            >
              <el-col :span="2" :data-songId="item.id" :data-indexs="index">{{
                index
              }}</el-col>
              <el-col :span="10" :data-songId="item.id" :data-indexs="index">{{
                item.name.substring(0, 13)
              }}</el-col>
              <el-col :span="6" :data-songId="item.id" :data-indexs="index">{{
                item.ar ? item.ar[0].name : item.artists[0].name
              }}</el-col>
              <el-col :span="6" :data-songId="item.id" :data-indexs="index">{{
                item.al ? item.al.name : item.album.name
              }}</el-col>
            </el-row>
          </div>
        </el-drawer></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BaseFooter",
  data() {
    return {
      currentTime: 0,
      playing: false,
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      drawer: false,
      direction: "rtl",
    };
  },
  computed: {
    ...mapState(["song_detail", "play_list_songs"]),
  },
  methods: {
    // 音频暂停或启动的处理
    audioHandle(e) {
      // console.log(e);
      if (e) {
        this.playing = true;
      }
    },
    // 检测是否点击暂停按钮
    playPause() {
      const audio = this.$refs.audio;
      // console.dir(audio);
      if (this.playing) {
        audio.pause();
        this.playing = false;
      } else {
        audio.play();
        this.playing = true;
      }
    },
    // 获取当前音乐进度
    current() {
      const audio = this.$refs.audio;
      let all = audio.duration;
      let current = audio.currentTime;
      // console.log(current);
      let percent = parseInt((current / all) * 100);
      // console.log(percent);
      this.currentTime = percent;
    },
    // 上一首/下一首
    backGo(a) {
      try {
        if (a === "go") {
          // 判断歌曲是fm里面的还是歌曲列表里面的
          if (this.song_detail.indexs !== "fm") {
            // 下一首
            let indexs = this.song_detail.indexs * 1 + 1;
            let id = this.play_list_songs[indexs].id;
            let songInfo = { indexs, id };
            // console.log("de", songInfo);
            this.$store.dispatch("getSongUrl", songInfo);
          } else {
            this.$store.dispatch("getPersonFM");
          }
        } else if (a === "back") {
          if (!this.song_detail.indexs === "fm") {
            //上一首
            let indexs = this.song_detail.indexs * 1 - 1;
            let id = this.play_list_songs[indexs].id;
            let songInfo = { indexs, id };
            // console.log("de", songInfo);
            this.$store.dispatch("getSongUrl", songInfo);
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
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
.item {
  height: 25px;
  overflow: hidden;
  &:hover {
    background-color: @baseGrey;
    cursor: pointer;
  }
}
</style>