"use strict";(globalThis.webpackChunkstorybook=globalThis.webpackChunkstorybook||[]).push([[701],{66701:(e,t,n)=>{n.r(t),n.d(t,{renderDocs:()=>d,unmountDocs:()=>p});n(35666),n(41539),n(88674);var r=n(27378),o=n(73935),a={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},c={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},l={textAlign:"center"},i=function(){return r.createElement("div",{style:a,className:"sb-nodocs sb-wrapper"},r.createElement("div",{style:c},r.createElement("h1",{style:l},"No Docs"),r.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",r.createElement("code",null,"docs")," parameter. If you think this is an error:"),r.createElement("ul",null,r.createElement("li",null,"Please check the story definition."),r.createElement("li",null,"Please check the Storybook config."),r.createElement("li",null,"Try reloading the page.")),r.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};function s(e,t,n,r,o,a,c){try{var l=e[a](c),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){s(a,r,o,c,l,"next",e)}function l(e){s(a,r,o,c,l,"throw",e)}c(void 0)}))}}function d(e,t,n,r){return function(e,t,n){return m.apply(this,arguments)}(e,t,n).then(r)}function m(){return(m=u(regeneratorRuntime.mark((function e(t,n,a){var c,l,s,u,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!=(s=t.parameters.docs)&&s.getPage||null!=s&&s.page)||(null!=s&&s.getContainer||null!=s&&s.container)){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=s.container,e.t1){e.next=8;break}return e.next=7,null===(c=s.getContainer)||void 0===c?void 0:c.call(s);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(e){var t=e.children;return r.createElement(r.Fragment,null,t)};case 11:if(u=e.t0,e.t3=s.page,e.t3){e.next=17;break}return e.next=16,null===(l=s.getPage)||void 0===l?void 0:l.call(s);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=i;case 20:return d=e.t2,m=r.createElement(u,{key:t.componentId,context:n},r.createElement(d,null)),e.next=24,new Promise((function(e){o.render(m,a,e)}));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){o.unmountComponentAtNode(e)}i.displayName="NoDocs"}}]);