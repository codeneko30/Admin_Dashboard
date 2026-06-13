

import { useParams } from "react-router";
import { useState } from "react";
import {

  Package,
  CreditCard,
  MapPin,
  User,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import BackButton from "~/components/BackButton";

export default function OrderDetails() {

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
      { id: 1, title: "Order placed", date: "Feb 8, 2026 · 9:24 AM" },
      { id: 2, title: "Payment confirmed", date: "Feb 8, 2026 · 9:25 AM" },
      { id: 3, title: "Preparing for shipment", date: "Feb 8, 2026 · 2:10 PM" },
      { id: 4, title: "Shipped", date: "Pending" },
    ],
  };



  const [activeItem, setActiveItem] = useState("");
  const { id } = useParams()

  return (

    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar (fixed) */}
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* IMPORTANT FIX: sidebar width offset */}
      <main className="ml-56 flex-1 p-6">

        <div className="mx-auto max-w-7xl">

          {/* Back orders */}


          <BackButton label="orders" />

          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold text-gray-900">
                  Order #{order.number}
                </h1>

                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                  {order.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Placed {order.date}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">
                Refund
              </button>

              <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                Mark as fulfilled
              </button>
            </div>
          </div>

          {/* Layout */}
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">

            {/* LEFT */}
            <div className="space-y-6">

              {/* ITEMS */}
              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <h2 className="mb-5 text-sm font-semibold text-gray-900">
                  Items
                </h2>

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
                        {item.qty ? (
                          <span className="mr-2 text-gray-500">×{item.qty}</span>
                        ) : null}
                        <span className="font-medium">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                    </div>
                  ))}
                </div>

                {/* TOTALS */}
                <div className="mt-6 border-t border-gray-200 pt-5 space-y-3 text-sm">
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
                <h2 className="mb-5 text-sm font-semibold text-gray-900">
                  Timeline
                </h2>

                <div className="space-y-6">
                  {order.timeline.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-black" />

                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.date}
                        </p>
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
                <h2 className="mb-4 text-sm font-semibold text-gray-900">
                  Customer
                </h2>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                    <User size={16} />
                  </div>

                  <div>
                    <p className="text-sm font-medium">{order.customer.name}</p>
                    <p className="text-xs text-gray-500">{order.customer.email}</p>
                  </div>
                </div>

              </div>

              {/* SHIPPING */}
              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <h2 className="mb-4 text-sm font-semibold text-gray-900">
                  Shipping address
                </h2>

                <div className="flex gap-3">
                  <MapPin size={16} className="mt-1 text-gray-500" />

                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="font-medium text-gray-900">
                      {order.shippingAddress.name}
                    </p>
                    <p>{order.shippingAddress.line1}</p>
                    <p>{order.shippingAddress.line2}</p>
                    <p>{order.shippingAddress.country}</p>
                  </div>
                </div>
              </div>

              {/* PAYMENT */}
              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <h2 className="mb-4 text-sm font-semibold text-gray-900">
                  Payment
                </h2>

                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <CreditCard size={18} className="text-gray-500" />

                    <div>
                      <p className="text-sm text-gray-700">
                        Visa •••• {order.payment.last4}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Paid on {order.payment.date}
                      </p>
                    </div>
                  </div>

                  <span className="font-medium">
                    ${order.payment.amount.toFixed(2)}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}