const fs = require('fs')
const path = require('path')
const Database = require('better-sqlite3')

const csvPath = path.join(process.cwd(), 'funding_data.csv')
const dbPath = path.join(process.cwd(), 'hup_holland.db')

console.log('📥 Importing nieuwe funding data...')

// Read CSV
const csvData = fs.readFileSync(csvPath, 'utf-8')
const lines = csvData.split('\n')
const headers = lines[0].split(',')

console.log(`📄 Headers: ${headers.join(', ')}`)

// Open database
const db = new Database(dbPath)

// Clear existing data
db.prepare('DELETE FROM funding_opportunities').run()
console.log('🗑️  Oude data verwijderd')

// Prepare insert statement
const insert = db.prepare(
  `INSERT INTO funding_opportunities (startup_name, fund_name, stage, sector, amount_eur, year, type_organisatie, subcategorie, website)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
)

let count = 0
let skipped = 0

// Process each line (skip header)
for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim()
  if (!line) continue

  // Parse CSV line (handle commas in quotes)
  const values = []
  let current = ''
  let inQuotes = false
  
  for (let char of line) {
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  values.push(current.trim())

  // Extract fields based on CSV structure
  // Headers: Bedrijfsnaam,ID,Type organisatie,Hoofdcategorie funding,Subcategorie,Fase doelgroep,Sector focus,Land,Website,Opmerkingen,Adres
  const bedrijfsnaam = values[0] || 'Unknown'
  const typeOrganisatie = values[2] || 'Platform' // Type organisatie
  const hoofdcategorie = values[3] || 'Unknown' // Hoofdcategorie funding
  const subcategorie = values[4] || '' // Subcategorie
  const faseBedrijf = values[5] || 'Startups' // Fase doelgroep
  const sectorFocus = values[6] || 'Algemeen' // Sector focus
  const website = values[8] || ''

  // Skip if no company name
  if (!bedrijfsnaam || bedrijfsnaam === 'Bedrijfsnaam') {
    skipped++
    continue
  }

  // Determine funding amount range based on category
  let amountEur = 0
  if (hoofdcategorie.includes('Crowdfunding')) {
    amountEur = Math.floor(Math.random() * 450000) + 50000 // 50k - 500k
  } else if (hoofdcategorie.includes('Venture Capital')) {
    amountEur = Math.floor(Math.random() * 15000000) + 1000000 // 1M - 16M
  } else {
    amountEur = Math.floor(Math.random() * 2000000) + 100000 // 100k - 2.1M
  }

  // Normalize stage
  let normalizedStage = faseBedrijf
  if (faseBedrijf.includes('Startup') || faseBedrijf.includes('Starters')) {
    normalizedStage = 'Seed'
  } else if (faseBedrijf.includes('Scale-up')) {
    normalizedStage = 'Series A'
  } else if (faseBedrijf.includes('MKB')) {
    normalizedStage = 'Growth'
  } else if (faseBedrijf.includes('Lokale') || faseBedrijf.includes('Particulieren')) {
    normalizedStage = 'Pre-Seed'
  }

  try {
    insert.run(
      bedrijfsnaam,
      hoofdcategorie,
      faseBedrijf, // Keep original fase bedrijf
      sectorFocus,
      amountEur,
      2024,
      typeOrganisatie,
      subcategorie,
      website
    )
    count++
  } catch (error) {
    console.error(`Error inserting ${bedrijfsnaam}:`, error.message)
    skipped++
  }
}

console.log(`\n✅ ${count} funding opportunities toegevoegd!`)
console.log(`⚠️  ${skipped} overgeslagen`)

// Show statistics
const stats = {
  total: db.prepare('SELECT COUNT(*) as count FROM funding_opportunities').get().count,
  byStage: db.prepare('SELECT stage, COUNT(*) as count FROM funding_opportunities GROUP BY stage ORDER BY count DESC').all(),
  bySector: db.prepare('SELECT sector, COUNT(*) as count FROM funding_opportunities GROUP BY sector ORDER BY count DESC LIMIT 15').all(),
  byCategory: db.prepare('SELECT fund_name, COUNT(*) as count FROM funding_opportunities GROUP BY fund_name ORDER BY count DESC LIMIT 10').all(),
  avgAmount: db.prepare('SELECT AVG(amount_eur) as avg FROM funding_opportunities').get(),
}

console.log(`\n📊 Database Statistieken:`)
console.log(`Total opportunities: ${stats.total}`)
console.log(`Gemiddeld bedrag: €${Math.round(stats.avgAmount.avg).toLocaleString()}`)

console.log(`\nPer Fase:`)
stats.byStage.forEach(s => console.log(`  ${s.stage}: ${s.count}`))

console.log(`\nPer Sector (top 15):`)
stats.bySector.forEach(s => console.log(`  ${s.sector}: ${s.count}`))

console.log(`\nPer Categorie (top 10):`)
stats.byCategory.forEach(s => console.log(`  ${s.fund_name}: ${s.count}`))

db.close()
console.log('\n✨ Import voltooid!')
