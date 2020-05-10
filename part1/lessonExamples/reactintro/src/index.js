import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </>
  )
}

const App = () => {

  const name = 'Kiara';
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Joago" age = {10 + 10} />
      <Hello name={name} age={age}/>
      <Hello />
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))