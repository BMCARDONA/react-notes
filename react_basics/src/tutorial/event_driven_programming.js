
export default function EventDriven() {
  return (
    // onClick will be passed to MyButton
    <MyButton onClick={handleClick}>Click Me</MyButton>
  );
}

// Use function keyword when you have a stand-alone function;
// I.e., when you have a function that's not in a component 
function handleClick(event) {
  // Logs synthetic base event -- which creates consistency
  // across browsers. 
  console.log(event);
  // If you need native event (which will happen rarely), 
  // you can just do:
  console.log(event.nativeEvent);
}

function MyButton(props) {
  return (
    <button 
      // Can be used instead of onClick={props.onClick}
      {...props}
      style={{
      color: 'blue'
      }}>
      {/* No longer need this line since we added {...props} */}
      {/* {props.children} */}
    </button>
  )
}
