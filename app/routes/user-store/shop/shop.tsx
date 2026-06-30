import { useState } from "react";
import {
  Search,

  ChevronDown,
  X,
  SlidersHorizontal,
  
} from "lucide-react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import DesktopSidebar from "./_components/Desktop-Sidebar"
import ProductGrid from "~/components/Product-Grid"


// --- Data ---
const occasions = [
  {
    title: "All",
    options: ["Bouquets", "Flowers", "Plants", "Dried", "Gifts"],
  },
  {
    title: "Type US",
    options: ["Chassis Bouquet", "Luxury Arrangement", "Subscription", "LIFESTYLE", "Dried Flowers"],
  },
  {
    title: "Color (4)",
    options: ["Pastel", "Vibrant", "White & Green", "Warm Tones"],
  },
  {
    title: "Price (€)",
    options: ["Under €25", "€25 - €45", "€45 - €50", "Over €50"],
  },
];



// --- Main Page ---

export default function FloristaShop() {
  const [filterOpen, setFilterOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* HEADER */}
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-5 md:py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-wider text-gray-400 mb-4 md:mb-8">
          <a href="#" className="hover:text-black transition">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-black transition">Shop</a>
          <span>/</span>
          <span className="text-gray-600 md:text-gray-900">Seasonal Favorites</span>
        </nav>

        {/* Title + Description */}
        <div className="mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-serif font-bold md:font-normal mb-2">Seasonal Favorites</h1>
          <p className="text-sm text-gray-500 max-w-md">
            Hand-picked arrangements for every occasion, fresh from our studios.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* SIDEBAR — Desktop only */}
          <DesktopSidebar/>

          {/* CONTENT AREA */}
          <div className="flex-1">
            {/* Result count */}
            <p className="text-xs text-gray-500 mb-4">Showing 9 of 47</p>

            {/* Filter / Sort bar — Mobile/Tablet */}
            <div className="flex items-center justify-between gap-3 mb-4 lg:hidden">
              <button
                onClick={() => setFilterOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
              >
                <SlidersHorizontal size={16} />
                Filters (5)
              </button>

              <div className="relative">
                <select className="appearance-none pl-4 pr-9 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 cursor-pointer">
                  <option>Sort: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            

            {/* Sort — Desktop only */}
            <div className="hidden lg:flex items-center justify-end mb-8">
              <div className="relative">
                <button className="text-xs rounded border border-gray-200 px-4 py-2 flex items-center gap-2 hover:border-black transition-colors">
                  Sort: Featured <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <ProductGrid/>
          </div>
        </div>
      </main>

      {/* MOBILE FILTER DRAWER */}
      {filterOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setFilterOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white z-50 overflow-y-auto lg:hidden">
            <div className="p-6">
              {/* Drawer Header */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-bold text-sm">Filters (5)</h2>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* Search Filters */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                <input
                  type="text"
                  placeholder="Search Filters"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 text-sm focus:outline-none focus:border-black"
                />
              </div>

              {/* Filter Categories  */}
              <div className="space-y-8">
                {occasions.map((item) => (
                  <div key={item.title}>
                    <div className="flex justify-between items-center mb-3 group cursor-pointer">
                      <h3 className="text-xs font-bold uppercase tracking-tight">{item.title}</h3>
                      <ChevronDown size={14} className="text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      {item.options.map((option, i) => (
                        <label key={i} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex gap-3">
                <button
                  onClick={() => setFilterOpen(false)}
                  className="flex-1 bg-black text-white py-3 text-sm font-medium"
                >
                  Apply Filters
                </button>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="flex-1 border py-3 text-sm font-medium text-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}