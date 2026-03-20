
export default function GoalInput({ dailyGoal, setDailyGoal }: {
    dailyGoal: number
    setDailyGoal: (value: number) => void
}) {
    //base di ore lavorative
    return(
        <div className="field">
        <label className="section-label">Daily Goal (hrs)</label>
            <input
                    type="number"
                    value={dailyGoal}
                    onChange={(e) => setDailyGoal(Number(e.target.value))}
                />
            
        </div>
    )
}