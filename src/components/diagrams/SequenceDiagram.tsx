import React from 'react';

export const SequenceDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-300 rounded-lg p-4 shadow-sm overflow-x-auto">
        <svg
          viewBox="0 0 980 660"
          className="w-full h-auto font-sans text-xs select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker id="seq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" />
            </marker>
            <marker id="seq-return" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 1 L 9 5 L 0 9" fill="none" stroke="#475569" strokeWidth="1.5" />
            </marker>
          </defs>

          {/* Background */}
          <rect width="980" height="660" fill="#ffffff" />

          {/* ==================== LIFELINE HEADERS ==================== */}
          {/* Lifeline 1: Citizen (X=90) */}
          <g transform="translate(30, 20)">
            <rect width="120" height="36" rx="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="60" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#713f12">:Citizen</text>
          </g>

          {/* Lifeline 2: Application (X=230) */}
          <g transform="translate(170, 20)">
            <rect width="120" height="36" rx="4" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.5" />
            <text x="60" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#312e81">:Application</text>
          </g>

          {/* Lifeline 3: WasteReport (X=370) */}
          <g transform="translate(310, 20)">
            <rect width="120" height="36" rx="4" fill="#fed7aa" stroke="#c2410c" strokeWidth="1.5" />
            <text x="60" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#7c2d12">:WasteReport</text>
          </g>

          {/* Lifeline 4: Administrator (X=520) */}
          <g transform="translate(460, 20)">
            <rect width="120" height="36" rx="4" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
            <text x="60" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#831843">:Administrator</text>
          </g>

          {/* Lifeline 5: WasteCollector (X=670) */}
          <g transform="translate(610, 20)">
            <rect width="120" height="36" rx="4" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1.5" />
            <text x="60" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#1e3a8a">:WasteCollector</text>
          </g>

          {/* Lifeline 6: NotificationService (X=820) */}
          <g transform="translate(760, 20)">
            <rect width="130" height="36" rx="4" fill="#dcfce7" stroke="#15803d" strokeWidth="1.5" />
            <text x="65" y="22" textAnchor="middle" fontWeight="bold" fontSize="11" fill="#14532d">:NotificationService</text>
          </g>

          {/* Lifeline Vertical Dashed Lines */}
          <line x1="90" y1="56" x2="90" y2="620" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 5" />
          <line x1="230" y1="56" x2="230" y2="620" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 5" />
          <line x1="370" y1="56" x2="370" y2="620" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 5" />
          <line x1="520" y1="56" x2="520" y2="620" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 5" />
          <line x1="670" y1="56" x2="670" y2="620" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 5" />
          <line x1="825" y1="56" x2="825" y2="620" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 5" />

          {/* ==================== ACTIVATION BARS ==================== */}
          <rect x="85" y="80" width="10" height="70" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
          <rect x="225" y="85" width="10" height="150" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1" />
          <rect x="365" y="105" width="10" height="420" fill="#fed7aa" stroke="#c2410c" strokeWidth="1" />
          <rect x="515" y="195" width="10" height="110" fill="#fce7f3" stroke="#be185d" strokeWidth="1" />
          <rect x="665" y="275" width="10" height="230" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="1" />
          <rect x="820" y="475" width="10" height="95" fill="#dcfce7" stroke="#15803d" strokeWidth="1" />
          <rect x="85" y="540" width="10" height="50" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />

          {/* ==================== SEQUENTIAL MESSAGES ==================== */}

          {/* 1. Citizen -> Application */}
          <line x1="95" y1="95" x2="225" y2="95" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
          <text x="160" y="88" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">1: submitWasteReport(binId, photo, desc)</text>

          {/* 2. Application -> WasteReport */}
          <line x1="235" y1="120" x2="365" y2="120" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
          <text x="300" y="113" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">2: createReport(data, 'Reported')</text>

          {/* 3. WasteReport -> Application (return) */}
          <line x1="365" y1="145" x2="235" y2="145" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#seq-return)" />
          <text x="300" y="138" textAnchor="middle" fill="#475569" fontSize="9">3: ackReportCreated(reportId)</text>

          {/* 4. Application -> Citizen (ack) */}
          <line x1="225" y1="165" x2="95" y2="165" stroke="#475569" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#seq-return)" />
          <text x="160" y="158" textAnchor="middle" fill="#475569" fontSize="9">4: showComplaintReference(reportId)</text>

          {/* 5. WasteReport -> Administrator */}
          <line x1="375" y1="210" x2="515" y2="210" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
          <text x="445" y="203" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">5: notifyNewComplaint(reportId)</text>

          {/* 6. Administrator self call: verify */}
          <path d="M 525 225 H 555 V 245 H 525" fill="none" stroke="#1e293b" strokeWidth="1.2" markerEnd="url(#seq-arrow)" />
          <text x="560" y="238" fill="#0f172a" fontSize="9" fontWeight="600">6: verifyLocationAndSpam()</text>

          {/* 7. Administrator -> WasteReport */}
          <line x1="515" y1="260" x2="375" y2="260" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
          <text x="445" y="253" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">7: updateStatus('Verified')</text>

          {/* 8. Administrator -> WasteCollector */}
          <line x1="525" y1="290" x2="665" y2="290" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
          <text x="595" y="283" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">8: assignTask(reportId, routeId)</text>

          {/* 9. Collector self call */}
          <path d="M 675 320 H 705 V 340 H 675" fill="none" stroke="#1e293b" strokeWidth="1.2" markerEnd="url(#seq-arrow)" />
          <text x="710" y="333" fill="#0f172a" fontSize="9" fontWeight="600">9: acceptTaskAndStartRoute()</text>

          {/* 10. Collector -> WasteReport */}
          <line x1="665" y1="365" x2="375" y2="365" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
          <text x="520" y="358" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">10: updateStatus('Collection in Progress')</text>

          {/* 11. Collector self call: Empty & weigh */}
          <path d="M 675 395 H 710 V 415 H 675" fill="none" stroke="#1e293b" strokeWidth="1.2" markerEnd="url(#seq-arrow)" />
          <text x="715" y="408" fill="#0f172a" fontSize="9" fontWeight="600">11: emptyBinAndRecordWeight(wet, dry, haz)</text>

          {/* 12. Collector -> WasteReport */}
          <line x1="665" y1="440" x2="375" y2="440" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
          <text x="520" y="433" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">12: markCollectedAndClose()</text>

          {/* 13. WasteReport -> NotificationService */}
          <line x1="375" y1="485" x2="820" y2="485" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
          <text x="600" y="478" textAnchor="middle" fill="#0f172a" fontSize="9.5" fontWeight="600">13: triggerResolutionNotice(reportId, 'Resolved')</text>

          {/* 14. NotificationService self call: Prepare SMS */}
          <path d="M 830 510 H 860 V 530 H 830" fill="none" stroke="#1e293b" strokeWidth="1.2" markerEnd="url(#seq-arrow)" />
          <text x="865" y="523" fill="#0f172a" fontSize="9" fontWeight="600">14: composeSMSAlert()</text>

          {/* 15. NotificationService -> Citizen */}
          <line x1="820" y1="555" x2="95" y2="555" stroke="#1e293b" strokeWidth="1.5" markerEnd="url(#seq-arrow)" />
          <text x="460" y="548" textAnchor="middle" fill="#15803d" fontSize="9.5" fontWeight="700">15: deliverResolutionSMS("Complaint resolved successfully!")</text>

          {/* 16. Citizen Ack display */}
          <text x="95" y="585" fill="#713f12" fontSize="9" fontStyle="italic">Complaint status updated to 'Resolved' on citizen portal</text>
        </svg>
      </div>
    </div>
  );
};
