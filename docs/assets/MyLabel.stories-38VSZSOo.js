import{j as v}from"./jsx-runtime-BBA1A80y.js";import"./iframe-FN2Eb8_X.js";const x=({label:f,size:C,AllCaps:g=!1,color:L="text-primary",fontColor:h})=>v.jsx("span",{className:`${C} ${L} label `,style:{color:h,textTransform:g?"uppercase":"none"},children:f});x.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"The text to display in the label"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:`The size of the label
@default normal`},AllCaps:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"",defaultValue:{value:'"text-primary"',computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"UI/labels/MyLabel",component:x,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},color:{control:"select",options:["text-primary","text-secondary","text-tertiary"]}}},e={args:{label:"Basic Label "}},a={args:{label:"All Caps Label ",AllCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},t={args:{label:"Custom Color Label",fontColor:"#5517ac",color:"text-tertiary"}};var l,o,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Basic Label "
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label ",
    AllCaps: true
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    color: "text-secondary"
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,y,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Custom Color Label",
    fontColor: "#5517ac",
    color: "text-tertiary"
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const q=["Basic","AllCaps","SecondaryLabel","CustomColor"];export{a as AllCaps,e as Basic,t as CustomColor,r as SecondaryLabel,q as __namedExportsOrder,A as default};
