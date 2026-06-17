


import { useState } from "react";

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
export default function OrdersPageResponsive() {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("All");

    const filteredOrders = orders.filter((order) => {
        const q = search.toLowerCase();

        const matchSearch =
            order.customer.toLowerCase().includes(q) ||
            order.product.toLowerCase().includes(q);

        const matchStatus =
            selected === "All" || order.status === selected;

        return matchSearch && matchStatus;
    });


    return (
        <div className="min-h-screen bg-white font-sans">
            <div className="pb-20 md:pb-6">
                <div className="mx-auto max-w-5xl px-4 pt-5 md:px-6 md:pt-7">

                    {/* HEADER (same UI) */}
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h1 className="text-sm md:text-lg font-semibold text-gray-900">
                                Orders
                            </h1>
                            <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                                Search and manage orders.
                            </p>
                        </div>

                        <button className="hidden md:inline-flex items-center px-3 py-2 bg-gray-900 text-white text-xs font-semibold rounded-md hover:bg-gray-800">
                            Export
                        </button>
                    </div>

                    {/* SEARCH + SELECT (DESKTOP PATTERN USED) */}
                    <div className="mb-3 flex gap-2">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search orders..."
                            className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
                        />

                        <select
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                            className="w-40 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-600"
                        >
                            <option>All</option>
                            <option>Paid</option>
                            <option>Pending</option>
                            <option>Refunded</option>
                        </select>
                    </div>

                    {/* MOBILE UI TABLE (UNCHANGED DESIGN) */}


                    <div className="md:hidden border border-gray-200 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <tbody>
                                {filteredOrders.map((order, index) => (
                                    <tr
                                        key={order.id}
                                        className={`hover:bg-gray-50 ${index !== filteredOrders.length - 1
                                                ? "border-b border-gray-100"
                                                : ""
                                            }`}
                                    >
                                        <td className="px-4 py-3">
                                            <div className="flex items-start justify-between">

                                                {/* LEFT SIDE (UNCHANGED UI) */}
                                                <div className="flex items-start gap-3 min-w-0">
                                                    <img
                                                        src={order.avatar}
                                                        alt={order.customer}
                                                        className="h-8 w-8 rounded-full object-cover flex-shrink-0"
                                                    />

                                                    <div className="min-w-0">
                                                        <div className="text-xs font-semibold text-gray-900 truncate">
                                                            {order.customer}
                                                        </div>

                                                        <div className="text-[11px] text-gray-500 truncate">
                                                            {order.product}
                                                        </div>

                                                        <div className="text-[11px] text-gray-400 mt-0.5">
                                                            {order.orderDate}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* RIGHT SIDE (UNCHANGED UI) */}
                                                <div className="flex items-center gap-2">
                                                    <div className="text-right">
                                                        <div className="text-xs font-semibold text-gray-900">
                                                            ${order.total.toFixed(2)}
                                                        </div>

                                                        {order.status === "Refunded" ? (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-red-500 text-white mt-1">
                                                                Refunded
                                                            </span>
                                                        ) : order.status === "Pending" ? (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-yellow-100 text-yellow-700 mt-1">
                                                                Pending
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-700 mt-1">
                                                                Paid
                                                            </span>
                                                        )}
                                                    </div>

                                                    <svg
                                                        className="w-4 h-4 text-gray-300"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9 18l6-6-6-6"
                                                        />
                                                    </svg>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>




                </div>
            </div>
        </div>
    );
}