

import { useState } from "react";

export default function StoreProfile() {
  const currencies = ["USD ($)", "EUR (€)", "BDT (৳)", "GBP (£)"];

  const [form, setForm] = useState({
    storeName: "Apex Store",
    supportEmail: "support@apexstore.io",
    phone: "+1 (555) 010-2048",
    currency: "USD ($)",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 sm:p-5">
      <h2 className="text-sm font-semibold text-gray-900">Store profile</h2>

      <p className="text-xs text-gray-500 mt-0.5 mb-5">
        Basic information about your store.
      </p>

      {/* Store Name */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700 mb-1.5">
          Store name
        </label>

        <input
          type="text"
          value={form.storeName}
          onChange={(e) => handleChange("storeName", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>

      {/* Support Email */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700 mb-1.5">
          Support email
        </label>

        <input
          type="email"
          value={form.supportEmail}
          onChange={(e) => handleChange("supportEmail", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>

      {/* Phone + Currency */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Phone
          </label>

          <input
            type="text"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Currency
          </label>

          <select
            value={form.currency}
            onChange={(e) => handleChange("currency", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}