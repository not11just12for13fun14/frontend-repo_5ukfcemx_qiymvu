export default function ContestCard({ contest }) {
  if (!contest) return (
    <div className="rounded-xl border bg-white/80 backdrop-blur p-5 text-gray-600">
      No recent contest data found.
    </div>
  )

  const fields = [
    { k: 'rating', label: 'Rating' },
    { k: 'ranking', label: 'Best Rank' },
    { k: 'attendedContestsCount', label: 'Contests' },
    { k: 'globalRanking', label: 'Global Rank' },
    { k: 'totalParticipants', label: 'Participants' },
    { k: 'topPercentage', label: 'Top %' },
  ]

  return (
    <div className="rounded-xl border bg-white/80 backdrop-blur p-5">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">Contest</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
        {fields.map((f) => (
          <div key={f.k} className="flex justify-between text-gray-700">
            <span>{f.label}</span>
            <span className="font-semibold">{contest[f.k] ?? '—'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
