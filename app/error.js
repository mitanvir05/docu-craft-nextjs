'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 px-4">
      <div className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-lg border border-red-200">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">Something went wrong</h2>
        {error?.message && (
          <p className="text-sm text-gray-700 mb-6">{error.message}</p>
        )}
        <button
          onClick={reset}
          className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
