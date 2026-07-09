




import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "~/components/BottomNav";

import Button from "~/components/Button";
import Customer_Details_Stats from "./_components/Customer-Details-Status";
import RecentOrders from "./_components/RecentOrders";
import ContactCard from "./_components/ContactCard";
import DefaultAddress from "./_components/DefaultAddress";

import {
    ChevronLeft,
    Search,
    User,
} from "lucide-react";

export function loader() {
    const customer = {
        name: "Olivia Bennett",
        status: "VIP",
        memberSince: "Jan 2025",

        marketing: {
            email: "Subscribed",
            sms: "Not subscribed",
        },
    };
    return customer

}

export default function CustomerDetailPage({ loaderData }) {
    const customer = loaderData
    const [activeItem, setActiveItem] = useState("");


    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            {/* ── Mobile sticky header (hidden on md+) ── */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">

                {/* <button className="text-gray-500" aria-label="Back">
                    <ChevronLeft size={20} />
                </button> */}

                <Button className=" bg-white text-gray-500" aria-label="Back">
                    <ChevronLeft size={20} />
                </Button>

                <h1 className="text-base font-semibold text-gray-900">Customer</h1>
                <Search size={20} className="text-gray-400" />
            </div>

            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className="mx-auto max-w-4xl px-4 py-6 md:ml-56 md:px-6 md:py-8">

                {/* Back button (hidden on mobile) */}

                {/* <DesktopBackButton label="Customers" /> */}

                <Button variant="ghost" size="sm" leftIcon={<ChevronLeft size={16} />} className="mb-4 hidden md:inline-flex">Customers</Button>

                {/* ── Header ── */}
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-200">
                            <User size={20} className="text-gray-600" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-semibold text-gray-900">
                                    {customer.name}
                                </h1>
                                <span className="inline-flex items-center rounded-full bg-gray-800 px-2 py-0.5 text-xs font-semibold text-white">
                                    {customer.status}
                                </span>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                                Customer since {customer.memberSince}
                            </p>
                        </div>
                    </div>

                    {/* Desktop action buttons (hidden on mobile) */}
                    <div className="hidden gap-2 md:flex">


                        {/* <DesktopSecondaryButton label="Edit" />
                        <DesktopBlackButton label="   Email customer" /> */}

                        <Button variant="secondary">Edit</Button>
                        <Button variant="primary">Email customer</Button>

                    </div>
                </div>

                {/* ── Main grid ── */}
                <div className="grid gap-5 lg:grid-cols-3">

                    {/* LEFT — col-span-2 */}
                    <div className="space-y-5 lg:col-span-2">

                        {/* Stats */}
                        <Customer_Details_Stats />

                        {/* Recent Orders */}
                        <RecentOrders />

                    </div>

                    {/* RIGHT — col-span-1 */}
                    <div className="space-y-5">

                        {/* Contact */}


                        <ContactCard />

                        {/* Address */}


                        <DefaultAddress />

                        {/* Marketing */}
                        <div className="rounded-xl border border-gray-200 p-5">
                            <h2 className="mb-4 text-sm font-semibold text-gray-900">Marketing</h2>
                            <div className="mb-3">
                                <p className="mb-1 text-xs text-gray-400">Email</p>
                                <p className="text-sm text-gray-800">{customer.marketing.email}</p>
                            </div>
                            <div>
                                <p className="mb-1 text-xs text-gray-400">SMS</p>
                                <p className="text-sm text-gray-500">{customer.marketing.sms}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Mobile bottom action bar (hidden on md+) ── */}
                <div id="1" className="mt-6 flex gap-3 md:hidden mb-20">
{/* 
                    <button className="flex-1 rounded-2xl border border-gray-300 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Edit
                    </button>

                    <button className="flex-1 rounded-2xl bg-gray-900 py-3.5 text-sm font-medium text-white hover:bg-gray-800">
                        Email customer
                    </button> */}

                    <Button variant="secondary" className="flex-1">
                        Edit
                    </Button>

                    <Button className="flex-1">
                        Email customer
                    </Button>

                </div>
                {/* bottom nav */}
                <div id="2">
                    <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />
                </div>

            </main>
        </div>
    );
}









