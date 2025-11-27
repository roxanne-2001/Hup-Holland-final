'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function AcceleratorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <Link href="/" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              ← Terug naar funding opties
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Accelerators
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Intensieve programma's die startups helpen versneld te groeien
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-16 max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Een accelerator is ideaal als je je groei wilt versnellen en behoefte hebt aan professionele begeleiding, toegang tot investeerders en een krachtig netwerk. In een paar maanden tijd krijg je ondersteuning van mentoren, experts en andere ondernemers, waardoor je sneller tractie opbouwt en klaar wordt gestoomd voor vervolginvesteringen.
            </p>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Wat is een accelerator?</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Een <strong>accelerator</strong> is een intensief groeiprogramma dat start-ups helpt om binnen <strong>3 tot 6 maanden</strong> sneller te ontwikkelen en op te schalen. Je krijgt begeleiding van ervaren ondernemers, workshops, toegang tot experts en vaak een eerste investering.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Accelerators richten zich vooral op bedrijven die al een <strong>prototype, MVP of eerste gebruikers</strong> hebben en klaar zijn om door te groeien. Als je een schaalbare, innovatieve start-up hebt die klaar is voor de volgende stap, kan een accelerator het verschil maken tussen langzaam doorgroeien of echt doorbreken.
            </p>
          </div>

          {/* Waarom kiezen */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Voordelen van een Accelerator</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Directe toegang tot investeerders</h3>
                <p className="text-lg text-white leading-relaxed">
                  Demo Day biedt een uniek platform om direct te pitchen aan pre-seed en seed investeerders.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Sterk mentor- en alumninetwerk</h3>
                <p className="text-lg text-white leading-relaxed">
                  Toegang tot ervaren ondernemers, experts, corporates en een netwerk dat cruciaal is voor groei.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Snelle groei door intensieve begeleiding</h3>
                <p className="text-lg text-white leading-relaxed">
                  Workshops, coaching en feedback helpen je binnen maanden verder dan je zelfstandig in een jaar zou komen.
                </p>
              </div>
            </div>
          </div>

          {/* Wanneer geschikt */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Voor welke sectoren zijn accelerators geschikt?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Accelerators richten zich vooral op innovatieve, snel groeiende sectoren met schaalbare businessmodellen:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tech & AI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Software, AI, Data Science en digitale platforms met hoge groeipotentie.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthtech & Biotech</h3>
                <p className="text-gray-700 leading-relaxed">
                  Medische technologie, biotech innovaties en digitale gezondheidszorg.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-white mb-3">Fintech & E-commerce</h3>
                <p className="text-gray-700 leading-relaxed">
                  Financiële innovaties, betaaloplossingen, e-commerce platforms en marktplaatsen.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability & Deeptech</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cleantech, circulaire economie, AgriTech, FoodTech, Mobility en Smart Cities.
                </p>
              </div>
            </div>
          </div>

          {/* Hoe werkt het */}
          <div className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hoe werkt een Accelerator programma?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">Het proces verloopt meestal in vier stappen:</p>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { num: '1', title: 'Aanmelding & selectie', desc: 'Meld je aan met pitch deck, teaminformatie en product. Alleen start-ups met duidelijke groeipotentie worden toegelaten' },
                { num: '2', title: 'Programma start', desc: 'Volg workshops over productontwikkeling, marketing, sales, juridische zaken en investeringsrondes met intensieve mentorbegeleiding' },
                { num: '3', title: 'Netwerkopbouw', desc: 'Bouw een netwerk op van investeerders, experts, corporates en andere start-ups dat later cruciaal is voor groei' },
                { num: '4', title: 'Demo Day', desc: 'Eindig met een pitchmoment voor investeerders waar veel start-ups pre-seed of seed funding ophalen' }
              ].map((step) => (
                <div key={step.num} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition relative">
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eisen */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Eisen voor deelname</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Accelerators letten op:
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-5xl">
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Schaalbaar businessmodel</strong>
                  <p className="text-gray-700">Je bedrijfsmodel moet potentie hebben om snel en groot te groeien</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Sterk team</strong>
                  <p className="text-gray-700">Vaak minimaal twee founders met complementaire skills en ervaring</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Prototype of MVP</strong>
                  <p className="text-gray-700">Bewijs van concept met werkend product of vroege traction met gebruikers</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Fulltime beschikbaar</strong>
                  <p className="text-gray-700">Bereidheid om 3-6 maanden fulltime deel te nemen aan het intensieve programma</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Equity mogelijk</strong>
                  <p className="text-gray-700">Sommige programma's vragen 5-10% aandelen, andere zijn non-equity (gratis)</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Startinvestering</strong>
                  <p className="text-gray-700">Veel programma's bieden €20.000-€100.000 om mee te starten</p>
                </div>
              </div>
            </div>
          </div>

          {/* Voor- en nadelen */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Voor- en nadelen</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Voordelen */}
              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-3">✓</div>
                  <h3 className="text-2xl font-bold text-gray-900">Voordelen</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Directe toegang tot investeerders</strong>
                      <p className="text-gray-700 mt-1">Demo Day biedt uniek platform voor pre-seed en seed funding</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Sterk mentor- en alumninetwerk</strong>
                      <p className="text-gray-700 mt-1">Toegang tot ervaren ondernemers, experts en corporates</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Snelle groei door intensieve begeleiding</strong>
                      <p className="text-gray-700 mt-1">Maanden verder komen dan je zelfstandig in een jaar zou doen</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Grote kans op vervolginvesteringen</strong>
                      <p className="text-gray-700 mt-1">30-75% van deelnemers haalt vervolginvesteringen binnen jaar</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Nadelen */}
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-3">✗</div>
                  <h3 className="text-2xl font-bold text-gray-900">Nadelen</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Fulltime tijdsintensief</strong>
                      <p className="text-gray-700 mt-1">3-6 maanden fulltime commitment vereist van hele team</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Aandelen afstaan</strong>
                      <p className="text-gray-700 mt-1">Bij equity-programma's geef je 5-10% van je bedrijf weg</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Niet voor alle bedrijven</strong>
                      <p className="text-gray-700 mt-1">Alleen geschikt voor schaalbare, innovatieve start-ups</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Zeer competitieve selectie</strong>
                      <p className="text-gray-700 mt-1">Acceptatiegraad vaak minder dan 5% van aanmeldingen</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voorbeelden */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl font-bold text-gray-900">Bekende Accelerators (Europa & Nederland)</h2>
              <Link href="/funding?category=Accelerator">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                  Bekijk alle accelerators →
                </button>
              </Link>
            </div>
            
            <div className="space-y-6">
              {/* Accelerator cards */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Startupbootcamp</h3>
                    <a href="https://www.startupbootcamp.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                      startupbootcamp.org →
                    </a>
                  </div>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">Internationaal</span>
                </div>
                <p className="text-gray-700 mb-4">Internationale programma's in diverse sectoren</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900">Investering:</strong>
                    <p className="text-gray-600">€15K - €25K</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Equity:</strong>
                    <p className="text-gray-600">6-8%</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Success rate:</strong>
                    <p className="text-gray-600">30-40% vervolginvestering</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Rockstart</h3>
                    <a href="https://rockstart.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                      rockstart.com →
                    </a>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Top performer</span>
                </div>
                <p className="text-gray-700 mb-4">Energie, landbouw en emerging tech</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900">Investering:</strong>
                    <p className="text-gray-600">€20K - €100K</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Equity:</strong>
                    <p className="text-gray-600">6-12%</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Success rate:</strong>
                    <p className="text-gray-600">75% follow-on funding</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">YES!Delft</h3>
                    <a href="https://yesdelft.com/startups/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                      yesdelft.com →
                    </a>
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">Deeptech</span>
                </div>
                <p className="text-gray-700 mb-4">Deeptech en high-tech innovaties</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">HighTechXL</h3>
                  <a href="https://www.hightechxl.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm block mb-3">
                    hightechxl.com →
                  </a>
                  <p className="text-gray-700 text-sm">Deeptech en medtech focus</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">UtrechtInc</h3>
                  <a href="https://utrechtinc.nl/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm block mb-3">
                    utrechtinc.nl →
                  </a>
                  <p className="text-gray-700 text-sm">Tech en digitale start-ups</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-12 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Blijf op de hoogte van Accelerators</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Meld je aan voor onze nieuwsbrief en ontvang de laatste updates over accelerator programma's
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Jouw e-mailadres"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition whitespace-nowrap"
                >
                  Aanmelden →
                </button>
              </form>
              <p className="text-sm text-indigo-200 mt-4">
                We respecteren je privacy. Uitschrijven kan altijd.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
