import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/db'

interface FundingOpportunity {
  id: number
  name: string
  type: string
  amount: string
  stage: string
  description: string
  sector?: string
  year?: number
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const organisatie = searchParams.get('organisatie') // Type organisatie filter
    const categorie = searchParams.get('categorie') // Subcategorie filter
    const fase = searchParams.get('fase') // Fase bedrijf filter
    const sector = searchParams.get('sector') // Sector focus filter

    const db = getDatabase()
    if (!db) {
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    // Bouw query met filters
    let query = 'SELECT * FROM funding_opportunities WHERE 1=1'
    const params: any[] = []

    if (organisatie && organisatie !== 'all') {
      query += ' AND type_organisatie LIKE ?'
      params.push(`%${organisatie}%`)
    }

    if (categorie && categorie !== 'all') {
      query += ' AND subcategorie LIKE ?'
      params.push(`%${categorie}%`)
    }

    if (fase && fase !== 'all') {
      query += ' AND stage LIKE ?'
      params.push(`%${fase}%`)
    }

    if (sector && sector !== 'all') {
      query += ' AND sector LIKE ?'
      params.push(`%${sector}%`)
    }

    query += ' ORDER BY amount_eur DESC LIMIT 500'

    const opportunities = db.prepare(query).all(...params)

    // Format data voor frontend
    const formatted = opportunities.map((opp: any) => {
      return {
        id: opp.id,
        name: opp.startup_name,
        fundName: opp.fund_name,
        type: opp.type_organisatie || 'Platform',
        amount: `€${Math.round(opp.amount_eur).toLocaleString()}`,
        stage: opp.stage,
        description: `${opp.sector} - ${opp.subcategorie || opp.fund_name}`,
        sector: opp.sector,
        subcategorie: opp.subcategorie,
        website: opp.website,
        year: opp.year,
      }
    })

    return NextResponse.json({
      success: true,
      data: formatted,
      total: formatted.length,
    })
  } catch (error) {
    console.error('Error fetching funding opportunities:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
