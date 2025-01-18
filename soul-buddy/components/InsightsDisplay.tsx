'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Insights {
  kundali: string
  horoscope: {
    daily: string
    monthly: string
  }
  recommendations: {
    gemstones: string[]
    rituals: {
      name: string
      importance: string
      benefits: string
    }[]
    dosAndDonts: string[]
  }
  spiritualContent: {
    meditation: string
    workout: string
    sleep: string
  }
}

export default function InsightsDisplay() {
  const [insights, setInsights] = useState<Insights | null>(null)

  useEffect(() => {
    const fetchInsights = async () => {
      const response = await fetch('/api/get-insights')
      if (response.ok) {
        const data = await response.json()
        setInsights(data)
      }
    }
    fetchInsights()
  }, [])

  if (!insights) return <div>Loading...</div>

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Kundali & Horoscope</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="kundali">
            <TabsList>
              <TabsTrigger value="kundali">Kundali</TabsTrigger>
              <TabsTrigger value="daily">Daily Horoscope</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Horoscope</TabsTrigger>
            </TabsList>
            <TabsContent value="kundali">{insights.kundali}</TabsContent>
            <TabsContent value="daily">{insights.horoscope.daily}</TabsContent>
            <TabsContent value="monthly">{insights.horoscope.monthly}</TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Gemstones</h3>
          <ul className="list-disc pl-5 mb-4">
            {insights.recommendations.gemstones.map((gemstone, index) => (
              <li key={index}>{gemstone}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-2">Rituals</h3>
          {insights.recommendations.rituals.map((ritual, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-medium">{ritual.name}</h4>
              <p><strong>Importance:</strong> {ritual.importance}</p>
              <p><strong>Benefits:</strong> {ritual.benefits}</p>
            </div>
          ))}

          <h3 className="text-lg font-semibold mb-2">Do's and Don'ts</h3>
          <ul className="list-disc pl-5">
            {insights.recommendations.dosAndDonts.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Spiritual Content</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Meditation</h3>
          <p className="mb-4">{insights.spiritualContent.meditation}</p>

          <h3 className="text-lg font-semibold mb-2">Workout</h3>
          <p className="mb-4">{insights.spiritualContent.workout}</p>

          <h3 className="text-lg font-semibold mb-2">Sleep</h3>
          <p>{insights.spiritualContent.sleep}</p>
        </CardContent>
      </Card>
    </div>
  )
}

