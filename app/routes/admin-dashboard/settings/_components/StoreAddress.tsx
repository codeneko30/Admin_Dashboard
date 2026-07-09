

import { useState } from "react";
import Button from "~/components/Button";


export default function StoreAddress() {
 

  const [form, setForm] = useState({
    address: "500 Market Street, Suite 400",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    country: "United States",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 sm:p-5">
      <h2 className="text-sm font-semibold text-gray-900">Store address</h2>

      <p className="text-xs text-gray-500 mt-0.5 mb-5">
        Used on invoices and receipts.
      </p>

      {/* Address */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700 mb-1.5">
          Address
        </label>

        <input
          type="text"
          value={form.address}
          onChange={(e) => handleChange("address", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>

      {/* City + State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-700">
            City
          </label>

          <input
            type="text"
            value={form.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            State
          </label>

          <input
            type="text"
            value={form.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
      </div>

      {/* ZIP + Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            ZIP code
          </label>

          <input
            type="text"
            value={form.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1.5">
            Country
          </label>

          <input
            type="text"
            value={form.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
      </div>

      {/* Save button */}
      <div className="hidden sm:flex justify-end mt-5">

       
        
        <Button variant="primary">Save changes</Button>

      </div>
    </div>
  );
}