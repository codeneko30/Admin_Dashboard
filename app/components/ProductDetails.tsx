import  { useState } from "react";

export default function ProductDetails() {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5">
      <h2 className="text-sm font-semibold text-gray-900 mb-4">
        Product details
      </h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700 mb-1.5">
          Title
        </label>

        <input
          type="text"
          placeholder="e.g. Wireless Headphones"
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1.5">
          Description
        </label>

        <textarea
          placeholder="Write a product description..."
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
        />
      </div>
    </div>
  );
}