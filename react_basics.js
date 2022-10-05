

// Function Components - a function that returns a react element (JSX)

// Notice that we use Pascal casing, not camel casing!
function sayHello() {
  return <p>Hello World</p>
}

function App () {
  return (
    <div>
      {/* if first letter of tag name is capitalized -- it's a custom react component;
      if it's lower case, it's a standard HTML tag */}
      <sayHello />
      <p>Welcome to React!</p>
    </div>
  )
}


// Create react repository: npx create-react-app <name>
// Then do:
// cd react_basics
// npm start
