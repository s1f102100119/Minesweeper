(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(n,e,i){"use strict";i.r(e);var c=i(7294),t=i(9163),o=i(5893),a=["blue","green","red","purple","brown","cyan","orange","pink"],r=t.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["display:flex;align-items:center;justify-content:center;height:100vh;background:#008080;"]),h=t.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:space-around;width:60vh;height:80vh;background:#ccc;"]),l=t.ZP.div.withConfig({displayName:"pages__Face",componentId:"sc-eccczk-2"})(["width:10vh;height:10vh;background:yellow;border-radius:50%;"]),d=t.ZP.div.withConfig({displayName:"pages__GameBoard",componentId:"sc-eccczk-3"})(["width:54vh;height:54vh;"]),s=t.ZP.div.withConfig({displayName:"pages__GameBlock",componentId:"sc-eccczk-4"})(["display:inline-block;vertical-align:bottom;text-align:center;font-weight:bold;line-height:5.5vh;font-size:3vh;color:",";width:6vh;height:6vh;border:1px solid black;background:",";"],(function(n){return 1<=n.num&&n.num<=8?a[n.num-1]:"black"}),(function(n){return n.isOpen?"white":"gray"})),u=t.ZP.div.withConfig({displayName:"pages__BombBlock",componentId:"sc-eccczk-5"})(["display:inline-block;vertical-align:bottom;text-align:center;font-weight:bold;line-height:4.25vh;font-size:6vh;background:white;color:red;width:6vh;height:6vh;border:1px solid black;"]);e.default=function(){var n=(0,c.useState)([[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9]]),e=n[0],i=n[1],t=(0,c.useState)([{x:0,y:0}]),a=t[0];t[1];return(0,o.jsx)(r,{children:(0,o.jsxs)(h,{children:[(0,o.jsx)(l,{}),(0,o.jsx)(d,{children:e.map((function(n,c){return n.map((function(n,t){return 10===n?(0,o.jsx)(u,{children:"\u25cf"},"".concat(t,"-").concat(c)):(0,o.jsx)(s,{isOpen:n<9,num:n,onClick:function(){return function(n,c){console.log(n,c);var t=JSON.parse(JSON.stringify(e));t[c][n]=1;for(var o=!1,r=0;r<a.length;r++)a[r].x===n&&a[r].y===c&&(o=!0);t[c][n]=o?10:1,i(t)}(t,c)},children:0<n&&n<9&&n},"".concat(t,"-").concat(c))}))}))})]})})}},5301:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2562)}])}},function(n){n.O(0,[163,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);