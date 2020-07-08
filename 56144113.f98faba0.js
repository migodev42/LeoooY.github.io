(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(2),s=t(6),o=(t(0),t(131)),c={id:"doc-ReactHooks\u4f7f\u7528\u5fc3\u5f97",title:"ReactHooks\u4f7f\u7528\u5fc3\u5f97",tags:["React","Hooks"]},r={id:"FE/React/doc-ReactHooks\u4f7f\u7528\u5fc3\u5f97",isDocsHomePage:!1,title:"ReactHooks\u4f7f\u7528\u5fc3\u5f97",description:"Hook\u5c01\u88c5\u5b50\u7ec4\u4ef6",source:"@site/docs/FE/React/ReactHooks\u4f7f\u7528\u5fc3\u5f97.md",permalink:"/docs/FE/React/doc-ReactHooks\u4f7f\u7528\u5fc3\u5f97",sidebar:"someSidebar",previous:{title:"[\u8bd1] Blink\u5185\u6838\u662f\u5982\u4f55\u5de5\u4f5c\u7684?",permalink:"/docs/FE/Browser/doc-Blink\u5185\u6838\u662f\u5982\u4f55\u5de5\u4f5c\u7684"}},l=[{value:"Hook\u5c01\u88c5\u5b50\u7ec4\u4ef6",id:"hook\u5c01\u88c5\u5b50\u7ec4\u4ef6",children:[]},{value:"Context\u76f8\u5173",id:"context\u76f8\u5173",children:[]},{value:"Refs\u76f8\u5173",id:"refs\u76f8\u5173",children:[]},{value:"\u540c\u6b65\u66f4\u65b0\u591a\u4e2asetState\u3001dispatch",id:"\u540c\u6b65\u66f4\u65b0\u591a\u4e2asetstate\u3001dispatch",children:[]}],i={rightToc:l};function u(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"hook\u5c01\u88c5\u5b50\u7ec4\u4ef6"},"Hook\u5c01\u88c5\u5b50\u7ec4\u4ef6"),Object(o.b)("p",null,"\u628a\u5b50\u7ec4\u4ef6\u5c01\u88c5\u6210\u4e00\u4e2a useXXX(), \u7136\u540e return dom \u548c\u9700\u8981\u8c03\u7528\u7684\u65b9\u6cd5\n\u597d\u5904\uff1a\n\u7236>\u5b50\u4e4b\u95f4\u7684\u901a\u4fe1\u548c\u8c03\u7528\u66f4\u65b9\u4fbf\u76f4\u63a5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6\u53ef\u4ee5\u65b9\u4fbf\u7684\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5"),Object(o.b)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6\u53ef\u4ee5\u65b9\u4fbf\u7684\u6539\u53d8\u5b50\u7ec4\u4ef6\u65b9\u6cd5"),Object(o.b)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6\u53ef\u4ee5\u65b9\u4fbf\u7684\u83b7\u53d6\u5b50\u7ec4\u4ef6\u72b6\u6001")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const useChild = () => {\n    const [state, setState] = useState()\n    const onChange = useCallback(() => {\n\n    }, [])\n\n    return {\n        dom: < child / > ,\n        methods: {\n            onChange,\n            setState,\n        }\n    }\n}\n")),Object(o.b)("h3",{id:"context\u76f8\u5173"},"Context\u76f8\u5173"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react/issues/15156"}),"useContext \u6027\u80fd\u4f18\u5316"))),Object(o.b)("p",null,"1 Split contexts that don't change together\n2 Split your component in two, put ",Object(o.b)("inlineCode",{parentName:"p"},"memo")," in between\n3 One component with ",Object(o.b)("inlineCode",{parentName:"p"},"useMemo")," inside\n4 similar to redux- ",Object(o.b)("inlineCode",{parentName:"p"},"mapStateToProps")," eox- ",Object(o.b)("inlineCode",{parentName:"p"},"withContext")),Object(o.b)("h3",{id:"refs\u76f8\u5173"},"Refs\u76f8\u5173"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/47055464/how-to-assign-refs-to-multiple-components"}),"react hook\u591a\u4e2arefs\u7ed1\u5b9a")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/47055464/how-to-assign-refs-to-multiple-components"}),"\u666e\u901a\u51fd\u6570\u7528ref\u56de\u8c03\u8fdb\u884c\u591a\u4e2arefs\u7ed1\u5b9a"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  const arrLength = arr.length;\n  const [elRefs, setElRefs] = React.useState([]);\n\n  React.useEffect(() => {\n    // add or remove refs\n    setElRefs(elRefs => (\n      Array(arrLength).fill().map((_, i) => elRefs[i] || createRef())\n    ));\n  }, [arrLength]);\n\n  return (\n    <div>\n      {arr.map((el, i) => (\n        <div ref={elRefs[i]} style={...}>...</div>\n      ))}\n    </div>\n  );\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"ref")," \u6765\u76d1\u542cuseCallback()\u7684\u51fd\u6570\u53d8\u5316")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"# Problem:\nconst [deps,setDeps]=useState(0)\n\nconst onChange = useCallback(()=>{\n    /* \u5c06deps\u5904\u7406\u4e3a\u65b0\u503c */\n    const newDeps=...  // \u4f2a\u4ee3\u7801\uff0c\u7701\u7565\n    setDeps(newDeps)\n},[deps])\n\nuseEffect(()=>{\n    onChange()\n},[props.do])\n/* \u95ee\u9898\u5728\u4e8e\u8fd9\u91cc\uff0c\u4f9d\u8d56\u4f1a\u62a5\u9519\u63d0\u793a\u5c06onChange\u52a0\u5165\u4f9d\u8d56 */\n/* \u4f46\u662f\u52a0\u5165\u4f9d\u8d56\u540e\uff0cuseEffect\u5e76\u4e0d\u80fd\u6309\u7167\u8bbe\u8ba1\u7684props.do\u6539\u53d8\u624d\u89e6\u53d1\uff0c\u800c\u662fonChange\u6539\u53d8\u540e\u4e5f\u4f1a\u89e6\u53d1 */\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"# Solution\uff1a\n\nconst [deps,setDeps]=useState(0)\n\nconst onChange = useCallback(()=>{\n    /* \u5c06deps\u5904\u7406\u4e3a\u65b0\u503c */\n    const newDeps=...  // \u4f2a\u4ee3\u7801\uff0c\u7701\u7565\n    setDeps(newDeps)\n},[deps])\n\n/* *********\u7cbe\u9ad3\u90e8\u5206******* */\nconst onChangeRef=useRef(onChange)\n\nuseEffect(()=>{\n    onChangeRef.current=onChange\n},[onChange])\n\nuseEffect(()=>{\n    onChangeRef.current()\n},[props.do])\n/* \u6b64\u65f6onChangeRef\u4e0d\u9700\u8981\u52a0\u5165\u4f9d\u8d56 */\n\n/* *********\u7cbe\u9ad3\u90e8\u5206********* */\n\n")),Object(o.b)("p",null,"\u53e6\u4e00\u79cd\u601d\u8def"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies\nfunction Form() {\n    const [text, updateText] = useState('');\n    // Will be memoized even if `text` changes:\n    const handleSubmit = useEventCallback(() => {\n        alert(text);\n    }, [text]);\n\n    return ( <\n        >\n        <\n        input value = {\n            text\n        }\n        onChange = {\n            e => updateText(e.target.value)\n        }\n        /> <\n        ExpensiveTree onSubmit = {\n            handleSubmit\n        }\n        /> < / >\n    );\n}\n\nfunction useEventCallback(fn, dependencies) {\n    const ref = useRef(() => {\n        throw new Error('Cannot call an event handler while rendering.');\n    });\n\n    useEffect(() => {\n        ref.current = fn;\n    }, [fn, ...dependencies]);\n\n    return useCallback(() => {\n        const fn = ref.current;\n        return fn();\n    }, [ref]);\n}\n")),Object(o.b)("h3",{id:"\u540c\u6b65\u66f4\u65b0\u591a\u4e2asetstate\u3001dispatch"},"\u540c\u6b65\u66f4\u65b0\u591a\u4e2asetState\u3001dispatch"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* \n    https://stackoverflow.com/questions/53574614/multiple-calls-to-state-updater-from-usestate-in-component-causes-multiple-re-re \n\n    https://github.com/facebook/react/issues/14259\n*/\nReactDOM.unstable_batchedUpdates(() => {\n    dispatchPage({\n        type: 'setCurrent',\n        data: initPage\n    });\n    setSearchParams(parsed);\n    setxxx();\n    ...\n})\n")))}u.isMDXComponent=!0}}]);