import React from 'react';

export const ComponentDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-lg p-4 shadow-sm overflow-x-auto">
        <svg
          viewBox="0 0 980 720"
          className="w-full h-auto font-sans text-xs select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="comp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 9 5 L 0 9" fill="none" stroke="#475569" strokeWidth="1.5" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="980" height="720" fill="#ffffff" />

          {/* System Boundary Title */}
          <rect x="30" y="20" width="920" height="675" rx="6" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 4" />
          <text x="60" y="44" fill="#0f172a" fontWeight="bold" fontSize="13">
            Component Architecture: Smart Waste Management System
          </text>

          {/* ==================== 1. USER INTERFACE (TOP CENTER) ==================== */}
          <g transform="translate(380, 60)">
            <rect x="0" y="0" width="220" height="65" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" rx="2" />
            {/* Component Icon Tabs */}
            <rect x="-8" y="10" width="16" height="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
            <rect x="-8" y="30" width="16" height="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
            <text x="110" y="26" textAnchor="middle" fill="#713f12" fontSize="9">&lt;&lt;component&gt;&gt;</text>
            <text x="110" y="42" textAnchor="middle" fill="#713f12" fontSize="11" fontWeight="bold">User Interface (UI)</text>
            <text x="110" y="55" textAnchor="middle" fill="#854d0e" fontSize="8.5">(Web Portal / Mobile Views)</text>
          </g>

          {/* ==================== 2. AUTHENTICATION MODULE (TOP LEFT) ==================== */}
          <g transform="translate(80, 180)">
            <rect x="0" y="0" width="220" height="65" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.5" rx="2" />
            <rect x="-8" y="10" width="16" height="10" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.2" />
            <rect x="-8" y="30" width="16" height="10" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.2" />
            <text x="110" y="26" textAnchor="middle" fill="#312e81" fontSize="9">&lt;&lt;component&gt;&gt;</text>
            <text x="110" y="42" textAnchor="middle" fill="#312e81" fontSize="11" fontWeight="bold">Authentication Module</text>
            <text x="110" y="55" textAnchor="middle" fill="#4338ca" fontSize="8.5">(RBAC &amp; Token Validator)</text>
          </g>

          {/* ==================== 3. COMPLAINT MANAGEMENT MODULE (TOP CENTER) ==================== */}
          <g transform="translate(380, 180)">
            <rect x="0" y="0" width="220" height="65" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.5" rx="2" />
            <rect x="-8" y="10" width="16" height="10" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.2" />
            <rect x="-8" y="30" width="16" height="10" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.2" />
            <text x="110" y="26" textAnchor="middle" fill="#7c2d12" fontSize="9">&lt;&lt;component&gt;&gt;</text>
            <text x="110" y="42" textAnchor="middle" fill="#7c2d12" fontSize="10.5" fontWeight="bold">Complaint Management</text>
            <text x="110" y="55" textAnchor="middle" fill="#9a3412" fontSize="8.5">(Reporting &amp; Verification)</text>
          </g>

          {/* ==================== 4. SMART BIN MONITORING MODULE (TOP RIGHT) ==================== */}
          <g transform="translate(680, 180)">
            <rect x="0" y="0" width="230" height="65" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" rx="2" />
            <rect x="-8" y="10" width="16" height="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.2" />
            <rect x="-8" y="30" width="16" height="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.2" />
            <text x="115" y="26" textAnchor="middle" fill="#14532d" fontSize="9">&lt;&lt;component&gt;&gt;</text>
            <text x="115" y="42" textAnchor="middle" fill="#14532d" fontSize="10.5" fontWeight="bold">Smart Bin Monitoring</text>
            <text x="115" y="55" textAnchor="middle" fill="#15803d" fontSize="8.5">(Fill Telemetry Ingestor)</text>
          </g>

          {/* ==================== 5. IOT COMMUNICATION SERVICE (MIDDLE RIGHT) ==================== */}
          <g transform="translate(680, 310)">
            <rect x="0" y="0" width="230" height="65" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5" rx="2" />
            <rect x="-8" y="10" width="16" height="10" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.2" />
            <rect x="-8" y="30" width="16" height="10" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.2" />
            <text x="115" y="26" textAnchor="middle" fill="#312e81" fontSize="9">&lt;&lt;component&gt;&gt;</text>
            <text x="115" y="42" textAnchor="middle" fill="#312e81" fontSize="10.5" fontWeight="bold">IoT Communication Service</text>
            <text x="115" y="55" textAnchor="middle" fill="#4338ca" fontSize="8.5">(MQTT Broker / REST Ping)</text>
          </g>

          {/* ==================== 6. COLLECTION MANAGEMENT MODULE (MIDDLE CENTER) ==================== */}
          <g transform="translate(380, 310)">
            <rect x="0" y="0" width="220" height="65" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" rx="2" />
            <rect x="-8" y="10" width="16" height="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.2" />
            <rect x="-8" y="30" width="16" height="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.2" />
            <text x="110" y="26" textAnchor="middle" fill="#1e3a8a" fontSize="9">&lt;&lt;component&gt;&gt;</text>
            <text x="110" y="42" textAnchor="middle" fill="#1e3a8a" fontSize="10.5" fontWeight="bold">Collection Management</text>
            <text x="110" y="55" textAnchor="middle" fill="#1d4ed8" fontSize="8.5">(Task Assignment &amp; Logs)</text>
          </g>

          {/* ==================== 7. ROUTE OPTIMIZATION MODULE (MIDDLE LEFT) ==================== */}
          <g transform="translate(80, 310)">
            <rect x="0" y="0" width="220" height="65" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.5" rx="2" />
            <rect x="-8" y="10" width="16" height="10" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.2" />
            <rect x="-8" y="30" width="16" height="10" fill="#fdf4ff" stroke="#c026d3" strokeWidth="1.2" />
            <text x="110" y="26" textAnchor="middle" fill="#701a75" fontSize="9">&lt;&lt;component&gt;&gt;</text>
            <text x="110" y="42" textAnchor="middle" fill="#701a75" fontSize="10.5" fontWeight="bold">Route Optimization</text>
            <text x="110" y="55" textAnchor="middle" fill="#a21caf" fontSize="8.5">(Waypoint TSP Algorithmic Engine)</text>
          </g>

          {/* ==================== 8. NOTIFICATION MODULE (BOTTOM LEFT-CENTER) ==================== */}
          <g transform="translate(180, 450)">
            <rect x="0" y="0" width="230" height="65" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" rx="2" />
            <rect x="-8" y="10" width="16" height="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.2" />
            <rect x="-8" y="30" width="16" height="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.2" />
            <text x="115" y="26" textAnchor="middle" fill="#713f12" fontSize="9">&lt;&lt;component&gt;&gt;</text>
            <text x="115" y="42" textAnchor="middle" fill="#713f12" fontSize="10.5" fontWeight="bold">Notification Module</text>
            <text x="115" y="55" textAnchor="middle" fill="#a16207" fontSize="8.5">(SMS Gateway &amp; Push Alerts)</text>
          </g>

          {/* ==================== 9. DATABASE COMPONENT (BOTTOM RIGHT-CENTER) ==================== */}
          <g transform="translate(560, 450)">
            <rect x="0" y="0" width="240" height="65" fill="#f1f5f9" stroke="#475569" strokeWidth="1.5" rx="2" />
            <rect x="-8" y="10" width="16" height="10" fill="#f1f5f9" stroke="#475569" strokeWidth="1.2" />
            <rect x="-8" y="30" width="16" height="10" fill="#f1f5f9" stroke="#475569" strokeWidth="1.2" />
            <text x="120" y="26" textAnchor="middle" fill="#0f172a" fontSize="9">&lt;&lt;component&gt;&gt;</text>
            <text x="120" y="42" textAnchor="middle" fill="#0f172a" fontSize="10.5" fontWeight="bold">Database (smart_waste_db)</text>
            <text x="120" y="55" textAnchor="middle" fill="#475569" fontSize="8.5">(MySQL / PostgreSQL Engine)</text>
          </g>

          {/* ==================== CONNECTORS & INTERFACES ==================== */}

          {/* UI -> Auth */}
          <path d="M 400 125 L 280 180" fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />
          {/* UI -> Complaint */}
          <line x1="490" y1="125" x2="490" y2="180" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />
          {/* UI -> Bin Monitoring */}
          <path d="M 580 125 L 700 180" fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />

          {/* IoT Comm -> Smart Bin Monitoring */}
          <line x1="795" y1="310" x2="795" y2="245" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />

          {/* Complaint -> Collection */}
          <line x1="490" y1="245" x2="490" y2="310" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />

          {/* Collection -> Route Optimization */}
          <line x1="380" y1="342" x2="300" y2="342" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />

          {/* Smart Bin Monitoring -> Collection */}
          <line x1="680" y1="230" x2="570" y2="310" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />

          {/* Collection -> Notification Module */}
          <path d="M 430 375 L 340 450" fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />

          {/* Complaint -> Notification Module */}
          <path d="M 400 245 L 300 450" fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />

          {/* Modules to Database */}
          <path d="M 560 375 L 630 450" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />
          <path d="M 260 245 L 600 450" fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />
          <path d="M 750 245 L 690 450" fill="none" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#comp-arrow)" />

          {/* Interface Legend */}
          <g transform="translate(60, 600)">
            <rect width="860" height="75" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" rx="4" />
            <text x="20" y="24" fill="#0f172a" fontWeight="bold" fontSize="10.5">Component Notation Legend &amp; Provided Interfaces:</text>
            <text x="20" y="44" fill="#475569" fontSize="9.5">
              • <strong>UI Layer:</strong> Interacts with business modules through REST/JSON APIs.
            </text>
            <text x="20" y="60" fill="#475569" fontSize="9.5">
              • <strong>IoT Service:</strong> Ingests MQTT payloads from ultrasonic hardware nodes into the Smart Bin Monitoring subsystem.
            </text>
            <text x="480" y="44" fill="#475569" fontSize="9.5">
              • <strong>Route Optimizer:</strong> Solves Traveling Salesperson routing across high-priority bins and reports.
            </text>
            <text x="480" y="60" fill="#475569" fontSize="9.5">
              • <strong>Persistence:</strong> Centralized transactional storage via MySQL/PostgreSQL ORM interfaces.
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
