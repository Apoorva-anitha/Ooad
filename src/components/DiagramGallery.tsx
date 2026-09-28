import React, { useState } from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { UseCaseDiagram } from './diagrams/UseCaseDiagram';
import { ClassDiagram } from './diagrams/ClassDiagram';
import { SequenceDiagram } from './diagrams/SequenceDiagram';
import { CollaborationDiagram } from './diagrams/CollaborationDiagram';
import { StateChartDiagram } from './diagrams/StateChartDiagram';
import { ActivityDiagram } from './diagrams/ActivityDiagram';
import { DeploymentDiagram } from './diagrams/DeploymentDiagram';
import { ComponentDiagram } from './diagrams/ComponentDiagram';

export const DiagramGallery: React.FC = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<number>(1);

  const diagramsList = [
    { id: 1, name: '1. Use Case Diagram', subtitle: 'Actors, System Boundary & Use Cases', component: <UseCaseDiagram /> },
    { id: 2, name: '2. Class Diagram', subtitle: 'Classes, Attributes, Methods & Multiplicity', component: <ClassDiagram /> },
    { id: 3, name: '3. Sequence Diagram', subtitle: 'Chronological Message Passing & Lifelines', component: <SequenceDiagram /> },
    { id: 4, name: '4. Collaboration Diagram', subtitle: 'Structural Links & Numbered Interactions', component: <CollaborationDiagram /> },
    { id: 5, name: '5. State Chart Diagram', subtitle: 'Complaint Lifecycle & State Transitions', component: <StateChartDiagram /> },
    { id: 6, name: '6. Activity Diagram', subtitle: 'Parallel Workflows, Decisions & Fork/Join', component: <ActivityDiagram /> },
    { id: 7, name: '7. Deployment Diagram', subtitle: 'Physical Devices, 3D Nodes & Network Protocols', component: <DeploymentDiagram /> },
    { id: 8, name: '8. Component Diagram', subtitle: 'Modular Subsystems, Artifacts & Interfaces', component: <ComponentDiagram /> }
  ];

  return (
    <div className="w-full max-w-6xl flex flex-col gap-6">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-emerald-100 text-emerald-700 rounded-lg">
              <Layers className="w-5 h-5" />
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              All 8 UML Analysis &amp; Design Diagrams
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Scalable vector graphics (SVG) rendered according to standard UML 2.5 OMG specifications.
          </p>
        </div>
      </div>

      {/* Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {diagramsList.map((diag) => (
          <button
            key={diag.id}
            onClick={() => setSelectedDiagram(diag.id)}
            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              selectedDiagram === diag.id
                ? 'bg-emerald-50/80 border-emerald-500 shadow-xs ring-1 ring-emerald-500'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
            }`}
          >
            <div className="font-bold text-xs text-slate-900">{diag.name}</div>
            <div className="text-[11px] text-slate-500 truncate mt-0.5">{diag.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Active Diagram Display Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col items-center">
        <div className="w-full max-w-4xl flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {diagramsList.find((d) => d.id === selectedDiagram)?.name}
            </h3>
            <p className="text-xs text-slate-500">
              {diagramsList.find((d) => d.id === selectedDiagram)?.subtitle}
            </p>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 rounded text-slate-600">
            Diagram {selectedDiagram} of 8
          </span>
        </div>

        <div className="w-full">
          {diagramsList.find((d) => d.id === selectedDiagram)?.component}
        </div>
      </div>
    </div>
  );
};
