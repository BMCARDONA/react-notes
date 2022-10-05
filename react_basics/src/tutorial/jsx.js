
import './jsx.css'


function ShortCircuitEvaluation() {
  const error = true;
  const number = true;
  return (
    <>
      {error ? <h1>Error</h1> : <h1>Success</h1>}
      {error ? 'Error' : 'Success'}
      {number ? <h1>Yes</h1> : null}
      {/* short circuit evaluation */}
      {error && <h1>Error</h1>}
      {error || <h1>Error</h1>}
    </>
  )
}


function UseProps() {
  const props = {
    id: "input",
    type: "text",
    maxLength: "3"
  }
  return (
    <>
      <label htmlFor = "input">Input: </label>
      {/* We can combine {...props} with standard syntax */}
      <input {...props} placeholder = "user" />
    </>
  )
}

function Center() {
  return <p className="center">This text is centered.</p>
}

function Styling() {
  return <p style={{
    color: 'red',
    textAlign: 'center',
    fontSize: '48px'
  }}>This is some nice styling!</p>
}


export {ShortCircuitEvaluation, UseProps, Center, Styling};
