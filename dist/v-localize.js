!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("Localize",[],o):"object"==typeof exports?exports.Localize=o():e.Localize=o()}(this,function(){return function(e){function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}var t={};return o.m=e,o.c=t,o.i=function(e){return e},o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="dist/",o(o.s=2)}([function(e,o,t){"use strict";o.a=function(e){if(e.regex=/([a-zA-Z$]{1,}).*?/g,void 0===e.debug&&(e.debug=!1),void 0!==e.mode&&-1!==["hot","stale"].indexOf(e.mode)||(e.mode="stale"),"hot"===e.mode&&(e.linked=[]),e.available.forEach(function(o){o=o.locale||o,!e.localizations[o]&&e.debug&&console.warn("v-localize:\n  Localizations for locale "+o+" not found.")}),window.localStorage.getItem("localization")){-1===e.available.map(function(e){return e.locale||e}).indexOf(window.localStorage.getItem("localization"))?e.locale=e.default:e.locale=window.localStorage.getItem("localization")}else e.locale=e.default;return window.localStorage.setItem("localization",e.locale),e.fallback||(e.fallback="N/A"),e}},function(e,o,t){"use strict";var n=t(3),l=t(4);o.a=function(e,o){e.prototype.$locale=n.a,e.directive("localize",l.a)}},function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(1),l=t(0);t.d(o,"install",function(){return n.a}),t.d(o,"config",function(){return l.a})},function(e,o,t){"use strict";o.a=function(e){var o=this.$options.localize;if(!e)return o.locale;if(o.available.find(function(o){return o.locale||o===e}))switch(o.locale=e,window.localStorage.setItem("localization",e),o.mode){case"stale":window.location.reload();break;case"hot":o.linked.forEach(function(e){Vue.directive("localize").bind(e.el,e.binding,e.vm)});break;default:o.debug&&console.error("v-localize:\n  Mode could not be determined")}else o.debug&&console.error('v-localize:\n  Locale "'+e+'" not defined in configuration')}},function(e,o,t){"use strict";o.a={bind:function(e,o,t){var n=t.context.$root.$options.localize;"hot"!==n.mode||n.linked.find(function(o){return o.el===e})||n.linked.push({el:e,binding:o,vm:t});try{var l=n.localizations[o.value.locale||n.locale];if(o.value.item.match(n.regex).forEach(function(e){if(void 0===(l=l[e])&&n.debug)throw new Error("Cannot read property for "+e+".")}),o.value.attr)e.setAttribute(o.value.attr,l);else{e.innerHTML=l;var a=n.available.find(function(e){return e.locale===n.locale});a&&(a.orientation&&e.setAttribute("dir",a.orientation),a.font&&(a.font.family&&(e.style.fontFamily=a.font.family),a.font.size&&(e.style.fontSize=a.font.size)))}}catch(t){n.debug&&(console.error("v-localize:\n  Could not find localization for "+o.value.item+" in "+n.locale+" language."),console.error(t)),o.value.attr?e.setAttribute(o.value.attr,n.fallback):e.innerHTML=n.fallback}}}}])});