(this["webpackJsonpmy-time"]=this["webpackJsonpmy-time"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(26),i=n.n(a),l=(n(32),n(13)),s=n(7),j=(n(33),n(0)),o=n.n(j),h=n(12),d=n(2),b=n(4),p=n(5),u=n(6),O=n(16),x=n(1),m=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).player=O.a,e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.player=new O.a({target:".timecat-replay"});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(h.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.player)||void 0===t||t.destroy();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Replay"}),Object(x.jsx)("div",{className:"timecat-replay",style:{margin:"0 auto",width:"600",height:"400"}})]})}}]),n}(r.Component),f=n.p+"static/media/logo.6ce24c58.svg",v=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).recorder=O.b,e.draw=function e(){var t=new Date,n=document.getElementById("canvas");if(n&&n.getContext("2d")){var r=n.getContext("2d");r.save(),r.clearRect(0,0,150,150),r.translate(75,75),r.scale(.4,.4),r.rotate(-Math.PI/2),r.strokeStyle="black",r.fillStyle="white",r.lineWidth=8,r.lineCap="round",r.save();for(var c=0;c<12;c++)r.beginPath(),r.rotate(Math.PI/6),r.moveTo(100,0),r.lineTo(120,0),r.stroke();for(r.restore(),r.save(),r.lineWidth=5,c=0;c<60;c++)c%5!==0&&(r.beginPath(),r.moveTo(117,0),r.lineTo(120,0),r.stroke()),r.rotate(Math.PI/30);r.restore();var a=t.getSeconds(),i=t.getMinutes(),l=t.getHours();l=l>=12?l-12:l,r.fillStyle="black",r.save(),r.rotate(l*(Math.PI/6)+Math.PI/360*i+Math.PI/21600*a),r.lineWidth=14,r.beginPath(),r.moveTo(-20,0),r.lineTo(80,0),r.stroke(),r.restore(),r.save(),r.rotate(Math.PI/30*i+Math.PI/1800*a),r.lineWidth=10,r.beginPath(),r.moveTo(-28,0),r.lineTo(112,0),r.stroke(),r.restore(),r.save(),r.rotate(a*Math.PI/30),r.strokeStyle="#D40000",r.fillStyle="#D40000",r.lineWidth=6,r.beginPath(),r.moveTo(-30,0),r.lineTo(83,0),r.stroke(),r.beginPath(),r.arc(0,0,10,0,2*Math.PI,!0),r.fill(),r.beginPath(),r.arc(95,0,10,0,2*Math.PI,!0),r.stroke(),r.fillStyle="rgba(0, 0, 0, 0)",r.arc(0,0,3,0,2*Math.PI,!0),r.fill(),r.restore(),r.beginPath(),r.lineWidth=14,r.strokeStyle="#325FA2",r.arc(0,0,142,0,2*Math.PI,!0),r.stroke(),r.restore(),window.requestAnimationFrame(e)}},e}return Object(b.a)(n,[{key:"start",value:function(){var e=Object(h.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.recorder=new O.b;case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(h.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.recorder.destroy&&(null===(t=this.recorder)||void 0===t||t.destroy());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stop",value:function(){var e=Object(h.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.recorder)||void 0===t||t.destroy();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"clear",value:function(){var e=Object(h.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.recorder.clearDB&&(null===(t=this.recorder)||void 0===t||t.clearDB());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("img",{src:f,className:"App-logo",alt:"logo"}),Object(x.jsxs)("p",{children:["Edit ",Object(x.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(x.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(x.jsxs)("p",{children:[Object(x.jsx)("button",{onClick:function(){return e.start()},children:"start"}),"*",Object(x.jsx)("button",{onClick:function(){return e.stop()},children:"stop"}),"*",Object(x.jsx)("button",{onClick:function(){return e.clear()},children:"clear"}),"*",Object(x.jsx)("button",{onClick:function(){return e.draw()},children:"draw"})]})]}),Object(x.jsx)("canvas",{id:"canvas",width:"150",height:"150",style:{border:"1px solid red"}}),Object(x.jsx)("iframe",{style:{width:"98%",height:"350px"},title:"my iframe",src:"/record/form"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"})]})}}]),n}(r.Component),I=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{style:{margin:"0 20px"},children:[Object(x.jsx)("input",{type:"text"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("select",{defaultValue:"lime",children:[Object(x.jsx)("option",{value:"grapefruit",children:"Grapefruit"}),Object(x.jsx)("option",{value:"lime",children:"Lime"}),Object(x.jsx)("option",{value:"coconut",children:"Coconut"}),Object(x.jsx)("option",{value:"mango",children:"Mango"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{defaultChecked:!0,type:"radio",value:"Male",name:"gender"})," Male",Object(x.jsx)("input",{type:"radio",value:"Female",name:"gender"})," Female",Object(x.jsx)("input",{type:"radio",value:"Other",name:"gender"})," Other"]}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"}),Object(x.jsx)("p",{children:"I am a line!"})]})}}]),n}(r.Component),y=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsx)(l.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/record",children:"Record Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/record/form",children:"Record Form"})})]}),Object(x.jsxs)(s.d,{children:[Object(x.jsx)(s.b,{exact:!0,path:"/record",component:v}),Object(x.jsx)(s.b,{path:"/record/form",component:I})]})]})})}}]),n}(r.Component);var g=function(){return Object(x.jsxs)(l.a,{children:[Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/record",children:"Record"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:"/replay",children:"Replay"})})]}),Object(x.jsxs)(s.d,{children:[Object(x.jsx)(s.b,{path:"/record",component:y}),Object(x.jsx)(s.b,{exact:!0,path:"/replay",component:m}),Object(x.jsx)(s.a,{exact:!0,to:"/record",from:"/"})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),k()}},[[41,1,2]]]);
//# sourceMappingURL=main.c16f3501.chunk.js.map