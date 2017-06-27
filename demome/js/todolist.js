var ProductTable = React.createClass({
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
            me.state.key = null;
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
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>删除</th>
                            <th>修改</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            state.products.map(function(val, key){
                                return (
                                    <tr key={key}>
                                        <td>{val.name}</td>
                                        <td>{val.gender}</td>
                                        <td><button onClick={me.deleteHandle.bind(me,key)}>删除</button></td>
                                        <td><button onClick={me.changeHandle.bind(me,key)}>修改</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <input type="text" ref="nameinput" placeholder="请输入姓名" />
                    <input type="text" ref="genderinput" placeholder="请输入性别"/>
                    <button onClick={this.addHandle}>按我</button>
                </div>
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
  <ProductTable products={CONTENTS} />,
  document.getElementById('container')
);