export default function OrderTimeline() {
    const order = {
      timeline: [
        {
          id: 1,
          title: "Order placed",
          date: "Feb 8, 2026 · 9:24 AM",
          done: true,
        },
        {
          id: 2,
          title: "Payment confirmed",
          date: "Feb 8, 2026 · 9:25 AM",
          done: true,
        },
        {
          id: 3,
          title: "Preparing for shipment",
          date: "Feb 8, 2026 · 2:10 PM",
          done: true,
        },
        {
          id: 4,
          title: "Shipped",
          date: "Pending",
          done: false,
        },
      ],
    };
  
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-5">
        <h2 className="mb-5 text-sm font-semibold text-gray-900">
          Timeline
        </h2>
  
        <div className="space-y-0">
          {order.timeline.map((item, index) => (
            <div key={item.id} className="flex gap-4">
              {/* Dot + Connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`mt-1 h-2.5 w-2.5 rounded-full flex-shrink-0 ${
                    item.done
                      ? "bg-black"
                      : "border-2 border-gray-300 bg-white"
                  }`}
                />
  
                {index < order.timeline.length - 1 && (
                  <div className="my-1 w-px flex-1 bg-gray-200" />
                )}
              </div>
  
              {/* Content */}
              <div
                className={`${
                  index === order.timeline.length - 1
                    ? "pb-0"
                    : "pb-6"
                }`}
              >
                <p
                  className={`text-sm font-medium ${
                    item.done
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
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
    );
  }