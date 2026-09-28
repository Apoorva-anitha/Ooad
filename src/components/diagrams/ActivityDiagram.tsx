import React from 'react';

export const ActivityDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-lg p-4 shadow-sm overflow-x-auto">
        <svg
          viewBox="0 0 980 760"
          className="w-full h-auto font-sans text-xs select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="act-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="980" height="760" fill="#ffffff" />

          {/* ==================== SWIMLANES ==================== */}
          {/* Lane 1: Citizen (Width: 245) */}
          <rect x="20" y="20" width="235" height="720" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
          <rect x="20" y="20" width="235" height="34" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
          <text x="137" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#78350f">Citizen</text>

          {/* Lane 2: Application System (Width: 245) */}
          <rect x="255" y="20" width="240" height="720" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
          <rect x="255" y="20" width="240" height="34" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
          <text x="375" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#14532d">Application / Server</text>

          {/* Lane 3: Administrator (Width: 240) */}
          <rect x="495" y="20" width="230" height="720" fill="#fdf2f8" stroke="#db2777" strokeWidth="1.5" />
          <rect x="495" y="20" width="230" height="34" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" />
          <text x="610" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#831843">Administrator</text>

          {/* Lane 4: Waste Collector (Width: 235) */}
          <rect x="725" y="20" width="235" height="720" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
          <rect x="725" y="20" width="235" height="34" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
          <text x="842" y="42" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#1e3a8a">Waste Collector</text>

          {/* ==================== WORKFLOW ACTIVITIES ==================== */}

          {/* 1. START NODE */}
          <circle cx="137" cy="80" r="12" fill="#0f172a" />

          {/* Arrow Start -> Citizen Login */}
          <line x1="137" y1="92" x2="137" y2="120" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />

          {/* Activity 1: Citizen Enters Credentials */}
          <rect x="55" y="120" width="165" height="40" rx="8" fill="#ffffff" stroke="#d97706" strokeWidth="1.5" />
          <text x="137" y="145" textAnchor="middle" fill="#0f172a" fontSize="10.5" fontWeight="500">1. Enter Login Credentials</text>

          {/* Arrow -> App Validate */}
          <line x1="220" y1="140" x2="295" y2="140" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />

          {/* Activity 2: Authenticate User */}
          <rect x="295" y="120" width="160" height="40" rx="8" fill="#ffffff" stroke="#16a34a" strokeWidth="1.5" />
          <text x="375" y="145" textAnchor="middle" fill="#0f172a" fontSize="10.5" fontWeight="500">2. Authenticate User</text>

          {/* Decision 1: Credentials Valid? */}
          <line x1="375" y1="160" x2="375" y2="185" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />
          <polygon points="375,185 405,200 375,215 345,200" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
          <text x="415" y="204" fill="#475569" fontSize="9">Valid?</text>

          {/* [No] Branch -> Loop back */}
          <path d="M 345 200 H 280 V 150 H 220" fill="none" stroke="#dc2626" strokeWidth="1.2" markerEnd="url(#act-arrow)" />
          <text x="250" y="192" fill="#dc2626" fontSize="8.5">[No: Invalid]</text>

          {/* [Yes] Branch -> Citizen Form */}
          <path d="M 375 215 V 250 H 137 V 265" fill="none" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#act-arrow)" />
          <text x="320" y="238" fill="#16a34a" fontSize="8.5">[Yes: Granted]</text>

          {/* Activity 3: Fill Waste Complaint */}
          <rect x="45" y="265" width="185" height="46" rx="8" fill="#ffffff" stroke="#d97706" strokeWidth="1.5" />
          <text x="137" y="285" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="600">3. Fill Complaint Form</text>
          <text x="137" y="300" textAnchor="middle" fill="#64748b" fontSize="8.5">(Select Ward, Waste Type &amp; Photo)</text>

          {/* Arrow -> Server Save */}
          <line x1="230" y1="288" x2="295" y2="288" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />

          {/* Activity 4: Store Report & Ingest Telemetry */}
          <rect x="295" y="265" width="160" height="46" rx="8" fill="#ffffff" stroke="#16a34a" strokeWidth="1.5" />
          <text x="375" y="285" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="600">4. Store Complaint</text>
          <text x="375" y="300" textAnchor="middle" fill="#64748b" fontSize="8.5">&amp; Set Status = 'Reported'</text>

          {/* Arrow -> Admin Verification */}
          <line x1="455" y1="288" x2="530" y2="288" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />

          {/* Activity 5: Admin Reviews & Verifies */}
          <rect x="530" y="265" width="165" height="46" rx="8" fill="#ffffff" stroke="#db2777" strokeWidth="1.5" />
          <text x="612" y="285" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="600">5. Review Complaint</text>
          <text x="612" y="300" textAnchor="middle" fill="#64748b" fontSize="8.5">&amp; Check Bin Fill Level</text>

          {/* Decision 2: Is Complaint Genuine? */}
          <line x1="612" y1="311" x2="612" y2="340" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />
          <polygon points="612,340 642,355 612,370 582,355" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
          <text x="650" y="358" fill="#475569" fontSize="9">Genuine?</text>

          {/* [No] Branch -> Reject */}
          <path d="M 582 355 H 520 V 420" fill="none" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#act-arrow)" />
          <text x="525" y="348" fill="#dc2626" fontSize="8.5">[No: Spam]</text>

          <rect x="505" y="420" width="130" height="36" rx="6" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.2" />
          <text x="570" y="442" textAnchor="middle" fill="#991b1b" fontSize="9.5">Mark Rejected</text>

          {/* [Yes] Branch -> Assign Collector & Route */}
          <line x1="612" y1="370" x2="612" y2="415" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#act-arrow)" />
          <text x="620" y="390" fill="#16a34a" fontSize="8.5">[Yes: Valid]</text>

          {/* Activity 6: Assign Collector & Optimize Route */}
          <rect x="530" y="415" width="165" height="46" rx="8" fill="#ffffff" stroke="#db2777" strokeWidth="1.5" />
          <text x="612" y="435" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="600">6. Assign Waste Collector</text>
          <text x="612" y="450" textAnchor="middle" fill="#64748b" fontSize="8.5">&amp; Compute Route</text>

          {/* Arrow -> Collector Receives Task */}
          <line x1="695" y1="438" x2="760" y2="438" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />

          {/* Activity 7: Collector Receives Route */}
          <rect x="760" y="415" width="170" height="46" rx="8" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="845" y="435" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="600">7. Receive Route &amp; Task</text>
          <text x="845" y="450" textAnchor="middle" fill="#64748b" fontSize="8.5">Status: 'In Progress'</text>

          {/* Arrow -> Travel to site */}
          <line x1="845" y1="461" x2="845" y2="495" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />

          {/* Activity 8: Collector Clears Waste & Empties Bin */}
          <rect x="760" y="495" width="170" height="46" rx="8" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="845" y="515" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="600">8. Empty Bin &amp; Clear Area</text>
          <text x="845" y="530" textAnchor="middle" fill="#64748b" fontSize="8.5">Reset Sensor to 0%</text>

          {/* Arrow -> Log Segregated Weight */}
          <line x1="845" y1="541" x2="845" y2="575" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />

          {/* Activity 9: Record Segregation & Mark Collected */}
          <rect x="760" y="575" width="170" height="46" rx="8" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="845" y="595" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="600">9. Log Waste Weights</text>
          <text x="845" y="610" textAnchor="middle" fill="#64748b" fontSize="8.5">(Wet, Dry, Hazardous)</text>

          {/* Arrow -> Server updates DB and sends notification (Fork Bar) */}
          <path d="M 760 598 H 455" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />

          {/* Fork Bar in Application Column */}
          <rect x="365" y="590" width="15" height="50" fill="#0f172a" rx="2" />

          {/* Branch 1: Update Complaint to Resolved */}
          <path d="M 372 600 H 300 V 650" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />
          <rect x="235" y="650" width="130" height="40" rx="8" fill="#ffffff" stroke="#16a34a" strokeWidth="1.5" />
          <text x="300" y="668" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">10a. Update DB</text>
          <text x="300" y="682" textAnchor="middle" fill="#64748b" fontSize="8.5">Status = 'Resolved'</text>

          {/* Branch 2: Dispatch SMS to Citizen */}
          <path d="M 372 630 H 137 V 650" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd="url(#act-arrow)" />
          <rect x="65" y="650" width="145" height="40" rx="8" fill="#ffffff" stroke="#d97706" strokeWidth="1.5" />
          <text x="137" y="668" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">10b. Receive SMS Alert</text>
          <text x="137" y="682" textAnchor="middle" fill="#64748b" fontSize="8.5">View Cleared Photo</text>

          {/* Join to End State */}
          <path d="M 300 690 V 715 H 570" fill="none" stroke="#334155" strokeWidth="1.2" />
          <path d="M 137 690 V 715 H 570" fill="none" stroke="#334155" strokeWidth="1.2" />
          <path d="M 570 456 V 715" fill="none" stroke="#334155" strokeWidth="1.2" />

          {/* Final End Node */}
          <g transform="translate(560, 700)">
            <circle cx="15" cy="15" r="14" fill="none" stroke="#0f172a" strokeWidth="2" />
            <circle cx="15" cy="15" r="9" fill="#0f172a" />
          </g>
        </svg>
      </div>
    </div>
  );
};
