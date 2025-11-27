const Database = require('better-sqlite3')
const path = require('path')

const dbPath = path.join(process.cwd(), 'hup_holland.db')
const db = new Database(dbPath)

console.log('📝 Adding new columns...')

try {
  // Add new columns if they don't exist
  db.exec(`
    ALTER TABLE funding_opportunities ADD COLUMN type_organisatie TEXT;
  `)
  console.log('✅ Added type_organisatie column')
} catch (e) {
  if (e.message.includes('duplicate column name')) {
    console.log('⚠️  type_organisatie column already exists')
  } else {
    console.error('Error adding type_organisatie:', e.message)
  }
}

try {
  db.exec(`
    ALTER TABLE funding_opportunities ADD COLUMN subcategorie TEXT;
  `)
  console.log('✅ Added subcategorie column')
} catch (e) {
  if (e.message.includes('duplicate column name')) {
    console.log('⚠️  subcategorie column already exists')
  } else {
    console.error('Error adding subcategorie:', e.message)
  }
}

try {
  db.exec(`
    ALTER TABLE funding_opportunities ADD COLUMN website TEXT;
  `)
  console.log('✅ Added website column')
} catch (e) {
  if (e.message.includes('duplicate column name')) {
    console.log('⚠️  website column already exists')
  } else {
    console.error('Error adding website:', e.message)
  }
}

db.close()
console.log('✨ Done!')
