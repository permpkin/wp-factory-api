(this["webpackJsonpwp-factory"]=this["webpackJsonpwp-factory"]||[]).push([[17],{203:function(e,t,a){"use strict";var n=a(204),l=a(12),i=a(13),r=a(15),s=a(20),o=a(0),c=a.n(o),d=a(260),u=a(50),p=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state=Object(n.a)({emptyMsg:"No Results"},e),i}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(d.a,null,"cols"in this.props?c.a.createElement(d.a.Head,null,this.props.cols.map((function(e,t){return c.a.createElement(d.a.TextHeaderCell,{key:e.key},e.label)}))):null,c.a.createElement(d.a.Body,null,"rows"in this.props&&this.props.rows.length?this.props.rows.map((function(t,a){return c.a.createElement(d.a.Row,{key:a,height:"auto",isSelectable:!0},e.props.cols.map((function(e){return c.a.createElement(d.a.TextCell,{key:e.key,height:50},t[e.key])})))})):c.a.createElement(d.a.Row,{height:50},c.a.createElement(d.a.TextCell,null,c.a.createElement(u.a,{color:"muted"},this.state.emptyMsg)))))}}]),a}(o.Component);t.a=p},216:function(e,t,a){var n={"./Blocks":[207,2],"./Blocks.js":[207,2],"./CustomFields":[208,3],"./CustomFields.js":[208,3],"./CustomPostType":[209,4],"./CustomPostType.js":[209,4],"./Pages":[210,5],"./Pages.js":[210,5],"./SchemaConfig":[202,10],"./SchemaConfig.js":[202,10],"./Scripts":[211,6],"./Scripts.js":[211,6],"./Settings":[212,7],"./Settings.js":[212,7],"./Styles":[213,8],"./Styles.js":[213,8],"./Taxonomies":[214,9],"./Taxonomies.js":[214,9]};function l(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],l=t[0];return a.e(t[1]).then((function(){return a(l)}))}l.keys=function(){return Object.keys(n)},l.id=216,e.exports=l},261:function(e,t,a){"use strict";a.r(t);var n=a(26),l=a.n(n),i=a(204),r=a(36),s=a(12),o=a(13),c=a(25),d=a(15),u=a(20),p=a(0),f=a.n(p),h=a(240),m=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state=Object(i.a)({label:!1,name:"",options:[],defaultValue:[]},e),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return f.a.createElement("div",{className:"form-block__field"},f.a.createElement("label",{className:"form-block__field-label"},this.state.label),this.state.description?f.a.createElement("small",{className:"form-block__field-describe"},this.state.description):null,f.a.createElement("ul",{className:"form-block__field"},this.state.options?this.state.options.map((function(t,a){return f.a.createElement("li",{key:a},f.a.createElement("label",null,f.a.createElement(h.a,{checked:t,onChange:e.props.onChange}),f.a.createElement("span",{className:"form-block__field-value"},t)))})):null))}}]),a}(p.Component),b=a(241),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement("label",{className:"form-block__field-label"},f.a.createElement(b.a,{height:20,checked:this.props.field.value,onChange:this.props.onChange,hasCheckIcon:!0}),f.a.createElement("span",{className:"field-label__content"},this.props.field.label)),this.props.field.description?f.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null)}}]),a}(p.Component),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={defaultValue:{},field:e.field,fieldData:[],ready:!1},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({ready:!0})}},{key:"handleChange",value:function(e,t){}},{key:"render",value:function(){var e=this;return f.a.createElement("div",{className:"form-block__field"},f.a.createElement("label",{className:"form-block__field-label"},this.props.field.label),this.props.field.description?f.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,f.a.createElement("ul",{className:"form-block__field-list --key-list"},this.state.ready?Object.keys(this.props.field.keys).map((function(t,a){var n,l;return f.a.createElement("li",{key:a},f.a.createElement(V,{onChange:e.handleChange,field:{errors:e.props.field.errors,label:t,placeholder:null===(n=e.props.field.keys[t])||void 0===n?void 0:n.placeholder,type:e.props.field.keys[t].type,value:void 0===e.props.field.value?"default"in e.props.field.keys[t]?e.props.field.keys[t].default:void 0:t in e.props.field.value?e.props.field.value[t]:void 0,description:null===(l=e.props.field.keys[t])||void 0===l?void 0:l.description}}))})):null))}}]),a}(p.Component),y=a(242),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={defaultValue:"",field:e.field},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(this.props.field.key,e.target.value),this.setState({field:Object(i.a)(Object(i.a)({},this.state.field),{},{value:e.target.value})})}},{key:"render",value:function(){var e;return f.a.createElement("div",{className:"form-block__field"},this.props.field.label?f.a.createElement("label",{className:"form-block__field-label"},this.props.field.label):null,this.props.field.description?f.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,f.a.createElement(y.a,{onChange:this.handleChange,value:this.state.field.value,placeholder:null===(e=this.props.field)||void 0===e?void 0:e.placeholder}))}}]),a}(p.Component),E=a(243),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={defaultValue:"",field:e.field},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(this.props.field.key,e.target.value),this.setState({field:Object(i.a)(Object(i.a)({},this.state.field),{},{value:e.target.value})})}},{key:"render",value:function(){return f.a.createElement("div",{className:"form-block__field"},f.a.createElement("label",{className:"form-block__field-label"},this.props.field.label),this.props.field.description?f.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,f.a.createElement(E.a,{onChange:this.handleChange},this.props.field.options?this.props.field.options.map((function(e,t){return f.a.createElement("option",{key:t,value:e},e)})):null))}}]),a}(p.Component),j=a(263),O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return f.a.createElement("div",{className:"form-block__field"},f.a.createElement("label",{className:"form-block__field-label"},this.props.field.label),this.props.field.description?f.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,f.a.createElement(j.a,{inputProps:{placeholder:this.props.field.placeholder||"Type here..."},values:this.props.field.value}))}}]),a}(p.Component),_=a(244),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={defaultValue:"",field:e.field},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onChange(this.props.field.key,e.target.value),this.setState({field:Object(i.a)(Object(i.a)({},this.state.field),{},{value:e.target.value})})}},{key:"render",value:function(){var e;return f.a.createElement("div",{className:"form-block__field"},this.props.field.label?f.a.createElement("label",{className:"form-block__field-label"},this.props.field.label):null,this.props.field.description?f.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null,f.a.createElement(_.a,{onChange:this.handleChange,value:this.state.field.value,placeholder:null===(e=this.props.field)||void 0===e?void 0:e.placeholder}))}}]),a}(p.Component),w=a(49),S=a(246),D=a(168),x=a(228),B=a(229),T=a(194),R=a(247),F=a(203),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(s.a)(this,a);var l={};return l[(n=t.call(this,e)).props.field.key]=n.props.field,n.state={defaultValue:[],showAddRow:!1,isNewField:!0,fieldData:l},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){}},{key:"render",value:function(){var e,t=this;return f.a.createElement("div",{className:"form-block__field"},f.a.createElement(w.a,{display:"flex",justifyContent:"space-between",borderBottom:"muted"},f.a.createElement(w.a,null,f.a.createElement("label",{className:"form-block__field-label"},this.props.field.key.startsWith("@")?f.a.createElement(S.a,{size:10,color:"selected",marginRight:".5em"}):null,this.props.field.label),this.props.field.description?f.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null),f.a.createElement(w.a,{marginBottom:".5em"},f.a.createElement(D.a,{appearance:"minimal",iconBefore:x.a,onClick:function(e){e.preventDefault(),t.setState({showAddRow:!0})}},"Add ",this.props.field.label))),f.a.createElement(w.a,null,f.a.createElement(F.a,{emptyMsg:"No ".concat(this.props.field.label),cols:null===(e=this.props.field)||void 0===e?void 0:e.columns,rows:this.props.field.value||[]})),f.a.createElement(B.a,{isShown:this.state.showAddRow,onCloseComplete:function(){return t.setState({showAddRow:!1})}},f.a.createElement(A,{className:"split-content__form",onChange:this.handleChange,data:this.state.fieldData},f.a.createElement(w.a,{display:"flex",padding:"1em",background:"tint2",borderBottom:"muted"},f.a.createElement(w.a,{flex:1,alignItems:"center",display:"flex"},f.a.createElement(T.a,{size:600},"".concat(this.state.isNewField?"Add":"Edit"," ").concat(this.props.field.label))),f.a.createElement(w.a,null,f.a.createElement(D.a,{appearance:"minimal",iconBefore:R.a},this.state.isNewField?"Save":"Update"))))))}}]),a}(p.Component),V=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"getFieldType",value:function(e){switch(e){case"checkbox":return f.a.createElement(m,{onChange:this.props.field.onChange,field:this.props.field});case"boolean":return f.a.createElement(v,{onChange:this.props.field.onChange,field:this.props.field});case"keys":return f.a.createElement(g,{onChange:this.props.field.onChange,field:this.props.field});case"text":return f.a.createElement(k,{onChange:this.props.field.onChange,field:this.props.field});case"textarea":return f.a.createElement(N,{onChange:this.props.field.onChange,field:this.props.field});case"select":return f.a.createElement(C,{onChange:this.props.field.onChange,field:this.props.field});case"string[]":return f.a.createElement(O,{onChange:this.props.field.onChange,field:this.props.field});case"repeater":return f.a.createElement(P,{onChange:this.props.field.onChange,field:this.props.field});default:return f.a.createElement(f.a.Fragment,null,this.props.field.label?f.a.createElement("label",{className:"form-block__field-label"},this.props.field.label):null,this.props.field.description?f.a.createElement("small",{className:"form-block__field-describe"},this.props.field.description):null)}}},{key:"render",value:function(){return f.a.createElement("div",{className:"form-field".concat(this.props.field.errors.length?" --error":"")},this.getFieldType(this.props.field.type))}}]),a}(p.Component),A=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return f.a.createElement("form",{className:"form-block"},f.a.createElement("div",{className:"form-block__heading"},this.props.children),f.a.createElement("div",{className:"form-block__body"},f.a.createElement("div",{className:"form-block__group"},this.props.data?Object.keys(this.props.data).map((function(t,a){return f.a.createElement(V,{key:t,field:e.props.data[t]})})):null)))}}]),a}(p.Component),M=a(35),z=a(248),U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={code:e.codeString||"// empty file"},n}return Object(o.a)(a,[{key:"render",value:function(){this.state.code;return f.a.createElement(z.a,{minHeight:"100%"},f.a.createElement("code",null,this.state.code))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.code!==t.code?{code:e.codeString}:null}}]),a}(p.Component),H=a(249),K=a(195),I=a(219),J=a(250),L=a(251),W=a(262),q=a(193),G=a(44),Q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={ready:!1,busy:!0,isDeleteShown:!1,isShown:!1},a.mounted=!1,a.saveDocument=a.saveDocument.bind(Object(c.a)(a)),a.handleChange=a.handleChange.bind(Object(c.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(l.a.mark((function e(){var t,n,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="new"===(null===(t=this.props.match)||void 0===t?void 0:t.params.id),this.mounted=!0,a(216)("./".concat(this.props.schemaKey)).then((function(e){return new e.default})).then((function(e){M.a.getSchema(e.key).then((function(t){t.documentation;var a=t.schema,l=t.supportsTemplates;t.table;r.mounted&&M.a.getValue(e.key).then((function(e){var t;return(null===(t=r.props)||void 0===t?void 0:t.isSingular)?{}:e.filter((function(e){var t;return e.key===(null===(t=r.props.match.params)||void 0===t?void 0:t.id)}))})).then((function(e){var t;return(null===(t=r.props)||void 0===t?void 0:t.isSingular)?{}:!!e.length&&e[0]})).then((function(e){return n?{}:e})).then((function(e){if(r.mounted&&(e||n)){var t={};Object.keys(a).forEach((function(n){var l;t[n]=Object(i.a)(Object(i.a)({},a[n]),{},{key:n,errors:[],onChange:function(e){r.value=e},value:function(){var t;if(!(n in e)||void 0===e[n])return a[n].default||void 0;switch(null===(t=a[n])||void 0===t?void 0:t.type){case"string[]":return e[n].map((function(e){return"string"===typeof e?e:"".concat(e.id,"@").concat(e.version)}));case"keys":return function(){var t={};return Object.keys(a[n].keys).forEach((function(l){var i,r=l in e[n]?e[n][l]:null===(i=a[n][l])||void 0===i?void 0:i.default;void 0!==r&&(t[l]=r)})),t}();default:return e[n]}}()}),"repeater"===(null===(l=a[n])||void 0===l?void 0:l.type)&&(t[n].columns="columns"in t[n]?t[n].columns:[{label:"Key",key:"key"}])})),r.setState({isNew:n,supportsTemplates:l,formData:t,busy:!1,ready:!0})}}))}))}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"saveDocument",value:function(e){e.preventDefault()}},{key:"handleChange",value:function(e,t,a){}},{key:"render",value:function(){var e=this;return f.a.createElement("article",null,this.state.ready?f.a.createElement("section",{className:"split-content"},f.a.createElement("div",{className:"split-content__left"},this.state.busy?f.a.createElement(G.a,null):f.a.createElement(A,{className:"split-content__form",onChange:this.handleChange,data:this.state.formData},f.a.createElement(w.a,{display:"flex",padding:".5em",background:"tint2"},f.a.createElement(w.a,{flex:1,alignItems:"center",display:"flex"},f.a.createElement(T.a,{size:600},"".concat(this.props.schemaKey," Config"))),f.a.createElement(w.a,null,this.state.supportsTemplates?f.a.createElement(D.a,{appearance:"minimal",iconBefore:H.a},"Save as Template"):null,f.a.createElement(D.a,{appearance:"minimal",iconBefore:K.a},"Validate"))))),f.a.createElement("div",{className:"split-content__right"},f.a.createElement(w.a,{padding:".5em",backgroundColor:"white",borderBottom:"muted"},f.a.createElement(D.a,{appearance:"minimal",onClick:this.saveDocument,iconBefore:R.a},this.state.isNew?"Save":"Update"),f.a.createElement(D.a,{appearance:"minimal",iconBefore:I.a,onClick:function(t){t.preventDefault(),e.setState({isShown:!0})}},"Edit Json"),this.state.isNew?null:f.a.createElement(D.a,{appearance:"minimal",intent:"danger",marginRight:".5em",iconBefore:J.a,onClick:function(t){t.preventDefault(),e.setState({isDeleteShown:!0})}},"Delete")))):null,f.a.createElement(B.a,{isShown:this.state.isShown,onCloseComplete:function(){return e.setState({isShown:!1})}},f.a.createElement(U,{codeString:this.state.formString})),f.a.createElement(L.a,{isShown:this.state.isDeleteShown,hasHeader:!1,intent:"danger",isConfirmLoading:this.state.busy,onConfirm:function(){e.setState({busy:!0}),M.a.delete(e.props.schemaKey,e.state.formDoc.config.key).then((function(t){e.setState({isDeleteShown:!1}),e.props.history.goBack(),W.a.success("Removed Successfully",{description:"Connect your source to a destination to receive data."})}))},onCloseComplete:function(){return e.setState({isDeleteShown:!1,busy:!1})},confirmLabel:"Delete"},f.a.createElement(T.a,{size:600},"Are you sure?"),f.a.createElement(q.a,{size:400,color:"muted"},"Removing this ",this.props.schemaPath," may effect other components that require it.")))}}]),n}(p.Component);t.default=Q}}]);
//# sourceMappingURL=17.8bcbcfef.chunk.js.map