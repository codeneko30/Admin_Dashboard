import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "~/components/BottomNav";
import { ChevronLeft, Search, ChevronDown } from "lucide-react";

const statusOptions = ["Active", "VIP", "New", "Inactive"];

function Toggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 focus:outline-none ${
        enabled ? "bg-gray-900" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform duration-200 ${
          enabled ? "translate-x-4" : "translate-x-1"
        }`}
      />
    </button>
  );
}

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
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Mobile sticky header (hidden on md+) ── */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">
        <button className="text-gray-500" aria-label="Back">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-base font-semibold text-gray-900">Add customer</h1>
        <Search size={20} className="text-gray-400" />
      </div>

      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <main className="mx-auto max-w-4xl px-4 py-4 md:ml-56 md:px-6 md:py-8">

        {/* Back button (hidden on mobile) */}
        <button className="mb-4 hidden items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-700 md:flex">
          <ChevronLeft size={14} />
          Customers
        </button>

        {/* ── Header ── */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-gray-900 hidden md:block ">Add customer</h1>

          {/* Desktop action buttons (hidden on mobile) */}
          <div className="hidden gap-2 md:flex">
            <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              Discard
            </button>
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
              Save customer
            </button>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid gap-5 lg:grid-cols-3">

          {/* ── Left Column ── */}
          <div className="space-y-5 lg:col-span-2">

            {/* Customer Details */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Customer details</h2>

              {/* First + Last Name — side by side on sm+, stacked on mobile */}
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">First name</label>
                  <input
                    type="text"
                    placeholder="e.g. Olivia"
                    value={form.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">Last name</label>
                  <input
                    type="text"
                    placeholder="e.g. Bennett"
                    value={form.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Address</h2>

              {/* Street */}
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  placeholder="Street address"
                  value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              {/* City + State */}
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    placeholder="State"
                    value={form.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
              </div>

              {/* ZIP + Country */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">ZIP code</label>
                  <input
                    type="text"
                    placeholder="ZIP"
                    value={form.zipCode}
                    onChange={(e) => handleChange("zipCode", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    placeholder="Country"
                    value={form.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="space-y-5">

            {/* Status */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-3 text-sm font-semibold text-gray-900">Status</h2>
              <div className="relative">
                <button
                  onClick={() => setStatusOpen(!statusOpen)}
                  className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm transition-colors hover:bg-gray-50"
                >
                  <span className={form.status ? "text-gray-800" : "text-gray-400"}>
                    {form.status || "Select an item"}
                  </span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
                {statusOpen && (
                  <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                    {statusOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { handleChange("status", opt); setStatusOpen(false); }}
                        className="block w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Marketing */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Marketing</h2>

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-700">Email subscribed</span>
                <Toggle
                  enabled={marketing.emailSubscribed}
                  onToggle={() => toggleMarketing("emailSubscribed")}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">SMS updates</span>
                <Toggle
                  enabled={marketing.smsUpdates}
                  onToggle={() => toggleMarketing("smsUpdates")}
                />
              </div>
            </div>

            {/* Tags */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-3 text-sm font-semibold text-gray-900">Tags</h2>
              <label className="mb-1.5 block text-xs font-medium text-gray-700">Tags</label>
              <input
                type="text"
                placeholder="Add tags"
                value={form.tags}
                onChange={(e) => handleChange("tags", e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
            </div>
          </div>
        </div>

        {/* ── Mobile bottom Save button (hidden on md+) ── */}
        <div id="1" className="mt-6 md:hidden mb-20">
          <button className="w-full rounded-xl bg-gray-900 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
            Save customer
          </button>
        </div>

        <div id="2">
            <BottomNav activeItem={activeItem} setActiveItem={setActiveItem}/>
        </div>

      </main>
    </div>
  );
}