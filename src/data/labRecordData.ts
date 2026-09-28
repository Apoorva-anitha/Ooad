export interface LabRecordSection {
  id: string;
  title: string;
  pageNumber: number;
}

export const LAB_SECTIONS: LabRecordSection[] = [
  { id: 'aim-purpose-scope', title: '1. Aim, Purpose & Scope', pageNumber: 1 },
  { id: 'requirements', title: '2. Functional & Non-Functional Requirements', pageNumber: 2 },
  { id: 'users-hw-sw', title: '3. System Users & HW/SW Requirements', pageNumber: 3 },
  { id: 'usecase-class', title: '4. Use Case & Class Diagrams', pageNumber: 4 },
  { id: 'sequence-collab', title: '5. Sequence & Collaboration Diagrams', pageNumber: 5 },
  { id: 'state-activity', title: '6. State Chart & Activity Diagrams', pageNumber: 6 },
  { id: 'deployment-component', title: '7. Deployment & Component Diagrams', pageNumber: 7 },
  { id: 'code-implementation', title: '8. Code & Database Implementation', pageNumber: 8 },
  { id: 'output-screens-1', title: '9. Output Screens - Citizen & Bins', pageNumber: 9 },
  { id: 'output-screens-2', title: '10. Output Screens - Collector & Admin', pageNumber: 10 },
  { id: 'result', title: '11. Lab Record Result', pageNumber: 11 },
];

export const AIM_TEXT = 
  "To develop a smart waste management application that helps citizens report waste, enables waste collectors to manage collection activities, monitors waste bins, and allows administrators to manage the entire waste management process efficiently.";

export const PURPOSE_TEXT = 
  "The main purpose of the system is to provide an automated, transparent, and eco-friendly digital platform for urban waste tracking, bin monitoring, and streamlined municipal operations.";

export const OBJECTIVES = [
  "To improve waste collection and disposal.",
  "To monitor waste bins and their fill levels.",
  "To reduce overflowing garbage and environmental pollution.",
  "To allow citizens to report unclean areas.",
  "To optimize waste collection routes.",
  "To improve communication between citizens, collectors, and administrators.",
  "To reduce manual work."
];

export const SCOPE_TEXT = 
  "The system covers the complete municipal solid waste management lifecycle, starting from automated IoT smart bin fill-level monitoring and citizen complaint registration, through administrative verification, dynamic collector task dispatching, route optimization, waste segregation recording, to real-time complaint status tracking, automated alerts, and analytical reporting.";

export const MAJOR_FUNCTIONS = [
  "User registration and login for citizens, waste collectors, and municipal administrators.",
  "Citizen waste complaint reporting with geolocation, ward selection, waste category, and photo evidence.",
  "Smart dustbin monitoring with ultrasonic fill-level detection and real-time status indicators.",
  "Waste collector management including profile tracking, vehicle assignment, and operational zones.",
  "Waste collection scheduling based on priority thresholds and designated collection shifts.",
  "Route optimization to minimize transit time, fuel consumption, and municipal vehicle emissions.",
  "Waste segregation tracking across organic (wet), recyclable (dry), and hazardous categories.",
  "Complaint status tracking with step-by-step audit trails from reporting to final resolution.",
  "Notifications and alerts delivered via SMS, push notification, and email for bin thresholds and assignments.",
  "Admin dashboard and report generation for ward-wise collection efficiency and citizen feedback."
];

export const FUNCTIONAL_REQUIREMENTS = [
  {
    title: "User Registration and Login",
    desc: "The system shall provide secure role-based registration and authentication for Citizens, Waste Collectors, and Municipal Administrators with encrypted password validation."
  },
  {
    title: "Citizen Management",
    desc: "The system shall maintain citizen profiles, address details, contact information, complaint submission history, and acknowledgment feedback."
  },
  {
    title: "Waste Complaint Reporting",
    desc: "Authenticated citizens shall be able to log unclean spots, overflowing community bins, or illegal dumping by specifying landmark, ward, waste category, and attaching optional photo evidence."
  },
  {
    title: "Smart Bin Monitoring",
    desc: "The system shall periodically ingest telemetry data from connected smart bins, displaying geographical coordinates, bin capacity, and operational condition."
  },
  {
    title: "Fill-Level Monitoring",
    desc: "The system shall track bin fill levels in real time (0-100%) and trigger automatic priority alerts when capacity crosses the 80% critical threshold."
  },
  {
    title: "Waste Collector Management",
    desc: "The Administrator shall register waste collectors, assign designated collection vehicles, define ward boundaries, and monitor active duty shifts."
  },
  {
    title: "Waste Collection Scheduling",
    desc: "The system shall allow administrators to generate daily morning and evening collection schedules for overflowing bins and verified citizen complaints."
  },
  {
    title: "Route Management",
    desc: "The system shall compute an ordered waypoint sequence connecting high-priority bins and reported locations to optimize vehicle travel distance and operational efficiency."
  },
  {
    title: "Complaint Assignment",
    desc: "The system or administrator shall assign verified citizen reports to the nearest available collector operating within the corresponding ward."
  },
  {
    title: "Waste Segregation",
    desc: "Collectors shall log segregated waste weights (wet/organic waste, dry/recyclable waste, and sanitary/hazardous waste) upon clearing each bin."
  },
  {
    title: "Status Updates",
    desc: "Collectors shall update complaint progress in real time (Verified → Assigned → Collection in Progress → Collected → Resolved)."
  },
  {
    title: "Notifications",
    desc: "The notification subsystem shall broadcast instant SMS/app alerts to citizens when their complaint progresses and alert collectors when new tasks are dispatched."
  },
  {
    title: "Admin Management",
    desc: "The Administrator shall have complete governance privileges over bins, collector allocations, complaint lifecycle verification, and system parameters."
  },
  {
    title: "Reports and Analytics",
    desc: "The system shall generate statistical reports highlighting total waste collected, category breakdown, ward performance, and average complaint resolution turnaround time."
  }
];

export const ROLE_CAPABILITIES = [
  {
    role: "Citizen",
    canDo: [
      "Register an account and log in securely.",
      "Submit geo-tagged waste complaints with description and photo.",
      "Track live status of submitted complaints (Reported to Resolved).",
      "View nearby public smart bins and their current fill levels.",
      "Receive SMS / email notifications when complaints are resolved."
    ]
  },
  {
    role: "Waste Collector",
    canDo: [
      "Log in and access daily assigned pickup routes.",
      "View designated smart bins and citizen complaint locations.",
      "Mark assigned tasks as 'In Progress' and 'Collected'.",
      "Record segregated waste weights (Wet, Dry, Hazardous).",
      "Receive real-time task dispatch alerts for overflowing bins."
    ]
  },
  {
    role: "Administrator",
    canDo: [
      "Supervise all municipal wards, smart bins, and collection vehicles.",
      "Verify incoming citizen complaints and reject spam entries.",
      "Assign collectors to high-priority waste spots and scheduled routes.",
      "Monitor real-time ultrasonic bin telemetry and critical capacity alerts.",
      "Generate monthly analytical reports and export collection audit sheets."
    ]
  }
];

export const NON_FUNCTIONAL_REQUIREMENTS = [
  {
    title: "Security",
    desc: "All citizen credentials, collector logs, and administrative actions must be protected using role-based access control (RBAC), salted password hashing, and encrypted data transmission (HTTPS/TLS)."
  },
  {
    title: "Reliability",
    desc: "Citizen reports, sensor readings, and collection logs must be accurately recorded in persistent relational storage without transactional loss or duplicate entries."
  },
  {
    title: "Performance",
    desc: "The system should return query responses, bin status dashboards, and complaint submissions within 2 seconds under standard municipal concurrent loads."
  },
  {
    title: "Usability",
    desc: "The user interface should be straightforward, accessible in local languages, and intuitive for both general citizens and municipal field workers on mobile devices."
  },
  {
    title: "Availability",
    desc: "The central server and reporting endpoints should maintain 99.5% uptime to accept 24/7 public garbage complaints and continuous IoT telemetry."
  },
  {
    title: "Scalability",
    desc: "The architectural framework must support scaling to accommodate thousands of smart bins, hundreds of field collection vehicles, and growing metropolitan populations."
  },
  {
    title: "Maintainability",
    desc: "The modular object-oriented design and clear separation of concerns (MVC architecture) shall allow easy component upgrades, bug fixes, and sensor driver integrations."
  },
  {
    title: "Data Integrity",
    desc: "Foreign key constraints, domain validations, and strict state transition rules ensure that recorded waste weights and complaint statuses cannot be tampered with or corrupted."
  },
  {
    title: "Environmental Sustainability",
    desc: "By minimizing unnecessary truck dispatches and optimizing travel routes, the system directly reduces carbon dioxide emissions, fuel burn, and untreated garbage overflow."
  }
];

export const SYSTEM_USERS = [
  {
    name: "Citizen",
    desc: "Registers into the portal, reports overflowing waste or unclean public spaces, monitors nearby smart dustbin levels, and receives resolution updates."
  },
  {
    name: "Waste Collector",
    desc: "Field municipal worker who logs in, receives assigned pickup schedules and route waypoints, empties designated bins, logs segregated waste weights, and updates task statuses."
  },
  {
    name: "Administrator",
    desc: "Central municipal supervisor who manages user accounts, verifies citizen complaints, dispatches emergency clearance teams, monitors real-time IoT bin levels, and analyzes civic waste statistics."
  },
  {
    name: "Smart Dustbin / IoT Sensor",
    desc: "Automated hardware node equipped with an ultrasonic sensor and microcontroller (e.g., ESP32/Arduino) that periodically transmits container fill percentages and lid states to the backend server."
  },
  {
    name: "Notification Service",
    desc: "Automated messaging service that dispatches SMS, email, and push notifications to citizens regarding complaint progress and to collectors for emergency task assignments."
  }
];

export const HW_SW_REQUIREMENTS = {
  hardware: [
    "Computer or mobile device (for citizens, collectors, and admin portal access).",
    "Minimum 4 GB RAM and Dual-Core 2.0 GHz processor.",
    "Active Internet connection (Wi-Fi, 4G/5G, or Ethernet).",
    "Smart dustbin equipped with HC-SR04 ultrasonic fill-level sensor and ESP32/NodeMCU Wi-Fi module (for IoT automated bin monitoring).",
    "GPS-enabled handheld smartphone or vehicle tracker (for route navigation and geo-tagged complaint logging)."
  ],
  software: [
    "Operating System: Windows 10/11, Linux (Ubuntu), or Android OS.",
    "Web Browser: Google Chrome, Mozilla Firefox, or Microsoft Edge.",
    "Frontend Technologies: HTML5, CSS3, JavaScript, React / Bootstrap.",
    "Server-side Technologies: Python (Flask) or Node.js (Express framework).",
    "Database: MySQL 8.0 or PostgreSQL 15 relational database.",
    "IoT Sensor Communication Service: MQTT broker or RESTful HTTP API endpoint.",
    "Map & Route Management Service: OpenStreetMap / Google Maps Directions API."
  ]
};

export const RESULT_TEXT = 
  "The Smart Waste Management System was successfully designed and implemented to support waste reporting, smart bin monitoring, collection scheduling, complaint tracking, and efficient waste management. The system streamlines municipal operations by integrating IoT-based bin fill telemetry, citizen-driven complaint reporting, and optimized collector route dispatching, thereby reducing manual labor, preventing garbage overflow, and promoting cleaner, sustainable urban environments.";

export const SAMPLE_SQL_SCHEMA = `-- CS1508 OOAD LAB: SMART WASTE MANAGEMENT SYSTEM
-- Database Creation
CREATE DATABASE smart_waste_db;
USE smart_waste_db;

-- 1. Users Table (Base User entity)
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_no VARCHAR(15) NOT NULL,
    role ENUM('citizen', 'collector', 'admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Citizens Table
CREATE TABLE citizens (
    citizen_id INT PRIMARY KEY,
    address TEXT NOT NULL,
    ward_no INT NOT NULL,
    FOREIGN KEY (citizen_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 3. Waste Collectors Table
CREATE TABLE waste_collectors (
    collector_id INT PRIMARY KEY,
    vehicle_no VARCHAR(20) NOT NULL,
    assigned_zone VARCHAR(50) NOT NULL,
    status ENUM('available', 'on_duty', 'off_duty') DEFAULT 'available',
    FOREIGN KEY (collector_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 4. Smart Bins Table (IoT Nodes)
CREATE TABLE smart_bins (
    bin_id VARCHAR(20) PRIMARY KEY,
    location_name VARCHAR(150) NOT NULL,
    ward_no INT NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    bin_type ENUM('Organic / Wet', 'Recyclable / Dry', 'Hazardous', 'General') NOT NULL,
    capacity_liters INT DEFAULT 200,
    fill_level_percent INT DEFAULT 0,
    battery_percent INT DEFAULT 100,
    lid_status ENUM('Closed', 'Open') DEFAULT 'Closed',
    last_ping TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 5. Waste Reports (Citizen Complaints)
CREATE TABLE waste_reports (
    report_id VARCHAR(20) PRIMARY KEY,
    citizen_id INT NOT NULL,
    bin_id VARCHAR(20),
    location_desc VARCHAR(255) NOT NULL,
    ward_no INT NOT NULL,
    waste_type VARCHAR(50) NOT NULL,
    description TEXT,
    severity ENUM('Low', 'Medium', 'High', 'Emergency Overflow') DEFAULT 'Medium',
    status ENUM('Reported', 'Verified', 'Assigned', 'Collection in Progress', 'Collected', 'Resolved') DEFAULT 'Reported',
    assigned_collector_id INT,
    reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP NULL,
    FOREIGN KEY (citizen_id) REFERENCES citizens(citizen_id),
    FOREIGN KEY (bin_id) REFERENCES smart_bins(bin_id),
    FOREIGN KEY (assigned_collector_id) REFERENCES waste_collectors(collector_id)
);

-- 6. Collection Schedules & Routes
CREATE TABLE collection_schedules (
    schedule_id VARCHAR(20) PRIMARY KEY,
    collector_id INT NOT NULL,
    route_id VARCHAR(20) NOT NULL,
    schedule_date DATE NOT NULL,
    shift ENUM('Morning', 'Evening') NOT NULL,
    status ENUM('Scheduled', 'In Progress', 'Completed') DEFAULT 'Scheduled',
    FOREIGN KEY (collector_id) REFERENCES waste_collectors(collector_id)
);

-- 7. Waste Records (Segregation & Disposal Audit)
CREATE TABLE waste_records (
    record_id VARCHAR(20) PRIMARY KEY,
    schedule_id VARCHAR(20) NOT NULL,
    bin_id VARCHAR(20) NOT NULL,
    wet_waste_kg DECIMAL(6, 2) DEFAULT 0.00,
    dry_waste_kg DECIMAL(6, 2) DEFAULT 0.00,
    hazardous_kg DECIMAL(6, 2) DEFAULT 0.00,
    collected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (schedule_id) REFERENCES collection_schedules(schedule_id),
    FOREIGN KEY (bin_id) REFERENCES smart_bins(bin_id)
);`;

export const SAMPLE_PYTHON_CODE = `"""
CS1508 OOAD LAB: SMART WASTE MANAGEMENT SYSTEM
Backend Application Module (app.py)
Technology: Python, Flask, SQLAlchemy ORM
"""
from flask import Flask, request, jsonify, render_template, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'smart-waste-secret-key-2026'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@localhost/smart_waste_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ==================== CONTROLLER ROUTES ====================

@app.route('/')
def home():
    return render_template('index.html')

# 1. USER AUTHENTICATION
@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    # Validate user credentials against DB
    user = User.query.filter_by(username=username).first()
    if user and user.verify_password(password):
        session['user_id'] = user.user_id
        session['role'] = user.role
        return jsonify({'status': 'success', 'role': user.role, 'name': user.full_name})
    return jsonify({'status': 'error', 'message': 'Invalid username or password'}), 401

# 2. CITIZEN COMPLAINT REPORTING
@app.route('/api/complaints/report', methods=['POST'])
def report_waste():
    data = request.get_json()
    new_report = WasteReport(
        report_id=f"REP-{int(datetime.now().timestamp())}",
        citizen_id=data.get('citizen_id'),
        bin_id=data.get('bin_id'),
        location_desc=data.get('location'),
        ward_no=data.get('ward_no'),
        waste_type=data.get('waste_type'),
        description=data.get('description'),
        severity=data.get('severity', 'Medium'),
        status='Reported',
        reported_at=datetime.now()
    )
    db.session.add(new_report)
    db.session.commit()
    # Trigger notification to Municipal Admin
    NotificationService.send_alert('admin', f"New Waste Complaint {new_report.report_id} in Ward {new_report.ward_no}")
    return jsonify({'status': 'success', 'report_id': new_report.report_id})

# 3. IOT SMART BIN TELEMETRY PING
@app.route('/api/bins/<bin_id>/telemetry', methods=['POST'])
def update_bin_telemetry(bin_id):
    data = request.get_json()
    fill_level = data.get('fill_level')
    bin_obj = SmartBin.query.filter_by(bin_id=bin_id).first()
    if not bin_obj:
        return jsonify({'error': 'Bin not found'}), 404
        
    bin_obj.fill_level_percent = fill_level
    bin_obj.battery_percent = data.get('battery', bin_obj.battery_percent)
    bin_obj.last_ping = datetime.now()
    
    # Auto-alert if bin exceeds critical fill threshold (80%)
    if fill_level >= 80:
        bin_obj.status = 'Critical (Alert)'
        NotificationService.send_alert('collector', f"CRITICAL: Bin {bin_id} at {bin_obj.location_name} is {fill_level}% full!")
    db.session.commit()
    return jsonify({'status': 'updated', 'bin_id': bin_id, 'fill_level': fill_level})

# 4. ADMIN COMPLAINT ASSIGNMENT
@app.route('/api/admin/assign_task', methods=['POST'])
def assign_task():
    data = request.get_json()
    report_id = data.get('report_id')
    collector_id = data.get('collector_id')
    
    report = WasteReport.query.filter_by(report_id=report_id).first()
    if report:
        report.assigned_collector_id = collector_id
        report.status = 'Assigned'
        db.session.commit()
        NotificationService.send_alert('collector', f"Task assigned: Complaint {report_id}")
        return jsonify({'status': 'assigned'})
    return jsonify({'error': 'Report not found'}), 404

# 5. COLLECTOR STATUS UPDATE & WASTE WEIGHING
@app.route('/api/collector/update_status', methods=['POST'])
def update_task_status():
    data = request.get_json()
    report_id = data.get('report_id')
    new_status = data.get('status')
    
    report = WasteReport.query.filter_by(report_id=report_id).first()
    if report:
        report.status = new_status
        if new_status == 'Resolved':
            report.resolved_at = datetime.now()
            # Send completion SMS to reporting Citizen
            NotificationService.send_alert('citizen', f"Your waste complaint {report_id} has been resolved successfully!")
        db.session.commit()
        return jsonify({'status': 'updated', 'current_status': new_status})
    return jsonify({'error': 'Report not found'}), 404

if __name__ == '__main__':
    app.run(port=5000, debug=True)
`;
