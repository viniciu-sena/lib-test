function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-DLsXyOuj.js","./index-CsdIBAqE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-B8oTItO8.js";import{R as e,r as c}from"./index-CsdIBAqE.js";import{r as l,u}from"./react-18-Te5-Jngr.js";import{d as h,A as E,H as d,D as x}from"./index-Dtvmat-p.js";import"../sb-preview/runtime.js";import"./index-5f0m1pej.js";import"./index-B_J8iUie.js";import"./index-B04q1QvB.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},F=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,a)=>{p(()=>import("./index-DLsXyOuj.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:i})=>l(e.createElement(D,{showException:a,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{F as DocsRenderer,_ as defaultComponents};
