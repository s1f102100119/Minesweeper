(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(e,n,r){"use strict";r.r(n);var t=r(2809),o=r(7294),i=r(9163),c=r(5893);function a(e,n){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"===typeof e)return u(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,n)}(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var l="images/img.png",f=i.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["display:flex;align-items:center;justify-content:center;height:100vh;background-color:#008080;"]),h=i.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:space-around;width:60vh;height:80vh;background-color:#ccc;border:0.8vh solid;border-color:#ddd #666 #666 #ddd;"]),v=i.ZP.div.withConfig({displayName:"pages__StateBoard",componentId:"sc-eccczk-2"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-around;width:54vh;height:12vh;border:0.7vh solid;border-color:#666 #ddd #ddd #666;"]),g=i.ZP.div.withConfig({displayName:"pages__CounterTemplate",componentId:"sc-eccczk-3"})(["display:inline;width:16vh;height:10vh;font-size:9vh;line-height:8.5vh;color:red;text-align:center;background-color:black;border:0.5vh solid black;border-color:#666 #ddd #ddd #666;"]),p=(0,i.ZP)(g).withConfig({displayName:"pages__Flagcouner",componentId:"sc-eccczk-4"})([""]),b=(0,i.ZP)(g).withConfig({displayName:"pages__CountUpTimer",componentId:"sc-eccczk-5"})([""]),y=i.ZP.div.withConfig({displayName:"pages__Face",componentId:"sc-eccczk-6"})(["width:10vh;height:10vh;background-image:url(",");background-repeat:no-repeat;background-position:"," 0;background-origin:border-box;background-size:140vh 10vh;border:0.6vh solid;border-color:#ddd #666 #666 #ddd;"],l,(function(e){return e.faceState})),m=i.ZP.div.withConfig({displayName:"pages__GameBoard",componentId:"sc-eccczk-7"})(["width:56vh;height:56vh;border:1vh solid;border-color:#666 #ddd #ddd #666;"]),k=i.ZP.div.withConfig({displayName:"pages__BlockTemplate",componentId:"sc-eccczk-8"})(["display:inline-block;width:6vh;height:6vh;vertical-align:bottom;"]),x=(0,i.ZP)(k).withConfig({displayName:"pages__GameBlock",componentId:"sc-eccczk-9"})(["background-color:",";background-image:url(",");background-repeat:no-repeat;background-position:"," 0;background-size:84vh 6vh;",""],(function(e){return e.isOpen?"white":"gray"}),l,(function(e){return e.imagePosition}),(function(e){return e.isOpen?"border: 0.1vh solid #666;":"border: 0.4vh solid;border-color: #bbb #666 #666 #bbb;"})),w=(0,i.ZP)(k).withConfig({displayName:"pages__BombBlock",componentId:"sc-eccczk-10"})(["background-color:white;background-image:url(",");background-repeat:no-repeat;background-position:-60vh 0;background-size:84vh 6vh;border:0.1vh solid #666;"],l),_=(0,i.ZP)(k).withConfig({displayName:"pages__FlagBlock",componentId:"sc-eccczk-11"})(["background:gray;background-image:url(",");background-repeat:no-repeat;background-position:"," -0.3vh;background-origin:padding-box;background-size:84vh 6vh;border:0.3vh solid;border-color:#bbb #666 #666 #bbb;"],l,(function(e){return e.imagePosition}));n.default=function(){var e=9,n=10,r=[[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9]],t=[],i={isGameclear:!1,isGameover:!1},u=(0,o.useState)(r),d=u[0],l=u[1],g=(0,o.useState)(t),k=g[0],O=g[1],j=(0,o.useState)(i),P=j[0],S=j[1],C=(0,o.useState)(n),N=C[0],z=C[1],I=(0,o.useState)(0),G=I[0],Z=I[1];(0,o.useEffect)((function(){if(0!==k.length&&!P.isGameclear&&!P.isGameover){var e=setInterval((function(){Z((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}}),[k,P]);var E=function(e,n,r){if(r.preventDefault(),!P.isGameclear&&!P.isGameover){var t=JSON.parse(JSON.stringify(d));9===t[n][e]?0<N?(t[n][e]=12,z(N-1)):t[n][e]=11:12===t[n][e]?(t[n][e]=11,z(N+1)):11===t[n][e]&&(t[n][e]=9),l(t)}};return(0,c.jsx)(f,{children:(0,c.jsxs)(h,{children:[(0,c.jsxs)(v,{children:[(0,c.jsx)(p,{children:("000"+N).slice(-3)}),(0,c.jsx)(y,{faceState:(-10*(P.isGameover?13:P.isGameclear?12:11)).toString()+"vh",onClick:function(){return l(r),O(t),S(i),z(n),void Z(0)},onContextMenu:function(r){return function(r){r.preventDefault();for(var t=JSON.parse(JSON.stringify(d)),o=function(n){for(var r=function(e){k.some((function(r){return r.x===n&&r.y===e}))||(t[e][n]=0)},o=0;o<e;o++)r(o)},i=0;i<e;i++)o(i);l(t);var c,u=0,f=a(t);try{for(f.s();!(c=f.n()).done;)u+=c.value.filter((function(e){return 9===e||11<=e})).length}catch(p){f.e(p)}finally{f.f()}if(u===n){S(s(s({},P),{},{isGameclear:!0}));var h,v=a(k);try{for(v.s();!(h=v.n()).done;){var g=h.value;t[g.y][g.x]=12}}catch(p){v.e(p)}finally{v.f()}}}(r)}}),(0,c.jsx)(b,{children:G>999?999:("000"+G).slice(-3)})]}),(0,c.jsx)(m,{children:d.map((function(r,t){return r.map((function(r,o){return 10===r?(0,c.jsx)(w,{},"".concat(o,"-").concat(t)):11<=r?(0,c.jsx)(_,{imagePosition:(-6*(r-3)-.1).toString()+"vh",onContextMenu:function(e){return E(o,t,e)}},"".concat(o,"-").concat(t)):(0,c.jsx)(x,{isOpen:r<9,imagePosition:1<=r&&r<=8?(-6*(r-1)-.1).toString()+"vh":"100vh",onClick:function(){return function(r,t){var o=function(n,r){for(var t=[],o=n-1;o<n+2;o++)for(var i=r-1;i<r+2;i++)0<=o&&o<e&&0<=i&&i<e&&{x:n,y:r}!=={x:o,y:i}&&t.push({x:o,y:i});return t},i=function(e,n,r){for(var t=0,o=function(e){for(var o=function(n){r.some((function(r){return r.x===e&&r.y===n}))&&t++},i=n-1;i<n+2;i++)o(i)},i=e-1;i<e+2;i++)o(i);return t},c=JSON.parse(JSON.stringify(d));if(!P.isGameclear&&!P.isGameover&&9===c[t][r]){var u=k;0===u.length&&(u=function(r,t){for(var o=[],i=function(){var n=Math.floor(Math.random()*e),i=Math.floor(Math.random()*e);o.some((function(e){return e.x===n&&e.y===i}))||r===n||t===i||o.push({x:n,y:i})};o.length<n;)i();return o}(r,t),O(u));for(var f=0,h=!1,v=0;v<u.length;v++)u[v].x===r&&u[v].y===t&&(h=!0);if(h){S(s(s({},P),{},{isGameover:!0}));var g,p=a(u);try{for(p.s();!(g=p.n()).done;){var b=g.value;c[b.y][b.x]=10}}catch(J){p.e(J)}finally{p.f()}}else{if(f=i(r,t,u),c[t][r]=f,0===f){var y,m=0,x=N,w=o(r,t),_=a(w);try{for(_.s();!(y=_.n()).done;){var j=y.value;if(12===c[j.y][j.x]&&x++,m=i(j.x,j.y,u),c[j.y][j.x]=m,0===m){var C,I=a(o(j.x,j.y));try{var G=function(){var e=C.value;w.some((function(n){return n.x===e.x&&n.y===e.y}))||w.push({x:e.x,y:e.y})};for(I.s();!(C=I.n()).done;)G()}catch(J){I.e(J)}finally{I.f()}}}}catch(J){_.e(J)}finally{_.f()}z(x)}var Z,E=0,B=a(c);try{for(B.s();!(Z=B.n()).done;)E+=Z.value.filter((function(e){return 9===e||11<=e})).length}catch(J){B.e(J)}finally{B.f()}if(E===n){S(s(s({},P),{},{isGameclear:!0}));var M,A=a(u);try{for(A.s();!(M=A.n()).done;){var D=M.value;c[D.y][D.x]=12}}catch(J){A.e(J)}finally{A.f()}}}l(c)}}(o,t)},onContextMenu:function(e){return E(o,t,e)}},"".concat(o,"-").concat(t))}))}))})]})})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2562)}])}},function(e){e.O(0,[163,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);