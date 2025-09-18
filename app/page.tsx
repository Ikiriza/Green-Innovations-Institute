"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the client component with SSR disabled
const GreenInnovationsContent = dynamic(
  () => import('@/app/GreenInnovationsContent'),
  { ssr: false }
)

export default function GreenInnovationsInstitute() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <GreenInnovationsContent />
    </Suspense>
  )
}
