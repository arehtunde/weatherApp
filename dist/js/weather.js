"use strict";var _result=require("./result.js");function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function asyncGeneratorStep(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,a)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){asyncGeneratorStep(o,n,a,i,c,"next",e)}function c(e){asyncGeneratorStep(o,n,a,i,c,"throw",e)}i(void 0)}))}}var main=document.querySelector(".main"),inputfield=document.querySelector(".search_input"),wrapper=document.querySelector(".wrapper"),button=document.querySelector(".btn"),errorInfo=document.createElement("div");errorInfo.classList.add("error"),inputfield.addEventListener("input",(function(){inputfield.value.length>50?(button.setAttribute("disabled","disabled"),inputfield.classList.add("focus")):(button.removeAttribute("disabled"),inputfield.classList.remove("focus"))}));var dialogBox=function(){var e=document.createElement("dialog");e.classList.add("dialog"),main.append(e),e.innerHTML='\n    <h3>You\'ve not provided any input</h3>\n    <p>Please type in a location to get weather report</p>\n    <button class="close">Close</button>\n  ';var t=document.querySelector(".close"),r=document.querySelector(".dialog");r.showModal(),t.addEventListener("click",(function(){r.close(),r.remove(),inputfield.focus()}))},getData=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,c,l,s,u,p,d,y,f,m,h,v,_,b,w,g,k,S,T,A,I,L,x,q,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.querySelector(".load"),a=document.querySelector(".loader"),main.style.display="none",wrapper.innerHTML="",n.style.display="block",a.style.display="block",o="vK6swCrrskXqnuZGn4NT7q7Aj1YuZINH",c=["precipitation","precipitation_type","temp","feels_like","baro_pressure","humidity","dewpoint","visibility","moon_phase","cloud_cover","wind_direction","wind_speed","weather_code"],l="".concat(i="https://api.climacell.co/v3/weather/realtime?","lat=").concat(t.lat,"&lon=").concat(t.lng,"&fields=").concat(c,"&apikey=").concat(o),s=["pm25","pm10","o3","no2","co","so2","epa_aqi","epa_health_concern","epa_primary_pollutant"],u="".concat(i,"lat=").concat(t.lat,"&lon=").concat(t.lng,"&fields=").concat(s,"&apikey=").concat(o),p=["precipitation_probability","temp","feels_like","baro_pressure","humidity","wind_speed","wind_direction","weather_code"],d=new Date,(y=new Date(d)).setHours(y.getHours()+24),f="https://api.climacell.co/v3/weather/forecast/hourly?lat=".concat(t.lat,"&lon=").concat(t.lng,"&start_time=now&end_time=").concat(y.toISOString(),"&fields=").concat(p,"&apikey=").concat(o),m=[].concat(p,["sunrise","sunset"]),h=new Date,(v=new Date(h)).setDate(v.getDate()+10),_="https://api.climacell.co/v3/weather/forecast/daily?lat=".concat(t.lat,"&lon=").concat(t.lng,"&start_time=now&end_time=").concat(v.toISOString(),"&fields=").concat(m,"&apikey=").concat(o),e.prev=22,e.next=25,Promise.all([fetch(l),fetch(u),fetch(f),fetch(_)]);case 25:return b=e.sent,w=_slicedToArray(b,4),g=w[0],k=w[1],S=w[2],T=w[3],e.next=33,Promise.all([g.json(),k.json(),S.json(),T.json()]);case 33:A=e.sent,I=_slicedToArray(A,4),L=I[0],x=I[1],q=I[2],j=I[3],(0,_result.setCurrentTemp)(L,r),(0,_result.setCurrentWeather)(L,r),(0,_result.setAir)(x),(0,_result.setHourly)(q),(0,_result.setDaily)(j),n.style.display="none",a.style.display="none",main.style.display="block",e.next=53;break;case 49:e.prev=49,e.t0=e.catch(22),errorInfo.innerHTML="<h3>Oops!</h3>\n    <p>Fail to Fetch</p>\n    <p>Please try again</p>",wrapper.append(errorInfo);case 53:case"end":return e.stop()}}),e,null,[[22,49]])})));return function(t,r){return e.apply(this,arguments)}}(),getCoord=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,r,n,a,o,i,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=inputfield.value.trim(),r=encodeURI(t),n="https://api.opencagedata.com/geocode/v1/json?q=".concat(r,"&key=173f9f1a42c64005be22065050aa936e&pretty=1&limit=1"),e.prev=3,t){e.next=8;break}dialogBox(),e.next=19;break;case 8:return a=fetch(n),e.next=11,a;case 11:return o=e.sent,e.next=14,o.json();case 14:i=e.sent,c=i.results[0].geometry,l=i.results[0].components,(0,_result.setHeader)(),getData(c,l);case 19:e.next=26;break;case 21:e.prev=21,e.t0=e.catch(3),wrapper.innerHTML="",errorInfo.innerHTML="<h2>".concat(t," Not Found!</h2>\n    <p>Please Enter a valid city name</p>"),wrapper.append(errorInfo);case 26:case"end":return e.stop()}}),e,null,[[3,21]])})));return function(){return e.apply(this,arguments)}}();button.addEventListener("click",getCoord);
//# sourceMappingURL=weather.js.map
