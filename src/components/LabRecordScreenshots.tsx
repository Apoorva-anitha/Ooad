import React from 'react';
import { 
  Globe, 
  Lock, 
  Terminal, 
  Database, 
  CheckCircle2, 
  AlertTriangle, 
  Truck, 
  MapPin, 
  Minus, 
  Square, 
  X, 
  Play, 
  Check, 
  Camera,
  Layers,
  ArrowRight
} from 'lucide-react';

/**
 * Figure 9: VS Code IDE Screenshot for Python Flask Backend
 */
export const VsCodePythonScreenshot: React.FC = () => {
  return (
    <div className="w-full bg-[#1e1e1e] text-slate-200 rounded-md overflow-hidden border border-slate-700 shadow-md font-mono text-[8.5pt]">
      {/* OS Title Bar */}
      <div className="bg-[#323233] px-3 py-1.5 flex items-center justify-between border-b border-black/40 select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block"></span>
          </div>
          <span className="text-slate-400 text-[8pt] ml-2">app.py — Smart Waste Management — Visual Studio Code</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[8pt]">
          <Minus className="w-3 h-3" />
          <Square className="w-2.5 h-2.5" />
          <X className="w-3 h-3" />
        </div>
      </div>

      {/* Editor Tabs */}
      <div className="bg-[#252526] flex items-center border-b border-black/30 text-[8pt]">
        <div className="bg-[#1e1e1e] px-3 py-1 text-slate-200 border-t-2 border-[#007acc] flex items-center gap-1.5">
          <span className="text-amber-400 text-[9pt]">🐍</span>
          <span>app.py</span>
          <X className="w-2.5 h-2.5 text-slate-400 ml-1" />
        </div>
        <div className="px-3 py-1 text-slate-400 flex items-center gap-1.5 bg-[#2d2d2d]">
          <span className="text-blue-400 text-[9pt]">🗄️</span>
          <span>schema.sql</span>
        </div>
        <div className="px-3 py-1 text-slate-400 flex items-center gap-1.5">
          <span className="text-emerald-400 text-[9pt]">⚙️</span>
          <span>iot_telemetry.py</span>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#1e1e1e] px-3 py-0.5 text-[7.5pt] text-slate-400 border-b border-slate-800 flex items-center gap-1">
        <span>smart_waste</span>
        <span>&gt;</span>
        <span>controllers</span>
        <span>&gt;</span>
        <span className="text-slate-200">app.py</span>
      </div>

      {/* Code Text with Line Numbers */}
      <div className="p-3 bg-[#1e1e1e] leading-relaxed select-text overflow-hidden text-[8pt]">
        <div className="flex">
          <div className="text-slate-600 select-none pr-3 text-right w-6 shrink-0">
            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13
          </div>
          <div className="text-slate-200 font-mono">
            <div><span className="text-[#569cd6]">import</span> os, json, datetime</div>
            <div><span className="text-[#569cd6]">from</span> flask <span className="text-[#569cd6]">import</span> Flask, request, jsonify</div>
            <div><span className="text-[#569cd6]">from</span> models <span className="text-[#569cd6]">import</span> SmartBin, WasteReport, NotificationService</div>
            <div>app = Flask(__name__)</div>
            <div className="mt-1"><span className="text-[#dcdcaa]">@app.route</span>(<span className="text-[#ce9178]">&apos;/api/waste_report/submit&apos;</span>, methods=[<span className="text-[#ce9178]">&apos;POST&apos;</span>])</div>
            <div><span className="text-[#569cd6]">def</span> <span className="text-[#dcdcaa]">submit_report</span>():</div>
            <div className="pl-4">payload = request.get_json()</div>
            <div className="pl-4">report = WasteReport.create(citizen=payload[<span className="text-[#ce9178]">&apos;citizen_id&apos;</span>], bin_id=payload[<span className="text-[#ce9178]">&apos;bin_id&apos;</span>])</div>
            <div className="pl-4"><span className="text-[#569cd6]">if</span> SmartBin.get(payload[<span className="text-[#ce9178]">&apos;bin_id&apos;</span>]).fill_percent &gt;= <span className="text-[#b5cea8]">80.0</span>:</div>
            <div className="pl-8">NotificationService.dispatch_collector(report.bin_id, priority=<span className="text-[#ce9178]">&apos;HIGH&apos;</span>)</div>
            <div className="pl-4"><span className="text-[#569cd6]">return</span> jsonify(&#123;<span className="text-[#ce9178]">&apos;status&apos;</span>: <span className="text-[#ce9178]">&apos;SUCCESS&apos;</span>, <span className="text-[#ce9178]">&apos;report_id&apos;</span>: report.id&#125;), <span className="text-[#b5cea8]">201</span></div>
          </div>
        </div>
      </div>

      {/* Embedded Terminal Output Screen */}
      <div className="border-t border-slate-700 bg-[#181818] p-2.5">
        <div className="flex items-center justify-between text-[7.5pt] text-slate-400 mb-1 border-b border-slate-800 pb-1">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span className="font-bold text-slate-200">TERMINAL</span>
            <span>bash (venv)</span>
          </div>
          <span className="text-emerald-400">● Live Execution</span>
        </div>
        <div className="text-[7.5pt] text-slate-300 font-mono space-y-0.5">
          <div className="text-slate-400">$ python app.py</div>
          <div className="text-emerald-400">* Serving Flask app 'app' (Lazy loading)</div>
          <div>* Environment: production • Debug mode: off</div>
          <div>* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)</div>
          <div className="text-blue-300">[2026-09-13 10:14:02] "POST /api/waste_report/submit HTTP/1.1" 201 CREATED - REP-2026-001</div>
          <div className="text-amber-300">[2026-09-13 10:14:15] "POST /api/bins/telemetry HTTP/1.1" 200 OK - BIN-101: 92% (ALERT SENT)</div>
        </div>
      </div>
    </div>
  );
};

/**
 * Figure 10: MySQL Workbench / Database Client Screenshot
 */
export const MysqlWorkbenchScreenshot: React.FC = () => {
  return (
    <div className="w-full bg-white text-slate-900 rounded-md overflow-hidden border border-slate-400 shadow-md font-sans text-[8.5pt]">
      {/* Workbench Header */}
      <div className="bg-slate-200 px-3 py-1.5 flex items-center justify-between border-b border-slate-300 select-none">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-blue-700" />
          <span className="font-bold text-slate-800 text-[8pt]">MySQL Workbench 8.0 CE — localhost:3306 [smart_waste_db]</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
          <Minus className="w-3 h-3" />
          <Square className="w-2.5 h-2.5" />
          <X className="w-3 h-3" />
        </div>
      </div>

      {/* SQL Query Toolbar */}
      <div className="bg-slate-100 px-3 py-1 border-b border-slate-300 flex items-center justify-between text-[8pt]">
        <div className="flex items-center gap-3">
          <span className="bg-white px-2 py-0.5 border border-slate-300 font-mono font-bold text-blue-800 flex items-center gap-1">
            <Play className="w-2.5 h-2.5 text-emerald-600 fill-emerald-600" />
            <span>Query 1.sql</span>
          </span>
          <span className="text-slate-600 font-mono text-[7.5pt]">Database: smart_waste_db</span>
        </div>
        <span className="text-emerald-700 font-medium text-[7.5pt]">● Connected (root)</span>
      </div>

      {/* SQL Editor Area */}
      <div className="p-2.5 bg-slate-50 font-mono text-[8pt] border-b border-slate-300 leading-snug">
        <div className="text-blue-900 font-bold">
          SELECT <span className="text-slate-700 font-normal">b.bin_id, b.location_name, b.fill_percent, b.status, c.collector_name</span>
        </div>
        <div className="text-blue-900 font-bold">
          FROM <span className="text-slate-700 font-normal">smart_bins b</span>
        </div>
        <div className="text-blue-900 font-bold">
          JOIN <span className="text-slate-700 font-normal">collectors c ON b.collector_id = c.collector_id</span>
        </div>
        <div className="text-blue-900 font-bold">
          WHERE <span className="text-slate-700 font-normal">b.fill_percent &gt;= 80.00;</span>
        </div>
      </div>

      {/* Result Grid */}
      <div className="p-2 bg-white">
        <div className="text-[7.5pt] font-bold text-slate-700 mb-1 flex items-center justify-between">
          <span>Result Grid (2 rows returned in 0.0018 sec)</span>
          <span className="text-slate-500 font-mono text-[7pt]">Export: CSV | JSON</span>
        </div>
        <table className="w-full border-collapse border border-slate-300 font-mono text-[7.5pt]">
          <thead>
            <tr className="bg-slate-100 text-slate-800 text-left">
              <th className="border border-slate-300 px-2 py-0.5">bin_id</th>
              <th className="border border-slate-300 px-2 py-0.5">location_name</th>
              <th className="border border-slate-300 px-2 py-0.5">fill_percent</th>
              <th className="border border-slate-300 px-2 py-0.5">status</th>
              <th className="border border-slate-300 px-2 py-0.5">collector_name</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-50">
              <td className="border border-slate-300 px-2 py-0.5 font-bold text-blue-900">BIN-101</td>
              <td className="border border-slate-300 px-2 py-0.5">Central Bus Stand, Bay 4</td>
              <td className="border border-slate-300 px-2 py-0.5 text-red-700 font-bold">92.00 %</td>
              <td className="border border-slate-300 px-2 py-0.5 font-bold text-red-700">CRITICAL</td>
              <td className="border border-slate-300 px-2 py-0.5">Ramesh Kumar (TN-09)</td>
            </tr>
            <tr className="hover:bg-blue-50">
              <td className="border border-slate-300 px-2 py-0.5 font-bold text-blue-900">BIN-102</td>
              <td className="border border-slate-300 px-2 py-0.5">Commercial Market Complex</td>
              <td className="border border-slate-300 px-2 py-0.5 text-red-700 font-bold">84.00 %</td>
              <td className="border border-slate-300 px-2 py-0.5 font-bold text-red-700">CRITICAL</td>
              <td className="border border-slate-300 px-2 py-0.5">Suresh Babu (TN-09)</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-1 flex items-center justify-between text-[7pt] text-slate-500">
          <span>Action Output: 1 Query executed successfully.</span>
          <span className="text-emerald-700 font-semibold">✓ 2 records fetched</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Figure 11: Output Screen 1 - Citizen Portal Web App Screenshot
 */
export const CitizenPortalScreenshot: React.FC = () => {
  return (
    <div className="w-full bg-slate-100 rounded-md overflow-hidden border border-slate-400 shadow-md font-sans text-[8.5pt]">
      {/* Browser Chrome Window Bar */}
      <div className="bg-slate-200 px-3 py-1.5 flex items-center gap-2 border-b border-slate-300">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
        </div>
        <div className="flex-1 bg-white px-2.5 py-0.5 rounded border border-slate-300 flex items-center gap-1.5 text-[7.5pt] text-slate-700">
          <Lock className="w-2.5 h-2.5 text-emerald-600" />
          <span>https://smartwaste.corp.gov.in/citizen/report_waste</span>
        </div>
      </div>

      {/* Web App Body */}
      <div className="p-3 bg-white">
        {/* App Navbar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-[8pt]">
              ♻
            </div>
            <div>
              <div className="font-bold text-slate-900 text-[8.5pt]">Smart Waste Portal • Citizen Services</div>
              <div className="text-[7pt] text-slate-500">Municipal Solid Waste Monitoring Wing</div>
            </div>
          </div>
          <div className="text-right">
            <span className="bg-emerald-100 text-emerald-800 text-[7pt] px-2 py-0.5 rounded font-medium">Citizen: Anitha Raman (Ward 12)</span>
          </div>
        </div>

        {/* Complaint Confirmation Card */}
        <div className="border border-emerald-300 bg-emerald-50/50 rounded p-2.5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-bold text-slate-900 text-[8.5pt]">Complaint Reference: #REP-2026-001</span>
            </div>
            <span className="bg-emerald-600 text-white font-bold text-[7pt] px-2 py-0.5 rounded">STATUS: RESOLVED</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[7.5pt] bg-white p-2 rounded border border-slate-200">
            <div>
              <span className="text-slate-500 block">Location Landmark:</span>
              <span className="font-semibold text-slate-800">Central Bus Stand, Platform 4</span>
            </div>
            <div>
              <span className="text-slate-500 block">Category & Severity:</span>
              <span className="font-semibold text-slate-800">Mixed Commercial • Critical Overflow</span>
            </div>
            <div>
              <span className="text-slate-500 block">GPS Coordinates:</span>
              <span className="font-mono text-slate-800">13.0827° N, 80.2707° E</span>
            </div>
            <div>
              <span className="text-slate-500 block">Assigned Collector:</span>
              <span className="font-semibold text-emerald-700">Ramesh Kumar (Truck TN-09-CW-4521)</span>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="mt-2 pt-1 border-t border-emerald-200 flex items-center justify-between text-[7pt] text-slate-600">
            <span className="text-emerald-700 font-bold">1. Reported (10:14 AM) ✓</span>
            <span className="text-slate-400">→</span>
            <span className="text-emerald-700 font-bold">2. Verified (10:18 AM) ✓</span>
            <span className="text-slate-400">→</span>
            <span className="text-emerald-700 font-bold">3. Truck Cleared (10:45 AM) ✓</span>
            <span className="text-slate-400">→</span>
            <span className="text-emerald-800 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">4. Verified & Closed ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Figure 12: Output Screen 2 - Municipal Admin Monitoring Dashboard Screenshot
 */
export const AdminDashboardScreenshot: React.FC = () => {
  return (
    <div className="w-full bg-slate-100 rounded-md overflow-hidden border border-slate-400 shadow-md font-sans text-[8.5pt]">
      {/* Browser Chrome Window Bar */}
      <div className="bg-slate-200 px-3 py-1 flex items-center gap-2 border-b border-slate-300">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
        </div>
        <div className="flex-1 bg-white px-2 py-0.5 rounded border border-slate-300 text-[7pt] text-slate-700 flex items-center gap-1">
          <Lock className="w-2.5 h-2.5 text-blue-600" />
          <span>https://smartwaste.corp.gov.in/admin/dashboard</span>
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="p-2.5 bg-slate-50">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
          <span className="font-bold text-slate-900 text-[8pt]">Municipal Command & Control Dashboard</span>
          <span className="bg-blue-100 text-blue-800 text-[6.5pt] font-semibold px-1.5 py-0.5 rounded">Admin: Dr. K. Raman</span>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-1.5 mb-2 text-center">
          <div className="bg-white p-1.5 rounded border border-slate-200">
            <div className="text-[6.5pt] text-slate-500 font-medium">Smart Bins</div>
            <div className="text-[9pt] font-bold text-slate-900">6 Online</div>
          </div>
          <div className="bg-white p-1.5 rounded border border-red-200 bg-red-50/50">
            <div className="text-[6.5pt] text-red-600 font-medium">Critical (&gt;80%)</div>
            <div className="text-[9pt] font-bold text-red-700">2 Alerting</div>
          </div>
          <div className="bg-white p-1.5 rounded border border-emerald-200 bg-emerald-50/50">
            <div className="text-[6.5pt] text-emerald-600 font-medium">Waste Collected</div>
            <div className="text-[9pt] font-bold text-emerald-700">142.0 kg</div>
          </div>
        </div>

        {/* IoT Live Fill Bars */}
        <div className="bg-white p-2 rounded border border-slate-200 space-y-1.5 text-[7pt]">
          <div>
            <div className="flex justify-between font-semibold mb-0.5">
              <span>BIN-101 (Bus Stand)</span>
              <span className="text-red-600 font-bold">92% • CRITICAL</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-red-600 h-full w-[92%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between font-semibold mb-0.5">
              <span>BIN-102 (Market Complex)</span>
              <span className="text-red-600 font-bold">84% • CRITICAL</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-red-500 h-full w-[84%]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between font-semibold mb-0.5">
              <span>BIN-103 (Railway Station)</span>
              <span className="text-emerald-600 font-bold">45% • NORMAL</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Figure 13: Output Screen 3 - Waste Collector Task & Weighbridge Clearance Screenshot
 */
export const CollectorTaskScreenshot: React.FC = () => {
  return (
    <div className="w-full bg-slate-100 rounded-md overflow-hidden border border-slate-400 shadow-md font-sans text-[8.5pt]">
      {/* Mobile/Tablet Bar */}
      <div className="bg-slate-800 text-white px-3 py-1 flex items-center justify-between text-[7.5pt]">
        <div className="flex items-center gap-1.5 font-bold">
          <Truck className="w-3 h-3 text-amber-400" />
          <span>Collector Route App • TN-09-CW-4521</span>
        </div>
        <span className="text-emerald-400 font-mono text-[7pt]">GPS ACTIVE</span>
      </div>

      {/* Collector Task Body */}
      <div className="p-2.5 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1 mb-2">
          <span className="font-bold text-slate-800 text-[8pt]">Assigned Route: Ward 12 Circuit</span>
          <span className="text-[7pt] text-slate-600">Driver: Ramesh Kumar</span>
        </div>

        {/* Task Items */}
        <div className="space-y-1.5 text-[7pt] mb-2">
          <div className="p-1.5 rounded border border-emerald-300 bg-emerald-50 flex items-center justify-between">
            <div>
              <span className="font-bold text-slate-800 block">1. Bin BIN-101 (Bus Stand)</span>
              <span className="text-slate-500">Lifted 10:45 AM • 92% emptied</span>
            </div>
            <span className="bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded text-[6.5pt]">CLEARED ✓</span>
          </div>

          <div className="p-1.5 rounded border border-blue-300 bg-blue-50 flex items-center justify-between">
            <div>
              <span className="font-bold text-slate-800 block">2. Municipal Weighbridge Slip</span>
              <span className="text-slate-700 font-mono">Gross: 4,280 kg | Net: 142.0 kg</span>
            </div>
            <span className="bg-blue-700 text-white font-bold px-1.5 py-0.5 rounded text-[6.5pt]">WEIGHED ✓</span>
          </div>
        </div>

        {/* Clearance Confirmation */}
        <div className="bg-slate-50 p-1.5 rounded border border-slate-200 flex items-center justify-between text-[7pt]">
          <span className="text-slate-600">Verification Hash: <strong>#8F4B92C</strong></span>
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <Check className="w-3 h-3" /> Area Sanitized
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * Authentic CASE Tool Screenshot Wrapper for UML Diagrams (StarUML 5.0 Style)
 */
export const UmlCaseToolScreenshot: React.FC<{
  title: string;
  fileName: string;
  diagramType: string;
  elementCount?: number;
  children: React.ReactNode;
}> = ({ title, fileName, diagramType, elementCount = 8, children }) => {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 rounded-md overflow-hidden border border-slate-400 shadow-sm font-sans text-[8pt]">
      {/* CASE Tool Window Title Bar */}
      <div className="bg-[#2d3748] text-slate-200 px-3 py-1 flex items-center justify-between select-none border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block border border-black/20"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block border border-black/20"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block border border-black/20"></span>
          </div>
          <span className="font-semibold text-slate-300 text-[8pt] ml-1">
            StarUML 5.0 — [{fileName} : {diagramType}]
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[8pt]">
          <Minus className="w-3 h-3" />
          <Square className="w-2.5 h-2.5" />
          <X className="w-3 h-3" />
        </div>
      </div>

      {/* Menu Bar */}
      <div className="bg-[#edf2f7] px-3 py-0.5 border-b border-slate-300 flex items-center gap-3 text-[7.5pt] text-slate-700 font-medium select-none">
        <span className="hover:bg-slate-300 px-1 py-0.5 rounded cursor-default">File</span>
        <span className="hover:bg-slate-300 px-1 py-0.5 rounded cursor-default">Edit</span>
        <span className="hover:bg-slate-300 px-1 py-0.5 rounded cursor-default">Format</span>
        <span className="hover:bg-slate-300 px-1 py-0.5 rounded cursor-default">Model</span>
        <span className="hover:bg-slate-300 px-1 py-0.5 rounded cursor-default">Tools</span>
        <span className="hover:bg-slate-300 px-1 py-0.5 rounded cursor-default">View</span>
        <span className="hover:bg-slate-300 px-1 py-0.5 rounded cursor-default">Help</span>
      </div>

      {/* Diagram Tab Bar & Quick Tools */}
      <div className="bg-[#e2e8f0] px-2 py-0.5 border-b border-slate-300 flex items-center justify-between text-[7.5pt]">
        <div className="flex items-center">
          <div className="bg-white px-2.5 py-0.5 border-t-2 border-blue-600 border-x border-slate-300 font-bold text-slate-800 flex items-center gap-1.5 shadow-xs">
            <Layers className="w-3 h-3 text-blue-600" />
            <span>{title}</span>
            <X className="w-2.5 h-2.5 text-slate-400 hover:text-slate-700 ml-1" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-600 text-[7pt] font-mono">
          <span className="bg-white px-1.5 py-0.5 rounded border border-slate-300">Tool: Select [S]</span>
          <span className="bg-white px-1.5 py-0.5 rounded border border-slate-300">Zoom: 100%</span>
        </div>
      </div>

      {/* Canvas Area with Graph Paper Background */}
      <div 
        className="w-full bg-white p-2.5 overflow-x-auto flex justify-center relative"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 0.75px, transparent 0.75px)',
          backgroundSize: '16px 16px',
        }}
      >
        <div className="w-full max-w-4xl bg-white/95 rounded border border-slate-300/80 shadow-xs">
          {children}
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-[#edf2f7] px-3 py-1 border-t border-slate-300 flex items-center justify-between text-[7pt] text-slate-600 font-mono select-none">
        <div className="flex items-center gap-3">
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            ● UML Model Validated
          </span>
          <span>Diagram: {diagramType}</span>
          <span>Elements: {elementCount}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Grid: 10px [ON]</span>
          <span>UML 2.5 Standard</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

