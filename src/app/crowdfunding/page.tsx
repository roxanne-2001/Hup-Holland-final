'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function CrowdfundingPage() {
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
            Crowdfunding
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Haal kapitaal op van vele kleine investeerders via online platforms
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-16 max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Crowdfunding is ideaal wanneer je een product, dienst of idee hebt dat gemakkelijk uit te leggen is aan het brede publiek. Het is een effectieve manier om niet alleen financiering op te halen, maar ook direct te testen of er daadwerkelijk interesse is in jouw concept. Je bouwt tegelijkertijd zichtbaarheid, een community en potentiële klanten op.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Voor start-ups die hun idee willen valideren, een eerste product willen lanceren of maatschappelijke impact willen creëren, kan crowdfunding een krachtige en laagdrempelige financieringsvorm zijn.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wat is crowdfunding?</h3>
              <p className="text-gray-700 mb-4">Crowdfunding is een manier om geld op te halen bij een grote groep mensen (de "crowd") in plaats van bij één bank, investeerder of fonds. Veel mensen dragen een klein bedrag bij, waardoor je als start-up of project toch een aanzienlijk bedrag kunt ophalen.</p>
              <h4 className="font-bold text-gray-900 mb-3">Er bestaan verschillende vormen:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">•</span>
                  <div><strong>Donatiegebaseerd</strong> – mensen doneren zonder tegenprestatie</div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">•</span>
                  <div><strong>Beloninggebaseerd (reward-based)</strong> – investeerders ontvangen een product of voordeel</div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">•</span>
                  <div><strong>Lening (loan-based)</strong> – de crowd leent geld uit dat je terugbetaalt met rente</div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">•</span>
                  <div><strong>Aandelen (equity-based)</strong> – investeerders kopen een klein deel van je bedrijf</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Waarom kiezen voor Crowdfunding */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Waarom kiezen voor Crowdfunding</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Community Opbouwen</h3>
                <p className="text-lg text-white leading-relaxed">
                  Je bouwt direct een community op. Investeerders worden vaak je eerste klanten of ambassadeurs die je product promoten.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Idee Valideren</h3>
                <p className="text-lg text-white leading-relaxed">
                  Veel investeringen = duidelijke interesse in je product of dienst. Je test je concept voordat je grote investeringen doet.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Marketing & Zichtbaarheid</h3>
                <p className="text-lg text-white leading-relaxed">
                  Een campagne zorgt vaak voor meer zichtbaarheid dan een gewone productlancering. Gratis exposure voor je merk.
                </p>
              </div>
            </div>
          </div>

          {/* Wanneer geschikt */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sectoren waarvoor crowdfunding geschikt is</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Crowdfunding werkt vooral goed voor sectoren die het brede publiek kunnen aanspreken:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creatieve Sector & Tech</h3>
                <p className="text-gray-700 leading-relaxed">
                  Innovatieve producten, apps, games en creatieve projecten die visueel aantrekkelijk zijn en gemakkelijk uit te leggen.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Duurzaamheid & Energie</h3>
                <p className="text-gray-700 leading-relaxed">
                  Groene projecten, hernieuwbare energie en milieuvriendelijke producten die mensen willen steunen voor een betere toekomst.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Voeding & Horeca</h3>
                <p className="text-gray-700 leading-relaxed">
                  Consumentengoederen, foodconcepten en horecazaken die lokale steun kunnen krijgen van hun community.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sociaal-Maatschappelijk</h3>
                <p className="text-gray-700 leading-relaxed">
                  Projecten met maatschappelijke impact, vastgoed, en vroege-fase start-ups die hun idee willen valideren bij het publiek.
                </p>
              </div>
            </div>
          </div>

          {/* Hoe werkt het */}
          <div className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hoe werkt Crowdfunding?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">Een bedrijf of initiatiefnemer start een campagne op een crowdfundingplatform. Daar presenteer je je verhaal, doelbedrag en voorwaarden. Vervolgens kunnen mensen investeren:</p>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { num: '1', title: 'Voorbereiding', desc: 'Doelbedrag bepalen, een pakkende pitch maken, je product/prototype laten zien, en marketing voorbereiden (social media, video, promotieplan).' },
                { num: '2', title: 'Campagne Live', desc: 'Je publiceert je campagne op platforms zoals Kickstarter, CrowdAboutNow of Symbid. Investeerders kunnen nu geld inleggen.' },
                { num: '3', title: 'Investeringen Ophalen', desc: 'Campagnes hebben meestal een tijdslimiet van 30–60 dagen. Blijf actief met updates en promotie om momentum te behouden.' },
                { num: '4', title: 'Funding Ontvangen', desc: 'Wanneer je het doelbedrag haalt, ontvang je het geld en kun je het project uitvoeren. Start met produceren en leveren aan je backers.' }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Eisen die vaak gelden</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              De voorwaarden verschillen per platform, maar meestal geldt:
            </p>
            
            <div className="space-y-8 max-w-5xl">
              <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Voor de Ondernemer (Basis)</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Een duidelijk businessplan</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Financiële prognoses</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Beschrijving van product of dienst</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Doel van het geld (waaraan besteed je het?)</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Identiteitscontrole (KYC – Know Your Customer)</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Soms: bewijs van KvK-registratie</p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Extra Eisen voor Equity of Leningen</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Jaarcijfers of financiële rapportages</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Risicoclassificatie (inschatting terugbetalingsrisico)</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Rentepercentage of aandelenstructuur bepalen</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-3">•</span>
                    <p className="text-gray-700">Juridische contracten tekenen met het platform</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Checklist: Past crowdfunding bij jouw bedrijf?</h3>
                <p className="text-gray-700 mb-4">Gebruik deze checklist om te bepalen of crowdfunding een goede match is:</p>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">□</span>
                    <p className="text-gray-700">Product/dienst makkelijk visueel presenteren?</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">□</span>
                    <p className="text-gray-700">Idee in één zin uitleggen?</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">□</span>
                    <p className="text-gray-700">Breed publiek kan enthousiast worden?</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">□</span>
                    <p className="text-gray-700">Netwerk/community activeren voor steun?</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">□</span>
                    <p className="text-gray-700">Tijd voor campagnepagina, video en updates?</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">□</span>
                    <p className="text-gray-700">Doelbedrag realistisch (€5K–€100K)?</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">□</span>
                    <p className="text-gray-700">Transparantie geen probleem?</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">□</span>
                    <p className="text-gray-700">Sector past (food, tech, duurzaamheid)?</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">□</span>
                    <p className="text-gray-700">Financiering + marketing + validatie combineren?</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 font-semibold">👉 Heb je 5 of meer keer "ja"? Dan is crowdfunding waarschijnlijk een goede keuze.</p>
              </div>
            </div>
          </div>

          {/* Voor- en nadelen */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Voor- en nadelen van Crowdfunding</h2>
            
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
                      <strong className="text-gray-900 text-lg">Community Opbouwen</strong>
                      <p className="text-gray-700 mt-1">Investeerders worden vaak je eerste klanten of ambassadeurs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Idee Valideren</strong>
                      <p className="text-gray-700 mt-1">Veel investeringen = duidelijke interesse in je product of dienst.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Geen Bank Nodig</strong>
                      <p className="text-gray-700 mt-1">Je bent minder afhankelijk van traditionele financiers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Gratis Marketing</strong>
                      <p className="text-gray-700 mt-1">Een campagne zorgt vaak voor meer zichtbaarheid dan een gewone productlancering.</p>
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
                      <strong className="text-gray-900 text-lg">Kost Veel Tijd</strong>
                      <p className="text-gray-700 mt-1">Video's maken, marketing doen, updates geven – alles vraagt aandacht.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Geen Garantie op Succes</strong>
                      <p className="text-gray-700 mt-1">Veel campagnes halen het doelbedrag niet.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Transparantie Verplicht</strong>
                      <p className="text-gray-700 mt-1">Je moet open zijn over je plannen en voortgang.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Platformkosten</strong>
                      <p className="text-gray-700 mt-1">Platforms rekenen vaak 5–10% van het opgehaalde bedrag.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voorbeelden */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl font-bold text-gray-900">Bekende Crowdfundingplatformen</h2>
              <Link href="/funding?category=Crowdfunding">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                  Bekijk alle platforms →
                </button>
              </Link>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-3">🇳🇱</span> Nederlandse Crowdfundingplatformen
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">CrowdAboutNow</h4>
                      <a href="https://crowdaboutnow.nl/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        crowdaboutnow.nl →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">Voor MKB, horeca en consumentenproducten</p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Min. investering:</strong>
                      <p className="text-gray-600">€5</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Geldvoorelkaar</h4>
                      <a href="https://www.geldvoorelkaar.nl/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        geldvoorelkaar.nl →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">Leningen voor ondernemers</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Min. investering:</strong>
                      <p className="text-gray-600">€100</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">Rendement:</strong>
                      <p className="text-gray-600">8,6%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Invesdor</h4>
                      <a href="https://www.invesdor.nl/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        invesdor.nl →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">Duurzame en sociale projecten</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Min. investering:</strong>
                      <p className="text-gray-600">€250</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">Rendement:</strong>
                      <p className="text-gray-600">8%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Kapitaal op Maat</h4>
                      <a href="https://www.kapitaalopmaat.nl/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        kapitaalopmaat.nl →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm">Leningen voor kleine ondernemers</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-gray-900">Min. investering:</strong>
                      <p className="text-gray-600">€100</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">Rendement:</strong>
                      <p className="text-gray-600">5,1%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6 mt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Let op bij het kiezen van een platform:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Vergelijk de platformkosten (meestal 5-10% van opgehaald bedrag)</li>
                  <li>• Check of het platform past bij jouw type project (donatie, reward, lening, of equity)</li>
                  <li>• Bekijk eerdere succesvolle campagnes om te zien wat werkt</li>
                  <li>• Vraag naar support en begeleiding tijdens de campagne</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-12 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Blijf op de hoogte van Crowdfunding</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Meld je aan voor onze nieuwsbrief en ontvang de laatste updates over crowdfunding platforms
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
