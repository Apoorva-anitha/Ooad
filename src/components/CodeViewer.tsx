import React, { useState } from 'react';
import { Code, Copy, Check, FileCode, Monitor, Image as ImageIcon } from 'lucide-react';
import { SAMPLE_PYTHON_CODE, SAMPLE_SQL_SCHEMA } from '../data/labRecordData';
import { 
  VsCodePythonScreenshot, 
  MysqlWorkbenchScreenshot, 
  CitizenPortalScreenshot, 
  AdminDashboardScreenshot, 
  CollectorTaskScreenshot 
} from './LabRecordScreenshots';

export const CodeViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'python' | 'sql' | 'iot'>('python');
  const [viewMode, setViewMode] = useState<'code' | 'screenshots'>('screenshots');
  const [copied, setCopied] = useState<boolean>(false);

  const IOT_ARDUINO_CODE = `/*
 * Smart Waste Management System - IoT Node Firmware
 * Target: ESP32 + HC-SR04 Ultrasonic Distance Sensor + WiFi + MQTT
 * Measures fill level (%) and posts telemetry to central MQTT broker
 */

#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "MUNICIPAL_CORP_IOT_WIFI";
const char* password = "SECURE_WIFI_PASS";
const char* mqtt_server = "192.168.1.100";
const int mqtt_port = 1883;
const char* bin_id = "BIN-101";

#define TRIG_PIN 5
#define ECHO_PIN 18
#define TOTAL_BIN_HEIGHT_CM 120.0

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\\nWiFi Connected!");

  client.setServer(mqtt_server, mqtt_port);
}

float measureDistanceCm() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH);
  float distance = (duration * 0.0343) / 2.0;
  return distance;
}

void loop() {
  if (!client.connected()) {
    client.connect(bin_id);
  }
  client.loop();

  float distanceCm = measureDistanceCm();
  // Fill % calculation: 0cm distance = 100% full; 120cm distance = 0% full
  float fillPercent = ((TOTAL_BIN_HEIGHT_CM - distanceCm) / TOTAL_BIN_HEIGHT_CM) * 100.0;
  if (fillPercent < 0) fillPercent = 0;
  if (fillPercent > 100) fillPercent = 100;

  char payload[128];
  snprintf(payload, sizeof(payload), 
           "{\\"bin_id\\": \\"%s\\", \\"fill_percent\\": %.1f, \\"lid\\": \\"closed\\"}", 
           bin_id, fillPercent);

  // Publish to MQTT topic
  client.publish("smartwaste/bins/telemetry", payload);
  Serial.println(payload);

  // Deep sleep or delay 60 seconds
  delay(60000);
}
`;

  const getCode = () => {
    switch (activeTab) {
      case 'python':
        return SAMPLE_PYTHON_CODE;
      case 'sql':
        return SAMPLE_SQL_SCHEMA;
      case 'iot':
        return IOT_ARDUINO_CODE;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl flex flex-col gap-6">
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
              <FileCode className="w-5 h-5" />
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Source Code &amp; Execution Output Screenshots
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Full source code and high-resolution execution screenshots formatted for the lab manual.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode Toggle */}
          <div className="inline-flex p-1 bg-blue-50 border border-blue-200 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setViewMode('screenshots')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                viewMode === 'screenshots' ? 'bg-blue-600 text-white shadow-xs' : 'text-blue-900 hover:text-blue-950'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Screenshots Gallery</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                viewMode === 'code' ? 'bg-blue-600 text-white shadow-xs' : 'text-blue-900 hover:text-blue-950'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Raw Code Files</span>
            </button>
          </div>

          {viewMode === 'code' && (
            <>
              <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('python')}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                    activeTab === 'python' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  app.py (Flask)
                </button>
                <button
                  onClick={() => setActiveTab('sql')}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                    activeTab === 'sql' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  database.sql (MySQL)
                </button>
                <button
                  onClick={() => setActiveTab('iot')}
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${
                    activeTab === 'iot' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  iot_sensor.ino
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </>
          )}
        </div>
      </div>

      {viewMode === 'screenshots' ? (
        <div className="space-y-6">
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <h3 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-2">
              <span>Figure 9: VS Code IDE Screenshot — Python Flask REST API Controller</span>
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              Captures controller logic, route endpoints, ultrasonic threshold alert triggers, and live terminal execution log.
            </p>
            <VsCodePythonScreenshot />
          </div>

          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <h3 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-2">
              <span>Figure 10: MySQL Workbench Screenshot — Relational Database Schema &amp; Query Results</span>
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              Captures table definition, foreign key joins, and dynamic SQL query filtering bins exceeding 80% capacity.
            </p>
            <MysqlWorkbenchScreenshot />
          </div>

          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
            <h3 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-2">
              <span>Figure 11: Output Screen 1 — Citizen Waste Complaint Reporting Portal</span>
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              Live web UI screenshot showing citizen complaint generation, geotagging, waste category, and resolution status.
            </p>
            <CitizenPortalScreenshot />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-800 mb-1">
                Figure 12: Output Screen 2 — IoT Dustbin Live Telemetry &amp; Admin Dashboard
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                Live gauge metrics and automated critical alert dispatching for high-priority bins.
              </p>
              <AdminDashboardScreenshot />
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-800 mb-1">
                Figure 13: Output Screen 3 — Collector Field Task &amp; Weighbridge Clearance
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                Collector task dispatch, vehicle tracking, electronic weighbridge tare/gross slip, and area sanitation seal.
              </p>
              <CollectorTaskScreenshot />
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950 text-slate-200 shadow-md">
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>
              {activeTab === 'python' && 'Backend API Controller: app.py'}
              {activeTab === 'sql' && 'Relational Database Schema: database.sql'}
              {activeTab === 'iot' && 'Microcontroller Firmware: iot_sensor.ino'}
            </span>
            <span>UTF-8 • LF</span>
          </div>
          <div className="p-4 font-mono text-xs leading-relaxed max-h-[580px] overflow-y-auto">
            <pre>{getCode()}</pre>
          </div>
        </div>
      )}
    </div>
  );
};
