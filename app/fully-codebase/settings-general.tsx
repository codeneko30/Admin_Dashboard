

import { useState } from "react";
import Sidebar from "~/components/Sidebar";

const tabs = ["General", "Account", "Notifications", "Billing"];

const currencies = [
    "USD ($)",
    "EUR (€)",
    "GBP (£)",
    "JPY (¥)",
    "CAD (CA$)",
    "AUD (A$)",
];

export default function Settings() {
    const [activeItem, setActiveItem] = useState("");
    const [activeTab, setActiveTab] = useState("General");

    const [form, setForm] = useState({
        storeName: "Apex Store",
        supportEmail: "support@apexstore.io",
        phone: "+1 (555) 010-2048",
        currency: "USD ($)",
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
        <div className="min-h-screen bg-white font-sans ">
            {/* Sidebar */}
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className=" ml-60  max-w-4xl mx-auto px-6 py-8">

                {/* ── Header ── */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                    <p className="text-sm text-gray-500 mt-0.5">
                        Manage your store and account preferences.
                    </p>
                </div>

                {/* ── Tabs ── */}
                <div className="flex gap-6 border-b border-gray-200 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-sm font-medium transition-colors ${activeTab === tab
                                ? "text-gray-900 border-b-2 border-gray-900 -mb-px"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ── Main Content Grid ── */}
                <div className="grid grid-cols-3 gap-5">

                    {/* ── Left Column ── */}
                    <div className="col-span-2 space-y-5">

                        {/* Store Profile Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
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
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-400"
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
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-400"
                                />
                            </div>

                            {/* Phone + Currency */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        value={form.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Currency
                                    </label>
                                    <select
                                        value={form.currency}
                                        onChange={(e) => handleChange("currency", e.target.value)}
                                        className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
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

                        {/* Store Address Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
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
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
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
                                        value={form.city}
                                        onChange={(e) => handleChange("city", e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
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
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
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
                                        value={form.zipCode}
                                        onChange={(e) => handleChange("zipCode", e.target.value)}
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
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
                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                    />
                                </div>
                            </div>

                            {/* Save Button */}
                            <div className="flex justify-end mt-5">
                                <button
                                    
                                    className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* ── Right Column ── */}
                    <div className="col-span-1 space-y-5">

                        {/* Branding Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900">Branding</h2>
                            <p className="text-xs text-gray-500 mt-0.5 mb-4">
                                Your store logo and accent.
                            </p>

                            {/* Upload Logo */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <button className="flex-1 text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition-colors font-medium text-left">
                                    Upload logo
                                </button>
                            </div>
                        </div>

                        {/* Danger Zone Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900">Danger zone</h2>
                            <p className="text-xs text-gray-500 mt-0.5 mb-4">
                                Irreversible actions.
                            </p>
                            <button className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors font-medium">
                                Delete store
                            </button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};




