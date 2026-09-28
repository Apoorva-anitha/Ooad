export interface User {
  userId: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  role: 'citizen' | 'collector' | 'admin';
  createdDate: string;
}

export interface Citizen extends User {
  citizenId: string;
  address: string;
  wardNo: number;
}

export interface WasteCollector extends User {
  collectorId: string;
  vehicleNo: string;
  assignedZone: string;
  status: 'available' | 'on_duty' | 'off_duty';
}

export interface Administrator extends User {
  adminId: string;
  department: string;
}

export interface SmartBin {
  binId: string;
  location: string;
  wardNo: number;
  latitude: number;
  longitude: number;
  binType: 'Organic / Wet' | 'Recyclable / Dry' | 'Hazardous / E-Waste' | 'General Waste';
  capacityLiters: number;
  fillLevelPercent: number;
  batteryPercent: number;
  lastUpdated: string;
  status: 'Normal' | 'Medium' | 'Critical (Alert)' | 'Maintenance Required';
  lidStatus: 'Closed' | 'Open';
}

export type ComplaintStatus = 
  | 'Reported' 
  | 'Verified' 
  | 'Assigned' 
  | 'Collection in Progress' 
  | 'Collected' 
  | 'Resolved';

export interface WasteReport {
  reportId: string;
  citizenId: string;
  citizenName: string;
  binId?: string;
  location: string;
  wardNo: number;
  wasteType: string;
  description: string;
  photoUrl?: string;
  reportedAt: string;
  status: ComplaintStatus;
  severity: 'Low' | 'Medium' | 'High' | 'Emergency Overflow';
  assignedCollectorId?: string;
  assignedCollectorName?: string;
  verifiedAt?: string;
  collectedAt?: string;
  resolvedAt?: string;
  adminRemarks?: string;
}

export interface CollectionSchedule {
  scheduleId: string;
  collectorId: string;
  collectorName: string;
  routeId: string;
  date: string;
  shift: 'Morning (6 AM - 12 PM)' | 'Evening (2 PM - 8 PM)';
  targetBins: string[];
  status: 'Scheduled' | 'In Progress' | 'Completed';
  totalCollectedKg?: number;
}

export interface WasteRecord {
  recordId: string;
  scheduleId: string;
  collectorId: string;
  binId: string;
  collectedAt: string;
  wetWasteKg: number;
  dryWasteKg: number;
  hazardousKg: number;
  status: 'Processed' | 'Sent to Recycling' | 'Composted';
}

export interface NotificationItem {
  id: string;
  recipientId: string;
  recipientRole: 'citizen' | 'collector' | 'admin' | 'all';
  title: string;
  message: string;
  timestamp: string;
  type: 'info' | 'warning' | 'success' | 'alert';
  read: boolean;
}
