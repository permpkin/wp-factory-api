(this["webpackJsonpwp-factory"]=this["webpackJsonpwp-factory"]||[]).push([[1],{101:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(37),l=a.n(c),r=a(2),s=a(33),o=a(9),u=a(10),m=a(12),p=a(11),h=a(13),d=a(19),f=a(18),v=a(232),b=a(225),y=a(233),g=a(58),E=a(189),k=a(230),O=a(206),S=a(231),j=a(211),C=a(38),_=a(184),N=a(204),w=a(235),P=(a(101),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",height:"24",width:"24",version:"1.0",viewBox:"0 0 5.5555557 5.5555555"},i.a.createElement("g",{transform:"matrix(1.0755 0 0 1.0755 -3.5103 -1.6684)"},i.a.createElement("path",{fill:"#1070ca",d:"m5.8465 1.9131c0.57932 0 1.1068 0.222 1.5022 0.58547-0.1938-0.0052-0.3872 0.11-0.3952 0.3738-0.0163 0.5333 0.6377 0.6469 0.2853 1.7196l-0.2915 0.8873-0.7939-2.3386c-0.0123-0.0362 0.002-0.0568 0.0465-0.0568h0.22445c0.011665 0 0.021201-0.00996 0.021201-0.022158v-0.13294c0-0.012193-0.00956-0.022657-0.021201-0.022153-0.42505 0.018587-0.8476 0.018713-1.2676 0-0.0117-0.0005-0.0212 0.01-0.0212 0.0222v0.13294c0 0.012185 0.00954 0.022158 0.021201 0.022158h0.22568c0.050201 0 0.064256 0.016728 0.076091 0.049087l0.3262 0.8921-0.4907 1.4817-0.8066-2.3758c-0.01-0.0298 0.0021-0.0471 0.0308-0.0471h0.25715c0.011661 0 0.021197-0.00996 0.021197-0.022158v-0.13294c0-0.012193-0.00957-0.022764-0.021197-0.022153-0.2698 0.014331-0.54063 0.017213-0.79291 0.019803 0.39589-0.60984 1.0828-1.0134 1.8639-1.0134l-0.0000029-0.0000062zm1.9532 1.1633c0.17065 0.31441 0.26755 0.67464 0.26755 1.0574 0 0.84005-0.46675 1.5712-1.1549 1.9486l0.6926-1.9617c0.1073-0.3036 0.2069-0.7139 0.1947-1.0443h-0.000004zm-1.2097 3.1504c-0.2325 0.0827-0.4827 0.1278-0.7435 0.1278-0.2247 0-0.4415-0.0335-0.6459-0.0955l0.68415-1.9606 0.70524 1.9284v-1e-7zm-1.6938-0.0854c-0.75101-0.35617-1.2705-1.1213-1.2705-2.0075 0-0.32852 0.071465-0.64038 0.19955-0.92096l1.071 2.9285 0.000003-0.000003zm0.95023-4.4367c1.3413 0 2.4291 1.0878 2.4291 2.4291s-1.0878 2.4291-2.4291 2.4291-2.4291-1.0878-2.4291-2.4291 1.0878-2.4291 2.4291-2.4291zm0-0.15354c1.4261 0 2.5827 1.1566 2.5827 2.5827s-1.1566 2.5827-2.5827 2.5827-2.5827-1.1566-2.5827-2.5827 1.1566-2.5827 2.5827-2.5827z"})))}}]),a}(n.Component)),x=a(36),A=a(185),K=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).menuStruct=[{label:"Config",key:"config"},{label:"Tools",key:"tools"},{label:"Templates",key:"templates"}],n.state={busy:!1,isEditShown:!1,isDeleteShown:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("article",null,i.a.createElement(C.a,{display:"flex",padding:".5em",background:"tint2"},i.a.createElement(C.a,{flex:1,alignItems:"center",display:"flex"},i.a.createElement(_.a,{size:600},this.props.currentSite.name," / Settings")),i.a.createElement(C.a,null,i.a.createElement(g.a,{appearance:"minimal",intent:"danger",onClick:function(t){t.preventDefault(),e.setState({isDeleteShown:!0})}},"Delete Site"))),i.a.createElement(C.a,{display:"flex",flexWrap:"wrap"},this.menuStruct.map((function(t,a){return i.a.createElement(C.a,{className:"griditem__block",key:a,flex:"0 0 calc(25% - 2em)",borderRadius:5,height:128,display:"flex",justifyContent:"center",alignItems:"center",margin:"1em",elevation:1,border:"default"},i.a.createElement(d.b,{to:"/".concat(e.props.match.params.siteKey,"/").concat(t.key)},i.a.createElement(_.a,{size:500},t.label)))}))),i.a.createElement(C.a,{padding:".5em"},i.a.createElement(_.a,{size:400},"What is this?"),i.a.createElement(A.a,{size:400,color:"muted"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet non augue et faucibus. Ut arcu tellus, hendrerit id sem in, iaculis varius ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ac aliquet orci. Donec porta risus at nisi placerat pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce interdum ligula ut cursus egestas. Praesent porttitor non nisl quis sodales. Maecenas efficitur, nibh ac finibus vestibulum, arcu ex tempus nibh, eu convallis lacus diam id elit. Pellentesque elementum ac nibh mattis molestie. Quisque urna turpis, viverra vel tortor sit amet, tincidunt condimentum arcu. Pellentesque luctus aliquam consequat. Vivamus condimentum non risus eget venenatis.")),i.a.createElement(N.a,{isShown:this.state.isDeleteShown,hasHeader:!1,intent:"danger",isConfirmLoading:this.state.busy,onConfirm:function(){e.setState({busy:!0}),x.a.deleteSite(e.props.currentSite.key).then((function(){e.setState({busy:!1,isDeleteShown:!1}),window.location.href="/"}))},onCloseComplete:function(){return e.setState({isDeleteShown:!1,busy:!1})},confirmLabel:"Delete"},i.a.createElement(_.a,{size:600},"Are you sure?"),i.a.createElement(A.a,{size:400,color:"muted"},"Removing this ",this.props.schemaPath," may effect other components that require it.")))}}]),a}(n.Component),D=a(39),I=a.n(D),T=a(47),z=a(24),F=a(207),R=a(208),B=a(209),q=a(210),J=a(212),M=a(213),L=a(214),V=a(215),W=a(53),G=Object(z.a)((function(e){return a.e(4).then(a.bind(null,255))})),H=Object(z.a)((function(e){return a.e(6).then(a.bind(null,254))})),U=Object(z.a)((function(e){return a.e(5).then(a.bind(null,243))})),X=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).menuStruct=[{label:"Scripts",key:"scripts",icon:i.a.createElement(O.a,null)},{label:"Styles",key:"styles",icon:i.a.createElement(F.a,null)},{label:"Post Types",key:"types",icon:i.a.createElement(R.a,null)},{label:"Taxonomies",key:"taxonomies",icon:i.a.createElement(B.a,null)},{label:"Custom Fields",key:"fields",icon:i.a.createElement(q.a,null)},{label:"Blocks",key:"blocks",icon:i.a.createElement(j.a,null)},{label:"Pages",key:"pages",icon:i.a.createElement(J.a,null)}],n.state={activePath:window.location.pathname,ready:!1},n.updateActivePath=n.updateActivePath.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(T.a)(I.a.mark((function e(){var t=this;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.a.getConfig().then((function(e){t.setState({ready:!0})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"updateActivePath",value:function(e,t){var a=this;e&&this.state.activePath!==t.pathname&&requestAnimationFrame((function(){a.setState({activePath:t.pathname})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("section",null,this.state.ready?i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"sidenav"},i.a.createElement(d.b,{className:"sidenav__item",activeClassName:"--active",to:"/".concat(this.props.match.params.siteKey,"/config"),exact:!0,isActive:function(t,a){e.updateActivePath(t,a)}},i.a.createElement(M.a,{appearance:"minimal",isSelected:this.state.activePath==="/".concat(this.props.match.params.siteKey,"/config")},i.a.createElement(L.a,null),"Overview")),i.a.createElement(d.b,{className:"sidenav__item",activeClassName:"--active",to:"/".concat(this.props.match.params.siteKey,"/config/settings"),exact:!0,isActive:function(t,a){e.updateActivePath(t,a)}},i.a.createElement(M.a,{appearance:"minimal",isSelected:this.state.activePath==="/".concat(this.props.match.params.siteKey,"/config/settings")},i.a.createElement(V.a,null)," Settings")),this.menuStruct.map((function(t,a){return i.a.createElement(d.b,{key:a,className:"sidenav__item",activeClassName:"--active",to:"/".concat(e.props.match.params.siteKey,"/config/").concat(t.key),isActive:function(t,a){e.updateActivePath(t,a)}},i.a.createElement(M.a,{appearance:"minimal",isSelected:e.state.activePath.startsWith("/".concat(e.props.match.params.siteKey,"/config/").concat(t.key))},t.icon,t.label))}))),i.a.createElement(f.d,null,i.a.createElement(f.b,{path:"/:siteKey/config",exact:!0,component:function(t){return i.a.createElement(G,Object.assign({menuStruct:e.menuStruct},t))}}),i.a.createElement(f.b,{path:"/:siteKey/config/settings",exact:!0,component:function(e){return i.a.createElement(H,Object.assign({schemaKey:"settings",isSingular:!0},e))}}),this.menuStruct.map((function(e,t){return[i.a.createElement(f.b,{key:e.key,path:"/:siteKey/config/".concat(e.key),exact:!0,component:function(t){return i.a.createElement(U,Object.assign({schemaKey:e.key},t))}}),i.a.createElement(f.b,{key:e.key,path:"/:siteKey/config/".concat(e.key,"/:id"),exact:!0,component:function(t){return i.a.createElement(H,Object.assign({schemaKey:e.key},t))}})]})))):i.a.createElement(C.a,{width:"100vw",height:"calc(100vh - 50px)",display:"flex",alignItems:"center",justifyContent:"center"},i.a.createElement(W.a,null)))}}]),a}(n.Component),Q=a(216),Y=a(217),Z=a(218),$=Object(z.a)((function(e){return a.e(0).then(a.bind(null,244))})),ee=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={activePath:window.location.pathname,ready:!1},a.updateActivePath=a.updateActivePath.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(T.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({ready:!0});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateActivePath",value:function(e,t){var a=this;e&&this.state.activePath!==t.pathname&&requestAnimationFrame((function(){a.setState({activePath:t.pathname})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("section",null,i.a.createElement("nav",{className:"sidenav"},i.a.createElement(d.b,{className:"sidenav__item",activeClassName:"--active",to:"/".concat(this.props.match.params.siteKey,"/templates"),isActive:function(t,a){e.updateActivePath(t,a)}},i.a.createElement(M.a,{appearance:"minimal",isSelected:this.state.activePath==="/".concat(this.props.match.params.siteKey,"/templates")},i.a.createElement(Q.a,null)," Search")),i.a.createElement(d.b,{className:"sidenav__item",activeClassName:"--active",to:"/".concat(this.props.match.params.siteKey,"/templates/installed"),isActive:function(t,a){e.updateActivePath(t,a)}},i.a.createElement(M.a,{appearance:"minimal",isSelected:this.state.activePath==="/".concat(this.props.match.params.siteKey,"/templates/installed")},i.a.createElement(Y.a,null)," Installed")),i.a.createElement(d.b,{className:"sidenav__item",activeClassName:"--active",to:"/".concat(this.props.match.params.siteKey,"/templates/my-account"),isActive:function(t,a){e.updateActivePath(t,a)}},i.a.createElement(M.a,{appearance:"minimal",isSelected:this.state.activePath==="/".concat(this.props.match.params.siteKey,"/templates/my-account")},i.a.createElement(Z.a,null)," My Account"))),i.a.createElement(f.d,null,i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/templates"),exact:!0,component:Object(z.a)((function(){return a.e(0).then(a.bind(null,244))}))}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/templates/installed"),component:Object(z.a)((function(){return a.e(7).then(a.bind(null,245))}))}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/templates/my-account"),component:Object(z.a)((function(){return a.e(8).then(a.bind(null,246))}))}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/templates/:type"),exact:!0,component:function(e){return i.a.createElement($,e)}})))}}]),n}(n.Component),te=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).menuStruct=[{label:"Activity",key:"activity"},{label:"Plugins",key:"plugins"},{label:"Seeds",key:"seeds"},{label:"Environment",key:"environment"},{label:"Debugger",key:"debugger"},{label:"Run Tests",key:"test-classes"},{label:"Deploy",key:"deploy"}],a.state={activePath:window.location.pathname,ready:!1},a.updateActivePath=a.updateActivePath.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(T.a)(I.a.mark((function e(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({ready:!0});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateActivePath",value:function(e,t){var a=this;e&&this.state.activePath!==t.pathname&&requestAnimationFrame((function(){a.setState({activePath:t.pathname})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("section",null,i.a.createElement("nav",{className:"sidenav"},this.menuStruct.map((function(t,a){return i.a.createElement(d.b,{key:a,className:"sidenav__item",activeClassName:"--active",to:"/".concat(e.props.match.params.siteKey,"/tools/").concat(t.key),isActive:function(t,a){e.updateActivePath(t,a)}},i.a.createElement(M.a,{appearance:"minimal",isSelected:e.state.activePath==="/".concat(e.props.match.params.siteKey,"/tools/").concat(t.key)},t.label))}))),i.a.createElement(f.d,null,i.a.createElement(f.b,{exact:!0,path:"/tools",render:function(){return i.a.createElement(f.a,{to:"/tools/activity"})}}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/tools/debugger"),component:Object(z.a)((function(){return a.e(10).then(a.bind(null,247))}))}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/tools/plugins"),component:Object(z.a)((function(){return a.e(13).then(a.bind(null,248))}))}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/tools/seeds"),component:Object(z.a)((function(){return a.e(14).then(a.bind(null,249))}))}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/tools/environment"),component:Object(z.a)((function(){return a.e(12).then(a.bind(null,250))}))}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/tools/test-classes"),component:Object(z.a)((function(){return a.e(15).then(a.bind(null,251))}))}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/tools/deploy"),component:Object(z.a)((function(){return a.e(11).then(a.bind(null,252))}))}),i.a.createElement(f.b,{path:"/".concat(this.props.match.params.siteKey,"/tools/activity"),component:Object(z.a)((function(){return a.e(9).then(a.bind(null,253))}))})))}}]),n}(n.Component),ae=a(85),ne=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={busy:!0,addNewBusy:!1,isAddNewShown:!1,currentSite:!1,sites:[],formData:{}},n.setSite=n.setSite.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,this.getSites(window.location.pathname.split("/")[1]).then((function(){e.populateSiteSchema()}))}},{key:"populateSiteSchema",value:function(){var e=this;x.a.getSiteSchema().then((function(t){t.documentation;var a=t.schema;t.supportsTemplates,t.table;if(e.mounted){var n={};Object.keys(a).forEach((function(t){n[t]=Object(s.a)(Object(s.a)({},a[t]),{},{key:t,errors:[],onChange:function(t,a){e.setState({formData:Object(s.a)(Object(s.a)({},e.state.formData),{},Object(r.a)({},t,Object(s.a)(Object(s.a)({},e.state.formData[t]),{},{value:a})))})},value:a[t].default||void 0})})),e.setState({formData:n,busy:!1})}}))}},{key:"getSites",value:function(e){var t=this;return new Promise((function(a,n){x.a.getSites().then((function(n){var i=n.filter((function(t){return e===t.key}))[0];x.a.site=i,t.setState({sites:n,currentSite:i||!1}),a()}))}))}},{key:"setSite",value:function(e){x.a.site=e,e?this.setState({currentSite:e}):this.setState({currentSite:!1})}},{key:"handleChange",value:function(e){console.log("root_change",e)}},{key:"render",value:function(){var e,t,a,n,c=this;return i.a.createElement("main",null,this.state.busy?i.a.createElement(W.a,null):i.a.createElement(d.a,null,i.a.createElement("header",null,i.a.createElement("nav",{className:"nav nav--left"},i.a.createElement("a",{href:"/wp-admin",className:"nav__item"},i.a.createElement(P,null)),i.a.createElement("div",{className:"nav__item"},i.a.createElement(v.a,{position:b.a.BOTTOM_LEFT,content:function(e){var t=e.close;return i.a.createElement(y.a,null,i.a.createElement(y.a.Group,null,c.state.sites.map((function(e,a){var n;return i.a.createElement(d.b,{key:e.key,className:"nav__item",activeClassName:"--active",to:"/".concat(e.key),onClick:function(){c.setSite(e),t()}},i.a.createElement(y.a.Item,{disabled:(null===(n=c.state.currentSite)||void 0===n?void 0:n.key)===e.key},"".concat(e.name)))}))),i.a.createElement(y.a.Divider,null),i.a.createElement(y.a.Group,null,i.a.createElement(y.a.Item,null,i.a.createElement(d.b,{className:"nav__item",to:"/",onClick:function(){c.setSite(!1),t()}},"Sites Overview")),i.a.createElement(y.a.Item,{onSelect:function(){return c.setState({isAddNewShown:!0})}},"Add New Site")))}},i.a.createElement(g.a,{appearance:"minimal"},this.state.currentSite?i.a.createElement(i.a.Fragment,null,this.state.currentSite.name,i.a.createElement(E.a,null)):"Select Site"))),this.state.currentSite?i.a.createElement(i.a.Fragment,null,i.a.createElement(d.b,{className:"nav__item",activeClassName:"--active",exact:!0,to:"/".concat(null===(e=this.state.currentSite)||void 0===e?void 0:e.key)},i.a.createElement(g.a,{appearance:"minimal"},i.a.createElement(k.a,{marginRight:5})," Settings")),i.a.createElement(d.b,{className:"nav__item",activeClassName:"--active",to:"/".concat(null===(t=this.state.currentSite)||void 0===t?void 0:t.key,"/config")},i.a.createElement(g.a,{appearance:"minimal"},i.a.createElement(O.a,{marginRight:5})," Config")),i.a.createElement(d.b,{className:"nav__item",activeClassName:"--active",to:"/".concat(null===(a=this.state.currentSite)||void 0===a?void 0:a.key,"/tools")},i.a.createElement(g.a,{appearance:"minimal"},i.a.createElement(S.a,{marginRight:5})," Tools")),i.a.createElement(d.b,{className:"nav__item",activeClassName:"--active",to:"/".concat(null===(n=this.state.currentSite)||void 0===n?void 0:n.key,"/templates")},i.a.createElement(g.a,{appearance:"minimal"},i.a.createElement(j.a,{marginRight:5})," Templates"))):null)),this.state.currentSite?i.a.createElement(i.a.Fragment,null,i.a.createElement(f.b,{path:"/:siteKey",exact:!0,component:function(e){return i.a.createElement(K,Object.assign({},e,{currentSite:c.state.currentSite}))}}),i.a.createElement(f.b,{path:"/:siteKey/config",component:X}),i.a.createElement(f.b,{path:"/:siteKey/templates",component:ee}),i.a.createElement(f.b,{path:"/:siteKey/tools",component:te})):i.a.createElement(C.a,{display:"flex",flexWrap:"wrap"},this.state.sites.map((function(e,t){return i.a.createElement(C.a,{className:"",key:t,flex:"0 0 calc(25% - 2em)",borderRadius:5,height:128,display:"flex",justifyContent:"center",alignItems:"center",margin:"1em",elevation:1,border:"default"},i.a.createElement(d.b,{to:"/".concat(e.key),onClick:function(){c.setSite(e)}},i.a.createElement(_.a,{size:500},e.name)))}))),i.a.createElement(N.a,{isShown:this.state.isAddNewShown,hasHeader:!1,intent:"success",isConfirmLoading:this.state.addNewBusy,onConfirm:function(){c.setState({addNewBusy:!0}),x.a.addSite(c.state.formData).then((function(e){c.getSites(e.key).then((function(){c.setState({isAddNewShown:!1,addNewBusy:!1}),w.a.success("Added Successfully",{description:"Connect your source to a destination to receive data."}),window.location.href="/".concat(e.key,"/")}))}))},onCloseComplete:function(){return c.setState({isAddNewShown:!1,addNewBusy:!1})},confirmLabel:"Save"},i.a.createElement(_.a,{size:600,marginBottom:5},"Add Site"),i.a.createElement(ae.a,{className:"split-content__form",onChange:this.handleChange,data:this.state.formData}))))}}]),a}(n.Component),ie=a(88);l.a.render(i.a.createElement(ie.a,{domain:"peterkav.au.auth0.com",clientId:"CLgaEX4C4e6gREsKTrX1afLGXdCgpSni",redirectUri:window.location.origin},i.a.createElement(ne,null)),document.getElementById("root"))},36:function(e,t,a){"use strict";var n=a(9),i=a(10),c=new(function(){function e(){Object(n.a)(this,e),this.host="https://wp-factory-api.herokuapp.com",this.version="v1",this.site=!1}return Object(i.a)(e,[{key:"get",value:function(e){var t=this;return new Promise((function(a,n){fetch("".concat(t.host,"/api/").concat(t.version).concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){return n(e)}))}))}},{key:"post",value:function(e,t){var a=this;return new Promise((function(n,i){fetch("".concat(a.host,"/api/").concat(a.version).concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){return i(e)}))}))}},{key:"delete",value:function(e){var t=this;return new Promise((function(a,n){fetch("".concat(t.host,"/api/").concat(t.version).concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){return n(e)}))}))}},{key:"normalizeFormData",value:function(e){var t={};return Object.keys(e).forEach((function(a){void 0!==e[a].value&&(t[a]=e[a].value)})),t}},{key:"getSites",value:function(){return this.get("/sites")}},{key:"addSite",value:function(e){return this.post("/sites",this.normalizeFormData(e))}},{key:"deleteSite",value:function(e){return this.delete("/sites/".concat(e))}},{key:"setActiveSite",value:function(e){this.getConfig(),this.site=e}},{key:"getSiteSchema",value:function(){var e=this;return new Promise((function(t,a){localStorage.getItem("@schema/sites")?t(JSON.parse(localStorage.getItem("@schema/sites"))):e.get("/sites/schema").then((function(e){localStorage.setItem("@schema/sites",JSON.stringify(e)),t(e)})).catch((function(e){return a(e)}))}))}},{key:"getSchema",value:function(e){var t=this;return new Promise((function(a,n){localStorage.getItem("@schema/".concat(e))?a(JSON.parse(localStorage.getItem("@schema/".concat(e)))):t.get("/sites/".concat(t.site.key,"/config/").concat(e,"/schema")).then((function(t){localStorage.setItem("@schema/".concat(e),JSON.stringify(t)),a(t)})).catch((function(e){return n(e)}))}))}},{key:"getConfig",value:function(){var e=this;return new Promise((function(t,a){localStorage.getItem("@config/".concat(e.site.key))?t(JSON.parse(localStorage.getItem("@config/".concat(e.site.key)))):e.get("/sites/".concat(e.site.key,"/config")).then((function(a){localStorage.setItem("@config/".concat(e.site.key,"/config"),JSON.stringify(a)),Object.keys(a).forEach((function(t){localStorage.setItem("@config/".concat(e.site.key,"/config/").concat(t),JSON.stringify(a[t]))})),t(a)})).catch((function(e){return a(e)}))}))}},{key:"getValue",value:function(e){var t=this;return new Promise((function(a,n){localStorage.getItem("@config/".concat(t.site.key,"/config/").concat(e))?a(JSON.parse(localStorage.getItem("@config/".concat(t.site.key,"/config/").concat(e)))):t.get("/sites/".concat(t.site.key,"/config/").concat(e)).then((function(n){localStorage.setItem("@config/".concat(t.site.key,"/config/").concat(e),JSON.stringify(n)),a(n)})).catch((function(e){return n(e)}))}))}},{key:"setValue",value:function(e,t){var a=this;return new Promise((function(n,i){a.post("/sites/".concat(a.site.key,"/config/").concat(e),a.normalizeFormData(t)).then((function(t){localStorage.removeItem("@config/".concat(a.site.key,"/config/").concat(e)),n(t)})).catch((function(e){return i(e)}))}))}},{key:"deleteValue",value:function(e,t){var a=this;return new Promise((function(n,i){a.delete("/sites/".concat(a.site.key,"/config/").concat(e,"/").concat(t)).then((function(t){localStorage.setItem("@config/".concat(a.site.key,"/config/").concat(e),JSON.stringify(t)),n(t)}))}))}},{key:"validateValue",value:function(e,t){var a=this;return new Promise((function(n,i){a.post("/sites/".concat(a.site.key,"/config/").concat(e,"/validate"),a.normalizeFormData(t)).then((function(e){return n(e)})).catch((function(e){return i(e)}))}))}}]),e}());t.a=c},53:function(e,t,a){"use strict";var n=a(9),i=a(10),c=a(11),l=a(13),r=a(0),s=a.n(r),o=a(38),u=a(90),m=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(o.a,{display:"flex",alignItems:"center",justifyContent:"center",height:50},s.a.createElement(u.a,{size:25}))}}]),a}(r.Component);t.a=m},69:function(e,t,a){"use strict";var n=a(33),i=a(9),c=a(10),l=a(11),r=a(13),s=a(0),o=a.n(s),u=a(42),m=a(30),p=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).state=Object(n.a)({emptyMsg:"No Results"},e),c}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(u.a,null,"cols"in this.props?o.a.createElement(u.a.Head,null,this.props.cols.map((function(e,t){return o.a.createElement(u.a.TextHeaderCell,{key:e.key},e.label)}))):null,o.a.createElement(u.a.Body,null,"rows"in this.props&&this.props.rows.length?this.props.rows.map((function(t,a){return o.a.createElement(u.a.Row,{key:a,height:"auto",isSelectable:!0},e.props.cols.map((function(e){return o.a.createElement(u.a.TextCell,{key:e.key,height:50},t[e.key])})))})):o.a.createElement(u.a.Row,{height:50},o.a.createElement(u.a.TextCell,null,o.a.createElement(m.a,{color:"muted"},this.state.emptyMsg)))))}}]),a}(s.Component);t.a=p},85:function(e,t,a){"use strict";var n=a(9),i=a(10),c=a(11),l=a(13),r=a(0),s=a.n(r),o=a(12),u=a(219),m=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleChange=i.handleChange.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.props.field.onChange(this.props.field.key,e.target.value)}},{key:"render",value:function(){var e,t,a,n=this;return s.a.createElement("div",{className:"form-block__field"},s.a.createElement("label",{className:"form-block__field-label"},null===(e=this.props.field)||void 0===e?void 0:e.label),(null===(t=this.props.field)||void 0===t?void 0:t.description)?s.a.createElement("small",{className:"form-block__field-describe"},null===(a=this.props.field)||void 0===a?void 0:a.description):null,s.a.createElement("ul",{className:"form-block__field"},this.props.field.options?this.props.field.options.map((function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("label",null,s.a.createElement(u.a,{checked:n.props.field.value,onChange:n.handleChange}),s.a.createElement("span",{className:"form-block__field-value"},e)))})):null))}}]),a}(r.Component),p=a(220),h=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleChange=i.handleChange.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.props.field.onChange(this.props.field.key,!this.props.field.value)}},{key:"render",value:function(){var e,t;return s.a.createElement("div",null,s.a.createElement("label",{className:"form-block__field-label"},s.a.createElement(p.a,{height:20,checked:this.props.field.value,onChange:this.handleChange,hasCheckIcon:!0}),s.a.createElement("span",{className:"field-label__content"},null===(e=this.props.field)||void 0===e?void 0:e.label)),this.props.field.description?s.a.createElement("small",{className:"form-block__field-describe"},null===(t=this.props.field)||void 0===t?void 0:t.description):null)}}]),a}(r.Component),d=a(2),f=a(33),v=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleChange=i.handleChange.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(e,t){this.props.field.onChange(this.props.field.key,Object(f.a)(Object(f.a)({},this.props.field.value),{},Object(d.a)({},e,t)))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"form-block__field"},s.a.createElement("label",{className:"form-block__field-label"},this.props.field.label),this.props.field.description?s.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,s.a.createElement("ul",{className:"form-block__field-list --key-list"},Object.keys(this.props.field.keys).map((function(t,a){var n,i;return s.a.createElement("li",{key:a},s.a.createElement(I,{field:{key:t,errors:e.props.field.errors,label:t,placeholder:null===(n=e.props.field.keys[t])||void 0===n?void 0:n.placeholder,type:e.props.field.keys[t].type,onChange:e.handleChange,value:void 0===e.props.field.value?"default"in e.props.field.keys[t]?e.props.field.keys[t].default:void 0:t in e.props.field.value?e.props.field.value[t]:void 0,description:null===(i=e.props.field.keys[t])||void 0===i?void 0:i.description}}))}))))}}]),a}(r.Component),b=a(221),y=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleChange=i.handleChange.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.props.field.onChange(this.props.field.key,e.target.value)}},{key:"render",value:function(){var e;return s.a.createElement("div",{className:"form-block__field"},this.props.field.label?s.a.createElement("label",{className:"form-block__field-label"},this.props.field.label):null,this.props.field.description?s.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,s.a.createElement(b.a,{onChange:this.handleChange,value:this.props.field.value,placeholder:null===(e=this.props.field)||void 0===e?void 0:e.placeholder}))}}]),a}(r.Component),g=a(222),E=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleChange=i.handleChange.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(this.props.field.key,e.target.value)}},{key:"render",value:function(){return s.a.createElement("div",{className:"form-block__field"},s.a.createElement("label",{className:"form-block__field-label"},this.props.field.label),this.props.field.description?s.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,s.a.createElement(g.a,{onChange:this.handleChange},this.props.field.options?this.props.field.options.map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)})):null))}}]),a}(r.Component),k=a(234),O=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleChange=i.handleChange.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.props.field.onChange(this.props.field.key,e.values)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"form-block__field"},s.a.createElement("label",{className:"form-block__field-label"},this.props.field.label),this.props.field.description?s.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,s.a.createElement(k.a,{inputProps:{placeholder:this.props.field.placeholder||"Type here..."},values:this.props.field.value,onChange:function(t){e.handleChange({values:t})}}))}}]),a}(r.Component),S=a(224),j=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).handleChange=i.handleChange.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.props.field.onChange(this.props.field.key,e.target.value)}},{key:"render",value:function(){var e;return s.a.createElement("div",{className:"form-block__field"},this.props.field.label?s.a.createElement("label",{className:"form-block__field-label"},this.props.field.label):null,this.props.field.description?s.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,s.a.createElement(S.a,{onChange:this.handleChange,value:this.props.field.value,placeholder:null===(e=this.props.field)||void 0===e?void 0:e.placeholder}))}}]),a}(r.Component),C=a(38),_=a(227),N=a(58),w=a(228),P=a(239),x=a(184),A=a(229),K=a(69),D=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;Object(n.a)(this,a);var c={};return c[(i=t.call(this,e)).props.field.key]=i.props.field,i.state={defaultValue:[],showAddRow:!1,isNewField:!0,fieldData:c},i.handleChange=i.handleChange.bind(Object(o.a)(i)),i}return Object(i.a)(a,[{key:"handleChange",value:function(e){}},{key:"render",value:function(){var e,t=this;return s.a.createElement("div",{className:"form-block__field"},s.a.createElement(C.a,{display:"flex",justifyContent:"space-between",borderBottom:"muted"},s.a.createElement(C.a,null,s.a.createElement("label",{className:"form-block__field-label"},this.props.field.key.startsWith("@")?s.a.createElement(_.a,{size:10,color:"selected",marginRight:".5em"}):null,this.props.field.label),this.props.field.description?s.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null),s.a.createElement(C.a,{marginBottom:".5em"},s.a.createElement(N.a,{appearance:"minimal",iconBefore:w.a,onClick:function(e){e.preventDefault(),t.setState({showAddRow:!0})}},"Add ",this.props.field.label))),s.a.createElement(C.a,null,s.a.createElement(K.a,{emptyMsg:"No ".concat(this.props.field.label),cols:null===(e=this.props.field)||void 0===e?void 0:e.columns,rows:this.props.field.value||[]})),s.a.createElement(P.a,{isShown:this.state.showAddRow,onCloseComplete:function(){return t.setState({showAddRow:!1})}},s.a.createElement(z,{className:"split-content__form",onChange:this.handleChange,data:this.state.fieldData},s.a.createElement(C.a,{display:"flex",padding:"1em",background:"tint2",borderBottom:"muted"},s.a.createElement(C.a,{flex:1,alignItems:"center",display:"flex"},s.a.createElement(x.a,{size:600},"".concat(this.state.isNewField?"Add":"Edit"," ").concat(this.props.field.label))),s.a.createElement(C.a,null,s.a.createElement(N.a,{appearance:"minimal",iconBefore:A.a},this.state.isNewField?"Save":"Update"))))))}}]),a}(r.Component),I=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={},i}return Object(i.a)(a,[{key:"getFieldType",value:function(e){switch(e){case"checkbox":return s.a.createElement(m,{field:this.props.field});case"boolean":return s.a.createElement(h,{field:this.props.field});case"keys":return s.a.createElement(v,{field:this.props.field});case"text":return s.a.createElement(y,{field:this.props.field});case"textarea":return s.a.createElement(j,{field:this.props.field});case"select":return s.a.createElement(E,{field:this.props.field});case"string[]":return s.a.createElement(O,{field:this.props.field});case"repeater":return s.a.createElement(D,{field:this.props.field});default:return s.a.createElement(s.a.Fragment,null,this.props.field.label?s.a.createElement("label",{className:"form-block__field-label"},this.props.field.label):null,this.props.field.description?s.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null)}}},{key:"render",value:function(){return s.a.createElement("div",{className:"form-field".concat(this.props.field.errors.length?" --error":"")},this.getFieldType(this.props.field.type))}}]),a}(r.Component),T=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{className:"form-block"},this.props.children?s.a.createElement("div",{className:"form-block__heading"},this.props.children):null,s.a.createElement("div",{className:"form-block__body"},s.a.createElement("div",{className:"form-block__group"},this.props.data?Object.keys(this.props.data).map((function(t,a){return s.a.createElement(I,{key:t,field:e.props.data[t]})})):null)))}}]),a}(r.Component),z=t.a=T},96:function(e,t,a){e.exports=a(183)}},[[96,2,3]]]);
//# sourceMappingURL=main.6522dec7.chunk.js.map