import UserInputForm from '@/components/UserInputForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SoulBuddy - AI-Powered Spiritual Guide',
  description: 'Get personalized spiritual guidance through astrology and numerology',
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">SoulBuddy</h1>
      <p className="text-xl text-center mb-8">Your AI-Powered Spiritual Guide</p>
      <UserInputForm />
    </main>
  )
}

