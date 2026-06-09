import { useState } from "react";
import Table from "~/components/Table";
import Sidebar from "~/components/Sidebar";
import StatsSection from "~/components/Stats";
import RevenueSection from "~/components/Revenue";
import ExportButton from "~/components/ExportButton";




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
                    
                    {/* export button */}

                   
                    <ExportButton/>

                </div>

                {/* Stats */}

                <StatsSection />


                {/* Revenue Overview */}


                <RevenueSection />


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