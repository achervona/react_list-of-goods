(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(5),r=n.n(s),i=n(2),l=n(6),c=n(7),u=n(9),m=n(8),p=(n(15),n(1)),d=n.n(p),h=(n(18),n(19),{name:d.a.string.isRequired}),g=o.a.memo((function(e){var t=e.good;return o.a.createElement("li",{className:"good"},t.name)}));g.propTypes=d.a.shape(h).isRequired;var b=n(3),f={goods:d.a.arrayOf(d.a.shape(Object(b.a)(Object(b.a)({},h),{},{id:d.a.number.isRequired}))).isRequired},v=o.a.memo((function(e){var t=e.goods;return o.a.createElement("ul",{className:"goods-list"},t.map((function(e){return o.a.createElement(g,{good:e,key:e.id})})))}));v.propTypes=d.a.shape(f).isRequired;n(20);var L={reverseList:d.a.func.isRequired,resetList:d.a.func.isRequired,sortByAlphabet:d.a.func.isRequired,sortByLength:d.a.func.isRequired,minWordLength:d.a.number,selectLength:d.a.func.isRequired},E=o.a.memo((function(e){var t=e.reverseList,n=e.resetList,a=e.sortByAlphabet,s=e.sortByLength,r=e.minWordLength,i=e.selectLength;return o.a.createElement("div",{className:"list-options"},o.a.createElement("div",{className:"list-options__buttons"},o.a.createElement("button",{type:"button",className:"list-options__button button",onClick:t},"Reverse"),o.a.createElement("button",{type:"button",className:"list-options__button button",onClick:a},"Sort alphabetically"),o.a.createElement("button",{type:"button",className:"list-options__button button",onClick:s},"Sort by length"),o.a.createElement("button",{type:"button",className:"list-options__button button",onClick:n},"Reset")),o.a.createElement("p",{className:"list-options__paragraph"},"Minimal word length:"),o.a.createElement("select",{className:"list-options__select",value:r,onChange:function(e){return i(e.target.value)}},o.a.createElement("option",{value:1},"1"),o.a.createElement("option",{value:2},"2"),o.a.createElement("option",{value:3},"3"),o.a.createElement("option",{value:4},"4"),o.a.createElement("option",{value:5},"5"),o.a.createElement("option",{value:6},"6"),o.a.createElement("option",{value:7},"7"),o.a.createElement("option",{value:8},"8"),o.a.createElement("option",{value:9},"9"),o.a.createElement("option",{value:10},"10")))}));E.propTypes=L,E.defaultProps={minWordLength:1};var y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{name:e,id:t}})),_=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={isListVisible:!1,isButtonVisible:!0,goods:y,minWordLength:1},e.showList=function(){e.setState((function(e){return{isListVisible:!0,isButtonVisible:!1}}))},e.reverseList=function(){e.setState((function(e){return{goods:Object(i.a)(e.goods).reverse()}}))},e.sortByAlphabet=function(){e.setState((function(e){return{goods:Object(i.a)(e.goods).sort((function(e,t){return e.name.localeCompare(t.name)}))}}))},e.resetList=function(){e.setState((function(e){return{goods:y,minWordLength:1}}))},e.sortByLength=function(){e.setState((function(e){return{goods:Object(i.a)(e.goods).sort((function(e,t){return e.name.length-t.name.length}))}}))},e.selectLength=function(t){e.setState({goods:y.filter((function(e){return e.name.length>=t})),minWordLength:+t})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.isListVisible,a=e.isButtonVisible,s=e.minWordLength;return o.a.createElement("div",{className:"app"},o.a.createElement("h1",{className:"app__header"},"Goods"),a&&o.a.createElement("button",{type:"button",className:"app__button button",onClick:this.showList},"Start"),n&&o.a.createElement("div",{className:"app__wrapper"},o.a.createElement(v,{goods:t}),o.a.createElement(E,{reverseList:this.reverseList,resetList:this.resetList,sortByAlphabet:this.sortByAlphabet,sortByLength:this.sortByLength,minWordLength:s,selectLength:this.selectLength})))}}]),n}(a.PureComponent);r.a.render(o.a.createElement(_,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.f71d0c4a.chunk.js.map