(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),r=a.n(s),i=(a(17),a(2)),o=a(8),u=a(4),m=a(9),j=a.n(m),d=a(10),l=a(13),b=(a(19),a(0)),h=["data","index"];function f(e){var t=e.data,a=(e.index,Object(l.a)(e,h)),n=Object(c.useState)(!1),s=Object(i.a)(n,2),r=s[0],o=s[1];function u(e){return new Promise((function(t){return setTimeout(t,e)}))}var m=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,u(100);case 3:a.handleClick(t.name);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=setTimeout((function(){o(!1)}),100);return function(){clearTimeout(e)}}),[r]),Object(b.jsxs)("div",{className:"memory-card ".concat(r?"clicked":""),onClick:function(){return m(t.name)},onKeyUp:function(){return m(t.name)},role:"button",tabIndex:0,children:[Object(b.jsx)("img",{className:a.isGrayscale?"grayscale":null,width:"180",height:"240",src:t.src,alt:t.name}),a.showNames&&Object(b.jsx)("p",{children:t.name})]})}a(21),a(22);var p=a(11),O=function(e){var t=e.isShowing,a=e.hide;return t?r.a.createPortal(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"modal-wrapper",children:Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("h1",{children:"You won! You've remembered all the images."}),Object(b.jsx)(p.a,{onClick:a,size:"2em"})]})})}),document.body):null},g=function(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],s=a[1];return[n,function(){s(!0)},function(){s(!1),e()}]},x=a(12);function w(e){for(var t=Object(x.a)(e),a=t.length-1;a>0;a-=1){var c=Math.floor(Math.random()*(a+1)),n=[t[c],t[a]];t[a]=n[0],t[c]=n[1]}return t}function y(e){var t=Object(c.useState)(w(e.currentImages)),a=Object(i.a)(t,2),n=a[0],s=a[1],r=g(v),o=Object(i.a)(r,3),m=o[0],j=o[1],d=o[2],l=Object(c.useState)(!1),h=Object(i.a)(l,2),p=h[0],x=h[1],y=function(){var e=n.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{wasClicked:!1})}));s(w(e))};function v(){e.resetScore(),y()}Object(c.useEffect)((function(){v(),s(w(e.currentImages))}),[e.currentImages]),Object(c.useEffect)((function(){return setTimeout((function(){return x(!1)}),500)}),[p]);var N=function(t){!function(e){return!!n.find((function(t){return t.name===e})).wasClicked}(t)?(!function(e){var t=n.map((function(t){return t.name===e?Object(u.a)(Object(u.a)({},t),{},{wasClicked:!0}):t}));s(w(t))}(t),e.setCurrentScore((function(e){return e+1}))):(x(!0),y(),e.setCurrentScore(0))};return Object(c.useEffect)((function(){n.every((function(e){return e.wasClicked}))&&j()}),[n]),Object(b.jsxs)("div",{className:"gameboard-wrapper ".concat(p?"danger":""),children:[Object(b.jsx)(O,{isShowing:m,hide:d}),Object(b.jsx)("div",{className:"gameboard",children:n.map((function(t){return Object(b.jsx)(f,{data:t,handleClick:N,showNames:e.showNames,isGrayscale:e.isGrayscale},t.name)}))})]})}a(23);var v=[{src:a.p+"static/media/marguerite.c40d09b9.jpg",name:"marguerite"},{src:a.p+"static/media/pink-rose.1cf453da.jpg",name:"rose"},{src:a.p+"static/media/daffodil.36068a9d.jpg",name:"daffodil"},{src:a.p+"static/media/daisy.ceab110f.jpg",name:"daisy"},{src:a.p+"static/media/marigold.dad571d4.jpg",name:"marigold"},{src:a.p+"static/media/sunflower.a4c5e57d.jpg",name:"sunflower"},{src:a.p+"static/media/tulip.2cdb520f.jpg",name:"tulip"},{src:a.p+"static/media/gerbera.fc604790.jpg",name:"gerbera"},{src:a.p+"static/media/water-lily.1ddfeb73.jpg",name:"water lily"},{src:a.p+"static/media/forget-me-not.8485c5ec.jpg",name:"forget me not"},{src:a.p+"static/media/jasmine.22bbb7fe.jpg",name:"jasmine"},{src:a.p+"static/media/alstroemeria.1f03efb2.jpg",name:"alstroemeria"},{src:a.p+"static/media/dahlia.e2957cf6.jpg",name:"dahlia"},{src:a.p+"static/media/chrysanthemum.c0738adb.jpg",name:"chrysanthemum"},{src:a.p+"static/media/buttercup.f7e567a2.jpg",name:"buttercup"},{src:a.p+"static/media/azalea.b38a261b.jpg",name:"azalea"},{src:a.p+"static/media/aster.721e86ea.jpg",name:"aster"},{src:a.p+"static/media/poppy.342b20ac.jpg",name:"poppy"}];a(24);function N(e){var t=Object(c.useState)(8),a=Object(i.a)(t,2),n=a[0],s=a[1];return Object(b.jsxs)("div",{className:"settings-picker",children:[Object(b.jsxs)("div",{className:"part",children:[Object(b.jsx)("span",{className:"heading",children:"Difficulty"}),Object(b.jsx)("input",{onChange:function(t){s(t.target.value),e.setImageCount(t.target.value)},type:"range",id:"count",name:"count",min:4,max:v.length,value:n}),Object(b.jsxs)("label",{htmlFor:"count",children:[n," images"]})]}),Object(b.jsxs)("div",{className:"part checkboxes",children:[Object(b.jsx)("div",{className:"checkbox-input",children:Object(b.jsxs)("label",{htmlFor:"showNames",children:["Show flower names",Object(b.jsx)("input",{id:"showNames",type:"checkbox",name:"showNames",onChange:function(t){e.setShowNames(t.target.checked)},checked:e.showNames})]})}),Object(b.jsx)("div",{className:"checkbox-input",children:Object(b.jsxs)("label",{htmlFor:"grayscale",children:["Grayscale images",Object(b.jsx)("input",{id:"grayscale",type:"checkbox",name:"grayscale",onChange:function(t){return e.setIsGrayscale(t.target.checked)},checked:e.isGrayscale})]})})]})]})}a(25);function S(e){var t=e.score;return Object(b.jsxs)("div",{className:"scoreboard",children:[Object(b.jsxs)("span",{children:["Current score: ",t.currentScore]}),Object(b.jsxs)("span",{children:["Max score: ",t.maxScore]})]})}function k(e){return Object(b.jsxs)("header",{children:[Object(b.jsx)(N,{setImageCount:e.setImageCount,setShowNames:e.setShowNames,showNames:e.showNames,setIsGrayscale:e.setIsGrayscale,isGrayscale:e.isGrayscale}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Flower Memory Game"}),Object(b.jsx)("p",{children:"Click on all images but don't click on the same image twice!"})]}),Object(b.jsx)(S,{score:e.score})]})}function C(e,t){if(t>e.length)throw new Error("Number of requested random elements is higher than number of elements in the array");return w(e).slice(0,t)}var I=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(0),r=Object(i.a)(s,2),u=r[0],m=r[1],j=Object(c.useState)(8),d=Object(i.a)(j,2),l=d[0],h=d[1],f=Object(c.useState)(C(v,8)),p=Object(i.a)(f,2),O=p[0],g=p[1],x=Object(c.useState)(!0),w=Object(i.a)(x,2),N=w[0],S=w[1],I=Object(c.useState)(!1),G=Object(i.a)(I,2),E=G[0],F=G[1];return Object(c.useEffect)((function(){g(C(v,l))}),[l]),Object(c.useEffect)((function(){a>u&&m(a)}),[a]),Object(b.jsxs)(o.Fragment,{children:[Object(b.jsx)(k,{score:{maxScore:u,currentScore:a},setImageCount:h,setShowNames:S,showNames:N,setIsGrayscale:F}),Object(b.jsx)(y,{setCurrentScore:n,resetScore:function(){m(0),n(0)},currentImages:O,showNames:N,isGrayscale:E})]})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.c804a84d.chunk.js.map