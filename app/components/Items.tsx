import { Package } from "lucide-react";

export default function OrderItems() {
  const order = {
    number: 3021,
    status: "Paid",
    date: "Feb 8, 2026 · 9:24 AM",

    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        variant: "Color: Black",
        qty: 1,
        price: 199.0,
      },
      {
        id: 2,
        name: "Charging Cable",
        variant: "Length: 2m",
        qty: 2,
        price: 20.0,
      },
      {
        id: 3,
        name: "Warranty Plan",
        variant: "1 year",
        qty: 1,
        price: 10.0,
      },
    ],

    subtotal: 249,
    shipping: 10,
    tax: 15,
    total: 274,
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="mb-5 text-sm font-semibold text-gray-900">
        Items
      </h2>

      <div className="space-y-4">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between"
          >
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
                <Package size={16} className="text-gray-500" />
              </div>

              <div>
                <h3 className="text-sm font-medium">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {item.variant}
                </p>
              </div>
            </div>

            <div className="text-sm">
              {item.qty && (
                <span className="mr-2 text-gray-500">
                  ×{item.qty}
                </span>
              )}

              <span className="font-medium">
                ${item.price.toFixed(2)}
              </span>
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
  );
}