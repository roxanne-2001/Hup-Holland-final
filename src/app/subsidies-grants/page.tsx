'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function SubsidiesGrantsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <Link href="/funding" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              ← Terug naar funding opties
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Subsidies & Grants
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Overheidssteun en EU-subsidies die je niet hoeft terug te betalen
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-16 max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Geld van de overheid dat je niet (direct) terug hoeft te betalen. Subsidies en grants zijn financiële bijdragen voor projecten die maatschappelijk of economisch wenselijk zijn, zoals innovatie, verduurzaming of werkgelegenheid.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Nederland biedt verschillende vormen van overheidssteun: directe subsidies, garantieregelingen waarbij de overheid optreedt als borg, en fiscale regelingen die je belastingdruk verlagen. Het centrale loket is RVO (Rijksdienst voor Ondernemend Nederland).
            </p>
          </div>

          {/* Waarom kiezen */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Drie soorten overheidssteun</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Subsidies</h3>
                <p className="text-lg text-white leading-relaxed">
                  Geld dat je niet terugbetaalt voor specifieke projecten zoals innovatie, verduurzaming of werkgelegenheid. Draagt bij aan legitimiteit van je bedrijf.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Garantieregelingen</h3>
                <p className="text-lg text-white leading-relaxed">
                  De overheid treedt op als borg voor je lening. Als je niet kunt betalen, vergoedt de overheid (een deel) aan de bank. Geeft toegang tot financiering.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Fiscale regelingen</h3>
                <p className="text-lg text-white leading-relaxed">
                  Geen direct geld, maar korting op je belasting of investeringskosten. WBSO voor innovatie, MIA/VAMIL voor milieu-investeringen, KIA voor kleine investeringen.
                </p>
              </div>
            </div>
          </div>

          {/* Wanneer geschikt */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wanneer zijn Subsidies geschikt?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Subsidies en grants passen bij:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovatieve projecten</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bedrijven die werken aan R&D, nieuwe producten of technologieën die maatschappelijke waarde hebben.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Duurzaamheid & Milieu</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ondernemingen die investeren in groene technologie, circulariteit of CO2-reductie.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Werkgelegenheid & Groei</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bedrijven die banen creëren, exporteren of bijdragen aan regionale economische ontwikkeling.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Geduld voor administratie</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ondernemers die uitgebreide verantwoording kunnen leveren en langere doorlooptijden accepteren.
                </p>
              </div>
            </div>
          </div>

          {/* Hoe werkt het */}
          <div className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hoe werkt een Subsidie aanvraag?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">Het proces verloopt meestal in meerdere stappen:</p>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { num: '1', title: 'Zoek geschikte regeling', desc: 'Gebruik de RVO subsidiewijzer of Hub Holland om de juiste regeling te vinden die bij jouw project past' },
                { num: '2', title: 'Check voorwaarden', desc: 'Lees alle eisen zorgvuldig: budget, termijnen, projectdoel, doelgroep en verplichte documenten' },
                { num: '3', title: 'Dien aanvraag in', desc: 'Vul het aanvraagformulier compleet in met projectplan, begroting en onderbouwing via het RVO-portaal' },
                { num: '4', title: 'Wacht op toekenning', desc: 'RVO beoordeelt je aanvraag (kan weken tot maanden duren). Start pas na goedkeuring' },
                { num: '5', title: 'Verantwoording', desc: 'Lever tussentijdse rapportages en einddeclaratie met bewijsstukken volgens strikte richtlijnen' }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Eisen voor subsidie aanvragen</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Er wordt gelet op:
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-5xl">
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Voldoen aan specifieke voorwaarden</strong>
                  <p className="text-gray-700">Je project moet strikte, vooraf gepubliceerde criteria vervullen</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Uitgebreide administratie</strong>
                  <p className="text-gray-700">Gedetailleerde verantwoording en documentatie zijn verplicht</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Maatschappelijke relevantie</strong>
                  <p className="text-gray-700">Aantoonbare bijdrage aan economie, innovatie of duurzaamheid</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Financiële gezondheid</strong>
                  <p className="text-gray-700">Voor garantieregelingen: je bedrijf moet gezond zijn en bank moet bereid zijn</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Tijdige aanvraag</strong>
                  <p className="text-gray-700">Start project NIET voor toekenning, anders vervalt je aanspraak</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Compliancebereidheid</strong>
                  <p className="text-gray-700">Bereid zijn om controles te ondergaan en verantwoording af te leggen</p>
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
                      <strong className="text-gray-900 text-lg">Niet terugbetalen</strong>
                      <p className="text-gray-700 mt-1">Geld dat je niet (direct) hoeft terug te betalen, geen schuld</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Legitimiteit</strong>
                      <p className="text-gray-700 mt-1">Draagt bij aan de geloofwaardigheid en reputatie van je bedrijf</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Belastingvoordeel</strong>
                      <p className="text-gray-700 mt-1">Fiscale regelingen verlagen je belastingdruk en stimuleren investeren</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Toegang tot financiering</strong>
                      <p className="text-gray-700 mt-1">Garantieregelingen geven toegang tot leningen die anders niet mogelijk waren</p>
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
                      <strong className="text-gray-900 text-lg">Zeer bureaucratisch</strong>
                      <p className="text-gray-700 mt-1">Veel papierwerk, strenge regelgeving en complexe procedures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Lange doorlooptijd</strong>
                      <p className="text-gray-700 mt-1">Aanvraagprocedures kunnen weken tot maanden duren</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Strenge verplichtingen</strong>
                      <p className="text-gray-700 mt-1">Uitgebreide verantwoording, rapportages en controles verplicht</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Extra kosten</strong>
                      <p className="text-gray-700 mt-1">Garantieregelingen: je betaalt een garantieprovisie aan de overheid</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voorbeelden */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl font-bold text-gray-900">Voorbeelden van Subsidies</h2>
              <Link href="/funding?category=Subsidie">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                  Bekijk alle subsidies →
                </button>
              </Link>
            </div>
            
            <div className="space-y-10">
              {/* Nederlandse subsidies */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🇳🇱</span> Nederlandse subsidies
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Subsidie 1</strong>
                    <p className="text-gray-600">[Beschrijving komt hier]</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Subsidie 2</strong>
                    <p className="text-gray-600">[Beschrijving komt hier]</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Subsidie 3</strong>
                    <p className="text-gray-600">[Beschrijving komt hier]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-12 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Blijf op de hoogte van Subsidies</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Meld je aan voor onze nieuwsbrief en ontvang de laatste updates over subsidies en grants
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
