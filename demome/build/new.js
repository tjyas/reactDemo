var rows=[];

var ProductRow = React.createClass({displayName: "ProductRow",
  render: function() {
    return (
      React.createElement("tr", null, 
        React.createElement("td", null, this.props.product.name), 
        React.createElement("td", null, this.props.product.gender), 
        React.createElement("td", null, React.createElement("a", null, "删除")), 
        React.createElement("td", null, React.createElement("a", null, "修改"))
      )
    );
  }
});

var ProductTable = React.createClass({displayName: "ProductTable",
  render: function() {
    // var rows = [];
    this.props.products.forEach(function(product) {
      rows.push(React.createElement(ProductRow, {product: product, key: product.name}));
    });
    console.log(CONTENTS);
    return (
      React.createElement("table", null, 
        React.createElement("thead", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "姓名"), 
            React.createElement("th", null, "性别"), 
            React.createElement("th", null, "删除"), 
            React.createElement("th", null, "修改")
          )
        ), 
        React.createElement("tbody", null, rows)
      )
    );
  }
});

var Button = React.createClass({displayName: "Button",
  handleClick: function() {
    var name = document.getElementById('nameinput').value;
    var gender = document.getElementById('genderinput').value;
    var newrow = {
      name:name,
      gender:gender
    };
    CONTENTS.push(newrow);
    console.log(CONTENTS);
    ReactDOM.render(
      React.createElement(FilterableProductTable, {products: CONTENTS}),
      document.getElementById('container')
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

var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(ProductTable, {products: this.props.products}), 
        React.createElement("input", {type: "text", id: "nameinput", placeholder: "请输入姓名"}), 
        React.createElement("input", {type: "text", id: "genderinput", placeholder: "请输入性别"}), 
        React.createElement(Button, null)
      )
    );
  }
});


var CONTENTS = [
  {name:'小强',gender:'男'},
  {name:'小红',gender:'女'},
  {name:'哈哈',gender:'男'}
];
 
ReactDOM.render(
  React.createElement(FilterableProductTable, {products: CONTENTS}),
  document.getElementById('container')
);
