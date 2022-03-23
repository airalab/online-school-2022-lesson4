(function(e){function t(t){for(var o,c,i=t[0],s=t[1],u=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"0037":function(e,t,n){},"0fb7":function(e,t,n){},1:function(e,t,n){e.exports=n("56d7")},"19b2":function(e,t,n){"use strict";n("0037")},"1a56":function(e,t,n){"use strict";n("b51a")},2:function(e,t){},2021:function(e,t,n){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"app"},a=Object(o["f"])("div",{class:"app-title"},[Object(o["f"])("div",{class:"layout"},[Object(o["f"])("h1",null,[Object(o["g"])(" Lesson 4 Test < "),Object(o["f"])("a",{href:"https://robonomics.academy/",target:"_blank"},"Introduction Course: Lesson 4")])])],-1);function c(e,t,n,c,i,s){var u=Object(o["x"])("router-view");return Object(o["q"])(),Object(o["e"])("div",r,[a,Object(o["h"])(u)])}var i=n("1da1"),s=(n("96cf"),n("fe43")),u=n.n(s),l=n("e79d"),d=n("0b67"),f={endpoint:"wss://kusama.rpc.robonomics.network/",isDevelopmentAccounts:!1,subscription:"4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r",discord:"https://discord.com/invite/5UWNGNaAUf"},b=new l["Robonomics"]({endpoint:f.endpoint});b.setAccountManager(new u.a(d["a"]));var h=b,p={name:"App",created:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.run();case 2:return e.next=4,u.a.initPlugin(h.accountManager.keyring,{isDevelopment:f.isDevelopmentAccounts});case 4:case"end":return e.stop()}}),e)})))()}},m=(n("fb7d"),n("6b0d")),v=n.n(m);const O=v()(p,[["render",c]]);var j=O,g=n("6c02"),w={class:"layout"},y=Object(o["f"])("div",null,[Object(o["f"])("h1",null,"Dear participant!"),Object(o["f"])("p",null," You are invited to take this test for Lesson 4, which is dedicated to the second chapter of the Robonomics Whitepaper 2022 “Robonomics Architecture” and its section on IoT systems. The test is designed to encourage you to reflect on the ideas covered in the lesson, and you will not find answers to some questions directly in the whitepaper. You will need to think about them by yourself, so be careful. "),Object(o["f"])("p",null," To pass the test, you need to score 7 correct answers out of 11 (60%, the standard value in academic practice). ")],-1),k={key:1};function q(e,t,n,r,a,c){var i=Object(o["x"])("Account"),s=Object(o["x"])("Sender");return Object(o["q"])(),Object(o["e"])("div",null,[Object(o["f"])("section",null,[Object(o["f"])("div",w,[y,a.isReady?(Object(o["q"])(),Object(o["e"])(o["a"],{key:0},[Object(o["h"])(i,{class:"block"}),Object(o["h"])(s)],64)):(Object(o["q"])(),Object(o["e"])("div",k,"Please wait"))])])])}n("b0c0");var x=function(e){return Object(o["t"])("data-v-0b248dd0"),e=e(),Object(o["r"])(),e},T={style:{"margin-bottom":"0"}},S=x((function(){return Object(o["f"])("h3",null,"1. Your account",-1)})),R=x((function(){return Object(o["f"])("p",null,[Object(o["f"])("i",null,"[Robonomics parachain format]")],-1)})),I=["value"],z={key:1},M={class:"account"},_=x((function(){return Object(o["f"])("br",null,null,-1)})),A=x((function(){return Object(o["f"])("span",{class:"copy"},"Copy address",-1)})),P=x((function(){return Object(o["f"])("span",{class:"copied"},"Address copied!",-1)})),C=[A,P],D={key:2},L=Object(o["g"])(" Create or activate your account in "),W=x((function(){return Object(o["f"])("a",{href:"https://polkadot.js.org/extension/",target:"_blank"},"Polkadot.js extension",-1)})),N=[L,W];function J(e,t,n,r,a,c){return Object(o["q"])(),Object(o["e"])("section",T,[S,R,Object(o["f"])("section",null,[a.accounts.length>1?Object(o["E"])((Object(o["q"])(),Object(o["e"])("select",{key:0,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.account=e})},[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.accounts,(function(e,t){return Object(o["q"])(),Object(o["e"])("option",{key:t,value:e.address},Object(o["z"])(e.meta.isTesting?"dev":"")+" "+Object(o["z"])(e.meta.name),9,I)})),128))],512)),[[o["C"],a.account]]):Object(o["d"])("",!0),a.accounts.length>0?(Object(o["q"])(),Object(o["e"])("p",z,[Object(o["f"])("b",M,Object(o["z"])(a.account),1),_,Object(o["f"])("a",{class:"copyLink",href:"javascript:;",onClick:t[1]||(t[1]=Object(o["F"])((function(e){return c.clipboard(a.account,e)}),["prevent"]))},C)])):Object(o["d"])("",!0),0===a.accounts.length?(Object(o["q"])(),Object(o["e"])("p",D,N)):Object(o["d"])("",!0)])])}n("d81d"),n("d3b7"),n("25f0"),n("caad"),n("2532");var Y={data:function(){return{account:null,accounts:[],devices:[]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.rws.getDevices(f.subscription);case 2:n=t.sent,n.isEmpty||(e.devices=n.toArray().map((function(e){return e.toString()}))),h.accountManager.onReady((function(){e.accounts=h.accountManager.getAccounts(),e.accounts.length&&(e.account=e.accounts[0].address)}));case 5:case"end":return t.stop()}}),t)})))()},computed:{isRws:function(){return!!this.devices.includes(this.account)}},watch:{account:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.accountManager.selectAccountByAddress(e);case 2:case"end":return t.stop()}}),t)})))()},isRws:function(){this.isRws?h.accountManager.useSubscription(f.subscription):h.accountManager.useSubscription(!1)}},methods:{clipboard:function(e,t){navigator.clipboard.writeText(e).then((function(){t.target.closest("a").classList.add("on"),setTimeout((function(){t.target.closest("a").classList.remove("on")}),5e3)}))}}};n("19b2");const E=v()(Y,[["render",J],["__scopeId","data-v-0b248dd0"]]);var U=E,B=function(e){return Object(o["t"])("data-v-666ae594"),e=e(),Object(o["r"])(),e},Q=B((function(){return Object(o["f"])("h3",null,"2. Your answers",-1)})),V={key:0,class:"msg"},F=B((function(){return Object(o["f"])("h4",null,"Your answers has been sent",-1)})),G=["href"],H={key:1};function Z(e,t,n,r,a,c){var i=Object(o["x"])("Quiz");return Object(o["q"])(),Object(o["e"])("div",null,[Q,Object(o["h"])(i,{onSubmit:c.send,loader:a.loader},null,8,["onSubmit","loader"]),a.result?(Object(o["q"])(),Object(o["e"])("div",V,[F,Object(o["f"])("ol",null,[Object(o["f"])("li",null,[Object(o["f"])("a",{href:"https://robonomics.subscan.io/extrinsic/".concat(a.result),target:"_blank"},"View tx explorer",8,G)])])])):Object(o["d"])("",!0),a.error?(Object(o["q"])(),Object(o["e"])("div",H,Object(o["z"])(a.error),1)):Object(o["d"])("",!0)])}n("e9c4"),n("99af");var K=Object(o["g"])("  "),$=["type","onUpdate:modelValue","value"],X={key:0,disabled:"",style:{"font-style":"italic"}},ee=["disabled"],te={key:2,class:"error"},ne={key:3,class:"tip"},oe=Object(o["g"])(" You need free IoT subscription to make a transaction. Check out the academy-faucet bot on the "),re=["href"],ae=Object(o["g"])(" server. ");function ce(e,t,n,r,a,c){return Object(o["q"])(),Object(o["e"])("section",null,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.questions,(function(e,t){return Object(o["q"])(),Object(o["e"])("div",{key:t,class:"answer"},[Object(o["f"])("h2",null,"Question "+Object(o["z"])(t+1)+": "+Object(o["z"])(e.question),1),Object(o["f"])("ul",null,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(e.answers,(function(n,r){return Object(o["q"])(),Object(o["e"])("li",{key:r},[Object(o["f"])("label",null,[Object(o["f"])("b",null,Object(o["z"])(r)+")",1),K,Object(o["E"])(Object(o["f"])("input",{type:e.multiple?"checkbox":"radio","onUpdate:modelValue":function(e){return a.form[t]=e},value:r},null,8,$),[[o["B"],a.form[t]]]),Object(o["g"])(" "+Object(o["z"])(n),1)])])})),128))])])})),128)),n.loader?(Object(o["q"])(),Object(o["e"])("button",X," Please wait ")):(Object(o["q"])(),Object(o["e"])("button",{key:1,onClick:t[0]||(t[0]=function(){return c.submit&&c.submit.apply(c,arguments)}),disabled:!a.isSubscription||a.error}," Sign and send ",8,ee)),a.error?(Object(o["q"])(),Object(o["e"])("div",te,Object(o["z"])(a.error),1)):Object(o["d"])("",!0),a.isSubscription?Object(o["d"])("",!0):(Object(o["q"])(),Object(o["e"])("div",ne,[oe,Object(o["f"])("a",{href:a.discord,target:"_blank"},"Discord",8,re),ae]))])}var ie=n("beb6"),se={};for(var ue in ie)se[ue]=ie[ue].multiple?[]:null;var le={props:["loader"],data:function(){return{questions:ie,form:se,isSubscription:!1,discord:f.discord,error:!1}},created:function(){var e=this;setInterval((function(){e.isSubscription=h.accountManager.subscription}),1e3)},watch:{form:{handler:function(){var e=!1;for(var t in this.form)if(null===this.form[t]||0===this.form[t].length){e="all questions must be answered";break}this.error=e},deep:!0,immediate:!0}},methods:{submit:function(){this.error||this.$emit("submit",this.form)}}};n("1a56");const de=v()(le,[["render",ce],["__scopeId","data-v-08a64bf4"]]);var fe=de,be={components:{Quiz:fe},data:function(){return{result:null,error:null,unsubscribe:null,loader:!1}},unmounted:function(){this.unsubscribe&&this.unsubscribe()},methods:{send:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.error="",t.result="",t.loader=!0,n.prev=3,o=h.datalog.write(JSON.stringify({lesson:4,data:e})),n.next=7,h.accountManager.signAndSend(o);case 7:r=n.sent,t.result="".concat(r.blockNumber,"-").concat(r.txIndex),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](3),t.error=n.t0.message;case 14:t.loader=!1;case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))()}}};n("650b");const he=v()(be,[["render",Z],["__scopeId","data-v-666ae594"]]);var pe=he,me={components:{Account:U,Sender:pe},data:function(){return{isReady:!1}},created:function(){var e=this;h.onReady((function(){e.isReady=!0}))}};const ve=v()(me,[["render",q]]);var Oe=ve,je=Object(g["a"])({history:Object(g["b"])(),routes:[{path:"/",name:"main",component:Oe}]}),ge=je;Object(o["c"])(j).use(ge).mount("#app")},"650b":function(e,t,n){"use strict";n("2021")},b51a:function(e,t,n){},beb6:function(e){e.exports=JSON.parse('[{"question":"What statement best describes the concept of the Internet of Things?","answers":{"a":"Connecting billions of devices, capable of collecting data and integrated into the environment, to a global network.","b":"Distribution of a huge number of devices among the population of the world.","c":"Creation of sustainable and powerful computing systems.","d":"Digitalization of mobile solutions."},"multiple":false},{"question":"Which of the following DOES NOT count as an IoT system?","answers":{"a":"Smart Factory","b":"Smart Lock","c":"Smart Money","d":"Smart Car"},"multiple":false},{"question":"Which of the following can be called an autonomous system in the context of the classification of IoT devices?","answers":{"a":"smart LED light bulbs","b":"home automation hub ","c":"PM2.5 and PM10 dust sensors","d":"robot vacuum cleaner"},"multiple":false},{"question":"What are the main tasks of edge-systems? (multiple answers)","answers":{"a":"collection of data about the physical environment","b":"communication bridging for devices","c":"cooling IoT devices during long-term operation","d":"aggregation and cache of devices data","e":"real-time control of devices","f":"withdrawal of payment for the operation of IoT devices"},"multiple":true},{"question":"What are the main tasks of IoT providers? (multiple answers)","answers":{"a":"configuring analytical services","b":"configuring management services for cloud","c":"collection of personal data of users of IoT devices","d":"retail sale and delivery of IoT devices","e":"installation of new versions of the operating system on the user\'s personal computer","f":"installing software for smart device functionality"},"multiple":true},{"question":"Name one of the main functions of digital twins.","answers":{"a":"The ability to create a digital version of a person who will live in virtual reality.","b":"The ability to predict the development of the state of a real object.","c":"The ability to ask the user for digital currency for their work.","d":"The ability of devices to self-replicate exponentially in a virtual environment."},"multiple":false},{"question":"What are the reasons for the use of indirect control of devices through digital twins? (multiple answers)","answers":{"a":"the probability of data sources being overloaded when users calls them on request","b":"purposefully degrading the user experience in order to save power for devices","c":"saving the last status of devices when they fail","d":"lack of convenient user interfaces IoT-providers","e":"providing the necessary starting conditions for a launch of devices","f":"low decision-making speed by users when working with devices"},"multiple":true},{"question":"For which of the cases is it unlikely to get comprehensive analytical data at the edge level?","answers":{"a":"logs of binary sensor switching","b":"logs of the sensor for the presence of different gases in the air","c":"graphs of temperature sensor readings","d":"cross-statistics of irrigation system sensors"},"multiple":false},{"question":"Indicate the topical problems of building IoT solutions (multiple answers).","answers":{"a":"occasional disruptions to the availability of cloud services","b":"the high cost of sending transactions in blockchain","c":"high power consumption of service-oriented cloud architecture","d":"leaks of personal data","e":"the need to send data from devices for analytics","f":"issues of protection against failures, hacks and attacks"},"multiple":true},{"question":"Why is a standardized interface for machines (such as ROS) needed when developing robotic applications?","answers":{"a":"Standardized interface guarantees protection against hacking.","b":"Heterogeneous robotic devices can interact with each other at the same level","c":"Thanks to this interface, machines can even interact directly with people, without the need for a human-to-machine interface.","d":"The standardized interface allows to avoid double spending when performing transactions."},"multiple":false},{"question":"In which of these cases is launching an IoT device potentially more secure? Option 1: the user sends a request to launch the device, device digital twin downloads request parameters, the device downloads the states of the digital twin and launches. Option 2: the user sends a request to launch the device, IoT gateway receives the request and broadcasts it, the device receives a request from the gateway and launches.","answers":{"a":"Both options","b":"None of the options","c":"Option 2","d":"Option 1"},"multiple":false}]')},fb7d:function(e,t,n){"use strict";n("0fb7")}});
//# sourceMappingURL=app.695575c2.js.map