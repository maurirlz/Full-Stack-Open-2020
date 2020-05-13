import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1);
  const decrementByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0);
  
  return (
    <div>
      <div><Display counter= {counter}/></div>
      <Button handleClickr= {increaseByOne} text= "plus"/>
      <Button handleClickr= {decrementByOne} text= "minus"/>
      <Button handleClick= {setToZero} text= "zero"/>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({handleClick, text}) => (

  <button onClick = {handleClick}>
    {text}
  </button>
)

ReactDOM.render(<App />, document.getElementById('root'))

