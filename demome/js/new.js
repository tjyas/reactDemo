var ProductTable = React.createClass({
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
                                        <td><button onClick={this.deleteHandle}>删除</button></td>
                                        <td><button onClick={this.changeHandle}>修改</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div>
                    <input type="text" id="nameinput" placeholder="请输入姓名" />
                    <input type="text" id="genderinput" placeholder="请输入性别"/>
                    <button onClick={this.addHandle}>新增</button>
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
