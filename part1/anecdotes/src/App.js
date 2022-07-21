import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
  <div>
    <button onClick={handleClick}>
      {text}
    </button>
  </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(Math.floor(Math.random() * 7))

  const [votes, setVotes] = useState({
    0: 1,
    1: 3,
    2: 12,
    3: 7,
    4: 9,
    5: 11,
    6: 5
  })

  const [mostVotes, setMostVotes] = useState(2)

  const changeAnecdote = () => {
    const randInt = Math.floor(Math.random() * 7)
    setSelected(randInt)
  }

  const vote = () => {
    if ((votes[selected] + 1) > votes[mostVotes]) {
      setMostVotes(selected)
    }
    setVotes({ ...votes, [selected]: votes[selected] + 1})
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <Button handleClick={changeAnecdote} text="Next Anecdote" />
      <Button handleClick={vote} text="Vote" />

      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotes]}
      <div>has {votes[mostVotes]} votes</div>
    </div>
  )
} 

export default App