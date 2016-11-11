//hello world
/*ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);*/

//上面代码体现了 JSX 的基本语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析
/*var names = ['Alice', 'Emily', 'Kate'];
ReactDOM.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
);*/

//arr变量是一个数组，结果 JSX 会把它的所有成员，添加到模板
/*var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);*/

//React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。React.createClass 方法就用于生成一个组件类
var HelloMessage = React.createClass({displayName: "HelloMessage",
  render: function() {
    return React.createElement("h1", null, "Hello ", this.props.name);
  }
});

ReactDOM.render(
  React.createElement(HelloMessage, {name: "John"}),
  document.getElementById('example')
);
