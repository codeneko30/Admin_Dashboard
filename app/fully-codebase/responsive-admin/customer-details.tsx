import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import {
  ChevronLeft,
  Search,
  User,
} from "lucide-react";

const customer = {
  name: "Olivia Bennett",
  status: "VIP",
  memberSince: "Jan 2025",
  stats: [
    { label: "Total spent", value: "$2,480", change: "+12.5%", sub: "Lifetime value" },
    { label: "Orders", value: "12", change: "+2", sub: "last 90 days" },
    { label: "Avg. order value", value: "$206", change: "+31%", sub: "per order" },
  ],
  recentOrders: [
    { id: "#3021", date: "Feb 8, 2026", total: 249.0, status: "Paid" },
    { id: "#2980", date: "Jan 22, 2026", total: 129.0, status: "Paid" },
    { id: "#2933", date: "Jan 9, 2026", total: 540.0, status: "Refunded" },
    { id: "#2890", date: "Dec 28, 2025", total: 84.0, status: "Paid" },
  ],
  contact: {
    email: "olivia.bennett@email.com",
    phone: "+1 (555) 248-1099",
  },
  address: {
    name: "Olivia Bennett",
    line1: "248 Maple Avenue, Apt 12",
    line2: "Portland, OR 97201",
    country: "United States",
  },
  marketing: {
    email: "Subscribed",
    sms: "Not subscribed",
  },
};

export default function CustomerDetailPage() {
  const [activeItem, setActiveItem] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Mobile sticky header (hidden on md+) ── */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">
        <button className="text-gray-500" aria-label="Back">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-base font-semibold text-gray-900">Customer</h1>
        <Search size={20} className="text-gray-400" />
      </div>

      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <main className="mx-auto max-w-4xl px-4 py-6 md:ml-56 md:px-6 md:py-8">

        {/* Back button (hidden on mobile) */}
        <button className="mb-5 hidden items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-700 md:flex">
          <ChevronLeft size={14} />
          Customers
        </button>

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
                <span className="inline-flex items-center rounded-full bg-yellow-400 px-2 py-0.5 text-xs font-semibold text-yellow-900">
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
            <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              Edit
            </button>
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
              Email customer
            </button>
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid gap-5 lg:grid-cols-3">

          {/* LEFT — col-span-2 */}
          <div className="space-y-5 lg:col-span-2">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {customer.stats.map((stat, i) => (
                <div key={i} className="rounded-xl border border-gray-200 p-4">
                  <p className="mb-1 text-xs text-gray-500">{stat.label}</p>
                  <p className="mb-1 text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-green-600">
                      {stat.change}
                    </span>
                    <span className="hidden text-xs text-gray-400 md:inline">
                      {stat.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Orders */}
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="border-b border-gray-100 px-5 py-4">
                <h2 className="text-sm font-semibold text-gray-900">
                  Recent orders
                </h2>
              </div>

              <div className="divide-y divide-gray-100">
                {customer.recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex cursor-pointer items-center justify-between px-5 py-3.5 transition-colors hover:bg-gray-50"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {order.id}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">{order.date}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-gray-900">
                        ${order.total.toFixed(2)}
                      </span>
                      <div className="w-20 flex justify-end">
                        {order.status === "Refunded" ? (
                          <span className="inline-flex items-center rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-medium text-white">
                            Refunded
                          </span>
                        ) : (
                          <span className="text-sm text-gray-700">Paid</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — col-span-1 */}
          <div className="space-y-5">

            {/* Contact */}
            <div className="rounded-xl border border-gray-200 p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Contact</h2>
              <div className="mb-3">
                <p className="mb-1 text-xs text-gray-400">Email</p>
                <p className="text-sm text-gray-800">{customer.contact.email}</p>
              </div>
              <div>
                <p className="mb-1 text-xs text-gray-400">Phone</p>
                <p className="text-sm text-gray-800">{customer.contact.phone}</p>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-gray-200 p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">
                Default address
              </h2>
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-gray-900">
                  {customer.address.name}
                </p>
                <p className="text-sm text-gray-600">{customer.address.line1}</p>
                <p className="text-sm text-gray-600">{customer.address.line2}</p>
                <p className="text-sm text-gray-600">{customer.address.country}</p>
              </div>
            </div>

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
        <div className="mt-6 flex gap-3 md:hidden">
          <button className="flex-1 rounded-2xl border border-gray-300 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Edit
          </button>
          <button className="flex-1 rounded-2xl bg-gray-900 py-3.5 text-sm font-medium text-white hover:bg-gray-800">
            Email customer
          </button>
        </div>

      </main>
    </div>
  );
}