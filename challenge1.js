var React = require("react");

function createElement(content = "Hello World", tag = "div", props = {}) {
  return React.createElement(tag, props, content);
}
function createUnorderedList(list) { 
  // create a react unordered list with children list items created form the list argument
  return React.createElement(
    "ul",
    {},
    list.map((x,index)=>
             React.createElement("li",{key:`x-${index}`},x)
            )
  );
}