(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{66:function(t,a,e){t.exports={cast:"Cast_cast__1tX64",castItem:"Cast_castItem__2a5Z1",photo:"Cast_photo__3ocNJ",castInfo:"Cast_castInfo__1dWrO",defaultMessage:"Cast_defaultMessage__13n1g"}},71:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return u}));var s=e(17),c=e(0),n=e(18),o=e.p+"static/media/defaultPhoto.87bb9c65.jpg",r=e(66),i=e.n(r),l=e(1);function u(t){var a=t.movieId,e=Object(c.useState)(null),r=Object(s.a)(e,2),u=r[0],h=r[1];return Object(c.useEffect)((function(){Object(n.a)(a).then((function(t){return h(t.cast)}))}),[a]),console.log(u),u&&0!==u.length?Object(l.jsx)("ul",{className:i.a.cast,children:u.map((function(t){return Object(l.jsxs)("li",{className:i.a.castItem,children:[Object(l.jsx)("img",{className:i.a.photo,src:t.profile_path?"https://image.tmdb.org/t/p/w200/".concat(t.profile_path):o,alt:t.name}),Object(l.jsxs)("p",{className:i.a.castInfo,children:["Actor: ",t.name,Object(l.jsx)("br",{}),"Character: ",t.character]})]},t.id)}))}):Object(l.jsx)("p",{className:i.a.defaultMessage,children:"Cast is not available."})}}}]);
//# sourceMappingURL=cast.809d4de2.chunk.js.map