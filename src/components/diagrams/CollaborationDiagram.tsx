import React from 'react';

export const CollaborationDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-lg p-4 shadow-sm overflow-x-auto">
        <svg
          viewBox="0 0 940 600"
          className="w-full h-auto font-sans text-xs select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="collab-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 9 5 L 0 9" fill="none" stroke="#2563eb" strokeWidth="1.8" />
            </marker>
            <marker id="collab-arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 9 5 L 0 9" fill="none" stroke="#16a34a" strokeWidth="1.8" />
            </marker>
            <marker id="collab-arrow-pink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 9 5 L 0 9" fill="none" stroke="#db2777" strokeWidth="1.8" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="940" height="600" fill="#ffffff" />

          {/* ==================== OBJECTS / NODES ==================== */}

          {/* 1. :Citizen (Top Left) */}
          <g transform="translate(60, 60)">
            <rect width="140" height="46" rx="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="70" y="28" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#713f12"><u>c : Citizen</u></text>
          </g>

          {/* 2. :WasteManagementApp (Top Center) */}
          <g transform="translate(400, 60)">
            <rect width="170" height="46" rx="4" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.5" />
            <text x="85" y="28" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#312e81"><u>:WasteManagementApp</u></text>
          </g>

          {/* 3. :Administrator (Top Right) */}
          <g transform="translate(740, 60)">
            <rect width="150" height="46" rx="4" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
            <text x="75" y="28" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#831843"><u>adm : Administrator</u></text>
          </g>

          {/* 4. :ComplaintController (Center) */}
          <g transform="translate(400, 240)">
            <rect width="170" height="46" rx="4" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.5" />
            <text x="85" y="28" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#7c2d12"><u>ctrl : ComplaintController</u></text>
          </g>

          {/* 5. :Database (Center Left) */}
          <g transform="translate(60, 240)">
            <rect width="140" height="46" rx="4" fill="#f1f5f9" stroke="#475569" strokeWidth="1.5" />
            <text x="70" y="28" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#0f172a"><u>db : Database</u></text>
          </g>

          {/* 6. :WasteCollector (Center Right) */}
          <g transform="translate(740, 240)">
            <rect width="150" height="46" rx="4" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="75" y="28" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#1e3a8a"><u>col : WasteCollector</u></text>
          </g>

          {/* 7. :WasteReport (Bottom Center) */}
          <g transform="translate(400, 440)">
            <rect width="170" height="46" rx="4" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="85" y="28" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#78350f"><u>r : WasteReport</u></text>
          </g>

          {/* 8. :NotificationService (Bottom Right) */}
          <g transform="translate(740, 440)">
            <rect width="160" height="46" rx="4" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
            <text x="80" y="28" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#14532d"><u>notif : NotificationService</u></text>
          </g>

          {/* ==================== STRUCTURAL LINKS ==================== */}
          {/* Citizen <--> App */}
          <line x1="200" y1="83" x2="400" y2="83" stroke="#94a3b8" strokeWidth="1.5" />
          
          {/* App <--> Admin */}
          <line x1="570" y1="83" x2="740" y2="83" stroke="#94a3b8" strokeWidth="1.5" />

          {/* App <--> Controller */}
          <line x1="485" y1="106" x2="485" y2="240" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Controller <--> DB */}
          <line x1="400" y1="263" x2="200" y2="263" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Controller <--> Collector */}
          <line x1="570" y1="263" x2="740" y2="263" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Controller <--> WasteReport */}
          <line x1="485" y1="286" x2="485" y2="440" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Collector <--> NotificationService */}
          <line x1="815" y1="286" x2="815" y2="440" stroke="#94a3b8" strokeWidth="1.5" />

          {/* WasteReport <--> NotificationService */}
          <line x1="570" y1="463" x2="740" y2="463" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Citizen <--> NotificationService (Diagonal long link) */}
          <path d="M 130 106 L 130 540 L 740 540 L 800 486" fill="none" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 4" />

          {/* ==================== NUMBERED LABELED MESSAGES ==================== */}

          {/* 1 & 2: Citizen -> App */}
          <line x1="230" y1="73" x2="360" y2="73" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#collab-arrow)" />
          <text x="300" y="65" textAnchor="middle" fill="#1e3a8a" fontSize="9" fontWeight="bold">1: login()</text>
          <text x="300" y="78" textAnchor="middle" fill="#1e3a8a" fontSize="9" fontWeight="bold">2: submitComplaint(binId, photo)</text>

          {/* 3: App -> Controller */}
          <line x1="472" y1="130" x2="472" y2="210" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#collab-arrow)" />
          <text x="395" y="170" fill="#1e3a8a" fontSize="9" fontWeight="bold">3: processReport()</text>

          {/* 4: Controller -> DB */}
          <line x1="380" y1="253" x2="230" y2="253" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#collab-arrow)" />
          <text x="305" y="245" textAnchor="middle" fill="#1e3a8a" fontSize="9" fontWeight="bold">4: saveReportData()</text>

          {/* 5: App -> Admin */}
          <line x1="590" y1="73" x2="710" y2="73" stroke="#db2777" strokeWidth="1.5" markerEnd="url(#collab-arrow-pink)" />
          <text x="650" y="65" textAnchor="middle" fill="#831843" fontSize="9" fontWeight="bold">5: alertNewReport()</text>

          {/* 6: Admin -> Controller */}
          <line x1="720" y1="95" x2="570" y2="230" stroke="#db2777" strokeWidth="1.5" markerEnd="url(#collab-arrow-pink)" />
          <text x="660" y="150" fill="#831843" fontSize="9" fontWeight="bold">6: verifyComplaint()</text>
          <text x="660" y="165" fill="#831843" fontSize="9" fontWeight="bold">7: assignCollector(colId)</text>

          {/* 8: Controller -> Collector */}
          <line x1="590" y1="253" x2="710" y2="253" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#collab-arrow)" />
          <text x="650" y="245" textAnchor="middle" fill="#1e3a8a" fontSize="9" fontWeight="bold">8: dispatchTask(reportId)</text>

          {/* 9: Controller -> WasteReport */}
          <line x1="472" y1="310" x2="472" y2="415" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#collab-arrow)" />
          <text x="385" y="365" fill="#1e3a8a" fontSize="9" fontWeight="bold">9: updateStatus('Assigned')</text>

          {/* 10: Collector -> NotificationService */}
          <line x1="827" y1="310" x2="827" y2="415" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#collab-arrow-green)" />
          <text x="835" y="365" fill="#14532d" fontSize="9" fontWeight="bold">10: completePickup()</text>

          {/* 11: WasteReport -> NotificationService */}
          <line x1="590" y1="453" x2="710" y2="453" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#collab-arrow-green)" />
          <text x="650" y="445" textAnchor="middle" fill="#14532d" fontSize="9" fontWeight="bold">11: setStatus('Resolved')</text>

          {/* 12: NotificationService -> Citizen */}
          <line x1="720" y1="530" x2="160" y2="530" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#collab-arrow-green)" />
          <text x="440" y="522" textAnchor="middle" fill="#14532d" fontSize="9" fontWeight="bold">12: sendResolutionAlert("Complaint Resolved")</text>
        </svg>
      </div>
    </div>
  );
};
