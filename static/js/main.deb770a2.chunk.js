(this["webpackJsonpclue-frontend"]=this["webpackJsonpclue-frontend"]||[]).push([[0],{19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(24),s=n.n(a),o=(n(31),n(18),n(3)),l=n.n(o),i=n(7),u=n(2),j=(n(8),n(22),n(0));function d(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){s()}),[r]);var s=function(){var t=Object(i.a)(l.a.mark((function t(){var n,c,r,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://smart-clue-backend.herokuapp.com/boardSummary",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:for(c=t.sent,r=Array.from(c),s=[["Mustard",null],["Plum",null],["Green",null],["Peacock",null],["Scarlet",null],["White",null],["Knife",null],["Candlestick",null],["Revolver",null],["Rope",null],["Lead Pipe",null],["Wrench",null],["Hall",null],["Lounge",null],["Dining Room",null],["Kitchen",null],["Ballroom",null],["Conservatory",null],["Billiard Room",null],["Library",null],["Study",null]],o=0;o<r.length;o++)null===r[o].value?s[o][1]="":s[o][1]=r[o].value;a(s);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"border-end border-5 clue-table-border-color",children:Object(j.jsxs)("table",{className:"table table-bordered",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Card"}),Object(j.jsx)("th",{scope:"col",children:"Known?"})]})}),Object(j.jsx)("tbody",{children:r.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:e[0]}),Object(j.jsx)("td",{children:e[1]})]},71+t)}))})]})})}var b=n(45),h=n(46),m=n(47);function f(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),o=Object(u.a)(s,2),f=o[0],O=o[1],p=Object(c.useState)(!1),x=Object(u.a)(p,2),v=x[0],k=x[1];Object(c.useEffect)((function(){y(),g()}),[r]);var g=function(){var e=[];if(r.length>0){for(var t=function(t){var n=[];r.map((function(e,c){n.push(Object(j.jsx)("td",{children:e[2][t][1]}))})),e.push(Object(j.jsx)("tr",{children:n.map((function(e){return e}))}))},n=0;n<21;n++)t(n);O(e)}},y=function(){var t=Object(i.a)(l.a.mark((function t(){var n,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://smart-clue-backend.herokuapp.com/board",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r=[],Array.from(c).forEach((function(e){for(var t=[["Mustard",null],["Plum",null],["Green",null],["Peacock",null],["Scarlet",null],["White",null],["Knife",null],["Candlestick",null],["Revolver",null],["Rope",null],["Lead Pipe",null],["Wrench",null],["Hall",null],["Lounge",null],["Dining Room",null],["Kitchen",null],["Ballroom",null],["Conservatory",null],["Billiard Room",null],["Library",null],["Study",null]],n=0;n<e.tracking_array.length;n++)0==e.tracking_array[n]?t[n][1]=Object(j.jsx)(b.a,{color:"lightgrey"}):1===e.tracking_array[n]?t[n][1]=Object(j.jsx)(h.a,{"font-weight":"bold",color:"darkgreen"}):t[n][1]=Object(j.jsx)(m.a,{"font-weight":"bold",color:"red"});var c=[e._id,e.name,t];r.push(c)})),a(r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){k(!0!==v)};return v?Object(j.jsxs)("div",{className:"d-flex flex-row bg-clue-secondary padding-2",children:[Object(j.jsx)(d,{token:e.token}),Object(j.jsxs)("table",{className:"table table-bordered",children:[Object(j.jsx)("thead",{className:"thead-dark",children:Object(j.jsx)("tr",{children:r.map((function(e,t){return Object(j.jsx)("th",{scope:"col",children:e[1]})}))})}),Object(j.jsx)("tbody",{children:f})]}),Object(j.jsx)("button",{className:"no-detail-button expand-close",onClick:N,children:"Hide"})]}):Object(j.jsxs)("div",{className:"d-flex flex-row bg-clue-secondary padding-2",children:[Object(j.jsx)(d,{token:e.token}),Object(j.jsx)("button",{className:"no-detail-button expand-close",onClick:N,children:"Expand"})]})}n(19);function O(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),r=n[0],a=n[1],s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],o=Object(c.useState)(0),l=Object(u.a)(o,2),i=l[0],d=l[1],b=Object(c.useState)([]),h=Object(u.a)(b,2),m=h[0],f=h[1],O=function(){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify({name:r,tracking_array:s,number_cards:i})};fetch("https://smart-clue-backend.herokuapp.com/addPlayer",t).then((function(e){return e.json()})).then((function(t){if(void 0!==t.errors){var n=Array.from(t.errors),c=[];n.forEach((function(e){c.push(e.msg+"; ")})),f(c)}else a(""),d(0),e.refresh()}))};return Object(j.jsxs)("div",{className:"card bg-clue-secondary",children:[Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h1",{children:"Add Opponent"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O()},children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"text",name:"name",className:"form-control",autoComplete:"off",value:r}),Object(j.jsx)("label",{htmlFor:"cardsNumber",children:"Number of Cards"}),Object(j.jsx)("input",{onChange:function(e){return d(e.target.value)},type:"number",name:"cardsNumber",className:"form-control",autoComplete:"off",value:i,min:"1",max:"6"}),Object(j.jsx)("input",{type:"submit",className:"btn btn-primary record-submit",value:"Add Opponent"})]})]}),m]})}var p=n(26);function x(e){var t=Object(c.useState)([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]),n=Object(u.a)(t,2),r=n[0],a=n[1],s=function(e){var t=Object(p.a)(r);!1===t[e]?t[e]=!0:t[e]=!1,a(t)};return Object(j.jsx)("div",{className:"bg-clue-secondary",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.arrayFromForm(r)},children:[Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("h4",{children:"Suspects"}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Mustard",children:"Mustard"}),Object(j.jsx)("input",{onChange:function(e){return s(0)},type:"checkbox",name:"Mustard",className:"form-check-input",value:r[0]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Plum",children:"Plum"}),Object(j.jsx)("input",{onChange:function(e){return s(1)},type:"checkbox",name:"Plum",className:"form-check-input",value:r[1]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Green",children:"Green"}),Object(j.jsx)("input",{onChange:function(e){return s(2)},type:"checkbox",name:"Green",className:"form-check-input",value:r[2]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Peacock",children:"Peacock"}),Object(j.jsx)("input",{onChange:function(e){return s(3)},type:"checkbox",name:"Peacock",className:"form-check-input",value:r[3]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Scarlet",children:"Scarlet"}),Object(j.jsx)("input",{onChange:function(e){return s(4)},type:"checkbox",name:"Scarlet",className:"form-check-input",value:r[4]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"White",children:"White"}),Object(j.jsx)("input",{onChange:function(e){return s(5)},type:"checkbox",name:"White",className:"form-check-input",value:r[5]})]})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("h4",{children:"Weapons"}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Knife",children:"Knife"}),Object(j.jsx)("input",{onChange:function(e){return s(6)},type:"checkbox",name:"Knife",className:"form-check-input",value:r[6]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Candlestick",children:"Candlestick"}),Object(j.jsx)("input",{onChange:function(e){return s(7)},type:"checkbox",name:"Candlestick",className:"form-check-input",value:r[7]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Revolver",children:"Revolver"}),Object(j.jsx)("input",{onChange:function(e){return s(8)},type:"checkbox",name:"Revolver",className:"form-check-input",value:r[8]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Rope",children:"Rope"}),Object(j.jsx)("input",{onChange:function(e){return s(9)},type:"checkbox",name:"Rope",className:"form-check-input",value:r[9]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Lead Pipe",children:"Lead Pipe"}),Object(j.jsx)("input",{onChange:function(e){return s(10)},type:"checkbox",name:"Lead Pipe",className:"form-check-input",value:r[10]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Wrench",children:"Wrench"}),Object(j.jsx)("input",{onChange:function(e){return s(11)},type:"checkbox",name:"Wrench",className:"form-check-input",value:r[11]})]})]}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("h4",{children:"Rooms"}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Hall",children:"Hall"}),Object(j.jsx)("input",{onChange:function(e){return s(12)},type:"checkbox",name:"Hall",className:"form-check-input",value:r[12]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Lounge",children:"Lounge"}),Object(j.jsx)("input",{onChange:function(e){return s(13)},type:"checkbox",name:"Lounge",className:"form-check-input",value:r[13]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Dining Room",children:"Dining Room"}),Object(j.jsx)("input",{onChange:function(e){return s(14)},type:"checkbox",name:"Dining Room",className:"form-check-input",value:r[14]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Kitchen",children:"Kitchen"}),Object(j.jsx)("input",{onChange:function(e){return s(15)},type:"checkbox",name:"Kitchen",className:"form-check-input",value:r[15]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Ballroom",children:"Ballroom"}),Object(j.jsx)("input",{onChange:function(e){return s(16)},type:"checkbox",name:"Ballroom",className:"form-check-input",value:r[16]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Conservatory",children:"Conservatory"}),Object(j.jsx)("input",{onChange:function(e){return s(17)},type:"checkbox",name:"Conservatory",className:"form-check-input",value:r[17]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Billiard Room",children:"Billiard Room"}),Object(j.jsx)("input",{onChange:function(e){return s(18)},type:"checkbox",name:"Billiard Room",className:"form-check-input",value:r[18]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Library",children:"Library"}),Object(j.jsx)("input",{onChange:function(e){return s(19)},type:"checkbox",name:"Library",className:"form-check-input",value:r[19]})]}),Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("label",{htmlFor:"Study",children:"Study"}),Object(j.jsx)("input",{onChange:function(e){return s(20)},type:"checkbox",name:"Study",className:"form-check-input",value:r[20]})]})]}),Object(j.jsx)("input",{type:"submit",className:"btn btn-primary record-submit",value:"Add Cards"})]})})}function v(e){var t=Object(c.useState)(!0),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)("cards not loaded"),o=Object(u.a)(s,2),l=(o[0],o[1]),i=Object(c.useState)(""),d=Object(u.a)(i,2),b=d[0],h=d[1],m=Object(c.useState)([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),f=Object(u.a)(m,2),O=f[0],p=f[1],v=Object(c.useState)(0),k=Object(u.a)(v,2),g=k[0],y=k[1],N=Object(c.useState)([]),S=Object(u.a)(N,2),C=S[0],w=S[1],F=function(){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify({name:b,tracking_array:O,number_cards:g})};fetch("https://smart-clue-backend.herokuapp.com/addPlayer",t).then((function(e){return e.json()})).then((function(t){if(void 0!==t.errors){var n=Array.from(t.errors),c=[];n.forEach((function(e){c.push(e.msg+"; ")})),w(c)}else h(""),p([]),y(0),a(!0),l(""),e.refresh()}))};return r?Object(j.jsxs)("div",{className:"card bg-clue-secondary",children:[Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h1",{children:"Add User Cards"}),Object(j.jsx)(x,{arrayFromForm:function(e){for(var t=[],n=0;n<e.length;n++)!0===e[n]?t.push(1):t.push(-1);p(t),a(!1),l("cards loaded")}})]}),C]}):Object(j.jsxs)("div",{className:"card bg-clue-secondary",children:[Object(j.jsx)("button",{onClick:function(){a(!0!==r)},children:"Change cards"}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h1",{children:"Add User Information"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F()},children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{onChange:function(e){return h(e.target.value)},type:"text",name:"name",className:"form-control",autoComplete:"off",value:b}),Object(j.jsx)("label",{htmlFor:"cardsNumber",children:"Number of Cards"}),Object(j.jsx)("input",{onChange:function(e){return y(e.target.value)},type:"number",name:"cardsNumber",className:"form-control",autoComplete:"off",value:g,min:"1",max:"6"}),Object(j.jsx)("input",{type:"submit",className:"btn btn-primary record-submit",value:"Add User"})]})]}),C]})}function k(e){return Object(j.jsxs)("div",{className:"card player-card",children:[Object(j.jsxs)("p",{children:["Name: ",e.value[1]]}),Object(j.jsxs)("p",{children:["Number of Cards: ",e.value[2]]}),Object(j.jsx)("button",{className:"btn btn-primary w-50",onClick:function(t){var n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify({_id:e.value[0]})};fetch("https://smart-clue-backend.herokuapp.com/removePlayer",n).then((function(e){return e.json()})).then((function(t){if(void 0!=t.errors){var n=Array.from(t.errors),c=[];n.forEach((function(e){c.push(e.msg+"; ")})),alert(c)}else e.addRemove();return t}))},children:"Remove Player"})]},11*e.index)}function g(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(0),o=Object(u.a)(s,2),d=o[0],b=o[1],h=function(){b(d+1)};Object(c.useEffect)((function(){m()}),[d,e.addCount]);var m=function(){var t=Object(i.a)(l.a.mark((function t(){var n,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://smart-clue-backend.herokuapp.com/board",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r=[],Array.from(c).forEach((function(e){var t=[e._id,e.name,e.number_cards];r.push(t)})),a(r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{children:r.map((function(t,n){return Object(j.jsx)(k,{value:t,index:n,addRemove:h,token:e.token})}))})}function y(e){var t=Object(c.useState)(0),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!0),o=Object(u.a)(s,2),l=o[0],i=o[1],d=Object(c.useState)(!1),b=Object(u.a)(d,2),h=b[0],m=b[1],f=function(){a(r+1)},p=function(){i(!0!==l)},x=function(){m(!0!==h)};return h&&l?Object(j.jsxs)("div",{className:"row bg-clue-secondary padding-2 vh-100",children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("button",{className:"no-detail-button w-100",onClick:p,children:"Add Opponent Instead"}),Object(j.jsx)(v,{token:e.token,refresh:f})]}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("button",{className:"no-detail-button w-100",onClick:x,children:"Hide Player List"}),Object(j.jsx)(g,{addCount:r,token:e.token})]})]}):h?Object(j.jsxs)("div",{className:"row bg-clue-secondary padding-2 vh-100",children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("button",{className:"no-detail-button w-100",onClick:p,children:"Add User Instead"}),Object(j.jsx)(O,{token:e.token,refresh:f})]}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("button",{className:"no-detail-button w-100",onClick:x,children:"Hide Player List"}),Object(j.jsx)(g,{addCount:r,token:e.token})]})]}):l?Object(j.jsx)("div",{className:"row bg-clue-secondary padding-2 vh-100",children:Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("button",{className:"no-detail-button w-50",onClick:p,children:"Add Opponent Instead"}),Object(j.jsx)("button",{className:"no-detail-button w-50",onClick:x,children:"Show Player List"}),Object(j.jsx)(v,{token:e.token,refresh:f})]})}):Object(j.jsx)("div",{className:"row bg-clue-secondary padding-2 vh-100",children:Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("button",{className:"no-detail-button w-50",onClick:p,children:"Add User Instead"}),Object(j.jsx)("button",{className:"no-detail-button w-50",onClick:x,children:"Show Player List"}),Object(j.jsx)(O,{token:e.token,refresh:f})]})})}var N=n(12);n(36);function S(e){var t=function(){sessionStorage.clear(),e.setToken("")},n=function(){var t=Object(i.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://smart-clue-backend.herokuapp.com/endGame",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:t.sent,e.setGameStarted(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(i.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://smart-clue-backend.herokuapp.com/startGame",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:(c=t.sent).error?alert(c.error):e.setGameStarted(c);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.gameStarted?Object(j.jsxs)("div",{className:"d-flex justify-content-between bg-clue-primary",children:[Object(j.jsxs)("div",{className:"d-flex padding-05",children:[Object(j.jsx)(N.b,{className:"text-decoration-none text-clue-primary margin-02 header-hover",to:"/addMove",children:Object(j.jsx)("div",{children:"Add Move"})}),Object(j.jsx)(N.b,{className:"text-decoration-none text-clue-primary margin-02 header-hover",to:"/",children:Object(j.jsx)("div",{children:"Game Board"})})]}),Object(j.jsxs)("div",{className:"d-flex padding-05",children:[Object(j.jsx)("div",{class:"text-decoration-none text-clue-primary margin-02 header-hover",onClick:n,children:"End Game"}),Object(j.jsx)("div",{className:"text-decoration-none text-clue-primary margin-02 header-hover",onClick:t,children:"Log Out"})]})]}):Object(j.jsxs)("div",{className:"d-flex justify-content-between bg-clue-primary",children:[Object(j.jsx)("div",{className:"text-decoration-none text-clue-primary margin-02 header-hover",onClick:c,children:"Go to Game"}),Object(j.jsx)(N.b,{className:"text-decoration-none text-clue-primary margin-02 header-hover",to:"/",children:Object(j.jsx)("div",{children:"Forms"})}),Object(j.jsx)("div",{className:"text-decoration-none text-clue-primary margin-02 header-hover",onClick:t,children:"Log Out"})]})}function C(e){var t=Object(c.useState)(!0),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)("cards not loaded"),o=Object(u.a)(s,2),d=(o[0],o[1]),b=Object(c.useState)([[]]),h=Object(u.a)(b,2),m=h[0],f=h[1],O=Object(c.useState)(""),p=Object(u.a)(O,2),v=p[0],k=p[1],g=Object(c.useState)([]),y=Object(u.a)(g,2),N=y[0],S=y[1],C=Object(c.useState)(-1),w=Object(u.a)(C,2),F=w[0],P=w[1],T=Object(c.useState)(!1),A=Object(u.a)(T,2),L=A[0],R=A[1],B=Object(c.useState)([]),G=Object(u.a)(B,2),E=G[0],I=G[1];Object(c.useEffect)((function(){_()}),[]);var _=function(){var t=Object(i.a)(l.a.mark((function t(){var n,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://smart-clue-backend.herokuapp.com/board",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,r=[],Array.from(c).forEach((function(e){var t=[e._id,e.name,e.number_cards];r.push(t)})),f(r);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){a(!0!==r)},M=function(t){t.preventDefault(),function(){if(""==v)I("player not selected");else{JSON.stringify({playerId:v,request:N,cardshown:F,all_no:L});var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify({playerId:v,request:N,cardshown:F,all_no:L})};fetch("https://smart-clue-backend.herokuapp.com/addMove",t).then((function(e){return e.json()})).then((function(e){if(void 0!==e.errors){var t=Array.from(e.errors),n=[];t.forEach((function(e){n.push(e.msg+"; ")})),I(n)}else k(""),S([]),P(-1),R(!1),a(!0),d("")}))}}()};return r?Object(j.jsxs)("div",{className:"card bg-clue-secondary vw-100 vh-100 padding-2",children:[Object(j.jsx)("h2",{children:"What was the suggestion made?"}),Object(j.jsx)(x,{arrayFromForm:function(e){for(var t=[],n=0;n<e.length;n++)!0===e[n]&&t.push(n);S(t),D(),d("cards loaded")}})]}):Object(j.jsxs)("div",{className:"w-50 bg-clue-secondary vh-100 vw-100 padding-2",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("h2",{children:"Suggestion Details"}),Object(j.jsx)("button",{className:"btn btn-outline-link",onClick:D,children:"Change cards?"})]}),Object(j.jsxs)("form",{onSubmit:function(e){M(e)},children:[Object(j.jsx)("label",{htmlFor:"player",children:"Player"}),Object(j.jsxs)("select",{name:"player",value:v,className:"form-select",onChange:function(e){k(e.target.value)},children:[Object(j.jsx)("option",{}),m.map((function(e,t){return Object(j.jsx)("option",{value:e[0],children:e[1]},t)}))]}),Object(j.jsx)("label",{htmlFor:"allno",children:"All No?"}),Object(j.jsxs)("select",{name:"allno",className:"form-select",value:L,onChange:function(e){R(e.target.value)},children:[Object(j.jsx)("option",{value:!0,children:"true"}),Object(j.jsx)("option",{value:!1,children:"false"})]}),Object(j.jsx)("label",{htmlFor:"cardShown",children:"card shown"}),Object(j.jsxs)("select",{name:"cardShown",className:"form-select",value:F,onChange:function(e){P(e.target.value)},children:[Object(j.jsx)("option",{value:-1,children:"Unknown"}),[["Mustard",null],["Plum",null],["Green",null],["Peacock",null],["Scarlet",null],["White",null],["Knife",null],["Candlestick",null],["Revolver",null],["Rope",null],["Lead Pipe",null],["Wrench",null],["Hall",null],["Lounge",null],["Dining Room",null],["Kitchen",null],["Ballroom",null],["Conservatory",null],["Billiard Room",null],["Library",null],["Study",null]].map((function(e,t){return Object(j.jsx)("option",{value:t,children:e[0]},t)}))]}),Object(j.jsx)("input",{type:"submit",className:"btn btn-primary record-submit",value:"Add Move"})]}),E]})}var w=n(4);n(23);function F(e){return P.apply(this,arguments)}function P(){return(P=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://smart-clue-backend.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var t=Object(c.useState)(),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),o=Object(u.a)(s,2),d=o[0],b=o[1],h=Object(c.useState)(""),m=Object(u.a)(h,2),f=m[0],O=m[1],p=function(){var t=Object(i.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,F({username:r,password:d});case 3:(c=t.sent).error&&O(c.error),e.setToken(c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"login-signup text-clue-primary bg-clue-primary w-100",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("h3",{children:"Log In"}),Object(j.jsx)("button",{className:"btn btn-outline-link text-clue-primary",onClick:e.toggle,children:"Back"})]}),Object(j.jsxs)("form",{onSubmit:p,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",name:"username",className:"form-control",onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("div",{className:"login-signup-button",children:Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})})]}),Object(j.jsx)("div",{className:"text-danger",children:f})]})}function A(e){return L.apply(this,arguments)}function L(){return(L=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://smart-clue-backend.herokuapp.com/createNewUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){var t=Object(c.useState)(),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(),o=Object(u.a)(s,2),d=o[0],b=o[1],h=Object(c.useState)(""),m=Object(u.a)(h,2),f=m[0],O=m[1],p=function(){var t=Object(i.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,A({username:r,password:d});case 3:(c=t.sent).error&&O(c.error),e.setToken(c),console.log(c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"login-signup bg-clue-primary text-clue-primary w-100",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsx)("button",{className:"btn btn-outline-link text-clue-primary",onClick:e.toggle,children:"Back"})]}),Object(j.jsxs)("form",{onSubmit:p,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",name:"username",className:"form-control",onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("div",{className:"login-signup-button",children:Object(j.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})})]}),Object(j.jsx)("div",{className:"text-danger",children:f})]})}function B(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),o=Object(u.a)(s,2),l=o[0],i=o[1],d=function(){a(!0!==r)},b=function(){i(!0!==l)};return l?Object(j.jsx)(T,{setToken:e.setToken,toggle:b}):r?Object(j.jsx)(R,{setToken:e.setToken,toggle:d}):Object(j.jsxs)("div",{className:"main-login-section d-flex flex-column justify-content-around text-clue-primary bg-clue-primary",children:[Object(j.jsx)("h2",{className:"title d-flex justify-content-around",children:"Clue Helper App"}),Object(j.jsxs)("div",{className:"body-login-section d-flex flex-column justify-content-around align-items-center",children:[Object(j.jsx)("button",{className:" login-signup-button btn btn-primary btn-lg",onClick:d,children:"Sign Up"}),Object(j.jsx)("button",{className:" login-signup-button btn btn-primary btn-lg",onClick:b,children:"Log In"})]})]})}var G=function(){var e=function(){var e=Object(c.useState)(function(){var e=sessionStorage.getItem("token"),t=JSON.parse(e);return null===t||void 0===t?void 0:t.token}()),t=Object(u.a)(e,2),n=t[0],r=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),r(e.token)},token:n}}(),t=e.token,n=e.setToken,r=function(){var e=Object(c.useState)(function(){var e=sessionStorage.getItem("gameStarted"),t=JSON.parse(e);return null===t||void 0===t?void 0:t.message}()),t=Object(u.a)(e,2),n=t[0],r=t[1];return{setMessage:function(e){sessionStorage.setItem("gameStarted",JSON.stringify(e)),r(e.message)},message:n}}(),a=r.message,s=r.setMessage;return t?a?Object(j.jsxs)(N.a,{basename:"/clue-frontend",children:[Object(j.jsx)(S,{gameStarted:a,setGameStarted:s,token:t,setToken:n}),Object(j.jsxs)(w.c,{children:[Object(j.jsx)(w.a,{path:"/",exact:!0,render:function(e){return Object(j.jsx)(f,{token:t})}}),Object(j.jsx)(w.a,{path:"/addMove",exact:!0,render:function(e){return Object(j.jsx)(C,{token:t})}})]})]}):Object(j.jsxs)(N.a,{basename:"/clue-frontend",children:[Object(j.jsx)(S,{gameStarted:a,setGameStarted:s,token:t,setToken:n}),Object(j.jsx)(w.c,{children:Object(j.jsx)(w.a,{path:"/",exact:!0,render:function(e){return Object(j.jsx)(y,{token:t})}})})]}):Object(j.jsx)("div",{className:"log-in-page bg-clue-secondary vh-100",children:Object(j.jsx)("div",{className:"d-flex flex-row justify-content-center ",children:Object(j.jsx)(B,{setToken:n})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),E()},8:function(e,t,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.deb770a2.chunk.js.map