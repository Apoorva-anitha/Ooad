import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Server, 
  Globe, 
  Sparkles, 
  Terminal, 
  FolderGit2, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  FileCode
} from 'lucide-react';

interface RenderDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RenderDeployModal: React.FC<RenderDeployModalProps> = ({ isOpen, onClose }) => {
  const [activeDeployTab, setActiveDeployTab] = useState<'static' | 'node' | 'yaml'>('static');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const renderYamlContent = `# Render Blueprint Configuration (render.yaml)
services:
  # Static Site: 100% Free, Global CDN, Zero Cold Starts
  - type: web
    name: smart-waste-management-ui
    runtime: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html`;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white font-bold">
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Deployment Guide
                  </span>
                  <span className="text-xs text-slate-400">render.com</span>
                </div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  Deploy to Render Cloud
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-300 mt-2 max-w-lg">
            Deploy this Smart Waste Management System to Render in under 2 minutes. Choose either free Global Static Hosting or Node Web Service.
          </p>

          {/* Quick Action Button */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <a
              href="https://dashboard.render.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>Open Render Dashboard</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] text-slate-400">
              Free hosting, custom SSL domain, continuous GitHub deployment
            </span>
          </div>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveDeployTab('static')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors cursor-pointer border-b-2 ${
              activeDeployTab === 'static'
                ? 'bg-white text-emerald-700 border-emerald-600 shadow-xs'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            <Globe className="w-4 h-4 text-emerald-600" />
            <span>Static Site (Recommended Free)</span>
          </button>

          <button
            onClick={() => setActiveDeployTab('node')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors cursor-pointer border-b-2 ${
              activeDeployTab === 'node'
                ? 'bg-white text-indigo-700 border-indigo-600 shadow-xs'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            <Server className="w-4 h-4 text-indigo-600" />
            <span>Node.js Web Service</span>
          </button>

          <button
            onClick={() => setActiveDeployTab('yaml')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-t-lg transition-colors cursor-pointer border-b-2 ${
              activeDeployTab === 'yaml'
                ? 'bg-white text-purple-700 border-purple-600 shadow-xs'
                : 'text-slate-600 border-transparent hover:text-slate-900'
            }`}
          >
            <FileCode className="w-4 h-4 text-purple-600" />
            <span>render.yaml Blueprint</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          {activeDeployTab === 'static' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-900">
                  <span className="font-bold">Best Choice for this Application: </span>
                  Zero cold-starts, 100% free on Render, backed by global CDN edge locations.
                </div>
              </div>

              {/* 3 Step Process */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step-by-Step Settings on Render.com
                </h3>

                <div className="grid grid-cols-1 gap-2.5 text-xs">
                  {/* Step 1 */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-700">1. Service Type</span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold font-mono">
                        Static Site
                      </span>
                    </div>
                    <p className="text-slate-500 text-[11px]">
                      In Render Dashboard, click <strong>New +</strong> &rarr; <strong>Static Site</strong>, and connect your Git repository.
                    </p>
                  </div>

                  {/* Step 2: Build Command */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-700">2. Build Command</span>
                      <button
                        onClick={() => copyToClipboard('npm install && npm run build', 'build_cmd')}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded text-[11px] font-mono cursor-pointer transition-colors"
                      >
                        {copiedKey === 'build_cmd' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>Copy</span>
                      </button>
                    </div>
                    <code className="block bg-slate-900 text-emerald-400 p-2 rounded-lg font-mono text-[11px]">
                      npm install &amp;&amp; npm run build
                    </code>
                  </div>

                  {/* Step 3: Publish Directory */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-700">3. Publish Directory</span>
                      <button
                        onClick={() => copyToClipboard('dist', 'dist_dir')}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded text-[11px] font-mono cursor-pointer transition-colors"
                      >
                        {copiedKey === 'dist_dir' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>Copy</span>
                      </button>
                    </div>
                    <code className="block bg-slate-900 text-amber-300 p-2 rounded-lg font-mono text-[11px]">
                      dist
                    </code>
                  </div>

                  {/* Step 4: SPA Rewrite Rule */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-700">4. SPA Rewrite Rule (Under "Redirects / Rewrites")</span>
                    </div>
                    <p className="text-slate-500 text-[11px] mb-2">
                      Ensures refreshing or direct links work without 404 errors:
                    </p>
                    <div className="grid grid-cols-3 gap-2 bg-white border border-slate-200 p-2 rounded-lg font-mono text-[11px] text-slate-700">
                      <div><span className="text-slate-400 text-[10px] block">Type:</span> Rewrite</div>
                      <div><span className="text-slate-400 text-[10px] block">Source:</span> /*</div>
                      <div><span className="text-slate-400 text-[10px] block">Destination:</span> /index.html</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDeployTab === 'node' && (
            <div className="space-y-4">
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3.5 flex items-start gap-3">
                <Server className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs text-indigo-900">
                  <span className="font-bold">Node.js Web Service: </span>
                  Runs a production Express server (`server.js`) serving the Vite application with health checks (`/healthz`).
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                {/* Build command */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-700">Build Command</span>
                    <button
                      onClick={() => copyToClipboard('npm install && npm run build', 'node_build')}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded text-[11px] font-mono cursor-pointer"
                    >
                      {copiedKey === 'node_build' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>Copy</span>
                    </button>
                  </div>
                  <code className="block bg-slate-900 text-emerald-400 p-2 rounded-lg font-mono text-[11px]">
                    npm install &amp;&amp; npm run build
                  </code>
                </div>

                {/* Start command */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-700">Start Command</span>
                    <button
                      onClick={() => copyToClipboard('npm start', 'node_start')}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded text-[11px] font-mono cursor-pointer"
                    >
                      {copiedKey === 'node_start' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>Copy</span>
                    </button>
                  </div>
                  <code className="block bg-slate-900 text-blue-300 p-2 rounded-lg font-mono text-[11px]">
                    npm start
                  </code>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Runs `node server.js` which automatically binds to Render's allocated port.
                  </span>
                </div>

                {/* Health Check */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-700">Health Check Path</span>
                    <button
                      onClick={() => copyToClipboard('/healthz', 'healthz')}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded text-[11px] font-mono cursor-pointer"
                    >
                      {copiedKey === 'healthz' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>Copy</span>
                    </button>
                  </div>
                  <code className="block bg-slate-900 text-purple-300 p-2 rounded-lg font-mono text-[11px]">
                    /healthz
                  </code>
                </div>
              </div>
            </div>
          )}

          {activeDeployTab === 'yaml' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">
                  render.yaml (Already saved in repository root)
                </span>
                <button
                  onClick={() => copyToClipboard(renderYamlContent, 'yaml_code')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-mono cursor-pointer"
                >
                  {copiedKey === 'yaml_code' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Blueprint</span>
                </button>
              </div>

              <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed">
                {renderYamlContent}
              </pre>

              <p className="text-xs text-slate-500">
                Render can read this file directly through the <strong>Blueprints</strong> tab in your Render dashboard, automatically setting up the build and rewrites without any manual entry.
              </p>
            </div>
          )}

          {/* Quick Git push helper */}
          <div className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs space-y-2 font-mono">
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-bold text-slate-300">Terminal Commands (Push to GitHub):</span>
              <button
                onClick={() => copyToClipboard('git add .\ngit commit -m "Configure Render deploy"\ngit push origin main', 'git_cmd')}
                className="text-[11px] text-emerald-400 hover:text-emerald-300 cursor-pointer flex items-center gap-1"
              >
                {copiedKey === 'git_cmd' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>Copy commands</span>
              </button>
            </div>
            <p className="text-emerald-300">git add .</p>
            <p className="text-emerald-300">git commit -m "Configure Render deploy"</p>
            <p className="text-emerald-300">git push origin main</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Full documentation is also saved in <code className="font-mono bg-slate-200 px-1.5 py-0.5 rounded text-slate-800">DEPLOY_RENDER.md</code>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
            >
              Close
            </button>
            <a
              href="https://dashboard.render.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Deploy Now on Render</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
