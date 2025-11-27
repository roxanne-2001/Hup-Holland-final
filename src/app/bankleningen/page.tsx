'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function BankleningenPage() {
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
            Bankleningen
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Traditionele financiering via banken met vaste voorwaarden
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-16 max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Een banklening is een traditionele en betrouwbare manier om je bedrijf te financieren. Of je nu een pand wilt kopen, investeren in nieuwe apparatuur, of liquiditeit nodig hebt voor dagelijkse operaties - banken bieden verschillende soorten leningen die passen bij specifieke zakelijke behoeften.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Voor startups en scale-ups kan een banklening een solide financieringsbron zijn, vooral wanneer je onderpand kunt bieden of aantoonbare inkomsten hebt. Het geeft je de middelen om te groeien zonder direct eigendom af te staan.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Drie belangrijkste soorten zakelijke leningen:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">•</span>
                  <div>
                    <strong>Zakelijke Hypotheek:</strong> Geld lenen met je bedrijfspand als onderpand. Gebruik je om een pand te kopen, verbouwen of verduurzamen.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">•</span>
                  <div>
                    <strong>Zakelijke Lening:</strong> Een vast lumpsum bedrag lenen voor een specifiek doel, zoals een nieuwe auto of machine. Je krijgt het geld in één keer.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-indigo-600 mr-2">•</span>
                  <div>
                    <strong>Rekening-courantkrediet (RKC):</strong> Een flexibele doorlopende credit voor op je zakelijke rekening. Handig voor het opvangen van pieken en dalen. Je betaalt alleen rente over wat je daadwerkelijk gebruikt.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Waarom kiezen */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Waarom kiezen voor een Banklening</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Betrouwbaar & Formeel</h3>
                <p className="text-lg text-white leading-relaxed">
                  Je weet waar je aan toe bent. Het is een formele, veilige manier van financieren met duidelijke afspraken en gereguleerde voorwaarden.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Groei Mogelijk</h3>
                <p className="text-lg text-white leading-relaxed">
                  Je kunt investeringen doen die je anders niet kon. Koop nieuwe apparatuur, breid uit, of investeer in een bedrijfspand.
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Belastingvoordeel</h3>
                <p className="text-lg text-white leading-relaxed">
                  De betaalde rente is vaak fiscaal aftrekbaar, waardoor de werkelijke kosten van de lening lager uitvallen.
                </p>
              </div>
            </div>
          </div>

          {/* Wanneer geschikt */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wanneer is een Banklening geschikt?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Bankleningen passen vooral bij bedrijven die:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Solide Ondernemingsplan</h3>
                <p className="text-gray-700 leading-relaxed">
                  Je hebt een goed doordacht businessplan met realistische financiële projecties. Banken willen zien dat je precies weet waarvoor je het geld gebruikt en hoe je het terugbetaalt.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Aantoonbare Inkomsten</h3>
                <p className="text-gray-700 leading-relaxed">
                  Je bedrijf heeft stabiele of groeiende omzet. Banken kijken naar je huidige en verwachte winstcijfers om te bepalen of je de lening kunt terugbetalen.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Onderpand Beschikbaar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Je hebt onderpand zoals een bedrijfspand, voorraad of machines. Dit verlaagt het risico voor de bank en verhoogt je kansen op goedkeuring met gunstigere voorwaarden.
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specifieke Investering</h3>
                <p className="text-gray-700 leading-relaxed">
                  Je weet exact waar het geld naartoe gaat - een bedrijfspand, nieuwe apparatuur, of werkkapitaal. Concrete investeringsplannen worden beter beoordeeld dan vage aanvragen.
                </p>
              </div>
            </div>
          </div>

          {/* Hoe werkt het */}
          <div className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hoe werkt een Banklening aanvraag?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">Het proces verloopt meestal in vier stappen:</p>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { num: '1', title: 'Oriëntatie', desc: 'Kies het juiste type lening (hypotheek, zakelijke lening, of RKC) op basis van je behoefte en bespreek je opties met verschillende banken.' },
                { num: '2', title: 'Aanvraag Indienen', desc: 'Verzamel documenten zoals je ondernemingsplan, financiële cijfers, en onderpand informatie. Dien je aanvraag officieel in bij de bank.' },
                { num: '3', title: 'Beoordeling & Due Diligence', desc: 'De bank beoordeelt je kredietwaardigheid, analyseert je businessplan, controleert onderpand en bepaalt het risico. Dit kan enkele weken duren.' },
                { num: '4', title: 'Offerte & Contract', desc: 'Bij goedkeuring ontvang je een offerte met de voorwaarden (rente, looptijd, aflossing). Na akkoord onderteken je het contract en wordt het geld overgemaakt.' }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Eisen voor een Banklening</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Banken letten vooral op drie belangrijke aspecten:
            </p>
            
            <div className="space-y-6 max-w-5xl">
              <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
                <div className="flex items-start">
                  <div>
                    <strong className="text-xl text-gray-900 block mb-2">Ondernemingsplan</strong>
                    <p className="text-gray-700 leading-relaxed">Is je plan solide? Banken willen een gedetailleerd businessplan zien met marktanalyse, concurrentieanalyse, en realistische financiële projecties. Laat zien dat je goed hebt nagedacht over je bedrijfsstrategie.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
                <div className="flex items-start">
                  <div>
                    <strong className="text-xl text-gray-900 block mb-2">Huidige en Verwachte Winstcijfers</strong>
                    <p className="text-gray-700 leading-relaxed">Kan je het terugbetalen? Banken analyseren je cashflow, omzet, winst, en groeicijfers. Ze willen bewijs dat je genoeg inkomsten hebt (of gaat hebben) om de maandelijkse aflossingen te doen zonder in de problemen te komen.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
                <div className="flex items-start">
                  <div>
                    <strong className="text-xl text-gray-900 block mb-2">Onderpand (Soms Vereist)</strong>
                    <p className="text-gray-700 leading-relaxed">Zoals een pand of voorraad. Dit dient als zekerheid voor de bank. Bij een zakelijke hypotheek is het bedrijfspand altijd onderpand. Bij andere leningen kan de bank ook om onderpand vragen - denk aan machines, voorraden, of zelfs persoonlijke zekerheden.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-6 mt-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Extra Informatie over Rente & Aflossing:</h4>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <strong className="text-indigo-700">Rente:</strong> Je betaalt rente over het geleende bedrag. Het percentage hangt af van het type lening (hypotheek vaak goedkoopst, RKC het duurst), de looptijd, en je eigen kredietwaardigheid.
                  </div>
                  <div>
                    <strong className="text-indigo-700">Aflossen:</strong>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• <strong>Hypotheek & Lening:</strong> Meestal een vast maandbedrag (aflossing + rente)</li>
                      <li>• <strong>RKC:</strong> Flexibeler. Soms een maandelijkse rentebetaling, waarbij je de hoofdsom later in één keer aflost</li>
                    </ul>
                  </div>
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
                      <strong className="text-gray-900 text-lg">Betrouwbaar & Transparant</strong>
                      <p className="text-gray-700 mt-1">Je weet waar je aan toe bent. Het is een formele, veilige manier van financieren met duidelijke voorwaarden en geen verrassingen.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Groei Mogelijk</strong>
                      <p className="text-gray-700 mt-1">Je kunt investeringen doen die je anders niet kon. Koop een bedrijfspand, nieuwe apparatuur, of krijg werkkapitaal om door te groeien.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Belastingvoordeel</strong>
                      <p className="text-gray-700 mt-1">De betaalde rente is vaak fiscaal aftrekbaar, waardoor de werkelijke kosten lager uitvallen dan het rentepercentage suggereert.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Geen Eigendom Afstaan</strong>
                      <p className="text-gray-700 mt-1">Anders dan bij investeerders behoud je volledige controle over je bedrijf. Je hoeft geen aandelen of zeggenschap af te geven.</p>
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
                      <strong className="text-gray-900 text-lg">Maandelijkse Lasten + Rente</strong>
                      <p className="text-gray-700 mt-1">Je creëert een vaste last. Elke maand moet je geld afstaan (aflossing + rente), wat je cashflow onder druk kan zetten - vooral in moeilijke tijden.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Risico bij Tegenvaller</strong>
                      <p className="text-gray-700 mt-1">Als het tegenzit met je bedrijf, blijf je wel met de schuld zitten. De bank wil gewoon terugbetaald worden, ongeacht je bedrijfsresultaten.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Minder Flexibel</strong>
                      <p className="text-gray-700 mt-1">Vooral een gewone lening of hypotheek is minder makkelijk aan te passen. Tussentijds aflossen kan soms extra kosten met zich meebrengen (boeterente).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Strenge Eisen</strong>
                      <p className="text-gray-700 mt-1">Banken zijn kritisch, vooral voor startups. Je hebt vaak onderpand nodig en moet een sterk businessplan kunnen laten zien met bewezen traction.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voorbeelden */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl font-bold text-gray-900">Bekende Nederlandse Banken</h2>
              <Link href="/funding?category=Lening">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                  Bekijk alle bankleningen →
                </button>
              </Link>
            </div>
            
            <div className="space-y-6">
              {/* Bank cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">ABN AMRO</h3>
                      <a href="https://www.abnamro.nl/zakelijk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        abnamro.nl/zakelijk →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Zakelijke leningen, hypotheken en kredietfaciliteiten voor startups en scale-ups</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">ING Zakelijk</h3>
                      <a href="https://www.ing.nl/zakelijk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        ing.nl/zakelijk →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Bedrijfsleningen, werkkapitaal en groeifinancieringen met flexibele voorwaarden</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Rabobank</h3>
                      <a href="https://www.rabobank.nl/bedrijven/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        rabobank.nl/bedrijven →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Zakelijke financiering met persoonlijk advies, ook voor innovatieve startups</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">ASN Bank</h3>
                      <a href="https://www.asnbank.nl/zakelijk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        asnbank.nl/zakelijk →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Duurzame financiering voor ondernemers met maatschappelijke impact</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Triodos Bank</h3>
                      <a href="https://www.triodos.nl/zakelijk/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        triodos.nl/zakelijk →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Ethische bankieren voor duurzame en maatschappelijk verantwoorde bedrijven</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Qredits</h3>
                      <a href="https://www.qredits.nl/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 text-sm">
                        qredits.nl →
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Microfinanciering en coaching speciaal voor startende ondernemers (€500 - €250K)</p>
                </div>
              </div>

              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">💡 Tips bij het kiezen van een bank:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vergelijk rentepercentages en voorwaarden bij meerdere banken</li>
                  <li>• Let op verborgen kosten zoals afsluitprovisie en boeterente</li>
                  <li>• Vraag naar flexibiliteit bij aflossing en tussentijdse wijzigingen</li>
                  <li>• Overweeg of je persoonlijke begeleiding belangrijk vindt</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-12 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Blijf op de hoogte van Bankleningen</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Meld je aan voor onze nieuwsbrief en ontvang de laatste updates over financieringsopties
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
