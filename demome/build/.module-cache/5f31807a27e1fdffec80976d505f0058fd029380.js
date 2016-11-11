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
//变量 HelloMessage 就是一个组件类。模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例（下文的"组件"都指组件类的实例）。所有组件类都必须有自己的 render 方法，用于输出组件。
//注意，组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。另外，组件类只能包含一个顶层标签，否则也会报错。
/*var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;//这里可以通过this.props.name取到<HelloMessage name="John" />里的参数
  }
});
ReactDOM.render(
  <HelloMessage name="John" />,//这里的name作为props
  document.getElementById('example')
);*/

