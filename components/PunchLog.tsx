import type { LogEntry } from '../src/types'

export default function PunchLog({ log }: { log: LogEntry[] }) {
  return (
<div className="punch-log">
  <p className="section-label">Daily Progress</p>
      {log.length === 0 
        ? <p>No punches today. Clock in to get started.</p>
        : log.map(entry => (
        <p className="log-entry" key={entry.id}>
          {entry.hours}h {entry.minutes}m
          {entry.startTime && ` · ${entry.startTime} → ${entry.endTime}`}
        </p>
          ))
      }
    </div>
  )
}