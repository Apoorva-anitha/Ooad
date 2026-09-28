import React, { useState } from 'react';
import { 
  Printer, 
  Download, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  FileCheck, 
  Layers, 
  ExternalLink,
  Check,
  Loader2,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { 
  AIM_TEXT, 
  PURPOSE_TEXT, 
  OBJECTIVES, 
  SCOPE_TEXT, 
  MAJOR_FUNCTIONS, 
  FUNCTIONAL_REQUIREMENTS, 
  ROLE_CAPABILITIES, 
  NON_FUNCTIONAL_REQUIREMENTS, 
  SYSTEM_USERS, 
  HW_SW_REQUIREMENTS, 
  RESULT_TEXT,
  SAMPLE_SQL_SCHEMA,
  SAMPLE_PYTHON_CODE
} from '../data/labRecordData';
import { UseCaseDiagram } from './diagrams/UseCaseDiagram';
import { ClassDiagram } from './diagrams/ClassDiagram';
import { SequenceDiagram } from './diagrams/SequenceDiagram';
import { CollaborationDiagram } from './diagrams/CollaborationDiagram';
import { StateChartDiagram } from './diagrams/StateChartDiagram';
import { ActivityDiagram } from './diagrams/ActivityDiagram';
import { DeploymentDiagram } from './diagrams/DeploymentDiagram';
import { ComponentDiagram } from './diagrams/ComponentDiagram';
import { generatePdf, exportToWordDocument, PdfExportProgress } from '../utils/pdfExport';
import { 
  VsCodePythonScreenshot, 
  MysqlWorkbenchScreenshot, 
  CitizenPortalScreenshot, 
  AdminDashboardScreenshot, 
  CollectorTaskScreenshot,
  UmlCaseToolScreenshot
} from './LabRecordScreenshots';

interface LabRecordDocViewProps {
  onOpenPrototype?: () => void;
}

export const LabRecordDocView: React.FC<LabRecordDocViewProps> = ({ onOpenPrototype }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'continuous' | 'single'>('continuous');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [pdfStatus, setPdfStatus] = useState<'idle' | 'rendering' | 'success' | 'error'>('idle');
  const [exportProgress, setExportProgress] = useState<PdfExportProgress | null>(null);
  const [wordExported, setWordExported] = useState<boolean>(false);
  const totalPages = 11;

  // 1. Generate exact PDF directly from on-screen DOM with StarUML Screenshots
  const handleDownloadExactPdf = async () => {
    // If user is in single page view, temporarily switch to continuous during capture or ensure DOM is ready
    const prevMode = viewMode;
    if (prevMode === 'single') {
      setViewMode('continuous');
    }
    
    // Allow React 1 frame to render all pages if switched
    setTimeout(async () => {
      await generatePdf(
        'word-document-root', 
        'Smart_Waste_Management_System_Lab_Record_Screenshots.pdf',
        setPdfStatus,
        setExportProgress
      );
      if (prevMode === 'single') {
        setViewMode('single');
      }
    }, 150);
  };

  // 2. Direct instant download of the updated official 11-page Lab Record PDF
  const handleDownloadInstantPdf = () => {
    setPdfStatus('rendering');
    const link = document.createElement('a');
    link.href = `/Smart_Waste_Management_System_OOAD_Lab_Record_2026.pdf?v=${Date.now()}`;
    link.download = 'Smart_Waste_Management_System_OOAD_Lab_Record_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setPdfStatus('success');
      setTimeout(() => setPdfStatus('idle'), 3500);
    }, 600);
  };

  // 3. Open PDF directly in a new browser tab with cache-busting parameter
  const handleOpenPdfTab = () => {
    window.open(`/Smart_Waste_Management_System_OOAD_Lab_Record_2026.pdf?t=${Date.now()}`, '_blank');
  };

  const handleExportWord = () => {
    exportToWordDocument('word-document-root', 'Smart_Waste_Management_System_Lab_Record.doc');
    setWordExported(true);
    setTimeout(() => setWordExported(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const PageHeader: React.FC<{ pageNum: number }> = ({ pageNum }) => (
    <div className="flex justify-between items-center text-[11pt] font-word border-b-2 border-black pb-1.5 mb-5 font-bold tracking-wider text-black select-none">
      <span>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</span>
      <span>CS1508 - OOAD LAB</span>
    </div>
  );

  const PageFooter: React.FC<{ pageNum: number }> = ({ pageNum }) => (
    <div className="mt-8 pt-2 border-t border-black text-center font-word text-[10pt] text-black flex justify-between items-center select-none">
      <span>Anna University Chennai • OOAD Laboratory Manual</span>
      <span>Page {pageNum} of {totalPages}</span>
      <span>Smart Waste Management System</span>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center">
      {/* Microsoft Word Document Ribbon / Control Bar */}
      <div className="w-full max-w-5xl bg-white border border-slate-300 rounded-xl shadow-sm p-3 sm:p-4 mb-6 print:hidden flex flex-col gap-3">
        {/* Top Word Ribbon Title */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#185abd] text-white flex items-center justify-center font-black text-lg shadow-xs">
              W
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-mono">
                  Microsoft Word Document Layout
                </span>
                <span className="text-xs text-slate-500">A4 Times New Roman Format</span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                CS1508_Lab_Record_Smart_Waste_Management.docx
              </h2>
            </div>
          </div>

          {/* Action Buttons: Download Exact PDF (Live Screenshots), Instant PDF, Word .doc, Print */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Direct Exact PDF Generation with live UML CASE Tool Screenshots */}
            <button
              onClick={handleDownloadExactPdf}
              disabled={pdfStatus === 'rendering'}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#185abd] hover:bg-[#104791] text-white rounded-lg text-xs font-bold shadow-xs transition-all cursor-pointer disabled:opacity-50 ring-2 ring-blue-400/30"
              title="Generate & download exact 11-page PDF capturing the StarUML CASE tool screenshots, VS Code IDE, and MySQL Workbench"
            >
              {pdfStatus === 'rendering' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>
                    {exportProgress 
                      ? `Rendering Page ${exportProgress.current}/${exportProgress.total}...`
                      : 'Generating Screenshots PDF...'}
                  </span>
                </>
              ) : pdfStatus === 'success' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>PDF Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Exact PDF (With Screenshots)</span>
                </>
              )}
            </button>

            {/* Instant Download Official PDF fallback */}
            <button
              onClick={handleDownloadInstantPdf}
              className="flex items-center gap-1.5 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-lg text-xs font-bold transition-all cursor-pointer"
              title="1-Click Instant download of the pre-built 11-page Lab Record PDF"
            >
              <Download className="w-3.5 h-3.5 text-blue-700" />
              <span>Instant PDF</span>
            </button>

            {/* Open in new tab */}
            <button
              onClick={handleOpenPdfTab}
              className="flex items-center gap-1.5 px-2.5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-medium transition-all cursor-pointer"
              title="Open full PDF in a fresh browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-600" />
              <span className="hidden sm:inline">Open PDF</span>
            </button>

            {/* Export as real Microsoft Word .doc */}
            <button
              onClick={handleExportWord}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold shadow-xs transition-all cursor-pointer"
              title="Export as Microsoft Word (.doc) file"
            >
              {wordExported ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Word File Ready!</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 text-blue-300" />
                  <span className="hidden sm:inline">Export Word (.doc)</span>
                  <span className="sm:hidden">Word</span>
                </>
              )}
            </button>

            {/* Print / Save as PDF (Native browser vector print) */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer border border-slate-300"
              title="Open browser Print dialog (Vector A4 print / Save as PDF)"
            >
              <Printer className="w-4 h-4 text-slate-700" />
              <span>Print A4</span>
            </button>

            {onOpenPrototype && (
              <button
                onClick={onOpenPrototype}
                className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer"
                title="Launch Interactive Prototype"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Live Prototype</span>
              </button>
            )}
          </div>
        </div>

        {/* View mode & pagination toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">View Mode:</span>
            <div className="inline-flex p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => setViewMode('continuous')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'continuous'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Print Layout (All 11 Pages)
              </button>
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'single'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Page by Page
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {viewMode === 'single' && (
              <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-lg">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="p-1 rounded text-slate-700 hover:bg-slate-200 disabled:opacity-30 cursor-pointer"
                  title="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold px-2 text-slate-800">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="p-1 rounded text-slate-700 hover:bg-slate-200 disabled:opacity-30 cursor-pointer"
                  title="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Zoom controls */}
            <div className="flex items-center gap-1.5 text-slate-600">
              <button
                onClick={() => setZoomLevel((z) => Math.max(75, z - 10))}
                className="p-1 hover:bg-slate-100 rounded cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] font-semibold w-10 text-center">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(130, z + 10))}
                className="p-1 hover:bg-slate-100 rounded cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pages Container - Document Root for Export */}
      <div 
        id="word-document-root" 
        className="w-full flex flex-col items-center gap-8 print:gap-0 font-word text-black transition-all"
        style={{ transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : undefined, transformOrigin: 'top center' }}
      >
        {/* ========================================================= */}
        {/* PAGE 1: Aim, Purpose, Scope */}
        {/* ========================================================= */}
        <div 
          id="word-page-1"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 1 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={1} />

              {/* Word Document Exercise Header Table */}
              <div className="border border-black mb-6">
                <div className="flex justify-between items-center px-4 py-1.5 border-b border-black text-[11pt] font-bold">
                  <span>Ex. No: 1</span>
                  <span>Date: 13/09/2026</span>
                </div>
                <div className="py-2.5 text-center font-bold text-[14pt] uppercase tracking-wider">
                  SMART WASTE MANAGEMENT SYSTEM
                </div>
              </div>

              {/* AIM */}
              <div className="mb-6">
                <h3 className="font-bold text-[12pt] underline mb-2 uppercase">
                  AIM:
                </h3>
                <p className="text-[12pt] leading-relaxed text-justify">
                  {AIM_TEXT}
                </p>
              </div>

              {/* PURPOSE */}
              <div className="mb-6">
                <h3 className="font-bold text-[12pt] underline mb-2 uppercase">
                  PURPOSE:
                </h3>
                <p className="text-[12pt] leading-relaxed text-justify mb-3">
                  {PURPOSE_TEXT}
                </p>
                <p className="text-[12pt] font-bold mb-1.5">
                  The primary objectives are:
                </p>
                <ul className="list-disc list-inside text-[12pt] space-y-1 pl-2">
                  {OBJECTIVES.map((obj, idx) => (
                    <li key={idx} className="leading-normal">{obj}</li>
                  ))}
                </ul>
              </div>

              {/* SCOPE */}
              <div className="mb-4">
                <h3 className="font-bold text-[12pt] underline mb-2 uppercase">
                  SCOPE:
                </h3>
                <p className="text-[12pt] leading-relaxed text-justify mb-3">
                  {SCOPE_TEXT}
                </p>
                <p className="text-[12pt] font-bold mb-1.5">
                  Major functions include:
                </p>
                <ol className="list-decimal list-inside text-[12pt] space-y-1 pl-2">
                  {MAJOR_FUNCTIONS.slice(0, 6).map((fn, idx) => (
                    <li key={idx} className="leading-normal">{fn}</li>
                  ))}
                </ol>
              </div>
            </div>
            <PageFooter pageNum={1} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 2: Scope (cont.), Functional Requirements */}
        {/* ========================================================= */}
        <div 
          id="word-page-2"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 2 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={2} />

              <div className="mb-6">
                <p className="text-[12pt] font-bold mb-1.5">
                  Major functions (continued):
                </p>
                <ol start={7} className="list-decimal list-inside text-[12pt] space-y-1 pl-2">
                  {MAJOR_FUNCTIONS.slice(6).map((fn, idx) => (
                    <li key={idx} className="leading-normal">{fn}</li>
                  ))}
                </ol>
              </div>

              {/* FUNCTIONAL REQUIREMENTS */}
              <div className="mb-6">
                <h3 className="font-bold text-[12pt] underline mb-3 uppercase">
                  FUNCTIONAL REQUIREMENTS:
                </h3>
                <div className="space-y-3 text-[12pt] text-justify">
                  {FUNCTIONAL_REQUIREMENTS.slice(0, 8).map((req, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="font-bold shrink-0">• {req.title}:</span>
                      <span>{req.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <PageFooter pageNum={2} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 3: Functional Req (cont.), Non-Functional, Users, HW/SW */}
        {/* ========================================================= */}
        <div 
          id="word-page-3"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 3 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={3} />

              {/* Functional Requirements Cont. */}
              <div className="mb-5">
                <div className="space-y-2.5 text-[12pt] text-justify">
                  {FUNCTIONAL_REQUIREMENTS.slice(8).map((req, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="font-bold shrink-0">• {req.title}:</span>
                      <span>{req.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NON-FUNCTIONAL REQUIREMENTS */}
              <div className="mb-5">
                <h3 className="font-bold text-[12pt] underline mb-2 uppercase">
                  NON-FUNCTIONAL REQUIREMENTS:
                </h3>
                <div className="space-y-1.5 text-[11pt] text-justify">
                  {NON_FUNCTIONAL_REQUIREMENTS.slice(0, 5).map((nfr, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <span className="font-bold shrink-0">• {nfr.title}:</span>
                      <span>{nfr.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SYSTEM USERS & ACTORS TABLE (Classic Word Table) */}
              <div className="mb-5">
                <h3 className="font-bold text-[12pt] underline mb-2 uppercase">
                  SYSTEM USERS AND ACTORS:
                </h3>
                <table className="w-full border-collapse border border-black text-[10.5pt]">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-black px-3 py-1.5 text-left font-bold w-1/4">Actor / Role</th>
                      <th className="border border-black px-3 py-1.5 text-left font-bold">Responsibilities &amp; System Interaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SYSTEM_USERS.map((user, idx) => (
                      <tr key={idx}>
                        <td className="border border-black px-3 py-1.5 font-bold align-top">{user.name}</td>
                        <td className="border border-black px-3 py-1.5 align-top">{user.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* HARDWARE AND SOFTWARE REQUIREMENTS (Word Table) */}
              <div>
                <h3 className="font-bold text-[12pt] underline mb-2 uppercase">
                  HARDWARE AND SOFTWARE SPECIFICATIONS:
                </h3>
                <table className="w-full border-collapse border border-black text-[10.5pt]">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-black px-3 py-1.5 text-left font-bold w-1/2">Hardware Requirements</th>
                      <th className="border border-black px-3 py-1.5 text-left font-bold w-1/2">Software Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black px-3 py-2 align-top">
                        <ul className="list-disc list-inside space-y-1">
                          {HW_SW_REQUIREMENTS.hardware.map((hw, idx) => (
                            <li key={idx}>{hw}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="border border-black px-3 py-2 align-top">
                        <ul className="list-disc list-inside space-y-1">
                          {HW_SW_REQUIREMENTS.software.map((sw, idx) => (
                            <li key={idx}>{sw}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <PageFooter pageNum={3} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 4: 1. USE CASE DIAGRAM */}
        {/* ========================================================= */}
        <div 
          id="word-page-4"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 4 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={4} />
              
              <div className="mb-4">
                <h3 className="font-bold text-[13pt] underline mb-1 uppercase">
                  1. USE CASE DIAGRAM:
                </h3>
                <p className="text-[11pt] text-justify mb-3">
                  The Use Case Diagram depicts the system boundary, primary actors (Citizen, Waste Collector, Administrator), secondary automated actors (Smart Dustbin IoT Sensor, Notification Service), and their respective use cases.
                </p>
              </div>

              {/* Word Figure Box with CASE Tool Screenshot Frame */}
              <div className="w-full flex flex-col items-center">
                <UmlCaseToolScreenshot title="Use Case Diagram" fileName="UseCaseModel.mdj" diagramType="Use Case Diagram" elementCount={9}>
                  <UseCaseDiagram />
                </UmlCaseToolScreenshot>
              </div>
              <p className="text-center font-word text-[10.5pt] italic mt-2.5">
                Figure 1: CASE Tool Screenshot - Use Case Diagram (StarUML 5.0)
              </p>
            </div>
            <PageFooter pageNum={4} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 5: 2. CLASS DIAGRAM */}
        {/* ========================================================= */}
        <div 
          id="word-page-5"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 5 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={5} />
              
              <div className="mb-4">
                <h3 className="font-bold text-[13pt] underline mb-1 uppercase">
                  2. CLASS DIAGRAM:
                </h3>
                <p className="text-[11pt] text-justify mb-3">
                  The Class Diagram specifies the static object structure of the system, illustrating entity attributes, operations, inheritance from base User class, and associative multiplicity relationships.
                </p>
              </div>

              {/* Word Figure Box with CASE Tool Screenshot Frame */}
              <div className="w-full flex flex-col items-center">
                <UmlCaseToolScreenshot title="Domain Class Model" fileName="DomainModel.mdj" diagramType="Class Diagram" elementCount={7}>
                  <ClassDiagram />
                </UmlCaseToolScreenshot>
              </div>
              <p className="text-center font-word text-[10.5pt] italic mt-2.5">
                Figure 2: CASE Tool Screenshot - Class Diagram (StarUML 5.0)
              </p>
            </div>
            <PageFooter pageNum={5} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 6: 3. SEQUENCE DIAGRAM */}
        {/* ========================================================= */}
        <div 
          id="word-page-6"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 6 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={6} />
              
              <div className="mb-4">
                <h3 className="font-bold text-[13pt] underline mb-1 uppercase">
                  3. SEQUENCE DIAGRAM:
                </h3>
                <p className="text-[11pt] text-justify mb-3">
                  The Sequence Diagram represents the chronological sequence of message passing across system lifelines during citizen waste complaint reporting, admin verification, collector dispatch, and resolution alerting.
                </p>
              </div>

              {/* Word Figure Box with CASE Tool Screenshot Frame */}
              <div className="w-full flex flex-col items-center">
                <UmlCaseToolScreenshot title="Complaint & Collection Sequence" fileName="WasteReportSeq.mdj" diagramType="Sequence Diagram" elementCount={12}>
                  <SequenceDiagram />
                </UmlCaseToolScreenshot>
              </div>
              <p className="text-center font-word text-[10.5pt] italic mt-2.5">
                Figure 3: CASE Tool Screenshot - Sequence Diagram (StarUML 5.0)
              </p>
            </div>
            <PageFooter pageNum={6} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 7: 4. COLLABORATION DIAGRAM & 5. STATE CHART DIAGRAM */}
        {/* ========================================================= */}
        <div 
          id="word-page-7"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 7 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={7} />

              {/* COLLABORATION DIAGRAM */}
              <div className="mb-6">
                <h3 className="font-bold text-[13pt] underline mb-1 uppercase">
                  4. COLLABORATION (COMMUNICATION) DIAGRAM:
                </h3>
                <div className="w-full flex flex-col items-center">
                  <UmlCaseToolScreenshot title="Telemetry & Dispatch Flow" fileName="TelemetryCollab.mdj" diagramType="Communication Diagram" elementCount={5}>
                    <CollaborationDiagram />
                  </UmlCaseToolScreenshot>
                </div>
                <p className="text-center font-word text-[10pt] italic mt-1.5">
                  Figure 4: CASE Tool Screenshot - Collaboration Diagram (StarUML 5.0)
                </p>
              </div>

              {/* STATE CHART DIAGRAM */}
              <div>
                <h3 className="font-bold text-[13pt] underline mb-1 uppercase">
                  5. STATE CHART DIAGRAM:
                </h3>
                <div className="w-full flex flex-col items-center">
                  <UmlCaseToolScreenshot title="Complaint Entity Lifecycle" fileName="ComplaintLifecycle.mdj" diagramType="State Machine Diagram" elementCount={6}>
                    <StateChartDiagram />
                  </UmlCaseToolScreenshot>
                </div>
                <p className="text-center font-word text-[10pt] italic mt-1.5">
                  Figure 5: CASE Tool Screenshot - State Chart Diagram (StarUML 5.0)
                </p>
              </div>
            </div>
            <PageFooter pageNum={7} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 8: 6. ACTIVITY DIAGRAM */}
        {/* ========================================================= */}
        <div 
          id="word-page-8"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 8 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={8} />

              <div className="mb-4">
                <h3 className="font-bold text-[13pt] underline mb-1 uppercase">
                  6. ACTIVITY DIAGRAM:
                </h3>
                <p className="text-[11pt] text-justify mb-3">
                  The Activity Diagram details operational workflows, decisions, parallel fork/join execution paths, and role-based responsibilities across four distinct swimlanes.
                </p>
              </div>

              {/* Word Figure Box with CASE Tool Screenshot Frame */}
              <div className="w-full flex flex-col items-center">
                <UmlCaseToolScreenshot title="Collection Activity Workflow" fileName="CollectionWorkflow.mdj" diagramType="Activity Diagram" elementCount={14}>
                  <ActivityDiagram />
                </UmlCaseToolScreenshot>
              </div>
              <p className="text-center font-word text-[10.5pt] italic mt-2.5">
                Figure 6: CASE Tool Screenshot - Activity Diagram (StarUML 5.0)
              </p>
            </div>
            <PageFooter pageNum={8} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 9: 7. DEPLOYMENT DIAGRAM & 8. COMPONENT DIAGRAM */}
        {/* ========================================================= */}
        <div 
          id="word-page-9"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 9 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={9} />

              {/* DEPLOYMENT DIAGRAM */}
              <div className="mb-6">
                <h3 className="font-bold text-[13pt] underline mb-1 uppercase">
                  7. DEPLOYMENT DIAGRAM:
                </h3>
                <div className="w-full flex flex-col items-center">
                  <UmlCaseToolScreenshot title="Hardware Node Deployment" fileName="HardwareDeployment.mdj" diagramType="Deployment Diagram" elementCount={6}>
                    <DeploymentDiagram />
                  </UmlCaseToolScreenshot>
                </div>
                <p className="text-center font-word text-[10pt] italic mt-1.5">
                  Figure 7: CASE Tool Screenshot - Deployment Diagram (StarUML 5.0)
                </p>
              </div>

              {/* COMPONENT DIAGRAM */}
              <div>
                <h3 className="font-bold text-[13pt] underline mb-1 uppercase">
                  8. COMPONENT DIAGRAM:
                </h3>
                <div className="w-full flex flex-col items-center">
                  <UmlCaseToolScreenshot title="Modular Component Architecture" fileName="SystemArchitecture.mdj" diagramType="Component Diagram" elementCount={8}>
                    <ComponentDiagram />
                  </UmlCaseToolScreenshot>
                </div>
                <p className="text-center font-word text-[10pt] italic mt-1.5">
                  Figure 8: CASE Tool Screenshot - Component Diagram (StarUML 5.0)
                </p>
              </div>
            </div>
            <PageFooter pageNum={9} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 10: SOURCE CODE AND IMPLEMENTATION */}
        {/* ========================================================= */}
        <div 
          id="word-page-10"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 10 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={10} />

              <h3 className="font-bold text-[13pt] underline mb-3 uppercase">
                SOURCE CODE AND DATABASE IMPLEMENTATION:
              </h3>

              {/* Python Backend Code Screenshot (VS Code) */}
              <div className="mb-5">
                <p className="text-[11pt] font-bold mb-1.5">
                  1. Backend API Implementation (Python Flask):
                </p>
                <VsCodePythonScreenshot />
                <p className="text-center font-word text-[10pt] italic mt-1.5">
                  Figure 9: Source Code Screenshot - Python Flask REST API Controller (VS Code IDE)
                </p>
              </div>

              {/* MySQL Relational Schema Screenshot (MySQL Workbench) */}
              <div className="mb-2">
                <p className="text-[11pt] font-bold mb-1.5">
                  2. Relational Database Schema (MySQL 8.0):
                </p>
                <MysqlWorkbenchScreenshot />
                <p className="text-center font-word text-[10pt] italic mt-1.5">
                  Figure 10: Source Code Screenshot - MySQL Database Schema &amp; Query Execution (MySQL Workbench)
                </p>
              </div>
            </div>
            <PageFooter pageNum={10} />
          </div>

        {/* ========================================================= */}
        {/* PAGE 11: SAMPLE OUTPUT, RESULT & EVALUATION RECORD */}
        {/* ========================================================= */}
        <div 
          id="word-page-11"
          className={`word-page w-full max-w-[820px] bg-white border border-slate-300 p-10 sm:p-14 shadow-[0_4px_20px_rgba(0,0,0,0.06)] print:shadow-none print:border-none min-h-[1120px] flex flex-col justify-between mb-8 print:mb-0 print:break-after-page ${viewMode === 'single' && currentPage !== 11 ? 'hidden print:flex' : ''}`}
        >
            <div>
              <PageHeader pageNum={11} />

              <h3 className="font-bold text-[13pt] underline mb-2.5 uppercase">
                SAMPLE EXECUTION OUTPUT SCREENS:
              </h3>

              {/* Output Screen 1: Citizen Portal Screenshot */}
              <div className="mb-3">
                <CitizenPortalScreenshot />
                <p className="text-center font-word text-[9.5pt] italic mt-1">
                  Figure 11: Output Screen 1 - Citizen Waste Complaint Reporting Portal (Web Interface)
                </p>
              </div>

              {/* Output Screens 2 & 3: Admin Dashboard & Collector Task (2 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <AdminDashboardScreenshot />
                  <p className="text-center font-word text-[9pt] italic mt-1">
                    Figure 12: Output Screen 2 - IoT Fill Telemetry &amp; Admin Dashboard
                  </p>
                </div>
                <div>
                  <CollectorTaskScreenshot />
                  <p className="text-center font-word text-[9pt] italic mt-1">
                    Figure 13: Output Screen 3 - Waste Collector Task &amp; Weighbridge Slip
                  </p>
                </div>
              </div>

              {/* RESULT SECTION */}
              <div className="mb-4 pt-1">
                <h3 className="font-bold text-[12pt] underline mb-1 uppercase">
                  RESULT:
                </h3>
                <p className="text-[11pt] leading-relaxed text-justify">
                  {RESULT_TEXT}
                </p>
              </div>

              {/* STAFF EVALUATION RECORD (Classic Word Lab Record Rubric) */}
              <div className="border border-black mt-2">
                <div className="bg-slate-100 px-3 py-1 font-bold text-[10.5pt] border-b border-black text-center">
                  STAFF EVALUATION RECORD
                </div>
                <table className="w-full border-collapse text-[10pt]">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border-r border-b border-black px-2 py-1 font-bold text-center w-1/4">Date of Submission</th>
                      <th className="border-r border-b border-black px-2 py-1 font-bold text-center w-1/4">Viva-Voce (/20)</th>
                      <th className="border-r border-b border-black px-2 py-1 font-bold text-center w-1/4">Record Marks (/80)</th>
                      <th className="border-b border-black px-2 py-1 font-bold text-center w-1/4">Staff Signature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-r border-black px-2 py-4 text-center align-middle font-mono text-[9.5pt]">13/09/2026</td>
                      <td className="border-r border-black px-2 py-4 text-center align-middle font-bold">____ / 20</td>
                      <td className="border-r border-black px-2 py-4 text-center align-middle font-bold">____ / 80</td>
                      <td className="px-2 py-4 text-center align-middle text-slate-400 italic">Verified</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <PageFooter pageNum={11} />
          </div>
      </div>

      {/* Floating Progress Toast during PDF rendering */}
      {pdfStatus === 'rendering' && exportProgress && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 text-white px-5 py-4 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-4 max-w-md backdrop-blur-sm animate-in fade-in slide-in-from-bottom-5">
          <Loader2 className="w-6 h-6 text-blue-400 animate-spin shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center text-xs font-semibold mb-1">
              <span className="text-blue-300">Capturing CASE Tool Screenshots</span>
              <span className="font-mono text-slate-300">
                Page {exportProgress.current} / {exportProgress.total}
              </span>
            </div>
            <p className="text-xs text-slate-200 truncate font-medium">
              {exportProgress.pageTitle}
            </p>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div 
                className="bg-blue-500 h-full transition-all duration-200 rounded-full"
                style={{ width: `${(exportProgress.current / exportProgress.total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
