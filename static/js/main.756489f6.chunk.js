(this["webpackJsonpmonster-app"]=this["webpackJsonpmonster-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),a=(n(9),n(3)),i=(n(10),n(0));function u(e){return Object(i.jsxs)("div",{className:"card-container",children:[Object(i.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(i.jsx)("h2",{children:e.monster.name}),Object(i.jsx)("h5",{children:e.monster.username}),Object(i.jsx)("p",{children:e.monster.email})]})}n(12);function j(e){return Object(i.jsx)("div",{className:"card-list",children:e.monster.map((function(e){return Object(i.jsx)(u,{monster:e},e.id)}))})}n(13);var h=function(e){var t=e.placeholder,n=e.handleChange;return Object(i.jsx)("input",{className:"search",type:"text",placeholder:t,onChange:n})};n(14);var l=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(a.a)(s,2),u=o[0],l=o[1],d=n.filter((function(e){return e.name.toLowerCase().includes(u.toLocaleLowerCase())}));return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.error(e)}))})),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"back-ground",children:[Object(i.jsx)("h1",{children:"Monster Rolodex"}),Object(i.jsx)(h,{placeholder:"Search monsters",handleChange:function(e){l(e.target.value)}}),Object(i.jsx)(j,{monster:d})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.756489f6.chunk.js.map