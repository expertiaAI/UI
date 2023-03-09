!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(globalThis,(()=>(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{Body1:()=>v,Body2:()=>j,Button:()=>c,ButtonLg:()=>E,ButtonMd:()=>S,ButtonSm:()=>I,Caption1:()=>A,Caption2:()=>F,Cards:()=>u,Checkbox1:()=>y,H1:()=>T,H2:()=>U,H3:()=>z,H4:()=>K,H5:()=>W,H6:()=>ee,Subtitle1:()=>ne,Subtitle2:()=>le});const t=require("react");var n=e.n(t);const o=require("tailwind-merge");var a=["children","className","small","secondary","disabled","icon"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}var c=function(e){var r=e.children,t=e.className,c=e.small,i=e.secondary,s=e.disabled,u=(e.icon,function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,a)),f=(0,o.twMerge)(" ".concat(i?"border border-[#6D5DE7] text-[#6D5DE7] hover:text-[#4B4295] hover:border-[#4B4295] bg-white ":" bg-[#6D5DE7] hover:bg-[#4B4295] text-white ","  duration-200 rounded-[4px]  ").concat(c?" text-sm px-4 py-2.5 font-medium ":" text-md  py-[14px] px-6 font-semibold "," "),"".concat(s?" ".concat(i?"border-[#B6AEF3] hover:border-[#B6AEF3] hover:text-[#B6AEF3] text-[#B6AEF3]":"bg-[#B6AEF3] hover:bg-[#B6AEF3]"," cursor-not-allowed"):"  "),t);return n().createElement("button",l({className:f},u),r)},i=["children","className"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}var u=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,i),l=(0,o.twMerge)("p-5 rounded-md shadow-[0px_5px_18px_0px_rgba(100,100,111,0.18)] border-blue-300",t);return n().createElement("div",s({className:l},a),r)};const f=require("@radix-ui/react-checkbox");var b=["className","defaultChecked"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var y=function(e){var r,t,a=e.className,l=e.defaultChecked,c=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,b),i=(r=n().useState(l),t=2,function(e){if(Array.isArray(e))return e}(r)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,l,c=[],i=!0,s=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=a.call(t)).done)&&(c.push(n.value),c.length!==r);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(s)throw o}}return c}}(r,t)||function(e,r){if(e){if("string"==typeof e)return O(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=i[0],u=i[1],y=(0,o.twMerge)(s?"bg-[#6D5DE7] border-solid border-[1px] border-primary2":"bg-gray-100 border-solid border-[1px] border-gray-300","flex justify-center items-center w-4 h-4 text-white rounded",a);return n().createElement("div",{className:""},n().createElement("form",null,n().createElement(f.Root,p({checked:s,onCheckedChange:function(){return u((function(e){return!0!==e}))},className:y},c),n().createElement(f.Indicator,null,n().createElement("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n().createElement("path",{d:"M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))))))},d=["children","className"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}var v=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,d),l=(0,o.twMerge)(" text-md font-inter font-normal",t);return n().createElement("span",m({className:l},a),r)},g=["children","className"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},h.apply(this,arguments)}var j=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,g),l=(0,o.twMerge)(" text-sm font-inter font-normal",t);return n().createElement("span",h({className:l},a),r)},x=["children","className"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},w.apply(this,arguments)}var E=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,x),l=(0,o.twMerge)(" text-md font-inter font-semibold",t);return n().createElement("span",w({className:l},a),r)},P=["children","className"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},N.apply(this,arguments)}var S=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,P),l=(0,o.twMerge)(" text-sm font-inter font-semibold",t);return n().createElement("span",N({className:l},a),r)},k=["children","className"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},M.apply(this,arguments)}var I=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,k),l=(0,o.twMerge)(" text-xs font-inter font-semibold",t);return n().createElement("span",M({className:l},a),r)},B=["children","className"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},C.apply(this,arguments)}var A=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,B),l=(0,o.twMerge)(" text-xs font-inter font-normal",t);return n().createElement("span",C({className:l},a),r)},D=["children","className"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_.apply(this,arguments)}var F=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,D),l=(0,o.twMerge)(" text-xs font-inter font-bold",t);return n().createElement("span",_({className:l},a),r)},H=["children","className"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},L.apply(this,arguments)}var T=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,H),l=(0,o.twMerge)(" text-[64px] text-[#4E4E4E] font-inter leading-[80px] font-bold",t);return n().createElement("span",L({className:l},a),r)},q=["children","className"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},R.apply(this,arguments)}var U=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,q),l=(0,o.twMerge)("text-[56px] text-[#4E4E4E] font-inter font-bold",t);return n().createElement("span",R({className:l},a),r)},Z=["children","className"];function $(){return $=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$.apply(this,arguments)}var z=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,Z),l=(0,o.twMerge)("text-[42px] text-[#4E4E4E] font-inter font-bold",t);return n().createElement("span",$({className:l},a),r)},G=["children","className"];function J(){return J=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},J.apply(this,arguments)}var K=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,G),l=(0,o.twMerge)("text-4xl text-[#4E4E4E] font-inter font-semibold",t);return n().createElement("span",J({className:l},a),r)},Q=["children","className"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},V.apply(this,arguments)}var W=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,Q),l=(0,o.twMerge)("text-3xl text-[#4E4E4E] font-inter font-semibold",t);return n().createElement("span",V({className:l},a),r)},X=["children","className"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Y.apply(this,arguments)}var ee=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,X),l=(0,o.twMerge)("text-2xl text-[#4E4E4E] font-inter font-semibold",t);return n().createElement("span",Y({className:l},a),r)},re=["children","className"];function te(){return te=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},te.apply(this,arguments)}var ne=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,re),l=(0,o.twMerge)(" text-md font-semibold",t);return n().createElement("span",te({className:l},a),r)},oe=["children","className"];function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ae.apply(this,arguments)}var le=function(e){var r=e.children,t=e.className,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,oe),l=(0,o.twMerge)(" text-sm  font-semibold",t);return n().createElement("span",ae({className:l},a),r)};return r})()));