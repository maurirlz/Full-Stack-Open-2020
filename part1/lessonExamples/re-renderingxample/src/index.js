import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  
  const [counter, setCounter] = useState(0)

  const handleClick = () => setCounter(counter + 1);
  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}> 
      plus
      </button>
      <button onClick={() => setCounter(0)}>
      zero
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

