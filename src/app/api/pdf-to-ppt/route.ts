import { NextRequest, NextResponse } from 'next/server'
import pdfParse from 'pdf-parse'
import PptxGenJS from 'pptxgenjs'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('pdf') as File | null

    if (!file) {
      return NextResponse.json({ error: 'Geen PDF bestand ontvangen' }, { status: 400 })
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json({ error: 'Alleen PDF bestanden zijn toegestaan' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())

    // Verify PDF magic bytes (%PDF-)
    if (buffer.length < 5 || buffer.slice(0, 5).toString('ascii') !== '%PDF-') {
      return NextResponse.json({ error: 'Ongeldig PDF bestand' }, { status: 400 })
    }
    const pdfData = await pdfParse(buffer)

    // Split text into slides based on page breaks or every ~300 chars
    const rawText = pdfData.text || ''
    const pages = rawText.split(/\f/).filter((p) => p.trim().length > 0)

    const pptx = new PptxGenJS()
    pptx.layout = 'LAYOUT_16x9'

    // Title slide
    const titleSlide = pptx.addSlide()
    titleSlide.background = { color: '4F46E5' }
    titleSlide.addText(file.name.replace(/\.pdf$/i, ''), {
      x: '10%',
      y: '35%',
      w: '80%',
      h: '30%',
      fontSize: 36,
      bold: true,
      color: 'FFFFFF',
      align: 'center',
      valign: 'middle',
    })

    // Content slides – one per PDF page
    const slidePages = pages.length > 0 ? pages : [rawText || 'Geen tekst gevonden']
    slidePages.forEach((pageText, idx) => {
      const slide = pptx.addSlide()
      slide.background = { color: 'FFFFFF' }

      // Slide number header
      slide.addText(`Pagina ${idx + 1}`, {
        x: '5%',
        y: '3%',
        w: '90%',
        h: '8%',
        fontSize: 12,
        color: '6B7280',
        align: 'right',
      })

      // Main content
      const content = pageText.trim().slice(0, 5000)
      slide.addText(content, {
        x: '5%',
        y: '12%',
        w: '90%',
        h: '83%',
        fontSize: 14,
        color: '111827',
        align: 'left',
        valign: 'top',
        wrap: true,
      })
    })

    const pptxBuffer = (await pptx.write({ outputType: 'nodebuffer' })) as Buffer
    const outputName = file.name.replace(/\.pdf$/i, '.pptx')

    return new NextResponse(pptxBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': `attachment; filename="${outputName}"`,
      },
    })
  } catch (error) {
    console.error('PDF to PPT conversion error:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json({ error: 'Conversie mislukt. Probeer het opnieuw.' }, { status: 500 })
  }
}
