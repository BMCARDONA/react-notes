import { useReducer } from "react";

// state comes from state, action from dispatch
function reducer(state, action) {
  switch (action.type) {
    case 'increment': 
      return {count: state.count + action.num};
    case 'decrement':
      return {count: state.count - action.num}
    default: 
    throw new Error('Unknown action type')
  }
}

export default function StateApp() {
  // Whenever you use a function in react that starts with 'use', it's 
  // a hook function -- e.g., useState
  // The 0 in useState(0) means that count is initially set to 0
  // Note that hooks cannot be called conditionally; also
  // note that hooks can take in function as their parameters
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  });

  return (
    <>
      <Counter count={state.count} onClick={() => dispatch({
        type: 'increment',
        num: 1
      })}/>
      <Counter count={state.count} onClick={() => dispatch({
        type: 'increment',
        num: 10
      })}/>
    </>
  )
}

function Counter({count, onClick}) {
  return (
    <>
      <button onClick={onClick}>
        Increment
      </button>
      <p>Count: {count}</p>
    </>
  );
}

