var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
    document.getElementById("testinput").readOnly=true;
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <input id="testinput" type="text" value={value}/>

        <p>{value}</p>
      </div>
    );
  }
});

ReactDOM.render(<Input/>, document.body);