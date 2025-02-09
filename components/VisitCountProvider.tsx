'use client'

import { useEffect, useState } from 'react'

const VisitCountProvider = () => {
  const [totalVisitCount, setTotalVisitCount] = useState<string>('...')

  useEffect(() => {
    fetch('/api/visit')
      .then((res) => res.json())
      .then((data) => {
        setTotalVisitCount(data.totalViews)
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [])

  return (
    <div className="flex flex-col items-end">
      <div className="flex items-center space-x-2">
        <svg
          className="h-5 w-5 text-gray-900 dark:text-gray-100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <div className="text-base font-semibold text-gray-900 dark:text-gray-100">전체 방문자</div>
      </div>
      <p className="text-base font-extrabold text-gray-900 dark:text-gray-100">
        {totalVisitCount.toLocaleString()}
      </p>
    </div>
  )
}

export default VisitCountProvider
