

import { useState } from "react";
import Sidebar from "../components/Sidebar";

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
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <main className="ml-56 flex-1 p-8">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Orders
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage and track customer orders.
            </p>
          </div>

          <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white">
            Export
          </button>
        </div>

        {/* Search + Filter */}
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
            className="w-40 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-600"
          >
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Refunded</option>
          </select>
          
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
                <th className="px-5 py-3 font-medium">
                  Customer
                </th>
                <th className="px-5 py-3 font-medium">
                  Product
                </th>
                <th className="px-5 py-3 font-medium">
                  Order Date
                </th>
                <th className="px-5 py-3 font-medium">
                  Total
                </th>
                <th className="px-5 py-3 font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={order.avatar}
                        alt={order.customer}
                        className="h-8 w-8 rounded-full object-cover"
                      />

                      <span className="text-sm font-medium text-gray-900">
                        {order.customer}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-700">
                    {order.product}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-500">
                    {order.orderDate}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                    ${order.total.toFixed(2)}
                  </td>

                  <td className="px-5 py-4">
                    {order.status === "Refunded" ? (
                      <span className="inline-flex rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                        Refunded
                      </span>
                    ) : order.status === "Pending" ? (
                      <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                        Pending
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900">
                        Paid
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing 1–{filteredOrders.length} of 142 orders
          </p>

          <div className="flex gap-2">
            <button className="rounded-md border border-gray-200 px-3 py-1.5 text-sm">
              Previous
            </button>

            <button className="rounded-md border border-gray-200 px-3 py-1.5 text-sm">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}