"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[215],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7945:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={slug:"react1",title:"useEffect\uff0cyou really know it?",authors:["sheldon"],tags:["react"]},l=void 0,u={permalink:"/metaTrip/build/blog/react1",source:"@site/blog/2022-03-08-useEffect.mdx",title:"useEffect\uff0cyou really know it?",description:"- \u8fd9\u7bc7blog\u662f\u5bf9useEffect\u53ca\u76f8\u5173hooks\u7684\u6df1\u5165\u5b66\u4e60\u3002",date:"2022-03-08T00:00:00.000Z",formattedDate:"March 8, 2022",tags:[{label:"react",permalink:"/metaTrip/build/blog/tags/react"}],readingTime:11.255,truncated:!0,authors:[{name:"Sheldon Y Sun",title:"Jser @ Open Source Community",url:"https://github.com/777sunny777",imageURL:"https://github.com/777sunny777.png",key:"sheldon"}],nextItem:{title:"Micro FrontEnd Basic",permalink:"/metaTrip/build/blog/microFE1"}},s={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u7bc7blog\u662f\u5bf9useEffect\u53ca\u76f8\u5173hooks\u7684\u6df1\u5165\u5b66\u4e60\u3002 ")))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},"Using the Effect Hook")," \u5bf9\u4e8e\u5e38\u7528\u7684react hooks\u6211\u4e00\u76f4\u8ba4\u4e3a\u662f\u6bd4\u8f83\u4e86\u89e3\u7684\uff0c\u7136\u800c\u6700\u8fd1\u7684\u4e00\u6b21\u9879\u76ee\u7ec4sharing\uff0c\n\u8ba8\u8bba\u5230\u8fd9\u5757\uff0c\u5c45\u7136\u53d1\u73b0\u8fd9\u4e48\u5e38\u7528\u7684hook\u81ea\u5df1\u7684\u7406\u89e3\u7adf\u7136\u662f\u6709\u504f\u5dee\u7684\uff0c\u8fd8\u9700\u8981\u53bb\u6df1\u5165\u7684\u5b66\u4e60\u4e00\u4e0b\u3002\u8fd9\u7bc7blog\u7531\u6b64\u800c\u6765\u3002"))}m.isMDXComponent=!0}}]);