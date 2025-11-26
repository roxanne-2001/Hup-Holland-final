import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/db'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

// GET - Haal alle opgeslagen opportunities op
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

    // Haal user_id op via sessie
    const session = db.prepare('SELECT user_id FROM sessions WHERE id = ?').get(sessionId) as { user_id: number } | undefined

    if (!session) {
      return NextResponse.json({ error: 'Ongeldige sessie' }, { status: 401 })
    }

    // Haal opgeslagen opportunities op
    const opportunities = db
      .prepare('SELECT * FROM saved_opportunities WHERE user_id = ? ORDER BY saved_at DESC')
      .all(session.user_id)

    return NextResponse.json({ opportunities })
  } catch (error) {
    console.error('Error fetching saved opportunities:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// POST - Sla een nieuwe opportunity op
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
    const { funding_name, funding_type, funding_amount, description, match_score } = body

    if (!funding_name || !funding_type) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken' }, { status: 400 })
    }

    const stmt = db.prepare(`
      INSERT INTO saved_opportunities (user_id, funding_name, funding_type, funding_amount, description, match_score)
      VALUES (?, ?, ?, ?, ?, ?)
    `)

    const result = stmt.run(session.user_id, funding_name, funding_type, funding_amount || null, description || null, match_score || null)

    return NextResponse.json({ success: true, id: result.lastInsertRowid })
  } catch (error) {
    console.error('Error saving opportunity:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

// DELETE - Verwijder een opgeslagen opportunity
export async function DELETE(request: NextRequest) {
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

    const { searchParams } = new URL(request.url)
    const opportunityId = searchParams.get('id')

    if (!opportunityId) {
      return NextResponse.json({ error: 'ID is verplicht' }, { status: 400 })
    }

    db.prepare('DELETE FROM saved_opportunities WHERE id = ? AND user_id = ?').run(opportunityId, session.user_id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting opportunity:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
