(this["webpackJsonpwp-factory"]=this["webpackJsonpwp-factory"]||[]).push([[4],{256:function(e,t,a){"use strict";var n=a(9),r=a(10),i=a(11),c=a(13),s=a(0),o=a.n(s),l=a(2),u=a(3),m=a(30);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var f=Object(s.memo)(Object(s.forwardRef)((function(e,t){return o.a.createElement(m.a,Object(u.a)({is:"pre",marginTop:0,marginBottom:0},e,{ref:t}))})));f.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},m.a.propTypes);var h=f,b=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={codeString:e.codeString||"{}"},r}return Object(r.a)(a,[{key:"render",value:function(){return console.log(this.state,this.props),o.a.createElement(h,{minHeight:"100%"},o.a.createElement("code",null,this.state.codeString))}}]),a}(s.Component);t.a=b},257:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(3),r=a(0),i=a.n(r),c=a(6),s=["M3.25 10.26l2.47 2.47 6.69-6.69-2.46-2.48-6.7 6.7zM.99 14.99l3.86-1.39-2.46-2.44-1.4 3.83zm12.25-14c-.48 0-.92.2-1.24.51l-1.44 1.44 2.47 2.47 1.44-1.44c.32-.32.51-.75.51-1.24.01-.95-.77-1.74-1.74-1.74z"],o=["M4.59 12.59l2.83 2.83 7.65-7.65-2.83-2.83-7.65 7.65zM2 18l4.41-1.59-2.81-2.79L2 18zM16 2c-.55 0-1.05.22-1.41.59l-1.65 1.65 2.83 2.83 1.65-1.65A2.006 2.006 0 0016 2z"],l=Object(r.memo)(Object(r.forwardRef)((function(e,t){return i.a.createElement(c.a,Object(n.a)({svgPaths16:s,svgPaths20:o,ref:t,name:"edit"},e))})))},269:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),i=a(11),c=a(13),s=a(0),o=a.n(s),l=a(19),u=a(38),m=a(184),p=a(58),f=a(3),h=a(6),b=["M10.99 6.99h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1zm-3-7c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.68 6-6 6z"],d=["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm5-9h-4V5c0-.55-.45-1-1-1s-1 .45-1 1v4H5c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1v-4h4c.55 0 1-.45 1-1s-.45-1-1-1z"],g=Object(s.memo)(Object(s.forwardRef)((function(e,t){return o.a.createElement(h.a,Object(f.a)({svgPaths16:b,svgPaths20:d,ref:t,name:"add"},e))}))),v=a(257),O=a(185),E=a(253),j=a(256),y=a(26),S=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={menuStruct:null===e||void 0===e?void 0:e.menuStruct,isShown:!1,configString:null},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("article",null,o.a.createElement(u.a,{display:"flex",padding:".5em",background:"tint2"},o.a.createElement(u.a,{flex:1,alignItems:"center",display:"flex"},o.a.createElement(m.a,{size:600},"Config Overview")),o.a.createElement(u.a,null,o.a.createElement(l.b,{to:"/".concat(this.props.match.params.siteKey,"/templates")},o.a.createElement(p.a,{appearance:"minimal",iconBefore:g},"Add Template")),o.a.createElement(p.a,{appearance:"minimal",iconBefore:v.a,onClick:function(t){t.preventDefault(),e.setState({isShown:!0,configString:JSON.stringify(y.a.site["@config"],!0,4)})}},"View Code"))),o.a.createElement(u.a,{display:"flex",flexWrap:"wrap"},this.state.menuStruct.map((function(t,a){return o.a.createElement(u.a,{className:"griditem__block",key:a,flex:"0 0 calc(25% - 2em)",borderRadius:5,height:128,display:"flex",justifyContent:"center",alignItems:"center",margin:"1em",elevation:1,border:"default"},o.a.createElement(l.b,{to:"/".concat(e.props.match.params.siteKey,"/config/").concat(t.key)},o.a.createElement(u.a,{flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"},o.a.createElement("div",{className:"navlink__icon"},t.icon),o.a.createElement(m.a,{size:500},t.label))))}))),o.a.createElement(u.a,{padding:"1em"},o.a.createElement(m.a,{size:400},"What is this?"),o.a.createElement(O.a,{size:400,color:"muted"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet non augue et faucibus. Ut arcu tellus, hendrerit id sem in, iaculis varius ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac aliquet orci. Donec porta risus at nisi placerat pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce interdum ligula ut cursus egestas. Praesent porttitor non nisl quis sodales. Maecenas efficitur, nibh ac finibus vestibulum, arcu ex tempus nibh, eu convallis lacus diam id elit. Pellentesque elementum ac nibh mattis molestie. Quisque urna turpis, viverra vel tortor sit amet, tincidunt condimentum arcu. Pellentesque luctus aliquam consequat. Vivamus condimentum non risus eget venenatis.")),o.a.createElement(E.a,{isShown:this.state.isShown,onCloseComplete:function(){return e.setState({isShown:!1})}},o.a.createElement(j.a,{codeString:this.state.configString})),o.a.createElement(E.a,{isShown:this.state.generateShown,onCloseComplete:function(){return e.setState({generateShown:!1})}},o.a.createElement("h1",null,"GENERATE_CODE")))}}]),a}(s.Component);t.default=S}}]);
//# sourceMappingURL=4.f270ac32.chunk.js.map