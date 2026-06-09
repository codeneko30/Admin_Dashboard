import { useState } from "react";
import Sidebar from "../components/Sidebar";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        avatar: "https://i.pravatar.cc/40?img=11",
        sku: "APX-1024",
        price: 199,
        stock: 128,
        status: "Active",
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        avatar: "https://i.pravatar.cc/40?img=12",
        sku: "APX-2087",
        price: 349,
        stock: 64,
        status: "Active",
    },
    {
        id: 3,
        name: "Leather Backpack",
        avatar: "https://i.pravatar.cc/40?img=13",
        sku: "APX-3391",
        price: 129,
        stock: 0,
        status: "Out of stock",
    },
    {
        id: 4,
        name: "Ceramic Coffee Set",
        avatar: "https://i.pravatar.cc/40?img=14",
        sku: "APX-4410",
        price: 59,
        stock: 212,
        status: "Active",
    },
    {
        id: 5,
        name: "Yoga Mat Bundle",
        avatar: "https://i.pravatar.cc/40?img=15",
        sku: "APX-5562",
        price: 45,
        stock: 18,
        status: "Pending",
    },
    {
        id: 6,
        name: "Standing Desk",
        avatar: "https://i.pravatar.cc/40?img=16",
        sku: "APX-6033",
        price: 499,
        stock: 7,
        status: "Active",
    },
    {
        id: 7,
        name: "Desk Lamp",
        avatar: "https://i.pravatar.cc/40?img=17",
        sku: "APX-7188",
        price: 39,
        stock: 0,
        status: "Draft",
    },
    {
        id: 8,
        name: "Mechanical Keyboard",
        avatar: "https://i.pravatar.cc/40?img=18",
        sku: "APX-8043",
        price: 119,
        stock: 95,
        status: "Active",
    },
];

export default function ProductsPage() {
    const [activeItem, setActiveItem] = useState("");
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("All");

    const filteredProducts = products.filter((product) => {
        const matchSearch =
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.sku.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            selected === "All" || product.status === selected;

        return matchSearch && matchStatus;
    });

    return (
        <div className="flex min-h-screen bg-white">
            <Sidebar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />

            <main className="ml-56 flex-1 p-8">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Products
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Manage your store's catalog.
                        </p>
                    </div>

                    <button className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white">
                        Add Product
                    </button>
                </div>

                {/* Search + Filter */}
                <div className="mb-4 flex gap-2">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-400"
                    />

                    <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="w-40 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-600"
                    >
                        <option>All</option>
                        <option>Active</option>
                        <option>Pending</option>
                        <option>Draft</option>
                        <option>Out of stock</option>
                    </select>

                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
                                <th className="px-5 py-3 font-medium">Product</th>
                                <th className="px-5 py-3 font-medium">SKU</th>
                                <th className="px-5 py-3 font-medium">Price</th>
                                <th className="px-5 py-3 font-medium">Stock</th>
                                <th className="px-5 py-3 font-medium">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredProducts.map((product) => (
                                <tr
                                    key={product.id}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.avatar}
                                                alt={product.name}
                                                className="h-8 w-8 rounded-full object-cover"
                                            />

                                            <span className="text-sm font-medium text-gray-900">
                                                {product.name}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-5 py-4 text-sm text-gray-500">
                                        {product.sku}
                                    </td>

                                    <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                                        ${product.price.toFixed(2)}
                                    </td>

                                    <td className="px-5 py-4 text-sm text-gray-700">
                                        {product.stock}
                                    </td>

                                    <td className="px-5 py-4">
                                        {product.status === "Out of stock" ? (
                                            <span className="inline-flex rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white">
                                                Out of stock
                                            </span>
                                        ) : product.status === "Pending" ? (
                                            <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                                                Pending
                                            </span>
                                        ) : product.status === "Draft" ? (
                                            <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-400">
                                                Draft
                                            </span>
                                        ) : (
                                            <span className="inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-900">
                                                Active
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Showing 1–{filteredProducts.length} of 64 products
                    </p>

                    <div className="flex gap-2">
                        <button className="rounded-md border border-gray-200 px-3 py-1.5 text-sm">
                            Previous
                        </button>

                        <button className="rounded-md border border-gray-200 px-3 py-1.5 text-sm">
                            Next
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}