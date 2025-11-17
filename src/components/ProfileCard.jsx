export default function ProfileCard({ data }) {
  const { username, name, avatar, ranking, reputation, starRating, about, company, jobTitle, school, country, websites, skills, badges } = data

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-start gap-4">
        <img src={avatar} alt={username} className="w-20 h-20 rounded-xl object-cover border" />
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
            <span className="text-gray-500">@{username}</span>
          </div>
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <Stat label="Ranking" value={ranking ?? '—'} />
            <Stat label="Reputation" value={reputation ?? '—'} />
            <Stat label="Stars" value={starRating ?? '—'} />
            {country && <Stat label="Country" value={country} />}
          </div>
          {(company || jobTitle || school) && (
            <p className="mt-3 text-sm text-gray-700">
              {[jobTitle, company, school].filter(Boolean).join(' • ')}
            </p>
          )}
          {about && (
            <p className="mt-3 text-sm text-gray-600 line-clamp-3">{about}</p>
          )}
          {websites && websites.length > 0 && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {websites.map((w) => (
                <a key={w} href={w} target="_blank" rel="noreferrer" className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100">
                  {w}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {skills && skills.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 15).map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">{s}</span>
            ))}
          </div>
        </div>
      )}

      {badges && badges.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Badges</h3>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b.id} className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs border border-amber-200">
                {b.icon && <img src={b.icon} alt={b.name} className="w-4 h-4" />}
                {b.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-gray-800">{value}</p>
    </div>
  )
}
