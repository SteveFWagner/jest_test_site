(this.webpackJsonpjest_test_site=this.webpackJsonpjest_test_site||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),o=a.n(r),i=(a(29),a(30),a(2)),l=a(3),s=a(5),u=a(4),m=a(6),d=a(9),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"nav-bar"},c.a.createElement("p",null,"First National Fake"),c.a.createElement("div",null,c.a.createElement(d.b,{to:"/home"},c.a.createElement("button",null,"Home")),c.a.createElement(d.b,{to:"/checking"},c.a.createElement("button",{className:"account-checking"},"Checking")),c.a.createElement(d.b,{to:"/credit"},c.a.createElement("button",null,"Credit")),c.a.createElement(d.b,{to:"/"},c.a.createElement("button",null,"Login"))))}}]),t}(n.Component),b=a(11),p=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"login-inputs-container"},c.a.createElement("input",{type:"text",class:"login",id:"username",placeholder:"Username"}),c.a.createElement("input",{type:"password",class:"login",id:"password",placeholder:"Password"}),c.a.createElement(d.b,{to:"/home"},c.a.createElement("button",{id:"signin",class:"button"},"Login")))}}]),t}(n.Component),E=a(13),f=a.n(E),v=a(15),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={content:c.a.createElement("h3",{id:"loading"},"Loading..."),otherContent:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.setState({content:c.a.createElement("h3",{id:"home-page"},"This is the Home page.")})}),2e3),setTimeout((function(){t.setState({otherContent:c.a.createElement("h4",{id:"other-content"},"This is some other content.")})}),2200);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.content,t=this.state.otherContent;return c.a.createElement("div",{id:"home"},e,t)}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.date,a=e.description,n=e.amount;return c.a.createElement("tr",{className:"transaction"},c.a.createElement("td",{className:"transaction-date"},t),c.a.createElement("td",{className:"transaction-desc"},a),c.a.createElement("td",{className:"transaction-amount"},n))}}]),t}(n.Component),g=[{date:"09/01/2018",description:"Costa Vida",amount:"($15.75)",ageInDays:2},{date:"09/02/2018",description:"Costco",amount:"($500.50)",ageInDays:1},{date:"09/03/2018",description:"Payday",amount:"$1500.22",ageInDays:0},{date:"08/01/2018",description:"Costa Vida",amount:"($15.75)",ageInDays:32},{date:"07/02/2018",description:"Costco",amount:"($500.50)",ageInDays:61},{date:"04/03/2018",description:"Payday",amount:"$1500.22",ageInDays:150}],y={get:function(e,t){return new Promise((function(t,a){return setTimeout((function(){t(k(e))}),2e3)}))}},k=function(e){return"/checking/30"===e?g.filter((function(e){return e.ageInDays<30})):"/checking/90"===e?g.filter((function(e){return e.ageInDays<90})):void 0},C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getTableData=function(){y.get("/checking/30",2e3).then((function(e){a.setState({tableData:e}),y.get("/checking/90",2e3).then((function(e){a.setState({tableData:e})}))}))},a.state={tableData:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTableData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=0,t=this.state.tableData.map((function(t){return e+=1,c.a.createElement(O,{data:t,key:e})}));return c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",{className:"title-row"},c.a.createElement("th",null,"Date"),c.a.createElement("th",null,"Description"),c.a.createElement("th",null,"Amount"))),c.a.createElement("tbody",null,t))}}]),t}(n.Component),N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"checking-container"},c.a.createElement("div",{className:"balance-container"},c.a.createElement("h2",null,"Checking Balance"),c.a.createElement("h2",{className:"balance"},"$10,123.45")),c.a.createElement("div",{className:"account-number-container"},c.a.createElement("h4",null,"Account Number: "),c.a.createElement("h4",{className:"account-number"},"246813579")),c.a.createElement("div",{className:"transactions-container"},c.a.createElement(C,null)))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"modal-container"},c.a.createElement("div",{id:"modal-title"},c.a.createElement("h3",null,"I'm a super annoying Popup!")),c.a.createElement("p",null,"Click here to be redirected to some non-sense."),c.a.createElement("button",{id:"modal-button",onClick:this.props.closeModal},"No Thanks!"))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleCloseModal=function(){a.setState({modal:!1})},a.state={modal:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({modal:!e.state.modal})}),500)}},{key:"render",value:function(){var e;return this.state.modal&&(e=c.a.createElement(D,{closeModal:this.handleCloseModal})),c.a.createElement("div",{className:"checking-container"},c.a.createElement("div",null,e),c.a.createElement("div",{className:"balance-container"},c.a.createElement("h2",null,"Credit Balance"),c.a.createElement("h2",{className:"balance"},"$10,123.45")),c.a.createElement("div",{className:"account-number-container"},c.a.createElement("h4",null,"Account Number: "),c.a.createElement("h4",{className:"account-number"},"246813579")),c.a.createElement("div",{className:"transactions-container"},c.a.createElement(C,null)))}}]),t}(n.Component),I=c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",component:p}),c.a.createElement(b.a,{path:"/home",component:j}),c.a.createElement(b.a,{path:"/checking",component:N}),c.a.createElement(b.a,{path:"/credit",component:w}));var T=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement(h,null)),I)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(d.a,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.3a05ef67.chunk.js.map