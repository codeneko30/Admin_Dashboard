import { useState } from "react";
import Sidebar from "~/components/Sidebar";
import { ChevronLeft, Search, ChevronDown, Image } from "lucide-react";

const statusOptions = ["Active", "Draft", "Archived"];
const categoryOptions = ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Toys"];

export default function AddProductPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    category: "",
    vendor: "",
    tags: "",
    price: "",
    compareAtPrice: "",
    sku: "",
    quantity: "",
  });

  const [statusOpen, setStatusOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Mobile sticky header (hidden on md+) ── */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 md:hidden">
        <button className="text-gray-500" aria-label="Back">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-base font-semibold text-gray-900">Add product</h1>
        <Search size={20} className="text-gray-400" />
      </div>

      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <main className="mx-auto max-w-4xl px-4 py-4 md:ml-60 md:px-6 md:py-8">

        {/* Back button (hidden on mobile) */}
        <button className="mb-4 hidden items-center gap-1 text-sm text-gray-500 transition-colors hover:text-gray-700 md:flex">
          <ChevronLeft size={14} />
          Products
        </button>

        {/* ── Header ── */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">Add product</h1>

          {/* Desktop action buttons (hidden on mobile) */}
          <div className="hidden gap-2 md:flex">
            <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
              Discard
            </button>
            <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
              Save product
            </button>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid gap-5 lg:grid-cols-3">

          {/* ── Left Column ── */}
          <div className="space-y-5 lg:col-span-2">

            {/* Product Details */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Product details</h2>

              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  placeholder="e.g. Wireless Headphones"
                  value={form.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-700">Description</label>
                <textarea
                  placeholder="Write a product description..."
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>

            {/* Media */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Media</h2>

              <label className="flex h-36 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 transition-colors hover:bg-gray-100">
                <input type="file" accept="image/*" multiple className="hidden" />
                <Image size={28} className="mb-2 text-gray-400" />
                <p className="text-sm font-medium text-gray-700">Upload images</p>
                <p className="mt-0.5 text-xs text-gray-400">PNG, JPG up to 10MB</p>
              </label>
            </div>

            {/* Pricing */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Pricing</h2>

              {/* Price + Compare-at — side by side on desktop, stacked on mobile */}
              <div className="mb-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                    <input
                      type="text"
                      placeholder="0.00"
                      value={form.price}
                      onChange={(e) => handleChange("price", e.target.value)}
                      className="w-full rounded-lg border border-gray-200 py-2 pl-6 pr-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">Compare-at price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                    <input
                      type="text"
                      placeholder="0.00"
                      value={form.compareAtPrice}
                      onChange={(e) => handleChange("compareAtPrice", e.target.value)}
                      className="w-full rounded-lg border border-gray-200 py-2 pl-6 pr-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                  </div>
                </div>
              </div>

              {/* SKU + Quantity — side by side on desktop, stacked on mobile */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">SKU</label>
                  <input
                    type="text"
                    placeholder="APX-0000"
                    value={form.sku}
                    onChange={(e) => handleChange("sku", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-700">Quantity</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={form.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="space-y-5">

            {/* Status */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-3 text-sm font-semibold text-gray-900">Status</h2>
              <div className="relative">
                <button
                  onClick={() => { setStatusOpen(!statusOpen); setCategoryOpen(false); }}
                  className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm transition-colors hover:bg-gray-50"
                >
                  <span className={form.status ? "text-gray-800" : "text-gray-400"}>
                    {form.status || "Select an item"}
                  </span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>
                {statusOpen && (
                  <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                    {statusOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { handleChange("status", opt); setStatusOpen(false); }}
                        className="block w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Organization */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h2 className="mb-4 text-sm font-semibold text-gray-900">Organization</h2>

              {/* Category */}
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-medium text-gray-700">Category</label>
                <div className="relative">
                  <button
                    onClick={() => { setCategoryOpen(!categoryOpen); setStatusOpen(false); }}
                    className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm transition-colors hover:bg-gray-50"
                  >
                    <span className={form.category ? "text-gray-800" : "text-gray-400"}>
                      {form.category || "Select an item"}
                    </span>
                    <ChevronDown size={16} className="text-gray-400" />
                  </button>
                  {categoryOpen && (
                    <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                      {categoryOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => { handleChange("category", opt); setCategoryOpen(false); }}
                          className="block w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Vendor */}
              <div className="mb-4">
                <label className="mb-1.5 block text-xs font-medium text-gray-700">Vendor</label>
                <input
                  type="text"
                  placeholder="e.g. Apex"
                  value={form.vendor}
                  onChange={(e) => handleChange("vendor", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-700">Tags</label>
                <input
                  type="text"
                  placeholder="Add tags"
                  value={form.tags}
                  onChange={(e) => handleChange("tags", e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile bottom Save button (hidden on md+) ── */}
        <div className="mt-6 md:hidden">
          <button className="w-full rounded-xl bg-gray-900 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
            Save product
          </button>
        </div>

      </main>
    </div>
  );
}