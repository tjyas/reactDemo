var Input = React.createClass({displayName: "Input",
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
      React.createElement("div", null, 
        React.createElement("input", {type: "text", value: value, onChange: this.handleChange}), 
        React.createElement("input", {id: "testinput", type: "text", value: value}), 

        React.createElement("p", null, value)
      )
    );
  }
});

ReactDOM.render(React.createElement(Input, null), document.body);