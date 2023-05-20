import Vue from "vue";
import Vuex from "vuex";
import {
  api_getUnikey,
  api_getEwmImg,
  api_checkQr,
  api_userAccount,
  api_userPlayList,
  api_playListDetail,
  api_playListSongs,
  api_SongUrl,
  api_songDetail,
  api_bannerList,
  api_topPlayList,
  api_getSearch,
  api_hotBoke,
  api_mvFirst,
  api_mvDetail,
  api_mvUrl,
  api_mvDetailInfo,
  api_comment_add,
  api_personFM,
  api_musicWords,
  api_logout,
} from "@/api/index";
import qr from "qr-image";
Vue.use(Vuex);
// 用于响应组件中的动作
const actions = {
  /* 这里的第一步是用户获取二维码并检测二维码是否扫描和确认，如果确认了就直接保存用户的cookie，然后*/
  // 1.1.二维码登录（获取unikey）然后调用1.2的获取二维码函数
  async getUnikey({ dispatch }) {
    try {
      let result = await api_getUnikey();
      // console.log("res", result);
      if (result.code === 200) {
        let data = result.data.unikey;
        dispatch("getEwmImg", data);
      }
    } catch (err) {
      console.log(err);
    }
  },
  // 1.2.获取二维码图片，然后调用1.3的检测二维码扫描情况
  async getEwmImg({ dispatch, commit }, unikey) {
    // console.log(commit);
    let result = await api_getEwmImg(unikey);
    // console.log("img", result);
    if (result.code === 200) {
      // console.log(result.data.qrurl);
      const QR_URL = result.data.qrurl;
      const QR_PNG = qr.imageSync(QR_URL, { type: "png" });
      const QR_BASE64 = "data:image/png;base64," + QR_PNG.toString("base64");
      // console.log(QR_BASE64);
      // 检测二维码
      dispatch("checkQr", unikey);
      // 保存二维码图片的base64数据
      commit("GETEWMIMG", QR_BASE64);
    }
  },
  // 1.3.检测二维码扫描情况，并保存cookie等信息，然后调用1.4获取用户信息
  checkQr({ dispatch, commit }, data) {
    let flag = 1;

    let time = setInterval(async () => {
      let result = await api_checkQr(data);
      // console.log(result);
      if (result.code == 802) {
        commit("CONFIRM_INFO", result);
      }
      if (result.code == 803) {
        commit("USER_COOKIE", result);
        // 获取用户信息
        dispatch("getAccountInfo");
        clearInterval(time);
      }
      if (result.code == 800) {
        clearInterval(time);
      }
    }, 2000);
  },
  //1.4.获取用户信息，并保存到仓库
  async getAccountInfo({ dispatch, commit }) {
    let result = await api_userAccount();
    if (result.code === 200) {
      commit("USER_INFO", result.profile);
      // console.log(result);
      if (result.profile) {
        dispatch("getUserSubcount", result.profile.userId);
      }
    }
    // console.log(result);
  },
  // 1.5登出
  async getLogout() {
    let result = await api_logout();
    console.log(result);
  },
  // 2.获取用户,歌单，等信息
  async getUserSubcount({ commit }, data) {
    let result = await api_userPlayList(data);
    // console.log(result);
    if (result.code === 200) {
      commit("USER_SUBCOUNT", result.playlist);
    }
  },
  // 3.获取歌单的详细信息
  async getPlayListSongs({ dispatch, commit }, data) {
    dispatch("getPlayListDetail", data);
    let result = await api_playListSongs(data);
    // console.log(result);
    if (result.code === 200) {
      commit("PLAYLISTSONGS", result.songs);
    }
  },
  // 4.保存当前歌单的信息
  async getPlayListDetail({ commit }, data) {
    let result = await api_playListDetail(data);
    // console.log(result);
    if (result.code === 200) {
      commit("PLAYLISTDETAIL", result.playlist);
    }
  },
  // 5.获取当前音乐url
  async getSongUrl({ dispatch }, { id, indexs }) {
    let result = await api_SongUrl(id);
    // console.log(result);
    if (result.code === 200) {
      let info = { id, indexs, url: result.data[0].url };
      dispatch("getSongDetail", info);
      // 获取音乐歌词
      dispatch("getMusicWords", id);
    }
  },
  // 6.获取音乐详情
  async getSongDetail({ commit }, { url, indexs, id }) {
    let result = await api_songDetail(id);
    // console.log(result);
    let detail = { url, indexs, ...result.songs[0] };
    commit("SONGDETAIL", detail);
  },
  // 7.获取轮播图
  async getBanners({ commit }) {
    let result = await api_bannerList();
    // console.log(result);
    if (result.code === 200) {
      commit("BANNERS", result.banners);
    }
  },
  // 获取推荐歌单列表
  async getTopPlayList({ commit }, data = null) {
    let result = await api_topPlayList(data);
    // console.log(result);
    if (result.code === 200) {
      commit("TOPPLAYLIST", result.playlists);
    }
  },
  // 搜索音乐信息(音乐列表)
  async getSearch({ commit }, data) {
    const searchInfo = data.info;
    let result = await api_getSearch(data);
    console.log(result);
    if (result.code === 200) {
      commit("SEARCH", { searchInfo, ...result.result });
    }
  },
  // 热门播客
  async getHotBoke({ commit }, data) {
    let result = await api_hotBoke({ cat: "流行", limit: 6 });
    // console.log(result);
    if (result.code === 200) {
      commit("HOTEBOKE", result.playlists);
    }
  },
  // 热门mv
  async getMvFirst({ commit }, data) {
    // console.log("*", data);
    let result = await api_mvFirst(data);
    // console.log(result);
    if (result.code === 200) {
      commit("MVFIRST", result.data);
    }
  },
  // 获取mv信息
  async getMvDetail({ dispatch }, id) {
    let result = await api_mvDetail(id);
    if (result.code === 200) {
      // console.log(result);
      dispatch("getMvUrl", result.data);
      dispatch("getMvDetailInfo", result.data);
    }
  },
  // 获取mvurl
  async getMvUrl({ commit }, mvDetail) {
    let result = await api_mvUrl(mvDetail.id);
    // console.log("mv", result);
    if (result.code === 200) {
      let mv_detail = { mvurl: result.data.url, ...mvDetail };
      commit("MVDETAIL", mv_detail);
    }
  },
  // 获取视频评论
  async getMvDetailInfo({ commit }, { id }) {
    let result = await api_mvDetailInfo(id);
    if (result.code === 200) {
      // console.log(result);
      commit("MVDETAILINFO", result.comments);
    }
  },
  // 发表评论
  async sendRemark({ dispatch }, data) {
    console.log(data);
    let result = await api_comment_add(data);
    console.log(result);
    if (result.code === 200) {
      setTimeout(() => {
        dispatch("getMvDetail", data.id);
      }, 2000);
    }
  },
  // 获取私人fm
  async getPersonFM({ dispatch, commit }, data) {
    let result = await api_personFM();
    if (result.code === 200) {
      // console.log(result);
      let fmMusic = result.data[0];
      dispatch("getSongUrl", { id: fmMusic.id, indexs: "fm" });
    }
  },
  // 获取歌曲的歌词
  async getMusicWords({ commit }, id) {
    let result = await api_musicWords(id);
    // console.log(result);
    if (result.code === 200) {
      let words = result.lrc.lyric.split("\n");
      // console.log(words);
      commit("MUSICWORDS", words);
    }
  },
};
// 用于操作数据
const mutations = {
  // 存储二维码图片
  GETEWMIMG(state, data) {
    state.qr_url = data;
  },
  // 存储用户扫码后的基本信息
  CONFIRM_INFO(state, data) {
    state.confirm_info = data;
  },
  // 存储用户cookie
  USER_COOKIE(state, data) {
    localStorage.setItem("cookie", data.cookie);
    state.user_cookie = data;
  },
  // 保存用户信息
  USER_INFO(state, data) {
    state.user_info = data;
  },
  // 保存用户的歌单信息
  USER_SUBCOUNT(state, data) {
    state.user_subcount = data;
  },
  // 存储歌单列表
  PLAYLISTSONGS(state, data) {
    state.play_list_songs = data;
  },
  // 存储详细的歌单系信息
  PLAYLISTDETAIL(state, data) {
    state.play_list_detail = data;
  },
  //存储当前音乐的信息
  SONGDETAIL(state, data) {
    state.song_detail = data;
  },
  // 存储banner
  BANNERS(state, data) {
    state.banners = data;
  },
  // 存储推荐歌单
  TOPPLAYLIST(state, data) {
    state.top_playlists = data;
  },
  // 存储搜索信息
  SEARCH(state, data) {
    if (!state.play_list_songs) {
      state.play_list_songs = data.songs;
    }
    state.search_info = data;
  },
  // 存储播客信息
  HOTEBOKE(state, data) {
    state.hot_boke = data;
  },
  // 存储热门mv信息
  MVFIRST(state, data) {
    state.mv_first = data;
  },
  // 保存视频详细信息（不包括评论）
  MVDETAIL(state, data) {
    state.mv_detail = data;
  },
  // 保存用户视频评论
  MVDETAILINFO(state, data) {
    state.mv_detail_info = data;
  },
  // 存储当前音乐的歌词
  MUSICWORDS(state, data) {
    state.music_words = data;
  },
};
const getters = {
  uid(state) {
    let uid = undefined;
    if (state.user_info) {
      uid = state.user_info.userId;
    }
    return uid;
  },
};
// 用于存储数据
const state = {
  qr_url: "",
  confirm_info: "", //用户扫码后的基本信息
  user_cookie: localStorage.getItem("cookie"), //用户登录后的cookie等信息
  user_info: undefined, //存储用户登陆后的信息
  user_subcount: undefined,
  play_list_songs: undefined,
  play_list_detail: undefined,
  song_detail: undefined,
  banners: undefined,
  top_playlists: undefined,
  search_info: undefined,
  hot_boke: undefined,
  mv_first: undefined,
  mv_detail: undefined,
  mv_detail_info: undefined,
  music_words: undefined,
};
// 创建,并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
