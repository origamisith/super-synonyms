(this["webpackJsonpsuper-synonyms"]=this["webpackJsonpsuper-synonyms"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),i=n(16),r=n.n(i),o=(n(25),n(7)),c=n(8),d=n(11),l=n(10),h=(n(26),n(27),n(40)),u=n(41),j=n(18),m=n(42),f=n(43),p={key:"68520c2048msh27e0c5d596e08d9p15547cjsn480fd9da4606"},b=(n(28),n(9)),x=n.n(b),y=n(4),O=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).fetchDefinition=function(){s.setState({loading:!0},(function(){fetch("https://wordsapiv1.p.rapidapi.com/words/"+s.props.word+"/definitions",{method:"GET",headers:{"x-rapidapi-key":p.key,"x-rapidapi-host":"wordsapiv1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(t){s.setState({definitions:Array.from(t.definitions),loading:!1}),console.log(s.state.definitions+" are the definitions")})).catch((function(t){console.log(t)}))}))},s.state={word:"",loading:!1},s}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.fetchDefinition()}},{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsxs)(h.a,{className:"Item",children:[Object(y.jsx)("h2",{className:"Header",children:this.props.word}),Object(y.jsx)(x.a,{loading:this.state.loading}),this.state.definitions?this.state.definitions.map((function(t){return Object(y.jsxs)("h4",{children:[t.partOfSpeech,": ",t.definition]})})):""]})})}}]),n}(s.Component),g=n(17),v=n.n(g),w=(n(15),function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={word:"",loading:!1,maxChars:15},t.handleSubmitWord=function(e){t.setState({loading:!0},(function(){e.preventDefault(),t.state.word&&fetch("https://wordsapiv1.p.rapidapi.com/words/"+t.state.word+"/synonyms",{method:"GET",headers:{"x-rapidapi-key":p.key,"x-rapidapi-host":"wordsapiv1.p.rapidapi.com"}}).then((function(t){return t.json()})).then((function(e){t.setState({failed:!e.synonyms,synonyms:e.synonyms?Array.from(e.synonyms):"",loading:!1,results:e.synonyms.length}),console.log(e)})).catch((function(t){console.log(t)}))}))},t.handleWordChange=function(e){t.setState({word:e.target.value})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(h.a,{className:"firstrow",fluid:!0,children:Object(y.jsx)(u.a,{className:"nav",children:Object(y.jsx)(j.a,{className:"navbar-text",children:" Super Synonyms"})})}),Object(y.jsxs)(h.a,{className:"secondrow",children:[Object(y.jsx)("form",{onSubmit:this.handleSubmitWord,children:Object(y.jsxs)(m.a,{class:"justify-content-center",as:u.a,className:"Form",onSubmit:this.handleSubmitWord,children:[Object(y.jsx)(j.a,{xs:6,className:"enter",children:Object(y.jsx)(m.a.Control,{placeholder:"Enter a word",variant:"primary",type:"text",name:"word",onChange:this.handleWordChange})}),Object(y.jsx)(j.a,{xs:1,class:"text-left",children:Object(y.jsx)(f.a,{variant:"primary",type:"submit",children:Object(y.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})})}),Object(y.jsxs)(j.a,{lg:5,className:"slider",children:[Object(y.jsx)(u.a,{className:"sliderTitle",children:"Maximum Word Length"}),Object(y.jsx)(u.a,{children:Object(y.jsx)(v.a,{value:this.state.maxChars,tooltip:"on",min:"2",max:"20",onChange:function(e){return t.setState({maxChars:e.target.value,results:t.state.synonyms.filter((function(t){return t.length<=e.target.value})).length})}})})]})]})}),Object(y.jsx)(u.a,{className:"results",children:this.state.results?"Showing "+this.state.results+" results":""})]}),Object(y.jsx)(h.a,{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(x.a,{loading:this.state.loading}),this.state.synonyms?this.state.synonyms.filter((function(e){return e.length<=t.state.maxChars})).map((function(t){return Object(y.jsx)(O,{word:t},t)})):"",!0===this.state.failed?Object(y.jsx)("h1",{children:"No synonyms found"}):""]})})]})}}]),n}(s.Component));r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0c5dfe33.chunk.js.map