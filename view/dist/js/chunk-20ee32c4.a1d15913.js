(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20ee32c4"],{"485e":function(t,e,a){},5976:function(t,e,a){"use strict";var i=a("9653"),o=a.n(i);o.a},"61f7":function(t,e,a){"use strict";function i(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate(),o=t.getHours(),n=t.getMinutes(),s=t.getSeconds(),c={date1:"".concat(e,"年").concat(a,"月").concat(i,"日"),date2:"".concat(e,"/").concat(a,"/").concat(i),date3:"".concat(e,"年").concat(a,"月").concat(i,"日/").concat(o,":").concat(n,":").concat(s),date4:"".concat(o,":").concat(n,":").concat(s)};return c}a.d(e,"a",(function(){return i}))},"8c25":function(t,e,a){"use strict";var i=a("485e"),o=a.n(i);o.a},9653:function(t,e,a){},"9f7e":function(t,e,a){a("f9a5")&&"g"!=/./g.flags&&a("d3d8").f(RegExp.prototype,"flags",{configurable:!0,get:a("e7a1")})},b27f:function(t,e,a){(function(t){var i="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function n(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new n(o.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new n(o.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},a("de8a"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,a("7bc3"))},cc1d:function(t,e,a){"use strict";a("9f7e");var i=a("8cac"),o=a("e7a1"),n=a("f9a5"),s="toString",c=/./[s],r=function(t){a("a6d5")(RegExp.prototype,s,t,!0)};a("0cc1")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?r((function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?o.call(t):void 0)})):c.name!=s&&r((function(){return c.call(this)}))},de8a:function(t,e,a){(function(t,e){(function(t,a){"use strict";if(!t.setImmediate){var i,o=1,n={},s=!1,c=t.document,r=Object.getPrototypeOf&&Object.getPrototypeOf(t);r=r&&r.setTimeout?r:t,"[object process]"==={}.toString.call(t.process)?u():f()?h():t.MessageChannel?g():c&&"onreadystatechange"in c.createElement("script")?v():w(),r.setImmediate=l,r.clearImmediate=p}function l(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),a=0;a<e.length;a++)e[a]=arguments[a+1];var s={callback:t,args:e};return n[o]=s,i(o),o++}function p(t){delete n[t]}function m(t){var e=t.callback,i=t.args;switch(i.length){case 0:e();break;case 1:e(i[0]);break;case 2:e(i[0],i[1]);break;case 3:e(i[0],i[1],i[2]);break;default:e.apply(a,i);break}}function d(t){if(s)setTimeout(d,0,t);else{var e=n[t];if(e){s=!0;try{m(e)}finally{p(t),s=!1}}}}function u(){i=function(t){e.nextTick((function(){d(t)}))}}function f(){if(t.postMessage&&!t.importScripts){var e=!0,a=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=a,e}}function h(){var e="setImmediate$"+Math.random()+"$",a=function(a){a.source===t&&"string"===typeof a.data&&0===a.data.indexOf(e)&&d(+a.data.slice(e.length))};t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),i=function(a){t.postMessage(e+a,"*")}}function g(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;d(e)},i=function(e){t.port2.postMessage(e)}}function v(){var t=c.documentElement;i=function(e){var a=c.createElement("script");a.onreadystatechange=function(){d(e),a.onreadystatechange=null,t.removeChild(a),a=null},t.appendChild(a)}}function w(){i=function(t){setTimeout(d,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,a("7bc3"),a("4c39"))},e7a1:function(t,e,a){"use strict";var i=a("8cac");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ec5b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map"},[a("md-notice-bar",{attrs:{mode:"closable",icon:"volumn",scrollable:""}},[t._v("告示：该页面为个人学习演示项目，不涉及任何商业应用，仅限技术学习请勿传播，开发者邮箱:man@wwenj.com")]),a("div",{attrs:{id:"map"}}),a("div",{staticClass:"map-tool"},[a("p",{on:{click:t.popupShowOnClick}},[a("svg-icon",{attrs:{"icon-class":"city"}}),t.mapData.district?a("span",[t._v(t._s(t.mapData.district))]):t.mapData.city?a("span",[t._v(t._s(t.mapData.city))]):a("span",[t._v("未知城市")])],1),a("p",{on:{click:t.mapPopupShowOnClick}},[a("svg-icon",{attrs:{"icon-class":"map"}}),a("span",[t._v("地图")])],1),a("p",[a("svg-icon",{attrs:{"icon-class":"loaction"}}),a("span",[t._v("定位")])],1)]),a("div",{staticClass:"buttonDom",attrs:{id:"buttonDom"},on:{click:t.loactionOnClick}}),a("div",{staticClass:"map-start",staticStyle:{"z-index":"10009"},on:{click:t.startGoOnClick}},[t._v(t._s(t.startBtn))]),a("md-popup",{staticStyle:{"z-index":"10000"},attrs:{position:"top"},model:{value:t.addressPopupShow,callback:function(e){t.addressPopupShow=e},expression:"addressPopupShow"}},[a("div",{staticClass:"popupText"},[a("md-field",[a("md-cell-item",{attrs:{title:"当前地址"}},[a("p",{staticStyle:{color:"#858B9C"},attrs:{slot:"children"},slot:"children"},[t._v(t._s(t.mapAddress))])])],1)],1)]),a("md-popup",{staticStyle:{"z-index":"10000"},attrs:{position:"top"},model:{value:t.mapPopupShow,callback:function(e){t.mapPopupShow=e},expression:"mapPopupShow"}},[a("div",{staticClass:"popupText"},[a("md-field",[a("md-field-item",{attrs:{title:"地图",solid:""}},[a("md-radio",{attrs:{name:"dark",label:"幻影黑",inline:""},model:{value:t.marriage,callback:function(e){t.marriage=e},expression:"marriage"}}),a("md-radio",{attrs:{name:"normal",label:"标准",inline:""},model:{value:t.marriage,callback:function(e){t.marriage=e},expression:"marriage"}}),a("md-radio",{attrs:{name:"light",label:"月光银",inline:""},model:{value:t.marriage,callback:function(e){t.marriage=e},expression:"marriage"}}),a("md-radio",{attrs:{name:"whitesmoke",label:"远山黛",inline:""},model:{value:t.marriage,callback:function(e){t.marriage=e},expression:"marriage"}}),a("md-radio",{attrs:{name:"grey",label:"雅士灰",inline:""},model:{value:t.marriage,callback:function(e){t.marriage=e},expression:"marriage"}}),a("md-radio",{attrs:{name:"macaron",label:"马卡龙",inline:""},model:{value:t.marriage,callback:function(e){t.marriage=e},expression:"marriage"}}),a("md-radio",{attrs:{name:"blue",label:"靛青蓝",inline:""},model:{value:t.marriage,callback:function(e){t.marriage=e},expression:"marriage"}}),a("md-radio",{attrs:{name:"darkblue",label:"极夜蓝",inline:""},model:{value:t.marriage,callback:function(e){t.marriage=e},expression:"marriage"}})],1)],1)],1)]),a("transition",{attrs:{name:"fadeStart"}},[t.stratShow?a("div",{staticClass:"strat-go",staticStyle:{"z-index":"10008"},attrs:{id:t.isStratGo?"stratGo":""}},[a("div",{staticClass:"strat-go-top"},[a("p",[a("span",[t._v(t._s(0===t.distance?"0.00":t.distance))]),t._v(" 公里\n        ")])]),a("div",{staticClass:"strat-go-detail"},[a("p",[a("span",[t._v(t._s(t.timerNow))]),a("br"),a("span",[t._v("总计时间")])]),a("p",[a("span",[t._v(t._s(t.speedNow))]),a("br"),a("span",[t._v("平均配速(km/h)")])]),a("p",[a("span",[t._v(t._s(t.kcalNow))]),a("br"),a("span",[t._v("消耗能量(k)")])])]),t.isStratGo?a("p",{staticClass:"strat-go-markText"},[t._v("备注："+t._s(t.markText))]):t._e(),a("md-field",{directives:[{name:"show",rawName:"v-show",value:!t.isStratGo,expression:"!isStratGo"}],staticClass:"strat-go-mark"},[a("md-input-item",{attrs:{title:"备注",placeholder:"输入此次行程备注，不超过40字",maxlength:40},model:{value:t.markText,callback:function(e){t.markText=e},expression:"markText"}})],1)],1):t._e()])],1)},o=[],n=(a("efce"),a("ed8b"),a("cc1d"),a("e4e2")),s=(a("4634"),a("7090")),c=a("b27f"),r=a("61f7"),l=a("08c1");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={name:"mapLocation",data:function(){return{marriage:"normal",startBtn:"开始",map:null,watchID:null,mapData:{},mapAddress:"地点未知，请尝试重新定位或刷新页面",addressPopupShow:!1,mapPopupShow:!1,stratShow:!1,isStratGo:!1,timerObj:null,timer:[0,0,0],timeAll:0,markText:"",geolocationData:[],distance:0,tripType:"徒步",loactionFail:!0}},computed:{timerNow:function(){var t=[];return this.timer.forEach((function(e,a){t[a]=e<10?"0".concat(e):e})),"00"===t[0]?"".concat(t[1],":").concat(t[2]):"".concat(t[0],":").concat(t[1],":").concat(t[2])},speedNow:function(){var t=this.timeAll/3600,e=(this.distance/t).toFixed(2);return(isNaN(e)||e>1e6)&&(e=0),"".concat(e)},kcalNow:function(){return(95.2*this.distance).toFixed(1)}},watch:{marriage:function(t){this.map.setMapStyle("amap://styles/".concat(t))}},mounted:function(){this.tripType=this.$route.params.tripType,this.tripType?(this.createTrip(),this.ToastHide()):this.$router.push({path:"/trip"})},methods:m({loactionOnClick:function(){s["h"].loading("定位中...")},popupShowOnClick:function(){this.addressPopupShow=!0},mapPopupShowOnClick:function(){this.mapPopupShow=!0},startGoOnClick:function(){if(this.loactionFail)if("开始"===this.startBtn)this.addressPopupShow=!1,this.mapPopupShow=!1,this.stratShow=!0,this.watchMap(),this.startBtn="结束",this.timeSwitch();else if("结束"===this.startBtn){if(Object(c["clearInterval"])(this.timerObj),this.isStratGo=!0,this.locationOnDelete(),this.mapPath(),this.startBtn="退出",0===this.distance)return void s["h"].failed("当前移动距离为0，数据不被上传");this.saveTripDataAjax()}else this.map.destroy(),this.timer=[0,0,0],this.timeAll=0,this.distance=0,this.geolocationData=[],this.startBtn="开始",this.$router.push({path:"/trip"});else s["h"].failed("定位失败，请检查权限或尝试刷新")},watchMap:function(){console.log("开始实时定位========");var t=this;this.watchID=navigator.geolocation.watchPosition((function(e){var a=[e.coords.longitude,e.coords.latitude];console.log("实时定位中---");var i=t.geolocationData.length>0?t.geolocationData[t.geolocationData.length-1].toString():"",o=a.toString();i===o?console.log("定位距离过近"):window.AMap.convertFrom(a,"gps",(function(e,a){if("ok"===a.info){var i=[a.locations[0].Q,a.locations[0].P];console.log(i),t.geolocationData.push(i),t.mapLoactionDistance(t.geolocationData)}else console.log("轨迹路径经纬度转换失败！！")}))}),(function(){s["h"].failed("实时定位出错，请尝试刷新"),t.mapOnDelete()}))},createTrip:function(){s["h"].loading("加载中...");var t=this,e=document.getElementById("buttonDom");this.map=new window.AMap.Map("map",{resizeEnable:!0,zoom:11,center:[126.56092959999998,43.920187299999995]}),this.map.plugin(["AMap.Geolocation","AMap.ControlBar"],(function(){var a=new window.AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonPosition:"LT",buttonDom:e,buttonOffset:new window.AMap.Pixel(100,20),zoomToAccuracy:!0});t.map.addControl(a),a.getCurrentPosition((function(t,e){})),window.AMap.event.addListener(a,"complete",t.localOnComplete),window.AMap.event.addListener(a,"error",t.localOnError),t.map.addControl(new window.AMap.ControlBar)})),this.map.on("complete",(function(){console.log("地图加载完成")}))},mapPath:function(){var t=this,e=this.geolocationData.slice(),a=new window.AMap.Marker({map:t.map,position:e[0],icon:"https://webapi.amap.com/images/car.png",offset:new window.AMap.Pixel(-26,-13),autoRotation:!0,angle:-90}),i=(new window.AMap.Polyline({map:t.map,path:e,showDir:!0,strokeColor:"#28F",strokeWeight:6}),new window.AMap.Polyline({map:t.map,strokeColor:"red",strokeWeight:6}));a.on("moving",(function(t){i.setPath(t.passedPath)})),t.map.setFitView(),a.moveAlong(e,200)},mapLoactionDistance:function(t){var e=[];t.forEach((function(t){var a=new window.AMap.LngLat(t[0],t[1]);e.push(a)})),this.distance=(window.AMap.GeometryUtil.distanceOfLine(e)/1e3).toFixed(2),console.log(this.distance+"公里")},localOnComplete:function(t){this.loactionFail=!0,console.log("手动定位成功"),console.log(t),this.mapData=t.addressComponent,this.mapAddress=t.formattedAddress,s["h"].hide()},localOnError:function(t){this.loactionFail=!1,console.log("手动定位出错"),console.log(t),s["h"].hide(),s["h"].failed("定位失败请检查权限或尝试刷新")},locationOnDelete:function(){var t=this;navigator.geolocation.clearWatch(t.watchID),console.log("停止实时定位")},timeSwitch:function(){var t=this;this.timerObj=Object(c["setInterval"])((function(){t.timeAll+=1,59===t.timer[1]?(t.timer[1]=0,t.$set(t.timer,0,t.timer[0]+1)):59===t.timer[2]?(t.timer[2]=0,t.$set(t.timer,1,t.timer[1]+1)):t.$set(t.timer,2,t.timer[2]+1)}),1e3)},ToastHide:function(){setTimeout((function(){s["h"].hide()}),1e4)},saveTripDataAjax:function(){var t=this,e={type:"trip",tripType:"".concat(this.tripType,"出行"),distance:this.distance,date:Object(r["a"])().date2,time:this.timerNow,trajectory:JSON.stringify(this.geolocationData),Calorie:this.kcalNow,speed:this.speedNow,mark:this.markText||"未备注"};console.log(e),this.$http.get("/trip/addTrip",e).then((function(e){console.log(e),200===e.data.code?(s["h"].succeed("本次出行记录已上传"),t.setUserData(e.data.data)):s["h"].failed("记录上传出错")}))}},Object(l["b"])(["setUserData"]))},u=d,f=(a("5976"),a("8c25"),a("4e82")),h=Object(f["a"])(u,i,o,!1,null,"60f5cf4e",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-20ee32c4.a1d15913.js.map