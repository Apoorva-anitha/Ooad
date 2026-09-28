import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Layers, 
  PlayCircle, 
  Database, 
  FileCode, 
  Trash2, 
  Printer, 
  ExternalLink,
  Sparkles,
  CheckCircle,
  GraduationCap,
  Download,
  Loader2,
  Check,
  FileText,
  AlertCircle,
  Globe
} from 'lucide-react';
import { 
  INITIAL_CITIZENS, 
  INITIAL_COLLECTORS, 
  INITIAL_ADMINS, 
  INITIAL_BINS, 
  INITIAL_REPORTS, 
  INITIAL_SCHEDULES, 
  INITIAL_RECORDS, 
  INITIAL_NOTIFICATIONS 
} from './data/mockData';
import { 
  Citizen, 
  WasteCollector, 
  Administrator, 
  SmartBin, 
  WasteReport, 
  CollectionSchedule, 
  WasteRecord, 
  NotificationItem,
  ComplaintStatus 
} from './types';
import { LabRecordDocView } from './components/LabRecordDocView';
import { InteractivePrototype } from './components/InteractivePrototype';
import { DiagramGallery } from './components/DiagramGallery';
import { DatabaseViewer } from './components/DatabaseViewer';
import { CodeViewer } from './components/CodeViewer';
import { RenderDeployModal } from './components/RenderDeployModal';
import { generatePdf, exportToWordDocument } from './utils/pdfExport';

export default function App() {
  const [activeTab, setActiveTab] = useState<'manual' | 'prototype' | 'diagrams' | 'database' | 'code'>('manual');
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);
  const [isWordExported, setIsWordExported] = useState(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  // Auto-download listener for direct download query param
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const search = window.location.search;
      if (search.includes('download=pdf') || search.includes('download=true')) {
        handleGlobalDownloadPdf();
      }
    }
  }, []);

  const handleGlobalDownloadPdf = () => {
    setIsDownloadingPdf(true);
    // Instant direct download of the pre-rendered 11-page Lab Record PDF
    const link = document.createElement('a');
    link.href = '/Smart_Waste_Management_System_Lab_Record.pdf';
    link.download = 'Smart_Waste_Management_System_Lab_Record.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloadingPdf(false);
      setPdfDownloaded(true);
      setTimeout(() => setPdfDownloaded(false), 4000);
    }, 600);
  };

  const handleGlobalExportWord = () => {
    exportToWordDocument('word-document-root', 'Smart_Waste_Management_System_Lab_Record.doc');
    setIsWordExported(true);
    setTimeout(() => setIsWordExported(false), 3000);
  };

  // Application State
  const [citizens, setCitizens] = useState<Citizen[]>(INITIAL_CITIZENS);
  const [collectors, setCollectors] = useState<WasteCollector[]>(INITIAL_COLLECTORS);
  const [admins, setAdmins] = useState<Administrator[]>(INITIAL_ADMINS);
  const [bins, setBins] = useState<SmartBin[]>(INITIAL_BINS);
  const [reports, setReports] = useState<WasteReport[]>(INITIAL_REPORTS);
  const [schedules, setSchedules] = useState<CollectionSchedule[]>(INITIAL_SCHEDULES);
  const [records, setRecords] = useState<WasteRecord[]>(INITIAL_RECORDS);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

  // Add new complaint
  const handleAddReport = (newRepData: Partial<WasteReport>) => {
    const reportId = `REP-2026-00${reports.length + 1}`;
    const newReport: WasteReport = {
      reportId,
      citizenId: newRepData.citizenId || 'CIT-101',
      citizenName: newRepData.citizenName || 'Anitha Raman',
      binId: newRepData.binId || 'BIN-101',
      location: newRepData.location || 'Ward 12 Main Road',
      wardNo: newRepData.wardNo || 12,
      wasteType: newRepData.wasteType || 'Mixed Waste',
      description: newRepData.description || 'Reported via Citizen Portal',
      severity: newRepData.severity || 'Medium',
      status: 'Reported',
      reportedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      photoUrl: newRepData.photoUrl
    };

    setReports([newReport, ...reports]);

    // Push notification for Admin
    const notif: NotificationItem = {
      id: `NOTIF-${Date.now()}`,
      recipientId: 'ADM-301',
      recipientRole: 'admin',
      title: 'New Citizen Waste Complaint',
      message: `Ticket ${reportId} filed at ${newReport.location} (${newReport.severity}).`,
      timestamp: 'Just now',
      type: 'alert',
      read: false
    };
    setNotifications([notif, ...notifications]);
  };

  // Update complaint status
  const handleUpdateReportStatus = (
    reportId: string, 
    status: ComplaintStatus, 
    collectorId?: string, 
    collectorName?: string
  ) => {
    setReports(reports.map((r) => {
      if (r.reportId === reportId) {
        return {
          ...r,
          status,
          assignedCollectorId: collectorId || r.assignedCollectorId,
          assignedCollectorName: collectorName || r.assignedCollectorName,
          verifiedAt: status === 'Verified' ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : r.verifiedAt,
          resolvedAt: status === 'Resolved' ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : r.resolvedAt,
          adminRemarks: collectorName ? `Assigned to ${collectorName}.` : r.adminRemarks
        };
      }
      return r;
    }));

    const notif: NotificationItem = {
      id: `NOTIF-${Date.now()}`,
      recipientId: 'CIT-101',
      recipientRole: 'citizen',
      title: `Complaint Status Updated: ${status}`,
      message: `Your waste report ${reportId} is now marked as '${status}'.`,
      timestamp: 'Just now',
      type: 'info',
      read: false
    };
    setNotifications([notif, ...notifications]);
  };

  // Update bin fill level (IoT Simulation)
  const handleUpdateBinFill = (binId: string, newFill: number) => {
    setBins(bins.map((b) => {
      if (b.binId === binId) {
        const isCrit = newFill >= 80;
        return {
          ...b,
          fillLevelPercent: newFill,
          status: isCrit ? 'Critical (Alert)' : newFill >= 50 ? 'Medium' : 'Normal',
          lastUpdated: 'Just now'
        };
      }
      return b;
    }));

    if (newFill >= 80) {
      const notif: NotificationItem = {
        id: `NOTIF-${Date.now()}`,
        recipientId: 'ADM-301',
        recipientRole: 'admin',
        title: '⚠️ Critical Ultrasonic Fill Alert',
        message: `Smart Bin ${binId} reached ${newFill}% threshold! Auto-dispatch triggered.`,
        timestamp: 'Just now',
        type: 'alert',
        read: false
      };
      setNotifications([notif, ...notifications]);
    }
  };

  // Collector empties bin
  const handleCollectWaste = (
    binId: string, 
    reportId?: string, 
    wetKg: number = 45, 
    dryKg: number = 20, 
    hazKg: number = 2
  ) => {
    // Reset bin fill
    setBins(bins.map((b) => b.binId === binId ? { ...b, fillLevelPercent: 0, status: 'Normal', lastUpdated: 'Just now' } : b));

    // If report attached, mark Collected
    if (reportId) {
      setReports(reports.map((r) => r.reportId === reportId ? { ...r, status: 'Collected' } : r));
    }

    // Add waste audit record
    const newRec: WasteRecord = {
      recordId: `REC-${900 + records.length + 1}`,
      scheduleId: 'SCH-801',
      collectorId: 'COL-201',
      binId,
      collectedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      wetWasteKg: wetKg,
      dryWasteKg: dryKg,
      hazardousKg: hazKg,
      status: 'Processed'
    };
    setRecords([newRec, ...records]);

    const notif: NotificationItem = {
      id: `NOTIF-${Date.now()}`,
      recipientId: 'CIT-101',
      recipientRole: 'citizen',
      title: 'Waste Collected & Area Cleaned',
      message: `Bin ${binId} has been emptied and segregated (${wetKg + dryKg + hazKg} kg total).`,
      timestamp: 'Just now',
      type: 'info',
      read: false
    };
    setNotifications([notif, ...notifications]);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col">
      {/* Top Academic Header Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 print:hidden shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  CS1508 OOAD LAB
                </span>
                <span className="text-xs text-slate-500 font-medium">Academic Year 2026-2027</span>
              </div>
              <h1 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                Smart Waste Management System
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-100 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('manual')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                activeTab === 'manual'
                  ? 'bg-white text-emerald-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Lab Record (Word / PDF)</span>
            </button>

            <button
              onClick={() => setActiveTab('prototype')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                activeTab === 'prototype'
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <PlayCircle className="w-4 h-4" />
              <span>Interactive Prototype</span>
            </button>

            <button
              onClick={() => setActiveTab('diagrams')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                activeTab === 'diagrams'
                  ? 'bg-white text-purple-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>All 8 UML Diagrams</span>
            </button>

            <button
              onClick={() => setActiveTab('database')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                activeTab === 'database'
                  ? 'bg-white text-amber-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Database Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                activeTab === 'code'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>Source Code</span>
            </button>
          </nav>
          {/* Direct Download Action in Header */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleGlobalDownloadPdf}
              disabled={isDownloadingPdf}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-[#185abd] hover:bg-[#104791] text-white rounded-lg text-xs font-bold shadow-xs transition-all cursor-pointer disabled:opacity-60"
              title="Download clean multi-page PDF formatted like Microsoft Word"
            >
              {isDownloadingPdf ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : pdfDownloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>PDF Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
            <button
              onClick={handleGlobalExportWord}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer"
              title="Export as Microsoft Word (.doc) document"
            >
              {isWordExported ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Word Ready!</span>
                </>
              ) : (
                <>
                  <FileText className="w-3.5 h-3.5 text-blue-300" />
                  <span>Word (.doc)</span>
                </>
              )}
            </button>
            <button
              onClick={() => setIsDeployModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs transition-all cursor-pointer"
              title="Render.com Deployment Configuration & Instructions"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Deploy to Render</span>
            </button>
          </div>
        </div>
      </header>

      {/* Prominent Quick PDF Download Banner */}
      <div className="w-full bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white border-b border-blue-800/80 py-2.5 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-blue-500/20 text-blue-300 rounded-md border border-blue-400/30">
              <FileText className="w-4 h-4" />
            </span>
            <p className="text-xs sm:text-sm font-medium">
              <span className="font-bold text-white">Lab Record PDF Ready:</span> Complete 11-page formatted lab record with all 8 UML diagrams, source code screenshots &amp; rubric.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDeployModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 text-xs font-bold rounded-lg transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Render Deploy Info</span>
            </button>
            <a
              href="/Smart_Waste_Management_System_Lab_Record.pdf"
              download="Smart_Waste_Management_System_Lab_Record.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-lg shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Direct PDF Download</span>
            </a>
            <a
              href="/Smart_Waste_Management_System_Lab_Record.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-blue-100 text-xs rounded-lg transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View PDF in Tab</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col items-center">
        {/* Lab Record Doc View is kept in DOM so PDF export is always available immediately */}
        <div className={`w-full ${activeTab === 'manual' ? 'block' : 'hidden'}`}>
          <LabRecordDocView onOpenPrototype={() => setActiveTab('prototype')} />
        </div>

        {activeTab === 'prototype' && (
          <InteractivePrototype
            citizens={citizens}
            collectors={collectors}
            admins={admins}
            bins={bins}
            reports={reports}
            schedules={schedules}
            records={records}
            notifications={notifications}
            onAddReport={handleAddReport}
            onUpdateReportStatus={handleUpdateReportStatus}
            onUpdateBinFill={handleUpdateBinFill}
            onCollectWaste={handleCollectWaste}
          />
        )}

        {activeTab === 'diagrams' && <DiagramGallery />}

        {activeTab === 'database' && (
          <DatabaseViewer
            citizens={citizens}
            collectors={collectors}
            admins={admins}
            bins={bins}
            reports={reports}
            schedules={schedules}
            records={records}
          />
        )}

        {activeTab === 'code' && <CodeViewer />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500 print:hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-slate-400" />
            <span>Anna University Curriculum • CS1508 Object Oriented Analysis and Design Laboratory</span>
          </div>
          <span>Ex No: Smart Waste Management System • UML 2.5 OMG Compliant</span>
        </div>
      </footer>

      {/* Persistent Floating Quick Download Widget */}
      <aside aria-label="Quick actions" className="fixed bottom-6 right-6 z-40 print:hidden flex flex-col items-end gap-2">
        <button
          onClick={handleGlobalDownloadPdf}
          disabled={isDownloadingPdf}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#185abd] hover:bg-[#104791] text-white rounded-full font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-60 border-2 border-white/20"
          title="Download complete 11-page Lab Record PDF"
        >
          {isDownloadingPdf ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Generating PDF...</span>
            </>
          ) : pdfDownloaded ? (
            <>
              <Check className="w-5 h-5 text-emerald-300" />
              <span>Downloaded!</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download PDF (11 Pages)</span>
            </>
          )}
        </button>
      </aside>

      {/* Render Deployment Modal */}
      <RenderDeployModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
