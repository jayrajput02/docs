(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),a=(n(0),n(161)),i={title:"Config File"},c={id:"cli/config",title:"Config File",description:"Each Hydra project has a `hydra.yml` configuration file defining contract templates and general options for the project.",source:"@site/docs/cli/config.md",permalink:"/hydra/cli/config",editUrl:"https://github.com/klevoya/docs/edit/master/docs/cli/config.md",sidebar:"docs",previous:{title:"CLI",permalink:"/hydra/cli/cli"},next:{title:"Blockchain",permalink:"/hydra/api/blockchain"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Each Hydra project has a ",Object(a.b)("inlineCode",{parentName:"p"},"hydra.yml")," configuration file defining contract templates and general options for the project.\nIt is auto-generated by running the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/hydra/cli/cli#init"}),Object(a.b)("inlineCode",{parentName:"a"},"init")," command"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"contracts:\n  # name used to index blockchain.contractTemplates\n  eosio.token:\n    # path to the contract's ABI relative to the configuration file\n    abi: contracts/eos/eosio.token.abi\n    # optional path to the contract's fixture directory\n    fixturesDir: tests/fixtures/eosio.token\n    # name used to index blockchain.contractTemplates\n    name: eosio.token\n    # path to the contract's WASM relative to the configuration file\n    wasm: contracts/eos/eosio.token.wasm\noptions:\n  # overwrite the api server used for local / on-premises hosting\n  serverBaseUrl: http://127.0.0.1:8888\n  # skip client-side auth checks for local / on-premises hosting\n  skipAuth: true\n")))}s.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);