
export default function GoalInput({ dailyGoal, setDailyGoal }: {
    dailyGoal: number
    setDailyGoal: (value: number) => void
}) {
    //base di ore lavorative
    return(
        <input
                type="number"
                value={dailyGoal}
                onChange={(e) => setDailyGoal(Number(e.target.value))}
            />
    )
}