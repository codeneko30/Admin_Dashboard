import  { useState } from "react";

const statusOptions = ["Active", "Draft", "Archived"];

export default function StatusCard() {
    const [form, setForm] = useState({
        status: "",
    });

    const [statusOpen, setStatusOpen] = useState(false);

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="border border-gray-200 rounded-xl p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">
                Status
            </h2>

            <div className="relative">
                <button
                    onClick={() => setStatusOpen(!statusOpen)}
                    className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                >
                    <span className={form.status ? "text-gray-800" : "text-gray-400"}>
                        {form.status || "Select an item"}
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

                {statusOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        {statusOptions.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => {
                                    handleChange("status", opt);
                                    setStatusOpen(false);
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
    );
}