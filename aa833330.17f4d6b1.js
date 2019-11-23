(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));n(51),n(24),n(19),n(20),n(52),n(0);var a=n(196);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={title:"#Rust2018: A Neon Wish List",author:"Dave Herman"},i=[],l={rightToc:i},s="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u26a0\ufe0f This article contains references to an outdated version of neon \u26a0\ufe0f"),Object(a.b)("p",null,"While I've been thoroughly enjoying the Rust community's spirited ",Object(a.b)("a",o({parentName:"p"},{href:"https://blog.rust-lang.org/2018/01/03/new-years-rust-a-call-for-community-blogposts.html"}),"#Rust2018 blog-fest"),", I wasn't really thinking of participating myself until ",Object(a.b)("a",o({parentName:"p"},{href:"http://jvns.ca"}),"Julia Evans")," pointed out ",Object(a.b)("a",o({parentName:"p"},{href:"https://twitter.com/b0rk/status/952370352759418880"}),"the leadership wants to hear from everyone"),"---even if I might not have anything especially new to add. So here's my little wish list for Rust in 2018."),Object(a.b)("p",null,"Since I'm not in Rust's leadership, I don't have to worry about synthesizing some grand narrative for the whole of Rust. So I'll just focus on a few things that would be personally useful to me. In particular, I'll stick to topics that would be helpful for my ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.neon-bindings.com"}),"Neon")," project, a set of bindings for writing native Node extension modules in Rust."),Object(a.b)("h1",{id:"stabilize-impl-trait"},"Stabilize ",Object(a.b)("inlineCode",{parentName:"h1"},"impl trait")),Object(a.b)("p",null,"The most challenging part of keeping Neon's design manageable is the annotation burden. Neon provides a safe API for managing handles into Node's JavaScript garbage collector, and to do this, it requires passing around a \"handle scope\" parameter everywhere, which tracks the lifetimes of handles. There are a few flavors of handle scopes, which means helper functions in Neon projects often end up with some pretty hairy signatures:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-rust"}),"fn get_foo_bar<'a, S: Scope<'a>>(scope: &mut S, obj: Handle<'a, JsObject>) -> JsResult<'a, JsValue> {\n    // extract the `obj.foo` property and check that it's an object\n    let foo = obj.get(scope, \"foo\")?.check::<JsObject>()?;\n    // extract the `obj.foo.bar` property\n    let bar = foo.get(scope, \"bar\")?;\n    Ok(bar)\n}\n")),Object(a.b)("p",null,"I would love for Neon users to be able to combine lifetime elision and the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/rust-lang/rust/issues/34511"}),Object(a.b)("inlineCode",{parentName:"a"},"impl trait"))," shorthand syntax to write something like:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-rust"}),"fn get_foo_bar(scope: &mut impl Scope, obj: Handle<JsObject>) -> JsResult<JsValue> {\n    // ...\n}\n")),Object(a.b)("p",null,"(With an upcoming ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/dherman/rfcs-1/blob/vm-two-point-oh/text/vm-2.0.md"}),"cleanup of the core Neon API"),", the details of this would change a bit, but ",Object(a.b)("inlineCode",{parentName:"p"},"impl trait")," would be just as appealing.)"),Object(a.b)("h1",{id:"syntactic-abstraction-for-error-propagation"},"Syntactic abstraction for error propagation"),Object(a.b)("p",null,"I adore the ",Object(a.b)("inlineCode",{parentName:"p"},"?")," syntax, but it's not enough! Expressions like ",Object(a.b)("inlineCode",{parentName:"p"},"Ok(bar)")," in the above example are an indication that we don't have a complete abstraction layer in the syntax for error propagation. I find it particularly galling when I have to see ",Object(a.b)("inlineCode",{parentName:"p"},"Ok(())"),". It's dipping down into an unnecessary abstraction layer, distracting the core logic of the function with mechanical details of the representation of Rust's control flow protocols."),Object(a.b)("p",null,"I'm excited about the discussions around ",Object(a.b)("a",o({parentName:"p"},{href:"https://internals.rust-lang.org/t/pre-rfc-catching-functions/6505"}),'"catching functions"'),". I think we can get to a sweet spot where we have an abstraction layer in the syntax that never exposes the ",Object(a.b)("inlineCode",{parentName:"p"},"Result")," type for error handling, while still explicitly annotating every point that may throw (thanks to ",Object(a.b)("inlineCode",{parentName:"p"},"?")," syntax, and by contrast to exceptions). The above examples might look something like:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-rust"}),'fn get_foo_bar(scope: &mut impl Scope, obj: Handle<JsObject>) -> Handle<JsValue> catch JsException {\n    let foo = obj.get(scope, "foo")?.check::<JsObject>()?;\n    let bar = foo.get(scope, "bar")?;\n    return bar;\n}\n')),Object(a.b)("h1",{id:"make-cargo-more-extendable"},"Make cargo more extendable"),Object(a.b)("p",null,"Like ",Object(a.b)("inlineCode",{parentName:"p"},"xargo")," and ",Object(a.b)("inlineCode",{parentName:"p"},"wargo"),", Neon comes with a command-line tool that wraps cargo's behavior in order to abstract away a bunch of build configuration details. I'm proud of this abstraction, because it makes building native modules in Node far easier than they are with C++. But I would much rather Neon programmers could use cargo directly, calling all their usual familiar commands like ",Object(a.b)("inlineCode",{parentName:"p"},"cargo build")," and ",Object(a.b)("inlineCode",{parentName:"p"},"cargo run"),"."),Object(a.b)("p",null,"To support this, Neon will need a handful of extension points that don't exist today:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ability to extend the memoization logic with extra environmental information (e.g. which version of Node is being built for and the values of some Node-specific environment variables)."),Object(a.b)("li",{parentName:"ul"},"Post-build hooks, so I can generate the final DLL and put it in the right directory."),Object(a.b)("li",{parentName:"ul"},"The ability to add default build flags (for example, on macOS, ",Object(a.b)("inlineCode",{parentName:"li"},"neon build")," actually calls ",Object(a.b)("inlineCode",{parentName:"li"},"cargo rustc")," with some extra low-level linking flags)."),Object(a.b)("li",{parentName:"ul"},"Project templates for ",Object(a.b)("inlineCode",{parentName:"li"},"cargo new"),".")),Object(a.b)("p",null,"Being able to write"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-shell"}),"$ cargo new --template=neon my-first-neon-project\n$ cd my-first-neon-project\n$ cargo run\n")),Object(a.b)("p",null,"would be so amazing."),Object(a.b)("h1",{id:"neon-is-about-welcoming-js-programmers"},"Neon is about welcoming JS programmers"),Object(a.b)("p",null,"I promised no narrative, but there is a common thread here. I started the Neon project because I thought it would make a great bridge between the JavaScript and Rust communities. All of the topics in this post are about facilitating that connection:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Neon forces JS programmers to get more explicit about working with the garbage collector than they normally have to, so making that as lightweight as possible makes falling into native code less of a steep cliff."),Object(a.b)("li",{parentName:"ul"},"JS is a language with exceptions, so making the protocol for emulating exceptions in Rust as ergonomic as possible will make Rust a better environment for JS programmers."),Object(a.b)("li",{parentName:"ul"},"And just as Node projects have a workflow oriented around ",Object(a.b)("inlineCode",{parentName:"li"},"npm"),", giving Neon projects a standard ",Object(a.b)("inlineCode",{parentName:"li"},"cargo"),"-based workflow will feel familiar and pleasant to Node programmers.")),Object(a.b)("p",null,"My dream is that Neon can serve as a gateway welcoming JS programmers into Rust and systems programming for years to come. The more we smoothe the path between them, the more people we invite into our community."))}c.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),p=i(n),b=a,u=p[l+"."+b]||p[b]||c[b]||r;return n?o.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(u,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);