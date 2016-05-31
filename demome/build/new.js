var ProductTable = React.createClass({displayName: "ProductTable",
    getInitialState: function(){
        return {
            products: this.props.products
        };
    },
    addHandle: function(){
        var me = this;

        // 获取姓名和性别
        var name = document.getElementById('nameinput').value;
        var gender = document.getElementById('genderinput').value;        
        var newobj = {name:name,gender:gender};

        CONTENTS.push(newobj);
        console.log(CONTENTS);

        // 出发渲染
        this.setState({products: CONTENTS});
    },
    deleteHandle: function(){
        console.log(111);
        CONTENTS.splice(key,1);
        this.setState({products: CONTENTS});
    },
    changeHandle: function(){
        console.log(222);
        var name = document.getElementById('nameinput').value;
        var gender = document.getElementById('genderinput').value;        
        var newobj = {name:name,gender:gender};

        CONTENTS[key].name = newobj.name;
        CONTENTS[key].gender = newobj.gender;

        this.setState({products: CONTENTS});
    },
    render: function() {
        var me = this,
            state = me.state;
        return (
            React.createElement("div", null, 
                React.createElement("table", null, 
                    React.createElement("thead", null, 
                        React.createElement("tr", null, 
                            React.createElement("th", null, "姓名"), 
                            React.createElement("th", null, "性别"), 
                            React.createElement("th", null, "删除"), 
                            React.createElement("th", null, "修改")
                        )
                    ), 
                    React.createElement("tbody", null, 
                           
                            state.products.map(function(val, key){
                                return (
                                    React.createElement("tr", {key: key}, 
                                        React.createElement("td", null, val.name), 
                                        React.createElement("td", null, val.gender), 
                                        React.createElement("td", null, React.createElement("button", {onClick: this.deleteHandle}, "删除")), 
                                        React.createElement("td", null, React.createElement("button", {onClick: this.changeHandle}, "修改"))
                                    )
                                );
                            })
                        
                    )
                ), 
                React.createElement("div", null, 
                    React.createElement("input", {type: "text", id: "nameinput", placeholder: "请输入姓名"}), 
                    React.createElement("input", {type: "text", id: "genderinput", placeholder: "请输入性别"}), 
                    React.createElement("button", {onClick: this.addHandle}, "新增")
                )
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
  React.createElement(ProductTable, {products: CONTENTS}),
  document.getElementById('container')
);
