import React from 'react';

export const ClassDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-lg p-4 shadow-sm overflow-x-auto">
        <svg
          viewBox="0 0 980 740"
          className="w-full h-auto font-sans text-xs select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Generalization inheritance triangle marker */}
            <marker id="inheritance" viewBox="0 0 12 12" refX="12" refY="6" markerWidth="10" markerHeight="10" orient="auto">
              <path d="M 0 0 L 12 6 L 0 12 z" fill="#ffffff" stroke="#334155" strokeWidth="1.5" />
            </marker>
            {/* Standard association arrow */}
            <marker id="assoc-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 9 5 L 0 9" fill="none" stroke="#475569" strokeWidth="1.5" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="980" height="740" fill="#ffffff" />

          {/* ==================== 1. BASE USER CLASS (TOP CENTER) ==================== */}
          <g transform="translate(390, 20)">
            <rect width="200" height="130" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" rx="3" />
            <rect width="200" height="26" fill="#e2e8f0" stroke="#334155" strokeWidth="1.5" rx="3" />
            <text x="100" y="17" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0f172a">&lt;&lt;abstract&gt;&gt; User</text>
            
            {/* Attributes */}
            <text x="8" y="42" fill="#1e293b" fontSize="9.5">- userId: String</text>
            <text x="8" y="56" fill="#1e293b" fontSize="9.5">- username: String</text>
            <text x="8" y="70" fill="#1e293b" fontSize="9.5">- email: String</text>
            <text x="8" y="84" fill="#1e293b" fontSize="9.5">- phoneNo: String</text>
            <text x="8" y="98" fill="#1e293b" fontSize="9.5">- role: String</text>
            
            <line x1="0" y1="104" x2="200" y2="104" stroke="#cbd5e1" strokeWidth="1" />
            {/* Methods */}
            <text x="8" y="117" fill="#1e293b" fontSize="9.5">+ login(): Boolean</text>
            <text x="8" y="127" fill="#1e293b" fontSize="9.5">+ logout(): Void</text>
          </g>

          {/* ==================== 2. CITIZEN (TOP LEFT) ==================== */}
          <g transform="translate(50, 175)">
            <rect width="190" height="120" fill="#fefce8" stroke="#ca8a04" strokeWidth="1.5" rx="3" />
            <rect width="190" height="24" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" rx="3" />
            <text x="95" y="16" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#713f12">Citizen</text>
            <text x="8" y="40" fill="#1e293b" fontSize="9.5">- citizenId: String</text>
            <text x="8" y="54" fill="#1e293b" fontSize="9.5">- address: String</text>
            <text x="8" y="68" fill="#1e293b" fontSize="9.5">- wardNo: Integer</text>
            <line x1="0" y1="74" x2="190" y2="74" stroke="#fef08a" strokeWidth="1.5" />
            <text x="8" y="88" fill="#1e293b" fontSize="9.5">+ reportWaste(): WasteReport</text>
            <text x="8" y="102" fill="#1e293b" fontSize="9.5">+ trackComplaint(): Status</text>
            <text x="8" y="114" fill="#1e293b" fontSize="9.5">+ viewNearbyBins(): List</text>
          </g>

          {/* ==================== 3. WASTE COLLECTOR (TOP RIGHT-CENTER) ==================== */}
          <g transform="translate(390, 175)">
            <rect width="200" height="125" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" rx="3" />
            <rect width="200" height="24" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" rx="3" />
            <text x="100" y="16" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#1e3a8a">WasteCollector</text>
            <text x="8" y="40" fill="#1e293b" fontSize="9.5">- collectorId: String</text>
            <text x="8" y="54" fill="#1e293b" fontSize="9.5">- vehicleNo: String</text>
            <text x="8" y="68" fill="#1e293b" fontSize="9.5">- assignedZone: String</text>
            <text x="8" y="82" fill="#1e293b" fontSize="9.5">- status: String</text>
            <line x1="0" y1="88" x2="200" y2="88" stroke="#dbeafe" strokeWidth="1.5" />
            <text x="8" y="102" fill="#1e293b" fontSize="9.5">+ viewRoute(): Route</text>
            <text x="8" y="114" fill="#1e293b" fontSize="9.5">+ updateStatus(id, st): Void</text>
            <text x="8" y="124" fill="#1e293b" fontSize="9.5">+ logWasteRecord(): Record</text>
          </g>

          {/* ==================== 4. ADMINISTRATOR (TOP RIGHT) ==================== */}
          <g transform="translate(730, 175)">
            <rect width="200" height="125" fill="#fdf2f8" stroke="#db2777" strokeWidth="1.5" rx="3" />
            <rect width="200" height="24" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" rx="3" />
            <text x="100" y="16" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#831843">Administrator</text>
            <text x="8" y="40" fill="#1e293b" fontSize="9.5">- adminId: String</text>
            <text x="8" y="54" fill="#1e293b" fontSize="9.5">- department: String</text>
            <line x1="0" y1="62" x2="200" y2="62" stroke="#fce7f3" strokeWidth="1.5" />
            <text x="8" y="78" fill="#1e293b" fontSize="9.5">+ verifyComplaint(id): Void</text>
            <text x="8" y="92" fill="#1e293b" fontSize="9.5">+ assignCollector(rep, col): Void</text>
            <text x="8" y="106" fill="#1e293b" fontSize="9.5">+ scheduleCollection(): Schedule</text>
            <text x="8" y="120" fill="#1e293b" fontSize="9.5">+ generateAnalytics(): Report</text>
          </g>

          {/* Inheritance lines to User */}
          <path d="M 145 175 L 145 160 L 490 160 L 490 150" fill="none" stroke="#334155" strokeWidth="1.5" markerEnd="url(#inheritance)" />
          <line x1="490" y1="175" x2="490" y2="150" stroke="#334155" strokeWidth="1.5" />
          <path d="M 830 175 L 830 160 L 490 160" fill="none" stroke="#334155" strokeWidth="1.5" />

          {/* ==================== 5. SMART BIN (CENTER LEFT) ==================== */}
          <g transform="translate(50, 360)">
            <rect width="200" height="150" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" rx="3" />
            <rect width="200" height="24" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" rx="3" />
            <text x="100" y="16" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#14532d">SmartBin</text>
            <text x="8" y="38" fill="#1e293b" fontSize="9.5">- binId: String</text>
            <text x="8" y="52" fill="#1e293b" fontSize="9.5">- locationName: String</text>
            <text x="8" y="66" fill="#1e293b" fontSize="9.5">- wardNo: Integer</text>
            <text x="8" y="80" fill="#1e293b" fontSize="9.5">- binType: String</text>
            <text x="8" y="94" fill="#1e293b" fontSize="9.5">- fillLevelPercent: Integer</text>
            <text x="8" y="108" fill="#1e293b" fontSize="9.5">- batteryPercent: Integer</text>
            <line x1="0" y1="114" x2="200" y2="114" stroke="#dcfce7" strokeWidth="1.5" />
            <text x="8" y="128" fill="#1e293b" fontSize="9.5">+ readSensor(): Integer</text>
            <text x="8" y="142" fill="#1e293b" fontSize="9.5">+ checkThreshold(): Boolean</text>
          </g>

          {/* ==================== 6. WASTE REPORT (CENTER) ==================== */}
          <g transform="translate(390, 360)">
            <rect width="200" height="155" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" rx="3" />
            <rect width="200" height="24" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" rx="3" />
            <text x="100" y="16" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#78350f">WasteReport</text>
            <text x="8" y="38" fill="#1e293b" fontSize="9.5">- reportId: String</text>
            <text x="8" y="52" fill="#1e293b" fontSize="9.5">- citizenId: String</text>
            <text x="8" y="66" fill="#1e293b" fontSize="9.5">- binId: String</text>
            <text x="8" y="80" fill="#1e293b" fontSize="9.5">- locationDesc: String</text>
            <text x="8" y="94" fill="#1e293b" fontSize="9.5">- wasteType: String</text>
            <text x="8" y="108" fill="#1e293b" fontSize="9.5">- status: ComplaintStatus</text>
            <text x="8" y="122" fill="#1e293b" fontSize="9.5">- severity: String</text>
            <line x1="0" y1="126" x2="200" y2="126" stroke="#fef3c7" strokeWidth="1.5" />
            <text x="8" y="138" fill="#1e293b" fontSize="9.5">+ verify(): Void</text>
            <text x="8" y="149" fill="#1e293b" fontSize="9.5">+ updateStatus(s): Void</text>
          </g>

          {/* ==================== 7. NOTIFICATION (CENTER RIGHT) ==================== */}
          <g transform="translate(730, 360)">
            <rect width="190" height="130" fill="#faf5ff" stroke="#9333ea" strokeWidth="1.5" rx="3" />
            <rect width="190" height="24" fill="#f3e8ff" stroke="#9333ea" strokeWidth="1.5" rx="3" />
            <text x="95" y="16" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#581c87">Notification</text>
            <text x="8" y="38" fill="#1e293b" fontSize="9.5">- notificationId: String</text>
            <text x="8" y="52" fill="#1e293b" fontSize="9.5">- recipientId: String</text>
            <text x="8" y="66" fill="#1e293b" fontSize="9.5">- message: String</text>
            <text x="8" y="80" fill="#1e293b" fontSize="9.5">- alertType: String</text>
            <text x="8" y="94" fill="#1e293b" fontSize="9.5">- sentAt: Timestamp</text>
            <line x1="0" y1="100" x2="190" y2="100" stroke="#f3e8ff" strokeWidth="1.5" />
            <text x="8" y="114" fill="#1e293b" fontSize="9.5">+ sendSMS(): Boolean</text>
            <text x="8" y="126" fill="#1e293b" fontSize="9.5">+ sendAppAlert(): Void</text>
          </g>

          {/* ==================== 8. COLLECTION SCHEDULE (BOTTOM CENTER) ==================== */}
          <g transform="translate(390, 565)">
            <rect width="200" height="135" fill="#f8fafc" stroke="#475569" strokeWidth="1.5" rx="3" />
            <rect width="200" height="24" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" rx="3" />
            <text x="100" y="16" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0f172a">CollectionSchedule</text>
            <text x="8" y="38" fill="#1e293b" fontSize="9.5">- scheduleId: String</text>
            <text x="8" y="52" fill="#1e293b" fontSize="9.5">- collectorId: String</text>
            <text x="8" y="66" fill="#1e293b" fontSize="9.5">- routeId: String</text>
            <text x="8" y="80" fill="#1e293b" fontSize="9.5">- scheduleDate: Date</text>
            <text x="8" y="94" fill="#1e293b" fontSize="9.5">- shift: String</text>
            <line x1="0" y1="100" x2="200" y2="100" stroke="#e2e8f0" strokeWidth="1.5" />
            <text x="8" y="114" fill="#1e293b" fontSize="9.5">+ generateRoute(): Route</text>
            <text x="8" y="128" fill="#1e293b" fontSize="9.5">+ markComplete(): Void</text>
          </g>

          {/* ==================== 9. ROUTE (BOTTOM RIGHT) ==================== */}
          <g transform="translate(730, 565)">
            <rect width="190" height="120" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1.5" rx="3" />
            <rect width="190" height="24" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" rx="3" />
            <text x="95" y="16" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0c4a6e">Route</text>
            <text x="8" y="38" fill="#1e293b" fontSize="9.5">- routeId: String</text>
            <text x="8" y="52" fill="#1e293b" fontSize="9.5">- waypoints: List&lt;String&gt;</text>
            <text x="8" y="66" fill="#1e293b" fontSize="9.5">- totalDistanceKm: Float</text>
            <line x1="0" y1="74" x2="190" y2="74" stroke="#e0f2fe" strokeWidth="1.5" />
            <text x="8" y="90" fill="#1e293b" fontSize="9.5">+ optimizeWaypoints(): List</text>
            <text x="8" y="106" fill="#1e293b" fontSize="9.5">+ calculateETA(): Time</text>
          </g>

          {/* ==================== 10. WASTE RECORD (BOTTOM LEFT) ==================== */}
          <g transform="translate(50, 565)">
            <rect width="200" height="130" fill="#fdf4ff" stroke="#a21caf" strokeWidth="1.5" rx="3" />
            <rect width="200" height="24" fill="#fae8ff" stroke="#a21caf" strokeWidth="1.5" rx="3" />
            <text x="100" y="16" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#701a75">WasteRecord</text>
            <text x="8" y="38" fill="#1e293b" fontSize="9.5">- recordId: String</text>
            <text x="8" y="52" fill="#1e293b" fontSize="9.5">- binId: String</text>
            <text x="8" y="66" fill="#1e293b" fontSize="9.5">- wetWasteKg: Float</text>
            <text x="8" y="80" fill="#1e293b" fontSize="9.5">- dryWasteKg: Float</text>
            <text x="8" y="94" fill="#1e293b" fontSize="9.5">- hazardousKg: Float</text>
            <line x1="0" y1="100" x2="200" y2="100" stroke="#fae8ff" strokeWidth="1.5" />
            <text x="8" y="115" fill="#1e293b" fontSize="9.5">+ computeTotalWeight(): Float</text>
            <text x="8" y="126" fill="#1e293b" fontSize="9.5">+ saveAudit(): Boolean</text>
          </g>

          {/* ==================== ASSOCIATIONS & MULTIPLICITIES ==================== */}
          {/* Citizen (1) --- (0..*) WasteReport */}
          <line x1="145" y1="295" x2="145" y2="330" stroke="#475569" strokeWidth="1.2" />
          <line x1="145" y1="330" x2="390" y2="400" stroke="#475569" strokeWidth="1.2" />
          <text x="155" y="315" fill="#475569" fontSize="9">1</text>
          <text x="365" y="392" fill="#475569" fontSize="9">0..*</text>
          <text x="210" y="340" fill="#475569" fontSize="8.5" fontStyle="italic">submits &gt;</text>

          {/* SmartBin (0..1) --- (0..*) WasteReport */}
          <line x1="250" y1="435" x2="390" y2="435" stroke="#475569" strokeWidth="1.2" />
          <text x="260" y="428" fill="#475569" fontSize="9">0..1</text>
          <text x="370" y="428" fill="#475569" fontSize="9">0..*</text>
          <text x="295" y="428" fill="#475569" fontSize="8.5" fontStyle="italic">&lt; associated with</text>

          {/* WasteReport (1..*) --- (1) Notification */}
          <line x1="590" y1="435" x2="730" y2="435" stroke="#475569" strokeWidth="1.2" />
          <text x="600" y="428" fill="#475569" fontSize="9">1..*</text>
          <text x="710" y="428" fill="#475569" fontSize="9">1</text>
          <text x="635" y="428" fill="#475569" fontSize="8.5" fontStyle="italic">triggers &gt;</text>

          {/* WasteCollector (1) --- (0..*) WasteReport */}
          <line x1="490" y1="300" x2="490" y2="360" stroke="#475569" strokeWidth="1.2" />
          <text x="495" y="320" fill="#475569" fontSize="9">1</text>
          <text x="495" y="350" fill="#475569" fontSize="9">0..*</text>
          <text x="500" y="335" fill="#475569" fontSize="8.5" fontStyle="italic">handles v</text>

          {/* Administrator (1) --- (0..*) CollectionSchedule */}
          <line x1="830" y1="300" x2="830" y2="520" stroke="#475569" strokeWidth="1.2" />
          <line x1="830" y1="520" x2="590" y2="600" stroke="#475569" strokeWidth="1.2" />
          <text x="835" y="320" fill="#475569" fontSize="9">1</text>
          <text x="615" y="590" fill="#475569" fontSize="9">0..*</text>
          <text x="730" y="530" fill="#475569" fontSize="8.5" fontStyle="italic">creates &gt;</text>

          {/* CollectionSchedule (1) --- (1) Route */}
          <line x1="590" y1="630" x2="730" y2="630" stroke="#475569" strokeWidth="1.2" />
          <text x="600" y="622" fill="#475569" fontSize="9">1</text>
          <text x="710" y="622" fill="#475569" fontSize="9">1</text>
          <text x="635" y="622" fill="#475569" fontSize="8.5" fontStyle="italic">follows &gt;</text>

          {/* SmartBin (1) --- (0..*) WasteRecord */}
          <line x1="145" y1="510" x2="145" y2="565" stroke="#475569" strokeWidth="1.2" />
          <text x="155" y="525" fill="#475569" fontSize="9">1</text>
          <text x="155" y="555" fill="#475569" fontSize="9">0..*</text>
          <text x="150" y="540" fill="#475569" fontSize="8.5" fontStyle="italic">audited by v</text>
        </svg>
      </div>
    </div>
  );
};
