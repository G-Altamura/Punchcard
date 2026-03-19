import {useState, useEffect} from 'react'

//COSI IL TEMPO E' SCRITTO IN ORE/MIN/SEC
function FormatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    const Time=`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
return Time
}

export default function Timer ({ seconds, setElapsed }: { 
  seconds: number,
  setElapsed: (fn: (prev: number) => number) => void 
}){
    //sta andando?
    const [isRunning, setIsRunning] = useState<boolean>(false) 

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
        <div>
            <p>{FormatTime(seconds)}</p>
            <button onClick={()=>{setIsRunning(!isRunning)}}>
                {isRunning? "Stop me" : "Let's go!"}
            </button>

        </div>
)
}