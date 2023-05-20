<template>
  <div class="content">
    <h4>最新mv</h4>
    <div class="mv" @click="toMvDetail">
      <el-row :gutter="10">
        <el-col :span="8" v-for="mv in mv_first" :key="mv.id" class="mv-item"
          ><el-card :body-style="{ padding: '0px' }">
            <img
              style="height: 150px"
              :src="mv.cover"
              class="image"
              :data-id="mv.id"
            />
            <div style="padding: 6px; height: 35px; overflow: hidden">
              <span>{{ mv.name }}</span>
              <div class="bottom clearfix">
                <time class="time" style="color: grey">{{
                  mv.artistName.substring(0, 15)
                }}</time>
              </div>
            </div>
          </el-card></el-col
        >
      </el-row>
    </div>
    <div style="float: right; margin: 30px 0">
      <el-pagination
        background
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
        :current-page="currentPage"
        @current-change="current"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NewMv",
  mounted() {
    this.$store.dispatch("getMvFirst", { offset: 0, limit: 30 });
  },
  computed: {
    ...mapState(["mv_first"]),
  },
  methods: {
    current(c) {
      console.log(c);
      const data = { limit: 30, offset: c };
      this.$store.dispatch("getMvFirst", data);
    },
    toMvDetail(e) {
      let id = e.target.dataset.id;
      // console.log(id);
      if (id) {
        this.$store.dispatch("getMvDetail", id);
        this.$router.push({ name: "MvDetail" });
      }
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  overflow: hidden;
  .mv {
    .mv-item {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>