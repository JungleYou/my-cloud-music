<template>
  <div class="content">
    <div>
      <el-row>
        <el-col :span="12">
          <div>
            <el-image
              style="width: 300px; height: 300px; border-radius: 20px"
              :src="song_detail ? song_detail.al.picUrl : url"
            ></el-image>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="words">
            <h1>{{ song_detail ? song_detail.name : "" }}</h1>
            <h6>{{ song_detail ? song_detail.ar[0].name : "" }}</h6>
            <p v-for="(item, index) in music_words" :key="index">
              {{ item.split("]")[0].slice(1) }}&nbsp;&nbsp;<span>{{
                item.split("]")[1]
              }}</span>
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PersonFm",
  mounted() {
    this.$store.dispatch("getPersonFM");
  },
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  methods: {
    next() {
      this.$store.dispatch("getPersonFM");
    },
  },
  computed: {
    ...mapState(["song_detail", "music_words"]),
  },
};
</script>

<style lang="less" scoped>
.content {
  padding: 50px;
  .words {
    width: 100%;
    height: 400px;
    padding: 10px;
    overflow-y: visible;
    overflow-x: hidden;
    // background-color: pink;
    h1,
    h6 {
      text-align: center;
    }
    p {
      font-size: 13px;
      margin: 5px 0;
      color: @colorGrey;
    }
  }
  .words::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  .words::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }
  .words::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>