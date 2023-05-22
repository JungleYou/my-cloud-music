import requests from "./request";
// 1.二维码登录（获取unikey）
export const api_getUnikey = () =>
  requests({
    url: "/login/qr/key",
    methods: "get",
    params: {
      time: Date.now(),
    },
  });
// 2.获取二维码图片
export const api_getEwmImg = (unikey) =>
  requests({
    url: `/login/qr/create`,
    methods: "get",
    params: {
      key: unikey,
      time: Date.now(),
    },
  });
// 3.检测二维码扫描情况
export const api_checkQr = (unikey) =>
  requests({
    url: `/login/qr/check`,
    methods: "get",
    params: {
      key: unikey,
      time: Date.now(),
    },
  });
// 3.登出
export const api_logout = () =>
  requests({
    url: `/logout`,
    methods: "get",
  });
// 4.获取用户信息
export const api_userAccount = () =>
  requests({
    url: `/user/account`,
    methods: "get",
    time: Date.now(),
  });

// 5.获取用户信息(歌单，收藏等)
export const api_userPlayList = (data) =>
  requests({
    url: `/user/playlist`,
    methods: "get",
    params: {
      uid: data,
    },
  });
// 6.获取歌单歌曲列表
export const api_playListSongs = (data) =>
  requests({
    url: `/playlist/track/all`,
    methods: "get",
    params: {
      id: data,
    },
  });
// 7.获取歌单详细信息
export const api_playListDetail = (data) =>
  requests({
    url: `/playlist/detail`,
    methods: "get",
    params: {
      id: data,
    },
  });
// 8.获取音乐url
export const api_SongUrl = (data) =>
  requests({
    url: `/song/url`,
    methods: "get",
    params: {
      id: data,
    },
  });
// 9.获取音乐详细信息
export const api_songDetail = (data) =>
  requests({
    url: `/song/detail`,
    methods: "get",
    params: {
      ids: data,
    },
  });
// 10.获取音乐详细信息
export const api_bannerList = () =>
  requests({
    url: `/banner`,
    methods: "get",
  });
// 11.获取精选歌单
export const api_topPlayList = (data) =>
  requests({
    url: `/top/playlist`,
    methods: "get",
    params: data,
  });
// 11.获取精选歌单
export const api_getSearch = ({ keywords, offset = 0 }) =>
  requests({
    url: `/search`,
    methods: "get",
    params: {
      keywords,
      offset,
    },
  });
// 12.获取热门播客信息（这里使用的是精品歌单信息）
export const api_hotBoke = ({ cat, limit }) =>
  requests({
    url: `/top/playlist/highquality`,
    methods: "get",
    params: {
      cat,
      limit,
    },
  });
// 13.获取mv的信息
export const api_mvFirst = ({ offset = 0, limit = 30 }) =>
  requests({
    url: `/mv/all`,
    methods: "get",
    params: {
      offset,
      limit,
    },
  });
// 14.获取mv详细信息
export const api_mvDetail = (mvid) =>
  requests({
    url: `/mv/detail`,
    methods: "get",
    params: {
      mvid,
    },
  });
// 15.获取mv的url
export const api_mvUrl = (id) =>
  requests({
    url: `/mv/url`,
    methods: "get",
    params: {
      id,
    },
  });
// 16.获取mv的评论等信息
export const api_mvDetailInfo = (id) =>
  requests({
    url: `/comment/video`,
    methods: "get",
    params: {
      id,
      time: Date.now(),
    },
  });
// 16.发送评论
export const api_comment_add = ({ t = 1, type, id, content }) =>
  requests({
    url: `/comment`,
    methods: "get",
    params: {
      t,
      type,
      id,
      content,
    },
  });
// 16.获取mv的url
export const api_personFM = () =>
  requests({
    url: `/personal_fm`,
    methods: "get",
    params: {
      time: Date.now(),
    },
  });
// 16.获取music的歌词
export const api_musicWords = (id) =>
  requests({
    url: `/lyric`,
    methods: "get",
    params: {
      id,
      time: Date.now(),
    },
  });
