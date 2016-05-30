var rows=[];

var ProductRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.gender}</td>
        <td><a>删除</a></td>
        <td><a>修改</a></td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  render: function() {
    // var rows = [];
    this.props.products.forEach(function(product) {
      rows.push(<ProductRow product={product} key={product.name}/>);
    });
    console.log(CONTENTS);
    return (
      <table>
        <thead>
          <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>删除</th>
            <th>修改</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var Button = React.createClass({
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
      <FilterableProductTable products={CONTENTS}/>,
      document.getElementById('container')
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

var FilterableProductTable = React.createClass({
  render: function() {
    return (
      <div>
        <ProductTable products={this.props.products} />
        <input type="text" id="nameinput" placeholder="请输入姓名" />
        <input type="text" id="genderinput" placeholder="请输入性别"/>
        <Button/>
      </div>
    );
  }
});


var CONTENTS = [
  {name:'小强',gender:'男'},
  {name:'小红',gender:'女'},
  {name:'哈哈',gender:'男'}
];
 
ReactDOM.render(
  <FilterableProductTable products={CONTENTS} />,
  document.getElementById('container')
);
