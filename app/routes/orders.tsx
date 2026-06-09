

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import ExportButton from "~/components/ExportButton";
import PreviousButton from "~/components/PreviousButton";
import NextButton from "~/components/NextButton";

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

export default function OrdersPage() {
  const [activeItem, setActiveItem] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const matchSearch =
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      selected === "All" || order.status === selected;

    return matchSearch && matchStatus;
  });

  return (
    <div className="flex min-h-screen bg-white">

      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <main className="ml-56 flex-1 p-8">
        {/* HEADER */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and track customer orders.
            </p>
          </div>

          {/* export button */}

          
          <ExportButton />

        </div>

        {/* SEARCH */}
        <div className="mb-4 flex gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search orders..."
            className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
          />

          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-40 rounded-md border border-gray-200 px-3 py-2 text-sm"
          >
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Refunded</option>
          </select>
        </div>

        {/* TABLE (REUSABLE) */}
        <Table data={filteredOrders} />

        {/* FOOTER */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing 1–{filteredOrders.length} of 142 orders
          </p>

          <div className="flex gap-2">

           {/* previous Button */}
            <PreviousButton/>

            {/* Next Button */}
            <NextButton/>

          </div>
        </div>
      </main>
    </div>
  );
}