
import { useState } from "react";
import Sidebar from "~/fully-codebase/sidebar";


const statusOptions = ["Active", "VIP", "New", "Inactive"];




export default function AddCustomerPage() {


    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        status: "",
        tags: "",
    });

    function Toggle({ enabled, onToggle }) {
        return (

            <button
                onClick={onToggle}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 focus:outline-none ${enabled ? "bg-gray-900" : "bg-gray-200"
                    }`}
            >
                <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${enabled ? "translate-x-4" : "translate-x-1"
                        }`}
                />
            </button>

        )
    }

    const [marketing, setMarketing] = useState({
        emailSubscribed: false,
        smsUpdates: false,
    });

    const [statusOpen, setStatusOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const toggleMarketing = (field) => {
        setMarketing((prev) => ({ ...prev, [field]: !prev[field] }));
    };




    return (
        <div className="min-h-screen bg-white font-sans">

            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className=" ml-56 max-w-4xl mx-auto px-6 py-8">

                {/* ── Back Link ── */}

                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-4 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Customers
                </button>
              


                {/* ── Header ── */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Add customer</h1>
                    <div className="flex gap-2">
                        <button

                            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Discard
                        </button>
                        <button

                            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Save customer
                        </button>
                    </div>
                </div>

                {/* ── Main Grid ── */}
                <div className="grid grid-cols-3 gap-5">

                    {/* ── Left Column ── */}
                    <div className="col-span-2 space-y-5">

                        {/* Customer Details Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-4">
                                Customer details
                            </h2>

                            {/* First + Last Name */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Olivia"
                                        value={form.firstName}
                                        onChange={(e) => handleChange("firstName", e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Bennett"
                                        value={form.lastName}
                                        onChange={(e) => handleChange("lastName", e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="name@email.com"
                                    value={form.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    placeholder="+1 (555) 000-0000"
                                    value={form.phone}
                                    onChange={(e) => handleChange("phone", e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-4">
                                Address
                            </h2>

                            {/* Street Address */}
                            <div className="mb-4">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    placeholder="Street address"
                                    value={form.address}
                                    onChange={(e) => handleChange("address", e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                            </div>

                            {/* City + State */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="City"
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
                                        placeholder="State"
                                        value={form.state}
                                        onChange={(e) => handleChange("state", e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                    />
                                </div>
                            </div>

                            {/* ZIP + Country */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        ZIP code
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="ZIP"
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
                                        placeholder="Country"
                                        value={form.country}
                                        onChange={(e) => handleChange("country", e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ── Right Column ── */}
                    <div className="col-span-1 space-y-5">

                        {/* Status Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-3">Status</h2>
                            <div className="relative">
                                <button
                                    onClick={() => setStatusOpen(!statusOpen)}
                                    className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white hover:bg-gray-50 transition-colors"
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

                        {/* Marketing Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-4">Marketing</h2>

                            {/* Email subscribed */}
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm text-gray-700">Email subscribed</span>
                                <Toggle
                                    enabled={marketing.emailSubscribed}
                                    onToggle={() => toggleMarketing("emailSubscribed")}
                                />
                            </div>

                            {/* SMS updates */}
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-700">SMS updates</span>
                                <Toggle
                                    enabled={marketing.smsUpdates}
                                    onToggle={() => toggleMarketing("smsUpdates")}
                                />
                            </div>
                        </div>

                        {/* Tags Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-3">Tags</h2>
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

                    </div>
                </div>
            </main>
        </div>
    );
};

