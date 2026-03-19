import './App.css'
import Timer from '../components/Timer'
import ManualEntry from '../components/ManualEntry'
import {useState} from 'react';
import GoalInput from '../components/GoalInput'
import Message from '../components/Message'

function App() {
    const [seconds, setElapsed] = useState<number>(0)
    const [dailyGoal, setDailyGoal] = useState<number>(8) 
  return (
  <div>
    <h1>Punchcard</h1>
    <Timer seconds={seconds} setElapsed={setElapsed} />
    <ManualEntry setElapsed={setElapsed} />
    <GoalInput dailyGoal={dailyGoal} setDailyGoal={setDailyGoal} />
    <Message seconds={seconds} dailyGoal={dailyGoal} />
  </div>

)
}

export default App
