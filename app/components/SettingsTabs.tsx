

import { useState } from "react";

export default function SettingsTabs() {
  const tabs = ["General", "Account", "Notifications", "Billing"];
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div>
      <div className="flex gap-4 sm:gap-6 border-b border-gray-200 mb-6 overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium transition-colors flex-shrink-0 ${
              activeTab === tab
                ? "text-gray-900 border-b-2 border-gray-900 -mb-px"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content (static demo) */}
      <div className="text-sm text-gray-600">
        Active Tab: {activeTab}
      </div>
    </div>
  );
}