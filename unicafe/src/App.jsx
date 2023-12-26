import { useState } from "react"
import Button from "./components/Button"
import StatisticLine from "./components/StatisticLine"

const Stats = ({good, bad, neutral}) => {
  if(good > 0 || bad > 0 || neutral > 0){
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" stat={good}/>
            <StatisticLine text="neutral" stat={neutral}/>
            <StatisticLine text="bad" stat={bad}/>
            <StatisticLine text="total" stat={good + bad + neutral}/>
            <StatisticLine text="Average" stat={(good + bad + neutral) / 3}/>
            <StatisticLine text="Positive Percent" stat={((good) / (good + bad + neutral)) * 100}/>
          </tbody>
        </table>
      </div>
    )
  }else{
    return <p>No Feedback Given</p>
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handler={handleGood} text="Good" />
      <Button handler={handleNeutral} text="Neutral" />
      <Button handler={handleBad} text="Bad" />
      <Stats good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App
