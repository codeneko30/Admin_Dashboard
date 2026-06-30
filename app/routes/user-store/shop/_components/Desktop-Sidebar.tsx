import {
    Search,
    ChevronDown,
  } from "lucide-react";
  
  const occasions = [
    {
      title: "All",
      options: [
        "Bouquets",
        "Flowers",
        "Plants",
        "Dried",
        "Gifts",
      ],
    },
    {
      title: "Type US",
      options: [
        "Chassis Bouquet",
        "Luxury Arrangement",
        "Subscription",
        "LIFESTYLE",
        "Dried Flowers",
      ],
    },
    {
      title: "Color (4)",
      options: [
        "Pastel",
        "Vibrant",
        "White & Green",
        "Warm Tones",
      ],
    },
    {
      title: "Price (€)",
      options: [
        "Under €25",
        "€25 - €45",
        "€45 - €50",
        "Over €50",
      ],
    },
  ];
  
  export default function FiltersSidebar() {
    return (
      <aside className="hidden w-64 shrink-0 lg:block">
  
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
  
          <h2 className="text-sm font-bold">
            Filters (5)
          </h2>
  
          <button className="text-xs text-gray-500 underline hover:text-black">
            Clear all
          </button>
  
        </div>
  
        {/* Search */}
        <div className="relative mb-8">
  
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
  
          <input
            type="text"
            placeholder="Search Filters"
            className="w-full border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-black focus:outline-none"
          />
  
        </div>
  
        {/* Filters */}
        <div className="space-y-8">
  
          {occasions.map((item) => (
  
            <div key={item.title}>
  
              {/* Group Title */}
              <div className="group mb-3 flex cursor-pointer items-center justify-between">
  
                <h3 className="text-xs font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
  
                <ChevronDown
                  size={14}
                  className="text-gray-400"
                />
  
              </div>
  
              {/* Options */}
              <div className="space-y-2">
  
                {item.options.map((option) => (
  
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
                  >
  
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
  
                    {option}
  
                  </label>
  
                ))}
  
              </div>
  
            </div>
  
          ))}
  
        </div>
  
      </aside>
    );
  }