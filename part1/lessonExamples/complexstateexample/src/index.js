import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const History = ({historyArray}) => {

  if (historyArray.length === 0) {

    return (
      <p>the app is used by pressing the buttons.</p>
    )
  }

  return (
    <div>
      button press history: {historyArray.join(' ')};
    </div>
  )
}

const Button = ({handleClick, text}) => <button onClick= {handleClick}> {text} </button>;


const App = () => {
 
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {

    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }

  const handleRightClick = () => {

    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick= {handleLeftClick} text= "left"/>
        <Button handleClick= {handleRightClick} text= "right"/>
        {right}
        <History historyArray={allClicks}/>
      </div>
    </div>
  );
}



ReactDOM.render(<App />, document.getElementById('root'))
