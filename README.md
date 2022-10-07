# react-notes
A repository to keep track of my progress with the React Javascript library. 


# JSX 
* To export a default function, you need to write (in the file in which you'll be importing the default function) something similar to "import NewApp from './tutorial/jsx.js'." 
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

### Conditional Rendering: 
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

# Event-Driven Programming
### SyntheticEvent
* The object type passed to React event handler functions. Synthetic events generally work the same as native events, but with more consistency across browsers.
