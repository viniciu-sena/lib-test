import{r as i}from"./index-CSLRt44l.js";var y={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=i,l=Symbol.for("react.element"),m=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,b=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(t,r,s){var o,e={},n=null,p=null;s!==void 0&&(n=""+s),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(p=r.ref);for(o in r)a.call(r,o)&&!c.hasOwnProperty(o)&&(e[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps,r)e[o]===void 0&&(e[o]=r[o]);return{$$typeof:l,type:t,key:n,ref:p,props:e,_owner:b.current}}u.Fragment=m;u.jsx=f;u.jsxs=f;y.exports=u;var d=y.exports;const k=({primary:t=!1,size:r="medium",backgroundColor:s,label:o,...e})=>{const n=t?"storybook-button--primary":"storybook-button--secondary";return d.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${r}`,n].join(" "),style:{backgroundColor:s},...e,children:o})};export{k as B,d as j};
