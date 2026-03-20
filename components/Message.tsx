

export default function Message ({ dailyGoal, seconds }: {   dailyGoal: number   
seconds: number
}) {
    //puoi controntarli solo dopo che li hai resi tutti dello stesso tipo (secondi)
    
    const goalInSeconds = dailyGoal * 3600;
    const diff = goalInSeconds - seconds  // differenza in secondi
    const hoursLeft = Math.floor(diff / 3600)
    const minutesLeft = Math.floor((diff % 3600) / 60)
    const workMore = `You still have ${hoursLeft}h ${minutesLeft}m left!`
    const stopWork=`You've done enough for today, punch out!`
return <p className="message">{seconds < goalInSeconds ? workMore : stopWork}</p>
}