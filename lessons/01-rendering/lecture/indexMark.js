import "styles"
import React from "React"
import ReactDOM from "react-dom"

//Just "JS"

const reactElement = (
  <button className="cta">
    Add
    {
      {/* just an argument to the react function */}
    } 
  </button>
)

const reactElement2 = React.createElement(
  'button',
  {
    className: "icon_button cta"
  },
  // buttonText
  "Add"
  // 
)

//lower cased is a regular DOM element
//Capital letters = React custom elements


// props children
console.log(reactElement)

const domElement = document.getElementById("root")

ReactDOM.render(reactElement, domElement)

//its all just components