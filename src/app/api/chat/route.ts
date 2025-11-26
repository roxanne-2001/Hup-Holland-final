import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/db'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

// GET - Haal chat geschiedenis op
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get('session_id')?.value

    if (!sessionId) {
      return NextResponse.json({ error: 'Niet ingelogd' }, { status: 401 })
    }

    const db = getDatabase()
    if (!db) {
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    const session = db.prepare('SELECT user_id FROM sessions WHERE id = ?').get(sessionId) as { user_id: number } | undefined

    if (!session) {
      return NextResponse.json({ error: 'Ongeldige sessie' }, { status: 401 })
    }

    const messages = db
      .prepare('SELECT * FROM chat_messages WHERE user_id = ? ORDER BY created_at DESC LIMIT 50')
      .all(session.user_id)

    return NextResponse.json({ messages: messages.reverse() })
  } catch (error) {
    console.error('Error fetching chat history:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// POST - Verstuur een nieuwe chat vraag
export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get('session_id')?.value

    if (!sessionId) {
      return NextResponse.json({ error: 'Niet ingelogd' }, { status: 401 })
    }

    const db = getDatabase()
    if (!db) {
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    const session = db.prepare('SELECT user_id FROM sessions WHERE id = ?').get(sessionId) as { user_id: number } | undefined

    if (!session) {
      return NextResponse.json({ error: 'Ongeldige sessie' }, { status: 401 })
    }

    const body = await request.json()
    const { message } = body

    if (!message || message.trim() === '') {
      return NextResponse.json({ error: 'Bericht is verplicht' }, { status: 400 })
    }

    // Simpele AI response logica (kan later uitgebreid worden met echte AI)
    let aiResponse = generateAIResponse(message)

    // Sla het bericht en antwoord op
    const stmt = db.prepare(`
      INSERT INTO chat_messages (user_id, message, response)
      VALUES (?, ?, ?)
    `)

    const result = stmt.run(session.user_id, message, aiResponse)

    return NextResponse.json({
      success: true,
      message: message,
      response: aiResponse,
      id: result.lastInsertRowid,
    })
  } catch (error) {
    console.error('Error processing chat:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

function generateAIResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Funding gerelateerde vragen
  if (lowerMessage.includes('seed') || lowerMessage.includes('serie') || lowerMessage.includes('funding')) {
    return 'Voor Nederlandse startups zijn er verschillende funding opties: Seed funding (€50K-€500K) voor vroege fase, Series A (€1M-€10M) voor groei, en Venture Capital voor gevestigde bedrijven. Wil je meer weten over een specifiek type funding?'
  }

  if (lowerMessage.includes('venture capital') || lowerMessage.includes('vc')) {
    return 'Venture Capital is risicokapitaal voor snelgroeiende bedrijven. Nederlandse VC firms zoals Peak Capital, Volta Ventures en henQ investeren in tech startups. Ze zoeken naar bewezen traction, sterke teams en schaalbaarheid. Check onze Venture Capital pagina voor meer info!'
  }

  if (lowerMessage.includes('aanvragen') || lowerMessage.includes('apply') || lowerMessage.includes('solliciteren')) {
    return 'Om funding aan te vragen: 1) Maak je profiel compleet in je dashboard, 2) Gebruik onze recommender om matches te vinden, 3) Sla interessante opportunities op, 4) Bereid een pitch deck voor, 5) Neem contact op met de vermelde contactpersoon. Succes!'
  }

  if (lowerMessage.includes('pitch') || lowerMessage.includes('presentatie')) {
    return 'Een goede pitch deck bevat: probleem, oplossing, markt analyse, business model, traction, team, financiële projecties en funding behoefte. Houd het kort (10-15 slides) en focus op je unique value proposition!'
  }

  if (lowerMessage.includes('voorwaarden') || lowerMessage.includes('eisen') || lowerMessage.includes('requirements')) {
    return 'De meeste funding programs vragen om: een geregistreerd bedrijf in NL, innovatief product/dienst, schaalbaarheid potentieel, ervaren team, en soms minimum traction (omzet/gebruikers). Specifieke eisen verschillen per program.'
  }

  if (lowerMessage.includes('hoe lang') || lowerMessage.includes('timeline') || lowerMessage.includes('duur')) {
    return 'De funding proces duurt gemiddeld 3-6 maanden: 1-2 maanden voor aanvraag voorbereiden, 1-2 maanden voor beoordeling, en 1-2 maanden voor due diligence en contracten. Sommige programma\'s zijn sneller!'
  }

  if (lowerMessage.includes('help') || lowerMessage.includes('hulp')) {
    return 'Ik kan je helpen met vragen over: funding types (Seed, Series A/B, VC), aanvraag proces, pitch tips, voorwaarden, timelines, en specifieke funding programs. Wat wil je weten?'
  }

  if (lowerMessage.includes('bedankt') || lowerMessage.includes('dank')) {
    return 'Graag gedaan! Veel succes met je funding zoektocht. Ik ben er als je meer vragen hebt!'
  }

  // Default antwoord
  return 'Dat is een goede vraag! Ik ben gespecialiseerd in Nederlandse startup funding. Je kunt me vragen over verschillende funding types (Seed, Series A/B, Venture Capital), het aanvraag proces, pitch tips, of specifieke funding programs. Wat wil je graag weten?'
}
