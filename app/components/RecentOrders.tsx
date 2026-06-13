export default function RecentOrders() {

    const recentOrders = [
        { 
            id: "#3021", 
            date: "Feb 8, 2026", 
            total: 249.0, 
            status: "Paid" 
        },
        { 
            id: "#2980", 
            date: "Jan 22, 2026", 
            total: 129.0, 
            status: "Paid" 
        },
        { 
            id: "#2933", 
            date: "Jan 9, 2026", 
            total: 540.0, 
            status: "Refunded" 
        },
        { 
            id: "#2890", 
            date: "Dec 28, 2025", 
            total: 84.0, 
            status: "Paid" 
        },
    ];


    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">

            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100">
                <h2 className="text-sm font-semibold text-gray-900">
                    Recent orders
                </h2>
            </div>


            {/* Orders List */}
            <div className="divide-y divide-gray-100">

                {recentOrders.map((order) => (
                    <div
                        key={order.id}
                        className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer"
                    >

                        {/* Order info */}
                        <div>
                            <p className="text-sm font-semibold text-gray-900">
                                {order.id}
                            </p>

                            <p className="text-xs text-gray-500 mt-0.5">
                                {order.date}
                            </p>
                        </div>


                        {/* Amount + Status */}
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

                                    <span className="text-sm text-gray-700">
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