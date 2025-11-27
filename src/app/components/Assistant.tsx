'use client'

import { useState } from 'react'

const pageOptions = [
  { id: 'home', title: 'Home', description: 'Terug naar de hoofdpagina', icon: 'fa-home', url: '/' },
  { id: 'funding', title: 'Funding Opties', description: 'Ontdek alle 148+ funding opportunities', icon: 'fa-money-bill-wave', url: '/funding' },
  { id: 'dashboard', title: 'Dashboard', description: 'Jouw persoonlijke dashboard', icon: 'fa-chart-bar', url: '/dashboard' },
  { id: 'recommendations', title: 'AI Aanbevelingen', description: 'Krijg AI-powered funding matches', icon: 'fa-robot', url: '/recommendations' },
  { id: 'venture', title: 'Venture Capital', description: 'Bekijk venture capital opties', icon: 'fa-briefcase', url: '/venture-capital' },
  { id: 'crowdfunding', title: 'Crowdfunding', description: 'Crowdfunding platforms en mogelijkheden', icon: 'fa-users', url: '/crowdfunding' },
  { id: 'angels', title: 'Angel Investors', description: 'Vind angel investors voor je startup', icon: 'fa-angel', url: '/angel-investors' },
  { id: 'subsidies', title: 'Subsidies & Grants', description: 'Overheidssubsidies en grants', icon: 'fa-file-invoice-dollar', url: '/subsidies-grants' },
  { id: 'accelerators', title: 'Accelerators', description: 'Accelerator programma\'s en incubators', icon: 'fa-rocket', url: '/accelerators' },
  { id: 'bankleningen', title: 'Bankleningen', description: 'Traditionele bankleningen en kredieten', icon: 'fa-landmark', url: '/bankleningen' },
  { id: 'login', title: 'Inloggen', description: 'Log in op je account', icon: 'fa-sign-in-alt', url: '/login' },
  { id: 'signup', title: 'Registreren', description: 'Maak een nieuw account aan', icon: 'fa-user-plus', url: '/signup' },
  { id: 'account', title: 'Account', description: 'Beheer je accountgegevens', icon: 'fa-user-circle', url: '/account' },
]

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPages = searchTerm.trim()
    ? pageOptions.filter(option => 
        option.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        option.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pageOptions

  return (
    <>
      {/* Assistant Widget */}
      <div className="funding-assistant">
        <div 
          className="assistant-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="assistant-title">
            <i className="fas fa-compass"></i>
            <span>Pagina Navigator</span>
          </div>
          <i 
            className="fas fa-chevron-down"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          ></i>
        </div>
        
        <div 
          className="assistant-body"
          style={{ maxHeight: isOpen ? '500px' : '0' }}
        >
          <div className="assistant-search">
            <input 
              type="text" 
              placeholder="Zoek een pagina..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setSearchTerm('')}>
              <i className={searchTerm ? "fas fa-times" : "fas fa-search"}></i>
            </button>
          </div>
          
          <div className="assistant-results show">
            <h4>{filteredPages.length === pageOptions.length ? 'Alle pagina\'s' : `${filteredPages.length} resultaten`}</h4>
            <div className="page-options-grid">
              {filteredPages.map(option => (
                <a 
                  key={option.id}
                  href={option.url}
                  className="page-option-card"
                >
                  <div className="page-option-icon">
                    <i className={`fas ${option.icon}`}></i>
                  </div>
                  <h5>{option.title}</h5>
                  <p>{option.description}</p>
                </a>
              ))}
              {filteredPages.length === 0 && (
                <div style={{ textAlign: 'center', padding: '20px', color: '#6b7280' }}>
                  Geen pagina's gevonden
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Font Awesome */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <style jsx global>{`
        .funding-assistant {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 380px;
          max-width: calc(100vw - 40px);
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          z-index: 1000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .assistant-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px 20px;
          border-radius: 16px 16px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }

        .assistant-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 16px;
        }

        .assistant-title i {
          font-size: 20px;
        }

        .assistant-body {
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .assistant-search {
          padding: 16px;
          display: flex;
          gap: 8px;
          border-bottom: 1px solid #e5e7eb;
        }

        .assistant-search input {
          flex: 1;
          padding: 10px 14px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }

        .assistant-search input:focus {
          border-color: #667eea;
        }

        .assistant-search button {
          padding: 10px 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .assistant-search button:hover {
          transform: scale(1.05);
        }

        .assistant-results {
          padding: 16px;
          max-height: 400px;
          overflow-y: auto;
        }

        .assistant-results h4 {
          margin: 0 0 16px 0;
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
        }

        .page-options-grid {
          display: grid;
          gap: 10px;
        }

        .page-option-card {
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-radius: 12px;
          padding: 14px;
          cursor: pointer;
          transition: all 0.2s;
          border: 2px solid transparent;
          text-decoration: none;
          display: block;
        }

        .page-option-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
          border-color: #667eea;
        }

        .page-option-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          margin-bottom: 10px;
        }

        .page-option-card h5 {
          margin: 0 0 6px 0;
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
        }

        .page-option-card p {
          margin: 0;
          font-size: 13px;
          color: #6b7280;
          line-height: 1.4;
        }

        @media (max-width: 640px) {
          .funding-assistant {
            width: calc(100vw - 40px);
            bottom: 10px;
            right: 10px;
          }
        }
      `}</style>
    </>
  )
}
