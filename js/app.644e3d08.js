(function(t){function e(e){for(var n,i,a=e[0],u=e[1],s=e[2],l=0,p=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),A()}function A(){for(var t,e=0;e<o.length;e++){for(var A=o[e],n=!0,a=1;a<A.length;a++){var u=A[a];0!==r[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=A[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var A=n[e]={i:e,l:!1,exports:{}};return t[e].call(A.exports,A,A.exports,i),A.l=!0,A.exports}i.m=t,i.c=n,i.d=function(t,e,A){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:A})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var A=Object.create(null);if(i.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(A,n,function(e){return t[e]}.bind(null,n));return A},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/studial/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var c=u;o.push([0,"chunk-vendors"]),A()})({0:function(t,e,A){t.exports=A("56d7")},"034f":function(t,e,A){"use strict";var n=A("85ec"),r=A.n(n);r.a},"0eb7":function(t,e,A){"use strict";var n=A("bedd"),r=A.n(n);r.a},"19b8":function(t,e,A){"use strict";var n=A("bd29"),r=A.n(n);r.a},"2a85":function(t,e,A){},"56d7":function(t,e,A){"use strict";A.r(e);A("e260"),A("e6cf"),A("cca6"),A("a79d");var n=A("2b0e"),r=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{attrs:{id:"app"}},[A("div",{staticClass:"wrapper"},[A("Logo",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]}),A("Dial",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]}),A("SelectOption",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{min:t.min}}),A("Buttons",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{runningTimerState:t.runningTimerState}})],1)])},o=[],i=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"dial"},[A("div",[t._v(" "+t._s(t.formatTime)+" ")])])},a=[],u=(A("d81d"),A("d3b7"),A("25f0"),{computed:{formatTime:function(){var t=[this.$parent.min.toString(),this.$parent.sec.toString()].map((function(t){return t.length<2?"0"+t:t}));return t[0]+":"+t[1]}}}),s=u,c=(A("b488"),A("2877")),l=Object(c["a"])(s,i,a,!1,null,"0b8366c1",null),p=l.exports,m=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"buttonsWrap"},[t.runningTimerState?A("StopButton"):A("StartButton"),A("ResetButton",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}]})],1)},f=[],v=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("button",{on:{click:t.startTimer}},[t._v("Start")])},d=[],g={methods:{startTimer:function(){var t=this;this.$parent.$parent.timerObj=setInterval((function(){t.$parent.$parent.count()}),1e3),this.$parent.$parent.runningTimerState=!0}}},b=g,h=Object(c["a"])(b,v,d,!1,null,null,null),Q=h.exports,w=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("button",{on:{click:t.stopTimer}},[t._v("Stop")])},S=[],E={methods:{stopTimer:function(){clearInterval(this.$parent.$parent.timerObj),this.$parent.$parent.runningTimerState=!1}}},I=E,B=(A("19b8"),Object(c["a"])(I,w,S,!1,null,"f516c91c",null)),k=B.exports,x=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("button",{on:{click:t.resetTimer}},[t._v("Reset")])},y=[],D={methods:{resetTimer:function(){this.$parent.$parent.min=0,this.$parent.$parent.sec=0,this.$parent.$parent.runningTimerState=!1}}},U=D,j=(A("0eb7"),Object(c["a"])(U,x,y,!1,null,"3e512898",null)),R=j.exports,W={components:{StartButton:Q,StopButton:k,ResetButton:R},props:{runningTimerState:Boolean}},O=W,Z=(A("bfb1"),Object(c["a"])(O,m,f,!1,null,null,null)),K=Z.exports,L=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"optionWrap"},[A("input",{directives:[{name:"model",rawName:"v-model",value:t.$parent.min,expression:"$parent.min"}],attrs:{type:"range",max:"60",min:"0"},domProps:{value:t.$parent.min},on:{__r:function(e){return t.$set(t.$parent,"min",e.target.value)}}})])},C=[],G=(A("bb2c"),{}),M=Object(c["a"])(G,L,C,!1,null,"d78d8672",null),T=M.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{alt:"studial logo",src:A("cf05")}})},F=[],Y=(A("d052"),{}),P=Object(c["a"])(Y,N,F,!1,null,"7f2470ed",null),J=P.exports,V={name:"App",components:{Dial:p,SelectOption:T,Buttons:K,Logo:J},data:function(){return{runningTimerState:!1,timerObj:null,min:0,sec:0}},methods:{count:function(){this.sec<=0&&this.min>=1?(this.min--,this.sec=59):this.sec<=0&&this.min<=0?(this.complete(),this.soundAlert()):this.sec--},soundAlert:function(){console.log("soundAlert");var t=0,e=setInterval((function(){var A=new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");A.play(),t++,t>10&&clearInterval(e)}),200)},complete:function(){clearInterval(this.timerObj),window.navigator.vibrate(1500)}}},q=V,z=(A("034f"),Object(c["a"])(q,r,o,!1,null,null,null)),H=z.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(H)}}).$mount("#app")},"85ec":function(t,e,A){},b488:function(t,e,A){"use strict";var n=A("d21e"),r=A.n(n);r.a},bb2c:function(t,e,A){"use strict";var n=A("f0da"),r=A.n(n);r.a},bd24:function(t,e,A){},bd29:function(t,e,A){},bedd:function(t,e,A){},bfb1:function(t,e,A){"use strict";var n=A("2a85"),r=A.n(n);r.a},cf05:function(t,e,A){t.exports=A.p+"img/logo.7095d1de.png"},d052:function(t,e,A){"use strict";var n=A("bd24"),r=A.n(n);r.a},d21e:function(t,e,A){},f0da:function(t,e,A){}});
//# sourceMappingURL=app.644e3d08.js.map