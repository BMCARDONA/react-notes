# react-notes
A repository to keep track of my progress with the React Javascript library. 


## JSX 
### Notes:
* To export a default function, you need to write (in the file in which you'll be importing the default function) something similar to "import NewApp from './tutorial/jsx.js'." 
  * Notice that NewApp is not surrounded by curly braces.  

* Whenever you're importing a function, make sure the first letter in its name is capitalized! 

### Useful information:

A React container component that renders its children without adding any additional DOM nodes.
This can be used for returning multiple adjacent elements without wrapping them in an unnecessary
element. For example:

```javascript
<React.Fragment>
  <h1>Hello World</h1>
  <p>React is awesome!</p>
</React.Fragment>
```

Fragments can also be created by using an empty tag, rather than the Fragment export from
React. For example:
```javascript
<>
  <h1>Hello World</h1>
  <p>React is Awesome!</p>
</>
```

