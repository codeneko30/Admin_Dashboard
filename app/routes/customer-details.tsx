
import { useParams } from "react-router";
import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BackButton from "~/components/BackButton";
import SecondaryButton from "~/components/SecondaryButton";
import BlackButton from "~/components/BlackButton";
import Customer_Details_Stats from "~/components/Customer-Details-Status";
import RecentOrders from "~/components/RecentOrders";
import ContactCard from "~/components/ContactCard";
import DefaultAddress from "~/components/DefaultAddress";


export default function CustomerDetailPage() {

    const customer = {

        name: "Olivia Bennett",
        status: "VIP",
        memberSince: "Jan 2025",

        marketing: {
            email: "Subscribed",
            sms: "Not subscribed",
        },
    };

    const [activeItem, setActiveItem] = useState("");

    const { id } = useParams();

    return (
        <div className="min-h-screen bg-white font-sans">

            {/* sidebar */}
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className=" ml-56 max-w-4xl mx-auto px-6 py-8">

                {/* Back Button */}
                <BackButton label="Customers" />

                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">

                        {/* Avatar INLINE (no function) */}
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                            <svg viewBox="0 0 36 36" className="w-12 h-12" fill="none">
                                <circle cx="18" cy="18" r="18" fill="#e5e7eb" />
                                <circle cx="18" cy="14" r="6" fill="#374151" />
                                <ellipse cx="18" cy="30" rx="10" ry="7" fill="#374151" />
                            </svg>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold text-gray-900">{customer.name}</h1>

                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-800 text-white">
                                    {customer.status}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 mt-0.5">
                                Customer since {customer.memberSince}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2">

                        {/* edit button */}
                        <SecondaryButton label="Edit" />

                        {/* Email Button */}
                        <BlackButton label="Email customer" />

                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-3 gap-5">

                    {/* LEFT */}
                    <div className="col-span-2 space-y-5">

                        {/* Stats */}
                        <Customer_Details_Stats />

                        {/* Recent Orders */}
                        <RecentOrders />
                    </div>

                    {/* RIGHT */}
                    <div className="col-span-1 space-y-5">

                        {/* Contact */}
                        <ContactCard />

                        {/* Address */}
                        <DefaultAddress />

                        {/* Marketing */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-4">Marketing</h2>

                            <div className="mb-3">
                                <p className="text-xs text-gray-400 mb-1">Email</p>
                                <p className="text-sm text-gray-800">{customer.marketing.email}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 mb-1">SMS</p>
                                <p className="text-sm text-gray-500">{customer.marketing.sms}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}