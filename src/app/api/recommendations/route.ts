import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { industry, region, revenue, employees, marketShare, valuation, fundingAmount, yearFounded, profitable } = body

    if (!industry || !region) {
      return NextResponse.json({ error: 'Industry en region zijn verplicht' }, { status: 400 })
    }

    const db = getDatabase()
    if (!db) {
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    // Haal alle funding opportunities op uit database - willekeurige volgorde voor diversiteit
    const allOpportunities = db.prepare('SELECT * FROM funding_opportunities ORDER BY RANDOM() LIMIT 500').all()

    // Uitgebreide industry mapping voor betere matching
    const industryMapping: { [key: string]: string[] } = {
      'fintech': ['FinTech', 'Technology', 'Finance', 'Banking', 'Payments', 'Algemeen'],
      'healthtech': ['HealthTech', 'Health', 'Medical', 'Healthcare', 'Technology', 'Algemeen'],
      'edtech': ['EdTech', 'Education', 'Learning', 'Technology', 'Algemeen'],
      'iot': ['IoT', 'Hardware', 'Tech', 'Technology', 'Smart', 'Algemeen'],
      'cleantech': ['CleanTech', 'Clean', 'Energy', 'Sustainable', 'Duurzaamheid', 'Algemeen'],
      'other': ['Technology', 'Tech', 'Innovation', 'Innovatie', 'Algemeen']
    }

    const relevantSectors = industryMapping[industry.toLowerCase()] || ['Technology', 'Algemeen']
    
    // Bepaal de gebruiker's funding stage dynamisch
    const userRevenue = Number(revenue) || 0
    const userFunding = Number(fundingAmount) || 250000
    const userEmployees = Number(employees) || 0
    
    let userStage = 'Seed'
    let targetFundingType = 'Mixed'
    
    // Bepaal stage en type op basis van omzet, funding en medewerkers
    if (userRevenue > 5000000 && userEmployees > 50) {
      userStage = 'Growth'
      targetFundingType = 'Venture Capital'
    } else if (userRevenue > 1000000 || userFunding > 1000000) {
      userStage = 'Series A'
      targetFundingType = 'Venture Capital'
    } else if (userRevenue > 100000 || userFunding > 250000) {
      userStage = 'Seed'
      targetFundingType = 'Mixed'
    } else {
      userStage = 'Pre-Seed'
      targetFundingType = 'Crowdfunding'
    }

    // Bereken match scores met verbeterd algoritme
    const recommendations = allOpportunities.map((opp: any) => {
      let score = 0
      let reasoning: string[] = []
      
      // 1. Sector match (30 punten) - Belangrijkste factor
      const oppSector = (opp.sector || '').toLowerCase()
      let sectorScore = 0
      
      for (let i = 0; i < relevantSectors.length; i++) {
        const sector = relevantSectors[i].toLowerCase()
        if (oppSector.includes(sector)) {
          // Hogere score voor betere matches
          sectorScore = 30 - (i * 3) // Eerste match krijgt 30, tweede 27, etc.
          reasoning.push(`Sector match: ${opp.sector}`)
          break
        }
      }
      score += Math.max(sectorScore, 0)
      
      // 2. Funding type match (25 punten)
      const fundType = (opp.fund_name || '').toLowerCase()
      let typeScore = 0
      
      if (targetFundingType === 'Venture Capital' && fundType.includes('venture capital')) {
        typeScore = 25
        reasoning.push('Perfect voor Venture Capital')
      } else if (targetFundingType === 'Crowdfunding' && fundType.includes('crowdfunding')) {
        typeScore = 25
        reasoning.push('Perfect voor Crowdfunding')
      } else if (targetFundingType === 'Mixed') {
        typeScore = fundType.includes('venture') || fundType.includes('crowdfunding') ? 20 : 10
        reasoning.push('Geschikt funding type')
      } else {
        // Alternatieve match krijgt ook punten
        typeScore = 10
      }
      score += typeScore
      
      // 3. Funding amount match (25 punten) - Belangrijke factor
      const oppAmount = opp.amount_eur || 0
      let amountScore = 0
      
      if (oppAmount > 0 && userFunding > 0) {
        const ratio = Math.min(userFunding, oppAmount) / Math.max(userFunding, oppAmount)
        // Bonus voor amounts binnen 50% van elkaar
        if (ratio > 0.5) {
          amountScore = ratio * 25
          reasoning.push(`Funding bedrag past goed (€${Math.round(oppAmount).toLocaleString()})`)
        } else {
          amountScore = ratio * 15
        }
      } else {
        amountScore = 10 // Default score als amount niet bekend is
      }
      score += amountScore
      
      // 4. Stage match (20 punten)
      const oppStage = opp.stage || ''
      let stageScore = 0
      
      if (oppStage === userStage) {
        stageScore = 20
        reasoning.push(`Perfecte stage match: ${userStage}`)
      } else {
        // Adjacent stages krijgen ook punten
        const stageOrder = ['Pre-Seed', 'Seed', 'Series A', 'Growth']
        const userStageIndex = stageOrder.indexOf(userStage)
        const oppStageIndex = stageOrder.indexOf(oppStage)
        
        if (Math.abs(userStageIndex - oppStageIndex) === 1) {
          stageScore = 12
          reasoning.push(`Nabije stage: ${oppStage}`)
        } else if (Math.abs(userStageIndex - oppStageIndex) === 2) {
          stageScore = 6
        }
      }
      score += stageScore
      
      // 5. Winstgevendheid bonus (tot 5 punten extra)
      if (profitable && userRevenue > 500000) {
        score += 5
        reasoning.push('Bonus voor winstgevende startup')
      }
      
      // 6. Regio relevantie (tot 5 punten)
      const oppCountry = (opp.country || 'Netherlands').toLowerCase()
      if (region.toLowerCase().includes(oppCountry) || oppCountry.includes(region.toLowerCase())) {
        score += 5
        reasoning.push('Lokale funding')
      }
      
      // Voeg wat randomness toe voor diversiteit (max 5 punten)
      const randomBonus = Math.random() * 5
      score += randomBonus

      return {
        name: opp.startup_name,
        fundName: opp.fund_name,
        fundingType: opp.stage,
        matchScore: Math.min(100, parseFloat(score.toFixed(1))),
        fundingAmount: Math.round(opp.amount_eur),
        sector: opp.sector,
        year: opp.year,
        reasoning: reasoning.join(' • '),
        country: opp.country || 'Netherlands'
      }
    })

    // Sorteer en filter voor betere diversiteit
    const topRecommendations = recommendations
      .filter(rec => rec.matchScore > 25) // Lagere threshold voor meer variatie
      .sort((a, b) => {
        // Sorteer op match score, maar geef ook diversiteit
        const scoreDiff = b.matchScore - a.matchScore
        // Als scores dicht bij elkaar liggen (< 10), voeg randomness toe
        if (Math.abs(scoreDiff) < 10) {
          return Math.random() - 0.5
        }
        return scoreDiff
      })
      .slice(0, 12) // Meer resultaten voor betere keuze
      
    // Zorg voor diversiteit in funding types
    const diverseRecommendations = []
    const vcOptions = topRecommendations.filter(r => r.fundName.includes('Venture Capital'))
    const crowdOptions = topRecommendations.filter(r => r.fundName.includes('Crowdfunding'))
    const otherOptions = topRecommendations.filter(r => !r.fundName.includes('Venture Capital') && !r.fundName.includes('Crowdfunding'))
    
    // Mix de resultaten voor diversiteit
    const targetVC = Math.ceil(topRecommendations.length * 0.5)
    const targetCrowd = Math.ceil(topRecommendations.length * 0.4)
    
    diverseRecommendations.push(...vcOptions.slice(0, targetVC))
    diverseRecommendations.push(...crowdOptions.slice(0, targetCrowd))
    diverseRecommendations.push(...otherOptions.slice(0, 2))
    
    // Sorteer finaal op score
    const finalRecommendations = diverseRecommendations
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 10)

    return NextResponse.json({
      success: true,
      recommendations: finalRecommendations,
      totalMatches: finalRecommendations.length,
      userProfile: {
        stage: userStage,
        targetType: targetFundingType,
        industry: industry,
        fundingNeeded: userFunding
      },
      message: `${finalRecommendations.length} gepersonaliseerde matches gevonden uit ${allOpportunities.length} opties`
    })
  } catch (error) {
    console.error('Error processing recommendations:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
