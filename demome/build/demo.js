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


//组件component 和 this.props
//React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。React.createClass 方法就用于生成一个组件类
//变量 HelloMessage 就是一个组件类。模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例（下文的"组件"都指组件类的实例）。所有组件类都必须有自己的 render 方法，用于输出组件。
//注意，组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。另外，组件类只能包含一个顶层标签，否则也会报错。
/*var HelloMessage = React.createClass({
  render: function() {
    return <h1 className="haha">Hello {this.props.name}</h1>; //这里可以通过this.props.name取到<HelloMessage name="John" />里的参数
  }
});
ReactDOM.render(
  <HelloMessage name="John" />,//这里的name作为props
  document.getElementById('example')
);*/
//组件的用法与原生的 HTML 标签完全一致，可以任意加入属性，比如 <HelloMessage name="John"> ，就是 HelloMessage 组件加入一个 name 属性，值为 John。组件的属性可以在组件类的 this.props 对象上获取，比如 name 属性就可以通过 this.props.name 读取
//添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。
//总结：组件里定义时决定结构、样式、功能、属性，使用时传入数据。


//this.props.children
//this.props 对象的属性与组件的属性一一对应，但是有一个例外，就是 this.props.children 属性。它表示组件的所有子节点
//这里需要注意， this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array 。所以，处理 this.props.children 的时候要小心。React 提供一个工具方法 React.Children 来处理 this.props.children 。我们可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object。更多的 React.Children 的方法，请参考官方文档 https://facebook.github.io/react/docs/react-api.html 。
/*var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      <li> {React.Children.count(this.props.children)} </li>
      <li> {this.props.children[0]} </li>
      </ol>
    );
  }
});
ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.getElementById('example')
);*/


//PropTypes
//组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求。
//下例中，PropTypes 告诉 React，这个 title 属性是必须的，而且它的值必须是字符串。现在，我们设置 title 属性的值是一个数值。这样一来，title属性就通不过验证了。控制台会显示一行错误信息。
/*var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

var data = 123;
ReactDOM.render(
  <MyTitle title={data} />,
  document.getElementById('example')
);*/

//getDefaultProps 方法可以用来设置组件属性的默认值。
/*var MyTitle = React.createClass({
  getDefaultProps : function () {
    return {
      title : 'Hello World 默认值'
    };
  },
  render: function() {
    return <h1> {this.props.title} </h1>;
  }
});
ReactDOM.render(
  <MyTitle/>,//调用时若传入新的值，如<MyTitle title="new"/>，会覆盖默认值
  document.getElementById('example')
);*/


//有时需要从组件获取真实 DOM 的节点，不能够直接获取，这时就要用到 ref 属性。
//组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。只有当它插入文档以后，才会变成真实的 DOM 。根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。
//下面代码中，组件 MyComponent 的子节点有一个文本输入框，用于获取用户的输入。这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。为了做到这一点，文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。
//需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。上面代码中，通过为组件指定 Click 事件的回调函数，确保了只有等到真实 DOM 发生 Click 事件之后，才会读取 this.refs.[refName] 属性。
//React 组件支持很多事件，除了 Click 事件以外，还有 KeyDown 、Copy、Scroll 等，完整的事件清单请查看官方文档 https://facebook.github.io/react/docs/events.html#supported-events 。

/*var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.myTextInput.focus(); //通过ref属性获取input
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick}/>
      </div>
    );
  }
});
ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);*/


//this.state
//组件免不了要与用户互动，React 的一大创新，就是将组件看成是一个状态机，一开始有一个初始状态，然后用户互动，导致状态变化，从而触发重新渲染 UI 
//由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。
/*var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false,haha:true};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked,haha:!this.state.haha});
  },
  render: function() {
    var text1 = this.state.liked ? 'like' : 'haven\'t liked';
    var text2 = this.state.haha ? 'love' : 'haven\'t love';
    return (
      <p onClick={this.handleClick}>
        You {text1} this. <br/>
        You {text2} this. <br/>
        Click to toggle.
      </p>
    );
  }
});
ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);*/
//上面代码是一个 LikeButton 组件，它的 getInitialState 方法用于定义初始状态，也就是一个对象，这个对象可以通过 this.state 属性读取。当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件。
//由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。


//用户在表单填入的内容，属于用户跟组件的互动，所以不能用 this.props 读取
/*var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});
ReactDOM.render(
	<Input/>, 
	document.getElementById('example')
);*/
//上面代码中，文本输入框的值，不能用 this.props.value 读取，而要定义一个 onChange 事件的回调函数，通过 event.target.value 读取用户输入的值。textarea 元素、select元素、radio元素都属于这种情况



/*组件的生命周期分成三个状态：
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM

React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。
componentWillMount()
componentDidMount()
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
componentWillUnmount()

此外，React 还提供两种特殊状态的处理函数。
componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用*/


/*var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },
  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },
  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});
ReactDOM.render(
  <Hello name="world"/>,
  document.body
);*/



/*ReactDOM.render(
	<div name="miao">haha</div>,
	document.getElementById('example')
);*/


//计时
/*var Timer = React.createClass({
	getInitialState: function() {
		return {secondsElapsed: 0};
	},
	tick: function() {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1});
	},
	componentDidMount: function() {
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	render: function() {
		return (
			<div>Seconds Elapsed: {this.state.secondsElapsed}</div>
		);
	}
});
ReactDOM.render(<Timer />, document.getElementById('secdClock'));*/

//todoList
/*var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return <li>{itemText}</li>;
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});
var TodoApp = React.createClass({
	getInitialState: function() {
		return {items: [], text: ''};
	},
	onChange: function(e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([this.state.text]);
		var nextText = '';
		this.setState({items: nextItems, text: nextText});
	},
	render: function() {
		return (
			<div>
				<h3>TODO</h3>
				<TodoList items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text} />
					<button>{'Add #' + (this.state.items.length + 1)}</button>
				</form>
			</div>
		);
	}
});
ReactDOM.render(<TodoApp />, document.getElementById('example'));*/

//
/*var converter = new Showdown.converter();
var MarkdownEditor = React.createClass({
	getInitialState: function() {
		return {value: 'Type some *markdown* here!'};
	},
	handleChange: function() {
		this.setState({value: this.refs.textarea.getDOMNode().value});
	},
	render: function() {
		return (
			<div className="MarkdownEditor">
			<h3>Input</h3>
			<textarea
			onChange={this.handleChange}
			ref="textarea"
			defaultValue={this.state.value} />
			<h3>Output</h3>
			<div 
				className="content"
				dangerouslySetInnerHTML={{
					__html: converter.makeHtml(this.state.value)
				}}
			/>
			</div>
		);
	}
});
ReactDOM.render(<MarkdownEditor />, document.getElementById('example'));*/



/*var CommentList = React.createClass({
    render: function() {
        return ( 
            <div className = "commentList">
                Hello, world!I am a CommentList. 
            </div>
        );
    }
});
var CommentForm = React.createClass({
    render: function() {
        return ( 
            <div className = "commentForm">
                Hello, world!I am a CommentForm. 
            </div>
        );
    }
});
var CommentBox = React.createClass({
    render: function() {
        return ( 
            <div className = "commentBox">
                <h1> Comments </h1> 
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});
ReactDOM.render(<CommentBox/>, document.getElementById('example'));*/


/*var CommentList = React.createClass({
    render: function() {
        return ( 
            < div className = "commentList" >
                < Comment author = "Pete Hunt" > This is one comment < /Comment> 
                < Comment author = "Jordan Walke" > This is * another * comment < /Comment> 
            < /div>
        );
}});
var Comment = React.createClass({
    render: function() {
        return ( 
        < div className = "comment" >
            < h2 className = "commentAuthor" > {this.props.author} < /h2> 
            {this.props.children} 
        < /div>
        );
    }
});*/
