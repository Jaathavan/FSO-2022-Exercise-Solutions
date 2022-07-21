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

const Statistics = ({ good, neutral, bad, all }) => {
  return (
  <div>
    <div>good: {good}</div>
    <div>neutral: {neutral}</div>
    <div>bad: {bad}</div>
    <div>all: {all}</div>
    <div>average: {(good + bad*-1 ) / all}</div>
    <div>positive: {good / all}</div>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App