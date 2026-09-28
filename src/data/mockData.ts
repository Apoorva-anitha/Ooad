import { Citizen, WasteCollector, Administrator, SmartBin, WasteReport, CollectionSchedule, WasteRecord, NotificationItem } from '../types';

export const INITIAL_CITIZENS: Citizen[] = [
  {
    userId: 'U-101',
    citizenId: 'CIT-101',
    username: 'anitha_c',
    name: 'Anitha Raman',
    email: 'anitha.raman@gmail.com',
    phone: '+91 98401 23456',
    role: 'citizen',
    address: 'No. 42, Gandhi Road, Ward 12, Chennai',
    wardNo: 12,
    createdDate: '2026-08-10'
  },
  {
    userId: 'U-102',
    citizenId: 'CIT-102',
    username: 'karthik_v',
    name: 'Karthik V.',
    email: 'karthik.v@yahoo.com',
    phone: '+91 97102 34567',
    role: 'citizen',
    address: 'Plot 18, 2nd Cross Street, Ward 14, Chennai',
    wardNo: 14,
    createdDate: '2026-08-15'
  }
];

export const INITIAL_COLLECTORS: WasteCollector[] = [
  {
    userId: 'U-201',
    collectorId: 'COL-201',
    username: 'ramesh_k',
    name: 'Ramesh Kumar',
    email: 'ramesh.collector@chennaicorp.gov.in',
    phone: '+91 94440 88991',
    role: 'collector',
    vehicleNo: 'TN-09-CW-4521',
    assignedZone: 'Zone 5 (Ward 12-14)',
    status: 'on_duty',
    createdDate: '2026-01-10'
  },
  {
    userId: 'U-202',
    collectorId: 'COL-202',
    username: 'selvam_m',
    name: 'M. Selvam',
    email: 'selvam.collector@chennaicorp.gov.in',
    phone: '+91 94442 77114',
    role: 'collector',
    vehicleNo: 'TN-09-CW-4890',
    assignedZone: 'Zone 5 (Ward 12-14)',
    status: 'available',
    createdDate: '2026-02-14'
  }
];

export const INITIAL_ADMINS: Administrator[] = [
  {
    userId: 'U-301',
    adminId: 'ADM-301',
    username: 'admin_suresh',
    name: 'Suresh Babu',
    email: 'suresh.zonal@chennaicorp.gov.in',
    phone: '+91 98840 55123',
    role: 'admin',
    department: 'Solid Waste Management & Sanitation Department',
    createdDate: '2025-11-01'
  }
];

export const INITIAL_BINS: SmartBin[] = [
  {
    binId: 'BIN-101',
    location: 'Central Bus Terminal, Stand 4, Ward 12',
    wardNo: 12,
    latitude: 13.0827,
    longitude: 80.2707,
    binType: 'General Waste',
    capacityLiters: 300,
    fillLevelPercent: 92,
    batteryPercent: 88,
    lastUpdated: '5 mins ago',
    status: 'Critical (Alert)',
    lidStatus: 'Closed'
  },
  {
    binId: 'BIN-102',
    location: 'Green Park North Entrance, Ward 12',
    wardNo: 12,
    latitude: 13.0842,
    longitude: 80.2721,
    binType: 'Organic / Wet',
    capacityLiters: 200,
    fillLevelPercent: 45,
    batteryPercent: 94,
    lastUpdated: '12 mins ago',
    status: 'Normal',
    lidStatus: 'Closed'
  },
  {
    binId: 'BIN-103',
    location: 'Market Complex Main Gate, Ward 14',
    wardNo: 14,
    latitude: 13.0865,
    longitude: 80.2689,
    binType: 'Recyclable / Dry',
    capacityLiters: 250,
    fillLevelPercent: 84,
    batteryPercent: 79,
    lastUpdated: '2 mins ago',
    status: 'Critical (Alert)',
    lidStatus: 'Open'
  },
  {
    binId: 'BIN-104',
    location: 'Metro Station Exit 2 Plaza, Ward 12',
    wardNo: 12,
    latitude: 13.0811,
    longitude: 80.2745,
    binType: 'General Waste',
    capacityLiters: 200,
    fillLevelPercent: 28,
    batteryPercent: 96,
    lastUpdated: '20 mins ago',
    status: 'Normal',
    lidStatus: 'Closed'
  },
  {
    binId: 'BIN-105',
    location: 'Government Hospital Road, Ward 13',
    wardNo: 13,
    latitude: 13.089,
    longitude: 80.265,
    binType: 'Hazardous / E-Waste',
    capacityLiters: 150,
    fillLevelPercent: 74,
    batteryPercent: 82,
    lastUpdated: '8 mins ago',
    status: 'Medium',
    lidStatus: 'Closed'
  }
];

export const INITIAL_REPORTS: WasteReport[] = [
  {
    reportId: 'REP-2026-001',
    citizenId: 'CIT-101',
    citizenName: 'Anitha Raman',
    binId: 'BIN-101',
    location: 'Central Bus Terminal, behind kiosk #3',
    wardNo: 12,
    wasteType: 'Overflowing Mixed Trash',
    description: 'Community bin has been overflowing onto pedestrian walkway since morning. Stray animals gathering.',
    severity: 'Emergency Overflow',
    status: 'Reported',
    reportedAt: '2026-09-13 07:45 AM',
    photoUrl: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=400&auto=format&fit=crop&q=60'
  },
  {
    reportId: 'REP-2026-002',
    citizenId: 'CIT-102',
    citizenName: 'Karthik V.',
    binId: 'BIN-103',
    location: 'Market Complex corner pavement',
    wardNo: 14,
    wasteType: 'Commercial Cardboard & Plastic',
    description: 'Vendor packaging waste dumped outside recyclable bin after morning auction.',
    severity: 'High',
    status: 'Verified',
    reportedAt: '2026-09-13 08:15 AM',
    verifiedAt: '2026-09-13 08:40 AM',
    adminRemarks: 'Verified by Zonal Supervisor. High pedestrian density area.'
  },
  {
    reportId: 'REP-2026-003',
    citizenId: 'CIT-101',
    citizenName: 'Anitha Raman',
    binId: 'BIN-105',
    location: 'Hospital road rear corner',
    wardNo: 13,
    wasteType: 'Discarded Clinic Packaging',
    description: 'Discarded non-biomedical packaging containers left beside tree shade.',
    severity: 'Medium',
    status: 'Assigned',
    assignedCollectorId: 'COL-201',
    assignedCollectorName: 'Ramesh Kumar',
    reportedAt: '2026-09-12 04:30 PM',
    verifiedAt: '2026-09-12 05:10 PM',
    adminRemarks: 'Assigned to Ramesh Kumar (Vehicle TN-09-CW-4521).'
  }
];

export const INITIAL_SCHEDULES: CollectionSchedule[] = [
  {
    scheduleId: 'SCH-801',
    collectorId: 'COL-201',
    collectorName: 'Ramesh Kumar',
    routeId: 'RT-ZONE5-AM',
    date: '2026-09-13',
    shift: 'Morning (6 AM - 12 PM)',
    targetBins: ['BIN-101', 'BIN-103', 'BIN-105'],
    status: 'In Progress',
    totalCollectedKg: 142
  }
];

export const INITIAL_RECORDS: WasteRecord[] = [
  {
    recordId: 'REC-901',
    scheduleId: 'SCH-801',
    collectorId: 'COL-201',
    binId: 'BIN-102',
    collectedAt: '2026-09-13 07:10 AM',
    wetWasteKg: 85.5,
    dryWasteKg: 24.0,
    hazardousKg: 2.5,
    status: 'Processed'
  },
  {
    recordId: 'REC-902',
    scheduleId: 'SCH-801',
    collectorId: 'COL-201',
    binId: 'BIN-104',
    collectedAt: '2026-09-13 08:20 AM',
    wetWasteKg: 12.0,
    dryWasteKg: 46.5,
    hazardousKg: 0.0,
    status: 'Sent to Recycling'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'NOTIF-1',
    recipientId: 'ADM-301',
    recipientRole: 'admin',
    title: 'Critical Fill Level Alert',
    message: 'Smart Bin BIN-101 (Central Bus Terminal) reached 92% capacity.',
    timestamp: '5 mins ago',
    type: 'alert',
    read: false
  },
  {
    id: 'NOTIF-2',
    recipientId: 'CIT-101',
    recipientRole: 'citizen',
    title: 'Complaint Verified',
    message: 'Your waste complaint REP-2026-003 has been verified and assigned to collector Ramesh Kumar.',
    timestamp: 'Yesterday 05:12 PM',
    type: 'info',
    read: true
  },
  {
    id: 'NOTIF-3',
    recipientId: 'COL-201',
    recipientRole: 'collector',
    title: 'New Route Assigned',
    message: 'Morning Shift Route RT-ZONE5-AM assigned with 3 high-priority waypoints.',
    timestamp: 'Today 06:00 AM',
    type: 'info',
    read: true
  }
];
