<template>
  <div class="container base-flex-between base-bg-red">
    <!-- 左上角图片 start -->
    <div class="bg-logo"></div>
    <!-- 左上角图片 end -->
    <!-- 中间搜索页面以及左右的按钮 start -->
    <div class="search base-flex-between">
      <div>
        <el-button
          icon="el-icon-back"
          @click="handleBackGo(0)"
          circle
        ></el-button>
      </div>
      <div>
        <el-button
          icon="el-icon-right"
          @click="handleBackGo(1)"
          circle
        ></el-button>
      </div>
      <el-input
        @change="search"
        v-model="input"
        placeholder="请输入内容"
        class="base-radius-10"
      ></el-input>
      <div>
        <el-button icon="el-icon-search" circle @click="search"></el-button>
      </div>
    </div>
    <!-- 中间搜索页面以及左右的按钮 end -->
    <div class="head-right base-flex-align-center">
      <el-popover placement="bottom" width="50" v-model="visible">
        <div style="text-align: right; margin: 0">
          <el-button type="primary" size="medium" @click="loginInfo('login')"
            >登录</el-button
          >
          <el-button type="primary" size="medium" @click="loginInfo('logout')"
            >登出</el-button
          >
        </div>
        <el-avatar
          slot="reference"
          :src="user_info ? user_info.avatarUrl : urls"
        ></el-avatar>
      </el-popover>
    </div>
    <el-dialog title="扫码登录" :visible.sync="dialogVisible" width="400px">
      <div :style="{ width: '300px', textAlign: 'center' }">
        <h4>用户名：{{ confirm_info.nickname }}</h4>
        <el-image
          style="width: 300px; height: 300px"
          :src="qr_url ? qr_url : urls"
        ></el-image>
        <h6>{{ confirm_info.message + "..." }}</h6>
      </div>
      <span slot="footer" class="dialog-footer"> </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BaseHead",
  mounted() {
    if (localStorage.getItem("cookie")) {
      this.$store.dispatch("getAccountInfo");
    }
  },
  data() {
    return {
      urls: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      input: "",
      visible: false,
      dialogVisible: false,
    };
  },
  components: {},
  computed: {
    ...mapState(["qr_url", "user_info", "confirm_info", "cookie"]),
  },
  watch: {
    // 检测用户信息是否存在，存在就关闭扫码按钮
    user_info: {
      immediate: true,
      handler(n) {
        // console.log(n);
        if (n) {
          this.dialogVisible = false;
          this.visible = false;
        }
      },
    },
  },
  methods: {
    loginInfo(data) {
      // console.log(data);
      try {
        switch (data) {
          case "login":
            // console.log(data);
            if (!localStorage.getItem("cookie")) {
              this.$store.dispatch("getUnikey");
            }
            // location.reload();
            this.dialogVisible = true;
            break;
          case "logout":
            console.log(data);
            localStorage.removeItem("cookie");
            location.reload();
            break;
        }
      } catch (err) {
        console.log(err);
      }
    },
    search() {
      if (this.input !== "") {
        // console.log(1);
        this.$store.dispatch("getSearch", {
          keywords: this.input,
          info: this.input,
        });
        this.$router.push({ name: "SearchList" });
      }
    },
    handleBackGo(c) {
      if (c) {
        history.go(1);
      } else {
        history.back();
      }
    },
  },
};
</script>

<style lang="less" scoped>
// contener开始
.container {
  height: 100%;
  // 搜索框
  .search {
    width: 400px;
    line-height: 60px;
    // 样式穿透，修改input框的圆角
    /deep/ .el-input__inner {
      /*或者 .s2>>>.el-input__inner  */
      // background: rgba(0, 0, 0, 0.2); /*调整inner的背景色，透明*/
      // height: 200px; /*调整inner的高度*/
      border-radius: 20px; /*输入框圆角值*/
    }
  }

  .head-right {
    margin-right: 20px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>