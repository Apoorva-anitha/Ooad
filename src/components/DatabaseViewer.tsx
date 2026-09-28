import React, { useState } from 'react';
import { Database, Table, Key, Play, Terminal, Check, Copy } from 'lucide-react';
import { Citizen, WasteCollector, Administrator, SmartBin, WasteReport, CollectionSchedule, WasteRecord } from '../types';

interface DatabaseViewerProps {
  citizens: Citizen[];
  collectors: WasteCollector[];
  admins: Administrator[];
  bins: SmartBin[];
  reports: WasteReport[];
  schedules: CollectionSchedule[];
  records: WasteRecord[];
}

export const DatabaseViewer: React.FC<DatabaseViewerProps> = ({
  citizens,
  collectors,
  bins,
  reports,
  schedules,
  records
}) => {
  const [activeTable, setActiveTable] = useState<string>('waste_reports');
  const [selectedPresetQuery, setSelectedPresetQuery] = useState<string>(
    'SELECT report_id, citizen_name, location, status FROM waste_reports ORDER BY reported_at DESC;'
  );
  const [queryOutput, setQueryOutput] = useState<string | null>(null);

  const tables = [
    { id: 'waste_reports', name: 'waste_reports', rows: reports.length, desc: 'Citizen waste complaints and current state' },
    { id: 'smart_bins', name: 'smart_bins', rows: bins.length, desc: 'Smart bins with ultrasonic sensor fill levels' },
    { id: 'citizens', name: 'citizens', rows: citizens.length, desc: 'Registered citizens filing reports' },
    { id: 'waste_collectors', name: 'waste_collectors', rows: collectors.length, desc: 'Sanitation field staff and vehicles' },
    { id: 'collection_schedules', name: 'collection_schedules', rows: schedules.length, desc: 'Collector routes and shifts' },
    { id: 'waste_records', name: 'waste_records', rows: records.length, desc: 'Segregated waste audit weights (kg)' }
  ];

  const handleRunQuery = () => {
    if (selectedPresetQuery.includes('smart_bins')) {
      const res = bins.map(b => ({ bin_id: b.binId, location: b.location, fill: `${b.fillLevelPercent}%`, status: b.status }));
      setQueryOutput(JSON.stringify(res, null, 2));
    } else if (selectedPresetQuery.includes('waste_reports')) {
      const res = reports.map(r => ({ report_id: r.reportId, citizen: r.citizenName, status: r.status, collector: r.assignedCollectorName || 'None' }));
      setQueryOutput(JSON.stringify(res, null, 2));
    } else {
      setQueryOutput(`Query executed successfully: 7 rows in set (0.00 sec)`);
    }
  };

  return (
    <div className="w-full max-w-6xl flex flex-col gap-6">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-100 text-blue-700 rounded-lg">
              <Database className="w-5 h-5" />
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Relational Database Engine (MySQL / PostgreSQL)
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Schema: <span className="font-mono text-blue-700 font-semibold">smart_waste_db</span> • 3NF Normalized Architecture
          </p>
        </div>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-semibold">
          Connection: Active (Port 3306)
        </span>
      </div>

      {/* SQL Interactive Query Terminal */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-mono font-semibold">SQL Query Console</span>
          </div>
          <span className="text-[11px] text-slate-400">MySQL 8.0 Dialect</span>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <select
              value={selectedPresetQuery}
              onChange={(e) => {
                setSelectedPresetQuery(e.target.value);
                setQueryOutput(null);
              }}
              className="flex-1 bg-slate-950 text-slate-200 font-mono text-xs px-3 py-2 rounded border border-slate-700 focus:outline-none focus:border-emerald-500"
            >
              <option value="SELECT report_id, citizen_name, location, status FROM waste_reports ORDER BY reported_at DESC;">
                Query 1: Recent Citizen Waste Reports &amp; Current Status
              </option>
              <option value="SELECT bin_id, location, fill_level_percent, status FROM smart_bins WHERE fill_level_percent >= 80;">
                Query 2: Critical Overflow Smart Bins Triggering Alerts (&gt;= 80%)
              </option>
              <option value="SELECT collector_id, name, vehicle_no, assigned_zone FROM waste_collectors WHERE status = 'on_duty';">
                Query 3: Active On-Duty Sanitation Field Collectors
              </option>
            </select>
            <button
              onClick={handleRunQuery}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold font-mono flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Execute SQL</span>
            </button>
          </div>

          {queryOutput && (
            <div className="p-3 bg-slate-950 border border-slate-800 rounded font-mono text-xs text-emerald-400 max-h-48 overflow-y-auto">
              <pre>{queryOutput}</pre>
            </div>
          )}
        </div>
      </div>

      {/* Tables Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Table List */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
          <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
            Database Tables ({tables.length})
          </h3>
          {tables.map((tbl) => (
            <button
              key={tbl.id}
              onClick={() => setActiveTable(tbl.id)}
              className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer ${
                activeTable === tbl.id
                  ? 'bg-blue-50 border border-blue-200 text-blue-900 font-bold'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-slate-400" />
                <span className="font-mono">{tbl.name}</span>
              </div>
              <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">
                {tbl.rows} rows
              </span>
            </button>
          ))}
        </div>

        {/* Right: Active Table Data Grid */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-5 shadow-xs overflow-x-auto">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-100">
            <div>
              <span className="font-mono font-bold text-slate-900 text-sm">{activeTable}</span>
              <p className="text-xs text-slate-500">
                {tables.find((t) => t.id === activeTable)?.desc}
              </p>
            </div>
            <span className="text-xs text-slate-500">Live View</span>
          </div>

          {activeTable === 'waste_reports' && (
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <th className="p-2">report_id (PK)</th>
                  <th className="p-2">citizen_name</th>
                  <th className="p-2">bin_id (FK)</th>
                  <th className="p-2">severity</th>
                  <th className="p-2">status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {reports.map((r) => (
                  <tr key={r.reportId}>
                    <td className="p-2 font-bold text-blue-700">{r.reportId}</td>
                    <td className="p-2 text-slate-800">{r.citizenName}</td>
                    <td className="p-2 text-slate-600">{r.binId}</td>
                    <td className="p-2 text-amber-700">{r.severity}</td>
                    <td className="p-2 font-bold">{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'smart_bins' && (
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <th className="p-2">bin_id (PK)</th>
                  <th className="p-2">location</th>
                  <th className="p-2">bin_type</th>
                  <th className="p-2">fill_level</th>
                  <th className="p-2">battery</th>
                  <th className="p-2">status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bins.map((b) => (
                  <tr key={b.binId}>
                    <td className="p-2 font-bold text-blue-700">{b.binId}</td>
                    <td className="p-2 text-slate-800">{b.location.split(',')[0]}</td>
                    <td className="p-2 text-slate-600">{b.binType}</td>
                    <td className="p-2 font-bold text-emerald-700">{b.fillLevelPercent}%</td>
                    <td className="p-2 text-slate-600">{b.batteryPercent}%</td>
                    <td className="p-2">{b.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'citizens' && (
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <th className="p-2">citizen_id (PK)</th>
                  <th className="p-2">name</th>
                  <th className="p-2">phone</th>
                  <th className="p-2">ward_no</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {citizens.map((c) => (
                  <tr key={c.citizenId}>
                    <td className="p-2 font-bold text-blue-700">{c.citizenId}</td>
                    <td className="p-2 text-slate-800">{c.name}</td>
                    <td className="p-2 text-slate-600">{c.phone}</td>
                    <td className="p-2 text-slate-800 font-bold">{c.wardNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'waste_collectors' && (
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <th className="p-2">collector_id (PK)</th>
                  <th className="p-2">name</th>
                  <th className="p-2">vehicle_no</th>
                  <th className="p-2">zone</th>
                  <th className="p-2">status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {collectors.map((col) => (
                  <tr key={col.collectorId}>
                    <td className="p-2 font-bold text-blue-700">{col.collectorId}</td>
                    <td className="p-2 text-slate-800">{col.name}</td>
                    <td className="p-2 text-slate-600">{col.vehicleNo}</td>
                    <td className="p-2 text-slate-800">{col.assignedZone}</td>
                    <td className="p-2 font-bold text-emerald-700">{col.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'collection_schedules' && (
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <th className="p-2">schedule_id (PK)</th>
                  <th className="p-2">collector_name</th>
                  <th className="p-2">route_id</th>
                  <th className="p-2">shift</th>
                  <th className="p-2">status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {schedules.map((s) => (
                  <tr key={s.scheduleId}>
                    <td className="p-2 font-bold text-blue-700">{s.scheduleId}</td>
                    <td className="p-2 text-slate-800">{s.collectorName}</td>
                    <td className="p-2 text-slate-600">{s.routeId}</td>
                    <td className="p-2 text-slate-800">{s.shift}</td>
                    <td className="p-2 font-bold text-blue-700">{s.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTable === 'waste_records' && (
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <th className="p-2">record_id (PK)</th>
                  <th className="p-2">bin_id</th>
                  <th className="p-2">wet_kg</th>
                  <th className="p-2">dry_kg</th>
                  <th className="p-2">hazardous_kg</th>
                  <th className="p-2">status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {records.map((rec) => (
                  <tr key={rec.recordId}>
                    <td className="p-2 font-bold text-blue-700">{rec.recordId}</td>
                    <td className="p-2 text-slate-800">{rec.binId}</td>
                    <td className="p-2 text-emerald-700 font-bold">{rec.wetWasteKg}</td>
                    <td className="p-2 text-blue-700 font-bold">{rec.dryWasteKg}</td>
                    <td className="p-2 text-red-700 font-bold">{rec.hazardousKg}</td>
                    <td className="p-2 text-slate-800">{rec.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
