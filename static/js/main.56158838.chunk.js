(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),i=(c(10),c(2)),l=c(5),o=c.n(l),j=(c(11),c(0)),b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h2",{className:"title",children:"\u0444\u043e\u0440\u043c\u0430"})})},u=function(e){for(var t=e.teams,c=e.perPage,a=e.currentPage,s=e.setPerPage,r=e.setCurrentPage,i=[],l=1;l<=t.meta.total_pages;l++)i[l-1]=l;return Object(n.useEffect)((function(){r(1)}),[c]),Object(j.jsxs)("div",{className:"displaying_items",children:[Object(j.jsxs)("span",{className:"per_page",children:[Object(j.jsx)("label",{htmlFor:"per_page",children:"Items per page"}),Object(j.jsxs)("select",{name:"per_page",id:"per_page",className:"button",value:c,onChange:function(e){return s(Number(e.target.value))},children:[Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"}),Object(j.jsx)("option",{value:"30",children:"30"})]}),Object(j.jsx)("label",{htmlFor:"per_page",children:t&&"Displaying ".concat((a-1)*c+1,"-").concat((a-1)*c+(null===t||void 0===t?void 0:t.data.length)," of ").concat(null===t||void 0===t?void 0:t.meta.total_count," items")})]}),Object(j.jsxs)("span",{className:"pages",children:[Object(j.jsx)("label",{htmlFor:"pages",children:"".concat(a," of ").concat(null===t||void 0===t?void 0:t.meta.total_pages," pages")}),Object(j.jsx)("input",{type:"button",value:"<",className:"button_page button_page_left",disabled:1===a,onClick:function(){return r(a-1)}}),Object(j.jsx)("select",{name:"pages",id:"pages",className:"button",value:a,onChange:function(e){return r(Number(e.target.value))},children:i.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))}),Object(j.jsx)("input",{type:"button",value:">",className:"button_page",disabled:null===(null===t||void 0===t?void 0:t.meta.next_page),onClick:function(){return r(a+1)}})]})]})},d=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(10),r=Object(i.a)(s,2),l=r[0],d=r[1],h=Object(n.useState)(1),p=Object(i.a)(h,2),O=p[0],g=p[1];return Object(n.useEffect)((function(){var e,t;(e=l,t=O,fetch("".concat("https://www.balldontlie.io/api/v1","/teams?page=").concat(t,"&per_page=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject()}))).then((function(e){return a(e)})).catch((function(e){console.log(e)}))}),[l,O]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"title",children:"Teams"}),Object(j.jsx)(b,{}),Object(j.jsxs)("table",{className:"content-table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"City"}),Object(j.jsx)("th",{children:"Abbreviation"}),Object(j.jsx)("th",{children:"Conference"})]})}),Object(j.jsx)("tbody",{children:c&&c.data.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:e.name}),Object(j.jsx)("th",{children:e.city}),Object(j.jsx)("th",{children:e.abbreviation}),Object(j.jsx)("th",{className:o()({east:"East"===e.conference},{west:"West"===e.conference}),children:e.conference})]},e.id)}))})]}),c&&Object(j.jsx)(u,{teams:c,perPage:l,currentPage:O,setPerPage:d,setCurrentPage:g})]})},h=(c(13),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"heading",children:"NBA profile"}),Object(j.jsx)(d,{})]})});r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.56158838.chunk.js.map