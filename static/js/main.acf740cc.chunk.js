(this.webpackJsonpjest_test_site=this.webpackJsonpjest_test_site||[]).push([[0],{24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},30:function(e,t,a){},37:function(e,t){e.exports={checking:[{date:"09/01/2018",description:"Costa Vida",amount:"($15.75)"},{date:"09/02/2018",description:"Costco",amount:"($500.50)"},{date:"09/03/2018",description:"Payday",amount:"$1500.22"}]}},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),o=(a(29),a(30),a(4)),i=a(5),u=a(7),s=a(6),m=a(8),h=a(12),b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"nav-bar"},c.a.createElement("p",null,"First National Fake"),c.a.createElement("div",null,c.a.createElement(h.b,{to:"/"},c.a.createElement("button",null,"Home")),c.a.createElement(h.b,{to:"/checking"},c.a.createElement("button",null,"Checking"))))}}]),t}(n.Component),d=a(10),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,"This is the Home Page"))}}]),t}(n.Component),p=a(17),f=a.n(p),j=a(23),v=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.date,a=e.description,n=e.amount;return c.a.createElement("tr",{className:"transaction"},c.a.createElement("td",{className:"transaction-date"},t),c.a.createElement("td",{className:"transaction-desc"},a),c.a.createElement("td",{className:"transaction-amount"},n))}}]),t}(n.Component),O=a(37),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).getTableData=function(){a.setState({tableData:O.checking})},a.state={tableData:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTableData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=0,t=this.state.tableData.map((function(t){return e+=1,c.a.createElement(v,{data:t,key:e})}));return c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",{className:"title-row"},c.a.createElement("th",null,"Date"),c.a.createElement("th",null,"Description"),c.a.createElement("th",null,"Amount"))),c.a.createElement("tbody",null,t))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"checking-container"},c.a.createElement("div",{className:"balance-container"},c.a.createElement("h2",null,"Checking Balance"),c.a.createElement("h2",{className:"balance"},"$10,123.45")),c.a.createElement("div",{className:"account-number-container"},c.a.createElement("h4",null,"Account Number: "),c.a.createElement("h4",{className:"account-number"},"246813579")),c.a.createElement("div",{className:"transactions-container"},c.a.createElement(k,null)))}}]),t}(n.Component),g=c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:E}),c.a.createElement(d.a,{path:"/checking",component:y}));var N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement(b,null)),g)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(h.a,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.acf740cc.chunk.js.map