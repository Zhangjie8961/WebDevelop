(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(2),i=a.n(c),s=a(3),r=a(4),o=a(6),u=a(5),m=a(7),h=(a(13),{setStorage:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getStorage:function(e){return JSON.parse(localStorage.getItem(e))},removeStorage:function(e){localStorage.removeStorage(e)}}),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).keyEnter=function(e){if(13===e.which){var t=e.target,n={title:t.value,swfc:!1},l=a.state.list;l.push(n),a.setState({list:l}),t.value="",h.setStorage("lists",l)}},a.changeBox=function(e){var t=a.state.list;t[e].swfc=!t[e].swfc,a.setState({list:t}),h.setStorage("lists",t)},a.deleteData=function(e){var t=a.state.list;t.splice(e,1),a.setState({list:t}),h.setStorage("lists",t)},a.state={list:[{title:"PHP",sfwc:!1},{title:"React",sfwc:!0}]},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=h.getStorage("lists");e&&this.setState({list:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"block"},l.a.createElement("div",{className:"title"},l.a.createElement("div",{className:"titleleft"},l.a.createElement("h2",null,"ToDoList")),l.a.createElement("div",{className:"titleright"},l.a.createElement("input",{type:"text",onKeyPress:this.keyEnter}))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("h3",null,"\u672a\u5b8c\u6210"),this.state.list.map((function(t,a){return t.swfc?"":l.a.createElement("div",{key:a},l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",checked:t.swfc,onChange:e.changeBox.bind(e,a)}),t.title,"--------",l.a.createElement("button",{onClick:e.deleteData.bind(e,a)},"\u5220\u9664")))})),l.a.createElement("h3",null,"\u5df2\u5b8c\u6210"),this.state.list.map((function(t,a){return t.swfc?l.a.createElement("div",{key:a},l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",checked:t.swfc,onChange:e.changeBox.bind(e,a)}),t.title,"--------",l.a.createElement("button",{onClick:e.deleteData.bind(e,a)},"\u5220\u9664"))):""})))))}}]),t}(l.a.Component);i.a.render(l.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.98172f41.chunk.js.map