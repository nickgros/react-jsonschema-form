"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=a,h=l["".concat(c,".").concat(f)]||l[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="uiSchema Options for Semantic-UI",s={unversionedId:"api-reference/themes/semantic-ui/uiSchema",id:"api-reference/themes/semantic-ui/uiSchema",title:"uiSchema Options for Semantic-UI",description:"There are various options to pass to semantic theme fields.",source:"@site/docs/api-reference/themes/semantic-ui/uiSchema.md",sourceDirName:"api-reference/themes/semantic-ui",slug:"/api-reference/themes/semantic-ui/uiSchema",permalink:"/react-jsonschema-form/docs/api-reference/themes/semantic-ui/uiSchema",draft:!1,editUrl:"https://github.com/rjsf-team/react-jsonschema-form/tree/main/packages/docs/docs/api-reference/themes/semantic-ui/uiSchema.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"uiSchema",permalink:"/react-jsonschema-form/docs/api-reference/uiSchema"},next:{title:"uiSchema Options for Chakra-UI",permalink:"/react-jsonschema-form/docs/api-reference/themes/chakra-ui/uiSchema"}},c={},p=[{value:"Semantic Widget Optional Properties",id:"semantic-widget-optional-properties",level:4},{value:"errorOptions",id:"erroroptions",level:2},{value:"semantic options uiSchema for array items",id:"semantic-options-uischema-for-array-items",level:2},{value:"formContext",id:"formcontext",level:2}],m={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uischema-options-for-semantic-ui"},"uiSchema Options for Semantic-UI"),(0,a.kt)("p",null,"There are various options to pass to semantic theme fields."),(0,a.kt)("p",null,"Note that every semantic property within uiSchema can be rendered in one of two ways: ",(0,a.kt)("inlineCode",{parentName:"p"},'{"ui:options": {semantic:{[property]: [value]}}}')),(0,a.kt)("p",null,"In other words, the following uiSchema is equivalent:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: All fields have the following settings below as their default")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fluid: Take on the size of its container.\ninverted: Format to appear on dark backgrounds.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ui:options": {\n    "semantic" : {\n      "fluid": true,\n      "inverted": false,\n      "errorOptions": {\n        "size": "small",\n        "pointing": "above",\n      }\n    }\n  }\n}\n')),(0,a.kt)("h4",{id:"semantic-widget-optional-properties"},"Semantic Widget Optional Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/elements/input/"},"Semantic props for TextWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/modules/checkbox/"},"Semantic props for CheckboxWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/modules/dropdown/"},"Semantic props for SelectWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/elements/input/"},"Semantic props for RangeWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/addons/radio/"},"Semantic props for RadioWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/elements/input/"},"Semantic props for PasswordWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/elements/input/"},"Semantic props for UpDownWidget")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.semantic-ui.com/addons/text-area/"},"Semantic props for TextAreaWidget"))),(0,a.kt)("h2",{id:"erroroptions"},"errorOptions"),(0,a.kt)("p",null,"The uiSchema semantic object accepts an ",(0,a.kt)("inlineCode",{parentName:"p"},"errorOptions")," property for each field of the schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"size: determines the size of the error message dialog\npointing: determines the direction of the arrow on the error message dialog\n")),(0,a.kt)("p",null,"Below are the current defaults"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { UiSchema } from "@rjsf/utils";\n\nconst uiSchema: UiSchema = {\n  "ui:options": {\n    "semantic" : {\n      "errorOptions": {\n        "size": "small",\n        "pointing": "above",\n      }\n    }\n  }\n};\n')),(0,a.kt)("h2",{id:"semantic-options-uischema-for-array-items"},"semantic options uiSchema for array items"),(0,a.kt)("p",null,"To specify a uiSchema that applies to array items, specify the semantic uiSchema value within the ",(0,a.kt)("inlineCode",{parentName:"p"},"ui:options")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wrapItem: wrap each array item in a Segment\nhorizontalButtons: horizontal buttons instead of the default vertical\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { RJSFSchema, UiSchema } from "@rjsf/utils";\nimport validator from "@rjsf/validator-ajv8";\n\nconst schema: RJSFSchema = {\n  type: "array",\n  items: {\n    type: "string"\n  }\n};\n\nconst uiSchema: UiSchema = {\n   "ui:options": {\n      "semantic": {\n        "wrapItem": true,\n        "horizontalButtons": true\n      }\n    }\n};\n\nrender((\n  <Form schema={schema} uiSchema={uiSchema} validator={validator} />\n), document.getElementById("app"));\n')),(0,a.kt)("h2",{id:"formcontext"},"formContext"),(0,a.kt)("p",null,"The formContext semantic object accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"wrapContent")," ,",(0,a.kt)("inlineCode",{parentName:"p"},"wrapLabel")," properties."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wrapContent: wrap all inputs  field content in a div, for custom styling\nwrapLabel: wrap all labels in a div, for custom styling via CSS\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Form\n  formContext={{\n    "semantic" : {\n      "wrapLabel": true,\n      "wrapContent": true\n    }\n  // other props...\n  }}\n/>\n')))}l.isMDXComponent=!0}}]);