import {useState} from 'react';
import type { LogEntry } from '../src/types'

export default function ManualEntry({ setElapsed, setLog }: {
  setElapsed: (fn: (prev: number) => number) => void
  setLog: (fn: (prev: LogEntry[]) => LogEntry[]) => void
}) {
        const [manualHours, setManualHours] = useState<number>(0)
        const [manualMinutes, setManualMinutes] = useState<number>(0)
    return(
        <div className="manual-entry">
            <p className="section-label">Manual Entry</p>
              <div className="entry-fields">
            <div className="field">
            <label>Hrs</label>
                <input
                    type="number"
                    value={manualHours}
                    onChange={(e) => setManualHours(Number(e.target.value))}
                />
            </div>
            <div className="field">
            <label>Min</label>
                <input
                    type="number"
                    value={manualMinutes}
                    onChange={(e) => setManualMinutes(Number(e.target.value))}
                />
            </div>
            </div>
                <button className="btn-primary" onClick={() => {
                const totalSeconds = (manualHours * 3600) + (manualMinutes * 60)
                setElapsed(prev => prev + totalSeconds)
                setLog(prev => [...prev, {
                    id: Date.now(),
                    hours: manualHours,
                    minutes: manualMinutes,
                    }])
                }}>Punch it in</button>
    </div>    
    )
}