

import {
    ImageIcon,
    Minus,
    Plus,
    X,
    Info,
  } from "lucide-react";
  
  const cartItems = [
    {
      id: 1,
      title: "Oriental Lily Bouquet",
      details:
        "Style: Classic   Size: Large",
      price: "$45.00",
    },
  
    {
      id: 2,
      title:
        "Botanical Candle – Fig & Cedar",
      details:
        "Scent: Fig & Cedar   Size: 220g",
      price: "$24.00",
    },
  ];
  
  const notes = [
    "Fresh flowers are prepared on the day of delivery. See our freshness guarantee for details.",
  
    "Orders shipped outside the Netherlands may require additional handling time for freshness.",
  
    "If your order includes both flowers and gifts, they may arrive in separate deliveries.",
  ];
  
  export default function Cart() {
    return (
      <section className="rounded-lg border border-gray-200 p-4 sm:p-5">
  
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
  
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Your bag
          </h2>
  
          <span className="rounded border border-gray-300 px-2 py-0.5 text-xs text-gray-600">
            {cartItems.length} items
          </span>
  
        </div>
  
        {/* Cart items */}
        <div className="border-t border-gray-200">
  
          {cartItems.map((item) => (
  
            <div
              key={item.id}
              className="flex items-start gap-3 border-b border-gray-200 py-4 sm:gap-4 sm:py-5"
            >
  
              {/* Image */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gray-100 sm:h-14 sm:w-14">
  
                <ImageIcon
                  size={16}
                  className="text-gray-400"
                />
  
              </div>
  
              {/* Content */}
              <div className="min-w-0 flex-1">
  
                <h3 className="text-sm font-medium leading-snug text-gray-900 sm:text-base">
                  {item.title}
                </h3>
  
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {item.details}
                </p>
  
                {/* Quantity */}
                <div className="mt-3 inline-flex items-center rounded border border-gray-200">
  
                  <button className="px-2 py-1 text-gray-500 hover:bg-gray-50">
                    <Minus size={12} />
                  </button>
  
                  <span className="px-3 text-sm">
                    1
                  </span>
  
                  <button className="px-2 py-1 text-gray-500 hover:bg-gray-50">
                    <Plus size={12} />
                  </button>
  
                </div>
  
              </div>
  
              {/* Price */}
              <div className="flex shrink-0 flex-col items-end gap-2">
  
                <button className="text-gray-400 hover:text-gray-600">
                  <X size={14} />
                </button>
  
                <span className="text-sm font-medium sm:text-base">
                  {item.price}
                </span>
  
              </div>
  
            </div>
  
          ))}
  
        </div>
  
        {/* Notes */}
        <div className="space-y-3 border-b border-gray-200 py-4 text-xs text-gray-600 sm:py-5 sm:text-sm">
  
          {notes.map((note, index) => (
  
            <div
              key={index}
              className="flex items-start gap-2"
            >
  
              <Info
                size={13}
                className="mt-0.5 shrink-0"
              />
  
              <p>{note}</p>
  
            </div>
  
          ))}
  
        </div>
  
        {/* Help */}
        <div className="pt-4 text-sm sm:pt-5">
  
          <p className="font-medium text-gray-900">
            Need help?
          </p>
  
          <div className="mt-2 flex gap-6">
  
            <a
              href="#"
              className="text-gray-700 hover:text-black"
            >
              Read our FAQs
            </a>
  
            <a
              href="#"
              className="text-gray-700 hover:text-black"
            >
              Contact us
            </a>
  
          </div>
  
        </div>
  
      </section>
    );
  }