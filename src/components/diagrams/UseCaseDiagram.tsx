import React from 'react';

export const UseCaseDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-lg p-4 shadow-sm overflow-x-auto">
        <svg
          viewBox="0 0 920 640"
          className="w-full h-auto font-sans text-xs select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-flow">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
            </marker>
            <marker id="dashed-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-flow">
              <path d="M 0 1 L 9 5 L 0 9" stroke="#64748b" strokeWidth="1.5" fill="none" />
            </marker>
          </defs>

          {/* Background grid subtle */}
          <rect width="920" height="640" fill="#ffffff" />

          {/* System Boundary Box */}
          <rect
            x="200"
            y="30"
            width="520"
            height="580"
            fill="#f8fafc"
            stroke="#334155"
            strokeWidth="2"
            rx="8"
          />
          <text x="460" y="58" textAnchor="middle" fill="#0f172a" fontWeight="700" fontSize="14" letterSpacing="0.5">
            System: Smart Waste Management System
          </text>

          {/* LEFT ACTOR 1: Citizen */}
          <g transform="translate(70, 110)">
            <circle cx="25" cy="20" r="14" fill="#fef3c7" stroke="#b45309" strokeWidth="2" />
            <line x1="25" y1="34" x2="25" y2="72" stroke="#b45309" strokeWidth="2" />
            <line x1="2" y1="48" x2="48" y2="48" stroke="#b45309" strokeWidth="2" />
            <line x1="25" y1="72" x2="6" y2="105" stroke="#b45309" strokeWidth="2" />
            <line x1="25" y1="72" x2="44" y2="105" stroke="#b45309" strokeWidth="2" />
            <text x="25" y="125" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="12">Citizen</text>
          </g>

          {/* LEFT ACTOR 2: Waste Collector */}
          <g transform="translate(70, 420)">
            <circle cx="25" cy="20" r="14" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
            <line x1="25" y1="34" x2="25" y2="72" stroke="#1d4ed8" strokeWidth="2" />
            <line x1="2" y1="48" x2="48" y2="48" stroke="#1d4ed8" strokeWidth="2" />
            <line x1="25" y1="72" x2="6" y2="105" stroke="#1d4ed8" strokeWidth="2" />
            <line x1="25" y1="72" x2="44" y2="105" stroke="#1d4ed8" strokeWidth="2" />
            <text x="25" y="125" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="12">Waste Collector</text>
          </g>

          {/* RIGHT ACTOR 1: Administrator */}
          <g transform="translate(800, 100)">
            <circle cx="25" cy="20" r="14" fill="#fce7f3" stroke="#be185d" strokeWidth="2" />
            <line x1="25" y1="34" x2="25" y2="72" stroke="#be185d" strokeWidth="2" />
            <line x1="2" y1="48" x2="48" y2="48" stroke="#be185d" strokeWidth="2" />
            <line x1="25" y1="72" x2="6" y2="105" stroke="#be185d" strokeWidth="2" />
            <line x1="25" y1="72" x2="44" y2="105" stroke="#be185d" strokeWidth="2" />
            <text x="25" y="125" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="12">Administrator</text>
          </g>

          {/* RIGHT ACTOR 2: Smart Dustbin / IoT Sensor */}
          <g transform="translate(800, 320)">
            {/* Box-style IoT Device Actor */}
            <rect x="5" y="15" width="40" height="46" rx="4" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" />
            <path d="M12 25 h26 M12 35 h26 M12 45 h18" stroke="#4338ca" strokeWidth="2" />
            <circle cx="36" cy="45" r="3" fill="#10b981" />
            <line x1="25" y1="15" x2="25" y2="4" stroke="#4338ca" strokeWidth="2" />
            <circle cx="25" cy="4" r="3" fill="#ef4444" />
            <text x="25" y="80" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="11">&lt;&lt;actor&gt;&gt;</text>
            <text x="25" y="94" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="12">Smart Dustbin</text>
            <text x="25" y="108" textAnchor="middle" fill="#64748b" fontSize="10">(IoT Sensor)</text>
          </g>

          {/* RIGHT ACTOR 3: Notification Service */}
          <g transform="translate(800, 480)">
            <rect x="5" y="15" width="40" height="32" rx="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <path d="M5 15 L25 32 L45 15" fill="none" stroke="#ca8a04" strokeWidth="2" />
            <text x="25" y="65" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="11">&lt;&lt;actor&gt;&gt;</text>
            <text x="25" y="80" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="11">Notification</text>
            <text x="25" y="93" textAnchor="middle" fill="#0f172a" fontWeight="600" fontSize="11">Service</text>
          </g>

          {/* USE CASES */}
          {/* UC 1: User Registration & Login */}
          <g transform="translate(370, 80)">
            <ellipse cx="90" cy="20" rx="88" ry="19" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="90" y="24" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="11">User Registration & Login</text>
          </g>

          {/* UC 2: Report Waste Complaint */}
          <g transform="translate(240, 135)">
            <ellipse cx="85" cy="19" rx="82" ry="18" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="85" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="11">Report Waste Complaint</text>
          </g>

          {/* UC 2b: Include Upload Photo & Location */}
          <g transform="translate(480, 135)">
            <ellipse cx="78" cy="18" rx="74" ry="17" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="78" y="22" textAnchor="middle" fill="#475569" fontSize="10">Attach Photo &amp; Location</text>
          </g>

          {/* UC 3: Track Complaint Status */}
          <g transform="translate(240, 195)">
            <ellipse cx="85" cy="19" rx="82" ry="18" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="85" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="11">Track Complaint Status</text>
          </g>

          {/* UC 4: Monitor Smart Bins */}
          <g transform="translate(370, 255)">
            <ellipse cx="85" cy="19" rx="82" ry="18" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" />
            <text x="85" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="11">Monitor Smart Bins</text>
          </g>

          {/* UC 5: Ingest Ultrasonic Fill Telemetry */}
          <g transform="translate(520, 315)">
            <ellipse cx="90" cy="19" rx="88" ry="18" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" />
            <text x="90" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="10.5">Send Fill-Level Telemetry</text>
          </g>

          {/* UC 6: Verify Waste Complaints */}
          <g transform="translate(490, 205)">
            <ellipse cx="85" cy="19" rx="82" ry="18" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
            <text x="85" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="11">Verify Waste Complaints</text>
          </g>

          {/* UC 7: Assign Collection Tasks */}
          <g transform="translate(370, 370)">
            <ellipse cx="88" cy="19" rx="85" ry="18" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
            <text x="88" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="11">Assign Collection Tasks</text>
          </g>

          {/* UC 8: Schedule Collection Routes */}
          <g transform="translate(490, 425)">
            <ellipse cx="90" cy="19" rx="88" ry="18" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
            <text x="90" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="10.5">Schedule Collection Routes</text>
          </g>

          {/* UC 9: View Assigned Route */}
          <g transform="translate(240, 440)">
            <ellipse cx="85" cy="19" rx="82" ry="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="85" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="11">View Assigned Route</text>
          </g>

          {/* UC 10: Update Collection Status */}
          <g transform="translate(240, 500)">
            <ellipse cx="85" cy="19" rx="82" ry="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="85" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="11">Update Collection Status</text>
          </g>

          {/* UC 11: Log Waste Segregation */}
          <g transform="translate(240, 560)">
            <ellipse cx="85" cy="19" rx="82" ry="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="85" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="10.5">Log Waste Segregation</text>
          </g>

          {/* UC 12: Generate Reports & Analytics */}
          <g transform="translate(500, 485)">
            <ellipse cx="90" cy="19" rx="88" ry="18" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
            <text x="90" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="10.5">Generate Reports &amp; Analytics</text>
          </g>

          {/* UC 13: Broadcast Alert Notifications */}
          <g transform="translate(480, 550)">
            <ellipse cx="88" cy="19" rx="85" ry="18" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="88" y="23" textAnchor="middle" fill="#1e293b" fontWeight="500" fontSize="10.5">Send Alerts &amp; Notifications</text>
          </g>

          {/* RELATIONSHIP LINES & ASSOCIATIONS */}
          {/* Citizen associations */}
          <line x1="120" y1="140" x2="370" y2="100" stroke="#475569" strokeWidth="1.5" />
          <line x1="120" y1="150" x2="240" y2="155" stroke="#475569" strokeWidth="1.5" />
          <line x1="120" y1="160" x2="240" y2="210" stroke="#475569" strokeWidth="1.5" />
          <line x1="120" y1="170" x2="370" y2="265" stroke="#475569" strokeWidth="1.5" />

          {/* Include relationship between Report Waste and Attach Photo */}
          <line x1="405" y1="154" x2="480" y2="154" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#dashed-arrow)" />
          <text x="442" y="146" textAnchor="middle" fill="#475569" fontSize="9" fontStyle="italic">&lt;&lt;include&gt;&gt;</text>

          {/* Admin associations */}
          <line x1="800" y1="130" x2="545" y2="100" stroke="#475569" strokeWidth="1.5" />
          <line x1="800" y1="140" x2="660" y2="220" stroke="#475569" strokeWidth="1.5" />
          <line x1="800" y1="150" x2="540" y2="270" stroke="#475569" strokeWidth="1.5" />
          <line x1="800" y1="160" x2="545" y2="385" stroke="#475569" strokeWidth="1.5" />
          <line x1="800" y1="170" x2="665" y2="440" stroke="#475569" strokeWidth="1.5" />
          <line x1="800" y1="180" x2="675" y2="500" stroke="#475569" strokeWidth="1.5" />

          {/* Smart Dustbin associations */}
          <line x1="800" y1="350" x2="698" y2="334" stroke="#475569" strokeWidth="1.5" />
          {/* Smart dustbin trigger alert extends */}
          <line x1="610" y1="334" x2="570" y2="550" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#dashed-arrow)" />
          <text x="615" y="440" textAnchor="middle" fill="#475569" fontSize="9" fontStyle="italic">&lt;&lt;extend&gt;&gt;</text>

          {/* Waste Collector associations */}
          <line x1="120" y1="440" x2="370" y2="105" stroke="#475569" strokeWidth="1.5" />
          <line x1="120" y1="460" x2="240" y2="455" stroke="#475569" strokeWidth="1.5" />
          <line x1="120" y1="475" x2="240" y2="515" stroke="#475569" strokeWidth="1.5" />
          <line x1="120" y1="490" x2="240" y2="575" stroke="#475569" strokeWidth="1.5" />
          <line x1="120" y1="470" x2="370" y2="385" stroke="#475569" strokeWidth="1.5" />

          {/* Notification Service associations */}
          <line x1="800" y1="520" x2="655" y2="565" stroke="#475569" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
};
