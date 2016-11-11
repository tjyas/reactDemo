//hello world
/*ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);*/

var names = ['Alice', 'Emily', 'Kate'];
ReactDOM.render(
  React.createElement("div", null, 
  
    names.map(function (name) {
      return React.createElement("div", null, "Hello, ", name, "!")
    })
  
  ),
  document.getElementById('example')
);