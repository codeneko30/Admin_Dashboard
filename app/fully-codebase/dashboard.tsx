

import { useState } from "react";
import Table from "~/components/Table";
import Sidebar from "~/components/Sidebar";
const stats = [
    {
        label: "Total Revenue",
        value: "$48,250",
        change: "+12.5%",
        positive: true,
    },
    {
        label: "Orders",
        value: "1,284",
        change: "+8.2%",
        positive: true,
    },
    {
        label: "Customers",
        value: "3,672",
        change: "+5.1%",
        positive: true,
    },
    {
        label: "Avg. Order Value",
        value: "$37.58",
        change: "-1.4%",
        positive: false,
    },
];

const revenueData = [
    { month: "Jan", online: 280, inStore: 120 },
    { month: "Feb", online: 200, inStore: 150 },
    { month: "Mar", online: 320, inStore: 160 },
    { month: "Apr", online: 140, inStore: 200 },
    { month: "May", online: 130, inStore: 260 },
    { month: "Jun", online: 240, inStore: 310 },
];

const orders = [
    {
        id: 1,
        customer: "Olivia Bennett",
        avatar: "https://i.pravatar.cc/40?img=1",
        product: "Wireless Headphones",
        orderDate: "2026-02-08",
        total: 249,
        status: "Paid",
    },
    {
        id: 2,
        customer: "Marcus Chen",
        avatar: "https://i.pravatar.cc/40?img=2",
        product: "Smart Watch Pro",
        orderDate: "2026-02-07",
        total: 499,
        status: "Paid",
    },
    {
        id: 3,
        customer: "Sofia Reyes",
        avatar: "https://i.pravatar.cc/40?img=3",
        product: "Leather Backpack",
        orderDate: "2026-02-07",
        total: 189,
        status: "Pending",
    },
    {
        id: 4,
        customer: "Jordan Wright",
        avatar: "https://i.pravatar.cc/40?img=4",
        product: "Ceramic Coffee Set",
        orderDate: "2026-02-06",
        total: 84,
        status: "Paid",
    },
    {
        id: 5,
        customer: "Aisha Patel",
        avatar: "https://i.pravatar.cc/40?img=5",
        product: "Yoga Mat Bundle",
        orderDate: "2026-02-05",
        total: 65,
        status: "Refunded",
    },
    {
        id: 6,
        customer: "Lucas Hartmann",
        avatar: "https://i.pravatar.cc/40?img=6",
        product: "Standing Desk",
        orderDate: "2026-02-04",
        total: 620,
        status: "Paid",
    },
    {
        id: 7,
        customer: "Emma Johansson",
        avatar: "https://i.pravatar.cc/40?img=7",
        product: "Desk Lamp",
        orderDate: "2026-02-03",
        total: 48,
        status: "Pending",
    },
    {
        id: 8,
        customer: "Noah Kim",
        avatar: "https://i.pravatar.cc/40?img=8",
        product: "Mechanical Keyboard",
        orderDate: "2026-02-02",
        total: 129,
        status: "Paid",
    },
    {
        id: 9,
        customer: "Mia Rossi",
        avatar: "https://i.pravatar.cc/40?img=9",
        product: "Linen Bedding Set",
        orderDate: "2026-02-01",
        total: 215,
        status: "Paid",
    },
];

export default function DashboardPage() {

    const maxValue = Math.max(
        ...revenueData.flatMap((d) => [d.online, d.inStore])
    );
    const [activeItem, setActiveItem] = useState("");

    return (

        <div className="min-h-screen bg-white font-sans">

             <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className="max-w-5xl mx-auto px-6 py-8 space-y-6">

                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Dashboard
                        </h1>

                        <p className="text-sm text-gray-500 mt-0.5">
                            Overview of your store's performance.
                        </p>
                    </div>

                    <button className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-black">
                        Export
                    </button>
                </div>

                {/* Stats */}
                <div className="border border-gray-200 rounded-xl overflow-hidden grid grid-cols-4 divide-x divide-gray-200">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white px-6 py-5">
                            <p className="text-xs text-gray-500 mb-2">
                                {stat.label}
                            </p>

                            <p className="text-3xl font-bold text-gray-900 mb-2">
                                {stat.value}
                            </p>

                            <div className="flex items-center gap-1.5">
                                <span
                                    className={`text-xs font-semibold ${stat.positive
                                        ? "text-green-600"
                                        : "text-red-500"
                                        }`}
                                >
                                    {stat.change}
                                </span>

                                <span className="text-xs text-gray-400">
                                    vs last month
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Revenue Overview */}
                <div className="border border-gray-200 rounded-xl p-6">
                    <h2 className="text-base font-semibold text-gray-900 mb-6">
                        Revenue overview
                    </h2>

                    <div className="flex items-end justify-between gap-3 h-52">
                        {revenueData.map((d) => (
                            <div
                                key={d.month}
                                className="flex-1 flex flex-col items-center gap-2"
                            >
                                <div className="w-full flex items-end justify-center gap-1.5 h-44">
                                    <div
                                        className="flex-1 bg-orange-500 rounded-t-sm"
                                        style={{
                                            height: `${(d.online / maxValue) * 100}%`,
                                        }}
                                    />

                                    <div
                                        className="flex-1 bg-teal-500 rounded-t-sm"
                                        style={{
                                            height: `${(d.inStore / maxValue) * 100}%`,
                                        }}
                                    />
                                </div>

                                <span className="text-xs text-gray-400">
                                    {d.month}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">

                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                        <h2 className="text-base font-semibold text-gray-900">
                            Recent Orders
                        </h2>

                        <button className="text-sm text-gray-500 underline">
                            View all orders
                        </button>
                    </div>

                    

                    {/* table */}



                    <Table data={orders} />

                </div>
           </main>
        </div>
    );
}