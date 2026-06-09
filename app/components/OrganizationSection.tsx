import  { useState } from "react";

const categoryOptions = [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports",
    "Books",
    "Toys",
];

export default function OrganizationSection() {
    const [form, setForm] = useState({
        category: "",
        vendor: "",
        tags: "",
    });

    const [categoryOpen, setCategoryOpen] = useState(false);

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
                Organization
            </h2>

            {/* Category */}
            <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Category
                </label>

                <div className="relative">
                    <button
                        onClick={() => setCategoryOpen(!categoryOpen)}
                        className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white hover:bg-gray-50 transition-colors"
                    >
                        <span className={form.category ? "text-gray-800" : "text-gray-400"}>
                            {form.category || "Select an item"}
                        </span>

                        <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {categoryOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            {categoryOptions.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => {
                                        handleChange("category", opt);
                                        setCategoryOpen(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Vendor */}
            <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Vendor
                </label>

                <input
                    type="text"
                    placeholder="e.g. Apex"
                    value={form.vendor}
                    onChange={(e) => handleChange("vendor", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
            </div>

            {/* Tags */}
            <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Tags
                </label>

                <input
                    type="text"
                    placeholder="Add tags"
                    value={form.tags}
                    onChange={(e) => handleChange("tags", e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
            </div>
        </div>
    );
}