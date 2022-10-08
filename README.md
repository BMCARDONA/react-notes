# react-notes
A repository to keep track of my progress with the React Javascript library.  

* [JSX](#JSX)
  - [React.fragment](###React.fragment)
  - [Conditional Rendering](###Conditional-Rendering)
* [Props](#Props)
  - []()
  - [Props](###Props)
* [Event-driven Programming](#Event-driven-Programming)
  - [Synthetic Event](###Synthetic-Event)
* [State](#state)
  - [State](###State)
  - [Hook](###Hook)
  - [useState](###useState)
  - [useReducer](###useReducer)
  - [Lifting State Up](###Lifting-State-Up)
  - [Controlled Component](###Controlled-Component)
* [Component Lifecycle](#Component-Lifecycle)
  - [Component Lifestyle](###Component-Lifecycle)
  - [useEffect](###useEffect)
  - [useLayoutEffect](###useLayoutEffect)


# JSX 
* To import a default function, you need to write (in the file in which you'll be importing the default function) something similar to "import NewApp from './tutorial/jsx.js'." 
  * Notice that NewApp is not surrounded by curly braces.  
* Whenever you're importing a function, make sure the first letter in its name is capitalized! 

### React.fragment:
* A React container component that renders its children without adding any additional DOM nodes.
This can be used for returning multiple adjacent elements without wrapping them in an unnecessary
element. For example:

```javascript
<React.Fragment>
  <h1>Hello World</h1>
  <p>React is awesome!</p>
</React.Fragment>
```

### Conditional-Rendering: 
* Fragments can also be created by using an empty tag, rather than the Fragment export from
React. For example:
```javascript
<>
  <h1>Hello World</h1>
  <p>React is Awesome!</p>
</>
```


# Props
### Props:
* A JavaScript object passed as a parameter to functional components, containing all of the key-value
pairs that were passed as attributes to the component. For example, given this JSX:
```javascript
<MyComponent message="hello" number={42} />
```

The MyComponent function would take in props with two key-value pairs:
```javascript
function MyComponent(props) {
 console.log(props.message); // "hello"
 console.log(props.number); // 42
 return <h1>Hello World!</h1>;
```

Learn more: https://reactjs.org/docs/components-and-props.html

# Event-Driven-Programming
### Synthetic-Event
* The object type passed to React event handler functions. Synthetic events generally work the same as native events, but with more consistency across browsers.

# State
### State
* Data specific to an instance of a component that persists between renders and causes re-renders when changed.

### Hook
* A JavaScript function used to "hook" into React features such as state and the larger component lifecycle. The
names of hooks always begin with use, and they cannot be called conditionally.

### useState
* A React hook for creating stateful components. The useState function takes in an initial state value (or a
function that returns that initial value), and it returns an array with two elements: the current state value and a
setter function. For example:
```javascript
1 const [number, setNumber] = useState(42);
```
Learn more: https://reactjs.org/docs/hooks-state.html

### useReducer
* An alternative React hook for creating stateful components, oftentimes used for more complex state. The
useReducer function takes in a reducer function and the initial state. It returns an array with two elements: the
current state value and a dispatch function. The reducer function takes in the previous state and an action object as parameters, then it returns the new state. Usually the action object will have a type property, which will be used in a switch statement. For example:
```javascript
function reducer(state, action) {
 switch (action.type) {
  case 'increment':
    return {count: state.count + action.num};
  case 'decrement':
    return {count: state.count - action.num};
  default:
    throw new Error('Unknown action type');
 }
 ```
 Learn more: https://reactjs.org/docs/hooks-reference.html#usereducer

The dispatch function will then take in an object, which will be passed as the action to the reducer function. For
example:
```javascript
const [state, dispatch] = useReducer(reducer, {
 count: 0
});
return (
 <button onClick={() => dispatch({
 type: 'increment',
 num: 1
 })}>Increment</button>
);
```

### Lifting-State-Up
* A common React pattern of moving shared state up to the lowest common ancestor component in the tree. This
allows for a single component to keep track of the state and pass the current value and setter function down
through props
Learn more: https://reactjs.org/docs/lifting-state-up.html

### Controlled-Component
* A pattern of using React state to control the current state of an input, rather than allowing the native elements to
control their own state (known as an uncontrolled component). For example, an input can be controlled via the
value and onChange props (note that in React, onChange works the same as onInput ). For example:
```javascript
const [value, setValue] = useState('');
return <input value={value} onChange={e => setValue(e.target.value)} />;
```
Learn more: https://reactjs.org/docs/forms.html#controlled-components

# Component-Lifecycle
### Component-Lifecycle
* The different stages that an instance of a component goes through. There are three primary stages
to the React lifecycle:
 - 1. Mounting: The component renders for the first time.
 - 2. Updating: The component re-renders whenever state changes or the props are updated by the parent component. A component can update many times without ever mounting again.
 - 3. Unmounting: The component is removed from the DOM. This is the final stage of the lifecycle, and a component cannot update again once it has been unmounted. However, a new instance of the component can still be mounted.

### useEffect
* A React hook for performing side effects around the component lifecycle. The useEffect hook takes in a callback function and an optional dependency array.

* If no dependency array is provided, the callback function will run on every render. If there is a dependency array provided, the callback function will only run on mount or when an item in that
array has changed (note that objects must be new objects to be considered to have changed). To avoid bugs related to effects using stale values from previous renders, the dependency array should
contain all values that the callback uses that could change between renders.

* The callback function can also return a cleanup function, which will run on unmount and before the main effect function runs on any re-renders. For example:

```javascript
useEffect(() => {
 console.log('count changed');
 return () => console.log('cleanup count changed effect');
}, [count]);
 ```

### useLayoutEffect
* A React hook for performing side effects around the component lifecycle in the same way as useEffect . The only difference between the two functions is that useLayoutEffect works synchronously, meaning the effects always finish running before the browser paints. This hook should only be used for effects that will make visual changes to the DOM, because otherwise the synchronous nature will give worse performance than useEffect without any benefits.