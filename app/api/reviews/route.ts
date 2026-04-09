/**
 * GOOGLE PLACES API INTEGRATION
 * 
 * The client must add these variables to their .env.local file:
 * GOOGLE_PLACES_API_KEY=their_api_key_from_google_cloud
 * GOOGLE_PLACE_ID=their_place_id_from_place_finder
 * NEXT_PUBLIC_BASE_URL=https://asiatechroof.sg (Local: http://localhost:3000)
 */
import { NextResponse } from 'next/server'

export async function GET() {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY

  if (!PLACE_ID || !API_KEY) {
    return NextResponse.json({ error: 'Missing env variables' }, { status: 500 })
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${API_KEY}`,
      { 
        next: { revalidate: 86400 },
        headers: {
          'Referer': 'https://asiatechroof.sg/',
          'X-Ios-Bundle-Identifier': 'sg.asiatechroof' // sometimes needed as fallback
        }
      }
    )
    const data = await res.json()
    
    if (data.status !== 'OK') {
      return NextResponse.json({ error: data.error_message || 'Failed to fetch' }, { status: 500 })
    }

    return NextResponse.json(data.result)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }
}
