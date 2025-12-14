// B2BDashboardDemo.tsx
import React from 'react';

// Assuming MindCare's professional theme (using placeholder Tailwind CSS classes)

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode; // Using a placeholder for an icon
  color: 'blue' | 'green' | 'purple';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color }) => {
  const bgColorClass = color === 'green' ? 'bg-green-100 text-green-800' :
                       color === 'purple' ? 'bg-purple-100 text-purple-800' :
                       'bg-blue-100 text-blue-800';

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className={`flex items-center justify-between p-2 rounded-lg ${bgColorClass}`}>
        <span className="text-xl">{icon}</span>
        <p className="text-sm font-medium">{title}</p>
      </div>
      <p className="mt-4 text-4xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

const B2BDashboardDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 border-b pb-2">
          MindCare Partner Portal: Bulk Screening & Triage Demo
        </h1>
        <p className="mt-2 text-gray-600">
          Integrated solution for large-scale patient mental health triage and management.
        </p>
      </header>
      
      {/* ------------------- Section 1: Subscription & System Status ------------------- */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Metric for Monthly/Annual Subscription Plans */}
        <MetricCard
          title="Remaining Annual Screenings"
          value="4,850"
          icon={<span>⚙️</span>}
          color="blue"
        />
        
        {/* Metric for Bulk Screening */}
        <MetricCard
          title="Triage Completion Rate"
          value="92%"
          icon={<span>✅</span>}
          color="green"
        />
        
        {/* Metric for Integration with existing systems */}
        <MetricCard
          title="EHR System Status"
          value="Connected"
          icon={<span>🔗</span>}
          color="purple"
        />
      </div>

      {/* ------------------- Section 2: Bulk Screening & Patient Management ------------------- */}
      <div className="bg-white p-8 rounded-xl shadow-xl mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex justify-between items-center">
          Bulk Patient Triage Management
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Start New Bulk Screening
          </button>
        </h2>
        
        <p className="text-sm text-gray-500 mb-4">
          View and manage the status of patient populations screened via MindCare.
        </p>

        {/* Table for Bulk Screening Results */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Screening Group</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patients Screened</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">High-Risk Triage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date Completed</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Diabetic Clinic Annual Check-up</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">250</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">12 Patients</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-11-15</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">View Report</a>
                </td>
              </tr>
              {/* Add more mock rows to fill the table */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Inpatient Discharge Follow-up</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">88</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">5 Patients</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-12-01</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">View Report</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-6 text-sm text-gray-500 italic">
          High-Risk Triage patients are automatically flagged for follow-up within your integrated EHR system.
        </p>
      </div>
      
      {/* ------------------- Section 3: White-Label Options (Mock Settings) ------------------- */}
      <div className="bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          White-Label & Integration Settings
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-700 font-medium">Chatbot Branding</span>
            <span className="text-sm text-blue-600">Your Clinic Name / Logo</span>
          </div>
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-700 font-medium">API Integration Key</span>
            <button className="text-sm text-green-600 hover:text-green-800">View/Regenerate Key</button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Subscription Renewal Date</span>
            <span className="text-sm text-gray-600">2026-06-01 (Annual Plan)</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default B2BDashboardDemo;
