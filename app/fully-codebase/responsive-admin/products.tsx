

import { useState } from "react";
import {

    ChevronRight,
    ChevronDown,
} from "lucide-react";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        sku: "APX-1024",
        price: 199,
        stock: 128,
        status: "Active",
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        sku: "APX-2087",
        price: 349,
        stock: 64,
        status: "Active",
    },
    {
        id: 3,
        name: "Leather Backpack",
        sku: "APX-3391",
        price: 129,
        stock: 0,
        status: "Out of stock",
    },
    {
        id: 4,
        name: "Ceramic Coffee Set",
        sku: "APX-4410",
        price: 59,
        stock: 212,
        status: "Active",
    },
    {
        id: 5,
        name: "Yoga Mat Bundle",
        sku: "APX-5562",
        price: 45,
        stock: 18,
        status: "Active",
    },
    {
        id: 6,
        name: "Standing Desk",
        sku: "APX-6033",
        price: 499,
        stock: 7,
        status: "Active",
    },
    {
        id: 7,
        name: "Desk Lamp",
        sku: "APX-7188",
        price: 39,
        stock: 0,
        status: "Draft",
    },
    {
        id: 8,
        name: "Mechanical Keyboard",
        sku: "APX-8043",
        price: 119,
        stock: 95,
        status: "Active",
    },
];

export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("All");


    const filteredProducts = products.filter((p) => {
        const matchSearch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.sku.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            selected === "All" ||
            p.status === selected;

        return matchSearch && matchStatus;
    });

    return (
        <div className="min-h-screen bg-gray-50 pb-16 font-sans">

            {/* HEADER */}
            <div className="sticky top-0 z-10 border-b bg-white">
                <div className="mx-auto max-w-2xl px-4 py-4">

                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">
                            Products
                        </h1>
                    </div>

                    {/* block-A style search + select */}


                    <div className="mt-4 flex gap-2">

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products..."
                            className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none"
                        />

                        <select
                            value={selected}
                            onChange={(e) => setSelected(e.target.value)}
                            className="
    w-40
    rounded-lg
    border
    border-gray-200
    px-3
    py-2
    text-sm
    text-gray-600
    outline-none
    bg-white
  "
                        >
                            <option>All</option>
                            <option>Active</option>
                            <option>Pending</option>
                            <option>Draft</option>
                            <option>Out of stock</option>
                        </select>

                    </div>


                </div>
            </div>

            {/* Product List → block-A table render pattern */}
            <div className="mx-auto max-w-2xl px-4 pt-4">

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

                    <table className="w-full">
                        <tbody>

                            {filteredProducts.map((product) => (
                                <tr
                                    key={product.id}
                                    className="border-b border-gray-100 hover:bg-gray-50"
                                >
                                    <td className="px-4 py-4">

                                        <div className="flex items-center justify-between">

                                            {/* left */}
                                            <div className="flex items-center gap-4">

                                                <div className="w-12 h-12 rounded-xl border border-gray-200 bg-gray-100 flex items-center justify-center">

                                                    <svg
                                                        className="w-6 h-6 text-gray-400"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <rect
                                                            x="3"
                                                            y="3"
                                                            width="18"
                                                            height="18"
                                                            rx="2"
                                                        />

                                                        <circle
                                                            cx="8.5"
                                                            cy="8.5"
                                                            r="1.5"
                                                        />

                                                        <path d="M21 15l-5-5L5 21" />
                                                    </svg>

                                                </div>

                                                <div>

                                                    <p className="font-semibold text-gray-900">
                                                        {product.name}
                                                    </p>

                                                    <p className="text-xs text-gray-400">
                                                        {product.sku}
                                                    </p>

                                                </div>

                                            </div>

                                            {/* right */}
                                            <div className="flex items-center gap-3">

                                                <div className="text-right">

                                                    <p className="font-semibold">
                                                        $
                                                        {product.price.toFixed(
                                                            2
                                                        )}
                                                    </p>

                                                    <p className="text-xs text-gray-500">
                                                        {product.stock} in stock
                                                    </p>

                                                    <div className="mt-1">

                                                        {product.status ===
                                                            "Out of stock" ? (
                                                            <span className="rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                                                                Out of stock
                                                            </span>
                                                        ) : product.status ===
                                                            "Draft" ? (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-700 mt-1">
                                                                Draft
                                                            </span>
                                                        ) : (
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-700 mt-1">
                                                                Active
                                                            </span>
                                                        )}

                                                    </div>

                                                </div>

                                                {/* arrow */}
                                                <ChevronRight className="w-4 h-4 text-gray-300" />

                                            </div>

                                        </div>

                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    );
}