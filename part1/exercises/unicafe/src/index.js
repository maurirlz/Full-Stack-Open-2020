import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({counter, text}) => <div><p>{text}: {counter}</p></div>

const Statistics = ({goodCounter, neutralCounter, badCounter}) => {

  let totalOpinions = goodCounter + neutralCounter + badCounter;

  let totalPositiveFeedback = goodCounter - badCounter;

  let percentagePositiveFeedback = (goodCounter / badCounter) * 10;

  let average = totalPositiveFeedback / totalOpinions;

  if (goodCounter === 0 && neutralCounter === 0 && badCounter === 0) {

    return (
      <div>
      <h2>Statistics: </h2>
      <div><p>No feedback given.</p></div>
      </div>
    )
  }

  return (

    <div>
      {/* <div>
        <Statistic counter={goodCounter} text= 'good:'/>
        <Statistic counter={neutralCounter} text= 'neutral:'/>
        <Statistic counter={badCounter} text='bad:'/>
        <Statistic counter={average} text='average:' />
        <Statistic counter={percentagePositiveFeedback} text="positive: " />
      </div> */}
      <table>
        <thead>
          <tr>
            <th colSpan="1">Statistics</th>
          </tr>
        </thead>
        <tbody>
          <tr><Statistic counter={goodCounter} text= 'good'/></tr>
          <tr><Statistic counter={neutralCounter} text= 'neutral'/></tr>
          <tr><Statistic counter={badCounter} text='bad:'/></tr>
          <tr><Statistic counter={average} text='average:' /></tr>
          <tr><Statistic counter={percentagePositiveFeedback} text="positive: " /></tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  // save clicks of each button to own state

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClickHandler = () => setGood(good + 1);

  const badClickHandler = () => setBad(bad + 1);

  const neutralClickHandler = () => setNeutral(neutral + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodClickHandler} text='good'/>
      <Button handleClick={neutralClickHandler} text='neutral'/>
      <Button handleClick={badClickHandler} text='bad'/>
      <Statistics goodCounter={good} badCounter={bad} neutralCounter={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)