
import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "~/components/BottomNav";
import DesktopBackButton from "~/components/Desktop-BackButton";
import DesktopSecondaryButton from "~/components/Desktop-SecondaryButton";
import DesktopBlackButton from "~/components/Desktop-BlackButton";
import CustomerDetails from "~/components/CustomerDetails";
import Addres from "../components/Address"
import CustomerStatus from "../components/CustomerStatus"
import Marketing from "~/components/Marketing";
import { ChevronLeft, Search, ChevronDown } from "lucide-react";

const statusOptions = ["Active", "VIP", "New", "Inactive"];

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
    );
}

export default function AddCustomerPage() {
    const [form, setForm] = useState({
        
        tags: ""
    });

    
    const [activeItem, setActiveItem] = useState("");

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
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


                <DesktopBackButton label=' Customers' />

                {/* ── Header ── */}
                <div className="mb-6 flex items-center justify-between gap-4">
                    <h1 className="text-2xl font-semibold text-gray-900 hidden md:block ">Add customer</h1>

                    {/* Desktop action buttons (hidden on mobile) */}
                    <div className="hidden gap-2 md:flex">


                        <DesktopSecondaryButton label=' Discard' />
                        <DesktopBlackButton label='Save customer' />

                    </div>
                </div>

                {/* ── Main Grid ── */}
                <div className="grid gap-5 lg:grid-cols-3">

                    {/* ── Left Column ── */}
                    <div className="space-y-5 lg:col-span-2">

                        {/* Customer Details */}
                        <CustomerDetails />
                        {/* Address */}
                        <Addres />

                    </div>

                    {/* ── Right Column ── */}
                    <div className="space-y-5">

                        {/* Status */}
                        <CustomerStatus />
                        {/* Marketing */}
                        <Marketing />
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
                    <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />
                </div>

            </main>
        </div>
    );
}