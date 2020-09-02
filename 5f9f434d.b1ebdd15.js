(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(2),r=n(6),a=(n(0),n(228)),o={},c={unversionedId:"Git/GitBook/index",id:"Git/GitBook/index",isDocsHomePage:!1,title:"index",description:"- Pro Git Book",source:"@site/docs/Git/GitBook/index.md",slug:"/Git/GitBook/index",permalink:"/docs/Git/GitBook/index",version:"current"},l=[{value:"1\u3001Getting Started",id:"1\u3001getting-started",children:[{value:"1.1 About Version Control",id:"11-about-version-control",children:[]},{value:"1.2 A Short History of Git",id:"12-a-short-history-of-git",children:[]},{value:"1.3 Getting Start - What is Git?",id:"13-getting-start---what-is-git",children:[]},{value:"1.4 Getting Start - The Command Line",id:"14-getting-start---the-command-line",children:[]},{value:"1.5 Getting Started - Installing Git",id:"15-getting-started---installing-git",children:[]},{value:"1.6 Getting Started - First-Time Git Setup",id:"16-getting-started---first-time-git-setup",children:[]},{value:"1.7 Getting Started - Getting Help",id:"17-getting-started---getting-help",children:[]}]},{value:"2 Git Basics",id:"2-git-basics",children:[{value:"2.1 Git Basics - Getting a Git Repository",id:"21-git-basics---getting-a-git-repository",children:[]},{value:"2.2 Git Basics - Recording Changes to the Repository",id:"22-git-basics---recording-changes-to-the-repository",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2"}),"Pro Git Book"),Object(a.b)("inlineCode",{parentName:"li"},"written by Scott Chacon")," ",Object(a.b)("inlineCode",{parentName:"li"},"from official git website"))),Object(a.b)("h2",{id:"1\u3001getting-started"},"1\u3001Getting Started"),Object(a.b)("h3",{id:"11-about-version-control"},"1.1 About Version Control"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u672c\u5730\u7248\u672c\u7ba1\u7406\u7cfb\u7edf\uff08Local Version Control System\uff09"),Object(a.b)("li",{parentName:"ul"},"\u4e2d\u5fc3\u5316\u7248\u672c\u7ba1\u7406\u7cfb\u7edf\uff08Centralized Version Control System\uff09"),Object(a.b)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u7248\u672c\u7ba1\u7406\u7cfb\u7edf \uff08Distributed Version Control System\uff09")),Object(a.b)("h3",{id:"12-a-short-history-of-git"},"1.2 A Short History of Git"),Object(a.b)("p",null,"Linux\u4e4b\u7236linus\u5728\u5f00\u53d1Linux kernal\u65f6\u5019\u4e00\u5f00\u59cb\u4f7f\u7528\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u7248\u672c\u7ba1\u7406\u7cfb\u7edfBitKeeper\u3002\u57282005\u5e74\u7684\u65f6\u5019\uff0c\u5f00\u53d1BitKeeper\u7684\u516c\u53f8\u7834\u4ea7\u4e86\uff0cBitKeeper\u4e0d\u518d\u514d\u8d39\u4f7f\u7528\u3002\n\u4e8e\u662fLinus\u548c\u793e\u533a\u7684\u5f00\u53d1\u8005\u5c31\u57fa\u4e8eBitKeeper\u7684\u4f7f\u7528\u7ecf\u9a8c\u7b49\u81ea\u5df1\u5f00\u53d1\u4e86\u4e00\u6b3e\u5206\u5e03\u5f0f\u7248\u672c\u7ba1\u7406\u7cfb\u7edf\uff0c\u8fd9\u4fbf\u662fGit\u3002"),Object(a.b)("p",null,"\u5f00\u53d1\u65f6\uff0c\u5bf9Git\u7684\u76ee\u6807\u662f\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Speed"),Object(a.b)("li",{parentName:"ul"},"Simple designed"),Object(a.b)("li",{parentName:"ul"},"Strong support for non-linear development(brantches)"),Object(a.b)("li",{parentName:"ul"},"Able to handle large projects like the Linux kernal efficientlty(Speed and Data Size)\n\u81ea2005\u5e74\u5f00\u59cb\uff0cGit\u5c31\u904d\u5730\u5f00\u82b1\uff0c\u73b0\u5728\u5df2\u7ecf\u975e\u5e38\u6210\u719f\uff0c\u4f7f\u7528\u7b80\u5355\u4e14\u53ef\u9760\u3002",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"}," It\u2019s amazingly fast, it\u2019s very efficient with large projects, and it has an incredible branching system for non-linear development")))),Object(a.b)("h3",{id:"13-getting-start---what-is-git"},"1.3 Getting Start - What is Git?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"snapshot Git\u8bb0\u5f55\u7684\u662f\u6587\u4ef6\u5feb\u7167\u800c\u4e0d\u662f\u6587\u4ef6\u7684\u5dee\u5f02"),Object(a.b)("li",{parentName:"ul"},"local Operations \u672c\u5730\u64cd\u4f5c"),Object(a.b)("li",{parentName:"ul"},"Integrity \u6240\u6709\u64cd\u4f5c\u90fd\u88ab\u8bb0\u5f55"),Object(a.b)("li",{parentName:"ul"},"Generally Only Adds Data to the Git database \u6570\u636e\u4e22\u5931\u7684\u6982\u7387\u975e\u5e38\u5c0f"),Object(a.b)("li",{parentName:"ul"},"The Three States \u4e09\u9897\u6811",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Modified      "),Object(a.b)("li",{parentName:"ul"},"Staged        "),Object(a.b)("li",{parentName:"ul"},"Committed")))),Object(a.b)("p",null,"basic Git workflow\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'1 You modify files in your working tree.\n\n2 You selectively stage just those changes you want to be part of your next commit, which adds only those changes to the staging area.\n# git add -A / fname.xx\n\n3 You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.\n# git commit -m "xxdesc"\n')),Object(a.b)("h3",{id:"14-getting-start---the-command-line"},"1.4 Getting Start - The Command Line"),Object(a.b)("p",null,"Command Line is usualy more powerful than GUI."),Object(a.b)("h3",{id:"15-getting-started---installing-git"},"1.5 Getting Started - Installing Git"),Object(a.b)("p",null,"I","`","ll pass this part, cause it","`","s can be more detail on  officail websites."),Object(a.b)("h3",{id:"16-getting-started---first-time-git-setup"},"1.6 Getting Started - First-Time Git Setup"),Object(a.b)("p",null,"I","`","ll pass this part, cause I already have another article write about it."),Object(a.b)("h3",{id:"17-getting-started---getting-help"},"1.7 Getting Started - Getting Help"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"git <verb> --help | -h\nman git-<varb>\n\n")),Object(a.b)("h2",{id:"2-git-basics"},"2 Git Basics"),Object(a.b)("h3",{id:"21-git-basics---getting-a-git-repository"},"2.1 Git Basics - Getting a Git Repository"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),'git init \ngit add -A\ngit commit -m "xx"\ngit clone https://xxx.com/xx/xx\n\nor drectly git clone https://xxx.com/xx/xx\n\ngit clone https://xxx.com/xx/xx\n')),Object(a.b)("h3",{id:"22-git-basics---recording-changes-to-the-repository"},"2.2 Git Basics - Recording Changes to the Repository"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"git status [-s]                    # check the status of your file \n,gitignore                         # ignore files\ngit diff\ngit add [-A]\ngit commit -a -m 'added new benchmarks # commit with already tracked files\ngit rm <filename>              # Removing Files\ngit mv file_from file_to        # Moving Files\n\ngit checkout --track origin/daves_branch    # \u62c9\u53d6remote\u5206\u652f\ngit branch -d | -D branch_name              # \u5220\u9664\u67d0\u4e2a\u5206\u652f\ngit clone --depth=1  [repourl]              # clone\u5e93\u7684\u6700\u65b0revision\uff0c\u5f53\u67d0\u4e2a\u5e93\u5f88\u5927\u7684\u65f6\u5019\u9002\u7528\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"cherry-pick")),"\n\u4ece\u67d0\u4e2a\u5206\u652f\u53d6\u90e8\u5206\u63d0\u4ea4\u5408\u5e76\u5230\u53e6\u4e00\u4e2a\u5206\u652f\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"a-b-c           # branch0\n  \\\n   x-y-z        # branch1                \n                # a\u3001b\u3001c\u3001x\u3001y\u3001z is commit id\n\ngit checkout branch0\ngit cherry-pick y..z\n\n# result\na-b-c-y-z\n  \\\n   x-y-z\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"git rebase vs git merge"))),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"          A---B---C topic\n         /\n    D---E---F---G master\n \n # \u5f53\u524d\u5904\u4e8etopic\u5206\u652f\n git rebase master      # \u4e24\u6761\u547d\u4ee4\u7b49\u4ef7\n git rebase master topic\n\n # \u64cd\u4f5c\u7ed3\u679c\uff1a\n                   A'--B'--C' topic\n                 /\n    D---E---F---G master\n")))}b.isMDXComponent=!0},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=i,d=p["".concat(o,".").concat(u)]||p[u]||g[u]||a;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);