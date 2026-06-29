
export default function RecentOrders() {
    const customer = {
      recentOrders: [
        {
          id: "#3021",
          date: "Feb 8, 2026",
          total: 249.0,
          status: "Paid",
        },
        {
          id: "#2980",
          date: "Jan 22, 2026",
          total: 129.0,
          status: "Paid",
        },
        {
          id: "#2933",
          date: "Jan 9, 2026",
          total: 540.0,
          status: "Refunded",
        },
        {
          id: "#2890",
          date: "Dec 28, 2025",
          total: 84.0,
          status: "Paid",
        },
      ],
    };
  
    return (
      <div className="overflow-hidden rounded-xl border border-gray-200">
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-4">
          <h2 className="text-sm font-semibold text-gray-900">
            Recent orders
          </h2>
        </div>
  
        {/* Orders */}
        <div className="divide-y divide-gray-100">
          {customer.recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {order.id}
                </p>
  
                <p className="mt-0.5 text-xs text-gray-500">
                  {order.date}
                </p>
              </div>
  
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-900">
                  ${order.total.toFixed(2)}
                </span>
  
                <div className="flex w-20 justify-end">
                  {order.status === "Refunded" ? (
                    <span className="inline-flex rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-medium text-white">
                      Refunded
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900">
                      Paid
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }