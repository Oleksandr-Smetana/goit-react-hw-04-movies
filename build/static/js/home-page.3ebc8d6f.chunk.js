(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1,4],{56:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,c=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(a){c=!0,o=a}finally{try{r||null==u.return||u.return()}finally{if(c)throw o}}return e}}(t,n)||function(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,"a",(function(){return c}))},57:function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return u})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return f}));var r="https://api.themoviedb.org/3/",c="41a215d12341665c3bdfd42bbc3f5d68";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch(t).then((function(t){return t.ok?t.json():Promise.reject(new Error("No movies found."))}))}function i(){return o("".concat(r,"trending/movie/week?api_key=").concat(c))}function u(t){return o("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(t))}function a(t){return o("".concat(r,"movie/").concat(t,"?api_key=").concat(c))}function s(t){return o("".concat(r,"movie/").concat(t,"/credits?api_key=").concat(c))}function f(t){return o("".concat(r,"movie/").concat(t,"/reviews?api_key=").concat(c))}},58:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(1);function c(t){var n=t.text;return Object(r.jsx)("h1",{children:n})}},59:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return o}));var r=e(9),c=e(1);function o(t){var n=t.movies;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{children:n&&n.map((function(t){return Object(c.jsx)("li",{children:Object(c.jsxs)(r.b,{to:"/movies/".concat(t.id),children:[Object(c.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300".concat(t.poster_path),alt:t.title}),Object(c.jsx)("h3",{children:t.title})]})},t.id)}))})})}},60:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return s}));var r=e(56),c=e(0),o=e(57),i=e(58),u=e(59),a=e(1);function s(){var t=Object(c.useState)(null),n=Object(r.a)(t,2),e=n[0],s=n[1];return Object(c.useEffect)((function(){Object(o.e)().then((function(t){return s(t.results)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.a,{text:"Popular movies in this week"}),Object(a.jsx)(u.default,{movies:e}),";"]})}}}]);
//# sourceMappingURL=home-page.3ebc8d6f.chunk.js.map