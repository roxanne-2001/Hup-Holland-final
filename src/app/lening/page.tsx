'use client'

import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function LeningPage() {
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
            Lening
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Traditionele zakelijke leningen met vaste rente en aflossing
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="mb-16 max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              [Introductie tekst over Leningen komt hier]
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              [Tweede alinea introductie komt hier]
            </p>
          </div>

          {/* Waarom kiezen */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Waarom kiezen voor een Lening</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Reden 1</h3>
                <p className="text-lg text-white leading-relaxed">
                  [Beschrijving komt hier]
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Reden 2</h3>
                <p className="text-lg text-white leading-relaxed">
                  [Beschrijving komt hier]
                </p>
              </div>

              <div className="rounded-xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform" style={{ backgroundColor: '#99ABC6' }}>
                <h3 className="text-2xl font-bold text-white mb-4">Reden 3</h3>
                <p className="text-lg text-white leading-relaxed">
                  [Beschrijving komt hier]
                </p>
              </div>
            </div>
          </div>

          {/* Wanneer geschikt */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Wanneer is een Lening geschikt?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Een lening past vooral bij bedrijven die:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Criterium 1</h3>
                <p className="text-gray-700 leading-relaxed">
                  [Beschrijving komt hier]
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Criterium 2</h3>
                <p className="text-gray-700 leading-relaxed">
                  [Beschrijving komt hier]
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Criterium 3</h3>
                <p className="text-gray-700 leading-relaxed">
                  [Beschrijving komt hier]
                </p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-indigo-400 transition">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Criterium 4</h3>
                <p className="text-gray-700 leading-relaxed">
                  [Beschrijving komt hier]
                </p>
              </div>
            </div>
          </div>

          {/* Hoe werkt het */}
          <div className="mb-20 bg-gray-50 p-10 rounded-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hoe werkt een Lening?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">Het proces verloopt meestal in meerdere stappen:</p>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { num: '1', title: 'Stap 1', desc: '[Beschrijving komt hier]' },
                { num: '2', title: 'Stap 2', desc: '[Beschrijving komt hier]' },
                { num: '3', title: 'Stap 3', desc: '[Beschrijving komt hier]' },
                { num: '4', title: 'Stap 4', desc: '[Beschrijving komt hier]' },
                { num: '5', title: 'Stap 5', desc: '[Beschrijving komt hier]' }
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Eisen voor een Lening</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Banken letten op:
            </p>
            
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 max-w-5xl">
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Eis 1</strong>
                  <p className="text-gray-700">[Beschrijving komt hier]</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Eis 2</strong>
                  <p className="text-gray-700">[Beschrijving komt hier]</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Eis 3</strong>
                  <p className="text-gray-700">[Beschrijving komt hier]</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 font-bold mr-4 text-xl">•</span>
                <div>
                  <strong className="text-lg text-gray-900">Eis 4</strong>
                  <p className="text-gray-700">[Beschrijving komt hier]</p>
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
                      <strong className="text-gray-900 text-lg">Voordeel 1</strong>
                      <p className="text-gray-700 mt-1">[Beschrijving komt hier]</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Voordeel 2</strong>
                      <p className="text-gray-700 mt-1">[Beschrijving komt hier]</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Voordeel 3</strong>
                      <p className="text-gray-700 mt-1">[Beschrijving komt hier]</p>
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
                      <strong className="text-gray-900 text-lg">Nadeel 1</strong>
                      <p className="text-gray-700 mt-1">[Beschrijving komt hier]</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Nadeel 2</strong>
                      <p className="text-gray-700 mt-1">[Beschrijving komt hier]</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-3 text-lg">•</span>
                    <div>
                      <strong className="text-gray-900 text-lg">Nadeel 3</strong>
                      <p className="text-gray-700 mt-1">[Beschrijving komt hier]</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voorbeelden */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl font-bold text-gray-900">Voorbeelden van leningverstrekkers</h2>
              <Link href="/funding?category=Lening">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                  Bekijk alle opties →
                </button>
              </Link>
            </div>
            
            <div className="space-y-10">
              {/* Nederlandse verstrekkers */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">🇳🇱</span> Nederlandse leningverstrekkers
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Verstrekker 1</strong>
                    <p className="text-gray-600">[Beschrijving komt hier]</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Verstrekker 2</strong>
                    <p className="text-gray-600">[Beschrijving komt hier]</p>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-400 transition">
                    <strong className="text-lg text-gray-900 block mb-2">Verstrekker 3</strong>
                    <p className="text-gray-600">[Beschrijving komt hier]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white p-12 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Blijf op de hoogte van Leningen</h2>
              <p className="text-xl text-indigo-100 mb-8">
                Meld je aan voor onze nieuwsbrief en ontvang de laatste updates over leningmogelijkheden
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
