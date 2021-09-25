(this["webpackJsonpdevops-components"]=this["webpackJsonpdevops-components"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c,s,a=n(0),i=n.n(a),r=n(3),d=n.n(r),l=(n(19),n(2)),b=n(4),j=n(14),u=n(12),o=n.n(u),p=n(1);!function(e){e.Large="lg",e.Small="sm"}(c||(c={})),function(e){e.Primary="primary",e.Default="default",e.Danger="danger"}(s||(s={}));var O=function(e){var t,n=e.children,c=e.disabled,s=e.className,a=(e.href,e.size),i=e.btnType,r=Object(j.a)(e,["children","disabled","className","href","size","btnType"]),d=o()("devops-btn",s,(t={},Object(b.a)(t,"devops-btn-".concat(i),i),Object(b.a)(t,"devops-btn-".concat(a),a),Object(b.a)(t,"disabled",c),t));return Object(p.jsx)("button",Object(l.a)(Object(l.a)({className:d,disabled:c},r),{},{children:Object(p.jsx)("span",{children:n})}))};O.defaultProps={disabled:!1,btnType:s.Default};var h=O,m=(n(21),n(22),n(13)),f=n(11),x=n(7),v=n.p+"static/media/emergency.c4d66385.svg",g=n.p+"static/media/high.1a2b660d.svg",y=n.p+"static/media/middle.a1dafc38.svg",T=n.p+"static/media/low.3a41ebe1.svg",N=n.p+"static/media/bug.6124012a.svg";function D(e){switch(e){case 0:return"\u672a\u5f00\u59cb";case 1:return"\u5f00\u53d1\u4e2d";case 2:return"\u6d4b\u8bd5\u4e2d";case 3:return"\u5df2\u5b8c\u6210";default:return"\u672a\u77e5"}}function z(e){switch(e){case"emergency":return v;case"high":return g;case"middle":return y;case"low":return T;default:return N}}var I=function(e){var t=e.records,n=void 0===t?[]:t,c=e.onIssueClick,s=e.onIssueDragEnd,i=Object(a.useState)([[],[],[],[]]),r=Object(f.a)(i,2),d=r[0],b=r[1];return Object(a.useEffect)((function(){var e=n.filter((function(e){return"notStarted"===e.status})),t=n.filter((function(e){return"dev"===e.status})),c=n.filter((function(e){return"test"===e.status})),s=n.filter((function(e){return"done"===e.status}));b([e,t,c,s])}),[n]),Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"kanban-wrapper",children:Object(p.jsx)("div",{className:"column-container",children:Object(p.jsx)("div",{className:"column-wrapper",children:Object(p.jsx)(x.a,{onDragEnd:function(e){var t=e.source,n=e.destination;if(n){var c=+t.droppableId,a=+n.droppableId,i=d[c][t.index];if(s&&s(i,a+1),c!==a){var r=function(e,t,n,c){var s=Array.from(e),a=Array.from(t),i=s.splice(n.index,1),r=Object(f.a)(i,1)[0];a.splice(c.index,0,r);var d={};return d[n.droppableId]=s,d[c.droppableId]=a,d}(d[c],d[a],t,n),l=Object(m.a)(d);l[c]=r[c],l[a]=r[a],b(l)}}},children:d.map((function(e,t){return Object(p.jsx)(x.c,{droppableId:"".concat(t),children:function(n,s){return Object(p.jsxs)("div",Object(l.a)(Object(l.a)({className:"column",ref:n.innerRef},n.droppableProps),{},{children:[s.isDraggingOver&&Object(p.jsx)("div",{className:"mask",children:Object(p.jsx)("span",{children:D(t)})}),Object(p.jsxs)("div",{className:"column-header",children:[Object(p.jsx)("div",{className:"title",children:D(t)}),Object(p.jsx)("div",{className:"num-tag",children:e.length})]}),Object(p.jsx)("div",{className:"items",children:e.map((function(e,t){return Object(p.jsx)(x.b,{draggableId:"".concat(e.id),index:t,children:function(t,n){return Object(p.jsx)("div",Object(l.a)(Object(l.a)(Object(l.a)({className:"card",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(p.jsxs)("div",{className:"header",onClick:function(){c&&c(e)},children:[Object(p.jsx)("div",{className:"title",children:e.title}),Object(p.jsx)("div",{className:"label-section",children:e.deadline&&Object(p.jsxs)("span",{className:"date-label",children:[e.deadline,"\u622a\u6b62"]})}),Object(p.jsx)("div",{className:"footer",children:Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("img",{alt:e.issueType,src:z(e.issueType)}),Object(p.jsxs)("span",{className:"id",children:["#",e.id]})]})})]})}))}},"".concat(e.id))}))}),n.placeholder]}))}},t)}))})})})})})};var P=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{btnType:s.Primary,children:" \u6ce8 \u518c "}),Object(p.jsx)(h,{btnType:s.Default,children:" \u767b \u5f55 "}),Object(p.jsx)(h,{btnType:s.Default,disabled:!0,children:" \u767b \u5f55(disabled) "}),Object(p.jsx)(h,{btnType:s.Danger,children:" \u5220 \u9664 "}),Object(p.jsx)(h,{btnType:s.Danger,disabled:!0,children:" \u5220 \u9664 "})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{size:c.Small,btnType:s.Primary,children:" \u6ce8 \u518c "}),Object(p.jsx)(h,{size:c.Small,btnType:s.Default,children:" \u767b \u5f55 "}),Object(p.jsx)(h,{size:c.Small,btnType:s.Default,disabled:!0,children:" \u767b \u5f55(disabled) "}),Object(p.jsx)(h,{size:c.Small,btnType:s.Danger,children:" \u5220 \u9664 "}),Object(p.jsx)(h,{size:c.Small,btnType:s.Danger,disabled:!0,children:" \u5220 \u9664 "})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{size:c.Large,btnType:s.Primary,children:" \u6ce8 \u518c "}),Object(p.jsx)(h,{size:c.Large,btnType:s.Default,children:" \u767b \u5f55 "}),Object(p.jsx)(h,{size:c.Large,btnType:s.Default,disabled:!0,children:" \u767b \u5f55(disabled) "}),Object(p.jsx)(h,{size:c.Large,btnType:s.Danger,children:" \u5220 \u9664 "}),Object(p.jsx)(h,{size:c.Large,btnType:s.Danger,disabled:!0,children:" \u5220 \u9664 "})]}),Object(p.jsx)("div",{children:Object(p.jsx)(I,{records:[{id:1,title:"test",status:"done",issueType:"emergency",deadline:"2021\u5e749\u670810\u65e5"},{id:2,title:"\u9700\u6c422",status:"dev",issueType:"low",deadline:"2021\u5e749\u670810\u65e5"}]})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};d.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),S()}},[[27,1,2]]]);
//# sourceMappingURL=main.1632770e.chunk.js.map