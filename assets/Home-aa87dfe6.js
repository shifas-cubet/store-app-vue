import{_ as f,r as u,o as d,c as r,a as t,w as c,v as m,F as b,b as p,d as v}from"./index-b684549a.js";const _={name:"Home",setup(){const i=u(""),e=u([]);return{product_name:i,attributes:e,addAttribute:()=>{e.value.push("")},onRemoveAttribute:l=>{e.value.splice(l,1)}}}},x={class:"p-6"},h={class:"space-y-12"},y={class:"border-b border-gray-900/10 pb-12"},w={class:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-6"},k={class:"sm:col-span-4"},A=t("label",{for:"username",class:"block text-sm font-medium leading-6 text-gray-900"},"Product",-1),C={class:"mt-2"},S={class:"sm:col-span-4"},V=t("label",{for:"username",class:"block text-sm font-medium leading-6 text-gray-900"},"Attributes",-1),B={class:"mt-2 flex space-x-4"},R=["onUpdate:modelValue"],U=["onClick"],F=t("div",{class:"mt-6 flex items-center justify-end gap-x-6"},[t("button",{type:"button",class:"text-sm font-semibold leading-6 text-gray-900"},"Cancel"),t("button",{type:"submit",class:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Save")],-1);function H(i,e,g,s,l,L){return d(),r("div",x,[t("form",{onSubmit:e[2]||(e[2]=v((...o)=>i.handleSubmit&&i.handleSubmit(...o),["prevent"]))},[t("div",h,[t("div",y,[t("div",w,[t("div",k,[A,t("div",C,[c(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.product_name=o),type:"text",name:"street-address",id:"street-address",autocomplete:"street-address",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,512),[[m,s.product_name]])])]),t("div",S,[V,t("div",B,[(d(!0),r(b,null,p(s.attributes,(o,n)=>(d(),r(b,{key:n},[c(t("input",{type:"text",name:"street-address","onUpdate:modelValue":a=>s.attributes[n]=a,id:"street-address",autocomplete:"street-address",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"},null,8,R),[[m,s.attributes[n]]]),t("button",{onClick:a=>s.onRemoveAttribute(n),class:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"X",8,U)],64))),128))])])]),t("button",{onClick:e[1]||(e[1]=o=>s.addAttribute()),class:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Add Line")])]),F],32)])}const j=f(_,[["render",H]]);export{j as default};
