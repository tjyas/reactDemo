var ProductTable = React.createClass({displayName: "ProductTable",
    getInitialState: function(){
        return {
            products: this.props.products,
            key: null
        };
    },
    addHandle: function(){
        var me = this;

        // 获取姓名和性别
        var name = me.refs.nameinput.value;
        var gender = me.refs.genderinput.value;      
        var newobj = {name:name,gender:gender};
        var key = me.state.key;
        if(key==null){
            me.state.products.push(newobj);
        }else{
            me.state.products[key].name = newobj.name;
            me.state.products[key].gender = newobj.gender;
            key = null;
        }
        
        // 渲染
        me.setState(me.state.products);
    },
    deleteHandle: function(key){
        var me = this;
        console.log(key);
        me.state.products.splice(key,1);
        this.setState(me.state.products);
    },
    changeHandle: function(key){
        var me = this;
        me.refs.nameinput.value = me.state.products[key].name;
        me.refs.genderinput.value = me.state.products[key].gender;
        me.state.key = key;
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
                                        React.createElement("td", null, React.createElement("button", {onClick: me.deleteHandle.bind(me,key)}, "删除")), 
                                        React.createElement("td", null, React.createElement("button", {onClick: me.changeHandle.bind(me,key)}, "修改"))
                                    )
                                );
                            })
                        
                    )
                ), 
                React.createElement("div", null, 
                    React.createElement("input", {type: "text", ref: "nameinput", placeholder: "请输入姓名"}), 
                    React.createElement("input", {type: "text", ref: "genderinput", placeholder: "请输入性别"}), 
                    React.createElement("button", {onClick: this.addHandle}, "按我")
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