"use strict";(self["webpackChunkmy_cloud_music"]=self["webpackChunkmy_cloud_music"]||[]).push([[966],{9966:function(t,s,a){a.r(s),a.d(s,{default:function(){return p}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[s("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.banners,(function(t){return s("el-carousel-item",{key:t.scm},[s("img",{style:{borderRadius:"15px"},attrs:{src:t.imageUrl,alt:t.typeTitle}})])})),1),s("h4",[t._v("歌单")]),s("div",{staticClass:"list",staticStyle:{overflow:"hidden"},on:{click:t.toPlayList}},[s("el-row",{attrs:{gutter:5}},t._l(t.top_playlists,(function(a){return s("el-col",{key:a.id,style:{height:"263px",overFlow:"hidden"},attrs:{span:6}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",attrs:{src:a.coverImgUrl,"data-playId":a.id}}),s("div",{staticStyle:{padding:"6px,height:30px"}},[s("span",[t._v(t._s(a.name))]),s("div",{staticClass:"bottom clearfix"},[s("time",{staticClass:"time"},[t._v(t._s(a.description.substring(0,30)))])])])])],1)})),1)],1),s("h4",[t._v("热门播客")]),t.hot_boke?s("div",{staticClass:"boke",on:{click:t.toBoke}},[s("el-row",{attrs:{gutter:10}},t._l(t.hot_boke,(function(a){return s("el-col",{key:a.id,staticClass:"boke-item",attrs:{span:12,"data-id":a.id}},[s("el-row",{attrs:{gutter:5}},[s("el-col",{attrs:{span:6}},[s("el-card",{staticClass:"box-card",attrs:{"body-style":{padding:"0px"}}},[s("el-image",{staticStyle:{width:"100px",height:"100px","vertical-align":"text-top"},attrs:{src:a.coverImgUrl,"data-id":a.id}})],1)],1),s("el-col",{attrs:{span:18}},[s("h4",{attrs:{"data-id":a.id}},[t._v(t._s(a.name.substring(0,10)))]),s("span",{staticStyle:{"font-size":"11px"},attrs:{"data-id":a.id}},[t._v(t._s(a.description.substring(0,25)))]),s("div",[s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:7}},[s("span",{staticClass:"el-icon-edit",attrs:{"data-id":a.id}}),t._v(t._s(a.subscribedCount))]),s("el-col",{attrs:{span:11}},[s("span",{staticClass:"el-icon-edit"}),t._v(t._s(a.playCount))]),s("el-col",{attrs:{span:6}},[s("span",{staticClass:"el-icon-edit"}),t._v(t._s(a.trackCount))])],1)],1)])],1)],1)})),1)],1):t._e(),s("h4",[t._v("最新mv")]),s("div",{staticClass:"mv"},[s("el-row",{attrs:{gutter:10}},t._l(t.mv_first,(function(a){return s("el-col",{key:a.id,staticClass:"mv-item",attrs:{span:8}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",staticStyle:{height:"150px"},attrs:{src:a.cover}}),s("div",{staticStyle:{padding:"6px,height:30px"}},[s("span",[t._v(t._s(a.name))]),s("div",{staticClass:"bottom clearfix"},[s("time",{staticClass:"time"},[t._v(t._s(a.artistName))])])])])],1)})),1)],1)],1)},i=[],r=(a(7658),a(3822)),l=a(5941),n={name:"PersonRec",data(){return{img:["https://ts1.cn.mm.bing.net/th?id=OIP-C.mH9YLFEL5YdVxJM82mjVJQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2","https://ts1.cn.mm.bing.net/th?id=OIP-C.De4iKAMeTvWwPQxXNK74ZgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2","https://ts1.cn.mm.bing.net/th?id=OIP-C.7-6n_pwnAPz_IkgyRuRI2wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"],currentDate:new Date}},methods:{toPlayList(t){if(t.target.dataset){l.log(t.target.dataset.playid);let s=t.target.dataset.playid;this.$store.dispatch("getPlayListSongs",s),this.$router.push({name:"PlayList"})}},toBoke(t){let s=t.target.dataset.id;s&&(this.$store.dispatch("getPlayListSongs",s),this.$router.push({name:"PlayList"}))}},computed:{...(0,r.rn)(["banners","top_playlists","hot_boke","mv_first"])}},c=n,d=a(1001),o=(0,d.Z)(c,e,i,!1,null,"26e53fdc",null),p=o.exports}}]);
//# sourceMappingURL=966.a1d057a0.js.map