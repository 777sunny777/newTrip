"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[263],{3905:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return m}});var n=o(7294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},p=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(o),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(k,s(s({ref:e},p),{},{components:o})):n.createElement(k,s({ref:e},p))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,s=new Array(a);s[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,s[1]=l;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7354:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return m}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],l={slug:"storybook-usage1",title:"How to use Storybook 1",authors:["sheldon"],tags:["storybook","react"]},i=void 0,c={permalink:"/metaTrip/build/blog/storybook-usage1",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-01-storybook1.mdx",source:"@site/blog/2022-01-01-storybook1.mdx",title:"How to use Storybook 1",description:"- \u8fd9\u7bc7blog\u662fstorybook\u7684\u5165\u95e8\u6559\u7a0b\u5e76\u4e14\u5305\u542b\u4e86\u6211\u4f7f\u7528storybook 3\u5e74\u591a\u7684\u4e00\u4e9b\u4f53\u9a8c",date:"2022-01-01T00:00:00.000Z",formattedDate:"January 1, 2022",tags:[{label:"storybook",permalink:"/metaTrip/build/blog/tags/storybook"},{label:"react",permalink:"/metaTrip/build/blog/tags/react"}],readingTime:9.305,truncated:!1,authors:[{name:"Sheldon Y Sun",title:"Jser @ Open Source Community",url:"https://github.com/777sunny777",imageURL:"https://github.com/777sunny777.png",key:"sheldon"}],prevItem:{title:"\u57fa\u91d1\u57fa\u7840(\u4e00)",permalink:"/metaTrip/build/blog/funding-basic1"}},p={authorsImageUrls:[void 0]},d=[{value:"0. Storybook\u9875\u9762\u5e03\u5c40",id:"0-storybook\u9875\u9762\u5e03\u5c40",children:[{value:"Sidebar and Canvas",id:"sidebar-and-canvas",children:[],level:3},{value:"Shortcuts",id:"shortcuts",children:[],level:3},{value:"Toolbar",id:"toolbar",children:[],level:3},{value:"Docs",id:"docs",children:[],level:3},{value:"Addons",id:"addons",children:[],level:3}],level:2},{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5",children:[],level:2},{value:"2. Write stories",id:"2-write-stories",children:[{value:"2-1 Using args",id:"2-1-using-args",children:[],level:3},{value:"2-2 Remix two stories",id:"2-2-remix-two-stories",children:[],level:3},{value:"2-3 Controls",id:"2-3-controls",children:[],level:3},{value:"2-4 Action",id:"2-4-action",children:[],level:3},{value:"2-5 Using parameters",id:"2-5-using-parameters",children:[],level:3},{value:"2-6 Using decorators",id:"2-6-using-decorators",children:[],level:3}],level:2},{value:"3. Write Docs",id:"3-write-docs",children:[{value:"3-1 \u5229\u7528component parameters",id:"3-1-\u5229\u7528component-parameters",children:[{value:"\u4f18\u70b9\uff1a",id:"\u4f18\u70b9",children:[],level:4},{value:"\u7f3a\u70b9\uff1a",id:"\u7f3a\u70b9",children:[],level:4}],level:3},{value:"3-2 mdx",id:"3-2-mdx",children:[{value:"\u4f18\u70b9\uff1a",id:"\u4f18\u70b9-1",children:[],level:4},{value:"\u7f3a\u70b9\uff1a",id:"\u7f3a\u70b9-1",children:[],level:4}],level:3},{value:"3-3 \u5229\u7528docs parameters",id:"3-3-\u5229\u7528docs-parameters",children:[{value:"\u4f18\u70b9\uff1a",id:"\u4f18\u70b9-2",children:[],level:4},{value:"\u7f3a\u70b9\uff1a",id:"\u7f3a\u70b9-2",children:[],level:4}],level:3}],level:2}],u={toc:d};function m(t){var e=t.components,o=(0,r.Z)(t,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u8fd9\u7bc7blog\u662fstorybook\u7684\u5165\u95e8\u6559\u7a0b\u5e76\u4e14\u5305\u542b\u4e86\u6211\u4f7f\u7528storybook 3\u5e74\u591a\u7684\u4e00\u4e9b\u4f53\u9a8c "),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u9488\u5bf9React\u9879\u76ee"),(0,a.kt)("li",{parentName:"ul"},"\u8fdb\u4e00\u6b65\u5b66\u4e60\uff0c\u8bf7\u8bbf\u95ee",(0,a.kt)("a",{parentName:"li",href:"https://storybook.js.org/"},"Storybook\u5b98\u7f51"))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation."),(0,a.kt)("p",null,"\u4eceStorybook\u7684\u5b98\u65b9\u63cf\u8ff0\u6765\u770b\uff0c\u4ed6\u662f\u7528\u4e8e\u5feb\u901f\u6784\u5efaUI demo\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u7528\u6237\u5feb\u901f\u6784\u5efa\u9875\u9762\uff1b\u5e76\u4e14\u6709\u5f88\u597d\u7684\u8bed\u6cd5\u529f\u80fd\uff0c\u8f7b\u677e\u4e66\u5199demo\uff1b\u8fd8\u6709\u5f88\u597d\u7684\u8f85\u52a9\u63d2\u4ef6\uff0c\n\u6bd4\u5982demo\u7684\u6587\u6863\u8f85\u52a9\uff0c\u53c2\u6570\u8f85\u52a9\uff0c\u8fd8\u6709accessibility\u8f85\u52a9\u6d4b\u8bd5\u7b49\u7b49\u3002\u8fd9\u4e00\u5207\u51e0\u4e4e\u4fc3\u4f7f\u5b83\u6210\u4e3a\u4e86\u9879\u76eedemo\u7684\u6700\u597d\u9009\u62e9\u3002\u56e0\u4e3a\u6211\u7684\u9879\u76ee\u6d89\u53ca\u5230\u7ec4\u4ef6\u5e93\u7684\u5f00\u53d1\uff0c\n\u6240\u4ee5storybook\u5c31\u66f4\u663e\u5f97\u5408\u9002\u548c\u91cd\u8981\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"version: v6.4.9(Currently) and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/storybookjs/storybook/releases"},"Latest"))))),(0,a.kt)("p",null,"Storybook \u4ee3\u7801\u5e93\u66f4\u65b0\u5f88\u6d3b\u8dc3\uff0c\u51e0\u4e4e\u4e00\u5e74\u4e00\u6b21major\u7248\u672c\u7684\u66f4\u65b0\uff0c\u603b\u4f1a\u5e26\u6765\u4e9b\u65b0\u7684\u529f\u80fd\uff0c\u8fd9\u7bc7blog\u6211\u4eec\u90a3\u76ee\u524d\u6700\u65b0\u7248\u672cv6.4.9 \u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e"),(0,a.kt)("h2",{id:"0-storybook\u9875\u9762\u5e03\u5c40"},"0. Storybook\u9875\u9762\u5e03\u5c40"),(0,a.kt)("h3",{id:"sidebar-and-canvas"},"Sidebar and Canvas"),(0,a.kt)("video",{controls:"controls",autoPlay:"autoplay",loop:"loop",style:{width:"100%"}},(0,a.kt)("source",{src:"https://storybook.js.org/f818682edbbcdf2c04093f633aa36761/example-browse-all-stories-optimized.mp4",type:"video/mp4"})),(0,a.kt)("h3",{id:"shortcuts"},"Shortcuts"),(0,a.kt)("video",{controls:"controls",autoPlay:"autoplay",loop:"loop",style:{width:"100%"}},(0,a.kt)("source",{src:"https://storybook.js.org/b398f68ed8889feed0a52f077510efcf/storybook-keyboard-shortcuts-optimized.mp4",type:"video/mp4"})),(0,a.kt)("h3",{id:"toolbar"},"Toolbar"),(0,a.kt)("video",{controls:"controls",autoPlay:"autoplay",loop:"loop",style:{width:"100%"}},(0,a.kt)("source",{src:"https://storybook.js.org/8b083907d74e7f2b9a298e5f324cc751/toolbar-walkthrough-optimized.mp4",type:"video/mp4"})),(0,a.kt)("h3",{id:"docs"},"Docs"),(0,a.kt)("video",{controls:"controls",autoPlay:"autoplay",loop:"loop",style:{width:"100%"}},(0,a.kt)("source",{src:"https://storybook.js.org/07234fedf00ba418879c443de0764c1c/toolbar-docs-tab-optimized.mp4",type:"video/mp4"})),(0,a.kt)("h3",{id:"addons"},"Addons"),(0,a.kt)("video",{controls:"controls",autoPlay:"autoplay",loop:"loop",style:{width:"100%"}},(0,a.kt)("source",{src:"https://storybook.js.org/946b2f4bdb006e8475d21202d68b9eec/addons-walkthrough-optimized.mp4",type:"video/mp4"})),(0,a.kt)("h2",{id:"1-\u5b89\u88c5"},"1. \u5b89\u88c5"),(0,a.kt)("p",null,"Storybook \u7684",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/get-started/install"},"\u5b89\u88c5"),"\u5f88\u667a\u80fd\uff0cnpx sb init \u5c31\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u5b89\u88c5\uff0c\u4f46\u662f\u8981\u6ce8\u610f\u7684\u662f\u5b89\u88c5\u4e4b\u524d\u4f60\u5fc5\u987b\u5df2\u7ecf\u6709\u9879\u76ee\u6846\u67b6\u7684\u4f9d\u8d56\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Storybook will look into your project's dependencies during its install process and provide you with the best configuration available."),(0,a.kt)("li",{parentName:"ul"},"Storybook\u53ea\u662f\u9700\u8981\u9879\u76ee\u6846\u67b6\u4f9d\u8d56\uff0c\u6bd4\u5982react\u5c31\u76f8\u5f53\u4e8e\u4e00\u4e2a\u6807\u8bc6\uff0c\u4f60\u4e0d\u9700\u8981\u5199\u4efb\u4f55\u6846\u67b6\u4ee3\u7801\u5728\u9879\u76ee\u4e2d")))),(0,a.kt)("h2",{id:"2-write-stories"},"2. Write stories"),(0,a.kt)("p",null,"Story\u5c31\u662f\u4e00\u4e2ademo case\uff0cstories file\u5c31\u662f\u5b58\u653e\u4e00\u7c7bdemo cases\u7684\u96c6\u5408\uff0c\u8fd9\u4e9bcases\u6839\u636etitle\u5206\u6210\u4e0d\u540c\u7684\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u8fd9\u4e2a\u4e00\u4e2a\u5c55\u793abutton\u7684stories file\n// Button.stories.js|jsx\n\nimport React from 'react';\n\nimport { Button } from './Button';\n\nexport default {\n  \n  // title\u662f\u8fd9\u4e2a\u96c6\u5408\u7684\u540d\u79f0\uff0c\u540c\u65f6\u4e5f\u7528\u4e8estorybook \u5bfc\u822a\u680f\u7684\u7ed3\u6784\n  // \u6bd4\u5982\u53ef\u4ee5\u6709\u5c42\u7ea7\u5173\u7cfb\uff0c'Button/Responsive'\n\n  title: 'Button',\n  \n  // component \u5c5e\u6027\u53ef\u4ee5\u4e0d\u5199, \u540e\u9762\u89e3\u91ca\u6587\u6863\u7684\u65f6\u5019\u518d\u8be6\u7ec6\u8bf4\n  // Storybook uses the component key in the story file\u2019s default export to extract the component's description and props.\n  \n  component: Button,\n};\n\n// \u8fd9\u91cc\u901a\u8fc7export\u5bfc\u51fa\u5c31\u751f\u6210\u4e86\u4e00\u4e2ademo case page\n// \u8def\u5f84\u5c31\u662f\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d Button\u4e0b\u9762\u7684Primary\n\nexport const Primary = () => <Button primary>Button</Button>;\n\n// \u8fd9\u91cc\u53ef\u4ee5\u6539\u53d8case\u7684\u547d\u540d\uff0c\u9ed8\u8ba4\u662ffunction name\nPrimary.storyName = 'I am the primary';\n\nexport const Secondary = () => <Button backgroundColor=\"#ff0\" label=\"\ud83d\ude04\ud83d\udc4d\ud83d\ude0d\ud83d\udcaf\" />;\nexport const Tertiary = () => <Button backgroundColor=\"#ff0\" label=\"\ud83d\udcda\ud83d\udcd5\ud83d\udcc8\ud83e\udd13\" />;\n\n")),(0,a.kt)("h3",{id:"2-1-using-args"},"2-1 Using args"),(0,a.kt)("p",null,"\u4f7f\u7528args\u662f\u6700\u65b0\u7248\u672c\u4e2dstorybook \u6bd4\u8f83\u5efa\u8bae\u7684\u5199\u6cd5\uff0c\u4e3b\u8981\u7684\u4f18\u70b9\u662f\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\uff0c\u7528\u6cd5\u4e0a\u4e5f\u6bd4\u8f83\u6709\u7ae0\u53ef\u5faa\uff0c\u4fbf\u4e8e\u7ba1\u7406\u3002\n\u4e0d\u8fc7\u6839\u636e\u6211\u7684\u7ecf\u9a8c\u8fd8\u662f\u8981\u770b\u4f60\u7528storybook\u7684target\u662f\u4ec0\u4e48\uff0c\u5982\u679c\u53ea\u662ffor show UI demo\uff0c\u4f7f\u7528args \u7684\u65b9\u5f0f\u662f\u53ef\u884c\u7684\u3002\n\u4f46\u662f\u6bd4\u5982\u505a\u7ec4\u4ef6\u5e93\uff0cshow UI demo\u53ea\u662f\u4e00\u4e2a\u65b9\u9762\uff0cshow demo code for users \u4e5f\u662f\u5f88\u91cd\u8981\u7684\u4e00\u70b9\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7storybook\u7684cases\u53ef\u4ee5\u8ba9\u7528\u6237\n\u76f4\u89c2\u7684\u660e\u767ddemo \u8981\u600e\u4e48\u5199\uff0c\u751a\u81f3\u53ea\u9700\u8981\u4ed6copy/paste\u5c31\u53ef\u4ee5\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5c3d\u91cf\u5c11\u7684\u4f7f\u7528storybook\u63d0\u4f9b\u7684\u4e00\u4e9b\u63a5\u53e3\u65b9\u6cd5\uff0c\u51cf\u5c11storybook\n\u5bf9\u4f60\u7684demo case code \u7684\u5e72\u6270\u3002"),(0,a.kt)("p",null,"\u4efb\u4f55\u65f6\u5019\uff0c\u6211\u4eec\u90fd\u8981\u660e\u767d\u7528\u6237\u5173\u5fc3\u7684\u662f\u4ec0\u4e48\uff1f\u800c\u4e0d\u662f\u76f2\u76ee\u7684\u6c42\u65b0\u6c42\u53d8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Button } from './Button';\n\nexport default {\n  title: 'Button',\n  component: Button,\n};\n\n//\ud83d\udc47 We create a \u201ctemplate\u201d of how args map to rendering\nconst Template = (args) => <Button {...args} />;\n\n// \ud83d\udc47 Each story then reuses that template\nexport const Primary = Template.bind({});\nPrimary.args = { background: '#ff0', label: 'Button' };\n\nexport const Secondary = Template.bind({});\nSecondary.args = { ...Primary.args, label: '\ud83d\ude04\ud83d\udc4d\ud83d\ude0d\ud83d\udcaf' };\n\nexport const Tertiary = Template.bind({});\nTertiary.args = { ...Primary.args, label: '\ud83d\udcda\ud83d\udcd5\ud83d\udcc8\ud83e\udd13' };\n")),(0,a.kt)("h3",{id:"2-2-remix-two-stories"},"2-2 Remix two stories"),(0,a.kt)("p",null,"Story\u662f\u53ef\u4ee5\u76f8\u4e92\u5f15\u7528\u7684\uff0c\u4e3b\u8981\u4e5f\u662f\u4e3a\u4e86\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\uff0c\u4fdd\u6301\u4e00\u81f4\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Button } from './Button';\nimport * as TextInputStories from './TextInput.stories';\n\nexport default {\n  title: 'Button',\n  component: Button,\n};\n\nexport const TestRemix = () => <>\n  <TextInputStories.Default />\n  <Button primary>Button</Button>\n<>\n\n")),(0,a.kt)("h3",{id:"2-3-controls"},"2-3 Controls"),(0,a.kt)("p",null,"\u9996\u5148Control\u662f\u5f88\u597d\u7684\u529f\u80fd\uff0c\u5bf9\u4e8eshow UI demo \u662f\u5f88\u65b9\u4fbf\u76f4\u89c2\u7684\u5c55\u793a\uff0c\u5bf9\u4e8eV6\u7248\u672c\uff0cControl \u662f\u5185\u7f6e\u63d2\u4ef6\uff0c\u53ea\u9700\u8981\u901a\u8fc7Template\u548cargs\u914d\u5408\u5c31\u53ef\u4ee5\u81ea\u52a8\u751f\u6210"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/essentials/controls"},"\u8be6\u7ec6\u5199\u6cd5")),(0,a.kt)("p",null,"\u5728\u4f4e\u7248\u672c\u4e2d(V6\u4ecd\u7136\u652f\u6301addons\u5199\u6cd5)\uff0c\u662f\u901a\u8fc7\u5b89\u88c5addon-knobs\u63d2\u4ef6\u6765\u5b9e\u73b0\u7684\u3002 "),(0,a.kt)("video",{controls:"controls",autoPlay:"autoplay",loop:"loop",style:{width:"100%"}},(0,a.kt)("source",{src:"https://storybook.js.org/9d2e1f29cfb010e3aae6cd76547c4bab/addon-controls-optimized.mp4",type:"video/mp4"})),(0,a.kt)("p",null,"\u6839\u636e\u6211\u7684\u7ecf\u9a8c\uff0c\u548cusing args \u4e00\u6837\uff0c\u4f7f\u7528\u8fd8\u662f\u4e0d\u4f7f\u7528\u9700\u8981\u6839\u636e\u9879\u76ee\u9700\u6c42\uff0c\u6216\u8005\u5bfb\u627e\u6298\u4e2d\u7684\u65b9\u6cd5\u800c\u4e24\u8005\u517c\u987e\u3002"),(0,a.kt)("h3",{id:"2-4-action"},"2-4 Action"),(0,a.kt)("p",null,"\u6211\u76ee\u524d\u8fd8\u6ca1\u6709\u627e\u5230Action\u7684\u5408\u9002\u573a\u666f\u3002\u5b83\u548cControl\u4e00\u6837\u7684\uff0c\u5728V6\u7248\u672c\u4e2d\u662f\u5185\u7f6e\u63d2\u4ef6\uff0c\u9700\u8981argTypes\u6765\u5b9a\u4e49\uff0c\u65b0\u7248\u672cV6\u4e2d\u9700\u8981\u5199\u6210template\u5f62\u5f0f\u624d\u80fd\u89e6\u53d1\u3002"),(0,a.kt)("video",{controls:"controls",autoPlay:"autoplay",loop:"loop",style:{width:"100%"}},(0,a.kt)("source",{src:"https://storybook.js.org/b0366940cf7195b6d5b646c6105c217c/addon-actions-optimized.mp4",type:"video/mp4"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Button } from './Button';\n\nexport default {\n  title: 'Button',\n  component: Button,\n  argTypes: { onClick: { action: 'clicked' } },\n};\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// .storybook/preview.js\n\nexport const parameters = {\n  actions: { argTypesRegex: '^on.*' }\n}\n\n")),(0,a.kt)("h3",{id:"2-5-using-parameters"},"2-5 Using parameters"),(0,a.kt)("p",null,"Parameters are Storybook\u2019s method of defining static metadata for stories.\nA story\u2019s parameters can be used to provide configuration to various addons at the level of a story or group of stories."),(0,a.kt)("p",null,"Parameters\u4e3b\u8981\u662f\u4e3astories\u505a\u4e00\u4e9b\u9875\u9762\u914d\u7f6e, \u4e5f\u53ef\u4ee5\u5728preview\u4e2d\u8fdb\u884cglobal\u7684\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"  parameters: {\n    docs: { page: null },\n    actions: { argTypesRegex: '^on.*' },\n    centered: { disable: true },\n    backgrounds: {\n      values: [\n        { name: 'red', value: '#f00' },\n        { name: 'green', value: '#0f0' },\n        { name: 'blue', value: '#00f' },\n      ],\n    },\n  },\n")),(0,a.kt)("h3",{id:"2-6-using-decorators"},"2-6 Using decorators"),(0,a.kt)("p",null,"Decorators are a mechanism to wrap a component in arbitrary markup when rendering a story.\nComponents are often created with assumptions about \u2018where\u2019 they render.\nYour styles might expect a theme or layout wrapper, or your UI might expect specific context or data providers."),(0,a.kt)("p",null,"decorators\u5c31\u662f\u9875\u9762\u88c5\u9970\uff0c\u53ef\u4ee5\u6709\u673a\u4f1a\u7ed9\u9875\u9762\u505a\u4e00\u4e9bdom\u7ed3\u6784\u6216\u8005\u6837\u5f0f\u7684\u8c03\u6574"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Button } from './Button';\n\nexport default {\n  title: 'Button',\n  component: Button,\n  decorators: [\n    (Story) => (\n      <div style={{ margin: '3em' }}>\n        <Story />\n      </div>\n    ),\n  ],\n};\n")),(0,a.kt)("h2",{id:"3-write-docs"},"3. Write Docs"),(0,a.kt)("p",null,"Storybook \u76ee\u524d\u4e3b\u8981\u63d0\u4f9b\u4e86\u4e09\u79cd\u65b9\u5f0f\u7528\u4e8e\u6587\u6863\u7684\u4e66\u5199"),(0,a.kt)("h3",{id:"3-1-\u5229\u7528component-parameters"},"3-1 \u5229\u7528component parameters"),(0,a.kt)("h4",{id:"\u4f18\u70b9"},"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u81ea\u52a8\u89e3\u6790\u7ec4\u4ef6\u4e2d\u7684props")),(0,a.kt)("h4",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"interface\u7684format\u8981\u4e25\u683c"),(0,a.kt)("li",{parentName:"ul"},"docs\u4e2d\u4e0d\u80fd\u81ea\u5b9a\u4e49\uff0c\u662f\u81ea\u52a8\u751f\u6210\u7684")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// ButtonGroup.stories.js|jsx\nimport React from 'react';\nimport { Button, ButtonGroup } from './ButtonGroup';\n\nexport default {\n  title: 'ButtonGroup',\n  // storybook use the component/subcomponents to extract the component's description and props\n  // override the docs.page parameters with null to remove its content\n  component: ButtonGroup,\n  subcomponents: { Button },\n};\n")),(0,a.kt)("h3",{id:"3-2-mdx"},"3-2 mdx"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Currently there's an issue when using MDX stories with IE11. This issue does not apply to Docs page")))),(0,a.kt)("p",null,"MDX \u662f\u975e\u5e38\u597d\u7684\u4e66\u5199docs\u7684\u65b9\u5f0f\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u4e0d\u9700\u8981\u517c\u5bb9IE11\uff0c\u6211\u5f3a\u70c8\u5efa\u8bae\u4f60\u7528mdx\u7684\u65b9\u5f0f\u6765\u5199case\u7684\u6587\u6863\u3002"),(0,a.kt)("h4",{id:"\u4f18\u70b9-1"},"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06md\u548cJSX\u6df7\u5408\u4e66\u5199\uff0c\u975e\u5e38\u7075\u6d3b")),(0,a.kt)("h4",{id:"\u7f3a\u70b9-1"},"\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301IE11")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/writing-docs/mdx"},"\u8be6\u7ec6")),(0,a.kt)("p",null,"MDX is a standard file format that combines Markdown with JSX.\nIt means you can use Markdown\u2019s terse syntax (such as # heading) for your documentation,\nwrite stories that compile to our component story format, and freely embed JSX component blocks at any point in the file. All at once."),(0,a.kt)("h3",{id:"3-3-\u5229\u7528docs-parameters"},"3-3 \u5229\u7528docs parameters"),(0,a.kt)("p",null,"\u56e0\u4e3aIE11\u800c\u7528\u4e0d\u4e86mdx\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u7528jsx\u7ec4\u4ef6\u914d\u7f6e\u5230docs.page\u7684\u65b9\u5f0f\u8fdb\u884cdocs\u7684\u4e66\u5199\u3002\u4e2a\u4eba\u8ba4\u4e3a\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u652f\u6301IE11\uff0c\u800c\u4e14\u4f60\u8fd8\u5e0c\u671b\u81ea\u5b9a\u4e49docs\u5185\u5bb9\uff0c\n\u7528\u8fd9\u79cd\u65b9\u5f0f\u662f\u6700\u597d\u9009\u62e9"),(0,a.kt)("h4",{id:"\u4f18\u70b9-2"},"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5199JSX\uff0c\u81ea\u5b9a\u4e49docs\u9875\u9762\u5e03\u5c40\u6837\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301IE11")),(0,a.kt)("h4",{id:"\u7f3a\u70b9-2"},"\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u7528md")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// ButtonGroup.stories.js|jsx\nimport React from 'react';\nimport { Button, ButtonGroup } from './ButtonGroup';\nimport { customDocumentComponemt } from './customDocumentComponemt'; //jsx file\n\nexport default {\n  title: 'ButtonGroup',\n  component: ButtonGroup,\n  parameters: {\n    docs: {\n      page: customDocumentComponemt\n    }\n  }\n};\n")))}m.isMDXComponent=!0}}]);