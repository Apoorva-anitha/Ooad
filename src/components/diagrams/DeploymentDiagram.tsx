import React from 'react';

export const DeploymentDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-lg p-4 shadow-sm overflow-x-auto">
        <svg
          viewBox="0 0 960 680"
          className="w-full h-auto font-sans text-xs select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="960" height="680" fill="#ffffff" />

          {/* Helper function / component-style node drawing */}

          {/* ==================== 1. CITIZEN CLIENT NODE (TOP LEFT) ==================== */}
          <g transform="translate(40, 50)">
            {/* 3D Box Top & Right Facets */}
            <polygon points="0,15 15,0 215,0 200,15" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
            <polygon points="200,15 215,0 215,115 200,130" fill="#fde047" stroke="#ca8a04" strokeWidth="1.2" />
            <rect x="0" y="15" width="200" height="115" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="100" y="38" textAnchor="middle" fill="#713f12" fontSize="9.5" fontWeight="600">&lt;&lt;device&gt;&gt;</text>
            <text x="100" y="52" textAnchor="middle" fill="#713f12" fontSize="11" fontWeight="bold">Citizen Device</text>
            <text x="100" y="66" textAnchor="middle" fill="#a16207" fontSize="9">(Android / iOS / Browser)</text>
            
            {/* Artifact */}
            <rect x="15" y="78" width="170" height="42" fill="#ffffff" stroke="#ca8a04" strokeWidth="1" rx="2" />
            <text x="100" y="94" textAnchor="middle" fill="#451a03" fontSize="8.5">&lt;&lt;artifact&gt;&gt;</text>
            <text x="100" y="108" textAnchor="middle" fill="#451a03" fontSize="9.5" fontWeight="600">Citizen Web/Mobile UI</text>
          </g>

          {/* ==================== 2. ADMIN WORKSTATION NODE (TOP RIGHT) ==================== */}
          <g transform="translate(710, 50)">
            <polygon points="0,15 15,0 215,0 200,15" fill="#fce7f3" stroke="#be185d" strokeWidth="1.2" />
            <polygon points="200,15 215,0 215,115 200,130" fill="#fbcfe8" stroke="#be185d" strokeWidth="1.2" />
            <rect x="0" y="15" width="200" height="115" fill="#fdf2f8" stroke="#be185d" strokeWidth="1.5" />
            <text x="100" y="38" textAnchor="middle" fill="#831843" fontSize="9.5" fontWeight="600">&lt;&lt;device&gt;&gt;</text>
            <text x="100" y="52" textAnchor="middle" fill="#831843" fontSize="11" fontWeight="bold">Admin Computer</text>
            <text x="100" y="66" textAnchor="middle" fill="#9d174d" fontSize="9">(Workstation / PC)</text>

            {/* Artifact */}
            <rect x="15" y="78" width="170" height="42" fill="#ffffff" stroke="#be185d" strokeWidth="1" rx="2" />
            <text x="100" y="94" textAnchor="middle" fill="#701a75" fontSize="8.5">&lt;&lt;artifact&gt;&gt;</text>
            <text x="100" y="108" textAnchor="middle" fill="#701a75" fontSize="9.5" fontWeight="600">Admin Control Portal</text>
          </g>

          {/* ==================== 3. IOT SMART BIN SENSOR NODE (MIDDLE LEFT) ==================== */}
          <g transform="translate(40, 240)">
            <polygon points="0,15 15,0 215,0 200,15" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.2" />
            <polygon points="200,15 215,0 215,120 200,135" fill="#c7d2fe" stroke="#4338ca" strokeWidth="1.2" />
            <rect x="0" y="15" width="200" height="120" fill="#eef2ff" stroke="#4338ca" strokeWidth="1.5" />
            <text x="100" y="38" textAnchor="middle" fill="#312e81" fontSize="9.5" fontWeight="600">&lt;&lt;device&gt;&gt;</text>
            <text x="100" y="52" textAnchor="middle" fill="#312e81" fontSize="11" fontWeight="bold">IoT Smart Bin Node</text>
            <text x="100" y="66" textAnchor="middle" fill="#4338ca" fontSize="9">(ESP32 + HC-SR04 Sensor)</text>

            {/* Artifact */}
            <rect x="15" y="78" width="170" height="46" fill="#ffffff" stroke="#4338ca" strokeWidth="1" rx="2" />
            <text x="100" y="94" textAnchor="middle" fill="#1e1b4b" fontSize="8.5">&lt;&lt;artifact&gt;&gt;</text>
            <text x="100" y="107" textAnchor="middle" fill="#1e1b4b" fontSize="9.5" fontWeight="600">Telemetry Firmware</text>
            <text x="100" y="118" textAnchor="middle" fill="#6366f1" fontSize="8">(C++ / Arduino OS)</text>
          </g>

          {/* ==================== 4. COLLECTOR FIELD TERMINAL (MIDDLE RIGHT) ==================== */}
          <g transform="translate(710, 240)">
            <polygon points="0,15 15,0 215,0 200,15" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.2" />
            <polygon points="200,15 215,0 215,120 200,135" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="1.2" />
            <rect x="0" y="15" width="200" height="120" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="100" y="38" textAnchor="middle" fill="#1e3a8a" fontSize="9.5" fontWeight="600">&lt;&lt;device&gt;&gt;</text>
            <text x="100" y="52" textAnchor="middle" fill="#1e3a8a" fontSize="11" fontWeight="bold">Collector Device</text>
            <text x="100" y="66" textAnchor="middle" fill="#1e40af" fontSize="9">(GPS Smartphone / Tablet)</text>

            {/* Artifact */}
            <rect x="15" y="78" width="170" height="46" fill="#ffffff" stroke="#1d4ed8" strokeWidth="1" rx="2" />
            <text x="100" y="94" textAnchor="middle" fill="#172554" fontSize="8.5">&lt;&lt;artifact&gt;&gt;</text>
            <text x="100" y="107" textAnchor="middle" fill="#172554" fontSize="9.5" fontWeight="600">Collector Field App</text>
            <text x="100" y="118" textAnchor="middle" fill="#3b82f6" fontSize="8">(Route &amp; Weighing UI)</text>
          </g>

          {/* ==================== 5. CENTRAL APPLICATION SERVER (CENTER) ==================== */}
          <g transform="translate(360, 160)">
            <polygon points="0,20 20,0 250,0 230,20" fill="#cbd5e1" stroke="#334155" strokeWidth="1.5" />
            <polygon points="230,20 250,0 250,180 230,200" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" />
            <rect x="0" y="20" width="230" height="180" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
            <text x="115" y="44" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="600">&lt;&lt;device&gt;&gt;</text>
            <text x="115" y="60" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">Application Server</text>
            <text x="115" y="74" textAnchor="middle" fill="#64748b" fontSize="9">(Ubuntu Linux / Cloud VM)</text>

            {/* Artifact 1 */}
            <rect x="15" y="86" width="200" height="42" fill="#ffffff" stroke="#475569" strokeWidth="1" rx="2" />
            <text x="115" y="102" textAnchor="middle" fill="#1e293b" fontSize="8.5">&lt;&lt;artifact&gt;&gt;</text>
            <text x="115" y="116" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">Waste Management Backend API</text>

            {/* Artifact 2 */}
            <rect x="15" y="136" width="200" height="46" fill="#ffffff" stroke="#475569" strokeWidth="1" rx="2" />
            <text x="115" y="152" textAnchor="middle" fill="#1e293b" fontSize="8.5">&lt;&lt;artifact&gt;&gt;</text>
            <text x="115" y="165" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">Route Optimization Engine</text>
            <text x="115" y="176" textAnchor="middle" fill="#64748b" fontSize="8">&amp; MQTT Telemetry Broker</text>
          </g>

          {/* ==================== 6. DATABASE SERVER (BOTTOM LEFT-CENTER) ==================== */}
          <g transform="translate(200, 470)">
            <polygon points="0,15 15,0 235,0 220,15" fill="#cbd5e1" stroke="#334155" strokeWidth="1.2" />
            <polygon points="220,15 235,0 235,130 220,145" fill="#94a3b8" stroke="#334155" strokeWidth="1.2" />
            <rect x="0" y="15" width="220" height="130" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
            <text x="110" y="38" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">&lt;&lt;device&gt;&gt;</text>
            <text x="110" y="52" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold">Database Server</text>
            <text x="110" y="66" textAnchor="middle" fill="#64748b" fontSize="9">(MySQL 8.0 / PostgreSQL)</text>

            {/* Artifact */}
            <rect x="15" y="78" width="190" height="52" fill="#ffffff" stroke="#475569" strokeWidth="1" rx="2" />
            <text x="110" y="94" textAnchor="middle" fill="#1e293b" fontSize="8.5">&lt;&lt;artifact&gt;&gt;</text>
            <text x="110" y="108" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">smart_waste_db</text>
            <text x="110" y="122" textAnchor="middle" fill="#64748b" fontSize="8">(Relational Tables &amp; Logs)</text>
          </g>

          {/* ==================== 7. NOTIFICATION GATEWAY SERVER (BOTTOM RIGHT-CENTER) ==================== */}
          <g transform="translate(540, 470)">
            <polygon points="0,15 15,0 235,0 220,15" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.2" />
            <polygon points="220,15 235,0 235,130 220,145" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.2" />
            <rect x="0" y="15" width="220" height="130" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
            <text x="110" y="38" textAnchor="middle" fill="#14532d" fontSize="9.5" fontWeight="600">&lt;&lt;device&gt;&gt;</text>
            <text x="110" y="52" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="bold">Notification Gateway</text>
            <text x="110" y="66" textAnchor="middle" fill="#15803d" fontSize="9">(SMS / Email / Push Service)</text>

            {/* Artifact */}
            <rect x="15" y="78" width="190" height="52" fill="#ffffff" stroke="#16a34a" strokeWidth="1" rx="2" />
            <text x="110" y="94" textAnchor="middle" fill="#14532d" fontSize="8.5">&lt;&lt;artifact&gt;&gt;</text>
            <text x="110" y="108" textAnchor="middle" fill="#14532d" fontSize="9.5" fontWeight="600">Telecom SMS / SMTP Dispatcher</text>
            <text x="110" y="122" textAnchor="middle" fill="#16a34a" fontSize="8">(Twilio / Firebase Cloud Messaging)</text>
          </g>

          {/* ==================== COMMUNICATION LINKS ==================== */}

          {/* Citizen -> App Server */}
          <line x1="240" y1="120" x2="360" y2="200" stroke="#475569" strokeWidth="1.5" />
          <rect x="255" y="150" width="85" height="18" fill="#ffffff" stroke="#94a3b8" rx="2" />
          <text x="297" y="162" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="600">HTTPS / 4G</text>

          {/* Admin -> App Server */}
          <line x1="710" y1="120" x2="590" y2="200" stroke="#475569" strokeWidth="1.5" />
          <rect x="620" y="150" width="90" height="18" fill="#ffffff" stroke="#94a3b8" rx="2" />
          <text x="665" y="162" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="600">HTTPS / TLS</text>

          {/* IoT Node -> App Server */}
          <line x1="240" y1="290" x2="360" y2="270" stroke="#475569" strokeWidth="1.5" />
          <rect x="250" y="270" width="95" height="18" fill="#ffffff" stroke="#94a3b8" rx="2" />
          <text x="297" y="282" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="600">MQTT / Wi-Fi / GSM</text>

          {/* Collector -> App Server */}
          <line x1="710" y1="290" x2="590" y2="270" stroke="#475569" strokeWidth="1.5" />
          <rect x="615" y="270" width="85" height="18" fill="#ffffff" stroke="#94a3b8" rx="2" />
          <text x="657" y="282" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="600">HTTPS / REST</text>

          {/* App Server -> Database Server */}
          <line x1="430" y1="360" x2="330" y2="470" stroke="#475569" strokeWidth="1.8" />
          <rect x="330" y="405" width="100" height="18" fill="#ffffff" stroke="#94a3b8" rx="2" />
          <text x="380" y="417" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="600">JDBC / TCP:3306</text>

          {/* App Server -> Notification Server */}
          <line x1="520" y1="360" x2="620" y2="470" stroke="#475569" strokeWidth="1.8" />
          <rect x="535" y="405" width="95" height="18" fill="#ffffff" stroke="#94a3b8" rx="2" />
          <text x="582" y="417" textAnchor="middle" fill="#334155" fontSize="8.5" fontWeight="600">REST API / HTTPS</text>
        </svg>
      </div>
    </div>
  );
};
