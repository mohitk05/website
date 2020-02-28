(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(9),a=(n(0),n(176)),c={id:"objects",title:"Objects",sidebar_label:"Objects"},i={id:"objects",title:"Objects",description:"[Examples](https://github.com/neon-bindings/examples/tree/master/objects)",source:"@site/docs/objects.md",permalink:"/docs/objects",sidebar_label:"Objects",sidebar:"docs",previous:{title:"Arrays",permalink:"/docs/arrays"},next:{title:"Arguments",permalink:"/docs/arguments"}},p=[{value:"Getting Properties",id:"getting-properties",children:[]},{value:"Setting Properties",id:"setting-properties",children:[]},{value:"Mapping a <code>struct</code> to a <code>JsObject</code>",id:"mapping-a-struct-to-a-jsobject",children:[]}],b={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/neon-bindings/examples/tree/master/objects"}),"Examples")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"JsObject"),"'s are used to create objects on the JS heap. ",Object(a.b)("inlineCode",{parentName:"p"},"JsObject")," structs have two methods: ",Object(a.b)("inlineCode",{parentName:"p"},"get")," and ",Object(a.b)("inlineCode",{parentName:"p"},"set"),":"),Object(a.b)("h2",{id:"getting-properties"},"Getting Properties"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},".get()")," is used to get a property of a JS object at runtime:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'// --snip--\nlet js_object = JsObject::new(&mut cx);\njs_object\n    .get(&mut cx, "myProperty")?\n    .downcast::<JsFunction>()\n    .or_throw(&mut cx)?;\n// --snip--\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},".downcast()")," will attempt to cast the property to a ",Object(a.b)("inlineCode",{parentName:"p"},"JsFunction"),". ",Object(a.b)("inlineCode",{parentName:"p"},".or_throw()")," will error if downcasting the propety is not possible."),Object(a.b)("h2",{id:"setting-properties"},"Setting Properties"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},".set()")," requires a ",Object(a.b)("inlineCode",{parentName:"p"},"FunctionContext"),", the name of the property you want to set, and the value you want to set the property to:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'let js_object = JsObject::new(&mut cx);\nlet js_string = cx.string("foobar");\n\njs_object.set(&mut cx, "myProperty", js_string)?;\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},".")," will attempt to cast the property to a ",Object(a.b)("inlineCode",{parentName:"p"},"JsFunction"),". ",Object(a.b)("inlineCode",{parentName:"p"},".or_throw()")," will error if downcasting the property is not possible."),Object(a.b)("h2",{id:"mapping-a-struct-to-a-jsobject"},"Mapping a ",Object(a.b)("inlineCode",{parentName:"h2"},"struct")," to a ",Object(a.b)("inlineCode",{parentName:"h2"},"JsObject")),Object(a.b)("p",null,"Here is a simple example of converting a Rust ",Object(a.b)("inlineCode",{parentName:"p"},"struct")," to a JS ",Object(a.b)("inlineCode",{parentName:"p"},"Object")," using ",Object(a.b)("inlineCode",{parentName:"p"},"JsObject"),". We first start by defining the ",Object(a.b)("inlineCode",{parentName:"p"},"struct"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"struct Foo {\n    pub bar: u64,\n    pub baz: String\n}\n")),Object(a.b)("p",null,"And then define a function which creates an instance of the ",Object(a.b)("inlineCode",{parentName:"p"},"Foo")," struct"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'fn convert_struct_to_js_object(mut cx: FunctionContext) -> JsResult<JsObject> {\n    let foo = Foo {\n        bar: 1234,\n        baz: "baz".to_string()\n    };\n    let object = JsObject::new(&mut cx);\n    let js_string = cx.string(&foo.baz);\n    let js_number = cx.number(foo.bar as f64);\n    object.set(&mut cx, "myStringProperty", js_string).unwrap();\n    object.set(&mut cx, "myNumberProperty", js_number).unwrap();\n    Ok(object)\n}\n\nregister_module!(mut m, {\n    m.export_function("convertStructToJsObject", convert_struct_to_js_object)\n});\n')))}s.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(n),j=r,m=l["".concat(c,".").concat(j)]||l[j]||u[j]||a;return n?o.a.createElement(m,i({ref:t},b,{components:n})):o.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<a;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);