(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(e,n,r){"use strict";r.r(n);var t=r(2809),o=r(7294),i=r(9163),c=r(5893);function a(e,n){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"===typeof e)return u(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,n)}(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var f="images/img.png",d=i.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["display:flex;align-items:center;justify-content:center;height:100vh;background-color:#008080;"]),h=i.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:space-around;width:","vh;height:","vh;background-color:#ccc;border:0.8vh solid;border-color:#ddd #666 #666 #ddd;"],(function(e){return 5*e.numberOfBlocks.width+5}),(function(e){return 5*e.numberOfBlocks.height+19})),v=i.ZP.div.withConfig({displayName:"pages__StateBoard",componentId:"sc-eccczk-2"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:","vh;height:11vh;border:0.7vh solid;border-color:#666 #ddd #ddd #666;"],(function(e){return 5*e.widthNumberOfBlocks+2})),b=i.ZP.div.withConfig({displayName:"pages__Flagcouner",componentId:"sc-eccczk-3"})(["display:inline;width:13vh;height:8vh;margin-left:1vh;font-size:7vh;line-height:6.5vh;color:red;text-align:center;background-color:black;border:0.5vh solid black;border-color:#666 #ddd #ddd #666;"]),g=(0,i.ZP)(b).withConfig({displayName:"pages__CountUpTimer",componentId:"sc-eccczk-4"})(["margin-right:1vh;"]),m=i.ZP.div.withConfig({displayName:"pages__Face",componentId:"sc-eccczk-5"})(["width:8vh;height:8vh;background-image:url(",");background-repeat:no-repeat;background-position:","vh 0;background-origin:border-box;background-size:112vh 8vh;border:0.6vh solid;border-color:#ddd #666 #666 #ddd;"],f,(function(e){return-8*e.faceState})),p=i.ZP.div.withConfig({displayName:"pages__GameBoard",componentId:"sc-eccczk-6"})(["width:","vh;height:","vh;border:1vh solid;border-color:#666 #ddd #ddd #666;"],(function(e){return 5*e.numberOfBlocks.width+2}),(function(e){return 5*e.numberOfBlocks.height+2})),y=i.ZP.div.withConfig({displayName:"pages__BombBlock",componentId:"sc-eccczk-7"})(["display:inline-block;width:5vh;height:5vh;vertical-align:bottom;background-color:white;background-image:url(",");background-repeat:no-repeat;background-position:-50vh 0;background-size:70vh 5vh;border:0.1vh solid #666;"],f),k=(0,i.ZP)(y).withConfig({displayName:"pages__GameBlock",componentId:"sc-eccczk-8"})(["background-color:",";background-position:","vh 0;",""],(function(e){return e.isOpen?"white":"gray"}),(function(e){return-5*(e.num-1)-.1}),(function(e){return e.isOpen?"border: 0.1vh solid #666;":"border: 0.4vh solid;border-color: #bbb #666 #666 #bbb;"})),w=(0,i.ZP)(y).withConfig({displayName:"pages__FlagBlock",componentId:"sc-eccczk-9"})(["background-color:gray;background-position:","vh -0.3vh;border:0.3vh solid;border-color:#bbb #666 #666 #bbb;"],(function(e){return-5*(e.num-3)-.1}));n.default=function(){var e=[],n={isGameclear:!1,isGameover:!1},r=(0,o.useState)({widthBlocks:30,heightBlocks:16,numberOfBombs:10}),t=r[0],i=(r[1],Array.from(new Array(t.heightBlocks),(function(){return new Array(t.widthBlocks).fill(9)})));console.log(i);var u=(0,o.useState)(i),l=u[0],f=u[1],O=(0,o.useState)(e),x=O[0],B=O[1],_=(0,o.useState)(n),j=_[0],N=_[1],S=(0,o.useState)(t.numberOfBombs),C=S[0],P=S[1],G=(0,o.useState)(0),I=G[0],z=G[1];(0,o.useEffect)((function(){if(0!==x.length&&!j.isGameclear&&!j.isGameover){var e=setInterval((function(){z((function(e){return e+1}))}),1e3);return function(){clearInterval(e)}}}),[x,j]);var Z=function(e,n,r){if(r.preventDefault(),!j.isGameclear&&!j.isGameover){var t=JSON.parse(JSON.stringify(l));9===t[n][e]?0<C?(t[n][e]=12,P(C-1)):t[n][e]=11:12===t[n][e]?(t[n][e]=11,P(C+1)):11===t[n][e]&&(t[n][e]=9),f(t)}};return(0,c.jsx)(d,{children:(0,c.jsxs)(h,{numberOfBlocks:{width:t.widthBlocks,height:t.heightBlocks},children:[(0,c.jsxs)(v,{widthNumberOfBlocks:t.widthBlocks,children:[(0,c.jsx)(b,{children:("000"+C).slice(-3)}),(0,c.jsx)(m,{faceState:j.isGameover?13:j.isGameclear?12:11,onClick:function(){return f(i),B(e),N(n),P(t.numberOfBombs),void z(0)},onContextMenu:function(e){return function(e){e.preventDefault();for(var n=JSON.parse(JSON.stringify(l)),r=function(e){for(var r=function(r){x.some((function(n){return n.x===e&&n.y===r}))||(n[r][e]=0)},o=0;o<t.heightBlocks;o++)r(o)},o=0;o<t.widthBlocks;o++)r(o);f(n);var i,c=0,u=a(n);try{for(u.s();!(i=u.n()).done;)c+=i.value.filter((function(e){return 9===e||11<=e})).length}catch(b){u.e(b)}finally{u.f()}if(c===t.numberOfBombs){N(s(s({},j),{},{isGameclear:!0}));var d,h=a(x);try{for(h.s();!(d=h.n()).done;){var v=d.value;n[v.y][v.x]=12}}catch(b){h.e(b)}finally{h.f()}}}(e)}}),(0,c.jsx)(g,{children:I>999?999:("000"+I).slice(-3)})]}),(0,c.jsx)(p,{numberOfBlocks:{width:t.widthBlocks,height:t.heightBlocks},children:l.map((function(e,n){return e.map((function(e,r){return 10===e?(0,c.jsx)(y,{},"".concat(r,"-").concat(n)):11<=e?(0,c.jsx)(w,{num:e,onContextMenu:function(e){return Z(r,n,e)}},"".concat(r,"-").concat(n)):(0,c.jsx)(k,{isOpen:e<9,num:1<=e&&e<=8?e:100,onClick:function(){return function(e,n){var r=function(e,n){for(var r=[],o=e-1;o<e+2;o++)for(var i=n-1;i<n+2;i++)0<=o&&o<t.widthBlocks&&0<=i&&i<t.heightBlocks&&{x:e,y:n}!=={x:o,y:i}&&r.push({x:o,y:i});return r},o=function(e,n,r){for(var t=0,o=function(e){for(var o=function(n){r.some((function(r){return r.x===e&&r.y===n}))&&t++},i=n-1;i<n+2;i++)o(i)},i=e-1;i<e+2;i++)o(i);return t},i=JSON.parse(JSON.stringify(l));if(!j.isGameclear&&!j.isGameover&&9===i[n][e]){var c=x;0===c.length&&(c=function(e,n){for(var r=[],o=function(){var o=Math.floor(Math.random()*t.widthBlocks),i=Math.floor(Math.random()*t.heightBlocks);r.some((function(e){return e.x===o&&e.y===i}))||e===o||n===i||r.push({x:o,y:i})};r.length<t.numberOfBombs;)o();return r}(e,n),B(c));for(var u=0,d=!1,h=0;h<c.length;h++)c[h].x===e&&c[h].y===n&&(d=!0);if(d){N(s(s({},j),{},{isGameover:!0}));var v,b=a(c);try{for(b.s();!(v=b.n()).done;){var g=v.value;i[g.y][g.x]=10}}catch(D){b.e(D)}finally{b.f()}}else{if(u=o(e,n,c),i[n][e]=u,0===u){var m,p=0,y=C,k=r(e,n),w=a(k);try{for(w.s();!(m=w.n()).done;){var O=m.value;if(12===i[O.y][O.x]&&y++,p=o(O.x,O.y,c),i[O.y][O.x]=p,0===p){var _,S=a(r(O.x,O.y));try{var G=function(){var e=_.value;k.some((function(n){return n.x===e.x&&n.y===e.y}))||k.push({x:e.x,y:e.y})};for(S.s();!(_=S.n()).done;)G()}catch(D){S.e(D)}finally{S.f()}}}}catch(D){w.e(D)}finally{w.f()}P(y)}var I,z=0,Z=a(i);try{for(Z.s();!(I=Z.n()).done;)z+=I.value.filter((function(e){return 9===e||11<=e})).length}catch(D){Z.e(D)}finally{Z.f()}if(z===t.numberOfBombs){N(s(s({},j),{},{isGameclear:!0}));var A,E=a(c);try{for(E.s();!(A=E.n()).done;){var M=A.value;i[M.y][M.x]=12}}catch(D){E.e(D)}finally{E.f()}}}f(i)}}(r,n)},onContextMenu:function(e){return Z(r,n,e)}},"".concat(r,"-").concat(n))}))}))})]})})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2562)}])}},function(e){e.O(0,[163,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);