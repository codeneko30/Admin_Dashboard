








import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import BottomNav from "../../../components/BottomNav";
import DataTable from "~/components/DataTable";
import Button from "~/components/Button";
import { Link } from "react-router";
import { createColumnHelper } from "@tanstack/react-table";

export function loader() {
  const orders = [
    { id: 1, customer: "Olivia Bennett", avatar: "https://i.pravatar.cc/40?img=1", product: "Wireless Headphones", orderDate: "2026-02-08", total: 249, status: "Paid" },
    { id: 2, customer: "Marcus Chen", avatar: "https://i.pravatar.cc/40?img=2", product: "Smart Watch Pro", orderDate: "2026-02-07", total: 499, status: "Paid" },
    { id: 3, customer: "Sofia Reyes", avatar: "https://i.pravatar.cc/40?img=3", product: "Leather Backpack", orderDate: "2026-02-07", total: 189, status: "Pending" },
    { id: 4, customer: "Jordan Wright", avatar: "https://i.pravatar.cc/40?img=4", product: "Ceramic Coffee Set", orderDate: "2026-02-06", total: 84, status: "Paid" },
    { id: 5, customer: "Aisha Patel", avatar: "https://i.pravatar.cc/40?img=5", product: "Yoga Mat Bundle", orderDate: "2026-02-05", total: 65, status: "Refunded" },
    { id: 6, customer: "Lucas Hartmann", avatar: "https://i.pravatar.cc/40?img=6", product: "Standing Desk", orderDate: "2026-02-04", total: 620, status: "Paid" },
    { id: 7, customer: "Emma Johansson", avatar: "https://i.pravatar.cc/40?img=7", product: "Desk Lamp", orderDate: "2026-02-03", total: 48, status: "Pending" },
    { id: 8, customer: "Noah Kim", avatar: "https://i.pravatar.cc/40?img=8", product: "Mechanical Keyboard", orderDate: "2026-02-02", total: 129, status: "Paid" },
    { id: 9, customer: "Mia Rossi", avatar: "https://i.pravatar.cc/40?img=9", product: "Linen Bedding Set", orderDate: "2026-02-01", total: 215, status: "Paid" },
  ];
  return orders;
}

const columnHelper = createColumnHelper<any>();

// ========== DESKTOP COLUMNS ==========
const desktopOrderColumns = [
  columnHelper.accessor("customer", {
    header: "Customer",
    cell: (info) => {
      const order = info.row.original;
      return (
        <Link to={`/order-details/${order.id}`} className="flex items-center gap-3">
          <img
            src={order.avatar}
            alt={order.customer}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-900">
            {info.getValue()}
          </span>
        </Link>
      );
    },
  }),
  columnHelper.accessor("product", {
    header: "Product",
    cell: (info) => (
      <span className="text-sm text-gray-700">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("orderDate", {
    header: "Order Date",
    cell: (info) => (
      <span className="text-sm text-gray-500">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("total", {
    header: "Total",
    cell: (info) => (
      <span className="text-sm font-semibold text-gray-900">
        ${info.getValue().toFixed(2)}
      </span>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      if (status === "Refunded") {
        return (
          <span className="inline-flex rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
            Refunded
          </span>
        );
      } else if (status === "Pending") {
        return (
          <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
            Pending
          </span>
        );
      } else {
        return (
          <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900">
            Paid
          </span>
        );
      }
    },
  }),
];

// ========== MOBILE COLUMNS ==========
const mobileOrderColumns = [
  columnHelper.display({
    id: "mobileRow",
    header: "Orders",
    cell: (info) => {
      const order = info.row.original;
      return (
        <Link
          to={`/order-details/${order.id}`}
          className="flex items-start justify-between"
        >
          {/* LEFT */}
          <div className="flex min-w-0 items-start gap-3">
            <img
              src={order.avatar}
              alt={order.customer}
              className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <div className="truncate text-xs font-semibold text-gray-900">
                {order.customer}
              </div>
              <div className="truncate text-[11px] text-gray-500">
                {order.product}
              </div>
              <div className="mt-0.5 text-[11px] text-gray-400">
                {order.orderDate}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="text-right">
              <div className="text-xs font-semibold text-gray-900">
                ${order.total.toFixed(2)}
              </div>
              {order.status === "Refunded" ? (
                <span className="mt-1 inline-flex rounded-full bg-red-500 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                  Refunded
                </span>
              ) : order.status === "Pending" ? (
                <span className="mt-1 inline-flex rounded-full bg-gray-50 px-2.5 py-0.5 text-[10px] font-semibold text-gray-700">
                  Pending
                </span>
              ) : (
                <span className="mt-1 inline-flex rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-700">
                  Paid
                </span>
              )}
            </div>
            <svg
              className="h-4 w-4 text-gray-300 flex-shrink-0"
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
        </Link>
      );
    },
  }),
];

export default function OrdersPage({ loaderData }) {
  const orders = loaderData;
  const [activeItem, setActiveItem] = useState("Orders");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const q = search.toLowerCase();
    const matchSearch =
      order.customer.toLowerCase().includes(q) ||
      order.product.toLowerCase().includes(q);
    const matchStatus = selected === "All" || order.status === selected;
    return matchSearch && matchStatus;
  });

  return (
    <>
      {/* DESKTOP — UNCHANGED */}
      <div className="hidden md:flex min-h-screen bg-white">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <main className="ml-56 flex-1 p-8">
          <div className="mb-6 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage and track customer orders.
              </p>
            </div>
            <Button variant="primary" size="sm" className="sm:px-4 sm:text-sm">
              Export
            </Button>
          </div>

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

          <DataTable data={filteredOrders} columns={desktopOrderColumns} />

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing 1–{filteredOrders.length} of {orders.length} orders
            </p>
            <div className="flex gap-2">
              <Button variant="secondary">Previous</Button>
              <Button variant="secondary">Next</Button>
            </div>
          </div>
        </main>
      </div>

      {/* MOBILE — FIXED FOR BRAVE/CHROME */}
      <div className="md:hidden min-h-screen bg-white font-sans">
        <div className="pb-20">
          {/* REMOVED: max-w-5xl mx-auto — causes overflow in Chrome/Brave */}
          {/* ADDED: w-full + box-border to prevent overflow */}
          <div className="w-full px-4 pt-5 box-border">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h1 className="text-sm font-semibold text-gray-900">Orders</h1>
                <p className="mt-0.5 text-xs text-gray-500">
                  Search and manage orders.
                </p>
              </div>
              <Button variant="primary" size="sm" className="px:3 sm:px-4 sm:text-sm">
                Export
              </Button>
            </div>

            {/* FIXED: Added w-full + min-w-0 + box-border */}
            <div className="mb-3 flex gap-2 w-full min-w-0 box-border">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search orders..."
                className="flex-1 min-w-0 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none"
              />
              {/* FIXED: w-auto instead of w-[120px], added flex-shrink-0 */}
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-auto flex-shrink-0 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-600"
              >
                <option>All</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Refunded</option>
              </select>
            </div>

            <DataTable data={filteredOrders} columns={mobileOrderColumns} enableSorting={false} />
          </div>
        </div>
        {/* FIXED: Added w-full to prevent overflow */}
        <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
    </>
  );
}