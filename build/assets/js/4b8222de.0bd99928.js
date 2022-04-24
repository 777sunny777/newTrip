"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4985],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},449:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],s={slug:"react2",title:"useMemo and useCallback, you really know it?",authors:["sheldon"],tags:["react"]},l=void 0,c={permalink:"/metaTrip/build/blog/react2",source:"@site/blog/2022-04-24-useMemo.mdx",title:"useMemo and useCallback, you really know it?",description:"- \u8fd9\u7bc7blog\u662f\u5bf9useMemo \u548c useCallback\u7684\u6df1\u5165\u5b66\u4e60\u3002",date:"2022-04-24T00:00:00.000Z",formattedDate:"April 24, 2022",tags:[{label:"react",permalink:"/metaTrip/build/blog/tags/react"}],readingTime:8.25,truncated:!0,authors:[{name:"Sheldon Y Sun",title:"Jser @ Open Source Community",url:"https://github.com/777sunny777",imageURL:"https://github.com/777sunny777.png",key:"sheldon"}],nextItem:{title:"\u6211\u505a\u81ea\u5a92\u4f53\u5c0f\u89c6\u9891\u7684\u4e00\u70b9\u611f\u89e6",permalink:"/metaTrip/build/blog/media"}},u={authorsImageUrls:[void 0]},m=[{value:"1. useMemo",id:"1-usememo",children:[],level:2},{value:"1. useCallback",id:"1-usecallback",children:[],level:2}],p={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u7bc7blog\u662f\u5bf9useMemo \u548c useCallback\u7684\u6df1\u5165\u5b66\u4e60\u3002 ")))),(0,r.kt)("p",null,"useMemo \u548c useCallback \u662freact \u63d0\u4f9b\u7684\u6027\u80fd\u4f18\u5316\u5de5\u5177\u3002\u7528\u6cd5\u6bd4\u8f83\u7b80\u5355\uff0c\u6211\u4eec\u5728\u9879\u76ee\u4e2d\u4e5f\u77e5\u9053\u8981\u7528\uff0c\u4f46\u662f\u5177\u4f53\u6027\u80fd\u662f\u5982\u4f55\u63d0\u5347\u7684\uff0c\u662f\u4e0d\u662f\u53ef\u4ee5\u53ef\u89c6\u5316\u51fa\u6765\uff0c\n\u76f8\u4fe1\u6709\u5f88\u591a\u4eba\u5e76\u4e0d\u662f\u7279\u522b\u4e86\u89e3\u3002\u8fd9\u7bc7blog\u7531\u6b64\u800c\u751f\u3002"),(0,r.kt)("h2",{id:"1-usememo"},"1. useMemo"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Returns a memoized value. ")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usememo"},"\u7f13\u5b58\u503c"),", \u8fd9\u4e2a\u662f\u5b98\u7f51\u5bf9useMemo\u63cf\u8ff0\u7684\u7b2c\u4e00\u53e5\u8bdd\u3002\u5982\u4f55\u7406\u89e3\u8fd9\u4e2a\u7f13\u5b58\u503c\u5c31\u5f88\u5173\u952e\uff0c\n\u5b9e\u9645\u4e0a\u5b98\u7f51\u4e5f\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u7ef4\u57fa\u767e\u79d1\u7684link\u3002\u6211\u628a\u5173\u952e\u7684\u9762\u8bd5copy\u5230\u4e0b\u9762\uff1a"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing\nthe results of expensive funtion calls and returning the cached result when the same inputs occur again."))),(0,r.kt)("p",null,"\u6240\u4ee5\u6211\u8003\u8651\u518d\u4e09\uff0c\u7f13\u5b58\u503c\u8fd8\u662f\u6bd4\u8f83\u5408\u9002\u7684\uff0c\u4ed6\u7684\u7279\u70b9\u5c31\u662f\u5982\u679c\u518d\u6709\u76f8\u540c\u8f93\u5165\uff0c\u90a3\u4e48\u5c31\u65e0\u9700\u8ba1\u7b97\uff0c\u76f4\u63a5\u8fd4\u56de\u7f13\u5b58\u503c\u5373\u53ef\uff0c\u4ece\u672a\u63d0\u5347\u751f\u4ee3\u7801\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u518d\u56de\u5230useMemo\uff0cPass a \u201ccreate\u201d function and an array of dependencies.\nuseMemo will only recompute the memoized value when one of the dependencies has changed.\nThis optimization helps to avoid expensive calculations on every render."),(0,r.kt)("p",null,"\u5b83\u7684\u53c2\u6570\u662f\u4e00\u4e2afunction(\u4e0d\u662f\u56de\u8c03)\u548c\u4e00\u4e2a\u4f9d\u8d56\u6570\u7ec4\u3002\u6570\u7ec4\u4e2d\u7684\u4f9d\u8d56\u53d1\u751f\u53d8\u5316\u624d\u4f1a\u89e6\u53d1\u51fd\u6570\u4e2d\u7684\u8ba1\u7b97\u3002\n\u5982\u679c\u5b98\u7f51\u7684\u63cf\u8ff0\u4e0d\u662f\u5f88\u6e05\u6670\uff0c\u4e0b\u9762\u662f\u6211\u4ece\u5176\u4ed6blog\u627e\u5230\u7684\u4e00\u6bb5\u66f4\u4e3a\u6e05\u6670\u7684\u4e00\u6bb5useMemo\u63cf\u8ff0\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"React has a built-in hook called useMemo that allows you to memoize expensive functions\nso that you can avoid calling them on every render. You simple pass in a function and an array of inputs\nand useMemo will only recompute the memoized value when one of the inputs has changed."))),(0,r.kt)("p",null,"\u4f7f\u7528useMemo\u9700\u8981\u6ce8\u610f\u7684\u51e0\u70b9\uff1a"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Don\u2019t do anything there that you wouldn\u2019t normally do while rendering.")," For example, side effects belong in useEffect, not useMemo.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If no array is provided, ",(0,r.kt)("strong",{parentName:"p"},"a new value will be computed on every render"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You may rely on useMemo as a performance optimization, ",(0,r.kt)("strong",{parentName:"p"},"not as a semantic guarantee"),". In the future, React may choose to \u201cforget\u201d some previously memoized values and recalculate them on next render, e.g. to free memory for offscreen components. ",(0,r.kt)("strong",{parentName:"p"},"Write your code so that it still works without useMemo")," \u2014 and then add it to optimize performance."))))),(0,r.kt)("p",null,"\u4e0b\u9762\u80fd\u6211\u4eec\u5c31show case for useMemo\uff0c\u53ef\u89c6\u5316\u7684\u8ba9\u5927\u5bb6\u53ef\u4ee5\u4f53\u9a8c\u4e00\u4e0b\u4ed6\u7684\u6027\u80fd\u63d0\u5347\u3002"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u65b9\u6cd5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fbNext word\uff0c\u53ef\u4ee5\u611f\u53d7\u5230\u7531\u4e8e\u590d\u6742\u8ba1\u7b97\u5e26\u6765\u7684\u5ef6\u8fdf\uff0c\u70b9\u51fbIncrement\uff0c \u7531\u4e8e\u590d\u6742\u8ba1\u7b97\u88abuseMemo\u4f18\u5316\uff0c\u6240\u4ee5\u611f\u53d7\u4e0d\u5230\u5ef6\u8fdf\u5f71\u54cd\u3002\n\u8fde\u7eed\u70b9\u51fb\u6548\u679c\u66f4\u660e\u663e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u91ca\u6389\u4e0b\u9762useMemo\u4ee3\u7801\uff0c\u66b4\u9732\u590d\u6742\u8ba1\u7b97\u5728render\u8fc7\u7a0b\u4e2d\u3002\u91cd\u590d\u4e0a\u9762\u7684\u52a8\u4f5c\uff0c\u70b9\u51fbIncrement\u7684\u65f6\u5019\u4e5f\u51fa\u73b0\u5ef6\u8fdf\u6548\u679c\uff0c\u5b9e\u9645\u4e0a\u662f\u4e0d\u9700\u8981\u7684\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\nfunction TestUseMemo() {\n\n  // State for our counter\n  const [count, setCount] = useState(0);\n  \n  // State to keep track of current word in array we want to show\n  const [wordIndex, setWordIndex] = useState(0);\n  \n  // Words we can flip through and view letter count\n  const words = ["hey", "this", "is", "cool"];\n  const word = words[wordIndex];\n  \n  // Returns number of letters in a word\n  // We make it slow by including a large and completely unnecessary loop\n  const computeLetterCount = (word) => {\n    let i = 0;\n    while (i < 1000000000) i++;\n    return word.length;\n  };\n  \n  // Memoize computeLetterCount so it uses cached return value if input array ...\n  // ... values are the same as last time the function was run.\n  // \u9488\u5bf9\u6027\u7684\u5728\u9700\u8981\u7684\u4f9d\u8d56\u4e0b\u8fdb\u884c\u8ba1\u7b97\uff0c\u5176\u4ed6\u7684\u4f9d\u8d56\u6539\u53d8\u7684\u65f6\u5019\u7528cache\u6570\u636e\uff0c\u4ece\u800c\u63d0\u5347\u6574\u4f53\u6027\u80fd\n  const letterCount = useMemo(() => computeLetterCount(word), [word]);\n  \n  // This would result in lag when incrementing the counter because ...\n  // ... we\'d have to wait for expensive function when re-rendering.\n  //const letterCount = computeLetterCount(word);\n  \n  return (\n    <div style={{ padding: "15px" }}>\n      <h2>Compute number of letters (slow \ud83d\udc0c)</h2>\n      <p>\n        "{word}" has {letterCount} letters\n      </p>\n      <button\n        onClick={() => {\n          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;\n          setWordIndex(next);\n        }}\n      >\n        Next word\n      </button>\n      <h2>Increment a counter (fast \u26a1\ufe0f)</h2>\n      <p>Counter: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6240\u4ee5\u7ed3\u8bba\u5c31\u662f\u5728render\u4e2d\u7684\u590d\u6742\u8ba1\u7b97\uff0c\u9700\u8981useMemo\u6765\u8fdb\u884c\u76f8\u5173\u4f9d\u8d56\u4e0b\u7684\u6027\u80fd\u4f18\u5316\u3002")),(0,r.kt)("h2",{id:"1-usecallback"},"1. useCallback"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Returns a memoized callback.. ")),(0,r.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},"\u7f13\u5b58\u56de\u8c03"),", \u6211\u4eec\u53ef\u4ee5\u5bf9\u6bd4\u4e0a\u9762\u7684useMemo\u6765\u770b\uff0c\u8fd9\u6b21\u7f13\u5b58\u7684\u5b9e\u9645\u4e0a\u662f\u6211\u4eec\u7684\u51fd\u6570\u65b9\u6cd5\u672c\u8eab\u3002"),(0,r.kt)("p",null,"\u6765\u770b\u5b98\u7f51\u7684\u89e3\u91ca\uff0cPass an inline callback and an array of dependencies.\nuseCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.\nThis is useful when passing callbacks to optimized child components that rely on reference equality\nto prevent unnecessary renders (e.g. shouldComponentUpdate)."),(0,r.kt)("p",null,"\u548cuseMemo\u7684\u63cf\u8ff0\u5bf9\u6bd4\uff0c\u8fd9\u91cc\u9762\u5f88\u660e\u663e\u544a\u8bc9\u4e86\u6211\u4eec\u4ec0\u4e48\u65f6\u5019\u7528useCallback\u6bd4\u8f83\u5408\u9002\uff0c\u5c31\u662fshouldComponentUpdate\u4e4b\u524d\u4ec0\u4e48\u65f6\u5019\u7528\uff0c\u73b0\u5728\u4f60\u5c31\u53ef\u4ee5\u8003\u8651\u7528useCallback\u3002\n\u4e0b\u9762\u662fshouldComponentUpdate\u7684\u5b98\u7f51\u63cf\u8ff0\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use shouldComponentUpdate() to let React know if a component\u2019s output is not affected by the current change in state or props.\nThe default behavior is to re-render on every state change"))),(0,r.kt)("p",null,"\u6240\u4ee5\u4ed6\u662f\u7528\u6765\u4f18\u5316\u9650\u5236\u5b50\u7ec4\u4ef6\u6e32\u67d3\u6b21\u6570\u7684\u3002\u5982\u679c\u5b98\u7f51\u7684\u63cf\u8ff0\u4e0d\u662f\u5f88\u6e05\u6670\uff0c\u4e0b\u9762\u662f\u6211\u4ece\u5176\u4ed6blog\u627e\u5230\u7684\u4e00\u6bb5\u66f4\u4e3a\u6e05\u6670\u7684\u4e00\u6bb5useCallback\u63cf\u8ff0\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The useCallback hook is used when you have a component in which the child is rerendering again and again without need.\nPass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes\nif one of the dependencies has changed."))),(0,r.kt)("p",null,"\u4f7f\u7528useMemo\u9700\u8981\u6ce8\u610f\u7684\u51e0\u70b9\uff1a"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"useMemo\u548cuseCallBack, \u5728\u672a\u6765\u7684react\u7248\u672c\u4e2d\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u4f9d\u8d56\u6570\u7ec4\u662f\u4f1a\u88ab\u53bb\u6389\u7684"))))),(0,r.kt)("p",null,"\u4e0b\u9762\u80fd\u6211\u4eec\u5c31show case for useCallback\uff0c\u53ef\u89c6\u5316\u7684\u8ba9\u5927\u5bb6\u53ef\u4ee5\u4f53\u9a8c\u4e00\u4e0b\u4ed6\u7684\u6027\u80fd\u63d0\u5347\u3002"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u65b9\u6cd5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u4e2d\u7684funccount\u5b9a\u4e49\u4e3a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"let funccount = new Set();\n\n// Set \u5bf9\u8c61\u662f\u552f\u4e00\u503c\u7684\u96c6\u5408\uff0c\u6bcf\u4e2a\u503c\u5728 Set \u4e2d\u53ea\u80fd\u51fa\u73b0\u4e00\u6b21\u3002\n// \u5982\u679c\u5bf9Set()\u5b9a\u4e49\u4e0d\u662f\u548c\u6e05\u695a\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u6d4b\u8bd5\u7406\u89e3\uff1a\nconst set1 = new Set();\n\nset1.add(1) \nset1.add(2)  \nset1.add(3) \nset1.add(1) \n\nset1.size // 3\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9700\u8981F12\uff0c\u770bconsole log\u7684\u8c03\u7528\u6b21\u6570")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb\u5982\u4e0b\u4e09\u4e2a\u6309\u94ae\uff0c\u5728\u6ca1\u6709\u4f7f\u7528useCallBack\u7684\u65f6\u5019\u90fd\u662f\u6e32\u67d33\u6b21\u7d2f\u52a0\uff0c\u8bf4\u660e\u6bcf\u6b21render3\u4e2a\u65b9\u6cd5\u90fd\u4f1a\u88ab\u91cd\u65b0\u6e32\u67d3\u5230\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u91ca\u6389\u539f\u6709\u65b9\u6cd5\uff0c\u6253\u5f00useCallback\u7684\u65b9\u6cd5\uff0c\u518d\u6b21\u89c2\u5bdf\u6e32\u67d3\u6b21\u6570\uff0c\u4f1a\u53d1\u73b0\u548c\u4f9d\u8d56\u4ea7\u751f\u5173\u7cfb\uff0c\u6ca1\u6709\u89e6\u53d1\u7684\u5b50\u7ec4\u4ef6\u4e5f\u4e0d\u4f1a\u88ab\u6e32\u67d3\u4e86\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function TestUseCallback() {\n\n  const [count, setCount] = useState(0)\n  const [number, setNumber] = useState(0)\n \n  const incrementCounter = () => {\n    setCount(count + 1)\n  }\n  const decrementCounter = () => {\n    setCount(count - 1)\n  }\n   \n   const incrementNumber = () => {\n    setNumber(number + 1)\n  }\n\n  /*\n  const incrementCounter = useCallback(() => {\n    setCount(count + 1)\n  }, [count])\n\n  const decrementCounter = useCallback(() => {\n    setCount(count - 1)\n  }, [count])\n\n  const incrementNumber = useCallback(() => {\n    setNumber(number + 1)\n  }, [number])\n  */ \n\n  funccount.add(incrementCounter);\n  funccount.add(decrementCounter);\n  funccount.add(incrementNumber);\n  console.log('funccount.size:' + funccount.size);\n \n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <h2>Number: {number}</h2>\n      <button onClick={incrementCounter}>\n         Increase counter\n      </button>\n      <button onClick={decrementCounter}>\n         Decrease Counter\n      </button>\n      <button onClick={incrementNumber}>\n         increase number\n      </button>\n    </div>\n  )\n}\n \n\n")),(0,r.kt)("p",null,"\u603b\u7ed3\u5c31\u662fuseCallback\u9488\u5bf9\u51fd\u6570\u7f13\u5b58\uff0c\u4e3b\u8981\u9650\u5236\u5b50\u7ec4\u4ef6\u7684\u6e32\u67d3\u6b21\u6570"),(0,r.kt)("p",null,"\u540e\u9762\u6211\u8fd8\u4f1a\u5bf9Memo\u8fdb\u884c\u4e00\u4e2a\u603b\u7ed3\u7684\u3002"))}d.isMDXComponent=!0}}]);