// var arr = [{name:"明明",gender:"男"},{name:"红红",gender:"女"},{name:"强强",gender:"男"}];
// for (var i = arr.length - 1; i >= 0; i--) {
//   alert(arr[i].name);
//   alert(arr[i].gender);
// }


//table头行元素
var Tableth = React.createClass({displayName: "Tableth",
  getInitialState :function(){
    return{
      val: "myval"
    };
  },
  thhandleClick: function(event){
    this.readOnly = "false";
  },
  render: function() {
    return (
      React.createElement("th", {onClick: this.thhandleClick}, 
        React.createElement("input", {type: "text", value: this.state.val, readOnly: "true"})
      )
    );
  }
});

//table普通行元素
var Tabletd = React.createClass({displayName: "Tabletd",
  render: function() {
    return (
      React.createElement("td", null, 
        React.createElement("input", {type: "text", value: this.props.name, readOnly: "true"})
      )
    );
  }
});

//table头
var Tablehead = React.createClass({displayName: "Tablehead",
  render: function() {
    return (
      React.createElement("tr", null, 
        React.createElement(Tableth, {name: "姓名"}), 
        React.createElement(Tableth, {name: "性别"}), 
        React.createElement(Tableth, {name: "操作"})
      )
    );
  }
});

//table行
var Tabletr = React.createClass({displayName: "Tabletr",
  render: function() {
    return (
      React.createElement("tr", null, 
        React.createElement(Tabletd, {name: "小刚"}), 
        React.createElement(Tabletd, {name: "男"}), 
        React.createElement(Tabletd, {name: "删除 修改"})
      )
    );
  }
});

var Tabletr1 = React.createClass({displayName: "Tabletr1",
  render: function() {
    return (
      React.createElement("tr", null, 
        React.createElement(Tabletd, {name: "小明"}), 
        React.createElement(Tabletd, {name: "男"}), 
        React.createElement(Tabletd, {name: "删除 修改"})
      )
    );
  }
});

var Tabletr2 = React.createClass({displayName: "Tabletr2",
  render: function() {
    return (
      React.createElement("tr", null, 
        React.createElement(Tabletd, {name: "小红"}), 
        React.createElement(Tabletd, {name: "女"}), 
        React.createElement(Tabletd, {name: "删除 修改"})
      )
    );
  }
});

var Tabletr3 = React.createClass({displayName: "Tabletr3",
  render: function() {
    return (
      React.createElement("tr", null, 
        React.createElement(Tabletd, {name: "花花"}), 
        React.createElement(Tabletd, {name: "不详"}), 
        React.createElement(Tabletd, {name: "删除 修改"})
      )
    );
  }
});

var Table = React.createClass({displayName: "Table",
  render: function() {
    return (
      React.createElement("table", {className: "tableStyle"}, 
        React.createElement("thead", null, React.createElement(Tablehead, null)), 
        React.createElement("tbody", null, 
          React.createElement(Tabletr1, null), 
          React.createElement(Tabletr2, null), 
          React.createElement(Tabletr3, null)
        )
      )
    );
  }
});

var Abc = React.createClass({displayName: "Abc",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", id: "nameinput", placeholder: "请输入姓名"}), 
        React.createElement("input", {type: "text", id: "genderinput", placeholder: "请输入性别"})
      )  
    );
  }
});

var Button = React.createClass({displayName: "Button",
  handleClick: function() {
    // alert(document.getElementById('nameinput').value);
    // alert(document.getElementById('genderinput').value);
    var tableLast = document.getElementById('container');
    ReactDOM.render(
      React.createElement(Tabletr, null),
      tableLast
    );
  
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("button", {onClick: this.handleClick}, "新增")
      )
    );
  }
});

var Container = React.createClass({displayName: "Container",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Table, null), 
        React.createElement(Button, null), 
        React.createElement(Abc, null)
      )
    );
  }
});

var CONTENTS = [
  {name:'小强',gender:'男',del:'删除',chg:'修改'},
  {name:'小红',gender:'女',del:'删除',chg:'修改'},
  {name:'哈哈',gender:'男',del:'删除',chg:'修改'}
];

ReactDOM.render(
  React.createElement(Container, null),
  document.getElementById('container')
);



