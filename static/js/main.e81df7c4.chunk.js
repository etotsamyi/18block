(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{105:function(e,t,a){e.exports=a(203)},110:function(e,t,a){},111:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),s=(a(110),a(22)),o=a(23),l=a(24),m=a(25),u=(a(111),a(205)),d=a(208),h=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).run=function(){var e=n.state.msTime;n.setState({msTime:e+1}),n.timeToClock()},n.handleStart=function(){var e=n.state.active;n.setState({active:!e}),e?clearInterval(n.timerID):n.timerID=setInterval((function(){return n.run()}),10)},n.handleDrop=function(){clearInterval(n.timerID),n.setState({msTime:0,sTime:0,mTime:0,hTime:0,active:!1})},n.timeToClock=function(){var e=n.state,t=e.msTime,a=e.sTime,c=e.mTime,r=e.hTime;60===c&&n.setState({mTime:0,hTime:r+1}),60===a&&n.setState({sTime:0,mTime:c+1}),100===t&&n.setState({msTime:0,sTime:a+1})},n.state={msTime:0,sTime:0,mTime:0,hTime:0,active:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.msTime,a=e.sTime,n=e.mTime,r=e.hTime,i=e.active;return c.a.createElement("div",null,c.a.createElement(d.a,{className:"btn",onClick:this.handleStart},i?"\u041f\u0430\u0443\u0437\u0430":"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"),c.a.createElement(d.a,{className:"btn",onClick:this.handleDrop},"\u0421\u0431\u0440\u043e\u0441"),c.a.createElement("div",{className:"clock"},r<10?"0".concat(r):"".concat(r)," ",":",n<10?" 0".concat(n):" ".concat(n)," ",":",a<10?" 0".concat(a):" ".concat(a)," ",":",t<10?" 0".concat(t):" ".concat(t)))}}]),a}(c.a.PureComponent),v=a(204),f=a(207),b=a(91),T=a.n(b),p=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={seconds:0,active:!1,allTime:0},e.secondsToBeautifulTime=function(){var t=e.state.seconds,a=Math.floor(t/60);return{minute:a,second:t-60*a}},e.handleSliderChange=function(t){e.setState({seconds:t})},e.handleSecondsChange=function(){return function(t){var a=e.state.seconds;e.setState({seconds:a+Number(t.target.value)})}},e.handleMinutesChange=function(){return function(t){var a=e.state.seconds;e.setState({seconds:a+60*Number(t.target.value)})}},e.run=function(){var t=e.state,a=t.seconds,n=t.active;0===a?(clearInterval(e.timerID),e.setState({seconds:a-1,active:!n}),e.soundPlay()):e.setState({seconds:a-1})},e.handleStartStop=function(){var t=e.state,a=t.seconds,n=t.active;0===t.allTime?e.setState({active:!n,allTime:Number(a)}):e.setState({active:!n}),n?clearInterval(e.timerID):e.timerID=setInterval((function(){return e.run()}),1e3)},e.handleDrop=function(){clearInterval(e.timerID),e.setState({active:0,seconds:0,allTime:0})},e.soundPlay=function(){new Audio(T.a).play()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.seconds,n=t.active,r=t.allTime,i=Number(a)/r,s=Math.round(100-100*i),o=this.secondsToBeautifulTime(),l=o.minute,m=o.second;return c.a.createElement("div",null,c.a.createElement(v.a,{max:3600,min:0,value:Number(a),onChange:function(t){return e.handleSliderChange(t)},disabled:n,step:15}),c.a.createElement("input",{type:"number",min:"0",max:"720",value:l,onChange:this.handleMinutesChange(),className:"btn",placeholder:"\u043c\u0438\u043d\u0443\u0442\u044b",disabled:n}),c.a.createElement("input",{type:"number",min:"0",max:"59",value:m,onChange:this.handleSecondsChange(),className:"btn",placeholder:"\u0441\u0435\u043a\u0443\u043d\u0434\u044b",disabled:n}),c.a.createElement(d.a,{className:"btn",onClick:this.handleStartStop,disabled:0===a},n?"\u041f\u0430\u0443\u0437\u0430":"\u0421\u0442\u0430\u0440\u0442"),c.a.createElement(d.a,{className:"btn",onClick:this.handleDrop,disabled:!r},"\u0421\u0431\u0440\u043e\u0441"),c.a.createElement("div",{className:"clock"},l," ",":",m),c.a.createElement(f.a,{type:"circle",percent:s}))}}]),a}(c.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(p,null)}}]),a}(c.a.PureComponent),C=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=u.a.TabPane;return c.a.createElement(u.a,{defaultActiveKey:"1"},c.a.createElement(e,{tab:"Timer",key:"1"},c.a.createElement(h,null)),c.a.createElement(e,{tab:"Countdown",key:"2"},c.a.createElement(S,null)))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,a){e.exports=a.p+"static/media/timer-end.6180537e.mp3"}},[[105,1,2]]]);
//# sourceMappingURL=main.e81df7c4.chunk.js.map