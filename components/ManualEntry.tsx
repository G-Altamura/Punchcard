import {useState} from 'react';

export default function ManualEntry({ setElapsed }: {
  setElapsed: (fn: (prev: number) => number) => void
}) {
        const [manualHours, setManualHours] = useState<number>(0)
        const [manualMinutes, setManualMinutes] = useState<number>(0)
    return(
        <div>
            
            <input
                type="number"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
            />
            <input
                type="number"
                value={manualMinutes}
                onChange={(e) => setManualMinutes(Number(e.target.value))}
            />
            <button onClick={() => {
            const totalSeconds = (manualHours * 3600) + (manualMinutes * 60)
            setElapsed(prev => prev + totalSeconds)
            }}>Punch it in</button>
    </div>    
    )
}