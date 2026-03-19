

export default function Message ({ dailyGoal, seconds }: {   dailyGoal: number   
seconds: number
}) {
    //puoi controntarli solo dopo che li hai resi tutti dello stesso tipo (secondi)
    
    const goalInSeconds = dailyGoal * 3600;
    const diff = goalInSeconds - seconds  // differenza in secondi
    const hoursLeft = Math.floor(diff / 3600)
    const minutesLeft = Math.floor((diff % 3600) / 60)
    const workMore = `Hai ancora ${hoursLeft}h ${minutesLeft}m da lavorare!`
    const stopWork=`Hai lavorato abbastanza, stacca!`
return <p>{seconds < goalInSeconds ? workMore : stopWork}</p>
}