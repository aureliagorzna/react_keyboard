(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(3),n=s.n(a),c=s(4),r=s(5),i=s(7),o=s(6),d=s(1),l=s.n(d),p=s(0),u=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={message:"Nothing was pressed yet",lastClickedKey:""},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",(function(t){e.setState({message:"The last pressed key is",lastClickedKey:t.key})}))}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("p",{className:"App__message",children:""===this.state.lastClickedKey?this.state.message:"".concat(this.state.message," [").concat(this.state.lastClickedKey,"]")})})}}]),s}(l.a.Component);s(13);n.a.render(Object(p.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.653ee775.chunk.js.map