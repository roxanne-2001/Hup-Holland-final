'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function VentureCapitalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Clean and minimal */}
      <section className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Venture Capital
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Investeer in ruil voor aandelen en groei samen met je investeerders
          </p>
        </div>
      </section>

      {/* Main Content - Article style */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Venture Capital fonds is een manier van investeren in jonge bedrijven die veel groeipotentie hebben. Bij Venture Capital, ook wel VC genoemd, investeren investeerders (VC-fondsen) geld in ruil voor een deel van het bedrijf, meestal in de vorm van aandelen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dit betekent dat je als ondernemer niet zoals bij een lening het geld terug hoeft te betalen, maar wel een stukje van je bedrijf moet delen. VC helpt bedrijven sneller te groeien, nieuwe markten te betreden en het product of de dienst sneller te ontwikkelen.
            </p>
          </div>

          {/* Waarom kiezen voor VC */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-200">Waarom kiezen voor Venture Capital</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sneller groeien</h3>
                <p className="text-gray-700 leading-relaxed">
                  Grote investeringen helpen je product of dienst snel op de markt te brengen. Met een VC-investering kun je sneller uitbreiden. Dit is vooral belangrijk in markten waar snelheid cruciaal is, zoals technologie en biotech.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise en netwerk</h3>
                <p className="text-gray-700 leading-relaxed">
                  VC-fondsen brengen niet alleen kapitaal, maar ook ervaring, advies en een netwerk van potentiële klanten, partners en nieuwe investeerders. Dit kan doorslaggevend zijn bij het opschalen van je bedrijf.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Risicodragend kapitaal</h3>
                <p className="text-gray-700 leading-relaxed">
                  VC investeert in ruil voor aandelen, hoef je het geld niet terug te betalen zoals bij een traditionele lening. Het risico ligt bij de investeerder, maar je geeft wel een deel van je bedrijf op.
                </p>
              </div>
            </div>
          </div>

          {/* Wanneer geschikt */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-200">Wanneer is Venture Capital geschikt?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Venture Capital is niet voor elk bedrijf geschikt. Het past vooral bij bedrijven die:
            </p>
            
            <ul className="space-y-4 ml-6">
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Innovatief zijn of een uniek product hebben:</strong> Investeerders zoeken iets nieuws dat het potentieel heeft om groot te worden
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Snel willen opschalen:</strong> VC's verwachten dat hun investering bijdraagt aan snelle groei
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Een schaalbaar businessmodel hebben:</strong> Het bedrijf moet de mogelijkheid hebben om in korte tijd veel klanten te bereiken
              </li>
              <li className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Bereid zijn om aandelen te delen:</strong> VC investeert in ruil voor equity, je geeft een stukje van je bedrijf op
              </li>
            </ul>
          </div>

          {/* Hoe werkt het */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-200">Hoe werkt een VC-investering?</h2>
            <p className="text-gray-700 leading-relaxed mb-8">Een VC-investering verloopt meestal in meerdere stappen:</p>
            
            <div className="space-y-6">
              {[
                { num: '1', title: 'Pitch', desc: 'Het bedrijf presenteert zijn idee aan het VC-fonds' },
                { num: '2', title: 'Due diligence', desc: 'Het fonds onderzoekt het team, de markt, het product en de financiële situatie om te bepalen of de investering aantrekkelijk is' },
                { num: '3', title: 'Term sheet', desc: 'Document bevat de afspraken tussen het fonds en het bedrijf, zoals het bedrag, de aandelen en de rechten van de investeerder' },
                { num: '4', title: 'Investering en groei', desc: 'Na akkoord ontvangt het bedrijf het kapitaal en vaak ook begeleiding van het VC-fonds bij strategie, werving en netwerkuitbreiding' },
                { num: '5', title: 'Exit', desc: 'Het uiteindelijk doel van de investeerder is vaak een exit, bijvoorbeeld een overname, beursgang of verkoop van het bedrijf aan een groter bedrijf' }
              ].map((step) => (
                <div key={step.num} className="border-l-4 border-gray-300 pl-6 py-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    <span className="text-gray-400 mr-2">{step.num}.</span>{step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eisen */}
          <div className="mb-16 bg-gray-50 p-8 border-l-4 border-gray-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Eisen voor start-ups en scale-ups</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Er wordt alleen geïnvesteerd als ze een goed rendement verwachten. Daarom letten ze onder andere op:
            </p>
            
            <ul className="space-y-3 ml-6">
              {[
                { title: 'Het team', desc: 'Investeerders willen zien dat het team capabel, toegewijd en complementair is' },
                { title: 'De markt', desc: 'Een grote of snelgroeiende markt vergroot de kans op succes' },
                { title: 'Product-markt fit', desc: 'Het product moet aantoonbaar voldoen aan een echte behoefte van klanten' },
                { title: 'Traction', desc: 'Gebruiksaantallen, omzet of andere groeiprestaties' },
                { title: 'Schaalbaarheid', desc: 'Kan het bedrijf opschalen en winstgevend worden?' },
                { title: 'Verdienmodel', desc: 'Is het duidelijk hoe het bedrijf geld verdient en kan dit model groeien?' }
              ].map((item, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Voor- en nadelen */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-200">Voor- en nadelen</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Voordelen */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Voordelen</h3>
                <ul className="space-y-3 ml-6">
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Snelle groei:</strong> VC-kapitaal maakt het mogelijk om snel uit te breiden
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Expertise en netwerk:</strong> Investeringen komen vaak met advies en contacten die de groei versnellen
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Geen lening:</strong> Het geld hoeft niet terugbetaald te worden zoals bij een banklening
                  </li>
                </ul>
              </div>

              {/* Nadelen */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nadelen</h3>
                <ul className="space-y-3 ml-6">
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Aandelen afstaan:</strong> Je geeft een deel van je bedrijf op
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Invloed van investeerders:</strong> VC's hebben vaak inspraak in strategische beslissingen
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Hoge verwachtingen:</strong> VC's verwachten hoge groei en rendement, wat druk kan zetten op het bedrijf
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voorbeelden van fondsen */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-200">Voorbeelden van VC-fondsen</h2>
            
            <div className="space-y-10">
              {/* Nederlandse fondsen */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nederlandse VC-fondsen</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <strong className="text-gray-900">Peak Capital</strong>
                    <p className="text-gray-600">Investeert in SaaS, marketplaces en technologie</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <strong className="text-gray-900">InnovationQuarter Capital</strong>
                    <p className="text-gray-600">Focus op start-ups en scale-ups in Zuid-Holland</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <strong className="text-gray-900">henQ</strong>
                    <p className="text-gray-600">Richt zich op deep tech en software</p>
                  </div>
                </div>
              </div>

              {/* Europese fondsen */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Europese VC-fondsen</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <strong className="text-gray-900">Atomico</strong>
                    <p className="text-gray-600">Investeert in innovatieve technologiebedrijven in heel Europa</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <strong className="text-gray-900">Balderton</strong>
                    <p className="text-gray-600">Investeert in Europese start-ups in diverse sectoren</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 text-white p-8 mt-12">
            <h2 className="text-2xl font-bold mb-3">Klaar om Venture Capital te ontdekken?</h2>
            <p className="text-gray-300 mb-6">
              Bekijk alle beschikbare VC-fondsen en vind de perfecte match voor jouw bedrijf
            </p>
            <Link href="/funding?category=Venture Capital">
              <button className="bg-white text-gray-900 px-6 py-3 font-semibold hover:bg-gray-100 transition">
                Bekijk VC-fondsen →
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
