'use client'

import { useState, useRef } from 'react'
import Navbar from '../components/Navbar'

export default function PdfToPptPage() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] || null
    setFile(selected)
    setError(null)
    setSuccess(false)
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    const dropped = e.dataTransfer.files?.[0] || null
    if (dropped && dropped.type === 'application/pdf') {
      setFile(dropped)
      setError(null)
      setSuccess(false)
    } else {
      setError('Alleen PDF bestanden zijn toegestaan.')
    }
  }

  async function handleConvert() {
    if (!file) return
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const formData = new FormData()
      formData.append('pdf', file)

      const response = await fetch('/api/pdf-to-ppt', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Conversie mislukt')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = file.name.replace(/\.pdf$/i, '.pptx')
      a.click()
      URL.revokeObjectURL(url)
      setSuccess(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Conversie mislukt. Probeer het opnieuw.')
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setFile(null)
    setError(null)
    setSuccess(false)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>📄</span>
            PDF naar PowerPoint Converter
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            PDF naar{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PPT
            </span>{' '}
            omzetten
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Upload je PDF en download direct een PowerPoint presentatie.
          </p>

          {/* Drop zone */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => inputRef.current?.click()}
            className="border-2 border-dashed border-indigo-300 rounded-2xl p-12 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all mb-6"
          >
            <input
              ref={inputRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            {file ? (
              <div className="flex flex-col items-center gap-3">
                <span className="text-5xl">📄</span>
                <p className="font-semibold text-gray-900 text-lg">{file.name}</p>
                <p className="text-sm text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 text-gray-500">
                <span className="text-5xl">⬆️</span>
                <p className="font-semibold text-gray-700">
                  Sleep je PDF hierheen of klik om te uploaden
                </p>
                <p className="text-sm">Alleen PDF bestanden</p>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 px-6 py-4 rounded-xl mb-6 text-sm font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 text-green-700 px-6 py-4 rounded-xl mb-6 text-sm font-medium">
              ✅ Conversie geslaagd! Je download is gestart.
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleConvert}
              disabled={!file || loading}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? 'Bezig met omzetten…' : 'Omzetten naar PPT →'}
            </button>
            {file && (
              <button
                onClick={handleReset}
                className="px-8 py-4 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
              >
                Opnieuw
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
