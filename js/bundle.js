!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8)},function(e,t,n){},function(e,t){function n(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,l=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o,i=document.querySelectorAll(".swiper");document.querySelector(".swiper-wrapper"),document.querySelectorAll(".swiper-slide"),window.innerWidth;function l(){if(window.innerWidth<=767){var e,t=n(i);try{for(t.s();!(e=t.n()).done;)swiper=e.value,swiper.dataset.mobile="true",o=new Swiper(swiper,{slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}})}catch(e){t.e(e)}finally{t.f()}}if(window.innerWidth>767){var r,l=n(i);try{for(l.s();!(r=l.n()).done;)swiper=r.value,swiper.dataset.mobile="false",swiper.classList.contains("swiper-initialized")&&o.destroy()}catch(e){l.e(e)}finally{l.f()}}}l(),window.addEventListener("resize",(function(){l()}))},function(e,t){var n=document.querySelector(".section__button"),r=document.querySelector(".section__description");n.addEventListener("click",(function(){r.classList.toggle("hide"),r.classList.toggle("description-size");n.textContent.includes("Читать далее")?(n.textContent="Скрыть",n.classList.toggle("rotate")):(n.textContent="Читать далее",n.classList.toggle("rotate"))}))},function(e,t){var n,r=document.querySelector(".swiper"),o=r.offsetWidth,i=(document.querySelectorAll(".swiper-slide"),document.querySelectorAll(".tabs__slide.brand")),l=document.querySelectorAll(".tabs__slide.software"),a=document.querySelector(".tabs__button.brand"),c=document.querySelector(".tabs__button.software");function u(){f(i),d(i,a)}function s(){f(l),d(l,c)}function f(e){if(window.innerWidth>=768){for(var t=0;t<e.length;t++)n=Math.floor(o/e[t].offsetWidth);if(e===l)for(var r=n;r<e.length;r++)e[r].classList.add("tab-hide");for(var i=2*n;i<e.length;i++)e[i].classList.add("tab-hide")}}function d(e,t){t.addEventListener("click",(function(){if(e===l)for(var r=n;r<e.length;r++)e[r].classList.toggle("tab-hide");else for(var o=2*n;o<e.length;o++)e[o].classList.toggle("tab-hide");t.textContent.includes("Показать все")?(t.textContent="Скрыть",t.classList.toggle("rotate")):(t.textContent="Показать все",t.classList.toggle("rotate"))}))}u(),s(),r.addEventListener("resize",(function(){u()})),r.addEventListener("resize",(function(){s()}))},function(e,t){var n=document.querySelector(".mobile"),r=document.querySelector(".page"),o=document.querySelector(".button-burger"),i=document.querySelector(".mobile--close");o.addEventListener("click",(function(e){e.preventDefault(),n.classList.add("mobile--show"),r.classList.add("page--blur")})),i.addEventListener("click",(function(e){e.preventDefault(),n.classList.remove("mobile--show"),r.classList.remove("page--blur")})),r.addEventListener("touchend",(function(){n.classList.contains("mobile--show")&&(n.classList.remove("mobile--show"),r.classList.remove("page--blur"))}));for(var l=document.querySelectorAll(".mobile-link"),a=function(e){l[e].addEventListener("click",(function(t){t.preventDefault(),l[e].classList.toggle("list--active")}))},c=0;c<l.length;c++)a(c)},function(e,t){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r,o=document.querySelector(".mobile"),i=document.querySelectorAll(".button-chat"),l=document.querySelector(".modal-feedback"),a=document.querySelector(".page"),c=document.querySelector(".feedback--close"),u=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,l=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw i}}}}(i);try{for(u.s();!(r=u.n()).done;)feedbackOpenButton=r.value,feedbackOpenButton.addEventListener("click",(function(){l.classList.add("feedback--show"),a.classList.add("page--blur")}))}catch(e){u.e(e)}finally{u.f()}c.addEventListener("click",(function(){l.classList.remove("feedback--show"),!o.classList.contains("mobile--show")&&a.classList.contains("page--blur")&&a.classList.remove("page--blur")})),a.addEventListener("touchstart",(function(){l.classList.remove("feedback--show"),a.classList.remove("page--blur")}))},function(e,t){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r,o=document.querySelector(".mobile"),i=document.querySelectorAll(".button-callback"),l=document.querySelector(".modal-call"),a=document.querySelector(".page"),c=document.querySelector(".call--close"),u=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,l=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw i}}}}(i);try{for(u.s();!(r=u.n()).done;)callOpenButton=r.value,callOpenButton.addEventListener("click",(function(){l.classList.add("call--show"),a.classList.add("page--blur")}))}catch(e){u.e(e)}finally{u.f()}c.addEventListener("click",(function(){l.classList.remove("call--show"),!o.classList.contains("mobile--show")&&a.classList.contains("page--blur")&&a.classList.remove("page--blur")})),a.addEventListener("touchstart",(function(){l.classList.remove("call--show"),a.classList.remove("page--blur")}))}]);
//# sourceMappingURL=bundle.js.map