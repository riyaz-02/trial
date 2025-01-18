import { Metadata } from 'next'
import InsightsDisplay from '@/components/InsightsDisplay'
import ChatbotInterface from '@/components/ChatbotInterface'

export const metadata: Metadata = {
  title: 'Your Spiritual Insights - SoulBuddy',
  description: 'View your personalized spiritual insights and recommendations',
}

export default function InsightsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Your Spiritual Insights</h1>
      <InsightsDisplay />
      <ChatbotInterface />
    </main>
  )
}

