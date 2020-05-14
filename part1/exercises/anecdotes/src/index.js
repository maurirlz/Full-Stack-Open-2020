import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {

  const [selected, setSelected] = useState(0)

  const [voteStatus, setVotesStatus] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0));

  let vote = selected;
  
  const handleClick = () => {

    const random = Math.floor(Math.random() * anecdotes.length);

    vote = random;
    setSelected(random);
  }

  const handleVoteClick = () => {

    const copy = [...voteStatus];
    copy[vote] += 1;

    setVotesStatus(copy);

    console.log(copy);
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {voteStatus[selected]} votes</p>
      <Button handleClick={handleVoteClick} text='vote'/>
      <Button handleClick={handleClick} text='generate a random quote'/>
      <MostVoted anecdotes={anecdotes} totalVotes= {voteStatus}/>
    </div>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const MostVoted = ({anecdotes, totalVotes}) => {

  const mostVotedQty = totalVotes.indexOf(Math.max(...totalVotes))

  if (mostVotedQty === 0) {

    return (
      <div>
        <h1>Most voted quote: </h1>
        <div>
          <p>All quotes are unvoted, not enough feedback.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h2>Most voted quote: </h2>
      <h5>Total votes: {totalVotes[mostVotedQty]}</h5>
      <div>
        <p>{anecdotes[mostVotedQty]}</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)