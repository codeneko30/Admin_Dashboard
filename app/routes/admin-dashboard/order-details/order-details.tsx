




import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import BottomNav from "~/components/BottomNav";
import Items from "./_components/Items";
import Timeline from "./_components/TimeLine";

import Button from "~/components/Button";
import {
  ChevronLeft,
  Search,

  CreditCard,
  MapPin,
  User,
} from "lucide-react";


export function loader() {
  const order = {
    number: 3021,
    status: "Paid",
    date: "Feb 8, 2026 · 9:24 AM",



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


  };
  return order

}

export default function OrderDetails({ loaderData }) {
  const order = loaderData
  const [activeItem, setActiveItem] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Mobile sticky header (hidden on md+) ── */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">

        {/* <button className="text-gray-500" aria-label="Back">
          <ChevronLeft size={20} />
        </button> */}

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


        {/* <DesktopBackButton label=' Orders' /> */}

        <Button variant="ghost" size="sm" leftIcon={<ChevronLeft size={16} />} className="mb-4 hidden md:inline-flex">Orders</Button>

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

            {/* <DesktopSecondaryButton label='  Refund' /> */}
            <Button variant='secondary'>Refund</Button>

            {/* <DesktopBlackButton label='Mark as fulfilled'/> */}

            <Button variant='primary'>Mark as fulfilled</Button>

          </div>

        </div>



        {/* ── Main grid ── */}
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">

          {/* LEFT */}
          <div className="space-y-6">

            {/* ITEMS */}
            <Items />

            {/* TIMELINE */}
            <Timeline />

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

        <div id="1" className="mt-6 flex gap-4 md:hidden mb-20">

          {/* <button className="flex-1 rounded-xl border border-gray-300 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Refund
          </button>

          <button className="flex-1 rounded-xl bg-gray-900 py-3.5 text-sm font-medium text-white hover:bg-black">
            Mark as fulfilled
          </button> */}

          <Button variant="secondary" className="flex-1">
            Refund
          </Button>

          <Button className="flex-1">
          Mark as fulfilled

          </Button>
         

        </div>

        <div id="2">
          <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />

        </div>

      </main>
    </div>
  );
}