<template>
  <div class="content">
    <!-- 轮播图 start -->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in banners" :key="item.scm">
        <img
          :src="item.imageUrl"
          :alt="item.typeTitle"
          :style="{ borderRadius: '15px' }"
        />
      </el-carousel-item>
    </el-carousel>
    <!-- 轮播图 end -->
    <h4>歌单</h4>
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
    <!-- 播客 start -->
    <h4>热门播客</h4>
    <div class="boke" v-if="hot_boke" @click="toBoke">
      <el-row :gutter="10">
        <!-- 播客单元格 start -->
        <el-col
          class="boke-item"
          :span="12"
          v-for="item in hot_boke"
          :key="item.id"
          :data-id="item.id"
          ><el-row :gutter="5">
            <el-col :span="6"
              ><el-card class="box-card" :body-style="{ padding: '0px' }">
                <el-image
                  style="width: 100px; height: 100px; vertical-align: text-top"
                  :src="item.coverImgUrl"
                  :data-id="item.id"
                ></el-image> </el-card
            ></el-col>
            <el-col :span="18">
              <h4 :data-id="item.id">{{ item.name.substring(0, 10) }}</h4>
              <span style="font-size: 11px" :data-id="item.id">{{
                item.description.substring(0, 25)
              }}</span>
              <div>
                <el-row :gutter="10">
                  <el-col :span="7"
                    ><span :data-id="item.id" class="el-icon-edit"></span
                    >{{ item.subscribedCount }}</el-col
                  >
                  <el-col :span="11"
                    ><span class="el-icon-edit"></span
                    >{{ item.playCount }}</el-col
                  >
                  <el-col :span="6"
                    ><span class="el-icon-edit"></span
                    >{{ item.trackCount }}</el-col
                  >
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <!-- 播客单元格 end -->
      </el-row>
    </div>
    <!-- 播客 end -->
    <h4>最新mv</h4>
    <div class="mv">
      <el-row :gutter="10">
        <el-col :span="8" v-for="mv in mv_first" :key="mv.id" class="mv-item"
          ><el-card :body-style="{ padding: '0px' }">
            <img style="height: 150px" :src="mv.cover" class="image" />
            <div style="padding: 6px,height:30px">
              <span>{{ mv.name.substring(0, 10) }}</span>
              <div class="bottom clearfix">
                <time class="time">{{ mv.artistName }}</time>
              </div>
            </div>
          </el-card></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PersonRec",
  data() {
    return {
      img: [
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.mH9YLFEL5YdVxJM82mjVJQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.De4iKAMeTvWwPQxXNK74ZgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.7-6n_pwnAPz_IkgyRuRI2wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      ],
      currentDate: new Date(),
    };
  },
  methods: {
    toBoke(e) {
      // console.log(e.target.dataset);
      let id = e.target.dataset.id;
      if (id) {
        this.$store.dispatch("getPlayListSongs", id);
        this.$router.push({ name: "PlayList" });
      }
    },
    toPlayList(e) {
      // console.dir(e.target);
      if (e.target.dataset) {
        // console.log(e.target.dataset.playid);
        let id = e.target.dataset.playid;
        this.$store.dispatch("getPlayListSongs", id);
        this.$router.push({ name: "PlayList" });
      }
    },
  },
  computed: {
    ...mapState(["banners", "top_playlists", "hot_boke", "mv_first"]),
  },
};
</script>

<style lang="less" scoped>
.content {
  overflow: hidden; /* 隐藏滚动条 */
  h4 {
    text-indent: 1em;
    margin: 10px 0;
  }
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
  .boke {
    .el-col {
      margin-top: 10px;
    }
    .boke-item {
      &:hover {
        cursor: pointer;
        background-color: @baseGrey;
      }
    }
  }
  .mv {
    .mv-item {
      &:hover {
        cursor: pointer;
      }
    }
  }
  // 轮播图样式
  .el-carousel__item img {
    width: 100%;
    height: 100%;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>