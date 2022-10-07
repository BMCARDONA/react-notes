

// function HelloApp() {
//   return (
//     <>
//       <Hello />
//       <Hello name="Bradley" />
//       <Hello name="Bella" />
//     </>
//   )
// }

// Instead of props, we can use {name} via destructuring 
function Hello({name = 'User'}) {
  // instead of {props.name}, we just use {name}
  return <h1>Hello, {name}!</h1>
}

// We could also set the default name this way:
// Hello.defaultProps = {
//   name: 'User'
// }


// This is an example of component composition
// When we're doing component composition, remember that 
// what's added to the browser is ONLY the HTML elements

export default function CommentApp() {
  return (
    <Comment username={"Bella"} time={new Date().toString()}>
      {/* This is why we need the {children} tag in the Comment function */}
      <h1>Hello, World!</h1>  
      <p>This is a comment.</p>
    </Comment>
  );
}


function Comment({username, time, children}) {
  return (
    <section>
      {children}
      <p>{username} commented at {time}.</p>
      {children}
    </section>
  )
}