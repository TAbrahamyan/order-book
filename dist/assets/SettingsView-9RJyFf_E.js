import{_ as g,u as V,s as w,w as c,r,o as m,c as _,a as d,b as s,i as p,d as I,P,L,F as b,e as h,p as y,f as k,g as x,h as B}from"./index-CYl1mHbF.js";const C=l=>(y("data-v-414886d2"),l=l(),k(),l),T={class:"settings"},F=C(()=>x("h1",null,"History",-1)),R={__name:"SettingsView",setup(l){const n=V(),{selectedPair:a,selectedLimit:o,history:f}=w(n);return c(o,i=>n.onChangeLimit(i)),c(a,(i,t)=>n.onChangePair(i,t)),(i,t)=>{const u=r("v-select"),v=r("v-list-item"),S=r("v-list");return m(),_("div",T,[d(u,{label:"Pair",modelValue:s(a),"onUpdate:modelValue":t[0]||(t[0]=e=>p(a)?a.value=e:null),items:s(P)},null,8,["modelValue","items"]),d(u,{label:"Limit",modelValue:s(o),"onUpdate:modelValue":t[1]||(t[1]=e=>p(o)?o.value=e:null),items:s(L)},null,8,["modelValue","items"]),F,d(S,{lines:"two"},{default:I(()=>[(m(!0),_(b,null,h(s(f),e=>(m(),B(v,{key:e.id,title:`${e.fromPair} -> ${e.toPair}`,subtitle:`${new Intl.DateTimeFormat("default",{dateStyle:"full",timeStyle:"long"}).format(e.lastUpdateTime)}`,class:"item"},null,8,["title","subtitle"]))),128))]),_:1})])}}},$=g(R,[["__scopeId","data-v-414886d2"]]);export{$ as default};
