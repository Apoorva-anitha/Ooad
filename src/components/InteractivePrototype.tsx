import React, { useState } from 'react';
import { 
  Trash2, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Truck, 
  ShieldCheck, 
  Wifi, 
  Camera, 
  Battery, 
  RefreshCw, 
  Navigation, 
  Scale, 
  Send, 
  Bell,
  ArrowRight,
  Sparkles
} from 'lucide-react';
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
} from '../types';

interface InteractivePrototypeProps {
  citizens: Citizen[];
  collectors: WasteCollector[];
  admins: Administrator[];
  bins: SmartBin[];
  reports: WasteReport[];
  schedules: CollectionSchedule[];
  records: WasteRecord[];
  notifications: NotificationItem[];
  onAddReport: (report: Partial<WasteReport>) => void;
  onUpdateReportStatus: (reportId: string, status: ComplaintStatus, collectorId?: string, collectorName?: string) => void;
  onUpdateBinFill: (binId: string, newFill: number) => void;
  onCollectWaste: (binId: string, reportId?: string, wetKg?: number, dryKg?: number, hazKg?: number) => void;
}

export const InteractivePrototype: React.FC<InteractivePrototypeProps> = ({
  citizens,
  collectors,
  bins,
  reports,
  schedules,
  records,
  notifications,
  onAddReport,
  onUpdateReportStatus,
  onUpdateBinFill,
  onCollectWaste
}) => {
  const [activeRole, setActiveRole] = useState<'citizen' | 'collector' | 'admin' | 'iot'>('citizen');

  // Citizen Form state
  const [citizenWard, setCitizenWard] = useState<number>(12);
  const [citizenLocation, setCitizenLocation] = useState<string>('Near Anna Arch, Ward 12');
  const [citizenWasteType, setCitizenWasteType] = useState<string>('Overflowing Mixed Garbage');
  const [citizenBinId, setCitizenBinId] = useState<string>('BIN-101');
  const [citizenSeverity, setCitizenSeverity] = useState<'Low' | 'Medium' | 'High' | 'Emergency Overflow'>('High');
  const [citizenDesc, setCitizenDesc] = useState<string>('Garbage bin has been overflowing onto pavement since morning hours.');
  const [photoSelected, setPhotoSelected] = useState<string>(
    'https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=400&auto=format&fit=crop&q=60'
  );
  const [formSubmittedToast, setFormSubmittedToast] = useState<string | null>(null);

  // Collector Segregation Modal state
  const [selectedTaskReport, setSelectedTaskReport] = useState<WasteReport | null>(null);
  const [wetWeight, setWetWeight] = useState<number>(45);
  const [dryWeight, setDryWeight] = useState<number>(20);
  const [hazWeight, setHazWeight] = useState<number>(2);

  // Handle Citizen Submit
  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReport({
      citizenId: 'CIT-101',
      citizenName: 'Anitha Raman',
      wardNo: citizenWard,
      location: citizenLocation,
      wasteType: citizenWasteType,
      binId: citizenBinId,
      severity: citizenSeverity,
      description: citizenDesc,
      photoUrl: photoSelected
    });
    setFormSubmittedToast('Waste complaint submitted successfully! Complaint Reference logged in database.');
    setTimeout(() => setFormSubmittedToast(null), 4000);
  };

  const getStatusBadge = (status: ComplaintStatus) => {
    switch (status) {
      case 'Reported':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">Reported</span>;
      case 'Verified':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-200">Verified</span>;
      case 'Assigned':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-200">Assigned</span>;
      case 'Collection in Progress':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 animate-pulse">In Progress</span>;
      case 'Collected':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-teal-100 text-teal-800 border border-teal-200">Collected</span>;
      case 'Resolved':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Resolved</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  return (
    <div className="w-full max-w-6xl flex flex-col gap-6">
      {/* Top Banner / Role Switcher */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
                <Trash2 className="w-5 h-5" />
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Interactive Smart Waste Management Prototype
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Select an actor role below to simulate the end-to-end OOAD lifecycle in real time.
            </p>
          </div>

          {/* Role Navigation Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setActiveRole('citizen')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeRole === 'citizen'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>1. Citizen Portal</span>
            </button>

            <button
              onClick={() => setActiveRole('admin')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeRole === 'admin'
                  ? 'bg-white text-pink-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>2. Municipal Admin</span>
            </button>

            <button
              onClick={() => setActiveRole('collector')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeRole === 'collector'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>3. Waste Collector</span>
            </button>

            <button
              onClick={() => setActiveRole('iot')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeRole === 'iot'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Wifi className="w-4 h-4" />
              <span>4. IoT Sensor Simulator</span>
            </button>
          </div>
        </div>
      </div>

      {/* Notifications Bar */}
      {notifications.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-between text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-semibold">Latest System Alert:</span>
            <span>{notifications[0].title} — {notifications[0].message}</span>
          </div>
          <span className="text-[10px] text-amber-700 font-mono shrink-0 ml-2">{notifications[0].timestamp}</span>
        </div>
      )}

      {/* ========================================================= */}
      {/* 1. CITIZEN VIEW */}
      {/* ========================================================= */}
      {activeRole === 'citizen' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Complaint Reporting Form */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Report Waste / Unclean Spot</h3>
                <p className="text-xs text-slate-500">Citizen: Anitha Raman (Ward 12, Zone 5)</p>
              </div>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded">
                Verified Citizen
              </span>
            </div>

            {formSubmittedToast && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{formSubmittedToast}</span>
              </div>
            )}

            <form onSubmit={handleReportSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Location Landmark &amp; Description
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={citizenLocation}
                    onChange={(e) => setCitizenLocation(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-emerald-500 focus:outline-none"
                    placeholder="e.g. Near Bus Stand 4, Gandhi Road"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Ward Number</label>
                  <select
                    value={citizenWard}
                    onChange={(e) => setCitizenWard(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value={12}>Ward 12 (Central)</option>
                    <option value={13}>Ward 13 (Hospital Area)</option>
                    <option value={14}>Ward 14 (Market Zone)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nearby Smart Bin</label>
                  <select
                    value={citizenBinId}
                    onChange={(e) => setCitizenBinId(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-emerald-500 focus:outline-none"
                  >
                    {bins.map((bin) => (
                      <option key={bin.binId} value={bin.binId}>
                        {bin.binId} ({bin.location.split(',')[0]} - {bin.fillLevelPercent}%)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Waste Type</label>
                  <select
                    value={citizenWasteType}
                    onChange={(e) => setCitizenWasteType(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Overflowing Mixed Garbage">Overflowing Mixed Garbage</option>
                    <option value="Organic Food / Market Waste">Organic Food / Market Waste</option>
                    <option value="Plastic & Cardboard Packing">Plastic &amp; Cardboard Packing</option>
                    <option value="Construction & Demolition Debris">Construction &amp; Demolition Debris</option>
                    <option value="Discarded E-Waste / Hazardous">Discarded E-Waste / Hazardous</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Report Severity</label>
                  <select
                    value={citizenSeverity}
                    onChange={(e) => setCitizenSeverity(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-emerald-500 focus:outline-none font-semibold text-amber-800"
                  >
                    <option value="Low">Low (Minor litter)</option>
                    <option value="Medium">Medium (Bin half-full)</option>
                    <option value="High">High (Spilling on road)</option>
                    <option value="Emergency Overflow">Emergency Overflow (Choking traffic/drain)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description / Remarks</label>
                <textarea
                  rows={2}
                  value={citizenDesc}
                  onChange={(e) => setCitizenDesc(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-emerald-500 focus:outline-none"
                  placeholder="Provide specific directions or hazards..."
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Photo Proof (Simulated Upload)</label>
                <div className="flex items-center gap-3">
                  <img
                    src={photoSelected}
                    alt="Complaint photo preview"
                    className="w-16 h-16 object-cover rounded-lg border border-slate-200"
                  />
                  <div className="text-[11px] text-slate-500 space-y-1">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <Camera className="w-3.5 h-3.5 text-emerald-600" />
                      GPS geo-tag automatically attached: 13.0827° N, 80.2707° E
                    </span>
                    <button
                      type="button"
                      onClick={() => setPhotoSelected('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&auto=format&fit=crop&q=60')}
                      className="text-xs text-emerald-600 hover:underline font-medium cursor-pointer"
                    >
                      Use alternate street photo
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Waste Complaint</span>
              </button>
            </form>
          </div>

          {/* Right Column: Live Complaint Status Tracker & Nearby Bins */}
          <div className="lg:col-span-6 space-y-6">
            {/* Live Complaints List */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                <h3 className="font-bold text-slate-900 text-sm">My Submitted Complaints ({reports.length})</h3>
                <span className="text-[11px] text-slate-500">Live State Tracking</span>
              </div>

              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {reports.map((rep) => (
                  <div key={rep.reportId} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-mono font-bold text-slate-900 text-xs">{rep.reportId}</span>
                        <p className="text-slate-600 font-medium text-[11px] mt-0.5">{rep.location}</p>
                      </div>
                      {getStatusBadge(rep.status)}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-100">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Type / Severity:</span>
                        <span className="font-medium text-slate-800">{rep.wasteType} ({rep.severity})</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Assigned Collector:</span>
                        <span className="font-medium text-slate-800">
                          {rep.assignedCollectorName || 'Pending Allocation'}
                        </span>
                      </div>
                    </div>

                    {/* Step Tracker */}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                      <span className={rep.status !== 'Reported' ? 'text-emerald-600 font-bold' : 'font-bold text-amber-600'}>
                        1. Reported
                      </span>
                      <ArrowRight className="w-3 h-3 text-slate-300" />
                      <span className={['Verified', 'Assigned', 'Collection in Progress', 'Collected', 'Resolved'].includes(rep.status) ? 'text-emerald-600 font-bold' : ''}>
                        2. Verified
                      </span>
                      <ArrowRight className="w-3 h-3 text-slate-300" />
                      <span className={['Assigned', 'Collection in Progress', 'Collected', 'Resolved'].includes(rep.status) ? 'text-emerald-600 font-bold' : ''}>
                        3. Assigned
                      </span>
                      <ArrowRight className="w-3 h-3 text-slate-300" />
                      <span className={['Collected', 'Resolved'].includes(rep.status) ? 'text-emerald-600 font-bold' : ''}>
                        4. Cleaned
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Bins Status */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <h4 className="font-bold text-slate-900 text-xs mb-2">Nearby Smart Bins (Ward 12)</h4>
              <div className="space-y-2">
                {bins.slice(0, 3).map((bin) => (
                  <div key={bin.binId} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg text-xs">
                    <div>
                      <span className="font-mono font-bold text-slate-800">{bin.binId}</span>
                      <span className="text-slate-500 ml-2 text-[11px]">{bin.location.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${bin.fillLevelPercent >= 80 ? 'bg-red-500' : 'bg-emerald-500'}`}
                          style={{ width: `${bin.fillLevelPercent}%` }}
                        ></div>
                      </div>
                      <span className={`text-[11px] font-bold ${bin.fillLevelPercent >= 80 ? 'text-red-600' : 'text-slate-700'}`}>
                        {bin.fillLevelPercent}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. ADMINISTRATOR VIEW */}
      {/* ========================================================= */}
      {activeRole === 'admin' && (
        <div className="space-y-6">
          {/* Admin KPI Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="text-xs text-slate-500">Connected Smart Bins</div>
              <div className="text-xl font-extrabold text-slate-900 mt-1">{bins.length} Nodes</div>
              <div className="text-[11px] text-emerald-600 font-medium mt-1">100% telemetry online</div>
            </div>
            <div className="bg-white border border-red-200 bg-red-50/40 rounded-xl p-4 shadow-xs">
              <div className="text-xs text-red-600 font-semibold">Critical Overflow Bins (&gt;80%)</div>
              <div className="text-xl font-extrabold text-red-700 mt-1">
                {bins.filter((b) => b.fillLevelPercent >= 80).length} Bins
              </div>
              <div className="text-[11px] text-red-600 mt-1">Immediate dispatch needed</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="text-xs text-slate-500">Citizen Complaints</div>
              <div className="text-xl font-extrabold text-slate-900 mt-1">{reports.length} Reports</div>
              <div className="text-[11px] text-amber-600 font-medium mt-1">
                {reports.filter((r) => r.status === 'Reported').length} Pending Verification
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
              <div className="text-xs text-slate-500">Segregated Waste Today</div>
              <div className="text-xl font-extrabold text-emerald-700 mt-1">
                {records.reduce((acc, r) => acc + r.wetWasteKg + r.dryWasteKg + r.hazardousKg, 0).toFixed(1)} kg
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Wet: 68% • Dry: 30% • Haz: 2%</div>
            </div>
          </div>

          {/* Verification & Collector Task Assignment Section */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Citizen Complaints Governance &amp; Task Assignment
                </h3>
                <p className="text-xs text-slate-500">
                  Verify incoming citizen complaints and dispatch tasks to zone waste collectors.
                </p>
              </div>
              <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-semibold">
                Zonal Officer: Suresh Babu (ADM-301)
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <th className="p-2.5 font-semibold">Report ID</th>
                    <th className="p-2.5 font-semibold">Citizen / Location</th>
                    <th className="p-2.5 font-semibold">Category / Severity</th>
                    <th className="p-2.5 font-semibold">Current State</th>
                    <th className="p-2.5 font-semibold">Assigned Collector</th>
                    <th className="p-2.5 font-semibold text-right">Admin Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {reports.map((rep) => (
                    <tr key={rep.reportId} className="hover:bg-slate-50/70">
                      <td className="p-2.5 font-mono font-bold text-slate-900">{rep.reportId}</td>
                      <td className="p-2.5">
                        <div className="font-semibold text-slate-800">{rep.citizenName}</div>
                        <div className="text-[11px] text-slate-500">{rep.location}</div>
                      </td>
                      <td className="p-2.5">
                        <span className="font-medium text-slate-800">{rep.wasteType}</span>
                        <div className="text-[10px] text-amber-700 font-semibold">{rep.severity}</div>
                      </td>
                      <td className="p-2.5">{getStatusBadge(rep.status)}</td>
                      <td className="p-2.5">
                        {rep.assignedCollectorName ? (
                          <span className="text-slate-800 font-medium">{rep.assignedCollectorName}</span>
                        ) : (
                          <span className="text-slate-400 italic">Unassigned</span>
                        )}
                      </td>
                      <td className="p-2.5 text-right space-x-1.5">
                        {rep.status === 'Reported' && (
                          <button
                            onClick={() => onUpdateReportStatus(rep.reportId, 'Verified')}
                            className="px-2.5 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-[11px] font-semibold cursor-pointer shadow-xs"
                          >
                            Verify
                          </button>
                        )}

                        {rep.status === 'Verified' && (
                          <button
                            onClick={() =>
                              onUpdateReportStatus(
                                rep.reportId,
                                'Assigned',
                                collectors[0].collectorId,
                                collectors[0].name
                              )
                            }
                            className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-[11px] font-semibold cursor-pointer shadow-xs"
                          >
                            Assign to Ramesh (TN-09)
                          </button>
                        )}

                        {['Assigned', 'Collection in Progress'].includes(rep.status) && (
                          <span className="text-[11px] text-blue-700 font-medium">In Field Dispatch</span>
                        )}

                        {rep.status === 'Collected' && (
                          <button
                            onClick={() => onUpdateReportStatus(rep.reportId, 'Resolved')}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-semibold cursor-pointer shadow-xs"
                          >
                            Close / Resolve Ticket
                          </button>
                        )}

                        {rep.status === 'Resolved' && (
                          <span className="text-[11px] text-emerald-700 font-bold">✓ Case Archived</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Smart Bins Telemetry Monitoring */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-slate-900 text-sm">Smart Bins Live Telemetry Monitor (IoT Network)</h3>
              <span className="text-xs text-slate-500">Auto-refresh active</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {bins.map((bin) => (
                <div
                  key={bin.binId}
                  className={`p-3 rounded-lg border text-xs ${
                    bin.fillLevelPercent >= 80
                      ? 'bg-red-50/50 border-red-300'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="font-mono font-bold text-slate-900">{bin.binId}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        bin.fillLevelPercent >= 80
                          ? 'bg-red-100 text-red-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {bin.status}
                    </span>
                  </div>
                  <p className="text-slate-700 font-medium text-[11px] mb-2">{bin.location}</p>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-600">
                      <span>Fill Level:</span>
                      <span className="font-bold">{bin.fillLevelPercent}% ({((bin.fillLevelPercent * bin.capacityLiters) / 100).toFixed(0)} / {bin.capacityLiters} L)</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${bin.fillLevelPercent >= 80 ? 'bg-red-600' : 'bg-emerald-500'}`}
                        style={{ width: `${bin.fillLevelPercent}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-500 mt-2.5 pt-2 border-t border-slate-200">
                    <span>Battery: {bin.batteryPercent}%</span>
                    <span>Lid: {bin.lidStatus}</span>
                    <span>Updated: {bin.lastUpdated}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. WASTE COLLECTOR VIEW */}
      {/* ========================================================= */}
      {activeRole === 'collector' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Collector Daily Route &amp; Pickup Dispatch</h3>
                <p className="text-xs text-slate-500">
                  Officer: Ramesh Kumar (COL-201) • Vehicle: TN-09-CW-4521 • Shift: Morning (Zone 5)
                </p>
              </div>
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-bold flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                <span>On Duty: Route RT-ZONE5-AM</span>
              </span>
            </div>

            {/* Waypoints list */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-blue-600" />
                <span>Assigned Priority Waypoints ({bins.filter(b => b.fillLevelPercent >= 50).length} locations)</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bins.map((bin, idx) => {
                  const linkedReport = reports.find((r) => r.binId === bin.binId && r.status !== 'Resolved');
                  return (
                    <div
                      key={bin.binId}
                      className={`p-4 rounded-xl border text-xs flex flex-col justify-between ${
                        bin.fillLevelPercent >= 80
                          ? 'bg-red-50/40 border-red-300'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-mono font-bold text-slate-900">
                            Stop #{idx + 1}: {bin.binId}
                          </span>
                          <span className="text-[11px] font-bold text-slate-600">
                            Fill: <strong className={bin.fillLevelPercent >= 80 ? 'text-red-600' : 'text-slate-800'}>{bin.fillLevelPercent}%</strong>
                          </span>
                        </div>
                        <p className="font-semibold text-slate-800 text-xs mb-1">{bin.location}</p>
                        <p className="text-slate-500 text-[11px]">Type: {bin.binType} • Capacity: {bin.capacityLiters} L</p>

                        {linkedReport && (
                          <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded text-[11px] text-amber-900">
                            <span className="font-bold">Citizen Report Attached ({linkedReport.reportId}):</span>
                            <p>{linkedReport.description}</p>
                            <span className="font-semibold text-purple-700">Status: {linkedReport.status}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                        {bin.fillLevelPercent > 0 ? (
                          <button
                            onClick={() => {
                              setSelectedTaskReport(linkedReport || null);
                              onCollectWaste(bin.binId, linkedReport?.reportId, wetWeight, dryWeight, hazWeight);
                            }}
                            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Scale className="w-3.5 h-3.5" />
                            <span>Empty Bin &amp; Record Weight</span>
                          </button>
                        ) : (
                          <div className="w-full py-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-center font-bold text-xs flex items-center justify-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Bin Emptied (0% Fill)</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Waste Segregation Audit Logs */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm mb-2">Recent Segregation Audit Records</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                    <th className="p-2 font-semibold">Record ID</th>
                    <th className="p-2 font-semibold">Bin ID</th>
                    <th className="p-2 font-semibold">Timestamp</th>
                    <th className="p-2 font-semibold">Wet Waste (Organic)</th>
                    <th className="p-2 font-semibold">Dry Waste (Recyclable)</th>
                    <th className="p-2 font-semibold">Hazardous</th>
                    <th className="p-2 font-semibold">Audit Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {records.map((rec) => (
                    <tr key={rec.recordId}>
                      <td className="p-2 font-mono font-bold text-slate-900">{rec.recordId}</td>
                      <td className="p-2 font-mono text-slate-800">{rec.binId}</td>
                      <td className="p-2 text-slate-500">{rec.collectedAt}</td>
                      <td className="p-2 text-emerald-700 font-bold">{rec.wetWasteKg} kg</td>
                      <td className="p-2 text-blue-700 font-bold">{rec.dryWasteKg} kg</td>
                      <td className="p-2 text-red-700 font-bold">{rec.hazardousKg} kg</td>
                      <td className="p-2">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-semibold">
                          {rec.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. IOT SMART BIN HARDWARE SIMULATOR */}
      {/* ========================================================= */}
      {activeRole === 'iot' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  IoT Ultrasonic Fill-Level Telemetry Simulator
                </h3>
                <p className="text-xs text-slate-500">
                  Hardware: HC-SR04 Ultrasonic Distance Sensor + ESP32 Microcontroller + MQTT Broker
                </p>
              </div>
              <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-lg text-xs font-bold flex items-center gap-1.5">
                <Wifi className="w-4 h-4" />
                <span>MQTT Broker: Connected</span>
              </span>
            </div>

            <div className="space-y-6">
              <p className="text-xs text-slate-600">
                Adjust the sensor sliders below to simulate garbage deposition. When a bin crosses <strong>80%</strong>, the system triggers an automatic emergency notification to collectors and updates the administrative dashboard immediately.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bins.map((bin) => (
                  <div key={bin.binId} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-xs">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-mono font-bold text-slate-900 text-sm">{bin.binId}</span>
                        <div className="text-[11px] text-slate-500">{bin.location}</div>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-bold ${
                          bin.fillLevelPercent >= 80 ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {bin.fillLevelPercent}% Full
                      </span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1 text-slate-700">
                        <span>Ultrasonic Sensor Distance Reading:</span>
                        <span>{bin.fillLevelPercent >= 80 ? '⚠️ CRITICAL ALERT' : 'Normal'}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={bin.fillLevelPercent}
                        onChange={(e) => onUpdateBinFill(bin.binId, Number(e.target.value))}
                        className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Battery className="w-3.5 h-3.5 text-emerald-600" />
                        Battery: {bin.batteryPercent}%
                      </span>
                      <span>Lid: {bin.lidStatus}</span>
                      <button
                        onClick={() => onUpdateBinFill(bin.binId, 0)}
                        className="text-xs text-indigo-600 hover:underline font-semibold cursor-pointer"
                      >
                        Reset to Empty (0%)
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
