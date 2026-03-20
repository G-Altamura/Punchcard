import './App.css'
import Timer from '../components/Timer'
import ManualEntry from '../components/ManualEntry'
import {useEffect, useState} from 'react';
import GoalInput from '../components/GoalInput'
import Message from '../components/Message'
import type  { LogEntry } from './types'
import PunchLog from '../components/PunchLog'

function App() {
    const [seconds, setElapsed] = useState<number>(0)
    const [dailyGoal, setDailyGoal] = useState<number>(6) 
    const [log, setLog] = useState<LogEntry[]>([])
    const [goalReached, setGoalReached] = useState<boolean>(false)
    useEffect(() =>{
      if (seconds >= dailyGoal*3600 && !goalReached){
      alert(`You have worked at least ${dailyGoal}h today! Good job!`)
    setGoalReached(true)
}}, [seconds])
  return (
    <div className="card-wrapper">
  <div className="holes-strip">
    {Array.from({length: 15}).map((_, i) => <div key={i} className="hole" />)}
  </div>
  <div className="card">
    <Timer seconds={seconds} setElapsed={setElapsed} setLog={setLog} />
    <hr className="divider" />
    <GoalInput dailyGoal={dailyGoal} setDailyGoal={setDailyGoal} />
    <hr className="divider" />
    <Message seconds={seconds} dailyGoal={dailyGoal} />
    <hr className="divider" />
    <PunchLog log={log} />
    <hr className="divider" />
    <ManualEntry setElapsed={setElapsed} setLog={setLog}/>
  </div>
  <div className="holes-strip">
    {Array.from({length: 15}).map((_, i) => <div key={i} className="hole" />)}
  </div>
</div>

)
}

export default App
