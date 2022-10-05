

export default function NewApp() {
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
