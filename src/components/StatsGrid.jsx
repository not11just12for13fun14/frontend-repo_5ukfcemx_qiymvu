export default function StatsGrid({ stats }) {
  if (!stats) return null
  const order = ["all", "easy", "medium", "hard"]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {order.map((key) => (
        <Card key={key} title={key.charAt(0).toUpperCase() + key.slice(1)} s={stats[key] || {}} />
      ))}
    </div>
  )
}

function Card({ title, s }) {
  return (
    <div className="rounded-xl border bg-white/80 backdrop-blur shadow-sm p-5">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">{title}</h4>
      <div className="space-y-1 text-sm">
        <Row label="Solved" value={s.solved ?? 0} />
        <Row label="Total" value={s.total ?? 0} />
        <Row label="Acceptance" value={`${s.acceptanceRate ?? 0}%`} />
        <Row label="Submissions" value={s.submissions ?? 0} />
      </div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between text-gray-700">
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}
