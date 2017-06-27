var PartyItem = React.createClass({
    //配置props的要求规范
    propTypes: {
        // placeholder: React.PropTypes.string,
        selectArr: React.PropTypes.array.isRequired
    },
    //设置props的默认值
    getDefaultProps : function () {
        return {
            placeholder : '请填写名称'
        };
    },
    //初始化this.state
    getInitialState: function(){
        console.log('PartyItem getInitialState');
        if (this.props.data && this.props.data.length > 0 ) {
            return {
                list: this.props.data
            }
        }else{
            return {
                list: [{id:"dm5h4j1",position:"0",text:''}]
            }            
        }
    },
    //插入真实DOM之前
    componentWillMount: function(){
        console.log('PartyItem componentWillMount');
    },
    //插入真实DOM之后
    componentDidMount: function(){
        console.log('PartyItem componentDidMount');
    },
    //重新渲染之前
    componentWillUpdate: function(nextProps,nextState){
        console.log('PartyItem componentWillUpdate');
/*        console.log('nextProps',nextProps);
        console.log('nextState',nextState);*/
    },
    //重新渲染之后
    componentDidUpdate: function(prevProps,prevState){
        console.log('PartyItem componentDidUpdate');
/*        console.log('prevProps',prevProps);
        console.log('prevState',prevState);*/
        console.table(this.state.list);
    },
    //移除真实DOM之前
    componentWillUnmount: function(){
        console.log('PartyItem componentWillUnmount');
    },
    //已加载组件收到新的参数时调用
    componentWillReceiveProps: function(nextProps){
        console.log('%c PartyItem componentWillReceiveProps','background: #222; color: #bada55');
        // console.log('nextProps',nextProps);
    },
    //组件判断是否重新渲染时调用，返回false不update
    shouldComponentUpdate: function(nextProps,nextState){
        console.log('PartyItem shouldComponentUpdate');
        return true;
    },
    //增
    addHandle: function(){
        console.log('PartyItem addHandle');
        var me = this;
        var next = nextPosition(me.state.list);
        if (next) {
            //setState()方法设置state的同时，自动render
            me.setState({list:me.state.list.concat({position:next,id:Math.random()})});
        }
    },
    //删
    deleteHandle: function(key){
        console.log('PartyItem deleteHandle');
        var me = this;
        me.state.list.splice(key,1);
        this.forceUpdate();
    },
    //改
    changeHandle: function(key,event){
        console.log('PartyItem changeHandle');
        var me = this;
        if (event.target.type == 'text') {
            me.state.list[key].text = event.target.value;
        }else if(event.target.type == 'select-one'){
            me.state.list[key].position = event.target.value;
        }
        //改变state之后，通过调用forceUpdate方法强制运行render，该方法不受到shouldComponentUpdate返回值的制约
        this.forceUpdate();
    },
    //渲染
    render: function() {
        console.log('PartyItem render');
        var me = this,
            state = me.state,
            props = me.props;
        var canChoose = canChooseFunc(state.list);

        state.title = state.list.length < 10 ? '增加' : '已经到达上限';

/*        var cx = React.addons.classSet;
        var classes = cx({
            'item-action': true,
            'blue': state.list.length < 10,
            'red': state.list.length >= 10
        });*/

        //jsx中不可以使用if else，提到外面定义不同的hello
        if (state.list.length>1) {
            var hello = <HelloMessage name={state.list[0].text} />;
        }else{
            var hello = <div></div>;
        }

        return (
            <div>
                {hello}
                {
                    state.list.map(function(item,key){
                        var options = canChoose.concat(item.position).sort();
                        if (!key) {
                            return (
                                <div data-role="item" className="item item-first" data-name={props.type} key={key}>
                                    <input type="hidden" name="id" value={item.id}/>
                                    <input type="hidden" name="position" value={item.position}/>
                                    <select name="position" className="item-select" disabled="disabled" value={item.position}>
                                        <option value={item.position}> {props.selectArr[0]}</option>
                                    </select>
                                    <input type="text" name="text" className="item-input" placeholder={props.placeholder} value={item.text} onChange={me.changeHandle.bind(me,key)}/>
                                    <span onClick={me.addHandle} className="item-action" title={state.title}>增加</span>
                                </div>
                            );
                        }else{
                            return (
                                <div data-role="item" className="item" data-name={props.type} key={key}>
                                    <input type="hidden" name="id" value={item.id}/>
                                    <select name="position" className="item-select" value={item.position} onChange={me.changeHandle.bind(me,key)}>
                                        {
                                            options.map(function(option){
                                                return(
                                                    <option value={option}>{props.selectArr[option]}</option>
                                                );
                                            })
                                        }
                                    </select>
                                    <input type="text" name="text" className="item-input" placeholder={props.placeholder} value={item.text} onChange={me.changeHandle.bind(me,key)}/>
                                    <span onClick={me.deleteHandle.bind(me,key)} className="item-action">删除</span>
                                </div>
                            );
                        }
                    })
                }
            </div>
        );
    },
    //静态方法可以在组件类上调用，这些方法不能获取组件的props和state
    statics: {
        getCount: function() {
            return 'getCount';
        }
    }

});

var props = {};
props.data = [
/*    {id:"dm5h4j1",position:"0",text:'哈哈'},
    {id:"c9d8t4k",position:"1",text:'bob'},
    {id:"k3k56j5",position:"2",text:'mike'},
    {id:"m5l8c0p",position:"3",text:'haha'}*/
    ];
// props.placeholder = "请填写天干名称";
props.selectArr = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
props.type = "haha";
props.haha = "haha";

//子组件
var HelloMessage = React.createClass({
    //插入真实DOM之后
    componentDidMount: function(){
        console.log('HelloMessage componentDidMount');
        //绑定普通的事件——销毁时要删除
        $('.haha').on('dblclick',function(){
            console.log('dblclick')
        });
    },
    //移除真实DOM之前
    componentWillUnmount: function(){
        console.log('%c HelloMessage componentWillUnmount','background: #F5BDB3; color: #000');
        //解绑事件
        $('.haha').off('dblclick',function(){
            console.log('dblclick')
        });
    },
    //已加载组件收到新的props时调用
    componentWillReceiveProps: function(nextProps){
        console.log('%c HelloMessage componentWillReceiveProps','background: #222; color: #bada55');
        console.log('nextProps',nextProps);
    },
    helloClick: function(e){
        console.log('HelloMessage clickHello');
    },
    spanClick: function(e){
        console.log('HelloMessage spanClick');
        e.stopPropagation(); 
    },
    render: function() {
        var me = this;
        return <h1 className="haha" onClick={me.helloClick}>Hello {this.props.name} <span onClick={me.spanClick}>123</span></h1>;
    }
});

ReactDOM.render(
  <PartyItem {...props} />,
  document.getElementById('container')
);


//给出下拉列表的选项
function canChooseFunc(data){
    var canChoose = new Array();
    for(var i = 1 ; i < 10 ; i++){
        canChoose.push(String(i));
    }
    //排除已选项
    data.map(function(val,index,data){
        var pos = canChoose.indexOf(val.position);
        if ( pos !== -1) {
            canChoose.splice(pos,1);                  
        }
    });
    return canChoose;
}

//下一个要增加的序号
function nextPosition(list){
    for(var i = 0 ; i < 10 ; i++){
        var result = list.every(function(val,index,arr){
            return val.position != i;
        });
        if (result) {
            return String(i);
        }
    }
    return false;
}

