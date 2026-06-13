export default function CustomerDetailPage() {
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
  
    return (
      <div className="min-h-screen bg-white font-sans">
        <div className="max-w-4xl mx-auto px-6 py-8">
  
          {/* Back Link */}
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-5 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Customers
          </button>
  
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
  
              {/* Avatar INLINE (no function) */}
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-12 h-12" fill="none">
                  <circle cx="18" cy="18" r="18" fill="#e5e7eb" />
                  <circle cx="18" cy="14" r="6" fill="#374151" />
                  <ellipse cx="18" cy="30" rx="10" ry="7" fill="#374151" />
                </svg>
              </div>
  
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold text-gray-900">{customer.name}</h1>
  
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-400 text-yellow-900">
                    {customer.status}
                  </span>
                </div>
  
                <p className="text-sm text-gray-500 mt-0.5">
                  Customer since {customer.memberSince}
                </p>
              </div>
            </div>
  
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Edit
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                Email customer
              </button>
            </div>
          </div>
  
          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-5">
  
            {/* LEFT */}
            <div className="col-span-2 space-y-5">
  
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {customer.stats.map((stat, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-green-600">{stat.change}</span>
                      <span className="text-xs text-gray-400">{stat.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Recent Orders */}
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100">
                  <h2 className="text-sm font-semibold text-gray-900">Recent orders</h2>
                </div>
  
                <div className="divide-y divide-gray-100">
                  {customer.recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{order.id}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{order.date}</p>
                      </div>
  
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-900">
                          ${order.total.toFixed(2)}
                        </span>
  
                        <div className="w-20 flex justify-end">
                          {order.status === "Refunded" ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
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
  
            {/* RIGHT */}
            <div className="col-span-1 space-y-5">
  
              {/* Contact */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h2 className="text-sm font-semibold text-gray-900 mb-4">Contact</h2>
  
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <p className="text-sm text-gray-800">{customer.contact.email}</p>
                </div>
  
                <div>
                  <p className="text-xs text-gray-400 mb-1">Phone</p>
                  <p className="text-sm text-gray-800">{customer.contact.phone}</p>
                </div>
              </div>
  
              {/* Address */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h2 className="text-sm font-semibold text-gray-900 mb-4">Default address</h2>
  
                <div className="space-y-0.5">
                  <p className="text-sm font-medium text-gray-900">{customer.address.name}</p>
                  <p className="text-sm text-gray-600">{customer.address.line1}</p>
                  <p className="text-sm text-gray-600">{customer.address.line2}</p>
                  <p className="text-sm text-gray-600">{customer.address.country}</p>
                </div>
              </div>
  
              {/* Marketing */}
              <div className="border border-gray-200 rounded-xl p-5">
                <h2 className="text-sm font-semibold text-gray-900 mb-4">Marketing</h2>
  
                <div className="mb-3">
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <p className="text-sm text-gray-800">{customer.marketing.email}</p>
                </div>
  
                <div>
                  <p className="text-xs text-gray-400 mb-1">SMS</p>
                  <p className="text-sm text-gray-500">{customer.marketing.sms}</p>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    );
  }