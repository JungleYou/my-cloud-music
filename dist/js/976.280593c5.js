"use strict";(self["webpackChunkmy_cloud_music"]=self["webpackChunkmy_cloud_music"]||[]).push([[976],{8976:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("h4",[t._v("最新mv")]),e("div",{staticClass:"mv",on:{click:t.toMvDetail}},[e("el-row",{attrs:{gutter:10}},t._l(t.mv_first,(function(s){return e("el-col",{key:s.id,staticClass:"mv-item",attrs:{span:8}},[e("el-card",{attrs:{"body-style":{padding:"0px"}}},[e("img",{staticClass:"image",staticStyle:{height:"150px"},attrs:{src:s.cover,"data-id":s.id}}),e("div",{staticStyle:{padding:"6px",height:"35px",overflow:"hidden"}},[e("span",[t._v(t._s(s.name))]),e("div",{staticClass:"bottom clearfix"},[e("time",{staticClass:"time",staticStyle:{color:"grey"}},[t._v(t._s(s.artistName.substring(0,15)))])])])])],1)})),1)],1),e("div",{staticStyle:{float:"right",margin:"30px 0"}},[e("el-pagination",{attrs:{background:"","page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3,"current-page":t.currentPage},on:{"current-change":t.current}})],1)])},i=[],r=(s(7658),s(3822)),c=s(5941),n={name:"NewMv",mounted(){this.$store.dispatch("getMvFirst",{offset:0,limit:30})},computed:{...(0,r.rn)(["mv_first"])},methods:{current(t){c.log(t);const e={limit:30,offset:t};this.$store.dispatch("getMvFirst",e)},toMvDetail(t){let e=t.target.dataset.id;e&&(this.$store.dispatch("getMvDetail",e),this.$router.push({name:"MvDetail"}))}},data(){return{currentPage:1}}},l=n,o=s(1001),u=(0,o.Z)(l,a,i,!1,null,"dd1fb610",null),d=u.exports}}]);
//# sourceMappingURL=976.280593c5.js.map