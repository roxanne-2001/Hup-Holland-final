'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function VentureCapitalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Clean and minimal */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Link href="/funding" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              ← Terug naar funding opties
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Venture Capital
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Investeer in ruil voor aandelen en groei samen met je investeerders
          </p>
        </div>
      </section>

      {/* Main Content - Article style */}
      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Venture Capital fonds is een manier van investeren in jonge bedrijven die veel groeipotentie hebben. Bij Venture Capital, ook wel VC genoemd, investeren investeerders (VC-fondsen) geld in ruil voor een deel van het bedrijf, meestal in de vorm van aandelen.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Dit betekent dat je als ondernemer niet zoals bij een lening het geld terug hoeft te betalen, maar wel een stukje van je bedrijf moet delen. VC helpt bedrijven sneller te groeien, nieuwe markten te betreden en het product of de dienst sneller te ontwikkelen.
            </p>
          </div>

          {/* Waarom kiezen voor VC */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Waarom kiezen voor Venture Capital</h2>
            
            <div className="space-y-10">
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sneller groeien</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Grote investeringen helpen je product of dienst snel op de markt te brengen. Met een VC-investering kun je sneller uitbreiden. Dit is vooral belangrijk in markten waar snelheid cruciaal is, zoals technologie en biotech.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expertise en netwerk</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  VC-fondsen brengen niet alleen kapitaal, maar ook ervaring, advies en een netwerk van potentiële klanten, partners en nieuwe investeerders. Dit kan doorslaggevend zijn bij het opschalen van je bedrijf.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Risicodragend kapitaal</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  VC investeert in ruil voor aandelen, hoef je het geld niet terug te betalen zoals bij een traditionele lening. Het risico ligt bij de investeerder, maar je geeft wel een deel van je bedrijf op.
                </p>
              </div>
            </div>
          </div>

          {/* Wanneer geschikt */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wanneer is Venture Capital geschikt?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Venture Capital is niet voor elk bedrijf geschikt. Het past vooral bij bedrijven die:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <div className="text-indigo-600 text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovatief product</h3>
                <p className="text-gray-700 leading-relaxed">
                  Investeerders zoeken iets nieuws dat het potentieel heeft om groot te worden
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <div className="text-purple-600 text-3xl mb-3">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Snelle opschaling</h3>
                <p className="text-gray-700 leading-relaxed">
                  VC's verwachten dat hun investering bijdraagt aan snelle groei
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <div className="text-blue-600 text-3xl mb-3">💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Schaalbaar businessmodel</h3>
                <p className="text-gray-700 leading-relaxed">
                  Het bedrijf moet de mogelijkheid hebben om in korte tijd veel klanten te bereiken
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <div className="text-green-600 text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bereid om te delen</h3>
                <p className="text-gray-700 leading-relaxed">
                  VC investeert in ruil voor equity, je geeft een stukje van je bedrijf op
                </p>
              </div>
            </div>
          </div>

          {/* Hoe werkt het */}
          <div className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hoe werkt een VC-investering?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">Een VC-investering verloopt meestal in meerdere stappen:</p>
            
            <div className="space-y-6">
              {[
                { num: '1', title: 'Pitch', desc: 'Het bedrijf presenteert zijn idee aan het VC-fonds', color: 'indigo' },
                { num: '2', title: 'Due diligence', desc: 'Het fonds onderzoekt het team, de markt, het product en de financiële situatie om te bepalen of de investering aantrekkelijk is', color: 'purple' },
                { num: '3', title: 'Term sheet', desc: 'Document bevat de afspraken tussen het fonds en het bedrijf, zoals het bedrag, de aandelen en de rechten van de investeerder', color: 'blue' },
                { num: '4', title: 'Investering en groei', desc: 'Na akkoord ontvangt het bedrijf het kapitaal en vaak ook begeleiding van het VC-fonds bij strategie, werving en netwerkuitbreiding', color: 'green' },
                { num: '5', title: 'Exit', desc: 'Het uiteindelijk doel van de investeerder is vaak een exit, bijvoorbeeld een overname, beursgang of verkoop van het bedrijf aan een groter bedrijf', color: 'orange' }
              ].map((step) => (
                <div key={step.num} className="flex items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                  <div className={`flex-shrink-0 w-14 h-14 bg-${step.color}-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6`}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eisen */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Eisen voor start-ups en scale-ups</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Er wordt alleen geïnvesteerd als ze een goed rendement verwachten. Daarom letten ze onder andere op:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '👥', title: 'Het team', desc: 'Investeerders willen zien dat het team capabel, toegewijd en complementair is' },
                { icon: '📈', title: 'De markt', desc: 'Een grote of snelgroeiende markt vergroot de kans op succes' },
                { icon: '🎯', title: 'Product-markt fit', desc: 'Het product moet aantoonbaar voldoen aan een echte behoefte van klanten' },
                { icon: '📊', title: 'Traction', desc: 'Gebruiksaantallen, omzet of andere groeiprestaties' },
                { icon: '🚀', title: 'Schaalbaarheid', desc: 'Kan het bedrijf opschalen en winstgevend worden?' },
                { icon: '💡', title: 'Verdienmodel', desc: 'Is het duidelijk hoe het bedrijf geld verdient en kan dit model groeien?' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
                      <strong className="text-gray-900 text-lg">Snelle groei</strong>
                      <p className="text-gray-700 mt-1">VC-kapitaal maakt het mogelijk om snel uit te breiden</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Expertise en netwerk</strong>
                      <p className="text-gray-700 mt-1">Investeringen komen vaak met advies en contacten die de groei versnellen</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Geen lening</strong>
                      <p className="text-gray-700 mt-1">Het geld hoeft niet terugbetaald te worden zoals bij een banklening</p>
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
                      <strong className="text-gray-900 text-lg">Aandelen afstaan</strong>
                      <p className="text-gray-700 mt-1">Je geeft een deel van je bedrijf op</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Invloed van investeerders</strong>
                      <p className="text-gray-700 mt-1">VC's hebben vaak inspraak in strategische beslissingen</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Hoge verwachtingen</strong>
                      <p className="text-gray-700 mt-1">VC's verwachten hoge groei en rendement, wat druk kan zetten op het bedrijf</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voorbeelden van fondsen */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Voorbeelden van VC-fondsen</h2>
            
            <div className="space-y-10">
              {/* Nederlandse fondsen */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🇳🇱</span> Nederlandse VC-fondsen
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Peak Capital</strong>
                    <p className="text-gray-600">Investeert in SaaS, marketplaces en technologie</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">InnovationQuarter</strong>
                    <p className="text-gray-600">Focus op start-ups en scale-ups in Zuid-Holland</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">henQ</strong>
                    <p className="text-gray-600">Richt zich op deep tech en software</p>
                  </div>
                </div>
              </div>

              {/* Europese fondsen */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🇪🇺</span> Europese VC-fondsen
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Atomico</strong>
                    <p className="text-gray-600">Investeert in innovatieve technologiebedrijven in heel Europa</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Balderton</strong>
                    <p className="text-gray-600">Investeert in Europese start-ups in diverse sectoren</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-12 rounded-2xl text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Klaar om Venture Capital te ontdekken?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Bekijk alle beschikbare VC-fondsen en vind de perfecte match voor jouw bedrijf
            </p>
            <Link href="/funding?category=Venture Capital">
              <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition transform shadow-xl">
                Bekijk alle VC-fondsen →
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
