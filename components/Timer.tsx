import {useState, useEffect} from 'react'
import type { LogEntry } from '../src/types'

//COSI IL TEMPO E' SCRITTO IN ORE/MIN/SEC
function FormatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    const Time=`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
return Time
}

export default function Timer ({ seconds, setElapsed, setLog }: { 
  seconds: number,
  setElapsed: (fn: (prev: number) => number) => void 
  setLog: (fn: (prev: LogEntry[]) => LogEntry[]) => void
}){
    //sta andando?
    const [isRunning, setIsRunning] = useState<boolean>(false) 
    //quando è partito il timer?
    const [startTime, setStartTime] = useState<string | null>(null)
    //da quanti secondi va?
    useEffect(() => {
            if (isRunning){
            const interval = setInterval(() => {
                setElapsed(prev => prev + 1)
            }, 1000)
            return () => clearInterval(interval) 
    }
        }, [isRunning]); //esegui al cambio di isRunning
    return (
        <div className="timer">
            <p className="timer-label">READY TO CLOCK IN</p>
            <p className="timer-display">{FormatTime(seconds)}</p>
            <button className="btn-primary" onClick={() => {
                if (isRunning) {
                    const now = new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
                    // sta per fermarsi → salva nel log
                    setLog(prev => [...prev, {
                    id: Date.now(),
                    hours: Math.floor(seconds / 3600),
                    minutes: Math.floor((seconds % 3600) / 60),
                    startTime: startTime ?? '??:??',
                    endTime: now,
                    }])
                }
                setIsRunning(!isRunning)
                if (!isRunning) {
                    const now = new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })
                    setStartTime(now)
}
                }}>
                {isRunning? "CLOCK OUT" : "CLOCK IN"}
                
            </button>

        </div>
)
}