


import { useState } from "react";

const revenueData = [
  { month: "Jan", online: 280, inStore: 120 },
  { month: "Feb", online: 200, inStore: 150 },
  { month: "Mar", online: 320, inStore: 160 },
  { month: "Apr", online: 140, inStore: 200 },
  { month: "May", online: 130, inStore: 260 },
  { month: "Jun", online: 240, inStore: 310 },
];

const recentOrders = [
  { id: 1, customer: "Olivia Bennett", product: "Wireless Headphones", orderDate: "2026-02-08", total: 249.0, status: "Paid" },
  { id: 2, customer: "Marcus Chen", product: "Smart Watch Pro", orderDate: "2026-02-07", total: 499.0, status: "Paid" },
  { id: 3, customer: "Sofia Reyes", product: "Leather Backpack", orderDate: "2026-02-07", total: 189.0, status: "Pending" },
  { id: 4, customer: "Jordan Wright", product: "Ceramic Coffee Set", orderDate: "2026-02-06", total: 84.0, status: "Paid" },
  { id: 5, customer: "Aisha Patel", product: "Yoga Mat Bundle", orderDate: "2026-02-05", total: 65.0, status: "Refunded" },
  { id: 6, customer: "Lucas Hartmann", product: "Standing Desk", orderDate: "2026-02-04", total: 620.0, status: "Paid" },
];

const stats = [
  { label: "Total Revenue", value: "$48,250", change: "+12.5%", positive: true },
  { label: "Orders", value: "1,284", change: "+8.2%", positive: true },
  { label: "Customers", value: "3,672", change: "+5.1%", positive: true },
  { label: "Avg. Order Value", value: "$37.58", change: "-1.4%", positive: false },
];

// Avatar Component
const Avatar = () => (
  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
    <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none">
      <circle cx="18" cy="18" r="18" fill="#e5e7eb" />
      <circle cx="18" cy="14" r="6" fill="#374151" />
      <ellipse cx="18" cy="30" rx="10" ry="7" fill="#374151" />
    </svg>
  </div>
);

// Status Badge Component
const StatusBadge = ({ status }) => {
  if (status === "Refunded") {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
        Refunded
      </span>
    );
  }
  if (status === "Pending") {
    return <span className="text-sm text-gray-500">Pending</span>;
  }
  return <span className="text-sm text-gray-700">Paid</span>;
};

// Bar Chart Component
const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.flatMap((d) => [d.online, d.inStore]));

  return (
    <div className="w-full mt-2">
      <div className="flex items-end justify-between gap-3 h-52">
        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex items-end justify-center gap-1.5 h-44">
              {/* Online bar - Orange */}
              <div
                className="flex-1 bg-orange-500 rounded-t-sm"
                style={{ height: `${(d.online / maxValue) * 100}%` }}
              />
              {/* In-store bar - Teal */}
              <div
                className="flex-1 bg-teal-500 rounded-t-sm"
                style={{ height: `${(d.inStore / maxValue) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-400">{d.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ label, value, change, positive, bordered }) => (
  <div className={`bg-white py-5 px-6 ${bordered ? "border-r border-gray-200" : ""}`}>
    <p className="text-xs text-gray-500 mb-2">{label}</p>
    <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
    <div className="flex items-center gap-1.5">
      <span className={`text-xs font-semibold ${positive ? "text-green-600" : "text-red-500"}`}>
        {change}
      </span>
      <span className="text-xs text-gray-400">vs last month</span>
    </div>
  </div>
);

// Main Dashboard Component
const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">

        {/* ── Header ── */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-0.5">Overview of your store's performance.</p>
          </div>
          <button className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Export
          </button>
        </div>

        {/* ── Stats Cards ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden grid grid-cols-4 divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white px-6 py-5">
              <p className="text-xs text-gray-500 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-xs font-semibold ${
                    stat.positive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-gray-400">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Revenue Overview ── */}
        <div className="border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-base font-semibold text-gray-900">Revenue overview</h2>
            {/* Legend */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-orange-500" />
                <span className="text-xs text-gray-500">Online</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-teal-500" />
                <span className="text-xs text-gray-500">In-store</span>
              </div>
            </div>
          </div>
          <BarChart data={revenueData} />
        </div>

        {/* ── Recent Orders ── */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Section Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">Recent Orders</h2>
            <button className="text-sm text-gray-500 hover:text-gray-800 transition-colors underline underline-offset-2">
              View all orders
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-5 px-6 py-3 border-b border-gray-100 bg-white">
            {["Customer", "Product", "Order Date", "Total", "Status"].map((col) => (
              <div key={col} className="text-xs font-medium text-gray-400">
                {col}
              </div>
            ))}
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-5 items-center px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                {/* Customer */}
                <div className="flex items-center gap-3">
                  <Avatar />
                  <span className="text-sm font-semibold text-gray-900">{order.customer}</span>
                </div>

                {/* Product */}
                <div className="text-sm text-gray-600">{order.product}</div>

                {/* Order Date */}
                <div className="text-sm text-gray-600">{order.orderDate}</div>

                {/* Total */}
                <div className="text-sm font-semibold text-gray-900">
                  ${order.total.toFixed(2)}
                </div>

                {/* Status */}
                <div>
                  <StatusBadge status={order.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;
