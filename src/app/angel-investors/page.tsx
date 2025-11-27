'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function AngelInvestorsPage() {
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
            Angel Investors
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Particuliere investeerders die in vroege fase startups investeren
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-16 max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Als je een start-up of scale-up runt is het verkrijgen van de juiste financiering cruciaal voor groei. <strong>Angel investors</strong> zijn één van de populaire opties voor ondernemers die kapitaal willen ophalen in ruil voor eigendomsaandelen (equity). Deze gids legt uit wat het is, hoe het werkt, de voordelen en nadelen, en welke bedrijven hier baat bij hebben.
            </p>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Wat is een Angel Investor?</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Een <strong>Angel investor</strong> is een particuliere investeerder die zijn eigen geld investeert in een start-up of scale-up in een vroeg stadium. Ze investeren vaak in ruil voor <strong>equity</strong> oftewel een deel van het eigendom van het bedrijf.
            </p>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-3">Kenmerken van angel investors:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Vaak succesvolle ondernemers of senior professionals.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Investeringen variëren meestal tussen €25.000 en €500.000.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Bieden naast kapitaal vaak ook ervaring, netwerk en strategisch advies.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Waarom kiezen */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Waarom kiezen voor Angel Investors</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Toegang tot kapitaal</h3>
                <p className="text-lg text-white leading-relaxed">
                  Zonder directe lening of schuld krijg je toegang tot de financiering die je nodig hebt voor groei.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Mentorschap en netwerk</h3>
                <p className="text-lg text-white leading-relaxed">
                  Vaak ervaren ondernemers die waardevolle inzichten en connecties bieden die jouw bedrijf versterken.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Flexibiliteit</h3>
                <p className="text-lg text-white leading-relaxed">
                  Investeringsvoorwaarden zijn vaak minder strikt dan bij venture capital fondsen.
                </p>
              </div>
            </div>
          </div>

          {/* Wanneer geschikt */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Welke bedrijven profiteren het meest?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Angel Investors passen vooral bij:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Start-ups in vroege fase</h3>
                <p className="text-gray-700 leading-relaxed">
                  Met een innovatief product of dienst die nog niet klaar zijn voor grote investeringsfondsen.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scale-ups die willen opschalen</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bedrijven die nog niet klaar zijn voor grote venture capital investeringen maar wel willen groeien.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategische begeleiding nodig</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bedrijven die naast kapitaal ook waarde hechten aan mentorschap en netwerk van ervaren ondernemers.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoge groeipotentie</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ondernemingen in tech, biotech, SaaS of duurzame oplossingen met sterke schaalbaarheid.
                </p>
              </div>
            </div>
          </div>

          {/* Hoe werkt het */}
          <div className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hoe werkt Angel Investing?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">Het proces verloopt meestal in meerdere stappen:</p>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { num: '1', title: 'Netwerken & pitch', desc: 'Maak contact via angel netwerken, events of platforms en presenteer je idee met een sterke pitch deck' },
                { num: '2', title: 'Eerste gesprekken', desc: 'Bespreek je business plan, team, marktpotentie en financiële projecties met geïnteresseerde angels' },
                { num: '3', title: 'Due diligence', desc: 'De angel onderzoekt je bedrijf grondig: financiën, juridische zaken, marktpositie en team' },
                { num: '4', title: 'Term sheet', desc: 'Bespreek de voorwaarden: investeringsbedrag, equity percentage, zeggenschap en exit strategie' },
                { num: '5', title: 'Contractering', desc: 'Formaliseer de deal met juridische documenten en ontvang de investering om te groeien' }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Waar letten Angel Investors op?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Angel Investors beoordelen je startup op meerdere aspecten:
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-5xl">
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Sterk team</strong>
                  <p className="text-gray-700">Een gedreven en ervaren team met complementaire skills en bewezen track record</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Schaalbaarheid</strong>
                  <p className="text-gray-700">Een business model dat snel kan groeien zonder evenredige kostenstijging</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Marktpotentie</strong>
                  <p className="text-gray-700">Een grote en groeiende markt met duidelijke vraag naar je product of dienst</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Innovatie & USP</strong>
                  <p className="text-gray-700">Een uniek product met duidelijk concurrentievoordeel en bescherming (patent, technologie)</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Traction</strong>
                  <p className="text-gray-700">Bewijs van concept met eerste klanten, omzet of gebruikersgroei</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Exit mogelijkheden</strong>
                  <p className="text-gray-700">Duidelijke strategie voor toekomstige verkoop, overname of beursgang</p>
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
                      <strong className="text-gray-900 text-lg">Toegang tot kapitaal</strong>
                      <p className="text-gray-700 mt-1">Zonder directe lening of schuld</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Mentorschap en netwerk</strong>
                      <p className="text-gray-700 mt-1">Vaak ervaren ondernemers die waardevolle inzichten en connecties bieden</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Flexibiliteit</strong>
                      <p className="text-gray-700 mt-1">Investeringsvoorwaarden zijn vaak minder strikt dan bij venture capital</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Snelle beslissingsprocessen</strong>
                      <p className="text-gray-700 mt-1">Minder bureaucratie vergeleken met grote investeringsfondsen</p>
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
                      <strong className="text-gray-900 text-lg">Aandelenverlies</strong>
                      <p className="text-gray-700 mt-1">Je geeft een deel van je bedrijf weg</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Invloed van investeerder</strong>
                      <p className="text-gray-700 mt-1">Sommige angels willen actief meebeslissen</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Beperkt kapitaal</strong>
                      <p className="text-gray-700 mt-1">Soms niet genoeg voor grootschalige expansie, dan is aanvullende funding nodig</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Hoge verwachtingen</strong>
                      <p className="text-gray-700 mt-1">Angels verwachten vaak een snelle groei en rendement</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voorbeelden */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl font-bold text-gray-900">Voorbeelden van Angel Investors</h2>
              <Link href="/funding?category=Angel">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                  Bekijk alle Angels →
                </button>
              </Link>
            </div>
            
            <div className="space-y-10">
              {/* Nederlandse Angels */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🇳🇱</span> Nederlandse Angel Investors
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Angel 1</strong>
                    <p className="text-gray-600">[Beschrijving komt hier]</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Angel 2</strong>
                    <p className="text-gray-600">[Beschrijving komt hier]</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Angel 3</strong>
                    <p className="text-gray-600">[Beschrijving komt hier]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-12 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Blijf op de hoogte van Angel Investors</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Meld je aan voor onze nieuwsbrief en ontvang de laatste updates over angel investing
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
