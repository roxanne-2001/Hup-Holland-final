# Hup Holland - Startup Funding Platform

Een funding platform waar Nederlandse startups informatie kunnen krijgen over funding mogelijkheden, met een intelligente AI-powered recommender systeem gebaseerd op 2400+ echte Nederlandse startup deals.

## Features

- **Funding Directory**: Browse 2415 Nederlandse funding opportunities uit echte data
- **AI Recommendation Engine**: Intelligente matching op basis van sector, funding amount en stage
- **User Dashboard**: Persoonlijk dashboard met opgeslagen opportunities en AI chat
- **Authentication**: Veilig inloggen en account aanmaken
- **AI Chat Assistant**: Stel vragen over funding in het Nederlands
- **Responsive Design**: Modern SaaS-design met Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite met better-sqlite3
- **Backend**: Next.js API Routes
- **Authentication**: Session-based met secure cookies

## Getting Started

### Prerequisites

- Node.js 18+ en npm

### Installation

1. Clone dit project
2. Install dependencies:

```bash
npm install
```

### Development

Start de development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Build

Build voor production:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/              # Authentication endpoints
│   │   ├── funding/           # Funding opportunities API
│   │   ├── recommendations/   # AI recommendation engine
│   │   ├── saved-opportunities/ # Opgeslagen funding
│   │   └── chat/              # AI chat assistant
│   ├── dashboard/             # User dashboard met tabs
│   ├── funding/               # Funding opportunities browser
│   ├── recommendations/       # AI recommendation form
│   ├── login/                 # Login pagina
│   ├── signup/                # Signup pagina
│   └── page.tsx               # Homepage
├── lib/
│   ├── db.ts                  # Database setup & schema
│   └── auth.ts                # Authentication functies
└── scripts/
    └── import-nl-funding.js   # CSV import script
```

## Database Schema

Het platform gebruikt SQLite met de volgende tabellen:

- **users**: Gebruikers accounts
- **sessions**: Login sessies
- **user_profiles**: Uitgebreide startup profielen
- **funding_opportunities**: 2415 Nederlandse funding deals
- **saved_opportunities**: Door gebruikers opgeslagen matches
- **chat_messages**: AI chat geschiedenis
- **applications**: Funding aanvragen

## AI Recommendation System

### Hoe het werkt

Het recommender systeem gebruikt business-logic scoring:

1. **Sector Matching** (40%): Match tussen gebruiker industrie en startup sector
2. **Funding Amount Fit** (35%): Hoe goed past het bedrag bij de vraag
3. **Stage Alignment** (25%): Development stage compatibility

### Score Berekening

```
Total Score = Sector Match (0-40) + Amount Fit (0-35) + Stage Match (0-25)

Threshold: Minimaal 30 punten voor relevante match
Results: Top 10 hoogst scorende opportunities
```

## Real Data

Het platform bevat echte Nederlandse startup data:

- **2415 funding deals** uit CSV dataset
- **7 development stages**: Pre-seed, Seed, Series A, Series B, Series C, Growth, Scale-up
- **9+ sectoren**: Deeptech, E-commerce, Fintech, Climate, AgriTech, AI, Health, SaaS, Mobility
- **Funding range**: €150K - €100M
- **Years**: 2010-2024

### Top Sectoren

1. Deeptech: 275 startups
2. E-commerce: 273 startups
3. Fintech: 270 startups
4. Climate: 268 startups
5. AgriTech: 268 startups

## Pages & Routes

| Route | Beschrijving |
|-------|--------------|
| `/` | Homepage met hero section |
| `/funding` | Browse funding opportunities met filters |
| `/recommendations` | AI recommendation form |
| `/dashboard` | Persoonlijk dashboard (Overview, Saved, AI Chat) |
| `/login` | Inloggen |
| `/signup` | Account aanmaken |

## License

MIT
