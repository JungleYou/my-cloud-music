"use strict";(self["webpackChunkmy_cloud_music"]=self["webpackChunkmy_cloud_music"]||[]).push([[367],{5367:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:16}},[e("video",{staticStyle:{width:"100%"},attrs:{controls:"",autoplay:"",loop:"",src:t.mv_detail?t.mv_detail.mvurl:""}}),e("el-row",[e("el-col",{attrs:{span:24}},[e("el-image",{staticStyle:{width:"60px",height:"60px","border-radius":"50%","vertical-align":"middle"},attrs:{src:t.mv_detail?t.mv_detail.artists[0].img1v1Url:t.url}}),e("span",[t._v(t._s(t.mv_detail?t.mv_detail.artists[0].name:""))])],1)],1),e("h1",{staticStyle:{margin:"30px 0"}},[t._v(t._s(t.mv_detail?t.mv_detail.name:""))]),e("div",{staticStyle:{"font-size":"12px",color:"grey","margin-bottom":"10px"}},[t._v(" 发布："+t._s(t.mv_detail?t.mv_detail.publishTime:"")+"     播放："+t._s(t.mv_detail?t.mv_detail.playCount:"")+" ")]),e("div",[e("el-button",{attrs:{round:"",icon:"el-icon-thumb"}},[t._v("赞"+t._s(t.mv_detail?t.mv_detail.playCount:""))]),e("el-button",{attrs:{round:"",icon:"el-icon-star-on"}},[t._v("收藏"+t._s(t.mv_detail?t.mv_detail.subCount:""))]),e("el-button",{attrs:{round:"",icon:"el-icon-share"}},[t._v("分享"+t._s(t.mv_detail?t.mv_detail.shareCount:""))])],1),e("div",[e("h1",[t._v("评论：")]),e("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},resize:"none"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}}),e("el-button",{staticStyle:{"text-align":"right",margin:"10px 0"},attrs:{round:""},on:{click:t.sendMark}},[t._v("评论")]),e("h5",[t._v("最新评论")]),t.mv_detail_info?e("div",t._l(t.mv_detail_info,(function(a){return e("el-row",{key:a.commentId,staticClass:"remark"},[e("el-col",{attrs:{span:3}},[e("el-image",{staticStyle:{width:"60px",height:"60px","border-radius":"50%","margin-top":"5px"},attrs:{src:a.user.avatarUrl}})],1),e("el-col",{attrs:{span:21}},[e("h5",{staticStyle:{color:"grey",margin:"10px"}},[t._v(" "+t._s(a.user.nickname)+"："),e("span",{staticStyle:{color:"black"}},[t._v(t._s(a.content))])]),e("span",{staticStyle:{"font-size":"12px",color:"grey","margin-left":"10px"}},[t._v(t._s(a.timeStr))])])],1)})),1):t._e()],1)],1),e("el-col",{attrs:{span:8}},[t._v("相关视频界面")])],1)],1)},r=[],l=a(3822),s=a(5941),n={name:"MvDetail",data(){return{remark:"",url:"https://tse4-mm.cn.bing.net/th/id/OIP-C.V5sj5_J6Pcjd3EaTNpokBAHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7"}},computed:{...(0,l.rn)(["mv_detail","mv_detail_info"])},methods:{sendMark(){if(this.remark){s.log(this.remark);let t={t:1,type:5,id:this.mv_detail.id,content:this.remark};this.$store.dispatch("sendRemark",t),this.remark=""}}}},o=n,m=a(1001),c=(0,m.Z)(o,i,r,!1,null,"0c938270",null),d=c.exports}}]);
//# sourceMappingURL=367.6ae816ad.js.map