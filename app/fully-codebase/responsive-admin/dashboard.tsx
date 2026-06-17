

import { Search } from "lucide-react";
const revenueData = [
  { month: "Jan", online: 280, inStore: 140 },
  { month: "Feb", online: 180, inStore: 160 },
  { month: "Mar", online: 320, inStore: 190 },
  { month: "Apr", online: 140, inStore: 210 },
  { month: "May", online: 190, inStore: 260 },
  { month: "Jun", online: 250, inStore: 310 },
];

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


  const maxValue = Math.max(
    ...revenueData.flatMap((d) => [d.online, d.inStore])
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-8 font-sans">
      {/* HEADER */}
      <div className="sticky top-0 z-10 border-b bg-white">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard
          </h1>


          <Search />


        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6 space-y-8">

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500">
              Total Revenue
            </p>

            <p className="mt-1 text-2xl font-bold">
              $48,250
            </p>

            <div className="mt-2 flex gap-1">
              <span className="text-xs font-semibold text-green-600">
                +12.5%
              </span>

              <span className="text-xs text-gray-400">
                vs last mo.
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500">
              Orders
            </p>

            <p className="mt-1 text-2xl font-bold">
              1,284
            </p>

            <div className="mt-2 flex gap-1">
              <span className="text-xs font-semibold text-green-600">
                +8.2%
              </span>

              <span className="text-xs text-gray-400">
                vs last mo.
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500">
              Customers
            </p>

            <p className="mt-1 text-2xl font-bold">
              3,672
            </p>

            <div className="mt-2 flex gap-1">
              <span className="text-xs font-semibold text-green-600">
                +5.1%
              </span>

              <span className="text-xs text-gray-400">
                vs last mo.
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-4">
            <p className="text-xs text-gray-500">
              Avg. Order
            </p>

            <p className="mt-1 text-2xl font-bold">
              $37.58
            </p>

            <div className="mt-2 flex gap-1">
              <span className="text-xs font-semibold text-red-500">
                -1.4%
              </span>

              <span className="text-xs text-gray-400">
                vs last mo.
              </span>
            </div>
          </div>

        </div>

        {/* Revenue CHART */}
        <div className="bg-white rounded-3xl border border-gray-100 p-5">
          <h2 className="mb-4 text-sm font-semibold">
            Revenue overview
          </h2>

          <div className="flex items-end gap-2 h-52 md:h-64">
            {revenueData.map((item) => (
              <div
                key={item.month}
                className="flex-1 flex flex-col items-center"
              >
                <div className="flex w-full h-44 md:h-56 items-end gap-1">
                  <div
                    className="flex-1 rounded-t-lg bg-orange-500"
                    style={{
                      height:
                        `${(item.online / maxValue) * 100}%`,
                    }}
                  />

                  <div
                    className="flex-1 rounded-t-lg bg-teal-500"
                    style={{
                      height:
                        `${(item.inStore / maxValue) * 100}%`,
                    }}
                  />
                </div>

                <span className="mt-2 text-xs text-gray-400">
                  {item.month}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-6">
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded bg-orange-500" />
              Online
            </div>

            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded bg-teal-500" />
              In-store
            </div>
          </div>
        </div>

        {/* RECENT ORDERS TABLE*/}

        <div className="md:hidden border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full">
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`hover:bg-gray-50 ${index !== orders.length - 1
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
  );
}