(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{92:function(e,a,t){"use strict";var r=t(2),s=t(3),l=t(12),i=t.n(l),o=t(0),c=t.n(o),n=(t(57),t(21)),d=t.n(n),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},b=c.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,o=e.className,n=e.type,d=void 0===n?"valid":n,m=e.tooltip,b=void 0!==m&&m,u=Object(s.a)(e,["as","className","type","tooltip"]);return c.a.createElement(l,Object(r.a)({},u,{ref:a,className:i()(o,d+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=m;var u=b,f=c.a.createContext({controlId:void 0}),v=t(17),p=c.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.type,b=void 0===m?"checkbox":m,u=e.isValid,p=void 0!==u&&u,j=e.isInvalid,O=void 0!==j&&j,x=e.isStatic,h=e.as,y=void 0===h?"input":h,N=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(o.useContext)(f),w=P.controlId,C=P.custom?[n,"custom-control-input"]:[l,"form-check-input"],I=C[0],E=C[1];return l=Object(v.a)(I,E),c.a.createElement(y,Object(r.a)({},N,{ref:a,type:b,id:t||w,className:i()(d,l,p&&"is-valid",O&&"is-invalid",x&&"position-static")}))}));p.displayName="FormCheckInput";var j=p,O=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(f),u=b.controlId,p=b.custom?[l,"custom-control-label"]:[t,"form-check-label"],j=p[0],O=p[1];return t=Object(v.a)(j,O),c.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||u,className:i()(n,t)}))}));O.displayName="FormCheckLabel";var x=O,h=c.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,d=e.inline,m=void 0!==d&&d,b=e.disabled,p=void 0!==b&&b,O=e.isValid,h=void 0!==O&&O,y=e.isInvalid,N=void 0!==y&&y,P=e.feedbackTooltip,w=void 0!==P&&P,C=e.feedback,I=e.className,E=e.style,F=e.title,g=void 0===F?"":F,k=e.type,S=void 0===k?"checkbox":k,R=e.label,V=e.children,L=e.custom,T=e.as,z=void 0===T?"input":T,G=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),A="switch"===S||L,B=A?[n,"custom-control"]:[l,"form-check"],M=B[0],J=B[1];l=Object(v.a)(M,J);var U=Object(o.useContext)(f).controlId,D=Object(o.useMemo)((function(){return{controlId:t||U,custom:A}}),[U,A,t]),q=A||null!=R&&!1!==R&&!V,H=c.a.createElement(j,Object(r.a)({},G,{type:"switch"===S?"checkbox":S,ref:a,isValid:h,isInvalid:N,isStatic:!q,disabled:p,as:z}));return c.a.createElement(f.Provider,{value:D},c.a.createElement("div",{style:E,className:i()(I,l,A&&"custom-"+S,m&&l+"-inline")},V||c.a.createElement(c.a.Fragment,null,H,q&&c.a.createElement(x,{title:g},R),(h||N)&&c.a.createElement(u,{type:h?"valid":"invalid",tooltip:w},C))))}));h.displayName="FormCheck",h.Input=j,h.Label=x;var y=h,N=c.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.isValid,b=e.isInvalid,u=e.lang,p=e.as,j=void 0===p?"input":p,O=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(o.useContext)(f),h=x.controlId,y=x.custom?[n,"custom-file-input"]:[l,"form-control-file"],N=y[0],P=y[1];return l=Object(v.a)(N,P),c.a.createElement(j,Object(r.a)({},O,{ref:a,id:t||h,type:"file",lang:u,className:i()(d,l,m&&"is-valid",b&&"is-invalid")}))}));N.displayName="FormFileInput";var P=N,w=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(f),u=b.controlId,p=b.custom?[l,"custom-file-label"]:[t,"form-file-label"],j=p[0],O=p[1];return t=Object(v.a)(j,O),c.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||u,className:i()(n,t),"data-browse":m["data-browse"]}))}));w.displayName="FormFileLabel";var C=w,I=c.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,n=e.bsCustomPrefix,d=e.disabled,m=void 0!==d&&d,b=e.isValid,p=void 0!==b&&b,j=e.isInvalid,O=void 0!==j&&j,x=e.feedbackTooltip,h=void 0!==x&&x,y=e.feedback,N=e.className,w=e.style,I=e.label,E=e.children,F=e.custom,g=e.lang,k=e["data-browse"],S=e.as,R=void 0===S?"div":S,V=e.inputAs,L=void 0===V?"input":V,T=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=F?[n,"custom"]:[l,"form-file"],G=z[0],A=z[1];l=Object(v.a)(G,A);var B=Object(o.useContext)(f).controlId,M=Object(o.useMemo)((function(){return{controlId:t||B,custom:F}}),[B,F,t]),J=null!=I&&!1!==I&&!E,U=c.a.createElement(P,Object(r.a)({},T,{ref:a,isValid:p,isInvalid:O,disabled:m,as:L,lang:g}));return c.a.createElement(f.Provider,{value:M},c.a.createElement(R,{style:w,className:i()(N,l,F&&"custom-file")},E||c.a.createElement(c.a.Fragment,null,F?c.a.createElement(c.a.Fragment,null,U,J&&c.a.createElement(C,{"data-browse":k},I)):c.a.createElement(c.a.Fragment,null,J&&c.a.createElement(C,null,I),U),(p||O)&&c.a.createElement(u,{type:p?"valid":"invalid",tooltip:h},y))))}));I.displayName="FormFile",I.Input=P,I.Label=C;var E=I,F=(t(58),c.a.forwardRef((function(e,a){var t,l,n=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,b=e.size,u=e.htmlSize,p=e.id,j=e.className,O=e.isValid,x=void 0!==O&&O,h=e.isInvalid,y=void 0!==h&&h,N=e.plaintext,P=e.readOnly,w=e.custom,C=e.as,I=void 0===C?"input":C,E=Object(s.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(o.useContext)(f).controlId,g=w?[d,"custom"]:[n,"form-control"],k=g[0],S=g[1];if(n=Object(v.a)(k,S),N)(l={})[n+"-plaintext"]=!0,t=l;else if("file"===m){var R;(R={})[n+"-file"]=!0,t=R}else if("range"===m){var V;(V={})[n+"-range"]=!0,t=V}else if("select"===I&&w){var L;(L={})[n+"-select"]=!0,L[n+"-select-"+b]=b,t=L}else{var T;(T={})[n]=!0,T[n+"-"+b]=b,t=T}return c.a.createElement(I,Object(r.a)({},E,{type:m,size:u,ref:a,readOnly:P,id:p||F,className:i()(j,t,x&&"is-valid",y&&"is-invalid")}))})));F.displayName="FormControl";var g=Object.assign(F,{Feedback:u}),k=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.children,d=e.controlId,m=e.as,b=void 0===m?"div":m,u=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return c.a.createElement(f.Provider,{value:p},c.a.createElement(b,Object(r.a)({},u,{ref:a,className:i()(l,t)}),n))}));k.displayName="FormGroup";var S=k,R=["xl","lg","md","sm","xs"],V=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.as,n=void 0===o?"div":o,d=Object(s.a)(e,["bsPrefix","className","as"]),m=Object(v.a)(t,"col"),b=[],u=[];return R.forEach((function(e){var a,t,r,s=d[e];if(delete d[e],"object"===typeof s&&null!=s){var l=s.span;a=void 0===l||l,t=s.offset,r=s.order}else a=s;var i="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+m+i:""+m+i+"-"+a),null!=r&&u.push("order"+i+"-"+r),null!=t&&u.push("offset"+i+"-"+t)})),b.length||b.push(m),c.a.createElement(n,Object(r.a)({},d,{ref:a,className:i.a.apply(void 0,[l].concat(b,u))}))}));V.displayName="Col";var L=V,T=c.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,n=e.bsPrefix,d=e.column,m=e.srOnly,b=e.className,u=e.htmlFor,p=Object(s.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),j=Object(o.useContext)(f).controlId;n=Object(v.a)(n,"form-label");var O="col-form-label";"string"===typeof d&&(O=O+" "+O+"-"+d);var x=i()(b,n,m&&"sr-only",d&&O);return u=u||j,d?c.a.createElement(L,Object(r.a)({as:"label",className:x,htmlFor:u},p)):c.a.createElement(l,Object(r.a)({ref:a,className:x,htmlFor:u},p))}));T.displayName="FormLabel",T.defaultProps={column:!1,srOnly:!1};var z=T,G=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.as,n=void 0===o?"small":o,d=e.muted,m=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),c.a.createElement(n,Object(r.a)({},m,{ref:a,className:i()(l,t,d&&"text-muted")}))}));G.displayName="FormText";var A=G,B=c.a.forwardRef((function(e,a){return c.a.createElement(y,Object(r.a)({},e,{ref:a,type:"switch"}))}));B.displayName="Switch",B.Input=y.Input,B.Label=y.Label;var M=B,J=/-(.)/g;var U=function(e){return e[0].toUpperCase()+(a=e,a.replace(J,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var D=function(e,a){var t=void 0===a?{}:a,l=t.displayName,o=void 0===l?U(e):l,n=t.Component,d=t.defaultProps,m=c.a.forwardRef((function(a,t){var l=a.className,o=a.bsPrefix,d=a.as,m=void 0===d?n||"div":d,b=Object(s.a)(a,["className","bsPrefix","as"]),u=Object(v.a)(o,e);return c.a.createElement(m,Object(r.a)({ref:t,className:i()(l,u)},b))}));return m.defaultProps=d,m.displayName=o,m}("form-row"),q=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,o=e.className,n=e.validated,d=e.as,m=void 0===d?"form":d,b=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),c.a.createElement(m,Object(r.a)({},b,{ref:a,className:i()(o,n&&"was-validated",l&&t+"-inline")}))}));q.displayName="Form",q.defaultProps={inline:!1},q.Row=D,q.Group=S,q.Control=g,q.Check=y,q.File=E,q.Switch=M,q.Label=z,q.Text=A;a.a=q},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(43);function s(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,s=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(t.push(i.value),!a||t.length!==a);r=!0);}catch(c){s=!0,l=c}finally{try{r||null==o.return||o.return()}finally{if(s)throw l}}return t}}(e,a)||Object(r.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},98:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var r=t(93),s=t(0),l=t(8),i=t(10),o=t(92),c=t(42),n=(t(27),t(1));function d(){var e=Object(l.b)(),a=Object(s.useState)(""),t=Object(r.a)(a,2),d=t[0],m=t[1],b=Object(s.useState)(""),u=Object(r.a)(b,2),f=u[0],v=u[1],p=Object(s.useState)(""),j=Object(r.a)(p,2),O=j[0],x=j[1],h=function(e){var a=e.target,t=a.name,r=a.value;switch(t){case"name":m(r);break;case"email":v(r);break;case"password":x(r);break;default:return}};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Sign up"}),Object(n.jsxs)(o.a,{onSubmit:function(a){a.preventDefault(),e(i.a.register({name:d,email:f,password:O})),m(""),v(""),x("")},autoComplete:"off",children:[Object(n.jsxs)(o.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(o.a.Label,{children:"Name"}),Object(n.jsx)(o.a.Control,{type:"text",placeholder:"Name",name:"name",value:d,onChange:h}),Object(n.jsx)(o.a.Text,{className:"text-muted"})]}),Object(n.jsxs)(o.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsx)(o.a.Label,{children:"Email"}),Object(n.jsx)(o.a.Control,{type:"text",placeholder:"Email",name:"email",value:f,onChange:h})]}),Object(n.jsxs)(o.a.Group,{controlId:"formBasicPassword",children:[Object(n.jsx)(o.a.Label,{children:"Password"}),Object(n.jsx)(o.a.Control,{type:"password",placeholder:"Password",name:"password",value:O,onChange:h})]}),Object(n.jsx)(c.a,{variant:"primary",type:"submit",children:"Sign up"})]})]})}}}]);
//# sourceMappingURL=5.efbcd0ee.chunk.js.map