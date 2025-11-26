const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// Lees CSV bestand
const csvPath = '/Users/roxanne/Downloads/bigdata_startup_funding.csv';
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const lines = csvContent.split('\n').filter(line => line.trim());

// Parse CSV
const headers = lines[0].split(',');
const data = [];

for (let i = 1; i < lines.length; i++) {
  const values = lines[i].split(',');
  if (values.length === headers.length) {
    const row = {};
    headers.forEach((header, index) => {
      row[header.trim()] = values[index].trim();
    });
    data.push(row);
  }
}

// Filter Nederlandse bedrijven
const nlData = data.filter(row => row.country === 'Netherlands');

console.log(`Totaal records: ${data.length}`);
console.log(`Nederlandse startups: ${nlData.length}`);

// Open database
const dbPath = path.join(__dirname, '..', 'hup_holland.db');
const db = new Database(dbPath);

// Check hoeveel records er al zijn
const count = db.prepare('SELECT COUNT(*) as count FROM funding_opportunities').get();
console.log(`Huidige records in database: ${count.count}`);

if (count.count > 0) {
  console.log('Database bevat al data. Wil je deze overschrijven? (Script stopt nu)');
  process.exit(0);
}

// Insert statement
const insert = db.prepare(`
  INSERT INTO funding_opportunities (startup_name, fund_name, country, stage, sector, amount_eur, year)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

// Bulk insert
const insertMany = db.transaction((records) => {
  for (const record of records) {
    insert.run(
      record.startup_name,
      record.fund_name,
      record.country,
      record.stage,
      record.sector,
      parseFloat(record.amount_eur),
      parseInt(record.year)
    );
  }
});

try {
  insertMany(nlData);
  console.log(`✅ ${nlData.length} Nederlandse startups toegevoegd aan database!`);
  
  // Toon statistieken
  const stats = db.prepare(`
    SELECT 
      stage,
      COUNT(*) as count,
      AVG(amount_eur) as avg_amount,
      SUM(amount_eur) as total_amount
    FROM funding_opportunities
    GROUP BY stage
    ORDER BY count DESC
  `).all();
  
  console.log('\n📊 Statistieken per stage:');
  stats.forEach(stat => {
    console.log(`${stat.stage}: ${stat.count} deals, avg €${Math.round(stat.avg_amount).toLocaleString()}, totaal €${Math.round(stat.total_amount).toLocaleString()}`);
  });
  
  const sectors = db.prepare(`
    SELECT sector, COUNT(*) as count
    FROM funding_opportunities
    GROUP BY sector
    ORDER BY count DESC
    LIMIT 10
  `).all();
  
  console.log('\n📈 Top 10 sectoren:');
  sectors.forEach(s => {
    console.log(`${s.sector}: ${s.count} startups`);
  });
  
} catch (error) {
  console.error('❌ Error:', error.message);
}

db.close();
console.log('\n✅ Import compleet!');
