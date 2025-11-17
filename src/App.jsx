import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard'
import StatsGrid from './components/StatsGrid'
import ContestCard from './components/ContestCard'

function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState(null)

  const handleSearch = async (username) => {
    setError('')
    setLoading(true)
    setData(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leetcode/${encodeURIComponent(username)}`)
      if (!res.ok) {
        const detail = await res.json().catch(() => ({}))
        throw new Error(detail.detail || `Request failed (${res.status})`)
      }
      const json = await res.json()
      setData(json)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">LeetCode Profile Explorer</h1>
        <p className="mt-2 text-gray-600">Type a username to view public profile, problems stats, and contest info.</p>
      </header>

      <main className="px-4 pb-16 max-w-5xl mx-auto">
        <SearchBar onSearch={handleSearch} />

        {loading && (
          <div className="mt-10 text-center text-gray-700">Fetching data...</div>
        )}

        {error && (
          <div className="mt-10 text-center text-red-600 font-medium">{error}</div>
        )}

        {data && (
          <div className="mt-10 space-y-6">
            <ProfileCard data={data} />
            <StatsGrid stats={data.stats} />
            <ContestCard contest={data.contest} />
          </div>
        )}
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        Built with React + Tailwind. Data from LeetCode public GraphQL API.
      </footer>
    </div>
  )
}

export default App
