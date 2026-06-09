import { useState } from "react";

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("General");

  const tabs = [
    "General",
    "Account",
    "Notifications",
    "Billing",
  ];

  return (
    <div className="flex gap-6 border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-3 text-sm font-medium transition-colors ${
            activeTab === tab
              ? "text-gray-900 border-b-2 border-gray-900 -mb-px"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}