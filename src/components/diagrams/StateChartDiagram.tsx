import React from 'react';

export const StateChartDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-lg p-4 shadow-sm overflow-x-auto">
        <svg
          viewBox="0 0 940 520"
          className="w-full h-auto font-sans text-xs select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="state-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="940" height="520" fill="#ffffff" />

          {/* Title Header */}
          <text x="470" y="32" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="13">
            State Machine Diagram: Lifecycle of a Waste Complaint (WasteReport)
          </text>

          {/* 1. INITIAL PSEUDO-STATE */}
          <g transform="translate(60, 100)">
            <circle cx="16" cy="20" r="14" fill="#0f172a" />
            <text x="16" y="52" textAnchor="middle" fill="#475569" fontSize="10">Initial</text>
          </g>

          {/* Arrow Initial -> Reported */}
          <line x1="92" y1="120" x2="160" y2="120" stroke="#334155" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
          <text x="126" y="112" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600">submitComplaint()</text>

          {/* 2. STATE: Reported */}
          <g transform="translate(160, 85)">
            <rect width="180" height="70" rx="10" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
            <line x1="0" y1="26" x2="180" y2="26" stroke="#fef3c7" strokeWidth="1.5" />
            <text x="90" y="18" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#78350f">Reported</text>
            <text x="10" y="44" fill="#451a03" fontSize="9">entry / createComplaintId()</text>
            <text x="10" y="58" fill="#451a03" fontSize="9">do / notifyMunicipalAdmin()</text>
          </g>

          {/* Arrow Reported -> Verified */}
          <line x1="340" y1="120" x2="430" y2="120" stroke="#334155" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
          <text x="385" y="112" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600">verify() [isValid]</text>

          {/* Alternate transition: Reported -> Rejected */}
          <path d="M 250 155 V 230 H 430" fill="none" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
          <text x="320" y="222" fill="#991b1b" fontSize="8.5" fontWeight="600">verify() [isSpam / Duplicate]</text>

          {/* Rejected State */}
          <g transform="translate(430, 205)">
            <rect width="160" height="55" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="80" y="24" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#991b1b">Rejected</text>
            <text x="10" y="44" fill="#7f1d1d" fontSize="9">entry / notifyCitizenReject()</text>
          </g>

          {/* Arrow Rejected -> Final state */}
          <path d="M 590 232 H 840 V 290" fill="none" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#state-arrow)" />

          {/* 3. STATE: Verified */}
          <g transform="translate(430, 85)">
            <rect width="180" height="70" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
            <line x1="0" y1="26" x2="180" y2="26" stroke="#dcfce7" strokeWidth="1.5" />
            <text x="90" y="18" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#14532d">Verified</text>
            <text x="10" y="44" fill="#14532d" fontSize="9">entry / setPriorityLevel()</text>
            <text x="10" y="58" fill="#14532d" fontSize="9">do / queueForDispatch()</text>
          </g>

          {/* Arrow Verified -> Assigned */}
          <line x1="610" y1="120" x2="700" y2="120" stroke="#334155" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
          <text x="655" y="112" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600">assignCollector()</text>

          {/* 4. STATE: Assigned */}
          <g transform="translate(700, 85)">
            <rect width="180" height="70" rx="10" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
            <line x1="0" y1="26" x2="180" y2="26" stroke="#dbeafe" strokeWidth="1.5" />
            <text x="90" y="18" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#1e3a8a">Assigned</text>
            <text x="10" y="44" fill="#1e3a8a" fontSize="9">entry / linkCollector(id)</text>
            <text x="10" y="58" fill="#1e3a8a" fontSize="9">do / sendTaskSMS()</text>
          </g>

          {/* Transition Assigned -> Collection in Progress (Curving downwards to row 2) */}
          <path d="M 790 155 V 320 H 740" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
          <text x="800" y="240" fill="#0f172a" fontSize="8.5" fontWeight="600">startRoute()</text>

          {/* 5. STATE: Collection in Progress */}
          <g transform="translate(520, 290)">
            <rect width="210" height="70" rx="10" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.5" />
            <line x1="0" y1="26" x2="210" y2="26" stroke="#fae8ff" strokeWidth="1.5" />
            <text x="105" y="18" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#701a75">Collection in Progress</text>
            <text x="10" y="44" fill="#701a75" fontSize="9">entry / updateVehicleGPS()</text>
            <text x="10" y="58" fill="#701a75" fontSize="9">do / navigateToLocation()</text>
          </g>

          {/* Arrow Collection in Progress -> Collected */}
          <line x1="520" y1="325" x2="410" y2="325" stroke="#334155" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
          <text x="465" y="315" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600">emptyBin()</text>

          {/* 6. STATE: Collected */}
          <g transform="translate(210, 290)">
            <rect width="190" height="70" rx="10" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
            <line x1="0" y1="26" x2="190" y2="26" stroke="#ccfbf1" strokeWidth="1.5" />
            <text x="95" y="18" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#134e4a">Collected</text>
            <text x="10" y="44" fill="#134e4a" fontSize="9">entry / logSegregatedWeight()</text>
            <text x="10" y="58" fill="#134e4a" fontSize="9">do / resetBinSensor()</text>
          </g>

          {/* Arrow Collected -> Resolved (Curving down to row 3) */}
          <path d="M 305 360 V 410 H 420" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
          <text x="350" y="395" fill="#0f172a" fontSize="8.5" fontWeight="600">confirmClean()</text>

          {/* 7. STATE: Resolved */}
          <g transform="translate(420, 385)">
            <rect width="210" height="70" rx="10" fill="#ecfdf5" stroke="#059669" strokeWidth="1.5" />
            <line x1="0" y1="26" x2="210" y2="26" stroke="#a7f3d0" strokeWidth="1.5" />
            <text x="105" y="18" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#065f46">Resolved</text>
            <text x="10" y="44" fill="#065f46" fontSize="9">entry / sendResolutionNotification()</text>
            <text x="10" y="58" fill="#065f46" fontSize="9">exit / archiveComplaint()</text>
          </g>

          {/* Arrow Resolved -> Final state */}
          <line x1="630" y1="420" x2="825" y2="420" stroke="#334155" strokeWidth="1.5" markerEnd="url(#state-arrow)" />
          <text x="725" y="412" textAnchor="middle" fill="#0f172a" fontSize="8.5" fontWeight="600">archive()</text>

          {/* 8. FINAL STATE (Bullseye) */}
          <g transform="translate(830, 400)">
            <circle cx="20" cy="20" r="16" fill="none" stroke="#0f172a" strokeWidth="2" />
            <circle cx="20" cy="20" r="10" fill="#0f172a" />
            <text x="20" y="50" textAnchor="middle" fill="#475569" fontSize="10">Final State</text>
          </g>
        </svg>
      </div>
    </div>
  );
};
