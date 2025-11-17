import { useState } from 'react'

export default function SearchBar({ onSearch, initialUsername = '' }) {
  const [username, setUsername] = useState(initialUsername)

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = username.trim()
    if (!trimmed) return
    onSearch(trimmed)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto flex items-center gap-2">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter LeetCode username"
        className="flex-1 rounded-lg border border-gray-300 bg-white/80 backdrop-blur px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold transition-colors"
      >
        Search
      </button>
    </form>
  )
}
