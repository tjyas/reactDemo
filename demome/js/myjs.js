// var arr = [{name:"明明",gender:"男"},{name:"红红",gender:"女"},{name:"强强",gender:"男"}];
// for (var i = arr.length - 1; i >= 0; i--) {
//   alert(arr[i].name);
//   alert(arr[i].gender);
// }


//table头行元素
var Tableth = React.createClass({
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
      <th onClick={this.thhandleClick}>
        <input type="text" value={this.state.val} readOnly="true"/>
      </th>
    );
  }
});

//table普通行元素
var Tabletd = React.createClass({
  render: function() {
    return (
      <td>
        <input type="text" value={this.props.name} readOnly="true"/>
      </td>
    );
  }
});

//table头
var Tablehead = React.createClass({
  render: function() {
    return (
      <tr>
        <Tableth name="姓名"/>
        <Tableth name="性别"/>
        <Tableth name="操作"/>
      </tr>
    );
  }
});

//table行
var Tabletr = React.createClass({
  render: function() {
    return (
      <tr>
        <Tabletd name="小刚"/>
        <Tabletd name="男"/>
        <Tabletd name="删除 修改"/>
      </tr>
    );
  }
});

var Tabletr1 = React.createClass({
  render: function() {
    return (
      <tr>
        <Tabletd name="小明"/>
        <Tabletd name="男"/>
        <Tabletd name="删除 修改"/>
      </tr>
    );
  }
});

var Tabletr2 = React.createClass({
  render: function() {
    return (
      <tr>
        <Tabletd name="小红"/>
        <Tabletd name="女"/>
        <Tabletd name="删除 修改"/>
      </tr>
    );
  }
});

var Tabletr3 = React.createClass({
  render: function() {
    return (
      <tr>
        <Tabletd name="花花"/>
        <Tabletd name="不详"/>
        <Tabletd name="删除 修改"/>
      </tr>
    );
  }
});

var Table = React.createClass({
  render: function() {
    return (
      <table className="tableStyle">
        <thead><Tablehead/></thead>
        <tbody>
          <Tabletr1/>
          <Tabletr2/>
          <Tabletr3/>
        </tbody>
      </table>
    );
  }
});

var Abc = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" id="nameinput" placeholder="请输入姓名" />
        <input type="text" id="genderinput" placeholder="请输入性别"/>
      </div>  
    );
  }
});

var Button = React.createClass({
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
      <div>
        <button onClick={this.handleClick}>新增</button>
      </div>
    );
  }
});

var Container = React.createClass({
  render: function() {
    return (
      <div>
        <Table/>
        <Button/>
        <Abc/>
      </div>
    );
  }
});

ReactDOM.render(
  React.createElement(Container, null),
  document.getElementById('container')
);