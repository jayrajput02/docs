(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=n(0),i=n.n(o),c=n(167),s=function(e){var t=e.id,n=e.src,r=e.autoPlay,a=i.a.useRef();return function(e){var t=e.ref,n=e.src,r=e.id,a=e.autoPlay;Object(o.useEffect)((function(){if(console.log(t.current),t.current){var e=document.createElement("script");return e.src=n,e.id=r,e.dataset.autoplay=a,e.dataset.size="small",e.dataset.rows=16,e.async=!0,t.current.appendChild(e),function(){t.current&&t.current.removeChild(e)}}}),[t])}({ref:a,id:t,src:n,autoPlay:r}),i.a.createElement("div",{key:t,ref:a})},l={title:"Getting Started"},u={id:"about/getting-started",title:"Getting Started",description:"Hydra is an EOSIO smart contract testing framework that allows you to quickly get started with testing your smart contract code.",source:"@site/docs/about/getting-started.md",permalink:"/docs/docs/about/getting-started",editUrl:"https://github.com/klevoya/docs/edit/master/website/docs/about/getting-started.md",sidebar:"docs",next:{title:"Overview",permalink:"/docs/docs/examples/1"}},p=[{value:"Quick Start",id:"quick-start",children:[{value:"Setup",id:"setup",children:[]},{value:"Writing tests",id:"writing-tests",children:[]}]}],d={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Hydra is an EOSIO smart contract testing framework that allows you to quickly get started with testing your smart contract code.\nBesides Hydra, installing additional software or running your own local blockchain node are ",Object(c.b)("strong",{parentName:"p"},"not")," required. "),Object(c.b)("h2",{id:"quick-start"},"Quick Start"),Object(c.b)("h3",{id:"setup"},"Setup"),Object(c.b)("p",null,"Hydra is a Node.js library, so make sure ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Node.js/NPM")," is installed."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g @klevoya/hydra\n")),Object(c.b)("p",null,"Log in to your existing ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://klevoya.com"}),"Klevoya account")," or sign up by running the ",Object(c.b)("inlineCode",{parentName:"p"},"login")," command and following the instructions:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"hydra login\n")),Object(c.b)(s,{id:"asciicast-nhP4pvp7hv6L6FFJu4kyUYHzc",src:"https://asciinema.org/a/nhP4pvp7hv6L6FFJu4kyUYHzc.js",autoPlay:!0,mdxType:"Asciinema"}),Object(c.b)("h3",{id:"writing-tests"},"Writing tests"),Object(c.b)("p",null,"Hydra tests are written in JavaScript/TypeScript and it allows you to use your favourite testing library."),Object(c.b)("p",null,"Navigate to your smart contracts project's root folder and compile your smart contract.\nInitialize an NPM project, install a JS testing library and then run the ",Object(c.b)("inlineCode",{parentName:"p"},"init")," command selecting the contracts you want to test."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'cd eos-project\nnpm init -y\n# Install jest or another testing library\nnpm i -S jest\n# adjust the "test" script in package.json to execute "jest"\n\nhydra init\n')),Object(c.b)(s,{id:"asciicast-u4CCaH93v6Hti0VBP8gErgskT",src:"https://asciinema.org/a/u4CCaH93v6Hti0VBP8gErgskT.js",mdxType:"Asciinema"}),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"init")," command bootstraps your project by creating a ",Object(c.b)("inlineCode",{parentName:"p"},"hydra.yml")," configuration file and a test boilerplate in the ",Object(c.b)("inlineCode",{parentName:"p"},"tests")," directory.\nThen run your tests:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm test\n")))}b.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);