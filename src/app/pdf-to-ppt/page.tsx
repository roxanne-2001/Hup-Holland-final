'use client'

import { useState, useRef } from 'react'
import Script from 'next/script'
import Navbar from '../components/Navbar'

// Slide dimensions in inches (standard widescreen 10" x 7.5")
const SLIDE_WIDTH_IN = 10
const SLIDE_HEIGHT_IN = 7.5
// Scale factor for rendering PDF pages to canvas (higher = better quality)
const PDF_RENDER_SCALE = 2
// JPEG quality for slide images (0–1)
const JPEG_QUALITY = 0.92

declare global {
  interface Window {
    PptxGenJS: new () => {
      addSlide: () => { addImage: (opts: Record<string, unknown>) => void }
      writeFile: (opts: { fileName: string }) => Promise<void>
    }
  }
}

export default function PdfToPptPage() {
  const [file, setFile] = useState<File | null>(null)
  const [converting, setConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null
    setFile(selected)
    setError(null)
    setDone(false)
    setProgress(0)
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    const dropped = e.dataTransfer.files?.[0]
    if (dropped && dropped.type === 'application/pdf') {
      setFile(dropped)
      setError(null)
      setDone(false)
      setProgress(0)
    } else {
      setError('Upload alsjeblieft een geldig PDF-bestand.')
    }
  }

  async function handleConvert() {
    if (!file) return
    setConverting(true)
    setError(null)
    setDone(false)
    setProgress(0)

    try {
      // pdfjs-dist is imported via webpack (browser-safe), worker is served statically
      const { getDocument, GlobalWorkerOptions } = await import('pdfjs-dist')
      GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

      const arrayBuffer = await file.arrayBuffer()
      const pdfDoc = await getDocument({ data: arrayBuffer }).promise
      const totalPages = pdfDoc.numPages

      // PptxGenJS is loaded via a <Script> tag (window global) to avoid webpack node: issues
      const PptxGenJS = window.PptxGenJS
      if (!PptxGenJS) {
        throw new Error('PptxGenJS is nog niet geladen, probeer het opnieuw.')
      }
      const pptx = new PptxGenJS()

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdfDoc.getPage(i)
        const viewport = page.getViewport({ scale: PDF_RENDER_SCALE })

        const canvas = document.createElement('canvas')
        canvas.width = viewport.width
        canvas.height = viewport.height
        const ctx = canvas.getContext('2d')!

        await page.render({ canvasContext: ctx, viewport }).promise

        const imgData = canvas.toDataURL('image/jpeg', JPEG_QUALITY)

        const aspectRatio = viewport.width / viewport.height
        let imgW = SLIDE_WIDTH_IN
        let imgH = SLIDE_WIDTH_IN / aspectRatio
        if (imgH > SLIDE_HEIGHT_IN) {
          imgH = SLIDE_HEIGHT_IN
          imgW = SLIDE_HEIGHT_IN * aspectRatio
        }
        const x = (SLIDE_WIDTH_IN - imgW) / 2
        const y = (SLIDE_HEIGHT_IN - imgH) / 2

        const slide = pptx.addSlide()
        slide.addImage({ data: imgData, x, y, w: imgW, h: imgH })

        setProgress(Math.round((i / totalPages) * 100))
      }

      const baseName = file.name.replace(/\.pdf$/i, '')
      await pptx.writeFile({ fileName: `${baseName}.pptx` })
      setDone(true)
    } catch (err) {
      console.error(err)
      setError('Er is een fout opgetreden bij het converteren. Probeer het opnieuw.')
    } finally {
      setConverting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Load pptxgenjs browser bundle via script tag to avoid webpack node: issues */}
      <Script src="/pptxgen.min.js" strategy="afterInteractive" />

      <Navbar />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            PDF naar PowerPoint
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            PDF omzetten naar{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PowerPoint
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Upload je PDF en download het direct als bewerkbare presentatie (.pptx)
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Drop zone */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-indigo-300 rounded-xl p-10 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            {file ? (
              <div>
                <p className="font-semibold text-gray-900 text-lg">{file.name}</p>
                <p className="text-sm text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            ) : (
              <div>
                <p className="font-semibold text-gray-700 text-lg">Sleep je PDF hierheen</p>
                <p className="text-sm text-gray-500 mt-1">of klik om een bestand te kiezen</p>
              </div>
            )}
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          {converting && (
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Converteren...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {done && !converting && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
              ✓ Conversie geslaagd! Je download is gestart.
            </div>
          )}

          <button
            onClick={handleConvert}
            disabled={!file || converting}
            className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition transform disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {converting ? 'Bezig met converteren...' : 'Converteer naar PowerPoint'}
          </button>

          <p className="mt-4 text-center text-xs text-gray-400">
            De conversie vindt volledig in je browser plaats. Je bestand wordt nergens geüpload.
          </p>
        </div>
      </div>
    </div>
  )
}
