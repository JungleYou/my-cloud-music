<template>
  <div class="content">
    <el-row :gutter="10">
      <el-col :span="16"
        ><video
          style="width: 100%"
          controls
          autoplay
          loop
          :src="mv_detail ? mv_detail.mvurl : ''"
        ></video>
        <el-row>
          <el-col :span="24">
            <el-image
              style="
                width: 60px;
                height: 60px;
                border-radius: 50%;
                vertical-align: middle;
              "
              :src="mv_detail ? mv_detail.artists[0].img1v1Url : url"
            ></el-image
            ><span>{{
              mv_detail ? mv_detail.artists[0].name : ""
            }}</span></el-col
          >
        </el-row>
        <h1 style="margin: 30px 0">{{ mv_detail ? mv_detail.name : "" }}</h1>
        <div style="font-size: 12px; color: grey; margin-bottom: 10px">
          发布：{{
            mv_detail ? mv_detail.publishTime : ""
          }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;播放：{{
            mv_detail ? mv_detail.playCount : ""
          }}
        </div>
        <div>
          <el-button round icon="el-icon-thumb"
            >赞{{ mv_detail ? mv_detail.playCount : "" }}</el-button
          >
          <el-button round icon="el-icon-star-on"
            >收藏{{ mv_detail ? mv_detail.subCount : "" }}</el-button
          >
          <el-button round icon="el-icon-share"
            >分享{{ mv_detail ? mv_detail.shareCount : "" }}</el-button
          >
        </div>
        <div>
          <h1>评论：</h1>
          <el-input
            type="textarea"
            v-model="remark"
            :autosize="{ minRows: 2, maxRows: 4 }"
            resize="none"
          ></el-input>
          <el-button
            style="text-align: right; margin: 10px 0"
            round
            @click="sendMark"
            >评论</el-button
          >
          <h5>最新评论</h5>
          <div v-if="mv_detail_info">
            <el-row
              class="remark"
              v-for="item in mv_detail_info"
              :key="item.commentId"
            >
              <el-col :span="3">
                <el-image
                  style="
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    margin-top: 5px;
                  "
                  :src="item.user.avatarUrl"
                ></el-image
              ></el-col>
              <el-col :span="21"
                ><h5 style="color: grey; margin: 10px">
                  {{ item.user.nickname }}：<span style="color: black">{{
                    item.content
                  }}</span>
                </h5>
                <span style="font-size: 12px; color: grey; margin-left: 10px">{{
                  item.timeStr
                }}</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="8">相关视频界面</el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MvDetail",
  data() {
    return {
      remark: "",
      url: "https://tse4-mm.cn.bing.net/th/id/OIP-C.V5sj5_J6Pcjd3EaTNpokBAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7",
    };
  },
  computed: {
    ...mapState(["mv_detail", "mv_detail_info"]),
  },
  methods: {
    sendMark() {
      if (this.remark) {
        console.log(this.remark);
        let mark = {
          t: 1,
          type: 5,
          id: this.mv_detail.id,
          content: this.remark,
        };
        this.$store.dispatch("sendRemark", mark);
        this.remark = "";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  .remark {
    &:hover {
      background-color: @baseGrey;
    }
  }
}
</style>