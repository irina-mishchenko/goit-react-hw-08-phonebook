(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var r={};a.r(r),a.d(r,"fetchContacts",(function(){return d})),a.d(r,"addContact",(function(){return m})),a.d(r,"deleteContact",(function(){return f}));var n={};a.r(n),a.d(n,"getContacts",(function(){return b})),a.d(n,"getValue",(function(){return v})),a.d(n,"getVisibleContacts",(function(){return j}));var c=a(93),i=a(0),o=a(8),s=a(20),l=a.n(s),u=a(11),d=function(){return function(e){e(Object(u.fetchContactsRequest)()),l.a.get("/contacts").then((function(t){var a=t.data;return e(Object(u.fetchContactsSuccess)(a))})).catch((function(t){return e(Object(u.fetchContactsError)(t.message))}))}},m=function(e,t){return function(a){var r={name:e,number:t};a(Object(u.addContactRequest)()),l.a.post("/contacts",r).then((function(e){var t=e.data;return a(Object(u.addContactSuccess)(t))})).catch((function(e){return a(Object(u.addContactError)(e.message))}))}},f=function(e){return function(t){t(Object(u.deleteContactRequest)()),l.a.delete("/contacts/".concat(e)).then((function(){return t(Object(u.deleteContactSuccess)(e))})).catch((function(e){return t(Object(u.deleteContactError)(e))}))}},b=function(e){return e.contacts.items},v=function(e){return e.contacts.filter},j=function(e){var t=b(e),a=v(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(a)}))},p=a(92),O=a(42),x=(a(27),a(94)),h=a.n(x),C=a(1);function N(){var e=Object(i.useState)(""),t=Object(c.a)(e,2),a=t[0],s=t[1],l=Object(i.useState)(""),u=Object(c.a)(l,2),d=u[0],m=u[1],f=Object(o.b)();Object(i.useEffect)((function(){f(r.fetchContacts())}),[f]);var b=Object(o.c)(n.getContacts),v=function(e){switch(e.target.name){case"name":s(e.target.value);break;case"number":m(e.target.value);break;default:return}},j=function(){s(""),m("")};return Object(C.jsxs)("div",{className:h.a.formContainer,children:[Object(C.jsx)("h2",{className:h.a.formTitle,children:"Phonebook"}),Object(C.jsxs)(p.a,{onSubmit:function(e){e.preventDefault(),b.some((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?alert("".concat(a," is already in contacts!")):(f(r.addContact(a,d)),j())},children:[Object(C.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(C.jsx)(p.a.Label,{children:"Name"}),Object(C.jsx)(p.a.Control,{type:"name",placeholder:"Name",name:"name",value:a,onChange:v}),Object(C.jsx)(p.a.Text,{className:"text-muted"})]}),Object(C.jsxs)(p.a.Group,{controlId:"formBasicPassword",children:[Object(C.jsx)(p.a.Label,{children:"Namber"}),Object(C.jsx)(p.a.Control,{type:"namber",placeholder:"Number",name:"number",value:d,onChange:v})]}),Object(C.jsx)(O.a,{variant:"danger",type:"submit",children:"Add contact"})]})]})}var y=a(95),P=a.n(y),I=function(e){var t=e.contact,a=e.number,r=e.onDeleteContact,n=e.id;return Object(C.jsxs)("li",{className:P.a.contactListItem,children:[Object(C.jsxs)("p",{className:P.a.contact,children:[t,": ",a]}),Object(C.jsx)(O.a,{variant:"danger",onClick:function(){return r(n)},children:"Delete"})]})},g=a(96),F=a.n(g);var w=function(){var e=Object(o.c)(n.getVisibleContacts),t=Object(o.b)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("ul",{className:F.a.contactList,children:e.map((function(e){var a=e.name,n=e.id,c=e.number;return Object(C.jsx)(I,{contact:a,number:c,onDeleteContact:function(){return t(r.deleteContact(n))}},n)}))})})},E=a(97),k=a.n(E),_=function(){var e=Object(o.c)(n.getValue),t=Object(o.b)();return Object(C.jsx)("div",{className:k.a.filterContainer,children:Object(C.jsxs)("label",{className:k.a.filterLabel,children:["Find contact",Object(C.jsx)("input",{className:k.a.filterInput,type:"text",value:e,onChange:function(e){return t(u.changeFilter(e.target.value))}})]})})};function L(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(N,{}),Object(C.jsx)(_,{}),Object(C.jsx)(w,{})]})}},92:function(e,t,a){"use strict";var r=a(2),n=a(3),c=a(12),i=a.n(c),o=a(0),s=a.n(o),l=(a(57),a(21)),u=a.n(l),d={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},m=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,o=e.className,l=e.type,u=void 0===l?"valid":l,d=e.tooltip,m=void 0!==d&&d,f=Object(n.a)(e,["as","className","type","tooltip"]);return s.a.createElement(c,Object(r.a)({},f,{ref:t,className:i()(o,u+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=d;var f=m,b=s.a.createContext({controlId:void 0}),v=a(17),j=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,u=e.className,d=e.type,m=void 0===d?"checkbox":d,f=e.isValid,j=void 0!==f&&f,p=e.isInvalid,O=void 0!==p&&p,x=e.isStatic,h=e.as,C=void 0===h?"input":h,N=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),y=Object(o.useContext)(b),P=y.controlId,I=y.custom?[l,"custom-control-input"]:[c,"form-check-input"],g=I[0],F=I[1];return c=Object(v.a)(g,F),s.a.createElement(C,Object(r.a)({},N,{ref:t,type:m,id:a||P,className:i()(u,c,j&&"is-valid",O&&"is-invalid",x&&"position-static")}))}));j.displayName="FormCheckInput";var p=j,O=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.bsCustomPrefix,l=e.className,u=e.htmlFor,d=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(o.useContext)(b),f=m.controlId,j=m.custom?[c,"custom-control-label"]:[a,"form-check-label"],p=j[0],O=j[1];return a=Object(v.a)(p,O),s.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||f,className:i()(l,a)}))}));O.displayName="FormCheckLabel";var x=O,h=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,u=e.inline,d=void 0!==u&&u,m=e.disabled,j=void 0!==m&&m,O=e.isValid,h=void 0!==O&&O,C=e.isInvalid,N=void 0!==C&&C,y=e.feedbackTooltip,P=void 0!==y&&y,I=e.feedback,g=e.className,F=e.style,w=e.title,E=void 0===w?"":w,k=e.type,_=void 0===k?"checkbox":k,L=e.label,R=e.children,S=e.custom,V=e.as,T=void 0===V?"input":V,z=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),A="switch"===_||S,D=A?[l,"custom-control"]:[c,"form-check"],G=D[0],M=D[1];c=Object(v.a)(G,M);var q=Object(o.useContext)(b).controlId,U=Object(o.useMemo)((function(){return{controlId:a||q,custom:A}}),[q,A,a]),B=A||null!=L&&!1!==L&&!R,J=s.a.createElement(p,Object(r.a)({},z,{type:"switch"===_?"checkbox":_,ref:t,isValid:h,isInvalid:N,isStatic:!B,disabled:j,as:T}));return s.a.createElement(b.Provider,{value:U},s.a.createElement("div",{style:F,className:i()(g,c,A&&"custom-"+_,d&&c+"-inline")},R||s.a.createElement(s.a.Fragment,null,J,B&&s.a.createElement(x,{title:E},L),(h||N)&&s.a.createElement(f,{type:h?"valid":"invalid",tooltip:P},I))))}));h.displayName="FormCheck",h.Input=p,h.Label=x;var C=h,N=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,u=e.className,d=e.isValid,m=e.isInvalid,f=e.lang,j=e.as,p=void 0===j?"input":j,O=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(o.useContext)(b),h=x.controlId,C=x.custom?[l,"custom-file-input"]:[c,"form-control-file"],N=C[0],y=C[1];return c=Object(v.a)(N,y),s.a.createElement(p,Object(r.a)({},O,{ref:t,id:a||h,type:"file",lang:f,className:i()(u,c,d&&"is-valid",m&&"is-invalid")}))}));N.displayName="FormFileInput";var y=N,P=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.bsCustomPrefix,l=e.className,u=e.htmlFor,d=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(o.useContext)(b),f=m.controlId,j=m.custom?[c,"custom-file-label"]:[a,"form-file-label"],p=j[0],O=j[1];return a=Object(v.a)(p,O),s.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||f,className:i()(l,a),"data-browse":d["data-browse"]}))}));P.displayName="FormFileLabel";var I=P,g=s.a.forwardRef((function(e,t){var a=e.id,c=e.bsPrefix,l=e.bsCustomPrefix,u=e.disabled,d=void 0!==u&&u,m=e.isValid,j=void 0!==m&&m,p=e.isInvalid,O=void 0!==p&&p,x=e.feedbackTooltip,h=void 0!==x&&x,C=e.feedback,N=e.className,P=e.style,g=e.label,F=e.children,w=e.custom,E=e.lang,k=e["data-browse"],_=e.as,L=void 0===_?"div":_,R=e.inputAs,S=void 0===R?"input":R,V=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),T=w?[l,"custom"]:[c,"form-file"],z=T[0],A=T[1];c=Object(v.a)(z,A);var D=Object(o.useContext)(b).controlId,G=Object(o.useMemo)((function(){return{controlId:a||D,custom:w}}),[D,w,a]),M=null!=g&&!1!==g&&!F,q=s.a.createElement(y,Object(r.a)({},V,{ref:t,isValid:j,isInvalid:O,disabled:d,as:S,lang:E}));return s.a.createElement(b.Provider,{value:G},s.a.createElement(L,{style:P,className:i()(N,c,w&&"custom-file")},F||s.a.createElement(s.a.Fragment,null,w?s.a.createElement(s.a.Fragment,null,q,M&&s.a.createElement(I,{"data-browse":k},g)):s.a.createElement(s.a.Fragment,null,M&&s.a.createElement(I,null,g),q),(j||O)&&s.a.createElement(f,{type:j?"valid":"invalid",tooltip:h},C))))}));g.displayName="FormFile",g.Input=y,g.Label=I;var F=g,w=(a(58),s.a.forwardRef((function(e,t){var a,c,l=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,m=e.size,f=e.htmlSize,j=e.id,p=e.className,O=e.isValid,x=void 0!==O&&O,h=e.isInvalid,C=void 0!==h&&h,N=e.plaintext,y=e.readOnly,P=e.custom,I=e.as,g=void 0===I?"input":I,F=Object(n.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),w=Object(o.useContext)(b).controlId,E=P?[u,"custom"]:[l,"form-control"],k=E[0],_=E[1];if(l=Object(v.a)(k,_),N)(c={})[l+"-plaintext"]=!0,a=c;else if("file"===d){var L;(L={})[l+"-file"]=!0,a=L}else if("range"===d){var R;(R={})[l+"-range"]=!0,a=R}else if("select"===g&&P){var S;(S={})[l+"-select"]=!0,S[l+"-select-"+m]=m,a=S}else{var V;(V={})[l]=!0,V[l+"-"+m]=m,a=V}return s.a.createElement(g,Object(r.a)({},F,{type:d,size:f,ref:t,readOnly:y,id:j||w,className:i()(p,a,x&&"is-valid",C&&"is-invalid")}))})));w.displayName="FormControl";var E=Object.assign(w,{Feedback:f}),k=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,l=e.children,u=e.controlId,d=e.as,m=void 0===d?"div":d,f=Object(n.a)(e,["bsPrefix","className","children","controlId","as"]);a=Object(v.a)(a,"form-group");var j=Object(o.useMemo)((function(){return{controlId:u}}),[u]);return s.a.createElement(b.Provider,{value:j},s.a.createElement(m,Object(r.a)({},f,{ref:t,className:i()(c,a)}),l))}));k.displayName="FormGroup";var _=k,L=["xl","lg","md","sm","xs"],R=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.as,l=void 0===o?"div":o,u=Object(n.a)(e,["bsPrefix","className","as"]),d=Object(v.a)(a,"col"),m=[],f=[];return L.forEach((function(e){var t,a,r,n=u[e];if(delete u[e],"object"===typeof n&&null!=n){var c=n.span;t=void 0===c||c,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+d+i:""+d+i+"-"+t),null!=r&&f.push("order"+i+"-"+r),null!=a&&f.push("offset"+i+"-"+a)})),m.length||m.push(d),s.a.createElement(l,Object(r.a)({},u,{ref:t,className:i.a.apply(void 0,[c].concat(m,f))}))}));R.displayName="Col";var S=R,V=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"label":a,l=e.bsPrefix,u=e.column,d=e.srOnly,m=e.className,f=e.htmlFor,j=Object(n.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),p=Object(o.useContext)(b).controlId;l=Object(v.a)(l,"form-label");var O="col-form-label";"string"===typeof u&&(O=O+" "+O+"-"+u);var x=i()(m,l,d&&"sr-only",u&&O);return f=f||p,u?s.a.createElement(S,Object(r.a)({as:"label",className:x,htmlFor:f},j)):s.a.createElement(c,Object(r.a)({ref:t,className:x,htmlFor:f},j))}));V.displayName="FormLabel",V.defaultProps={column:!1,srOnly:!1};var T=V,z=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.as,l=void 0===o?"small":o,u=e.muted,d=Object(n.a)(e,["bsPrefix","className","as","muted"]);return a=Object(v.a)(a,"form-text"),s.a.createElement(l,Object(r.a)({},d,{ref:t,className:i()(c,a,u&&"text-muted")}))}));z.displayName="FormText";var A=z,D=s.a.forwardRef((function(e,t){return s.a.createElement(C,Object(r.a)({},e,{ref:t,type:"switch"}))}));D.displayName="Switch",D.Input=C.Input,D.Label=C.Label;var G=D,M=/-(.)/g;var q=function(e){return e[0].toUpperCase()+(t=e,t.replace(M,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var U=function(e,t){var a=void 0===t?{}:t,c=a.displayName,o=void 0===c?q(e):c,l=a.Component,u=a.defaultProps,d=s.a.forwardRef((function(t,a){var c=t.className,o=t.bsPrefix,u=t.as,d=void 0===u?l||"div":u,m=Object(n.a)(t,["className","bsPrefix","as"]),f=Object(v.a)(o,e);return s.a.createElement(d,Object(r.a)({ref:a,className:i()(c,f)},m))}));return d.defaultProps=u,d.displayName=o,d}("form-row"),B=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.inline,o=e.className,l=e.validated,u=e.as,d=void 0===u?"form":u,m=Object(n.a)(e,["bsPrefix","inline","className","validated","as"]);return a=Object(v.a)(a,"form"),s.a.createElement(d,Object(r.a)({},m,{ref:t,className:i()(o,l&&"was-validated",c&&a+"-inline")}))}));B.displayName="Form",B.defaultProps={inline:!1},B.Row=U,B.Group=_,B.Control=E,B.Check=C,B.File=F,B.Switch=G,B.Label=T,B.Text=A;t.a=B},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(43);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(s){n=!0,c=s}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},94:function(e,t,a){e.exports={formContainer:"ContactForm_formContainer__r_I_s",formTitle:"ContactForm_formTitle__2hrsN"}},95:function(e,t,a){e.exports={contactListItem:"ContactListItem_contactListItem__OXN3r",contact:"ContactListItem_contact__3hWz9"}},96:function(e,t,a){e.exports={contactList:"ContactList_contactList__NFCz_"}},97:function(e,t,a){e.exports={filterContainer:"Filter_filterContainer__2_cu2",filterLabel:"Filter_filterLabel__1VMVF",filterInput:"Filter_filterInput__3KWSU"}}}]);
//# sourceMappingURL=3.e43c8636.chunk.js.map