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

const Stats = () => {
  <div>
    <div>good: </div>
    <div>neutral: </div>
    <div>bad: </div>
  </div>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Nad" />

      <h1>Statistics</h1>
    </div>
  )
}

export default App