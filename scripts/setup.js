const { initDatabase } = require('../src/lib/db.ts')
const fs = require('fs')
const path = require('path')

console.log('🚀 Setting up Hub Holland database...\n')

// Check if database already exists
const dbPath = path.join(process.cwd(), 'hup_holland.db')
if (fs.existsSync(dbPath)) {
  console.log('✓ Database already exists')
} else {
  console.log('📦 Creating new database...')
  initDatabase()
  console.log('✓ Database created successfully!')
}

console.log('\n✨ Setup complete!')
console.log('\nNext steps:')
console.log('1. Make sure funding_data.csv is in the project root')
console.log('2. Run: node scripts/import-funding-data.js')
console.log('3. Run: npm run dev')
console.log('\n🎉 Ready to go!')
