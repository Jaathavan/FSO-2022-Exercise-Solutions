import { useState } from 'react'

const Button = () => {

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

  return (
    <div>
      <h1>Give Feedback</h1>

      <h1>Statistics</h1>
    </div>
  )
}

export default App