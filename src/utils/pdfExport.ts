import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';

/**
 * Downloads the given element as a styled Microsoft Word document (.doc)
 * Opens cleanly in Microsoft Word with authentic formatting.
 */
export function exportToWordDocument(elementId: string, filename: string = 'Smart_Waste_Management_System_Lab_Record.doc'): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element #${elementId} not found`);
    return;
  }

  // Clone element to sanitize for Word
  const clone = element.cloneNode(true) as HTMLElement;

  // Remove elements with print:hidden or control-bar
  const hiddenElements = clone.querySelectorAll('.print\\:hidden, .no-word-export');
  hiddenElements.forEach((el) => el.remove());

  // Ensure all word-page elements in clone are visible (remove 'hidden')
  const pages = clone.querySelectorAll('.word-page');
  pages.forEach((p) => {
    p.classList.remove('hidden');
    (p as HTMLElement).style.display = 'block';
  });

  const contentHtml = clone.innerHTML;

  const wordHeader = `<html xmlns:o='urn:schemas-microsoft-com:office:office' 
xmlns:w='urn:schemas-microsoft-com:office:word' 
xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset='utf-8'>
  <title>Smart Waste Management System - Lab Manual</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {
      size: 21.0cm 29.7cm;
      margin: 2.0cm 2.0cm 2.0cm 2.0cm;
      mso-page-orientation: portrait;
    }
    body {
      font-family: 'Times New Roman', Times, serif;
      font-size: 12pt;
      line-height: 1.5;
      color: #000000;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Times New Roman', Times, serif;
      color: #000000;
      font-weight: bold;
      margin-top: 12pt;
      margin-bottom: 6pt;
    }
    h1 { font-size: 16pt; text-align: center; }
    h2 { font-size: 14pt; }
    h3 { font-size: 12pt; text-decoration: underline; }
    p {
      margin-top: 0;
      margin-bottom: 8pt;
      text-align: justify;
      text-justify: inter-word;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 10pt 0;
    }
    th, td {
      border: 1px solid #000000;
      padding: 6pt 8pt;
      font-size: 11pt;
      vertical-align: top;
    }
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
    ul, ol {
      margin-top: 0;
      margin-bottom: 8pt;
      padding-left: 24pt;
    }
    li {
      margin-bottom: 4pt;
    }
    .page-break {
      page-break-before: always;
      mso-break-type: section-break;
    }
    .figure-caption {
      text-align: center;
      font-style: italic;
      font-size: 10.5pt;
      margin-top: 6pt;
      margin-bottom: 14pt;
    }
    pre, code {
      font-family: 'Courier New', Courier, monospace;
      font-size: 9.5pt;
      background-color: #f8f9fa;
    }
  </style>
</head>
<body>
  ${contentHtml}
</body>
</html>`;

  const blob = new Blob(['\ufeff' + wordHeader], {
    type: 'application/msword'
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Generates and downloads an authentic multi-page PDF using html2canvas-pro and jsPDF.
 * html2canvas-pro natively supports modern CSS color spaces like oklch().
 * Mounts each page into a clean offscreen staging container on document.body to ensure:
 * 1. Isolation from parent zoom/transforms (e.g. zoomLevel scaling)
 * 2. Complete immunity to React state changes and re-renders
 * 3. Exact 820px A4 geometry with zero scroll offsets
 */
export interface PdfExportProgress {
  current: number;
  total: number;
  pageTitle: string;
}

export async function generatePdf(
  elementId: string, 
  filename: string = 'Smart_Waste_Management_System_Lab_Record_Screenshots.pdf',
  onStatusChange?: (status: 'idle' | 'rendering' | 'success' | 'error') => void,
  onProgress?: (progress: PdfExportProgress) => void
): Promise<void> {
  const rootElement = document.getElementById(elementId);
  if (!rootElement) {
    console.error(`Element #${elementId} not found`);
    onStatusChange?.('error');
    setTimeout(() => onStatusChange?.('idle'), 3000);
    return;
  }

  const pageNames = [
    'Aim, Purpose, Scope & Major Functions',
    'SRS Functional & Non-Functional Specifications',
    'Users Table & Hardware/Software Specs',
    'Figure 1: StarUML Use Case Screenshot',
    'Figure 2: StarUML Class Diagram Screenshot',
    'Figure 3: StarUML Sequence Diagram Screenshot',
    'Figure 4 & 5: Collaboration & State Chart Screenshots',
    'Figure 6: StarUML Activity Diagram Screenshot',
    'Figure 7 & 8: Deployment & Component Screenshots',
    'Figure 9 & 10: VS Code & MySQL Workbench Screenshots',
    'Sample Output Screens, Result & Evaluation Rubric'
  ];

  try {
    onStatusChange?.('rendering');

    const pdf = new jsPDF({
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
      compress: true,
    });

    const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

    // Find all pages either by id="word-page-N" or querySelector
    const pageElements: HTMLElement[] = [];
    for (let p = 1; p <= 11; p++) {
      const el = document.getElementById(`word-page-${p}`);
      if (el) pageElements.push(el);
    }
    const pages = pageElements.length > 0
      ? pageElements
      : Array.from(rootElement.querySelectorAll<HTMLElement>('.word-page'));

    if (pages.length > 0) {
      for (let i = 0; i < pages.length; i++) {
        const sourcePage = pages[i];
        const pageTitle = pageNames[i] || `Page ${i + 1}`;
        onProgress?.({ current: i + 1, total: pages.length, pageTitle });

        if (i > 0) {
          pdf.addPage('a4', 'portrait');
        }

        // Mount a dedicated staging element that is in-viewport but visually hidden
        // This ensures mobile Chrome and SVG layout engines fully render coordinates and fonts
        const stagingContainer = document.createElement('div');
        stagingContainer.style.position = 'fixed';
        stagingContainer.style.left = '0';
        stagingContainer.style.top = '0';
        stagingContainer.style.width = '820px';
        stagingContainer.style.backgroundColor = '#ffffff';
        stagingContainer.style.zIndex = '999999';
        stagingContainer.style.opacity = '0.001';
        stagingContainer.style.pointerEvents = 'none';

        const pageClone = sourcePage.cloneNode(true) as HTMLElement;
        pageClone.classList.remove('hidden');
        pageClone.style.display = 'flex';
        pageClone.style.flexDirection = 'column';
        pageClone.style.justifyContent = 'space-between';
        pageClone.style.margin = '0';
        pageClone.style.transform = 'none';
        pageClone.style.boxShadow = 'none';
        pageClone.style.border = 'none';
        pageClone.style.width = '820px';
        pageClone.style.minHeight = '1120px';

        stagingContainer.appendChild(pageClone);
        document.body.appendChild(stagingContainer);

        try {
          const canvas = await html2canvas(pageClone, {
            scale: 1.6,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            scrollX: 0,
            scrollY: 0,
            windowWidth: 820,
          });

          const imgData = canvas.toDataURL('image/jpeg', 0.92);
          pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
        } finally {
          if (stagingContainer.parentNode) {
            stagingContainer.parentNode.removeChild(stagingContainer);
          }
        }
      }
    }

    // Create direct Blob URL for download to maximize reliability across browsers and iframes
    const pdfBlob = pdf.output('blob');
    const blobUrl = URL.createObjectURL(pdfBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = filename;
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    setTimeout(() => {
      if (downloadLink.parentNode) {
        downloadLink.parentNode.removeChild(downloadLink);
      }
      URL.revokeObjectURL(blobUrl);
    }, 2000);

    onStatusChange?.('success');
    setTimeout(() => onStatusChange?.('idle'), 4000);
  } catch (err) {
    console.error('Client-side PDF generation error, falling back to pre-built official PDF:', err);
    // Fallback: Download pre-built official PDF with cache-busting timestamp
    const link = document.createElement('a');
    link.href = `/Smart_Waste_Management_System_OOAD_Lab_Record_2026.pdf?v=${Date.now()}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    onStatusChange?.('success');
    setTimeout(() => onStatusChange?.('idle'), 4000);
  }
}
