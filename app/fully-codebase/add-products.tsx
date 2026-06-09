import { useState } from "react";
import Sidebar from "~/components/Sidebar";

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

    const images = [];
    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };






    return (
        <div className="min-h-screen bg-white font-sans">

            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

            <main className=" ml-60 max-w-4xl mx-auto px-6 py-8">

                {/* ── Back Link ── */}
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-4 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Products
                </button>

                {/* ── Header ── */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Add product</h1>
                    <div className="flex gap-2">
                        <button

                            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Discard
                        </button>
                        <button

                            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Save product
                        </button>
                    </div>
                </div>

                {/* ── Main Grid ── */}
                <div className="grid grid-cols-3 gap-5">

                    {/* ── Left Column ── */}
                    <div className="col-span-2 space-y-5">

                        {/* Product Details Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-4">Product details</h2>

                            {/* Title */}
                            <div className="mb-4">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Wireless Headphones"
                                    value={form.title}
                                    onChange={(e) => handleChange("title", e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Description
                                </label>
                                <textarea
                                    placeholder="Write a product description..."
                                    value={form.description}
                                    onChange={(e) => handleChange("description", e.target.value)}
                                    rows={4}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
                                />
                            </div>
                        </div>

                        {/* Media Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-4">Media</h2>

                            {/* Drop Zone */}
                            <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl cursor-pointer transition-colors border-gray-200 bg-gray-50 hover:bg-gray-100" >


                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="hidden"

                                />
                                <svg
                                    className="w-8 h-8 text-gray-400 mb-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                                    <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5} />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M21 15l-5-5L5 21"
                                    />
                                </svg>
                                <p className="text-sm font-medium text-gray-700">Upload images</p>
                                <p className="text-xs text-gray-400 mt-0.5">PNG, JPG up to 10MB</p>
                            </label>

                            {/* Image Previews */}
                            {images.length > 0 && (
                                <div className="grid grid-cols-4 gap-2 mt-4">
                                    {images.map((src, i) => (
                                        <div key={i} className="relative group">
                                            <img
                                                src={src}
                                                alt={`upload-${i}`}
                                                className="w-full h-20 object-cover rounded-lg border border-gray-200"
                                            />
                                            <button
                                                // onClick={() => setImages((prev) => prev.filter((_, idx) => idx !== i))}
                                                className="absolute top-1 right-1 w-5 h-5 bg-gray-900 text-white rounded-full text-xs items-center justify-center hidden group-hover:flex"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Pricing Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-4">Pricing</h2>

                            {/* Price + Compare-at Price */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Price
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                            $
                                        </span>
                                        <input
                                            type=""
                                            placeholder="0.00"

                                            className="w-full border border-gray-200 rounded-lg pl-6 pr-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Compare-at price
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                            $
                                        </span>
                                        <input
                                            type=""
                                            placeholder="0.00"

                                            className="w-full border border-gray-200 rounded-lg pl-6 pr-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* SKU + Quantity */}
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        SKU
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="APX-0000"

                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                        Quantity
                                    </label>
                                    <input
                                        type=""
                                        placeholder="0"

                                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* ── Right Column ── */}
                    <div className="col-span-1 space-y-5">

                        {/* Status Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-3">Status</h2>
                            <div className="relative">
                                <button
                                    onClick={() => setStatusOpen(!statusOpen)}
                                    className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <span className={form.status ? "text-gray-800" : "text-gray-400"}>
                                        {form.status || "Select an item"}
                                    </span>
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {statusOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        {statusOptions.map((opt) => (
                                            <button
                                                key={opt}
                                                onClick={() => { handleChange("status", opt); setStatusOpen(false); }}
                                                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Organization Card */}
                        <div className="border border-gray-200 rounded-xl p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-4">Organization</h2>

                            {/* Category */}
                            <div className="mb-4">
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Category
                                </label>
                                <div className="relative">
                                    <button
                                        onClick={() => setCategoryOpen(!categoryOpen)}
                                        className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className={form.category ? "text-gray-800" : "text-gray-400"}>
                                            {form.category || "Select an item"}
                                        </span>
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {categoryOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                            {categoryOptions.map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => { handleChange("category", opt); setCategoryOpen(false); }}
                                                    className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
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
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Vendor
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Apex"
                                    value={form.vendor}
                                    onChange={(e) => handleChange("vendor", e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                            </div>

                            {/* Tags */}
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                                    Tags
                                </label>
                                <input
                                    type="text"
                                    placeholder="Add tags"
                                    value={form.tags}
                                    onChange={(e) => handleChange("tags", e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
                                />
                            </div>
                       / </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

