<template>
  <div>
    <!-- 推荐歌单 start -->
    <div class="list" @click="toPlayList" style="overflow: hidden">
      <el-row :gutter="5">
        <!-- 歌单单元格 start -->
        <el-col
          class="item"
          :span="6"
          v-for="item in top_playlists"
          :key="item.id"
          ><el-card :body-style="{ padding: '0px' }">
            <img :src="item.coverImgUrl" class="image" :data-playId="item.id" />
            <div class="title">
              <span>{{ item.name }}</span>
              <div class="bottom clearfix">
                <time class="des">{{ item.description.substring(0, 30) }}</time>
              </div>
            </div>
          </el-card></el-col
        >
      </el-row>
      <!-- 歌单单元格 end -->
    </div>
    <div class="page">
      <el-pagination
        background
        layout="->,prev, pager, next"
        :total="1000"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AllList",
  methods: {
    toPlayList(e) {
      // console.dir(e.target);
      if (e.target.dataset) {
        // console.log(e.target.dataset.playid);
        let id = e.target.dataset.playid;
        this.$store.dispatch("getPlayListSongs", id);
        this.$router.push({ name: "PlayList" });
      }
    },
    pageChange(a) {
      // console.log(a);
      this.$store.dispatch("getTopPlayList", { offset: 52 * a, limit: 52 });
    },
  },
  computed: {
    ...mapState(["top_playlists"]),
  },
};
</script>

<style lang="less" scoped>
.list {
  padding-left: 20px;
  background-color: #eeeeee;
  &:hover {
    cursor: pointer;
  }
  .el-col {
    margin-top: 10px;
  }
  .item {
    width: 190px;
    height: 270px;
    overflow: hidden;
  }
  // 卡片布局
  .des {
    font-size: 13px;
    color: #999;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
.page {
  margin: 30px 0;
}
</style>