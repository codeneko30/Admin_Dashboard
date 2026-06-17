import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import {
  ChevronLeft,
  Search,
  Package,
  CreditCard,
  MapPin,
  User,
} from "lucide-react";

const order = {
  number: 3021,
  status: "Paid",
  date: "Feb 8, 2026 · 9:24 AM",

  items: [
    { id: 1, name: "Wireless Headphones", variant: "Color: Black", qty: 1, price: 199.0 },
    { id: 2, name: "Charging Cable", variant: "Length: 2m", qty: 2, price: 20.0 },
    { id: 3, name: "Warranty Plan", variant: "1 year", qty: 1, price: 10.0 },
  ],

  subtotal: 229.0,
  shipping: 12.0,
  tax: 8.0,
  total: 249.0,

  customer: {
    name: "Olivia Bennett",
    email: "olivia.bennett@email.com",
  },

  shippingAddress: {
    name: "Olivia Bennett",
    line1: "248 Maple Avenue, Apt 12",
    line2: "Portland, OR 97201",
    country: "United States",
  },

  payment: {
    last4: "4242",
    amount: 249.0,
    date: "Feb 8, 2026",
  },

  timeline: [
    { id: 1, title: "Order placed", date: "Feb 8, 2026 · 9:24 AM", done: true },
    { id: 2, title: "Payment confirmed", date: "Feb 8, 2026 · 9:25 AM", done: true },
    { id: 3, title: "Preparing for shipment", date: "Feb 8, 2026 · 2:10 PM", done: true },
    { id: 4, title: "Shipped", date: "Pending", done: false },
  ],
};

export default function OrderDetails() {
  const [activeItem, setActiveItem] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Mobile sticky header (hidden on md+) ── */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">
        <button className="text-gray-500" aria-label="Back">
          <ChevronLeft size={20} />
        </button>

        <h1 className="text-base font-semibold text-gray-900">
          Order #{order.number}
        </h1>
        <Search size={20} className="text-gray-400" />
      </div>

      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <main className="mx-auto max-w-7xl px-4 py-4 md:ml-56 md:p-6">

        {/* Back button (hidden on mobile) */}
        <button className="mb-4 hidden items-center gap-1 text-sm text-gray-500 hover:text-gray-700 md:flex">
          <ChevronLeft size={16} />
          Orders
        </button>

        {/* ── Header ── */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          {/* desktop verstion */}
          <div id="1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl hidden md:block ">
                Order #{order.number}
              </h1>

              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 hidden md:block">
                {order.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500  hidden md:block">Placed {order.date}</p>

            {/* mobile vertion */}

            <div id="2" className="flex md:hidden gap-2">
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 ">
                {order.status}
              </span>
              <p className="mt-2 text-sm text-gray-500  ">Placed {order.date}</p>


            </div>


          </div>

          {/* Desktop action buttons (hidden on mobile) */}
          <div className="hidden gap-3 md:flex">
            <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Refund
            </button>
            <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
              Mark as fulfilled
            </button>
          </div>
        </div>



        {/* ── Main grid ── */}
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">

          {/* LEFT */}
          <div className="space-y-6">

            {/* ITEMS */}
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h2 className="mb-5 text-sm font-semibold text-gray-900">Items</h2>

              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
                        <Package size={16} className="text-gray-500" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item.variant}</p>
                      </div>
                    </div>
                    <div className="text-sm">
                      {item.qty && (
                        <span className="mr-2 text-gray-500">×{item.qty}</span>
                      )}
                      <span className="font-medium">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* TOTALS */}
              <div className="mt-6 space-y-3 border-t border-gray-200 pt-5 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3 font-semibold text-gray-900">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h2 className="mb-5 text-sm font-semibold text-gray-900">Timeline</h2>

              <div className="space-y-0">
                {order.timeline.map((item, index) => (
                  <div key={item.id} className="flex gap-4">

                    {/* Dot + connector line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${item.done
                            ? "bg-black"
                            : "border-2 border-gray-300 bg-white"
                          }`}
                      />
                      {index < order.timeline.length - 1 && (
                        <div className="w-px flex-1 bg-gray-200 my-1" />
                      )}
                    </div>

                    <div className={`pb-6 ${index === order.timeline.length - 1 ? "pb-0" : ""}`}>
                      <p className={`text-sm font-medium ${item.done ? "text-gray-900" : "text-gray-400"}`}>
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* CUSTOMER */}
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Customer</h2>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                  <User size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">{order.customer.name}</p>
                  <p className="text-xs text-gray-500">{order.customer.email}</p>
                </div>
              </div>
              <button className="mt-4 text-sm font-medium hover:underline">
                View customer profile
              </button>
            </div>

            {/* SHIPPING */}
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Shipping address</h2>
              <div className="flex gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-gray-500" />
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="font-medium text-gray-900">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.line1}</p>
                  <p>{order.shippingAddress.line2}</p>
                  <p>{order.shippingAddress.country}</p>
                </div>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Payment</h2>
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <CreditCard size={18} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-700">Visa •••• {order.payment.last4}</p>
                    <p className="mt-1 text-xs text-gray-500">Paid on {order.payment.date}</p>
                  </div>
                </div>
                <span className="font-medium">${order.payment.amount.toFixed(2)}</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── Mobile bottom action bar (hidden on md+) ── */}
        <div className="mt-6 flex gap-3 md:hidden">
          <button className="flex-1 rounded-xl border border-gray-300 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Refund
          </button>
          <button className="flex-1 rounded-xl bg-gray-900 py-3.5 text-sm font-medium text-white hover:bg-black">
            Mark as fulfilled
          </button>
        </div>

      </main>
    </div>
  );
}